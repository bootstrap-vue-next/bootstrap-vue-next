import type {ColorVariant} from '../..'
// Props
export interface Props {
  bodyBgVariant?: ColorVariant.BgColorVariant
  bodyClass?: Array<unknown> | Record<string, unknown> | string
  bodyTag?: string
  bodyTextVariant?: ColorVariant.TextColorVariant
  overlay?: boolean
  subtitle?: string
  subtitleTag?: string
  subtitleTextVariant?: ColorVariant.TextColorVariant
  title?: string
  titleTag?: string
}
// Emits

// Other
