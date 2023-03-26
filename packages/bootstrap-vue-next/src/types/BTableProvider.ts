import type TableItem from './TableItem'
import type BTableProviderContext from './BTableProviderContext'

type BTableProvider = (
  context: BTableProviderContext,
  provide: (items: TableItem[]) => Promise<TableItem[] | undefined>
) => Promise<TableItem[] | undefined> | TableItem[] | undefined

export default BTableProvider
