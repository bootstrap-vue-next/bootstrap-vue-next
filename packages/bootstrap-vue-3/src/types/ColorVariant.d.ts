/**
 * @external
 */
 export interface BaseColorVariant {
  'primary': unknown
  'secondary': unknown
  'success': unknown
  'danger': unknown
  'warning': unknown
  'info': unknown
  'light': unknown
  'dark': unknown
}

type ColorVariant = keyof BaseColorVariant

export default ColorVariant
