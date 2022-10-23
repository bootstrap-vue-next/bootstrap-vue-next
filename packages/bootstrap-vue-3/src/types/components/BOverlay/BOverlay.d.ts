import type {ColorVariant} from '../..'
// Props
export interface Props {
  bgColor?: string
  blur?: string
  fixed?: boolean
  noCenter?: boolean
  noFade?: boolean
  // If `true, does not render the default slot
  // and switches to absolute positioning
  noWrap?: boolean
  // opacity?: {
  //   type: [Number, String],
  //   default: 0.85,
  //   validator: (value: number | string) => {
  //     const number = toFloat(value, 0)
  //     return number >= 0 && number <= 1
  //   },
  // },
  overlayTag?: string
  rounded?: boolean | string
  show?: boolean
  spinnerSmall?: boolean
  spinnerType?: string
  spinnerVariant?: string
  variant?: ColorVariant
  wrapTag?: string
  zIndex?: number | string
}
// Emits
export interface Emits {
  (e: 'click', value: MouseEvent): void
  (e: 'hidden'): void
  (e: 'shown'): void
}
// Other
export interface SlotScope {
  spinnerType: string | null
  spinnerVariant: string | null
  spinnerSmall: boolean
}
