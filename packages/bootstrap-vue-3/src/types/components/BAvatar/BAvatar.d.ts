import {RoundedTypes} from '../..'
import type {BgColorVariant, ButtonVariant, InputSize, TextColorVariant} from '../..'

// Props
export interface Props {
  alt?: string
  ariaLabel?: string
  badge?: boolean | string
  badgeLeft?: boolean
  badgeOffset?: string
  badgeTop?: boolean
  badgeVariant?: BgColorVariant | null
  bgVariant?: BgColorVariant | null
  button?: boolean
  buttonType?: string
  disabled?: boolean
  icon?: string
  rounded?: RoundedTypes.RoundedTypesAll | null
  size?: InputSize | string | number
  square?: boolean
  src?: string
  text?: string
  textVariant?: TextColorVariant // not standard BootstrapVue props
  variant?: ButtonVariant | null
}
// Emits
export interface Emits {
  (e: 'click', value: MouseEvent): void
  (e: 'img-error', value: Event): void
}
// Other
