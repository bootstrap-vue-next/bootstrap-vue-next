import {
  computed,
  type MaybeRef,
  type MaybeRefOrGetter,
  onMounted,
  provide,
  readonly,
  type Ref,
  toRef,
  toValue,
  unref,
  watch,
} from 'vue'
import {tableKeyboardNavigationKey} from '../utils/keys'
import type {
  BTableInitialSortDirection,
  BTableProvider,
  BTableSortBy,
  TableField,
  TableFieldFormatter,
  TableFieldRaw,
} from '../types'
import {
  type BTableFilterFunction,
  type BTableSelectMode,
  type BTableSortByComparerFunction,
  type BTableSortByOrder,
  isTableField,
  isTableItem,
  type NoProviderTypes,
  type TablePrimaryKey,
  type TableSelectedReturn,
} from '../types/TableTypes'
import {deepEqual, set} from '../utils/object'
import {startCase} from '../utils/stringUtils'
import {formatItem, getDataLabelAttr, getWithGetter, type StackedProps} from '../utils/tableUtils'
import {useDebounceFn} from '../utils/debounce'
import {useItemTracker} from './useTableLiteHelpers'

export const useTableMapper = <Item>({
  fields,
  items,
  stackedProps,
  provider,
  events,
  pagination,
}: {
  items: MaybeRefOrGetter<readonly Item[]>
  fields: MaybeRefOrGetter<readonly TableFieldRaw<Item>[]>
  stackedProps: {
    stacked: MaybeRefOrGetter<StackedProps['stacked']>
    labelStacked: MaybeRefOrGetter<StackedProps['labelStacked']>
  }
  pagination: {
    perPage: MaybeRefOrGetter<number>
    currentPage: MaybeRefOrGetter<number>
    sort: {
      iconLeft: MaybeRefOrGetter<boolean>
      isSortable: MaybeRefOrGetter<boolean>
      sortCompare: MaybeRef<BTableSortByComparerFunction<Item> | undefined>
      by: MaybeRefOrGetter<readonly BTableSortBy[] | undefined>
      noLocalSorting: MaybeRefOrGetter<boolean>
    }
    filter: {
      filterFunction: MaybeRef<BTableFilterFunction<Item> | undefined>
      filter: MaybeRefOrGetter<string | undefined>
      filterable: MaybeRefOrGetter<readonly string[] | undefined>
    }
  }
  provider: {
    noProviderSorting: MaybeRefOrGetter<boolean>
    noProviderPaging: MaybeRefOrGetter<boolean>
    noProviderFiltering: MaybeRefOrGetter<boolean>
    usesProvider: MaybeRefOrGetter<boolean>
  }
  events: {
    onChange: (items: readonly Item[]) => void
  }
}) => {
  const sortByModelResolved = readonly(toRef(pagination.sort.by))
  const isSortableResolved = readonly(toRef(pagination.sort.isSortable))
  const filterResolved = readonly(toRef(pagination.filter.filter))
  const usesProviderResolved = readonly(toRef(provider.usesProvider))

  const isFilterableTable = computed(() => filterResolved.value !== undefined)

  const computedFields = computed<TableField<Item>[]>(() =>
    toValue(fields).map((el) => {
      if (!isTableField(el)) {
        const label = startCase(el as string)
        return {
          key: el as string,
          label,
          tdAttr: getDataLabelAttr(
            {
              stacked: toValue(stackedProps.stacked),
              labelStacked: toValue(stackedProps.labelStacked),
            },
            label
          ),
        }
      }

      const value = sortByModelResolved.value?.find((sb) => el.key === sb.key)
      const sortValue =
        !el.sortable || isSortableResolved.value === false
          ? undefined
          : value === undefined
            ? 'none'
            : value.order === 'desc'
              ? 'descending'
              : value.order === 'asc'
                ? 'ascending'
                : 'none'

      return {
        ...(el as TableField<Item>),
        thAttr: {
          'aria-sort': sortValue,
          ...el.thAttr,
        },
        thClass: [
          el.thClass,
          {
            'b-table-sort-icon-left': toValue(pagination.sort.iconLeft) && sortValue !== undefined,
          },
        ],
      }
    })
  )

  const getFormatter = (value: TableField<Item>): TableFieldFormatter<Item> | undefined =>
    typeof value.sortByFormatted === 'function' ? value.sortByFormatted : value.formatter

  const getStringValue = (ob: Item, key: string): string => {
    if (!isTableItem(ob)) return String(ob)

    const sortField = computedFields.value.find((el) => {
      if (isTableField(el)) return el.key === key

      return false
    })
    const val = getWithGetter(ob, key)
    if (isTableField(sortField) && !!sortField.sortByFormatted) {
      const formatter = getFormatter(sortField)
      if (formatter) {
        return String(formatItem(ob, {...sortField, formatter}))
      }
    }
    return typeof val === 'object' && val !== null ? JSON.stringify(val) : (val?.toString() ?? '')
  }

  const fieldByKey = computed(() => {
    const map = new Map<string | number | symbol, TableField<Item>>()
    for (const f of computedFields.value) if (isTableField(f)) map.set(f.key, f)
    return map
  })

  const computedItems = computed<Item[]>(() => {
    const filterableValue = toValue(pagination.filter.filterable)
    const filterFunctionValue = unref(pagination.filter.filterFunction)
    const itemsValue = toValue(items)

    const sortByItems = sortByModelResolved.value?.filter((el) => !!el.order)

    const mapItem = (item: Item): Item => {
      if (
        typeof item === 'object' &&
        item !== null &&
        Object.keys(item).some((key) => key.includes('.'))
      ) {
        let newItem: Partial<Item> = {}
        for (const key in item) {
          if (key.includes('.')) {
            newItem = set(newItem, key, item[key])
          } else {
            newItem[key] = item[key]
          }
        }
        return newItem as Item // This should be an items at this point
      }
      return item
    }

    const filterItem = (item: Item): boolean => {
      if (!isTableItem(item)) return true

      return Object.entries(item).some(([key, val]) => {
        if (
          val === null ||
          val === undefined ||
          key[0] === '_' ||
          (!filterableValue?.includes(key) && !!filterableValue?.length)
        )
          return false

        if (typeof filterFunctionValue === 'function') {
          return filterFunctionValue(item, filterResolved.value)
        }

        const realVal = (): string => {
          const filterField = computedFields.value.find((el) => {
            if (isTableField(el)) return el.key === key
            return false
          })
          if (isTableField(filterField) && !!filterField.filterByFormatted) {
            const formatter = getFormatter(filterField)
            if (formatter) {
              return String(formatter({value: val, key: String(filterField.key), item}))
            }
          }
          return typeof val === 'object' ? JSON.stringify(Object.values(val)) : val.toString()
        }
        const itemValue: string = realVal()
        return itemValue.toLowerCase().includes(filterResolved.value?.toLowerCase() ?? '')
      })
    }
    const noProviderFilteringValue = toValue(provider.noProviderFiltering)

    const mappedItems = itemsValue.reduce(
      (acc, val) => {
        const item = mapItem(val)
        const shouldFilter =
          isFilterableTable.value && (!usesProviderResolved.value || noProviderFilteringValue)

        if (!shouldFilter || filterItem(item)) acc.push(item)

        return acc
      },
      [] as Item[]
    )

    if (
      sortByItems?.length &&
      ((isSortableResolved.value === true &&
        !usesProviderResolved.value &&
        !toValue(pagination.sort.noLocalSorting)) ||
        (isSortableResolved.value === true &&
          usesProviderResolved.value &&
          toValue(provider.noProviderSorting)))
    ) {
      const sortCompareValue = unref(pagination.sort.sortCompare)
      // Multi-sort
      return mappedItems.sort((a, b) => {
        for (let i = 0; i < sortByItems.length; i++) {
          const {key, order} = sortByItems[i]
          const field = fieldByKey.value.get(key)
          const comparer = field?.sortCompare || sortCompareValue
          const comparison = comparer
            ? comparer(a, b, key)
            : getStringValue(a, key).localeCompare(getStringValue(b, key), undefined, {
                numeric: true,
              })

          if (comparison !== 0) {
            return order === 'asc' ? comparison : -comparison
          }
        }
        return 0 // items are equal
      })
    }

    return mappedItems
  })

  const computedDisplayItems = computed<Item[]>(() => {
    const perPageNumber = toValue(pagination.perPage)
    const currentPageNumber = toValue(pagination.currentPage)
    if (
      Number.isNaN(perPageNumber) ||
      (usesProviderResolved.value && !toValue(provider.noProviderPaging))
    ) {
      return computedItems.value
    }

    return computedItems.value.slice(
      (currentPageNumber - 1) * (perPageNumber || Number.POSITIVE_INFINITY),
      currentPageNumber * (perPageNumber || Number.POSITIVE_INFINITY)
    )
  })

  watch(computedDisplayItems, (v) => {
    events.onChange([...v])
  })

  return {
    items: computedItems,
    displayItems: computedDisplayItems,
    getStringValue,
    fields: computedFields,
    isFilterableTable,
  }
}

