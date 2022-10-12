import type {BodyProp} from '../../../components/BToast/plugin'
import type {ColorVariant} from '../..'
import type {BLinkProps} from '..'
// Props
export interface Props extends BLinkProps {
  title?: string
  bodyClass?: string
  headerClass?: string
  id?: string
  delay?: number
  body?: BodyProp
  headerTag?: string
  animation?: boolean
  // Switches role to 'status' and aria-live to 'polite'
  isStatus?: boolean
  autoHide?: boolean
  noCloseButton?: boolean
  noFade?: boolean
  noHoverPause?: boolean
  solid?: boolean
  // Render the toast in place, rather than in a portal-target
  static?: boolean
  modelValue?: boolean
  toastClass?: Array<unknown>
  variant?: ColorVariant
}
// Emits
export interface Emits {
  (e: 'destroyed', value: Props['id']): void
  (e: 'update:modelValue', value: Props['modelValue']): void
}
// Other
