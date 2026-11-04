import {
  type ComponentPublicInstance,
  inject,
  nextTick,
  provide,
  readonly,
  type Ref,
  ref,
  watch,
} from 'vue'
import type {ComponentController, ControllerKey, PromiseWithController} from '../../types'
import {BvTriggerableEvent} from '../../utils'
import {orchestratorRegistryKey, type OrchestratorStoreObject} from '../../utils/keys'

/* oxlint-disable-next-line no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export type ValueInMapRecord<MapRecord> = MapRecord extends Map<any, infer I> ? I : never

export const buildController = <
  TComponent,
  TStore extends Readonly<Ref<OrchestratorStoreObject[keyof OrchestratorStoreObject]>>,
>(
  id: ControllerKey,
  store: TStore
): PromiseWithController<TComponent, ValueInMapRecord<TStore['value']>> => {
  let resolveFunc: (value: BvTriggerableEvent) => void = () => {}

  const basePromise = new Promise<BvTriggerableEvent>((resolve) => {
    resolveFunc = resolve
  })

  type RefWithMethods = ComponentPublicInstance<TComponent> & {
    show?: () => void
    hide?: (trigger?: string, noEmit?: boolean) => void
    toggle?: () => void
  }
  const findItem = () => store.value.get(id)

  /**
   * Resolves with the component's own event. An item that is dismissed before it has mounted never
   * emits one, so in that case it resolves as soon as nothing is mounted and the item is hidden.
   * Mounted items always go through the component, even when the store entry is what changed
   */
  const awaitDismissal = async () => {
    let stopWatch = () => {}
    const dismissedWithoutInstance = new Promise<BvTriggerableEvent>((resolve) => {
      stopWatch = watch(
        () => findItem()?.value.props.modelValue,
        (modelValue) => {
          if (!modelValue && controller.ref === null)
            resolve(new BvTriggerableEvent('hidden', {ok: null}))
        },
        // destroy() hides before it awaits, so the dismissal may already have happened
        // sync: decide when the dismissal happens, before the orchestrator can mount the item
        {immediate: true, flush: 'sync'}
      )
    })
    try {
      return await Promise.race([basePromise, dismissedWithoutInstance])
    } finally {
      stopWatch()
    }
  }

  const controller = {
    id,
    ref: null as RefWithMethods | null,
    async show() {
      const currentModelValue = controller.get()?.value.props.modelValue
      if (currentModelValue) {
        const event = await awaitDismissal()
        return Object.assign(Object.create(event), {
          [Symbol.asyncDispose]: controller.destroy,
        })
      }
      const refWithMethods = controller.ref
      if (
        refWithMethods !== null &&
        'show' in refWithMethods &&
        typeof refWithMethods.show === 'function'
      ) {
        refWithMethods.show()
      } else {
        controller.set({modelValue: true})
      }
      const event = await awaitDismissal()
      return Object.assign(Object.create(event), {
        [Symbol.asyncDispose]: controller.destroy,
      })
    },
    hide(trigger?: string) {
      const refWithMethods = controller.ref
      if (
        refWithMethods !== null &&
        'hide' in refWithMethods &&
        typeof refWithMethods.hide === 'function'
      ) {
        refWithMethods.hide(trigger, true)
      } else {
        controller.set({modelValue: false})
      }
    },
    toggle() {
      const currentItem = controller.get()
      const refWithMethods = controller.ref
      if (
        refWithMethods !== null &&
        'toggle' in refWithMethods &&
        typeof refWithMethods.toggle === 'function'
      ) {
        refWithMethods.toggle()
      } else {
        controller.set({modelValue: !currentItem?.value.props.modelValue})
      }
    },
    get: findItem,
    set(val: Partial<ValueInMapRecord<TStore['value']>['value']['props']>) {
      const current = findItem()
      if (current?.value) {
        current.value = {
          ...current.value,
          props: {
            ...current.value.props,
            ...val,
            /* oxlint-disable no-explicit-any */
            /* eslint-disable @typescript-eslint/no-explicit-any */
          } as any,
        }
      }
    },
    async destroy() {
      const item = findItem()
      if (!item) return
      try {
        if (item.value.props.modelValue) {
          controller.hide('destroy')
          await awaitDismissal()
          await nextTick()
        }
      } finally {
        store.value.delete(id)
      }
    },
    [Symbol.asyncDispose]() {
      return controller.destroy()
    },
  } as ComponentController<TComponent, ValueInMapRecord<TStore['value']>>

  return {
    controller,
    resolve: resolveFunc,
  }
}

export const _newOrchestratorRegistry = (): {
  store: Readonly<Ref<OrchestratorStoreObject>>
  _isToastAppend: Readonly<Ref<boolean>>
  _setToastAppend: (value: boolean) => void
  _isOrchestratorInstalled: Readonly<Ref<boolean>>
  _setOrchestratorInstalled: (value: boolean) => void
} => {
  const _isOrchestratorInstalled = ref(false)
  const _isToastAppend = ref(false)

  return {
    store: ref({
      modal: new Map(),
      tooltip: new Map(),
      popover: new Map(),
      toast: new Map(),
    }),
    _isOrchestratorInstalled: readonly(_isOrchestratorInstalled),
    _setOrchestratorInstalled: (v) => {
      _isOrchestratorInstalled.value = v
    },
    _isToastAppend: readonly(_isToastAppend),
    _setToastAppend: (v) => {
      _isToastAppend.value = v
    },
  }
}

export const useOrchestratorRegistry = () => {
  const orchestratorRegistry = inject(orchestratorRegistryKey, null)

  if (orchestratorRegistry) {
    return orchestratorRegistry
  }
  const newOrchestratorRegistry = _newOrchestratorRegistry()
  provide(orchestratorRegistryKey, newOrchestratorRegistry)
  return newOrchestratorRegistry
}

export const getOrchestratorControllerId = (propId: string | undefined) => {
  const id: ControllerKey = propId || Symbol('OrchestratorItem')

  return {
    /**
     * This id is used for stability in the store, using the createIdWatcher will update the store if the id ever changes
     */
    storeId: id,
    /**
     * Do not pass in the symbol as a prop. Html attribute cannot be a symbol. Thus it's internal
     */
    htmlAttributeId: typeof id === 'string' ? id : undefined,
  }
}
