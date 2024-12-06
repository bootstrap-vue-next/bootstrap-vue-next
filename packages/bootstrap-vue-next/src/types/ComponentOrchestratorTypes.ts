import type {Component, MaybeRefOrGetter} from 'vue'
import type {BModalProps, BPopoverProps, BToastProps, BTooltipProps} from './ComponentProps'
import type {ContainerPosition} from './Alignment'
import type {BPopoverSlots} from './ComponentSlots'
import type {BPopoverEmits} from './ComponentEmits'

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

type Prefix<P extends string, S extends string> = `${P}${S}`

type CamelCase<S extends string> = S extends `${infer P1}-${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
  : Lowercase<S>

export type TooltipOrchestratorMapValue = {
  [K in keyof BPopoverEmits as CamelCase<Prefix<'on-', K>>]?: (e: BPopoverEmits[K][0]) => void
} & {
  [K in keyof Omit<BPopoverSlots, 'title' | 'default' | 'target'>]?: BPopoverSlots[K]
} & {
  'onUpdate:modelValue'?: (val: boolean) => void
  'title'?: BTooltipProps['title'] | BPopoverSlots['title']
  'body'?: BTooltipProps['body'] | BPopoverSlots['default']
  'modelValue'?: BTooltipProps['modelValue']
} & Omit<BTooltipProps, 'body' | 'title' | 'modelValue'>

export type TooltipOrchestratorParam = {
  [K in keyof BPopoverEmits as CamelCase<Prefix<'on-', K>>]?: (e: BPopoverEmits[K][0]) => void
} & {
  [K in keyof Omit<BPopoverSlots, 'title' | 'default' | 'target'>]?: MaybeRefOrGetter<
    BPopoverSlots[K]
  >
} & {
  'onUpdate:modelValue'?: (val: boolean) => void
  'title'?: MaybeRefOrGetter<BTooltipProps['title'] | BPopoverSlots['title']>
  'body'?: MaybeRefOrGetter<BTooltipProps['body'] | BPopoverSlots['default']>
  'modelValue'?: MaybeRefOrGetter<BTooltipProps['modelValue']>
} & Omit<BTooltipProps, 'body' | 'title' | 'modelValue'>

export type TooltipOrchestratorShowParam = MaybeRefOrGetter<TooltipOrchestratorParam>

export type PopoverOrchestratorMapValue = {
  [K in keyof BPopoverEmits as CamelCase<Prefix<'on-', K>>]?: (e: BPopoverEmits[K][0]) => void
} & {
  [K in keyof Omit<BPopoverSlots, 'title' | 'default' | 'target'>]?: BPopoverSlots[K]
} & {
  'onUpdate:modelValue'?: (val: boolean) => void
  'title'?: BPopoverProps['title'] | BPopoverSlots['title']
  'body'?: BPopoverProps['body'] | BPopoverSlots['default']
  'modelValue'?: BPopoverProps['modelValue']
} & Omit<BPopoverProps, 'body' | 'title' | 'modelValue'>

export type PopoverOrchestratorParam = {
  [K in keyof BPopoverEmits as CamelCase<Prefix<'on-', K>>]?: (e: BPopoverEmits[K][0]) => void
} & {
  [K in keyof Omit<BPopoverSlots, 'title' | 'default' | 'target'>]?: MaybeRefOrGetter<
    BPopoverSlots[K]
  >
} & {
  'onUpdate:modelValue'?: (val: boolean) => void
  'title'?: MaybeRefOrGetter<BPopoverProps['title'] | BPopoverSlots['title']>
  'body'?: MaybeRefOrGetter<BPopoverProps['body'] | BPopoverSlots['default']>
  'modelValue'?: MaybeRefOrGetter<BPopoverProps['modelValue']>
} & Omit<BPopoverProps, 'body' | 'title' | 'modelValue'>

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
