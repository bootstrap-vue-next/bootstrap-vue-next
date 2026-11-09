import {
  type ComponentPublicInstance,
  inject,
  nextTick,
  provide,
  readonly,
  type Ref,
  ref,
  shallowRef,
  watch,
} from 'vue'
import type {
  ComponentController,
  ControllerKey,
  OrchestratorShowOptions,
  PromiseWithController,
} from '../../types'
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
  /**
   * True from a show() request until the component reports its dismissal. The store only learns
   * that the component is open once its show is revealed, and a show can still be waiting for its
   * frame or delay
   */
  let showRequested = false

  type Dismissal = {promise: Promise<BvTriggerableEvent>; resolve: (e: BvTriggerableEvent) => void}
  /**
   * The dismissal the current show/hide cycle is waiting for. Each cycle gets its own, so a
   * controller can be shown again after it was dismissed
   */
  let dismissal: Dismissal | undefined
  const currentDismissal = (): Dismissal => {
    if (!dismissal) {
      let resolve: (e: BvTriggerableEvent) => void = () => {}
      const promise = new Promise<BvTriggerableEvent>((r) => {
        resolve = r
      })
      dismissal = {promise, resolve}
    }
    return dismissal
  }

  type RefWithMethods = ComponentPublicInstance<TComponent> & {
    show?: () => void
    hide?: (trigger?: string, noEmit?: boolean) => void
    toggle?: () => void
    visible?: boolean
  }
  const findItem = () => store.value.get(id)

  // Backs controller.ref. It has to be reactive so awaitDismissal notices the component unmounting,
  // shallow because component instances must not be made deeply reactive
  const instance = shallowRef<RefWithMethods | null>(null)
  /**
   * Called with the component's hide or hidden event. Settles the current cycle
   */
  const settle = (event: BvTriggerableEvent) => {
    showRequested = false
    const current = dismissal
    dismissal = undefined
    current?.resolve(event)
  }
  // The trigger of a hide() made while no component is mounted, for the event awaitDismissal makes up
  let unmountedHideTrigger: string | undefined

  /**
   * Resolves with the component's own event. A hidden item with no mounted component never emits
   * one: it was dismissed before it mounted, or it unmounted before its hide finished. In that case
   * it resolves on its own. Mounted items always go through the component.
   * Take the cycle before asking the component to show or hide: it may report synchronously
   */
  const awaitDismissal = async (cycle: Dismissal = currentDismissal()) => {
    let stopWatch = () => {}
    const dismissedWithoutInstance = new Promise<BvTriggerableEvent>((resolve) => {
      stopWatch = watch(
        [() => findItem()?.value.props.modelValue, instance],
        ([modelValue, mounted]) => {
          if (!modelValue && mounted === null)
            resolve(
              new BvTriggerableEvent('hidden', {trigger: unmountedHideTrigger ?? null, ok: null})
            )
        },
        // immediate: destroy() hides before it awaits, so the dismissal may already have happened.
        // sync: decide before the orchestrator can mount the item
        {immediate: true, flush: 'sync'}
      )
    })
    try {
      const event = await Promise.race([cycle.promise, dismissedWithoutInstance])
      // Settled without the component: end the cycle for everyone else waiting on it too
      if (dismissal === cycle) settle(event)
      return event
    } finally {
      stopWatch()
    }
  }

  const controller = {
    id,
    // A getter so the public API keeps returning the instance itself rather than the ref
    // v100 TODO: expose it as `ref: readonly(instance)`. Exposing a Ref is a breaking change, so it waits for a major
    get ref(): RefWithMethods | null {
      return instance.value
    },
    set ref(value: RefWithMethods | null) {
      instance.value = value
    },
    async show({signal}: OrchestratorShowOptions = {}) {
      const withDispose = (event: BvTriggerableEvent) =>
        Object.assign(Object.create(event), {
          [Symbol.asyncDispose]: controller.destroy,
        })
      const currentModelValue = controller.get()?.value.props.modelValue
      // The store learns the component is open only once its show is revealed, so also count a show
      // this controller requested and the component's own visible flag
      const isShown =
        !!currentModelValue ||
        showRequested ||
        (controller.ref as RefWithMethods | null)?.visible === true
      if (signal?.aborted && !isShown) {
        return withDispose(new BvTriggerableEvent('hidden', {trigger: 'abort', ok: null}))
      }
      const cycle = currentDismissal()
      const abort = () => controller.hide('abort')
      signal?.addEventListener('abort', abort, {once: true})
      try {
        if (signal?.aborted) {
          abort()
        } else if (!currentModelValue) {
          unmountedHideTrigger = undefined
          showRequested = true
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
          // A show listener may have aborted while the show was being requested, before there was
          // anything to hide. Hide now that the show is committed
          if (signal?.aborted) abort()
        }
        return withDispose(await awaitDismissal(cycle))
      } finally {
        signal?.removeEventListener('abort', abort)
      }
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
        if (refWithMethods === null) unmountedHideTrigger = trigger
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
        if (item.value.props.modelValue || showRequested) {
          const cycle = currentDismissal()
          controller.hide('destroy')
          await awaitDismissal(cycle)
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
    resolve: settle,
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
