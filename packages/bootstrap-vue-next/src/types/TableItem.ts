import type {ColorVariant} from './ColorVariant'

export type TableItem<T = Record<string, unknown>> = T & {
  _rowVariant?: ColorVariant | null
  _cellVariants?: Partial<Record<keyof T, ColorVariant>>
  _showDetails?: boolean
}
