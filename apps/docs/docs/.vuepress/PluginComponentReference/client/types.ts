// Some previous prop item properties to keep on over.
// xss: meta.xss || false,
// isVModel: this.componentVModel && this.componentVModel.prop === prop,
// _showDetails: typeof p.deprecated === 'string' || typeof p.deprecation === 'string'

interface PaginationPropItem {
  prop: string
  defaultValue: string
  required: boolean
  description: string
  version: string
  deprecated: boolean
  deprecation: boolean
  type: any
}
