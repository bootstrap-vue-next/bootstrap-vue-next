import type {ClassValue, ColorVariant, MaybePromise} from '.'
import type {StyleValue} from 'vue'

export type TableItem = {
  _rowVariant?: ColorVariant | null
  _cellVariants?: Partial<Record<string, ColorVariant>>
  _showDetails?: boolean
}

// undefined means no sorting
export type BTableSortByOrder = 'desc' | 'asc' | undefined

export type BTableSortBy = {
  order: BTableSortByOrder
  key: string
  comparer?: (a: string, b: string) => number
}

export type BTableProviderContext = {
  sortBy: BTableSortBy[] | undefined
  filter: string | undefined
  currentPage: number
  perPage: number
}

export type BTableProvider<T> = (
  context: Readonly<BTableProviderContext>
) => MaybePromise<T[] | undefined>

export type TableFieldFormatter = (value: unknown, key: string, item: any) => string

export type TableFieldAttribute =
  | Record<string, unknown>
  | ((value: unknown, key: string, item: any) => Record<string, unknown>)

export type TableField = {
  key: string
  label?: string
  headerTitle?: string
  headerAbbr?: string
  class?: ClassValue
  formatter?: TableFieldFormatter
  sortable?: boolean
  sortKey?: string
  sortDirection?: string
  sortByFormatted?: boolean | TableFieldFormatter
  filterByFormatted?: boolean
  tdClass?: ClassValue
  thClass?: ClassValue
  thStyle?: StyleValue
  variant?: ColorVariant | null
  tdAttr?: TableFieldAttribute
  thAttr?: TableFieldAttribute
  isRowHeader?: boolean
  stickyColumn?: boolean
}

export type TableFieldRaw = string | TableField

export type NoProviderTypes = 'paging' | 'sorting' | 'filtering'
