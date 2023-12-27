import type {AriaInvalid, Numberish, Size} from '.'

export interface FormCommonInputProps {
  ariaInvalid?: AriaInvalid
  autocomplete?: string
  autofocus?: boolean
  disabled?: boolean
  form?: string
  formatter?: () => unknown
  id?: string
  lazy?: boolean
  lazyFormatter?: boolean
  list?: string
  modelValue?: Numberish
  name?: string
  number?: boolean
  placeholder?: string
  plaintext?: boolean
  readonly?: boolean
  required?: boolean
  size?: Size
  state?: boolean | null
  trim?: boolean
}
