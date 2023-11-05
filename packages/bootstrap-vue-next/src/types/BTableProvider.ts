import type {BTableProviderContext, MaybePromise, TableItem} from '.'

export type BTableProvider = (
  context: BTableProviderContext
) => MaybePromise<TableItem[] | undefined>
