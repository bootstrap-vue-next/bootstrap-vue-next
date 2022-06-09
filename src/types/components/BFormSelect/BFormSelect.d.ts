import type {Size} from 'src/types'
// Props
export interface Props {
  ariaInvalid?: boolean | 'false' | 'true' | 'grammar' | 'spelling'
  autofocus?: boolean
  disabled?: boolean
  disabledField?: string
  form?: string
  htmlField?: string
  id?: string
  labelField?: string
  multiple?: boolean
  name?: string
  options?: Array | Record<string, unknown>
  optionsField?: string
  plain?: boolean
  required?: boolean
  selectSize?: number
  size?: Size
  state?: boolean | null
}
// Emits
export interface Emits {
  (e: 'input', value: unknown): void
  (e: 'update:modelValue', value: unknown): void
  (e: 'change', value: unknown): void
}
// Other
