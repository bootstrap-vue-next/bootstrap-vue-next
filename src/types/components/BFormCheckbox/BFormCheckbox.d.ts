import type {InputSize} from '@/types'

// Props
export interface Props {
  ariaLabel: string
  ariaLabelledBy: string
  form: string
  indeterminate: boolean
  name: string
  id?: string
  autofocus?: boolean
  plain?: boolean
  button?: boolean
  switch?: boolean
  disabled?: boolean
  buttonVariant?: string
  inline?: boolean
  required?: boolean
  size?: InputSize
  state?: boolean
  uncheckedValue?: boolean | string | Array | Record<string, unknown> | number
  value?: boolean | string | Array | Record<string, unknown> | number
  modelValue?: boolean | string | Array | Record<string, unknown> | number
}
// Emits
export interface Emits {
  (e: 'update:modelValue', value: unknown): void
  (e: 'input', value: unknown): void
  (e: 'change', value: unknown): void
}
// Other
