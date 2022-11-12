/**
 * @external BaseInputSize
 */
export interface BaseInputSize {
  sm: unknown
  md: unknown
  lg: unknown
}

export type InputSize = keyof BaseInputSize
export type InputSizeOnlySmallOrLarge = Exclude<InputSize, 'md'>
