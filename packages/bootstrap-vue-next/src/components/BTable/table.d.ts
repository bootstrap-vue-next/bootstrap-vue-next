import type {
  Booleanish,
  Breakpoint,
  BTableProvider,
  BTableSortCompare,
  ColorVariant,
  VerticalAlign,
} from '../../types'

export interface BTableProps {
  align?: VerticalAlign
  caption?: string
  captionTop?: Booleanish
  borderless?: Booleanish
  bordered?: Booleanish
  borderVariant?: ColorVariant | null
  dark?: Booleanish
  fields?: TableField[]
  footClone?: Booleanish
  hover?: Booleanish
  items?: TableItem[]
  provider?: BTableProvider
  sortCompare?: BTableSortCompare
  noProvider?: NoProviderTypes[]
  noProviderPaging?: Booleanish
  noProviderSorting?: Booleanish
  noProviderFiltering?: Booleanish
  responsive?: boolean | Breakpoint
  small?: Booleanish
  striped?: Booleanish
  stacked?: boolean | Breakpoint
  labelStacked?: boolean
  variant?: ColorVariant | null
  sortBy?: string
  sortDesc?: Booleanish
  sortInternal?: Booleanish
  selectable?: Booleanish
  stickySelect?: Booleanish
  selectHead?: boolean | string
  selectMode?: 'multi' | 'single' | 'range'
  selectionVariant?: ColorVariant | null
  stickyHeader?: Booleanish
  busy?: Booleanish
  showEmpty?: Booleanish
  perPage?: number
  currentPage?: number
  filter?: string
  filterable?: string[]
  emptyText?: string
  emptyFilteredText?: string
}
