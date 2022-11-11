import type {Alignment, ColorVariant} from '../..'
// Props
export interface Props {
  align?: Alignment
  bgVariant?: ColorVariant.BgColorVariant
  bodyBgVariant?: ColorVariant.BgColorVariant
  bodyClass?: Array<unknown> | Record<string, unknown> | string
  bodyTag?: string // Above todo, also Array can be explicit
  bodyTextVariant?: ColorVariant.TextColorVariant
  borderVariant?: ColorVariant.BorderColorVariant
  footer?: string
  footerBgVariant?: ColorVariant.BgColorVariant
  footerBorderVariant?: ColorVariant.BorderColorVariant
  footerClass?: Array<unknown> | Record<string, unknown> | string
  footerHtml?: string
  footerTag?: string
  footerTextVariant?: ColorVariant.TextColorVariant
  header?: string
  headerBgVariant?: ColorVariant.BgColorVariant
  headerBorderVariant?: ColorVariant.BorderColorVariant
  headerClass?: Array<unknown> | Record<string, unknown> | string
  headerHtml?: string
  headerTag?: string
  headerTextVariant?: ColorVariant.TextColorVariant
  imgAlt?: string
  imgBottom?: boolean
  imgEnd?: boolean
  imgHeight?: string | number
  imgLeft?: boolean
  imgRight?: boolean
  imgSrc?: string
  imgStart?: boolean
  imgTop?: boolean
  imgWidth?: string | number
  noBody?: boolean
  overlay?: boolean
  subtitle?: string
  subtitleTag?: string
  subtitleTextVariant?: ColorVariant.TextColorVariant
  tag?: string
  textVariant?: ColorVariant.TextColorVariant
  title?: string
  titleTag?: string
}
// Emits

// Other
