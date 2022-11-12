import type {ComputedRef} from 'vue'
import type {BgColorVariant, ButtonVariant, InputSize, RoundedTypes} from '../..'
// Props
export interface Props {
  bgVariant?: BgColorVariant
  overlap?: number | string
  rounded?: boolean | string
  size?: InputSize | string
  square?: boolean
  tag?: string
  variant?: ButtonVariant
}
// Emits

// Other
export interface ParentData {
  bgVariant?: BgColorVariant
  overlapScale: ComputedRef<number>
  size?: InputSize | string
  square: boolean
  rounded: RoundedTypes.RoundedTypesAll
  variant?: ButtonVariant
}
