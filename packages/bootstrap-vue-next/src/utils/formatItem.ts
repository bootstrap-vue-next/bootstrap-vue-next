import type {TableFieldFormatter, TableItem} from '../types'
import {get} from '.'

export default <T extends Record<string, unknown>>(
  item: TableItem<T>,
  // Weakly type fieldKey because it can be a nested string, such as 'foo.bar.baz'
  fieldKey: string,
  formatter?: TableFieldFormatter<typeof item>
) => {
  const val = get(item, fieldKey)
  return formatter && typeof formatter === 'function' ? formatter(val, fieldKey, item) : val
}
