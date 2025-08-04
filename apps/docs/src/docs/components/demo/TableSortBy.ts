/* eslint-disable @typescript-eslint/no-unused-vars */
// #region snippet
type BTableSortByOrder = 'desc' | 'asc' | undefined
type BTableSortBy<T = unknown> = {
  order: BTableSortByOrder
  key: string
}
// #endregion snippet
