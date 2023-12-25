import type {RouteLocationRaw} from 'vue-router'

export default (props: Readonly<{href?: string; to?: RouteLocationRaw}>): boolean =>
  !!(props.href || props.to)
