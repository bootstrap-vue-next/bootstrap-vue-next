import type {ComputedRef, StyleValue} from 'vue'
import type {ColorVariant} from './ColorTypes'
import type {MaybePromise} from './MaybePromise'
import type {LiteralUnion} from './LiteralUnion'
import type {AttrsValue, ClassValue} from './AnyValuedAttributes'

export type TableHeadClickedEventObject<Item, E extends UIEvent = Readonly<MouseEvent>> = {
  key: string
  field: TableField<Item>
  event: E
  isFooter: boolean
}
export type TableRowEventObject<T, E extends UIEvent = Readonly<MouseEvent>> = {
  item: T
  index: number
  event: E
}
export type TableRowEvent<T, E extends UIEvent = Readonly<MouseEvent>> = [
  object: TableRowEventObject<T, E>,
]

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

export type TableFieldFormatter<T> = (obj: {value: unknown; key: string; item: T}) => string

export type TableRowType = 'row' | 'row-expansion' | 'row-top' | 'row-bottom' | 'table-busy'
export type TableRowThead = 'top' | 'bottom'

export type TableStrictClassValue = string | readonly unknown[] | Record<string, boolean>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TableField<T = any> = {
  class?: ClassValue
  filterByFormatted?: boolean | TableFieldFormatter<T>
  formatter?: TableFieldFormatter<T>
  isRowHeader?: boolean
  /**
   * Unique identifier for the column.
   *
   * Used for:
   * - generating slot names (e.g., `head(<key>)`, `cell(<key>)`)
   * - tracking column state (sorting, visibility, focus, etc.)
   *
   * This value must be stable and unique across all columns.
   * It is **not** used directly to read data from items or as the label.
   */
  key: string
  /**
   * Text displayed in the table header for this column.
   *
   * If omitted, a default label may be generated from the column `key`.
   * This value is purely presentational and does not affect column identity or data access.
   * For rich headers, use the `head(<key>)` slot instead.
   */
  label?: string
  /**
   * How to read the value from each row item.
   *
   * - Can be a string representing a root-level property name (e.g., `'email'` for `const users = [{email: 'abc'}]`).
   * - Can be a function that receives the row item and returns the value (recommended for type safety and nested or computed values).
   * - If omitted, defaults to using the column `key`.
   */
  accessor?: string | ((item: T) => unknown)
  headerTitle?: string
  headerAbbr?: string
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
  tdAttr?: AttrsValue | ((obj: {value: unknown; key: string; item: T}) => AttrsValue)
  thAttr?:
    | AttrsValue
    | ((obj: {value: unknown; key: string; item: T | null; type: TableRowThead}) => AttrsValue)
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
   * Gets the item from the internal "computed items" representation when using the primary key.
   * This is used to get the object reference of the item from the items when using the primary key, since the items are stored as the primary key value rather than the item itself.
   * If no `primaryKey` is used, it will return undefined
   *
   * @param primaryKey
   */
  getFromPrimaryKey: (primaryKey: unknown) => unknown
  /**
   * A computed array of items resolved from their primary key values
   * against the table’s internal computed dataset.
   *
   * When a `primaryKey` is configured, selection and tracking mechanisms
   * may store only the primary key values. This property provides the
   * corresponding full item objects by resolving those keys against the
   * current internal items representation.
   *
   * If no `primaryKey` is used, this will mirror the selectedItems array.
   *
   * Note:
   * - Only items currently present in the internal computed dataset
   *   can be resolved. Keys that do not match an available item
   *   will be ignored.
   * - This property is readonly and represents a derived projection,
   *   not a source of truth.
   */
  resolvedItems: ComputedRef<readonly unknown[]>
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