export const useTableKeyboardNavigationInjector = ({
  isSortable,
  selectable,
  noSelectOnClick,
}: {
  selectable: MaybeRefOrGetter<boolean>
  noSelectOnClick: MaybeRefOrGetter<boolean>
  isSortable: MaybeRefOrGetter<boolean>
}) => {
  // Provide keyboard navigation state to child components
  const keyboardRowNavigation = computed(() => !!(toValue(selectable) && !toValue(noSelectOnClick)))
  const keyboardHeaderNavigation = computed(() => !!toValue(isSortable))

  provide(tableKeyboardNavigationKey, {
    rowNavigation: keyboardRowNavigation,
    headerNavigation: keyboardHeaderNavigation,
  })
}

export const useTableSelectedItems = <Item>({
  selectable,
  selectMode,
  selectedItems,
  events,
  primaryKey,
  allItems,
}: {
  allItems: MaybeRefOrGetter<readonly Item[]>
  selectable: MaybeRefOrGetter<boolean>
  selectMode: MaybeRefOrGetter<BTableSelectMode>
  primaryKey: MaybeRef<TablePrimaryKey<Item> | undefined>
  selectedItems: Ref<readonly unknown[]>
  events: {
    onRowSelected: (item: unknown) => void
    onRowUnselected: (item: unknown) => void
  }
}): TableSelectedReturn<Item> => {
  const selectableResolved = readonly(toRef(selectable))
  const selectModeResolved = readonly(toRef(selectMode))
  // Using readonly(toRef) doesn't work here because of its proxification
  // It breaks equality checks
  const allItemsResolved = computed(() => toValue(allItems))

  const utils = useItemTracker({
    allItems: allItemsResolved,
    primaryKey,
    selectedItems,
  })

  watch(selectedItems, (newValue, oldValue) => {
    Array.from(oldValue)
      .filter((item) => !newValue.includes(item))
      .forEach((item) => {
        events.onRowUnselected(item)
      })
    Array.from(newValue)
      .filter((item) => !oldValue.includes(item))
      .forEach((item) => {
        events.onRowSelected(item)
      })
  })

  const handleRowSelection = ({
    item,
    index,
    shiftClicked = false,
    ctrlClicked = false,
    metaClicked = false,
  }: {
    item: Item
    index: number
    shiftClicked?: boolean
    ctrlClicked?: boolean
    metaClicked?: boolean
  }) => {
    if (!selectableResolved.value) return

    if (selectModeResolved.value === 'single' || selectModeResolved.value === 'multi') {
      // Do nothing when these items are held
      if (shiftClicked || ctrlClicked) return
      // Delete if item is in
      if (utils.has(item)) {
        utils.remove(item)
      } else {
        if (selectModeResolved.value === 'single') {
          utils.set([item])
        } else {
          utils.add(item)
        }
      }
    } else {
      if (ctrlClicked || metaClicked) {
        // Delete if in the object
        if (utils.has(item)) {
          utils.remove(item)
          // Otherwise add. Functions similarly to 'multi' at this point
        } else {
          utils.add(item)
        }
        // This is where range is different, due to the difference in shift
      } else if (shiftClicked) {
        const lastSelectedItem = selectedItems.value[selectedItems.value.length - 1]
        const lastSelectedIndex = allItemsResolved.value.findIndex(
          (i) => utils.get(i) === lastSelectedItem
        )
        if (lastSelectedIndex === -1) {
          utils.set([item])
          return
        }
        const selectStartIndex = Math.min(lastSelectedIndex, index)
        const selectEndIndex = Math.max(lastSelectedIndex, index)
        const items = allItemsResolved.value.slice(selectStartIndex, selectEndIndex + 1)
        utils.set(items)
        // If nothing is being held, then we just behave like it's single mode
      } else {
        utils.set([item])
      }
    }
  }

  return {
    ...utils,
    handleRowSelection,
    clear: () => {
      if (!selectableResolved.value) return

      utils.clear()
    },
    setAll: () => {
      if (!selectableResolved.value || selectModeResolved.value === 'single') return

      utils.setAll()
    },
    add: (item: Item) => {
      if (!selectableResolved.value || utils.has(item)) return

      if (selectModeResolved.value === 'single') {
        utils.set([item])
      } else {
        utils.add(item)
      }
    },
    remove: (item: Item) => {
      if (!selectableResolved.value) return

      utils.remove(item)
    },
    has: (item: Item) => {
      if (!selectableResolved.value) return false

      return utils.has(item)
    },
  }
}

