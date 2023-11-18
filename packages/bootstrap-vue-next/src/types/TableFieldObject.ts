import type {StyleValue} from 'vue'
import type {ClassValue} from './AnyValuedAttributes'
import type {LiteralUnion} from './LiteralUnion'
import type {ColorVariant} from './ColorVariant'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TableFieldObjectFormatter<T = any> =
  | string
  | ((value: unknown, key?: LiteralUnion<keyof T>, item?: T) => string)

export interface TableFieldObject<T = Record<string, unknown>> {
  key: LiteralUnion<keyof T>
  label?: string
  headerTitle?: string
  headerAbbr?: string
  class?: ClassValue
  formatter?: TableFieldObjectFormatter<T>
  sortable?: boolean
  sortKey?: string
  sortDirection?: string
  sortByFormatted?: boolean
  filterByFormatted?: boolean
  tdClass?: ClassValue
  thClass?: ClassValue
  thStyle?: StyleValue
  variant?: ColorVariant | null
  tdAttr?: Record<string, unknown>
  thAttr?: Record<string, unknown>
  isRowHeader?: boolean
  stickyColumn?: boolean
}
