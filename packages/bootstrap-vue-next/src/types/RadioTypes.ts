export type RadioValue =
  | boolean
  | string
  | readonly unknown[]
  | Readonly<Record<string, unknown>>
  | number
  | null

export interface RadioOption {
  text: string
  value: RadioValue
  disabled?: boolean
  [key: string]: unknown
}

export type RadioOptionRaw = string | number | (Partial<RadioOption> & Record<string, unknown>)
