export type CheckboxValue =
  | readonly unknown[]
  | ReadonlySet<unknown>
  | boolean
  | string
  | Readonly<Record<string, unknown>>
  | number
  | null
