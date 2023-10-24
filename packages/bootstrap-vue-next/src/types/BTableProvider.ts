import type {BTableProviderContext, MaybePromise, TableItem} from '.'

export type BTableProvider = (
  context: BTableProviderContext,
  provide: (items: TableItem[]) => Promise<TableItem[] | undefined>
) => MaybePromise<TableItem[] | undefined>
