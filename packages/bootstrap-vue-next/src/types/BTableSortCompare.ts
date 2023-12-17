import type {TableItem} from './TableItem'

export type BTableSortCompare<T> = (
  aRow: TableItem<T>,
  bRow: TableItem<T>,
  fieldKey: string,
  sortDesc: boolean
) => number
