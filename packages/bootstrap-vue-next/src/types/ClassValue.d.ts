type ClassValue =
  | (string | Record<string, boolean | undefined | null>)[]
  | Record<string, boolean | undefined | null>
  | string

export default ClassValue
