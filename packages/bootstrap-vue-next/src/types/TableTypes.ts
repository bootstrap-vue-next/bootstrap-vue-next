import type {ComputedRef, StyleValue} from 'vue'
import type {ColorVariant} from './ColorTypes'
import type {MaybePromise} from './MaybePromise'
import type {LiteralUnion} from './LiteralUnion'
import type {AttrsValue, ClassValue} from './AnyValuedAttributes'

export type TableHeadClickedEventObject<Item> = {
  key: string
  field: TableField<Item>
  event: MouseEvent
  isFooter: boolean
}
export type TableRowEventObject<T> = {item: T; index: number; event: MouseEvent}
export type TableRowEvent<T> = [object: TableRowEventObject<T>]

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

export type BTableSelectMode = 'single' | 'multi' | 'range'

/**
 * Initial sort direction for table fields. Includes 'last' option to maintain the direction of the previously sorted column.
 */
export type BTableInitialSortDirection = 'desc' | 'asc' | 'last'

export type BTableSortByComparerFunction<T> = (a: T, b: T, key: string) => number

export type BTableFilterFunction<T> = (item: Readonly<T>, filter: string | undefined) => boolean

export type BTableSortBy = {
  order: BTableSortByOrder
  key: string
}

export type BTableProviderContext = {
  sortBy: readonly BTableSortBy[] | undefined
  filter: string | undefined
  currentPage: number
  perPage: number
  signal: AbortSignal
}

export type BTableProvider<T> = (
  context: Readonly<BTableProviderContext>
) => MaybePromise<T[] | undefined>

export type TableFieldFormatter<T> = (value: unknown, key: string, item: T) => string

export type TableRowType = 'row' | 'row-expansion' | 'row-top' | 'row-bottom' | 'table-busy'
export type TableRowThead = 'top' | 'bottom'

export type TableStrictClassValue = string | readonly unknown[] | Record<string, boolean>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TableField<T = any> = {
  class?: ClassValue
  filterByFormatted?: boolean | TableFieldFormatter<T>
  formatter?: TableFieldFormatter<T>
  isRowHeader?: boolean
  key: LiteralUnion<keyof T>
  headerTitle?: string
  headerAbbr?: string
  label?: string
  sortable?: boolean
  sortDirection?: string
  sortByFormatted?: boolean | TableFieldFormatter<T>
  sortCompare?: BTableSortByComparerFunction<T>
  stickyColumn?: boolean
  scope?: TableThScope
  initialSortDirection?: BTableInitialSortDirection
  tdClass?:
    | TableStrictClassValue
    | ((value: unknown, key: string, item: T) => TableStrictClassValue)
  thClass?: ClassValue
  thStyle?: StyleValue
  tdAttr?: AttrsValue | ((value: unknown, key: string, item: T) => AttrsValue)
  thAttr?:
    | AttrsValue
    | ((value: unknown, key: string, item: T | null, type: TableRowThead) => AttrsValue)
  variant?: ColorVariant | null
}

export type TableFieldRaw<T = unknown> = T extends object
  ? LiteralUnion<keyof T> | TableField<T>
  : string | TableField

export const isTableField = (value: unknown): value is TableField =>
  typeof value === 'object' && value !== null && 'key' in value

export const isTableFieldRaw = (value: unknown): value is TableFieldRaw =>
  typeof value === 'string' || isTableField(value)

export type NoProviderTypes = 'paging' | 'sorting' | 'filtering'

export type TableThScope = 'row' | 'col' | 'rowgroup' | 'colgroup'

export type ItemTrackerReturn<Item> = {
  /**
   * Gets the item from the items prop, using the primary key if provided
   *
   * @param item
   * @returns
   */
  get: (item: Item) => unknown
  /**
   * Adds an item to the selected items
   *
   * @param item
   * @returns
   */
  add: (item: Item) => void
  /**
   * Sets the selected items to the provided items
   *
   * @param items
   * @returns
   */
  set: (items: readonly Item[]) => void
  /**
   * Sets the selected items to all items
   *
   * @returns
   */
  setAll: () => void
  /**
   * Deletes an item from the selected items
   *
   * @param item
   * @returns
   */
  remove: (item: Item) => void
  /**
   * Clears all selected items
   *
   * @returns
   */
  clear: () => void
  /**
   * Checks if an item is in the selected items
   *
   * @param item
   * @returns
   */
  has: (item: Item) => boolean
  /**
   * Whether the tracker is activated (has any selected items)
   */
  isActivated: ComputedRef<boolean>
}
export type TableDetailsReturn<Item> = ItemTrackerReturn<Item> & {
  /**
   * Toggles the details for the given item
   *
   * @param item
   * @returns
   */
  toggle: (item: Item) => void
}
export type TableSelectedReturn<Item> = ItemTrackerReturn<Item> & {
  handleRowSelection: (obj: {
    item: Item
    index: number
    shiftClicked?: boolean
    ctrlClicked?: boolean
    metaClicked?: boolean
  }) => void
}

export type MaybeGetter<Obj extends object, Key extends PropertyKey, Output = unknown> =
  | Key
  | ((obj: Obj) => Output)

// export type MaybeGetter<Obj, Key extends PropertyKey, Output = unknown> = Obj extends object
// ? Key | ((obj: Obj) => Output)
// : Key

export type TablePrimaryKey<Item> = string | ((item: Item) => string)
// export type TablePrimaryKey<Item> = Item extends object
// ? MaybeGetter<Item, keyof Item & string, string>
// : MaybeGetter<Item, string>
