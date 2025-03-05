import type {StyleValue} from 'vue'
import type {ColorVariant} from './ColorTypes'
import type {MaybePromise} from './MaybePromise'
import type {LiteralUnion} from './LiteralUnion'
import type {AttrsValue, ClassValue} from './AnyValuedAttributes'

export type TableRowEvent<T> = [item: T, index: number, event: MouseEvent]

export type TableItem<T = Record<string, unknown>> = T & {
  _rowVariant?: ColorVariant | null
  _cellVariants?: Partial<Record<keyof T, ColorVariant>>
  _showDetails?: boolean
}

export const isTableItem = (value: unknown): value is TableItem =>
  typeof value === 'object' && value !== null

/**
 * `undefined` means it's not sorting this column. It is set to undefined rather than removed from the array because
 * we don't want to make updates that remove the comparer function from the value.
 */
export type BTableSortByOrder = 'desc' | 'asc' | undefined

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BTableSortByComparerFunction<T = any> = (a: T, b: T, key: string) => number
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BTableSortBy<T = any> = {
  order: BTableSortByOrder
  key: string
  comparer?: BTableSortByComparerFunction<T>
}

export type BTableProviderContext<T = unknown> = {
  sortBy: BTableSortBy<T>[] | undefined
  filter: string | undefined
  currentPage: number
  perPage: number
}

export type BTableProvider<T> = (
  context: Readonly<BTableProviderContext<T>>
) => MaybePromise<T[] | undefined>

export type TableFieldFormatter<T> = (value: unknown, key: string, item: T) => string

export type TableRowType = 'row' | 'row-details' | 'row-top' | 'row-bottom' | 'table-busy'
export type TableRowThead = 'top' | 'bottom'

export type TableStrictClassValue = string | unknown[] | Record<string, boolean>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TableField<T = any> = {
  key: LiteralUnion<keyof T>
  label?: string
  headerTitle?: string
  headerAbbr?: string
  class?: ClassValue
  formatter?: TableFieldFormatter<T>
  sortable?: boolean
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
