import type {RouteLocationRaw} from 'vue-router'

/**
 * @param props
 * @returns
 */
export default (props: {href?: string; to?: RouteLocationRaw}): boolean =>
  !!(props.href || props.to)
