import type {ButtonVariant, InputSize, LinkTarget} from '../..'
import type {BLinkProps} from '..'
// Props
export interface Props extends BLinkProps {
  active?: boolean
  disabled?: boolean
  href?: string
  pill?: boolean
  pressed?: boolean
  rel?: string
  size?: InputSize
  squared?: boolean
  tag?: string
  target?: LinkTarget
  type?: string
  variant?: ButtonVariant
}
// Emits
export interface Emits {
  (e: 'clicked', value: MouseEvent): void
  (e: 'update:pressed', value: boolean): void
}
// Other
