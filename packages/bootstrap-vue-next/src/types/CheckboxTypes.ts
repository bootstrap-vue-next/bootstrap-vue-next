export type CheckboxValue =
  | readonly unknown[]
  | ReadonlySet<unknown>
  | string
  | boolean
  | Readonly<Record<string, unknown>>
  | number
  | null

export interface CheckboxOption {
  text: string
  value: CheckboxValue
  disabled?: boolean
  [key: string]: unknown
}

export type CheckboxOptionRaw =
  | string
  | number
  | (Partial<CheckboxOption> & Record<string, unknown>)
