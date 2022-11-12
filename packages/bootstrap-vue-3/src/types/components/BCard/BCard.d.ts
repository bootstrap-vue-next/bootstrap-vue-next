import type {Alignment, BgColorVariant, TextColorVariant} from '../..'
// Props
export interface Props {
  align?: Alignment
  bgVariant?: BgColorVariant
  bodyBgVariant?: BgColorVariant
  bodyClass?: Array<unknown> | Record<string, unknown> | string
  bodyTag?: string // Above todo, also Array can be explicit
  bodyTextVariant?: TextColorVariant
  borderVariant?: BorderColorVariant
  footer?: string
  footerBgVariant?: BgColorVariant
  footerBorderVariant?: BorderColorVariant
  footerClass?: Array<unknown> | Record<string, unknown> | string
  footerHtml?: string
  footerTag?: string
  footerTextVariant?: TextColorVariant
  header?: string
  headerBgVariant?: BgColorVariant
  headerBorderVariant?: BorderColorVariant
  headerClass?: Array<unknown> | Record<string, unknown> | string
  headerHtml?: string
  headerTag?: string
  headerTextVariant?: TextColorVariant
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
  subtitleTextVariant?: TextColorVariant
  tag?: string
  textVariant?: TextColorVariant
  title?: string
  titleTag?: string
}
// Emits

// Other
