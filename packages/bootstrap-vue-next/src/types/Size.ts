export interface BaseSize {
  sm: unknown
  md: unknown
  lg: unknown
}

type Size = keyof BaseSize

export default Size
