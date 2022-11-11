import type {ColorVariant} from '../..'
import type {BLinkProps} from '..'
// Props
export interface Props extends Omit<BLinkProps, 'event' | 'routerTag'> {
  pill?: boolean
  tag?: string
  variant?: ColorVariant.BgColorVariant
  textIndicator?: boolean
  dotIndicator?: boolean
}
// Emits

// Other
