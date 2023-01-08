import type {InputType} from '../..'
import type {FormCommonInputProps} from '../../composables'
// Props
export interface Props extends FormCommonInputProps {
  // debounce?: string | number
  max?: string | number
  min?: string | number
  // noWheel?: boolean
  step?: string | number
  type?: InputType
}
// Emits
export interface Emits {
  (e: 'update:modelValue', value: unknown): void
  (e: 'change', value: unknown): void
  (e: 'blur', value: unknown): void
  (e: 'input', value: unknown): void
}
// Other
type AllowedTypes =
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'search'
  | 'url'
  | 'tel'
  | 'date'
  | 'time'
  | 'range'
  | 'color'
