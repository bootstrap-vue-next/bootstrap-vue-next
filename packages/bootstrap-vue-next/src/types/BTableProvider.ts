import type {Booleanish, MaybePromise, TableItem} from '.'

export type BTableProviderContext = {
  readonly filter: string | undefined
  readonly sortBy: string | undefined
  readonly currentPage: number
  readonly perPage: number
  readonly sortDesc: Booleanish
}

export type BTableProvider<T = Record<string, unkown>> = (
  context: BTableProviderContext
) => MaybePromise<TableItem<T>[] | undefined>
