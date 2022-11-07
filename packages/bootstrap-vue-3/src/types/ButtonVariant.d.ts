import type {BaseColorVariant} from '.'

/**
 * @external
 */
export interface BaseButtonVariant extends BaseColorVariant {
  'link': unknown
  'outline-primary': unknown
  'outline-secondary': unknown
  'outline-success': unknown
  'outline-danger': unknown
  'outline-warning': unknown
  'outline-info': unknown
  'outline-light': unknown
  'outline-dark': unknown
}

type ButtonVariant = keyof BaseButtonVariant

export default ButtonVariant
