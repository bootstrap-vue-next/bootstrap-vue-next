import type {TableItem} from './TableItem'

export type BTableSortCompare = (
  aRow: TableItem,
  bRow: TableItem,
  fieldKey: string,
  sortDesc: boolean
) => number
