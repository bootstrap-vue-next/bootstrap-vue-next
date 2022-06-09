import {ColorVariant, Size} from 'src/types'

// Props
export interface Props {
  size: Size
  form: string
  id: string
  name: string
  modelValue?: string | boolean | Array | Record<string, unknown> | number
  ariaInvalid?: boolean | string
  autofocus?: boolean
  buttonVariant?: ColorVariant
  buttons?: boolean
  disabled?: boolean
  disabledField?: string
  htmlField?: string
  options?: Array // Objects are not supported yet
  plain?: boolean
  required?: boolean
  stacked?: boolean
  state?: boolean
  textField?: string
  validated?: boolean
  valueField?: string
}
// Emits
export interface Emits {
  (e: 'input', value: unknown): void
  (e: 'update:modelValue', value: unknown): void
  (e: 'change', value: unknown): void
}
// Other
