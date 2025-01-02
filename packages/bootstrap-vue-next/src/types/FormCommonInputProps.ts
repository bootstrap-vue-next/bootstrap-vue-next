import type {AriaInvalid} from './AriaInvalid'
import type {Numberish, ValidationState} from './CommonTypes'
import type {Size} from './Size'

export interface FormDebounceOptions {
  debounce?: Numberish
  debounceMaxWait?: Numberish
}

export interface CommonInputProps extends FormDebounceOptions {
  ariaInvalid?: AriaInvalid
  autocomplete?: string
  autofocus?: boolean
  disabled?: boolean
  form?: string
  formatter?: (val: string, evt: Event) => string
  id?: string
  lazyFormatter?: boolean
  list?: string
  modelValue?: Numberish | null
  name?: string
  placeholder?: string
  plaintext?: boolean
  readonly?: boolean
  required?: boolean
  size?: Size
  state?: ValidationState
}
