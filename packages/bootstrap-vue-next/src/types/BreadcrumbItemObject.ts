import type {RouteLocationRaw} from 'vue-router'

interface BreadcrumbItemObject {
  active?: boolean
  disabled?: boolean
  href?: string
  text: string
  to?: RouteLocationRaw
}

export default BreadcrumbItemObject
