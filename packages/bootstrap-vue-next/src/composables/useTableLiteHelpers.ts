import {computed, inject, type MaybeRefOrGetter, ref, toRef, toValue, watch} from 'vue'
import {
  isTableField,
  isTableItem,
  type TableField,
  type TableFieldRaw,
  type TableItem,
} from '../types/TableTypes'
import {get} from '../utils/object'
import {getDataLabelAttr, type StackedProps} from '../utils/tableUtils'
import {startCase} from '../utils/stringUtils'
import {CODE_DOWN, CODE_END, CODE_HOME, CODE_UP} from '../utils/constants'
import {stopEvent} from '../utils/event'
import {tableKeyboardNavigationKey} from '../utils/keys'
import {filterEvent} from '../utils/filterEvent'

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
          return {
            ...(f as TableField),
            tdAttr: {...getDataLabelAttr(stacked, label), ...f.tdAttr},
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
  const fieldsTotal = computed(() => computedFields.value.items.length)
  const showHeaders = computed(() => {
    // We only hide the header if all fields have _noHeader set to true. Which would be our doing
    // This usually happens under a circumstance of displaying an array of primitives
    // Under any other circumstance, I'm not sure how this would apply
    if (fieldsTotal.value > 0 && computedFields.value.opts?.noHeader === true) return false
    return true
  })

  return {
    fieldsTotal,
    showHeaders,
    fields: computed(() => computedFields.value.items),
  }
}

export const useTableDetails = ({
  items,
  primaryKey,
}: {
  items: MaybeRefOrGetter<readonly unknown[]>
  primaryKey: MaybeRefOrGetter<string | undefined>
}) => {
  const pKey = toRef(primaryKey)

  const generateDetailsItem = (item: TableItem): [object | string, boolean | undefined] => {
    // Use primary key as the map key if available and the item has that key
    if (pKey.value && get(item, pKey.value) !== undefined) {
      return [String(get(item, pKey.value)), item._showDetails]
    }
    // Fall back to object reference
    return [item, item._showDetails]
  }

  // Use WeakMap when no primaryKey (for memory efficiency), Map when primaryKey is defined (to support strings)
  const detailsMap = ref<
    Map<object | string, boolean | undefined> | WeakMap<object, boolean | undefined>
  >(pKey.value ? new Map() : new WeakMap())
  // Watch for primaryKey changes and recreate the map
  watch(pKey, (newKey, oldKey) => {
    // If primaryKey changes, clear and recreate the map with the appropriate type
    if (newKey !== oldKey) {
      detailsMap.value = newKey ? new Map() : new WeakMap()
    }
  })

  watch(
    () => toValue(items),
    (items) => {
      items.forEach((item) => {
        if (!isTableItem(item)) return
        const [key, showDetails] = generateDetailsItem(item)
        // Only set if not already in map, or if _showDetails is explicitly set
        // This preserves toggled state when items are replaced with same primary key
        if (!hasDetailsValue(key) || showDetails !== undefined) {
          setDetailsValueByKey(key, showDetails)
        }
      })
    },
    {deep: true, immediate: true}
  )

  // Helper functions for type-safe map operations
  const hasDetailsValue = (key: object | string): boolean => {
    if (typeof key === 'string') {
      // When using string keys, we must be using a Map
      return (detailsMap.value as Map<object | string, boolean | undefined>).has(key)
    }
    // When using object keys, could be either Map or WeakMap
    return detailsMap.value.has(key)
  }

  const setDetailsValueByKey = (key: object | string, value: boolean | undefined): void => {
    if (typeof key === 'string') {
      // When using string keys, we must be using a Map
      ;(detailsMap.value as Map<object | string, boolean | undefined>).set(key, value)
    } else {
      // When using object keys, could be either Map or WeakMap
      detailsMap.value.set(key, value)
    }
  }

  const getDetailsMapKey = (item: object): object | string => {
    if (isTableItem(item) && pKey.value && get(item, pKey.value) !== undefined) {
      return String(get(item, pKey.value))
    }
    return item
  }

  const getDetailsValue = (item: object): boolean | undefined => {
    const key = getDetailsMapKey(item)
    if (typeof key === 'string') {
      // When using string keys, we must be using a Map
      return (detailsMap.value as Map<object | string, boolean | undefined>).get(key)
    }
    // When using object keys, could be either Map or WeakMap
    return detailsMap.value.get(key)
  }

  const setDetailsValue = (item: object, value: boolean | undefined): void => {
    const key = getDetailsMapKey(item)
    setDetailsValueByKey(key, value)
  }

  const toggleRowDetails = (tr: unknown) => {
    if (isTableItem(tr)) {
      const prevValue = getDetailsValue(tr)
      setDetailsValue(tr, !prevValue)
      tr._showDetails = !prevValue
    }
  }

  return {
    getDetailsValue,
    toggleRowDetails,
  }
}

export const useTableKeyboardNavigation = <Items>(
  {
    items,
    id,
  }: {
    items: MaybeRefOrGetter<readonly Items[]>
    id: MaybeRefOrGetter<string>
  },
  events: {
    onHeadClicked: (
      fieldKey: string,
      field: TableField<Items>,
      event: MouseEvent,
      isFooter: boolean
    ) => void
    onRowClicked: (item: Items, itemIndex: number, event: MouseEvent) => void
    onRowMiddleClicked: (item: Items, itemIndex: number, event: MouseEvent) => void
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

  const headerClicked = (field: TableField, event: Readonly<MouseEvent>, isFooter = false) => {
    events.onHeadClicked(field.key as string, field, event, isFooter)
  }

  const handleHeaderKeydown = (field: TableField, event: KeyboardEvent, isFooter = false) => {
    const {target, code} = event

    if (target && (target as Element).tagName !== 'TH' && document.activeElement === target) return

    if (code === 'Enter' || code === 'NumpadEnter' || code === 'Space') {
      stopEvent(event)
      headerClicked(field, event as unknown as MouseEvent, isFooter)
    }
  }

  const handleRowKeydown = (item: Items, itemIndex: number, event: KeyboardEvent) => {
    const {target, code, shiftKey} = event

    if (target && (target as Element).tagName !== 'TR' && document.activeElement === target) return

    if (code === 'Enter' || code === 'NumpadEnter' || code === 'Space') {
      stopEvent(event)
      events.onRowClicked(item, itemIndex, event as unknown as MouseEvent)
      return
    }

    if (code === CODE_DOWN || code === CODE_UP || code === CODE_HOME || code === CODE_END) {
      stopEvent(event)
      handleRowNavigation(code, shiftKey, itemIndex)
    }
  }

  const handleRowNavigation = (code: string, shiftKey: boolean, currentIndex: number) => {
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

  const handleMiddleClick = (item: Items, itemIndex: number, event: MouseEvent) => {
    if (event.button === 1 && !filterEvent(event)) {
      events.onRowMiddleClicked(item, itemIndex, event)
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
