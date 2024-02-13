import type {Booleanish, ClassValue, ColorVariant, LiteralUnion, MaybePromise} from '.'
import type {StyleValue} from 'vue'

export type BTableProviderContext = {
  readonly filter: string | undefined
  readonly sortBy: string | undefined
  readonly currentPage: number
  readonly perPage: number
  readonly sortDesc: Booleanish
}

export type TableItem<T = Record<string, unknown>> = T & {
  _rowVariant?: ColorVariant | null
  _cellVariants?: Partial<Record<keyof T, ColorVariant>>
  _showDetails?: boolean
}

export type BTableProvider<T = Record<string, unknown>> = (
  context: BTableProviderContext
) => MaybePromise<TableItem<T>[] | undefined>

export type BTableSortCompare<T> = (
  aRow: TableItem<T>,
  bRow: TableItem<T>,
  fieldKey: string,
  sortDesc: boolean
) => number

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TableFieldFormatter<T = any> =
  | string
  | ((value: unknown, key?: LiteralUnion<keyof T>, item?: T) => string)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TableFieldAttribute<T = any> =
  | Record<string, unknown>
  | ((value: unknown, key?: LiteralUnion<keyof T>, item?: T) => Record<string, unknown>)

export interface TableField<T = Record<string, unknown>> {
  key: LiteralUnion<keyof T>
  label?: string
  headerTitle?: string
  headerAbbr?: string
  class?: ClassValue
  formatter?: TableFieldFormatter<T>
  sortable?: boolean
  sortKey?: string
  sortDirection?: string
  sortByFormatted?: boolean
  filterByFormatted?: boolean
  tdClass?: ClassValue
  thClass?: ClassValue
  thStyle?: StyleValue
  variant?: ColorVariant | null
  tdAttr?: TableFieldAttribute<T>
  thAttr?: TableFieldAttribute<T>
  isRowHeader?: boolean
  stickyColumn?: boolean
}

export type TableFieldRaw<T = Record<string, unknown>> = string | TableField<T>
