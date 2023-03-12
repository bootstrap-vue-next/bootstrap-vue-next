import type {Ref} from 'vue'
import type {ButtonVariant, Size} from '../..'
// Props
export interface Props {
  id?: string
  form?: string
  modelValue?: unknown[]
  ariaInvalid?: boolean | string
  autofocus?: boolean
  buttonVariant?: ButtonVariant
  buttons?: boolean
  disabled?: boolean
  disabledField?: string
  htmlField?: string
  name?: string
  options?: unknown[] // Objects are not supported yet
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

export interface ParentData {
  set: (
    payload: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number
  ) => void
  remove: (
    payload: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number
  ) => void
  modelValue: Ref<
    (unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number)[]
  >
  switch: Ref<boolean>
  buttonVariant: Ref<ButtonVariant>
  form: Ref<string | undefined>
  name: Ref<string>
  state: Ref<boolean | undefined>
  plain: Ref<boolean>
  size: Ref<Size>
  inline: Ref<boolean>
  required: Ref<boolean>
  buttons: Ref<boolean>
  disabled: Ref<boolean>
}
