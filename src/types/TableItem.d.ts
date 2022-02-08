import ColorVariant from './ColorVariant'

interface TableItem {
  [key: string]: any
  _rowVariant?: ColorVariant
  _cellVariants?: Record<string, string>
}

export default TableItem
