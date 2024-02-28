import type {AriaInvalid, Booleanish, Numberish, Size} from '.'

export interface FormDebounceOptions {
  debounce?: Numberish
  debounceMaxWait?: Numberish
}

export interface CommonInputProps extends FormDebounceOptions {
  ariaInvalid?: AriaInvalid
  autocomplete?: string
  autofocus?: Booleanish
  disabled?: Booleanish
  form?: string
  formatter?: (val: string, evt: Event) => string
  id?: string
  lazy?: Booleanish
  lazyFormatter?: Booleanish
  list?: string
  modelValue?: Numberish | null
  name?: string
  number?: Booleanish
  placeholder?: string
  plaintext?: Booleanish
  readonly?: Booleanish
  required?: Booleanish
  size?: Size
  state?: Booleanish | null | undefined
  trim?: Booleanish
}
