import type {RouteLocationRaw} from 'vue-router'
import type {LinkTarget} from '../..'
// Props
export interface Props {
  active?: boolean
  activeClass?: string
  append?: boolean
  disabled?: boolean
  event?: string | Array<unknown>
  exact?: boolean
  exactActiveClass?: string
  href?: string
  // noPrefetch?: boolean
  // prefetch?: boolean
  rel?: string
  replace?: boolean
  routerComponentName?: string
  routerTag?: string
  target?: LinkTarget
  to?: RouteLocationRaw
}
// Emits
export interface Emits {
  (e: 'click', value: MouseEvent): void
}
// Other
