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
export interface PromiseWithModalInternal extends AsyncDisposable {
  id: ControllerKey
  ref: ComponentPublicInstance<typeof BModal> | null
  show: () => PromiseWithModal
  hide: () => PromiseWithModal
  toggle: () => PromiseWithModal
  set: (val: Partial<ModalOrchestratorParam>) => PromiseWithModal
  get: () => ModalOrchestratorParam | undefined
  destroy: () => void
}
export interface PromiseWithModal
  extends Promise<BvTriggerableEvent | boolean | null>,
    PromiseWithModalInternal {}

/**
 * Promise that resolves to a boolean or null
 * @deprecated
 */
export interface PromiseWithModalBoolean
  extends Promise<boolean | null>,
    AsyncDisposable,
    PromiseWithModalInternal {}

export interface PromiseWithToast extends Promise<BvTriggerableEvent>, PromiseWithToastInternal {}
export interface PromiseWithToastInternal extends AsyncDisposable {
  id: ControllerKey
  ref: ComponentPublicInstance<typeof BToast> | null
  show: () => PromiseWithToast
  hide: () => void
  toggle: () => void
  set: (val: Partial<ToastOrchestratorParam>) => void
  get: () => ToastOrchestratorParam | undefined
  destroy: () => void
}
export interface PromiseWithPopover
  extends Promise<BvTriggerableEvent>,
    PromiseWithPopoverInternal {}
export interface PromiseWithPopoverInternal extends AsyncDisposable {
  id: ControllerKey
  ref: ComponentPublicInstance<typeof BPopover | typeof BTooltip> | null
  show: () => PromiseWithPopover
  hide: () => void
  toggle: () => void
  set: (val: Partial<PopoverOrchestratorParam | TooltipOrchestratorParam>) => void
  get: () => PopoverOrchestratorParam | undefined
  destroy: () => void
}

type Prefix<P extends string, S extends string> = `${P}${S}`

type CamelCase<S extends string> = S extends `${infer P1}-${infer P2}${infer P3}`
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
   * @default undefined Implicitly defaults to the BToastOrchestrator's appendToast value
   */
  'appendToast'?: boolean
  /**
   * A proxy for the modelValue, essentially, you set this once, and it mimics the modelValue.
   *
   * Falsy values default to 5000
   *
   * @default 5000
   */
  'modelValue'?: BToastProps['modelValue'] // Convert it to be the same name as useModalController.
  '_self': ControllerKey
  'onUpdate:modelValue'?: (val: boolean) => void
  'component'?: Readonly<Component>
  'options': ToastOrchestratorCreateOptions
  'promise': {
    value: PromiseWithToast
    resolve: (value: BvTriggerableEvent) => void
    stop?: WatchHandle
  }
} & {
  [K in keyof BToastEmits as CamelCase<Prefix<'on-', K>>]?: (e: BToastEmits[K][0]) => void
} & {
  slots?: {
    [K in keyof BToastSlots]?: BToastSlots[K] | Readonly<Component>
  }
}
export type ToastOrchestratorParam = Omit<BToastProps, 'modelValue'> & {
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
   * @default undefined Implicitly defaults to the BToastOrchestrator's appendToast value
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
  '_self'?: ControllerKey
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
}

export type ToastOrchestratorCreateParam = MaybeRef<ToastOrchestratorParam>

export type TooltipOrchestratorMapValue = BTooltipProps & {
  'onUpdate:modelValue'?: (val: boolean) => void
  'component'?: Readonly<Component>
  'promise': {
    value: PromiseWithPopover
    resolve: (value: BvTriggerableEvent) => void
    stop?: WatchHandle
  }
  'slots'?: {
    [K in keyof Omit<BPopoverSlots, 'target'>]?: BPopoverSlots[K] | Readonly<Component>
  }
} & {
  [K in keyof BPopoverEmits as CamelCase<Prefix<'on-', K>>]?: (e: BPopoverEmits[K][0]) => void
}

export type TooltipOrchestratorParam = Omit<BTooltipProps, 'body' | 'title' | 'modelValue'> & {
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
}

export type TooltipOrchestratorCreateParam = MaybeRef<TooltipOrchestratorParam>

export type PopoverOrchestratorMapValue = BPopoverProps &
  BTooltipProps & {
    'onUpdate:modelValue'?: (val: boolean) => void
    'component'?: Readonly<Component>
    'promise': {
      value: PromiseWithPopover
      resolve: (value: BvTriggerableEvent) => void
      stop?: WatchHandle
    }
    'slots'?: {
      [K in keyof Omit<BPopoverSlots, 'target'>]?: BPopoverSlots[K] | Readonly<Component>
    }
  } & {
    [K in keyof BPopoverEmits as CamelCase<Prefix<'on-', K>>]?: (e: BPopoverEmits[K][0]) => void
  }

export type PopoverOrchestratorParam = Omit<BPopoverProps, 'body' | 'title' | 'modelValue'> & {
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
}

export type PopoverOrchestratorCreateParam = MaybeRef<PopoverOrchestratorParam>

export type ModalOrchestratorMapValue = BModalProps & {
  'onUpdate:modelValue'?: (val: boolean) => void
  'options': ModalOrchestratorCreateOptions
  'promise': {
    value: PromiseWithModal | PromiseWithModalBoolean
    resolve: (value: BvTriggerableEvent | boolean | null) => void
    stop?: WatchHandle
  }
  'component'?: Readonly<Component>
  'slots'?: {
    [K in keyof BModalSlots]?: BModalSlots[K] | Readonly<Component>
  }
} & {
  [K in keyof BModalEmits as CamelCase<Prefix<'on-', K>>]?: (e: BModalEmits[K][0]) => void
}

export type ModalOrchestratorParam = Omit<BModalProps, 'body' | 'title' | 'modelValue'> & {
  'onUpdate:modelValue'?: (val: boolean) => void
  'title'?: MaybeRefOrGetter<BModalProps['title']>
  'body'?: MaybeRefOrGetter<BModalProps['body']>
  'modelValue'?: MaybeRefOrGetter<BModalProps['modelValue']>
  'options'?: ModalOrchestratorCreateOptions
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
}

export type ModalOrchestratorCreateParam = MaybeRef<ModalOrchestratorParam>

export type ModalOrchestratorCreateOptions = {
  keep?: boolean
  resolveOnHide?: boolean
  /*
   * @deprecated
   */
  returnBoolean?: boolean
}
export type ToastOrchestratorCreateOptions = {
  keep?: boolean
  resolveOnHide?: boolean
  /*
   * @deprecated
   */
  returnBoolean?: boolean
}
