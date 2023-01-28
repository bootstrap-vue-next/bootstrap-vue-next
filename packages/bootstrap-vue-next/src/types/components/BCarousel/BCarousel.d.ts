// Props
export interface Props {
  id?: string
  imgHeight?: string
  imgWidth?: string
  background?: string
  modelValue?: number
  controls?: boolean
  indicators?: boolean
  interval?: number
  noTouch?: boolean
  noWrap?: boolean
}
// Emits
export interface Emits {
  (e: 'sliding-start', value: Event): void
  (e: 'sliding-end', value: Event): void
}
// Other
export interface ParentData {
  background?: string
  width?: string
  height?: string
}
