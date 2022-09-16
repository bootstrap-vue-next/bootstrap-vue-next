// Props
export interface Props {
  modelValue?: boolean
  bodyScrolling?: boolean
  backdrop?: boolean
  placement?: string
  title?: string
  noHeaderClose?: boolean
  noHeader?: boolean
}
// Emits
export interface Emits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'show'): void
  (e: 'shown'): void
  (e: 'hide'): void
  (e: 'hidden'): void
}
// Other
