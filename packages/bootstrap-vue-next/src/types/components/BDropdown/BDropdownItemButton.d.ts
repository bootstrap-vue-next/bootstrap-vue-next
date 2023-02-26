import type {ColorVariant} from '../..'

// Props
export interface Props {
  buttonClass?: string | unknown[] | Record<string, unknown>
  active?: boolean
  activeClass?: string
  disabled?: boolean
  variant?: ColorVariant
}
// Emits
export interface Emits {
  (e: 'click', value: MouseEvent): void
}
// Other
