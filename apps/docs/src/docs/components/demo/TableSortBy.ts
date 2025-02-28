/* eslint-disable @typescript-eslint/no-unused-vars */
// #region snippet
type BTableSortByOrder = 'desc' | 'asc' | undefined
// Where T is the type of `items` in the table
type BTableSortByComparerFunction<T = unknown> = (a: T, b: T) => number
type BTableSortBy<T = unknown> = {
  order: BTableSortByOrder
  key: string
  comparer?: BTableSortByComparerFunction<T>
}
// #endregion snippet
