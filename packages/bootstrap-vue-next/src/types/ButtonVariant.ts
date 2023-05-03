import type {BaseColorVariant} from './ColorVariant'

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

export type ButtonVariant = keyof BaseButtonVariant
