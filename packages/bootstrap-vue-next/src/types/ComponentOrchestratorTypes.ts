import type {Component, ComponentPublicInstance, MaybeRef, MaybeRefOrGetter, WatchHandle} from 'vue'
import type {BModalProps, BPopoverProps, BToastProps, BTooltipProps} from './ComponentProps'
import type {ContainerPosition} from './Alignment'
import type {BModalSlots, BPopoverSlots, BToastSlots} from './ComponentSlots'
import type {BModalEmits, BPopoverEmits, BToastEmits} from './ComponentEmits'
import type {BvTriggerableEvent} from '../utils'
import type BModal from '../components/BModal/BModal.vue'
import type BToast from '../components/BToast/BToast.vue'
import type BPopover from '../components/BPopover/BPopover.vue'
import type BTooltip from '../components/BTooltip/BTooltip.vue'

export type ControllerKey = symbol | string

export interface PromiseWithComponent<T, P>
  extends Promise<BvTriggerableEvent | boolean | null>,
    PromiseWithComponentInternal<T, P> {}
export interface PromiseWithComponentInternal<T, P> extends AsyncDisposable {
  id: ControllerKey
  ref: ComponentPublicInstance<T> | null
  show: () => PromiseWithComponent<T, P>
  hide: (trigger?: string) => PromiseWithComponent<T, P>
  toggle: () => PromiseWithComponent<T, P>
  set: (val: Partial<P>) => PromiseWithComponent<T, P>
  get: () => P | undefined
  destroy: () => void
}

type Prefix<P extends string, S extends string> = `${P}${S}`

