import ColorVariant from 'src/types/ColorVariant'
import Size from 'src/types/Size'

// Props
export interface Props {
  id?: string
  form: string
  modelValue?: Array
  ariaInvalid?: boolean | string
  autofocus?: boolean
  buttonVariant?: ColorVariant
  buttons?: boolean
  disabled?: boolean
  disabledField?: string
  htmlField?: string
  name: string
  options?: Array // Objects are not supported yet
  plain?: boolean
  required?: boolean
  size: Size
  stacked?: boolean
  state?: boolean
  switches?: boolean
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
