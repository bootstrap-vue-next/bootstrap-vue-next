import type {VNodeNormalizedChildren} from 'vue'
import type {ColorVariant} from '../..'
// Props
export interface Props {
  id?: string
  title?: string
  disabled?: boolean
  noRemove?: boolean
  pill?: boolean
  removeLabel?: string
  tag?: string
  variant?: ColorVariant
}
// Emits
export interface Emits {
  (e: 'remove', value?: VNodeNormalizedChildren): void
}
// Other
