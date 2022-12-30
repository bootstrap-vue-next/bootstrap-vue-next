import {ref, type Ref} from 'vue'
import type {TableField, TableFieldObject, TableItem} from '../../types'
import {isObject, startCase} from '../../utils'
import {BTableSortCompare} from './../../types/components'
import {cloneDeep, cloneDeepAsync} from './../../utils/object'

export default () => {
  const normaliseFields = (origFields: TableField[], items: TableItem[]): TableFieldObject[] => {
    const fields: TableFieldObject[] = []

    if (!origFields?.length && items?.length) {
      Object.keys(items[0]).forEach((k) => fields.push({key: k, label: startCase(k)}))
      return fields
    }

    if (Array.isArray(origFields)) {
      origFields.forEach((f) => {
        if (typeof f === 'string') {
          fields.push({key: f, label: startCase(f)})
        } else if (isObject(f) && f.key && typeof f.key === 'string') {
          fields.push({...f})
        }
        // todo handle Shortcut object (i.e. { 'foo_bar': 'This is Foo Bar' }
      })
      return fields
    }
    return fields
  }

  const internalItems = ref<TableItem[]>([])

  const mapItems = (
    fields: TableField[],
    items: TableItem[],
    props: any,
    flags: Record<string, Ref<boolean>>
  ): TableItem[] => {
    internalItems.value = cloneDeep(items)
    if ('isFilterableTable' in flags && flags.isFilterableTable.value === true && props.filter) {
      internalItems.value = filterItems(internalItems.value, props.filter, props.filterable)
      // if (filterEvent.value) {
      //   filterEvent.value(internalItems.value)
      // }
    }
    if ('isSortable' in flags && flags.isSortable.value === true) {
      internalItems.value = sortItems(
        fields,
        internalItems.value,
        {
          key: props.sortBy,
          desc: flags.sortDescBoolean.value,
        },
        props.sortCompare
      )
    }
    // if (props.perPage !== undefined) {
    //   const startIndex = (props.currentPage - 1) * props.perPage
    //   internalItems.value = internalItems.value.splice(startIndex, props.perPage)
    // }
    return internalItems.value
  }

  const filterEvent: Ref<((items: TableItem[]) => void) | undefined> = ref(undefined)

  const sortItems = (
    fields: TableField[],
    items: TableItem<Record<string, any>>[],
    sort: {key: string; desc: boolean},
    sorter?: BTableSortCompare
  ) => {
    if (!sort || !sort.key) return items
    const sortKey = sort.key
    return items.sort((a, b) => {
      if (sorter !== undefined) {
        return sorter(a, b, sort.key, sort.desc)
      }
      const realVal = (ob: any) => (typeof ob === 'object' ? JSON.stringify(ob) : ob)
      const aHigher = realVal(a[sortKey]) > realVal(b[sortKey])
      if (aHigher) {
        return sort.desc ? -1 : 1
      }
      const bHigher = realVal(b[sortKey]) > realVal(a[sortKey])
      if (bHigher) {
        return sort.desc ? 1 : -1
      }
      return 0
    })
  }

  const filterItems = (
    items: TableItem<Record<string, any>>[],
    filter: string,
    filterable: string[]
  ) =>
    items.filter(
      (item) =>
        Object.entries(item).filter((item) => {
          const [key, val] = item
          if (!val || key[0] === '_' || (filterable.length > 0 && !filterable.includes(key)))
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

  const updateInternalItems = async (
    items: TableItem<Record<string, any>>[]
  ): Promise<TableItem[] | undefined> => {
    try {
      internalItems.value = await cloneDeepAsync(items)
      return internalItems.value
    } catch (err) {
      return undefined
    }
  }

  const notifyFilteredItems = () => {
    if (filterEvent.value) {
      filterEvent.value(internalItems.value)
    }
  }

  const formatItem = (item: TableItem, fields: TableFieldObject) => {
    const value = item[fields.key]
    if (fields.formatter && typeof fields.formatter === 'function') {
      return fields.formatter(value, fields.key, item)
    }
    return item[fields.key]
  }

  return {
    normaliseFields,
    mapItems,
    internalItems,
    updateInternalItems,
    filterEvent,
    notifyFilteredItems,
    formatItem,
  }
}
