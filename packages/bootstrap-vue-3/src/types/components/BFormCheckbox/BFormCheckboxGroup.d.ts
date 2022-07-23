import type {ButtonVariant, Size} from '../..'
// Props
export interface Props {
  id?: string
  form?: string
  modelValue?: Array<unknown>
  ariaInvalid?: boolean | string
  autofocus?: boolean
  buttonVariant?: ButtonVariant
  buttons?: boolean
  disabled?: boolean
  disabledField?: string
  htmlField?: string
  name?: string
  options?: Array<unknown> // Objects are not supported yet
  plain?: boolean
  required?: boolean
  size?: Size
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
