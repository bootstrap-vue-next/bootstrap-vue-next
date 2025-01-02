import type {TableFieldFormatter} from '../types/TableTypes'
import {get} from './object'

export const formatItem = <T>(
  item: T,
  // Weakly type fieldKey because it can be a nested string, such as 'foo.bar.baz'
  fieldKey: string,
  formatter?: TableFieldFormatter<T>
) => {
  const val = get(item, fieldKey)
  return formatter && typeof formatter === 'function' ? formatter(val, fieldKey, item) : val
}
