import type {ColorVariant} from 'src/types'
import type {BLinkProps} from 'src/types/components'
// Props
export interface Props extends Omit<BLinkProps, 'event' | 'routerTag'> {
  pill?: boolean
  tag?: string
  variant?: ColorVariant
  textIndicator?: boolean
  dotIndicator?: boolean
}
// Emits

// Other
