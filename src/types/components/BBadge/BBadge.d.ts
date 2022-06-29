import type {ColorVariant} from '@/types'
import type {BLinkProps} from '@/types/components'
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
