import type {RouteLocationRaw} from 'vue-router'

export interface BreadcrumbItem {
  active?: boolean
  disabled?: boolean
  href?: string
  text: string
  to?: RouteLocationRaw
}

export type BreadcrumbItemRaw = BreadcrumbItem | string
