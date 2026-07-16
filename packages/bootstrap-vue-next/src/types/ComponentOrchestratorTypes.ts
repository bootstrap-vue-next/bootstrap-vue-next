/* oxlint-disable no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {type Component, type ComponentPublicInstance, type MaybeRef, type Ref} from 'vue'
import type {BModalProps, BPopoverProps, BToastProps, BTooltipProps} from './ComponentProps'
import type {ContainerPosition} from './Alignment'
import type {BModalSlots, BPopoverSlots, BToastSlots, BTooltipSlots} from './ComponentSlots'
import type {BModalEmits, BPopoverEmits, BToastEmits, BTooltipEmits} from './ComponentEmits'
import type {BvTriggerableEvent} from '../utils'

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
// TODO check which ones of these are async
export interface ComponentController<
  Component,
  Props extends Ref<OrchestratorArrayValue>,
> extends AsyncDisposable {
  id: ControllerKey
  ref: ComponentPublicInstance<Component> | null
  show: () => Promise<BvTriggerableEvent & AsyncDisposable>
  hide: (trigger?: string) => void
  toggle: () => void
  set: (val: Partial<Props['value']['props']>) => void
  get: () => Props | undefined
  destroy: () => Promise<void>
}

export type PromiseWithController<Component, Props extends Ref<OrchestratorArrayValue>> = {
  resolve: (value: BvTriggerableEvent) => void
  controller: ComponentController<Component, Props>
}

type OrchestratorCreate<
  BaseComponentProps extends Record<string, any>,
  SuppliedComponentProps extends Record<string, any>,
  BaseComponentSlots extends Record<string, any>,
  BaseComponentEmits extends Record<string, any>,
> = MaybeRef<
  BaseComponentProps & {
    options?: OrchestratorCreateOptions
    component?: Readonly<Component>
    slots?: {
      [K in keyof BaseComponentSlots]?: BaseComponentSlots[K] | Readonly<Component>
    }
  } & {
    [K in Extract<keyof BaseComponentEmits, string> as CamelCase<Prefix<'on-', K>>]?: (
      e: BaseComponentEmits[K][0]
    ) => void
  } & SuppliedComponentProps
>
type ArrayValue<
  BaseComponentProps extends Record<string, any>,
  BaseComponentSlots extends Record<string, any>,
  BaseComponentEmits extends Record<string, any>,
> = {
  component?: Readonly<Component>
  options?: OrchestratorCreateOptions
  slots?: {
    [K in keyof BaseComponentSlots]?: BaseComponentSlots[K] | Readonly<Component>
  }
  id: ControllerKey
  fns: {
    resolve: (value: BvTriggerableEvent) => void
    setRef: (v: ComponentPublicInstance) => void
    destroy: () => Promise<void>
  }
  props: BaseComponentProps & {
    [K in keyof BaseComponentEmits as CamelCase<Prefix<'on-', Extract<K, string>>>]?: (
      e: BaseComponentEmits[K][0]
    ) => void
  } & Record<string, unknown>
}

// Toast
export type ToastOrchestratorCreateParam<
  ComponentProps extends Record<string, any> = Record<string, any>,
> = OrchestratorCreate<
  BToastProps & {
    // These are props that are specific to how toast renders.
    // They aren't toast props, rather props for the orchestrator(s)
    /**
     * Position
     * @default 'top-end'
     */
    position?: ContainerPosition
    /**
     * Sets whether the toast should be appended to the container
     * @default undefined Implicitly defaults to the BOrchestrator's appendToast value
     */
    appendToast?: boolean
  },
  ComponentProps,
  BToastSlots,
  BToastEmits
>
type ToastArrayProps = BToastProps & {
  position?: ContainerPosition
  appendToast?: boolean
}
export type ToastOrchestratorArrayValue = ArrayValue<ToastArrayProps, BToastSlots, BToastEmits>

// Tooltip
export type TooltipOrchestratorCreateParam<
  ComponentProps extends Record<string, any> = Record<string, any>,
> = OrchestratorCreate<BTooltipProps, ComponentProps, Omit<BTooltipSlots, 'target'>, BTooltipEmits>
export type TooltipOrchestratorArrayValue = ArrayValue<
  BTooltipProps,
  Omit<BTooltipSlots, 'target'>,
  BTooltipEmits
>

// Popovers
export type PopoverOrchestratorCreateParam<
  ComponentProps extends Record<string, any> = Record<string, any>,
> = OrchestratorCreate<BPopoverProps, ComponentProps, Omit<BPopoverSlots, 'target'>, BPopoverEmits>
export type PopoverOrchestratorArrayValue = ArrayValue<
  BPopoverProps,
  Omit<BPopoverSlots, 'target'>,
  BPopoverEmits
>

// Modals
export type ModalOrchestratorCreateParam<
  ComponentProps extends Record<string, any> = Record<string, any>,
> = OrchestratorCreate<BModalProps, ComponentProps, BModalSlots, BModalEmits>
export type ModalOrchestratorArrayValue = ArrayValue<BModalProps, BModalSlots, BModalEmits>

export type OrchestratorArrayValue =
  | ToastOrchestratorArrayValue
  | ModalOrchestratorArrayValue
  | PopoverOrchestratorArrayValue
  | TooltipOrchestratorArrayValue