export const useTableProvider = <Item>({
  items,
  provider,
  busy,
  currentPage,
  debounce,
  perPage,
  noProvider,
  noProviderFiltering,
  noProviderPaging,
  noProviderSorting,
  filter,
  sortBy,
  events,
}: {
  items: Ref<readonly Item[]>
  sortBy: MaybeRefOrGetter<readonly BTableSortBy[] | undefined>
  currentPage: MaybeRefOrGetter<number>
  perPage: MaybeRefOrGetter<number>
  filter: MaybeRefOrGetter<string | undefined>
  busy: Ref<boolean>
  provider: MaybeRef<BTableProvider<Item> | undefined>
  debounce: {
    wait: MaybeRefOrGetter<number>
    maxWait: MaybeRefOrGetter<number>
  }
  noProvider: MaybeRefOrGetter<readonly NoProviderTypes[] | undefined>
  noProviderPaging: MaybeRefOrGetter<boolean>
  noProviderSorting: MaybeRefOrGetter<boolean>
  noProviderFiltering: MaybeRefOrGetter<boolean>
  events: {
    onFiltered: () => void
  }
}) => {
  const providerResolved = readonly(toRef(provider))
  const currentPageResolved = readonly(toRef(currentPage))
  const perPageResolved = readonly(toRef(perPage))
  const sortByResolved = readonly(toRef(sortBy))
  const filterResolved = readonly(toRef(filter))

  const usesProvider = computed(() => providerResolved.value !== undefined)

  // AbortController for canceling previous provider requests
  let abortController: AbortController | null = null

  const callItemsProvider = async () => {
    if (!usesProvider.value || providerResolved.value === undefined) return

    // Cancel any previous request
    if (abortController) {
      abortController.abort()
    }

    // Create a new AbortController for this request
    abortController = new AbortController()
    const {signal} = abortController

    busy.value = true
    try {
      const response = providerResolved.value({
        currentPage: currentPageResolved.value,
        filter: filterResolved.value,
        sortBy: sortByResolved.value,
        perPage: perPageResolved.value,
        signal,
      })
      const returnValue = response instanceof Promise ? await response : response

      // Check if this request was aborted
      if (signal.aborted) return

      if (returnValue === undefined) return
      items.value = returnValue
    } catch (error) {
      // Ignore AbortError, re-throw others
      if (error instanceof Error && error.name === 'AbortError') return
      throw error
    } finally {
      // Only set busy to false if this request wasn't aborted (to avoid race condition)
      if (!signal.aborted) {
        busy.value = false
      }
    }
  }

  // Debounced version of callItemsProvider for filter changes to prevent rapid successive calls
  const debouncedCallItemsProvider = useDebounceFn(callItemsProvider, debounce.wait, {
    maxWait: debounce.maxWait,
  })

  const providerPropsWatch = async (prop: string, val: unknown, oldVal: unknown) => {
    if (deepEqual(val, oldVal)) return

    //stop provide when paging
    const inNoProvider = (key: NoProviderTypes) => toValue(noProvider)?.includes(key) === true
    const noProvideWhenPaging =
      (prop === 'currentPage' || prop === 'perPage') &&
      (inNoProvider('paging') || toValue(noProviderPaging) === true)
    const noProvideWhenFiltering =
      prop === 'filter' && (inNoProvider('filtering') || toValue(noProviderFiltering) === true)
    const noProvideWhenSorting =
      (prop === 'sortBy' || prop === 'sortDesc') &&
      (inNoProvider('sorting') || toValue(noProviderSorting) === true)

    if (noProvideWhenPaging || noProvideWhenFiltering || noProvideWhenSorting) return

    if (usesProvider.value === true) {
      // Always use debounced version (when debounce is 0, it's immediate)
      await debouncedCallItemsProvider()
    }

    if (!(prop === 'currentPage' || prop === 'perPage')) {
      events.onFiltered()
    }
  }

  watch(filterResolved, (filter, oldFilter) => {
    providerPropsWatch('filter', filter, oldFilter)

    if (filter === oldFilter || usesProvider.value) return
    if (!filter) {
      events.onFiltered()
    }
  })
  watch(currentPageResolved, (val, oldVal) => {
    providerPropsWatch('currentPage', val, oldVal)
  })
  watch(perPageResolved, (val, oldVal) => {
    providerPropsWatch('perPage', val, oldVal)
  })
  watch(
    sortByResolved,
    (val, oldVal) => {
      providerPropsWatch('sortBy', val, oldVal)
    },
    {deep: true}
  )

  watch(providerResolved, (newValue) => {
    // Reset the internal values if the provider stops getting used
    if (newValue === undefined) {
      items.value = []
      return
    }
    // Otherwise we should refresh the table on such a change
    callItemsProvider()
  })

  onMounted(callItemsProvider)

  return {
    items: readonly(items),
    usesProvider,
    callItemsProvider,
  }
}

