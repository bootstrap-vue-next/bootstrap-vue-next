import type {ColorVariant} from '..'
// Props
export interface Props {
  dismissLabel?: string
  dismissible?: boolean
  fade?: boolean
  modelValue?: boolean | number
  show?: boolean
  variant?: ColorVariant
}
// Emits
export interface Emits {
  (e: 'dismissed'): void
  (e: 'close-countdown', value: number): void
  (e: 'update:modelValue', value: boolean | number): void
}
// Other
