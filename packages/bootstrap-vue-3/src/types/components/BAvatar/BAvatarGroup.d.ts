import type {ComputedRef} from 'vue'
import type {ButtonVariant, ColorVariant, InputSize, RoundedTypes} from '../..'
// Props
export interface Props {
  bgVariant?: ColorVariant.BgColorVariant
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
  bgVariant?: ColorVariant.BgColorVariant
  overlapScale: ComputedRef<number>
  size?: InputSize | string
  square: boolean
  rounded: RoundedTypes.RoundedTypesAll
  variant?: ButtonVariant
}
