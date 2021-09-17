/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {TableField, TableItem} from '../../types'
import {TableFieldObject} from '../../types/TableField'
import {isObject, isString} from '../../utils/inspect'
import {startCase} from '../../utils/stringUtils'

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

  return {
    normaliseFields,
  }
}

export default useItemHelper
