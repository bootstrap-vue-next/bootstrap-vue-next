import type {ButtonVariant, InputSize, LinkTarget} from 'src/types'
import type {BLinkProps} from 'src/types/components'
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
  (e: 'clicked', value: PointerEvent): void
  (e: 'update:pressed', value: boolean): void
}
// Other
