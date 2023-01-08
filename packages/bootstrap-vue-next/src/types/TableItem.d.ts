import type {ColorVariant} from '.'

/**
 * @external
 */
type TableItem<T = Record<string, unknown>> = T & {
  _rowVariant?: ColorVariant
  _cellVariants?: Partial<Record<keyof T, ColorVariant>>
  _showDetails?: boolean
}

export default TableItem
