import type SelectOptionObject from './SelectOptionObject'

type SelectOption<T = unknown> = string | SelectOptionObject<T>

export default SelectOption
