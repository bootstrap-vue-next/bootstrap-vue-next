interface BreadcrumbItemObject {
  active?: boolean
  disabled?: boolean
  href?: string
  text: string
  to?: string | Record<string, any>
}

type BreadcrumbItem = BreadcrumbItemObject | string

export default BreadcrumbItem
