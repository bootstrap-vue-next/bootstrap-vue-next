import type {Component, MaybeRefOrGetter} from 'vue'
import type {BModalProps, BPopoverProps, BToastProps, BTooltipProps} from './ComponentProps'
import type {ContainerPosition} from './Alignment'
import type {BModalSlots, BPopoverSlots} from './ComponentSlots'
import type {BModalEmits, BPopoverEmits} from './ComponentEmits'

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
  'slots'?: {
    [K in keyof Omit<BPopoverSlots, 'target'>]?: BPopoverSlots[K] | Readonly<Component>
  }
  'onUpdate:modelValue'?: (val: boolean) => void
  'component'?: Readonly<Component>
  'stop'?: () => void
} & BTooltipProps

export type TooltipOrchestratorParam = {
  [K in keyof BPopoverEmits as CamelCase<Prefix<'on-', K>>]?: (e: BPopoverEmits[K][0]) => void
} & {
  'slots'?: {
    [K in keyof Omit<BPopoverSlots, 'target'>]?: MaybeRefOrGetter<
      BPopoverSlots[K] | Readonly<Component>
    >
  }
  'onUpdate:modelValue'?: (val: boolean) => void
  'title'?: MaybeRefOrGetter<BTooltipProps['title']>
  'body'?: MaybeRefOrGetter<BTooltipProps['body']>
  'modelValue'?: MaybeRefOrGetter<BTooltipProps['modelValue']>
  'component'?: Readonly<Component>
} & Omit<BTooltipProps, 'body' | 'title' | 'modelValue'>

export type TooltipOrchestratorShowParam = MaybeRefOrGetter<TooltipOrchestratorParam>

export type PopoverOrchestratorMapValue = {
  [K in keyof BPopoverEmits as CamelCase<Prefix<'on-', K>>]?: (e: BPopoverEmits[K][0]) => void
} & {
  'slots'?: {
    [K in keyof Omit<BPopoverSlots, 'target'>]?: BPopoverSlots[K] | Readonly<Component>
  }
  'onUpdate:modelValue'?: (val: boolean) => void
  'component'?: Readonly<Component>
  'stop'?: () => void
} & BPopoverProps

export type PopoverOrchestratorParam = {
  [K in keyof BPopoverEmits as CamelCase<Prefix<'on-', K>>]?: (e: BPopoverEmits[K][0]) => void
} & {
  'slots'?: {
    [K in keyof Omit<BPopoverSlots, 'target'>]?: MaybeRefOrGetter<
      BPopoverSlots[K] | Readonly<Component>
    >
  }
  'onUpdate:modelValue'?: (val: boolean) => void
  'title'?: MaybeRefOrGetter<BPopoverProps['title']>
  'body'?: MaybeRefOrGetter<BPopoverProps['body']>
  'modelValue'?: MaybeRefOrGetter<BPopoverProps['modelValue']>
  'component'?: Readonly<Component>
} & Omit<BPopoverProps, 'body' | 'title' | 'modelValue'>

export type PopoverOrchestratorShowParam = MaybeRefOrGetter<PopoverOrchestratorParam>

export type ModalOrchestratorMapValue = {
  [K in keyof BModalEmits as CamelCase<Prefix<'on-', K>>]?: (e: BModalEmits[K][0]) => void
} & {
  'slots'?: {
    [K in keyof BModalSlots]?: BModalSlots[K] | Readonly<Component>
  }
  'onUpdate:modelValue'?: (val: boolean) => void
  'isConfirm'?: boolean
  'promise': {
    value: Promise<boolean | null>
    resolve: (value: boolean | null) => void
  }
  'component'?: Readonly<Component>
} & BModalProps

export type ModalOrchestratorParam = {
  [K in keyof BModalEmits as CamelCase<Prefix<'on-', K>>]?: (e: BModalEmits[K][0]) => void
} & {
  'slots'?: {
    [K in keyof BModalSlots]?: MaybeRefOrGetter<BModalSlots[K] | Readonly<Component>>
  }
  'onUpdate:modelValue'?: (val: boolean) => void
  'title'?: MaybeRefOrGetter<BModalProps['title']>
  'body'?: MaybeRefOrGetter<BModalProps['body']>
  'modelValue'?: MaybeRefOrGetter<BModalProps['modelValue']>
  'isConfirm'?: boolean
  'component'?: Readonly<Component>
  /**
   * @deprecated
   */
  'props'?: Record<string, unknown>
} & Omit<BModalProps, 'body' | 'title' | 'modelValue'>

export type ModalOrchestratorShowParam = MaybeRefOrGetter<ModalOrchestratorParam>
