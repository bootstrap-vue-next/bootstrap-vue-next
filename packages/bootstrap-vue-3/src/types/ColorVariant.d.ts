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

/**
 * @external BasicColorVariant
 */
export type BasicColorVariant = keyof BaseColorVariant

export interface BaseBgColorVariant extends BaseColorVariant {
  body: unknown
  white: unknown
  transparent: unknown
}

/**
 * @external BgColorVariant
 */
export type BgColorVariant = keyof BaseBgColorVariant

export interface BaseBorderColorVariant extends BaseColorVariant {
  white: unknown
}

/**
 * @external BorderColorVariant
 */
export type BorderColorVariant = keyof BaseBorderColorVariant

export interface BaseTextColorVariant extends BaseColorVariant {
  'body': unknown
  'muted': unknown
  'white': unknown
  'black-50': unknown
  'white-50': unknown
  'reset': unknown
}

/**
 * @external TextColorVariant
 */
export type TextColorVariant = keyof BaseTextColorVariant
