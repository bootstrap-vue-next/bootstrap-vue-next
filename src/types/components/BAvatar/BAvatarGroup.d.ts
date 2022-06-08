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
  size: InputSize | string | undefined
  square: boolean
  rounded: boolean | string
  variant: ColorVariant | undefined
}
