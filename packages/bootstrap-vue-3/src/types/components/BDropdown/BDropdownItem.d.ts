import type {ColorVariant, LinkTarget} from '../..'

// Props
export interface Props {
  href?: string
  linkClass?: Array<unknown> | Record<string, unknown> | string
  active?: boolean
  disabled?: boolean
  rel?: string
  target?: LinkTarget
  variant?: ColorVariant.TextColorVariant
}
// Emits
export interface Emits {
  (e: 'click', value: MouseEvent): void
}
// Other
