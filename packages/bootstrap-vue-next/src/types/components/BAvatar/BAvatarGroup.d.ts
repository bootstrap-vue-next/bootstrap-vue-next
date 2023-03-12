import type {Ref} from 'vue'
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
  overlapScale: Ref<number>
  size: Ref<InputSize | string | undefined>
  square: Ref<boolean>
  rounded: Ref<boolean | string>
  variant: Ref<ColorVariant | undefined>
}
