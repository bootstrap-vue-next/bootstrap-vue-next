import type {BasicColorVariant, BorderColorVariant, Breakpoint} from '../..'
// Props
export interface Props {
  borderVariant?: BorderColorVariant
  tableClass?: Array<unknown> | Record<string, unknown> | string
  tableVariant?: BasicColorVariant
  bordered?: boolean
  borderless?: boolean
  captionTop?: boolean
  dark?: boolean
  hover?: boolean
  responsive?: boolean | Breakpoint
  stacked?: boolean | Breakpoint
  striped?: boolean
  small?: boolean
}
// Emits

// Other
