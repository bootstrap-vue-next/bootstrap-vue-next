import type {TextColorVariant} from './TextColorVariant'
import type {ColorVariant} from './ColorVariant'

export type BackgroundColorExtendables = {
  variant?: ColorVariant | null
  bgVariant?: ColorVariant | null
  textVariant?: TextColorVariant | null
}
