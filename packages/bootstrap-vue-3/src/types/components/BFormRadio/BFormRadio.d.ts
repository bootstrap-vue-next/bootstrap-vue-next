import type {ButtonVariant} from '../..'
// Props
export interface Props {
  ariaLabel?: string
  ariaLabelledBy?: string
  form?: string
  id?: string
  name?: string
  size?: string
  autofocus?: boolean
  modelValue?: boolean | string | Array<unknown> | Record<string, unknown> | number
  plain?: boolean
  button?: boolean
  switch?: boolean
  disabled?: boolean
  buttonVariant?: ButtonVariant
  inline?: boolean
  required?: boolean
  state?: boolean | null
  value?: string | boolean | Record<string, unknown> | number
}
// Emits
export interface Emits {
  (e: 'input', value: boolean | string | Array<unknown> | Record<string, unknown> | number): void
  (e: 'change', value: boolean | string | Array<unknown> | Record<string, unknown> | number): void
  (
    e: 'update:modelValue',
    value: boolean | string | Array<unknown> | Record<string, unknown> | number
  ): void
}
// Other
