import type {
  Booleanish,
  Breakpoint,
  ColorVariant,
  TableField,
  TableItem,
  VerticalAlign,
} from '../..'
// Props
export interface Props {
  caption?: string
  align?: VerticalAlign
  borderVariant?: ColorVariant
  captionTop?: boolean
  borderless?: boolean
  bordered?: boolean
  dark?: boolean
  fields?: Array<TableField>
  footClone?: boolean
  hover?: boolean
  items?: Array<TableItem>
  responsive?: boolean | Breakpoint
  small?: boolean
  striped?: boolean
  variant?: ColorVariant
  sortInternal?: boolean
  selectable?: boolean
  selectMode?: 'multi' | 'single' | 'range'
}
// Emits

// Other
export type BTableProviderContext = {
  readonly filter?: string
  readonly currentPage?: number
  readonly perPage?: number
  readonly sortBy?: string
  readonly sortDesc?: Booleanish
}
export type BTableProvider = (
  context: BTableProviderContext,
  provide: (items: Array<TableItem>) => Promise<TableItem[] | undefined>
) => Promise<Array<TableItem> | undefined> | Array<TableItem> | undefined

export type BTableSortCompare = (
  aRow: TableItem,
  bRow: TableItem,
  fieldKey: string,
  sortDesc: boolean
) => number
