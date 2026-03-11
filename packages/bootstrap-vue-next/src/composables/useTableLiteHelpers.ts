import {
  computed,
  inject,
  type MaybeRef,
  type MaybeRefOrGetter,
  readonly,
  type Ref,
  toRef,
  toValue,
  watch,
} from 'vue'
import {
  isTableField,
  isTableItem,
  type ItemTrackerReturn,
  type TableDetailsReturn,
  type TableField,
  type TableFieldRaw,
  type TableHeadClickedEventObject,
  type TablePrimaryKey,
  type TableRowEventObject,
} from '../types/TableTypes'
import {getDataLabelAttr, getWithGetter, type StackedProps} from '../utils/tableUtils'
import {startCase} from '../utils/stringUtils'
import {CODE_DOWN, CODE_END, CODE_HOME, CODE_UP} from '../utils/constants'
import {stopEvent} from '../utils/event'
import {tableKeyboardNavigationKey} from '../utils/keys'
import {filterEvent} from '../utils/filterEvent'
import type {AttrsValue} from '../types/AnyValuedAttributes'

export const useTableFieldsMapper = <Item>({
  fields,
  items,
  stackedProps,
}: {
  fields: MaybeRefOrGetter<readonly TableFieldRaw<Item>[]>
  items: MaybeRefOrGetter<readonly Item[]>
  stackedProps: {
    stacked: MaybeRefOrGetter<StackedProps['stacked']>
    labelStacked: MaybeRefOrGetter<StackedProps['labelStacked']>
  }
}) => {
  const computedFields = computed<{
    items: TableField[]
    opts?: {noHeader: boolean}
  }>(() => {
    const fieldsValue = toValue(fields)
    const itemsValue = toValue(items)
    const stacked = {
      stacked: toValue(stackedProps.stacked),
      labelStacked: toValue(stackedProps.labelStacked),
    }

    if (!fieldsValue.length && itemsValue.length) {
      const [firstItem] = itemsValue
      if (firstItem && (isTableItem(firstItem) || Array.isArray(firstItem))) {
        return {
          items: Object.keys(firstItem).map((k) => {
            const label = startCase(k)
            return {
              key: k,
              label,
              tdAttr: getDataLabelAttr(stacked, label),
            }
          }),
        }
      }
      // The items are primitives, so we just return a single empty field
      // No header will be shown, as we don't know what to show
      return {items: [{key: ''}], opts: {noHeader: true}}
    }

    return {
      items: fieldsValue.map((f) => {
        if (isTableField(f)) {
          const label = f.label ?? startCase(f.key as string)
          const dataLabelAttr = getDataLabelAttr(stacked, label)
          const tdAttr =
            typeof f.tdAttr === 'function'
              ? (obj: unknown) => ({
                  ...dataLabelAttr,
                  ...(f.tdAttr as (obj: unknown) => AttrsValue)(obj),
                })
              : dataLabelAttr || f.tdAttr
                ? {...dataLabelAttr, ...f.tdAttr}
                : undefined
          return {
            ...(f as TableField),
            tdAttr,
          }
        }
        const label = startCase(f as string)
        return {
          key: f as string,
          label,
          tdAttr: getDataLabelAttr(stacked, label),
        }
      }),
    }
  })
  const total = computed(() => computedFields.value.items.length)
  const showHeaders = computed(
    () =>
      // We only hide the header if all fields have _noHeader set to true. Which would be our doing
      // This usually happens under a circumstance of displaying an array of primitives
      // Under any other circumstance, I'm not sure how this would apply
      !(total.value > 0 && computedFields.value.opts?.noHeader === true)
  )

  return {
    total,
    showHeaders,
    fields: computed(() => computedFields.value.items),
  }
}

export const useItemTracker = <Item>({
  allItems,
  selectedItems,
  primaryKey,
}: {
  allItems: MaybeRefOrGetter<readonly Item[]>
  selectedItems: Ref<readonly unknown[]>
  primaryKey?: MaybeRef<TablePrimaryKey<Item> | undefined>
}): ItemTrackerReturn<Item> => {
  const isActivated = computed(() => selectedItems.value.length > 0)
  const pKey = readonly(toRef(primaryKey))

  const get = (item: Item) => {
    if (typeof item === 'object' && item !== null && pKey.value) {
      return getWithGetter(item, pKey.value)
    }
    return item
  }

  const add = (item: Item) => {
    const value = get(item)

    selectedItems.value = [...selectedItems.value, value]
  }
  const set = (items: readonly Item[]) => {
    selectedItems.value = pKey.value ? items.map(get) : items
  }
  const setAll = () => set([...toValue(allItems)])
  const remove = (item: Item) => {
    const value = get(item)

    selectedItems.value = selectedItems.value.filter((i) => i !== value)
  }
  const clear = () => {
    selectedItems.value = []
  }

  const has = (item: Item) => {
    const value = get(item)

    return selectedItems.value.includes(value)
  }

  watch(pKey, () => {
    // Clear selected items if primary key changes
    clear()
  })

  const objectsMap = computed(() => {
    if (!pKey.value) return new Map()

    return new Map<unknown, Item>(toValue(allItems).map((item) => [get(item), item]))
  })
  const getFromPrimaryKey = (value: unknown): Item | undefined => {
    if (!pKey.value) return undefined

    return objectsMap.value.get(value)
  }
  const resolvedItems = computed(() => {
    if (!pKey.value) return selectedItems.value

    const arr: unknown[] = []
    selectedItems.value.forEach((item) => {
      const resolved = getFromPrimaryKey(item)
      if (resolved !== undefined) {
        arr.push(resolved)
      }
    })
    return arr
  })

  return {
    getFromPrimaryKey,
    resolvedItems,
    isActivated,
    get,
    add,
    remove,
    clear,
    set,
    has,
    setAll,
  }
}

