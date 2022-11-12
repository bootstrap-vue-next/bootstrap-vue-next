import type {BgColorVariant, BorderColorVariant, TextColorVariant} from '../..'
// Props
export interface Props {
  header?: string
  headerBgVariant?: BgColorVariant
  headerBorderVariant?: BorderColorVariant
  headerClass?: Array<unknown> | Record<string, unknown> | string
  headerHtml?: string
  headerTag?: string
  headerTextVariant?: TextColorVariant
}
// Emits

// Other
