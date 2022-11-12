import type {BgColorVariant} from '../..'
import type {BLinkProps} from '..'
// Props
export interface Props extends Omit<BLinkProps, 'event' | 'routerTag'> {
  pill?: boolean
  tag?: string
  variant?: BgColorVariant | null
  textIndicator?: boolean
  dotIndicator?: boolean
}
// Emits

// Other
