import type {TableFieldFormatter} from '../types'
import {get} from '.'

export default (
  item: unknown,
  // Weakly type fieldKey because it can be a nested string, such as 'foo.bar.baz'
  fieldKey: string,
  formatter?: TableFieldFormatter<unknown>
) => {
  const val = get(item, fieldKey)
  return formatter && typeof formatter === 'function' ? formatter(val, fieldKey, item) : val
}
