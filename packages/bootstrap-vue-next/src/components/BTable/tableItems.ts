import {computed, ref, type Ref} from 'vue'
import type {
  Booleanish,
  BTableSortCompare,
  TableField,
  TableFieldObject,
  TableItem,
} from '../../types'
import type {TableFieldObjectFormatter} from '../../types/TableFieldObject'

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

export const useTableItems = (
  tableProps: TableItemsProcessingProps,
  flags: Record<string, Ref<boolean>>,
  usesProvider: boolean
) => {
  const filteredHandler = ref<(items: TableItem[]) => void>()
  const internalItems = ref(tableProps.items ?? [])
  const displayStartEndIdx = ref([0, internalItems.value.length])
  const requireItemsMapping = computed(
    () => isSortable.value && flags.sortInternalBoolean.value === true
  )

  const isSortable = computed(() => {
    const sortableLength = tableProps.fields?.filter((field) =>
      typeof field === 'string' ? false : field.sortable
    )?.length
    return sortableLength && sortableLength > 0
  })

  const computedItems = computed<TableItem[]>(() => {
    const items = usesProvider
      ? internalItems.value
      : requireItemsMapping.value
      ? mapItems(internalItems, tableProps, flags)
      : tableProps.items ?? []

    if (usesProvider && !flags.noProviderPagingBoolean.value) {
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

  const computedDisplayItems = computed<TableItem[]>(() =>
    computedItems.value.slice(displayStartEndIdx.value[0], displayStartEndIdx.value[1])
  )

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

const mapItems = (
  items: Ref<TableItem[]>,
  props: TableItemsProcessingProps,
  flags: Record<string, Ref<boolean>>
): TableItem[] => {
  let mappedItems: TableItem[] = items.value

  if ('isFilterableTable' in flags && flags.isFilterableTable.value === true && props.filter) {
    mappedItems = filterItems(mappedItems, props.filter, props.filterable)
  }

  if ('isSortable' in flags && flags.isSortable.value === true) {
    mappedItems = sortItems(
      props.fields,
      mappedItems,
      props.sortBy,
      flags.sortDescBoolean.value,
      props.sortCompare
    )
  }

  return mappedItems
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

const formatItem = (
  item: TableItem,
  fieldKey: string,
  formatter?: TableFieldObjectFormatter<typeof item>
) => {
  const val = item[fieldKey]
  if (formatter && typeof formatter === 'function') {
    return formatter(val, fieldKey, item)
  }
  return val
}

export const renderItem = (item: TableItem, fields: TableFieldObject) => {
  const formattedValue = formatItem(item, fields.key, fields.formatter)

  return formattedValue
}
