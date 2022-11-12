import type {BgColorVariant, BorderColorVariant, ButtonVariant, InputSize, TextColorVariant} from '..'
// Props
export interface Props {
  bodyBgVariant?: BgColorVariant
  bodyClass?: string
  bodyTextVariant?: TextColorVariant
  busy?: boolean
  buttonSize?: InputSize
  cancelDisabled?: boolean
  cancelTitle?: string
  cancelVariant?: ButtonVariant
  centered?: boolean
  contentClass?: string
  dialogClass?: string
  footerBgVariant?: BgColorVariant
  footerBorderVariant?: BorderColorVariant
  footerClass?: string
  footerTextVariant?: TextColorVariant
  fullscreen?: boolean | string
  headerBgVariant?: BgColorVariant
  headerBorderVariant?: BorderColorVariant
  headerClass?: string
  headerCloseLabel?: string
  headerCloseWhite?: boolean
  headerTextVariant?: TextColorVariant
  hideBackdrop?: boolean
  hideFooter?: boolean
  hideHeader?: boolean
  hideHeaderClose?: boolean
  id?: string
  modalClass?: string
  modelValue?: boolean
  noCloseOnBackdrop?: boolean
  noCloseOnEsc?: boolean
  noFade?: boolean
  noFocus?: boolean
  okDisabled?: boolean
  okOnly?: boolean
  okTitle?: string
  okVariant?: ButtonVariant
  scrollable?: boolean
  show?: boolean
  size?: string
  title?: string
  titleClass?: string
  titleSrOnly?: boolean
  titleTag?: string
}
// Emits
export interface Emits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'show', value: Event): void
  (e: 'shown', value: Event): void
  (e: 'hide', value: Event): void
  (e: 'hidden', value: Event): void
  (e: 'hide-prevented', value: Event): void
  (e: 'ok'): void
  (e: 'cancel'): void
}
// Other
