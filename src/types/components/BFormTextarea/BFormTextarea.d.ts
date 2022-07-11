import type {FormCommonInputProps} from '../../composables'

// Props
export interface Props extends FormCommonInputProps {
  noResize?: boolean
  rows?: string | number
  wrap?: string
}
// Emits
export interface Emits {
  (e: 'update:modelValue', value: unknown): void
  (e: 'change', value: unknown): void
  (e: 'blur', value: unknown): void
  (e: 'input', value: unknown): void
}
// Other
