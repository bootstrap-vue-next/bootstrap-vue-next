import type {ColorVariant, LinkTarget} from '../..'
import type {RouteLocationRaw} from 'vue-router'

// Props
export interface Props {
  action?: boolean
  active?: boolean
  // activeClass?: string
  // append?: boolean
  button?: boolean
  disabled?: boolean
  // exact?: boolean
  // exactActiveClass?: string
  href?: string
  // noPrefetch?: Boolean
  // prefetch?: Boolean
  // rel?: String
  // replace?: Boolean
  // routerComponentName?: String
  tag?: string
  target?: LinkTarget
  to?: RouteLocationRaw
  variant?: ColorVariant
}
// Emits

// Other
