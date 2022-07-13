import type {ColorVariant, InputSize} from '../..'

// Props
export interface Props {
  alt?: string
  ariaLabel?: string
  badge?: boolean | string
  badgeLeft?: boolean
  badgeOffset?: string
  badgeTop?: boolean
  badgeVariant?: ColorVariant
  button?: boolean
  buttonType?: string
  disabled?: boolean
  icon?: string
  rounded?: boolean | string
  size?: InputSize | string | number
  square?: boolean
  src?: string
  text?: string
  textVariant?: ColorVariant // not standard BootstrapVue props
  variant?: ColorVariant
}
// Emits
export interface Emits {
  (e: 'click', value: MouseEvent): void
  (e: 'img-error', value: Event): void
}
// Other
