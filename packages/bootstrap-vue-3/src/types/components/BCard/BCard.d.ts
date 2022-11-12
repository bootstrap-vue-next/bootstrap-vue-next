import type {Alignment, ColorVariant, TextColorVariant} from '../..'
// Props
export interface Props {
  align?: Alignment.TextHorizontal
  bgVariant?: ColorVariant
  bodyBgVariant?: ColorVariant
  bodyClass?: Array<unknown> | Record<string, unknown> | string
  bodyTag?: string // Above todo, also Array can be explicit
  bodyTextVariant?: ColorVariant
  borderVariant?: ColorVariant
  footer?: string
  footerBgVariant?: ColorVariant
  footerBorderVariant?: ColorVariant
  footerClass?: Array<unknown> | Record<string, unknown> | string
  footerHtml?: string
  footerTag?: string
  footerTextVariant?: ColorVariant
  header?: string
  headerBgVariant?: ColorVariant
  headerBorderVariant?: ColorVariant
  headerClass?: Array<unknown> | Record<string, unknown> | string
  headerHtml?: string
  headerTag?: string
  headerTextVariant?: ColorVariant
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
