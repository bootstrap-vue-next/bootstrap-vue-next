import type {ButtonVariant} from '@/types'
// Props
export interface Props {
  ariaLabel: string
  ariaLabelledBy: string
  form: string
  id: string
  name: string
  size: string
  autofocus?: boolean
  modelValue?: boolean | string | Array | Record<string, unknown> | number
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
  (e: 'input', value: string | number | boolean | Record<string, unknown>): void
  (e: 'change', value: string | number | boolean | Record<string, unknown>): void
  (e: 'update:modelValue', value: string | number | boolean | Record<string, unknown>): void
}
// Other
