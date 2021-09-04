interface TableItem {
  [key: string]: any
  _rowVariant?: string
  _cellVariants?: Record<string, string>
}

export default TableItem
