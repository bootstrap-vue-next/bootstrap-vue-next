import {BLinkProps} from '..'
// Props
export interface Props extends Omit<BLinkProps, 'event' | 'routerTag'> {
  active?: boolean
  ariaCurrent?: string
  disabled?: boolean
  text?: string
}
// Emits

// Other
