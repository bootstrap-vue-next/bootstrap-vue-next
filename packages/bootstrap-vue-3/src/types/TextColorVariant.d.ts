import type {BaseColorVariant} from '.'

/**
 * @external
 */
 export interface BaseTextColorVariant extends BaseColorVariant {
  'white': unknown
  'body': unknown
  'muted': unknown
  'black-50': unknown
  'white-50': unknown
  'reset': unknown
}

type TextColorVariant = keyof BaseTextColorVariant

export default TextColorVariant
