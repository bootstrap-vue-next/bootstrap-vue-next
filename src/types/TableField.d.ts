import {StyleValue, TdHTMLAttributes, ThHTMLAttributes} from 'vue'
import ColorVariant from './ColorVariant'

export interface TableFieldObject<T = Record<string, unknown>> {
  key: string
  label?: string
  headerTitle?: string
  headerAbbr?: string
  class?: string | string[]
  formatter?: string | ((value: string, key?: string, item?: T) => string)
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

type TableField<T = Record<string, unknown>> = string | TableFieldObject<T>

export default TableField
