export type SelectValue =
  | boolean
  | string
  | readonly unknown[]
  | Readonly<Record<string, unknown>>
  | number
  | null

export interface SelectOption<T = unknown> {
  value: T
  text?: string
  html?: string
  disabled?: boolean
}

export type SelectOptionRaw<T = unknown> = string | SelectOption<T>

export type ComplexSelectOption<T = unknown> = Readonly<{
  label: string
  options: readonly SelectOption<T>[]
}>

export type ComplexSelectOptionRaw<T = unknown> = Readonly<{
  label: string
  options: readonly SelectOptionRaw<T>[]
}>
