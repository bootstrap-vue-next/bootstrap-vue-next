import type {ComputedRef} from 'vue'
import type {ColorVariant, InputSize} from '../..'
// Props
export interface Props {
  overlap?: number | string
  rounded?: boolean | string
  size?: InputSize | string
  square?: boolean
  tag?: string
  variant?: ColorVariant
}
// Emits

// Other
export interface ParentData {
  overlapScale: ComputedRef<number>
  size?: InputSize | string
  square: boolean
  rounded: boolean | string
  variant?: ColorVariant
}