export type CamelCase<S extends string> = S extends `${infer P1}-${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
  : Lowercase<S>

export type ToastOrchestratorArrayValue = Omit<BToastProps, 'modelValue'> & {
  /**
   * Position
   * @default 'top-end'
   */
  'position'?: ContainerPosition
  /**
   * Sets whether or not the toast should be appended to the container
   * @default undefined Implicitly defaults to the BOrchestrator's appendToast value
   */
  'appendToast'?: boolean
  /**
   * A proxy for the modelValue, essentially, you set this once, and it mimics the modelValue.
   *
   * Falsy values default to 5000
   *
   * @default 5000
   */
  'modelValue'?: BToastProps['modelValue'] // Convert it to be the same name as useModal.
  '_self': ControllerKey
  'onUpdate:modelValue'?: (val: boolean) => void
  '_component'?: Readonly<Component>
  'options': OrchestratorCreateOptions
  'promise': {
    value: PromiseWithComponent<typeof BToast, ToastOrchestratorParam>
    resolve: (value: BvTriggerableEvent | boolean | null) => void
    stop?: WatchHandle
  }
  'type': 'toast'
} & {
  [K in keyof BToastEmits as CamelCase<Prefix<'on-', K>>]?: (e: BToastEmits[K][0]) => void
} & {
  slots?: {
    [K in keyof BToastSlots]?: BToastSlots[K] | Readonly<Component>
  }
} & Record<string, unknown>
export type ToastOrchestratorParam<ComponentProps = Record<string, unknown>> = Omit<
  BToastProps,
  'modelValue'
> & {
  'title'?: MaybeRefOrGetter<BToastProps['title']>
  'body'?: MaybeRefOrGetter<BToastProps['body']>
  /**
   * Position
   * @default 'top-end'
   * @deprecated
   */
  'pos'?: ContainerPosition
  /**
   * Position
   * @default 'top-end'
   */
  'position'?: ContainerPosition
  /**
   * Sets whether or not the toast should be appended to the container
   * @default undefined Implicitly defaults to the BOrchestrator's appendToast value
   */
  'appendToast'?: boolean
  /**
   * A proxy for the modelValue, essentially, you set this once, and it mimics the modelValue.
   *
   * Falsy values default to 5000
   *
   * @default 5000
   */
  'modelValue'?: MaybeRefOrGetter<BToastProps['modelValue']>
  'onUpdate:modelValue'?: (val: boolean) => void
  'component'?: Readonly<Component>
  /**
   * @deprecated
   */
  'props'?: Record<string, unknown>
} & {
  [K in keyof BToastEmits as CamelCase<Prefix<'on-', K>>]?: (e: BToastEmits[K][0]) => void
} & {
  slots?: {
    [K in keyof BToastSlots]?: MaybeRefOrGetter<BToastSlots[K] | Readonly<Component>>
  }
} & ComponentProps

export type ToastOrchestratorCreateParam<ComponentProps = Record<string, unknown>> = MaybeRef<
  ToastOrchestratorParam<ComponentProps>
>

export type TooltipOrchestratorArrayValue = BTooltipProps & {
  'type': 'tooltip'
  '_self': ControllerKey
  'position': 'popover'
  'options': OrchestratorCreateOptions
  'onUpdate:modelValue'?: (val: boolean) => void
  '_component'?: Readonly<Component>
  'promise': {
    value: PromiseWithComponent<typeof BPopover | typeof BTooltip, PopoverOrchestratorParam>
    resolve: (value: BvTriggerableEvent | boolean | null) => void
    stop?: WatchHandle
  }
  'slots'?: {
    [K in keyof Omit<BPopoverSlots, 'target'>]?: BPopoverSlots[K] | Readonly<Component>
  }
} & {
  [K in keyof BPopoverEmits as CamelCase<Prefix<'on-', K>>]?: (e: BPopoverEmits[K][0]) => void
} & Record<string, unknown>

export type TooltipOrchestratorParam<ComponentProps = Record<string, unknown>> = Omit<
  BTooltipProps,
  'body' | 'title' | 'modelValue'
> & {
  'onUpdate:modelValue'?: (val: boolean) => void
  'title'?: MaybeRefOrGetter<BTooltipProps['title']>
  'body'?: MaybeRefOrGetter<BTooltipProps['body']>
  'modelValue'?: MaybeRefOrGetter<BTooltipProps['modelValue']>
  'component'?: Readonly<Component>
  'slots'?: {
    [K in keyof Omit<BPopoverSlots, 'target'>]?: MaybeRefOrGetter<
      BPopoverSlots[K] | Readonly<Component>
    >
  }
} & {
  [K in keyof BPopoverEmits as CamelCase<Prefix<'on-', K>>]?: (e: BPopoverEmits[K][0]) => void
} & ComponentProps

export type TooltipOrchestratorCreateParam<ComponentProps = Record<string, unknown>> = MaybeRef<
  TooltipOrchestratorParam<ComponentProps>
>

export type PopoverOrchestratorArrayValue = BPopoverProps &
  BTooltipProps & {
    'type': 'popover'
    '_self': ControllerKey
    'position': 'popover'
    'options': OrchestratorCreateOptions
    'onUpdate:modelValue'?: (val: boolean) => void
    '_component'?: Readonly<Component>
    'promise': {
      value: PromiseWithComponent<typeof BPopover | typeof BTooltip, PopoverOrchestratorParam>
      resolve: (value: BvTriggerableEvent | boolean | null) => void
      stop?: WatchHandle
    }
    'slots'?: {
      [K in keyof Omit<BPopoverSlots, 'target'>]?: BPopoverSlots[K] | Readonly<Component>
    }
  } & {
    [K in keyof BPopoverEmits as CamelCase<Prefix<'on-', K>>]?: (e: BPopoverEmits[K][0]) => void
  } & Record<string, unknown>

export type PopoverOrchestratorParam<ComponentProps = Record<string, unknown>> = Omit<
  BPopoverProps,
  'body' | 'title' | 'modelValue'
> & {
  'onUpdate:modelValue'?: (val: boolean) => void
  'title'?: MaybeRefOrGetter<BPopoverProps['title']>
  'body'?: MaybeRefOrGetter<BPopoverProps['body']>
  'modelValue'?: MaybeRefOrGetter<BPopoverProps['modelValue']>
  'component'?: Readonly<Component>
  'slots'?: {
    [K in keyof Omit<BPopoverSlots, 'target'>]?: MaybeRefOrGetter<
      BPopoverSlots[K] | Readonly<Component>
    >
  }
} & {
  [K in keyof BPopoverEmits as CamelCase<Prefix<'on-', K>>]?: (e: BPopoverEmits[K][0]) => void
} & ComponentProps

export type PopoverOrchestratorCreateParam<ComponentProps = Record<string, unknown>> = MaybeRef<
  PopoverOrchestratorParam<ComponentProps>
>

export type ModalOrchestratorArrayValue = BModalProps & {
  'type': 'modal'
  '_self': ControllerKey
  'position': 'modal'
  'onUpdate:modelValue'?: (val: boolean) => void
  'options': OrchestratorCreateOptions
  'promise': {
    value: PromiseWithComponent<typeof BModal, ModalOrchestratorParam>
    resolve: (value: BvTriggerableEvent | boolean | null) => void
    stop?: WatchHandle
  }
  '_component'?: Readonly<Component>
  'slots'?: {
    [K in keyof BModalSlots]?: BModalSlots[K] | Readonly<Component>
  }
} & {
  [K in keyof BModalEmits as CamelCase<Prefix<'on-', K>>]?: (e: BModalEmits[K][0]) => void
} & Record<string, unknown>

export type ModalOrchestratorParam<ComponentProps = Record<string, unknown>> = Omit<
  BModalProps,
  'body' | 'title' | 'modelValue'
> & {
  'onUpdate:modelValue'?: (val: boolean) => void
  'title'?: MaybeRefOrGetter<BModalProps['title']>
  'body'?: MaybeRefOrGetter<BModalProps['body']>
  'modelValue'?: MaybeRefOrGetter<BModalProps['modelValue']>
  'options'?: OrchestratorCreateOptions
  'component'?: Readonly<Component>
  /**
   * @deprecated
   */
  'props'?: Record<string, unknown>
  'slots'?: {
    [K in keyof BModalSlots]?: MaybeRefOrGetter<BModalSlots[K] | Readonly<Component>>
  }
} & {
  [K in keyof BModalEmits as CamelCase<Prefix<'on-', K>>]?: (e: BModalEmits[K][0]) => void
} & ComponentProps

export type ModalOrchestratorCreateParam<ComponentProps = Record<string, unknown>> = MaybeRef<
  ModalOrchestratorParam<ComponentProps>
>

export type OrchestratorCreateOptions = {
  keep?: boolean
  resolveOnHide?: boolean
  /*
   * @deprecated
   */
  returnBoolean?: boolean
}

export type OrchestratorArrayValue =
  | ToastOrchestratorArrayValue
  | ModalOrchestratorArrayValue
  | PopoverOrchestratorArrayValue
  | TooltipOrchestratorArrayValue
