import type {Component, ComponentPublicInstance, MaybeRef} from 'vue'
import type {BModalProps, BPopoverProps, BToastProps, BTooltipProps} from './ComponentProps'
import type {ContainerPosition} from './Alignment'
import type {BModalSlots, BPopoverSlots, BToastSlots, BTooltipSlots} from './ComponentSlots'
import type {BModalEmits, BPopoverEmits, BToastEmits, BTooltipEmits} from './ComponentEmits'
import type {BvTriggerableEvent} from '../utils'
import type BModal from '../components/BModal/BModal.vue'
import type BToast from '../components/BToast/BToast.vue'
import type BPopover from '../components/BPopover/BPopover.vue'
import type BTooltip from '../components/BTooltip/BTooltip.vue'

// Common
export type ControllerKey = symbol | string
type Prefix<P extends string, S extends string> = `${P}${S}`
export type CamelCase<S extends string> = S extends `${infer P1}-${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
  : Lowercase<S>
export type OrchestratorCreateOptions = {
  keep?: boolean
  resolveOnHide?: boolean
}

// Promises
export interface PromiseWithComponent<T, P>
  extends Promise<BvTriggerableEvent>, PromiseWithComponentInternal<T, P> {}
export interface ShowPromiseWithComponent<T, P>
  extends Promise<BvTriggerableEvent & AsyncDisposable>, PromiseWithComponentInternal<T, P> {}
export interface PromiseWithComponentInternal<T, P> extends AsyncDisposable {
  id: ControllerKey
  ref: ComponentPublicInstance<T> | null
  show: () => ShowPromiseWithComponent<T, P>
  hide: (trigger?: string) => PromiseWithComponent<T, P>
  toggle: () => PromiseWithComponent<T, P>
  set: (val: Partial<P>) => PromiseWithComponent<T, P>
  get: () => P | undefined
  destroy: () => Promise<void>
}

type CreateParam<
  BaseComponentProps extends Record<string, any>,
  SuppliedComponentProps extends Record<string, any>,
  BaseComponentSlots extends Record<string, any>,
  BaseComponentEmits extends Record<string, any>,
> = MaybeRef<BaseComponentProps & {
  'options': OrchestratorCreateOptions
  'component'?: Readonly<Component>
  'slots'?: {
    [K in keyof BaseComponentSlots]?: BaseComponentSlots[K] | Readonly<Component>
  }
} & {
  [K in keyof BaseComponentEmits as CamelCase<Prefix<'on-', K>>]?: (e: BaseComponentEmits[K][0]) => void
} & SuppliedComponentProps>
type ArrayValue<
  BaseComponentProps extends Record<string, any>,
  BaseComponentSlots extends Record<string, any>,
  BaseComponentEmits extends Record<string, any>,
  TComponent,
  TParam,
> = {
  component?: Readonly<Component>
  options: OrchestratorCreateOptions
  slots?: {
    [K in keyof BaseComponentSlots]?: BaseComponentSlots[K] | Readonly<Component>
  }
  self: ControllerKey
  promise: {
    value: PromiseWithComponent<TComponent, TParam>
    resolve: (value: BvTriggerableEvent) => void
  }
  props: BaseComponentProps & {
    [K in keyof BaseComponentEmits as CamelCase<
      Prefix<'on-', Extract<K, string>>
    >]?: (e: BaseComponentEmits[K][0]) => void
  } & Record<string, unknown>
}

// Toast
export type ToastOrchestratorCreateParam<ComponentProps extends Record<string, any> = Record<string, any>> = CreateParam<
  BToastProps & {
    // These are props that are specific to how toast renders.
    // They aren't toast props, rather props for the orchestrator(s)
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
  },
  ComponentProps,
  BToastSlots,
  BToastEmits
>
type ToastArrayProps =
  BToastProps & {
  position?: ContainerPosition
  appendToast?: boolean
}
export type ToastOrchestratorArrayValue = ArrayValue<
  ToastArrayProps,
  BToastSlots,
  BToastEmits,
  typeof BToast,
  ToastOrchestratorParam
>

// Tooltip
export type TooltipOrchestratorCreateParam<ComponentProps extends Record<string, any> = Record<string, any>> = CreateParam<
  BTooltipProps,
  ComponentProps,
  Omit<BTooltipSlots, 'target'>,
  BTooltipEmits
>
export type TooltipOrchestratorArrayValue = ArrayValue<
  BTooltipProps,
  Omit<BTooltipSlots, 'target'>,
  BTooltipEmits,
  typeof BTooltip,
  TooltipOrchestratorParam
>

// Popovers
export type PopoverOrchestratorCreateParam<ComponentProps extends Record<string, any> = Record<string, any>> = CreateParam<
  BPopoverProps,
  ComponentProps,
  Omit<BPopoverSlots, 'target'>,
  BPopoverEmits
>
export type PopoverOrchestratorArrayValue = ArrayValue<
  BPopoverProps,
  Omit<BPopoverSlots, 'target'>,
  BPopoverEmits,
  typeof BPopover,
  PopoverOrchestratorParam
>

// Modals
export type ModalOrchestratorCreateParam<ComponentProps extends Record<string, any> = Record<string, any>> = CreateParam<
  BModalProps,
  ComponentProps,
  BModalSlots,
  BModalEmits
  >
export type ModalOrchestratorArrayValue = ArrayValue<
  BModalProps,
  BModalSlots,
  BModalEmits,
  typeof BModal,
  ModalOrchestratorParam
>

export type OrchestratorArrayValue =
  | ToastOrchestratorArrayValue
  | ModalOrchestratorArrayValue
  | PopoverOrchestratorArrayValue
  | TooltipOrchestratorArrayValue
