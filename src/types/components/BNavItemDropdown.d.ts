import type {ButtonVariant, Size} from '..'
// Props
export interface Props {
  id?: string
  text?: string
  size?: Size
  offset?: string
  autoClose?: string
  dark?: boolean
  dropleft?: boolean
  dropright?: boolean
  dropup?: boolean
  right?: boolean | string
  left?: boolean | string
  offsetParent?: boolean
  split?: boolean
  splitVariant?: ButtonVariant
  variant?: ButtonVariant
}
// Emits

// Other
