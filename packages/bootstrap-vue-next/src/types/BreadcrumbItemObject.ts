import type {RouteLocationRaw} from 'vue-router'

export interface BreadcrumbItemObject {
  active?: boolean
  disabled?: boolean
  href?: string
  text: string
  to?: RouteLocationRaw
}
