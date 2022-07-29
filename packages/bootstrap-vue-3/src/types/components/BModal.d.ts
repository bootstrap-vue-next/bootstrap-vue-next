import type {ColorVariant, InputSize} from '..'
// Props
export interface Props {
  bodyBgVariant?: ColorVariant
  bodyClass?: string
  bodyTextVariant?: ColorVariant
  busy?: boolean
  buttonSize?: InputSize
  cancelDisabled?: boolean
  cancelTitle?: string
  cancelVariant?: ColorVariant
  centered?: boolean
  contentClass?: string
  dialogClass?: string
  footerBgVariant?: ColorVariant
  footerBorderVariant?: ColorVariant
  footerClass?: string
  footerTextVariant?: ColorVariant
  fullscreen?: boolean | string
  headerBgVariant?: ColorVariant
  headerBorderVariant?: ColorVariant
  headerClass?: string
  headerCloseLabel?: string
  headerCloseWhite?: boolean
  headerTextVariant?: ColorVariant
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
  okVariant?: ColorVariant
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
