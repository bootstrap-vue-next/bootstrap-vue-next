import type {BTableSortByOrder} from 'bootstrap-vue-next'
/* eslint-disable @typescript-eslint/no-unused-vars */
// #region snippet
type BTableSortBy = {
  order: BTableSortByOrder // Sort order can by 'asc', 'desc' or undefined
  key: string // The field name to sort by
  comparer?: (a: string, b: string) => number
}
// #endregion snippet
