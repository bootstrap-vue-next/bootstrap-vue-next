export type CheckboxValue =
  | readonly unknown[]
  | ReadonlySet<unknown>
  | string
  | boolean
  | Readonly<Record<string, unknown>>
  | number
  | null

export type CheckboxOption = {
  text: string
  value: CheckboxValue
  disabled?: boolean
}

export type CheckboxOptionRaw =
  | string
  | number
  | (Partial<CheckboxOption> & Record<string, unknown>)
