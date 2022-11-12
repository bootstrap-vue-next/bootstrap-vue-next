import type {BasicColorVariant} from '.'

/**
 * @external
 */
type TableItem<T = Record<string, unknown>> = T & {
  _rowVariant?: BasicColorVariant
  _cellVariants?: Partial<Record<keyof T, BasicColorVariant>>
  _showDetails?: boolean
}

export default TableItem
