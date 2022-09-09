import {Ref} from 'vue'
import type {TableField, TableFieldObject, TableItem} from '../../types'
import {isObject, isString, startCase} from '../../utils'

const useItemHelper = () => {
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
        } else if (isObject(f) && f.key && isString(f.key)) {
          fields.push({...f})
        }
        // todo handle Shortcut object (i.e. { 'foo_bar': 'This is Foo Bar' }
      })
      return fields
    }
    return fields
  }

  const mapItems = (
    fields: TableField[],
    items: TableItem<any>[],
    props: any,
    flags: Record<string, Ref<boolean>>
  ): TableItem<any>[] => {
    let result: TableItem<any>[] = Object.assign([], items)
    if ('isSortable' in flags && flags.isSortable.value === true) {
      result = sortItems(fields, result, {
        key: props.sortBy,
        desc: flags.sortDescBoolean.value,
      })
    }
    if (props.perPage !== undefined) {
      const startIndex = (props.currentPage - 1) * props.perPage
      result = result.splice(startIndex, props.perPage)
    }
    return result
  }

  const sortItems = (
    fields: TableField[],
    items: TableItem<Record<string, any>>[],
    sort?: {key?: string; desc?: boolean}
  ) => {
    if (!sort || !sort.key) return items
    const sortKey = sort.key

    return items.sort((a, b) => {
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

  return {
    normaliseFields,
    mapItems,
  }
}

export default useItemHelper
