import type {BLinkProps} from 'src/types/components'
// Props
export interface Props extends Omit<BLinkProps, 'event' | 'routerTag'> {
  active?: boolean
  ariaCurrent?: string
  disabled?: boolean
  text?: string
}
// Emits
export interface Emits {
  (e: 'click', value: MouseEvent): void
}
// Other
