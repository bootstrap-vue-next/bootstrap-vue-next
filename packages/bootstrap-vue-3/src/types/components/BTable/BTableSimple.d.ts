import type {Breakpoint, ColorVariant} from '../..'
// Props
export interface Props {
  borderVariant?: ColorVariant.BorderColorVariant
  tableClass?: Array<unknown> | Record<string, unknown> | string
  tableVariant?: ColorVariant.BasicColorVariant
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
