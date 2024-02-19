import type {TableFieldFormatter, TableItem} from '../types'
import {get} from '.'

export default <T = Record<string, unknown>>(
  item: TableItem<T>,
  fieldKey: string,
  formatter?: TableFieldFormatter<typeof item>
) => {
  const val = get(item, fieldKey)
  return formatter && typeof formatter === 'function' ? formatter(val, fieldKey, item) : val
}
