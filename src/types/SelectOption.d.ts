export interface SelectOptionObject<T = unknown> {
  value: T
  text?: string
  html?: string
  disabled?: boolean
}

type SelectOption<T = unknown> = string | SelectOptionObject<T>

export default SelectOption
