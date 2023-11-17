import type {Booleanish, MaybePromise, TableItem} from '.'

export type BTableProviderContext = {
  readonly filter: string | undefined
  readonly sortBy: string | undefined
  readonly currentPage: number
  readonly perPage: number
  readonly sortDesc: Booleanish
}

export type BTableProvider = (
  context: BTableProviderContext
) => MaybePromise<TableItem[] | undefined>
