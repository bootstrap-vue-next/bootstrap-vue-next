import type {BaseColorVariant} from './ColorVariant'

export interface BaseTextColorVariant extends BaseColorVariant {
  'white': unknown
  'body': unknown
  'body-secondary': unknown
  'black-50': unknown
  'white-50': unknown
  'reset': unknown
}

export type TextColorVariant = keyof BaseTextColorVariant
