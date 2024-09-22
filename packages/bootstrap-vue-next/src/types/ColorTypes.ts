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

export type ColorVariantSubtle = `${ColorVariant}-subtle`
export type BaseColorVariantSubtle = {
  [K in ColorVariantSubtle]: unknown
}
export type ColorVariantEmphasis = `${ColorVariant}-emphasis`
export type BaseColorVariantEmphasis = {
  [K in ColorVariantEmphasis]: unknown
}

export type ColorVariantOutline = `outline-${ColorVariant}`
export type BaseColorVariantOutline = {
  [K in ColorVariantOutline]: unknown
}

export interface BaseButtonVariant extends BaseColorVariant, BaseColorVariantOutline {
  link: unknown
}
export type ButtonVariant = keyof BaseButtonVariant

export interface BaseTextColorVariant extends BaseColorVariant, BaseColorVariantEmphasis {
  'white': unknown
  'body': unknown
  'body-secondary': unknown
  'black-50': unknown
  'white-50': unknown
  'reset': unknown
}
export type TextColorVariant = keyof BaseTextColorVariant

export interface BaseBgColorVariant extends BaseColorVariant, BaseColorVariantSubtle {}
export type BgColorVariant = keyof BaseBgColorVariant

export interface BaseBorderColorVariant extends BaseColorVariant, BaseColorVariantSubtle {}
export type BorderColorVariant = keyof BaseBorderColorVariant

export type ColorExtendables = {
  variant?: ColorVariant | null
  bgVariant?: BgColorVariant | null
  textVariant?: TextColorVariant | null
}
