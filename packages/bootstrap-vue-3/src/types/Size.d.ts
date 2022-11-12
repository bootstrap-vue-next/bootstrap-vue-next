/**
 * @external
 */
 export interface BaseSize {
  'sm': unknown,
  'lg': unknown,
}

type Size = keyof BaseSize | undefined

export default Size