export const useTableSort = <Item>({
  fields,
  sortBy,
  initialSortDirection,
  multisort,
  mustSort,
  events,
}: {
  fields: MaybeRefOrGetter<readonly TableFieldRaw<Item>[]>
  sortBy: Ref<readonly BTableSortBy[] | undefined>
  initialSortDirection: MaybeRefOrGetter<BTableInitialSortDirection>
  mustSort: MaybeRefOrGetter<boolean | readonly string[]>
  multisort: MaybeRefOrGetter<boolean>
  events: {
    onSorted: (sortBy: BTableSortBy) => void
  }
}) => {
  const isSortable = computed(
    () =>
      sortBy.value !== undefined ||
      toValue(fields).some(
        (field) => typeof field === 'object' && field !== null && field.sortable === true
      )
  )

  const handleFieldSorting = (field: TableField<Item>) => {
    if (!isSortable.value) return

    const fieldKey = typeof field === 'object' && field !== null ? field.key : field
    const fieldSortable = typeof field === 'object' && field !== null ? field.sortable : false

    if (!(isSortable.value === true && fieldSortable === true)) return

    // Get the last sorted direction from the current sort model (last entry with a defined order)
    //   Exclude the current column if it's already in the sortBy array
    const getLastSortDirection = (): BTableSortByOrder => {
      const lastSorted = [...(sortBy.value ?? [])]
        .reverse()
        .find((sort) => sort.order !== undefined && sort.key !== fieldKey)
      return lastSorted?.order ?? 'asc'
    }

    // Determine initial sort direction for new sorts
    const getInitialSortDirection = (): BTableSortByOrder => {
      // Handle field-level prop
      if (typeof field === 'object' && field !== null && field.initialSortDirection) {
        if (field.initialSortDirection === 'last') {
          return getLastSortDirection()
        }
        return field.initialSortDirection
      }
      const initialSortDirectionValue = toValue(initialSortDirection)
      // Handle table-level prop
      if (initialSortDirectionValue) {
        if (initialSortDirectionValue === 'last') {
          return getLastSortDirection()
        }
        return initialSortDirectionValue
      }
      return 'asc'
    }

    const resolveOrder = (val: BTableSortByOrder | undefined): BTableSortByOrder | undefined => {
      const mustSortValue = toValue(mustSort)
      // New sort: honor the configured initial direction
      if (val === undefined) return getInitialSortDirection()
      // Determine initial direction for this field
      const initial = getInitialSortDirection()
      const must =
        mustSortValue === true || (!!mustSortValue && mustSortValue.includes(fieldKey as string))
      if (val === 'asc') {
        if (initial === 'desc') {
          // If mustSort, cycle asc -> desc, else asc -> undefined
          return must ? 'desc' : undefined
        }
        // If initial is asc, cycle asc -> desc -> undefined (or asc if mustSort)
        return 'desc'
      }
      if (val === 'desc') {
        if (initial === 'desc') {
          return 'asc'
        }
        // If mustSort, cycle desc -> asc, else desc -> undefined
        return must ? 'asc' : undefined
      }
      return undefined
    }

    const index = sortBy.value?.findIndex((el) => el.key === fieldKey) ?? -1
    const originalValue = sortBy.value?.[index]
    const updatedValue: BTableSortBy =
      // If value is new, we use the field's initialSortDirection or default to ascending
      // Otherwise we make a temp copy of the value
      index === -1 || !originalValue
        ? {key: fieldKey as string, order: getInitialSortDirection()}
        : {...originalValue}

    /**
     * @returns the updated value to emit for sorted
     */
    const handleMultiSort = (): BTableSortBy => {
      const tmp = [...(sortBy.value ?? [])]
      const val = updatedValue
      if (index === -1) {
        tmp.push(val)
      } else {
        const order = resolveOrder(val.order)
        if (order) {
          val.order = order
          tmp.splice(index, 1, val)
        } else {
          // Remove the value from the array and emit cleared sort for this key
          val.order = undefined
          tmp.splice(index, 1)
        }
      }
      sortBy.value = tmp
      return val
    }

    /**
     * @returns the updated value to emit for sorted
     */
    const handleSingleSort = (): BTableSortBy => {
      const order = index === -1 ? updatedValue.order : resolveOrder(updatedValue.order)
      const val = {
        ...updatedValue,
        order,
      }
      sortBy.value = order ? [val] : []
      return val
    }

    // Then emit the returned updated value
    events.onSorted(toValue(multisort) === true ? handleMultiSort() : handleSingleSort())
    // emit('sorted', toValue(multisort) === true ? handleMultiSort() : handleSingleSort())
  }

  return {
    isSortable,
    handleFieldSorting,
  }
}
