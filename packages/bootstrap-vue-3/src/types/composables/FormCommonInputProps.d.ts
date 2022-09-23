import type {AriaInvalid, Size} from '..'

interface FormCommonInputProps {
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
  modelValue?: string | number
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

export default FormCommonInputProps
