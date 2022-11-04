/**
 * @external
 */
 export interface BaseInputSize {
  'sm': unknown,
  'md': unknown,
  'lg': unknown,
}

type InputSize = keyof BaseInputSize

export default InputSize
