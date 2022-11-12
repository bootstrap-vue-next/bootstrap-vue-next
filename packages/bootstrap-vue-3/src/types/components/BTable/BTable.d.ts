import type {
  BasicColorVariant,
  Booleanish,
  BorderColorVariant,
  Breakpoint,
  TableField,
  TableItem,
  VerticalAlign,
} from '../..'
// Props
export interface Props {
  align?: VerticalAlign
  bordered?: boolean
  borderless?: boolean
  borderVariant?: BorderColorVariant
  caption?: string
  captionTop?: boolean
  dark?: boolean
  fields?: Array<TableField>
  footClone?: boolean
  hover?: boolean
  items?: Array<TableItem>
  responsive?: boolean | Breakpoint
  small?: boolean
  sortInternal?: boolean
  striped?: boolean
  selectable?: boolean
  selectMode?: 'multi' | 'single' | 'range'
  variant?: BasicColorVariant | null
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
