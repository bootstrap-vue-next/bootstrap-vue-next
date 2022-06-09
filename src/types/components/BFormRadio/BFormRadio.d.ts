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
  buttonVariant?: string
  inline?: boolean
  required?: boolean
  state?: boolean | null | undefined
  value?: string | boolean | Record<string, unknown> | number
}
// Emits
export interface Emits {
  (e: 'input', value: string | number | boolean | Record<string, any>): void
  (e: 'change', value: string | number | boolean | Record<string, any>): void
  (e: 'update:modelValue', value: string | number | boolean | Record<string, any>): void
}
// Other
