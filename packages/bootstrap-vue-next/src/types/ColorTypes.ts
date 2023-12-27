export interface BaseColorVariant {
  primary: unknown
  secondary: unknown
  success: unknown
  danger: unknown
  warning: unknown
  info: unknown
  light: unknown
  dark: unknown
}

export type ColorVariant = keyof BaseColorVariant

export interface BaseTextColorVariant extends BaseColorVariant {
  'white': unknown
  'body': unknown
  'body-secondary': unknown
  'black-50': unknown
  'white-50': unknown
  'reset': unknown
}

export type TextColorVariant = keyof BaseTextColorVariant

export type ColorExtendables = {
  variant?: ColorVariant | null
  bgVariant?: ColorVariant | null
  textVariant?: TextColorVariant | null
}

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
