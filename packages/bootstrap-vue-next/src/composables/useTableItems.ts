import {computed, ref, type Ref} from 'vue'
import type {Booleanish, BTableSortCompare, TableField, TableItem} from '../types'

type TableItemsProcessingProps = {
  items?: TableItem[]
  fields?: TableField[]
  perPage?: number
  currentPage?: number
  filter?: string
  filterable?: string[]
  sortBy?: string
  sortDesc?: Booleanish
  sortCompare?: BTableSortCompare
}

const sortItems = (
  fields?: TableField[],
  items?: TableItem<Record<string, any>>[],
  sortBy?: string,
  sortDesc?: boolean,
  sorter?: BTableSortCompare
) => {
  if (fields === undefined || items === undefined || sortBy === undefined || sortDesc === undefined)
    return items ?? []
  const sortKey = sortBy
  return items.sort((a, b) => {
    if (sorter !== undefined) {
      return sorter(a, b, sortBy, sortDesc)
    }
    const realVal = (ob: any) => (typeof ob === 'object' ? JSON.stringify(ob) : ob)
    const aHigher = realVal(a[sortKey]) > realVal(b[sortKey])
    if (aHigher) {
      return sortDesc ? -1 : 1
    }
    const bHigher = realVal(b[sortKey]) > realVal(a[sortKey])
    if (bHigher) {
      return sortDesc ? 1 : -1
    }
    return 0
  })
}

const filterItems = (
  items: TableItem<Record<string, any>>[],
  filter: string,
  filterable?: string[]
) =>
  items.filter(
    (item) =>
      Object.entries(item).filter((item) => {
        const [key, val] = item
        if (
          !val ||
          key[0] === '_' ||
          (filterable && filterable.length > 0 && !filterable.includes(key))
        )
          return false
        const itemValue: string =
          typeof val === 'object'
            ? JSON.stringify(Object.values(val))
            : typeof val === 'string'
            ? val
            : val.toString()
        return itemValue.toLowerCase().includes(filter.toLowerCase())
      }).length > 0
  )

const mapItems = (
  items: Ref<TableItem[]>,
  props: TableItemsProcessingProps,
  flags: Record<string, Ref<boolean>>,
  sortBy?: Ref<string | undefined>
): TableItem[] => {
  let mappedItems: TableItem[] = items.value

  if ('isFilterableTable' in flags && flags.isFilterableTable.value === true && props.filter) {
    mappedItems = filterItems(mappedItems, props.filter, props.filterable)
  }

  if ('isSortable' in flags && flags.isSortable.value === true) {
    mappedItems = sortItems(
      props.fields,
      mappedItems,
      sortBy?.value,
      flags.sortDescBoolean.value,
      props.sortCompare
    )
  }

  return mappedItems
}

const useTableItems = (
  tableProps: TableItemsProcessingProps,
  flags: Record<string, Ref<boolean>>,
  usesProvider: Ref<boolean>,
  sortBy?: Ref<string | undefined>
) => {
  const filteredHandler = ref<(items: TableItem[]) => void>()
  const internalItems = ref(tableProps.items ?? [])
  const displayStartEndIdx = ref([0, internalItems.value.length])
  const computedItems = computed<TableItem[]>(() => {
    const items = usesProvider.value
      ? internalItems.value
      : flags.requireItemsMapping.value
      ? mapItems(internalItems, tableProps, flags, sortBy)
      : tableProps.items ?? []
    if (usesProvider.value && !flags.noProviderPagingBoolean.value) {
      return items
    }

    if (tableProps.perPage !== undefined) {
      const startIndex = ((tableProps.currentPage ?? 0) - 1) * tableProps.perPage
      const endIndex =
        startIndex + tableProps.perPage > items.length
          ? items.length
          : startIndex + tableProps.perPage
      displayStartEndIdx.value = [startIndex, endIndex]
    }

    return items
  })

  const computedDisplayItems = computed<TableItem[]>(() => {
    if (tableProps.perPage === undefined) {
      return computedItems.value
    }
    return computedItems.value.slice(displayStartEndIdx.value[0], displayStartEndIdx.value[1])
  })

  const updateInternalItems = async (
    items: TableItem<Record<string, any>>[]
  ): Promise<TableItem[] | undefined> => {
    try {
      internalItems.value = items
      return internalItems.value
    } catch (err) {
      return undefined
    }
  }

  const notifyFilteredItems = () => {
    if (filteredHandler.value) {
      filteredHandler.value(computedItems.value)
    }
  }

  return {
    internalItems,
    computedItems,
    updateInternalItems,
    filteredHandler,
    notifyFilteredItems,
    computedDisplayItems,
  }
}

export default useTableItems
