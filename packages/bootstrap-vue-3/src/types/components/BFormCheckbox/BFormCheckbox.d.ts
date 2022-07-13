import type {ButtonVariant, InputSize} from '../..'
// Props
export interface Props {
  ariaLabel?: string
  ariaLabelledBy?: string
  form?: string
  indeterminate?: boolean
  name?: string
  id?: string
  autofocus?: boolean
  plain?: boolean
  button?: boolean
  switch?: boolean
  disabled?: boolean
  buttonVariant?: ButtonVariant
  inline?: boolean
  required?: boolean
  size?: InputSize
  state?: boolean
  uncheckedValue?: Array<unknown> | Set<unknown> | boolean
  value?: Array<unknown> | Set<unknown> | boolean
  modelValue?: Array<unknown> | Set<unknown> | boolean
}
// Emits
export interface Emits {
  (e: 'update:modelValue', value: unknown): void
  (e: 'input', value: unknown): void
  (e: 'change', value: unknown): void
}
// Other
