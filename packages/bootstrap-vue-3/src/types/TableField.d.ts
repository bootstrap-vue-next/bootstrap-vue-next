import type {StyleValue, TdHTMLAttributes, ThHTMLAttributes} from 'vue'
import {ColorVariant, LiteralUnion} from '.'

export interface TableFieldObject<T = Record<string, unknown>> {
  key: LiteralUnion<keyof T>
  label?: string
  headerTitle?: string
  headerAbbr?: string
  class?: string | string[]
  formatter?: string | ((value: unknown, key?: string, item?: T) => string)
  sortable?: boolean
  sortKey?: string
  sortDirection?: string
  sortByFormatted?: boolean
  filterByFormatted?: boolean
  tdClass?: string | string[]
  thClass?: string | string[]
  thStyle?: StyleValue
  variant?: ColorVariant
  tdAttr?: TdHTMLAttributes
  thAttr?: ThHTMLAttributes
  isRowHeader?: boolean
  stickyColumn?: boolean
}

/**
 * @external
 */
type TableField<T = Record<string, unknown>> = string | TableFieldObject<T>

export default TableField
