// Props
export interface Props {
  active?: boolean
  activeClass?: string
  append?: boolean
  disabled?: boolean
  event?: string | Array
  exact?: boolean
  exactActiveClass?: string
  href: string
  // noPrefetch?: Boolean
  // prefetch?: Boolean
  rel?: string
  replace?: boolean
  routerComponentName?: string
  routerTag?: string
  target?: LinkTarget
  to?: RouteLocationRaw
}
// Emits
export interface Emits {
  (e: 'click', value: PointerEvent): void
}
// Other
