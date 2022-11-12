import type {VNodeNormalizedChildren} from 'vue'
import type {TextColorVariant} from '../..'
// Props
export interface Props {
  id?: string
  title?: string
  disabled?: boolean
  noRemove?: boolean
  pill?: boolean
  removeLabel?: string
  tag?: string
  variant?: BgColorVariant
}
// Emits
export interface Emits {
  (e: 'remove', value?: VNodeNormalizedChildren): void
}
// Other
