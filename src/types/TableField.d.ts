export interface TableFieldObject {
  key: string
  label?: string
  headerTitle?: string
  headerAbbr?: string
  class?: string | string[]
  formatter?: string | ((value: string, key?: string, item?: any[]) => string)
  sortable?: boolean
  sortKey?: string
  sortDirection?: string
  sortByFormatted?: boolean
  filterByFormatted?: boolean
  tdClass?: string
  thStyle?: Record<string, unknown>
  variant?: string
  tdAttr?: Record<string, unknown>
  thAttr?: Record<string, unknown>
  isRowHeader?: boolean
  stickyColumn?: boolean
}

type TableField = string | TableFieldObject

export default TableField
