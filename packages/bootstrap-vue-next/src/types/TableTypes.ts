import type {AttrsValue, ClassValue, ColorVariant, LiteralUnion, MaybePromise} from '.'
import type {StyleValue} from 'vue'

export type TableItem<T = Record<string, unknown>> = T & {
  _rowVariant?: ColorVariant | null
  _cellVariants?: Partial<Record<keyof T, ColorVariant>>
  _showDetails?: boolean
}

export const isTableItem = (value: unknown): value is TableItem =>
  typeof value === 'object' && value !== null

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

export type TableFieldFormatter<T> = (value: unknown, key: string, item: T) => string

export type TableRowType = 'row' | 'row-details' | 'row-top' | 'row-bottom' | 'table-busy'
export type TableRowThead = 'top' | 'bottom'

export type TableStrictClassValue = unknown

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TableField<T = any> = {
  key: LiteralUnion<keyof T>
  label?: string
  headerTitle?: string
  headerAbbr?: string
  class?: ClassValue
  formatter?: TableFieldFormatter<T>
  sortable?: boolean
  sortKey?: string
  sortDirection?: string
  sortByFormatted?: boolean | TableFieldFormatter<T>
  filterByFormatted?: boolean | TableFieldFormatter<T>
  tdClass?:
    | TableStrictClassValue
    | ((value: unknown, key: string, item: T) => TableStrictClassValue)
  thClass?: ClassValue
  thStyle?: StyleValue
  variant?: ColorVariant | null
  tdAttr?: AttrsValue | ((value: unknown, key: string, item: T) => AttrsValue)
  thAttr?:
    | AttrsValue
    | ((value: unknown, key: string, item: T | null, type: TableRowThead) => AttrsValue)
  isRowHeader?: boolean
  stickyColumn?: boolean
}

export type TableFieldRaw<T = unknown> = T extends object
  ? LiteralUnion<keyof T> | TableField<T>
  : string | TableField

export const isTableField = <T>(value: unknown): value is TableField<T> =>
  typeof value === 'object' && value !== null && 'key' in value

export const isTableFieldRaw = <T>(value: unknown): value is TableFieldRaw<T> =>
  typeof value === 'string' || isTableField(value)

export type NoProviderTypes = 'paging' | 'sorting' | 'filtering'
