import type {BgColorVariant} from '..'
// Props
export interface Props {
  variant?: BgColorVariant
  max?: number | string
  height?: string
  animated?: boolean
  precision?: number | string
  showProgress?: boolean
  showValue?: boolean
  striped?: boolean
  value?: number | string
}
// Emits

// Other
export interface ParentData {
  animated: boolean
  max: number | string
  showProgress: boolean
  showValue: boolean
  striped: boolean
}
