import type {TextColorVariant} from '../..'

// Props
export interface Props {
  buttonClass?: string | Array<unknown> | Record<string, unknown>
  active?: boolean
  activeClass?: string
  disabled?: boolean
  variant?: TextColorVariant
}
// Emits
export interface Emits {
  (e: 'click', value: MouseEvent): void
}
// Other
