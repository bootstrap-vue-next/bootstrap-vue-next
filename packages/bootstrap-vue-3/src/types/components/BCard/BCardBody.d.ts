import type {BgColorVariant, TextColorVariant} from '../..'
// Props
export interface Props {
  bodyBgVariant?: BgColorVariant
  bodyClass?: Array<unknown> | Record<string, unknown> | string
  bodyTag?: string
  bodyTextVariant?: TextColorVariant
  overlay?: boolean
  subtitle?: string
  subtitleTag?: string
  subtitleTextVariant?: TextColorVariant
  title?: string
  titleTag?: string
}
// Emits

// Other
