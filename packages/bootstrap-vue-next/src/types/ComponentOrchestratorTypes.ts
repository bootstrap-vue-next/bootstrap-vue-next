import type {Component, MaybeRefOrGetter, RendererElement, RendererNode, VNode} from 'vue'
import type {BModalProps, BPopoverProps, BToastProps, BTooltipProps} from './ComponentProps'
import type {ContainerPosition} from './Alignment'

export type ControllerKey = symbol | string

export type OrchestratedToastModelValue = boolean | number
export type PrivateOrchestratedToast = Omit<BToastProps, 'modelValue'> & {
  /**
   * Position
   * @default 'top-end'
   */
  pos?: ContainerPosition
  /**
   * Sets whether or not the toast should be appended to the container
   * @default undefined Implicitly defualts to the BToastOrchestrator's appendToast value
   */
  appendToast?: boolean
  /**
   * A proxy for the modelValue, essentially, you set this once, and it mimics the modelValue.
   *
   * Falsy values default to 5000
   *
   * @default 5000
   */
  value?: OrchestratedToastModelValue // show or hide
  _self: ControllerKey
  _modelValue: OrchestratedToastModelValue // Convert it to be the same name as useModalController.
  // The difference between the two is that unlike that one, this value can be defined (there's cannot be).
}
export type PublicOrchestratedToast = Omit<PrivateOrchestratedToast, '_modelValue' | '_self'>
export type ToastOrchestratorArrayValue = {
  component: unknown
  props: PrivateOrchestratedToast
}
export type ToastOrchestratorShowParam = {
  component?: Readonly<Component>
  props?: MaybeRefOrGetter<PublicOrchestratedToast>
}

export type SlotFunction = () => VNode<RendererNode, RendererElement, {[key: string]: unknown}>

export type TooltipOrchestratorParam = {
  title?: MaybeRefOrGetter<BTooltipProps['title'] | SlotFunction>
  content?: MaybeRefOrGetter<BTooltipProps['content'] | SlotFunction>
} & Omit<BTooltipProps, 'content' | 'title'>

export type TooltipOrchestratorShowParam = MaybeRefOrGetter<TooltipOrchestratorParam>

export type PopoverOrchestratorParam = {
  title?: MaybeRefOrGetter<BPopoverProps['title'] | SlotFunction>
  content?: MaybeRefOrGetter<BPopoverProps['content'] | SlotFunction>
} & Omit<BPopoverProps, 'content' | 'title'>

export type PopoverOrchestratorShowParam = MaybeRefOrGetter<PopoverOrchestratorParam>

export type PrivateOrchestratedModal = Omit<BModalProps, 'modelValue'> & {
  _modelValue: BModalProps['modelValue']
  _promise: {
    value: Promise<boolean | null>
    resolve: (value: boolean | null) => void
  }
  _isConfirm: boolean
}
export type PublicOrchestratedModal = Omit<
  PrivateOrchestratedModal,
  '_modelValue' | '_promise' | '_isConfirm'
>
export type ModalOrchestratorShowParam = {
  component?: Readonly<Component>
  props?: MaybeRefOrGetter<PublicOrchestratedModal>
}
export type ModalOrchestratorMapValue = {
  component: unknown
  props: PrivateOrchestratedModal
}
