import type {Ref} from 'vue'
import type {ColorVariant} from '..'
// Props
export interface Props {
  variant?: ColorVariant
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
  animated: Ref<boolean>
  max: Ref<number | string>
  showProgress: Ref<boolean>
  showValue: Ref<boolean>
  striped: Ref<boolean>
}
