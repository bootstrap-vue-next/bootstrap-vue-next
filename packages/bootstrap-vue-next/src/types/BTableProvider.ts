import type {TableItem} from './TableItem'
import type {BTableProviderContext} from './BTableProviderContext'

export type BTableProvider = (
  context: BTableProviderContext,
  provide: (items: TableItem[]) => Promise<TableItem[] | undefined>
) => Promise<TableItem[] | undefined> | TableItem[] | undefined