export const useItemExpansion = <Item>({
  allItems,
  primaryKey,
  expandedItems,
}: {
  allItems: MaybeRefOrGetter<readonly Item[]>
  primaryKey: MaybeRef<TablePrimaryKey<Item> | undefined>
  expandedItems: Ref<readonly unknown[]>
}): TableDetailsReturn<Item> => {
  const utils = useItemTracker({
    primaryKey,
    allItems,
    selectedItems: expandedItems,
  })

  const toggle = (item: Item) => {
    if (utils.has(item)) {
      utils.remove(item)
    } else {
      utils.add(item)
    }
  }

  return {
    ...utils,
    toggle,
  }
}

export const useTableKeyboardNavigation = <Item>(
  {
    items,
    id,
  }: {
    items: MaybeRefOrGetter<readonly Item[]>
    id: MaybeRefOrGetter<string>
  },
  events: {
    onHeadClicked: (
      obj: TableHeadClickedEventObject<Item, Readonly<KeyboardEvent> | Readonly<MouseEvent>>
    ) => void
    onRowClicked: (
      obj: TableRowEventObject<Item, Readonly<KeyboardEvent> | Readonly<MouseEvent>>
    ) => void
    onRowMiddleClicked: (obj: TableRowEventObject<Item>) => void
  }
) => {
  // Inject keyboard navigation state from parent BTable
  const keyboardNavigation = inject(tableKeyboardNavigationKey, null)
  // Keyboard navigation support
  const shouldHeaderBeFocusable = (field: TableField) =>
    !!(keyboardNavigation?.headerNavigation.value && field.sortable === true)

  const shouldRowBeFocusable = computed(
    () => !!(keyboardNavigation?.rowNavigation.value && toValue(items).length > 0)
  )

  const headerClicked = (
    field: TableField,
    event: Readonly<MouseEvent> | Readonly<KeyboardEvent>,
    isFooter = false
  ) => {
    events.onHeadClicked({key: field.key as string, field, event, isFooter})
  }

  const handleHeaderKeydown = (field: TableField, event: KeyboardEvent, isFooter = false) => {
    const {target, code} = event

    if (
      target &&
      (target as Element).tagName !== 'TH' &&
      typeof document !== 'undefined' &&
      document.activeElement === target
    )
      return

    if (code === 'Enter' || code === 'NumpadEnter' || code === 'Space') {
      stopEvent(event)
      headerClicked(field, event, isFooter)
    }
  }

  const handleRowKeydown = (item: Item, itemIndex: number, event: KeyboardEvent) => {
    const {target, code, shiftKey} = event

    if (
      target &&
      (target as Element).tagName !== 'TR' &&
      typeof document !== 'undefined' &&
      document.activeElement === target
    )
      return

    if (code === 'Enter' || code === 'NumpadEnter' || code === 'Space') {
      stopEvent(event)
      events.onRowClicked({item, index: itemIndex, event})
      return
    }

    if (code === CODE_DOWN || code === CODE_UP || code === CODE_HOME || code === CODE_END) {
      stopEvent(event)
      handleRowNavigation(code, shiftKey, itemIndex)
    }
  }

  const handleRowNavigation = (code: string, shiftKey: boolean, currentIndex: number) => {
    if (typeof document === 'undefined') return
    const rows = Array.from(
      document.querySelectorAll(`#${toValue(id)} tbody tr[tabindex]`)
    ) as HTMLTableRowElement[]

    if (rows.length === 0) return

    let targetIndex = currentIndex

    if (code === CODE_DOWN) {
      if (shiftKey) {
        targetIndex = rows.length - 1 // Go to last row
      } else {
        targetIndex = Math.min(currentIndex + 1, rows.length - 1) // Go to next row
      }
    } else if (code === CODE_UP) {
      if (shiftKey) {
        targetIndex = 0 // Go to first row
      } else {
        targetIndex = Math.max(currentIndex - 1, 0) // Go to previous row
      }
    } else if (code === CODE_END) {
      targetIndex = rows.length - 1 // Go to last row
    } else if (code === CODE_HOME) {
      targetIndex = 0 // Go to first row
    }

    if (targetIndex !== currentIndex && rows[targetIndex]) {
      rows[targetIndex].focus()
    }
  }

  const handleMiddleClick = (item: Item, itemIndex: number, event: MouseEvent) => {
    if (event.button === 1 && !filterEvent(event)) {
      events.onRowMiddleClicked({item, index: itemIndex, event})
    }
  }

  return {
    shouldHeaderBeFocusable,
    headerClicked,
    handleHeaderKeydown,
    shouldRowBeFocusable,
    handleRowKeydown,
    handleMiddleClick,
  }
}
