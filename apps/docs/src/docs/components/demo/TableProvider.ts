/* eslint-disable @typescript-eslint/no-unused-vars */
import type {BTableSortBy} from 'bootstrap-vue-next'
type MaybePromise<T> = Promise<T> | T
// #region snippet
type BTableProviderContext<T = unknown> = {
  sortBy: BTableSortBy<T>[] | undefined
  filter: string | undefined
  currentPage: number
  perPage: number
}

type BTableProvider<T> = (
  context: Readonly<BTableProviderContext<T>>
) => MaybePromise<T[] | undefined>
// #endregion snippet
