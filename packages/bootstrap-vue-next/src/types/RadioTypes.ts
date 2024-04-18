export type RadioValue =
  | boolean
  | string
  | Readonly<unknown[]>
  | Readonly<Record<string, unknown>>
  | number
  | null

export interface RadioOption {
  text: string
  value: RadioValue
  disabled?: boolean
}

export type RadioOptionRaw = string | number | (Partial<RadioOption> & Record<string, unknown>)
