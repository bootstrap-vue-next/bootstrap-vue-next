import type {RouteLocationRaw} from 'vue-router'
import type {ColorVariant} from './ColorVariant'
import type {LinkTarget} from './LinkTarget'
import type {Booleanish} from './Booleanish'

export interface BLinkProps {
  active?: Booleanish
  activeClass?: string
  append?: Booleanish
  disabled?: Booleanish
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event?: string | any[]
  href?: string
  // noPrefetch: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  // prefetch: {type: [Boolean, String] as PropType<Booleanish>, default: null},
  rel?: string
  replace?: Booleanish
  routerComponentName?: string
  routerTag?: string
  target?: LinkTarget
  to?: RouteLocationRaw
  variant?: ColorVariant | null
  opacity?: 10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'
  opacityHover?: 10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'
  underlineVariant?: ColorVariant | null
  underlineOffset?: 1 | 2 | 3 | '1' | '2' | '3'
  underlineOffsetHover?: 1 | 2 | 3 | '1' | '2' | '3'
  underlineOpacity?: 0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'
  underlineOpacityHover?: 0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'
  icon?: Booleanish
}
