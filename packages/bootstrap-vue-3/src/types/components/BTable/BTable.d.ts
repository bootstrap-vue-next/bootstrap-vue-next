import type {Breakpoint, ColorVariant, TableField, TableItem, VerticalAlign} from '../..'
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
}
// Emits

// Other
