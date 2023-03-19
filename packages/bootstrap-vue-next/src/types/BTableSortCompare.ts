import type TableItem from './TableItem'

type BTableSortCompare = (
  aRow: TableItem,
  bRow: TableItem,
  fieldKey: string,
  sortDesc: boolean
) => number

export default BTableSortCompare
