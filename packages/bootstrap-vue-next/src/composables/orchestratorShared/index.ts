import {
  type ComponentPublicInstance,
  effectScope,
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
   * True from a show() request on a mounted component until the store records it as open (the
   * component reveals it) or the cycle settles. A show can still be waiting for its frame or delay
   */
  let showRequested = false
  /**
   * The cycle waiting for a show requested through the store's modelValue: the mount-time show of
   * an item that was not mounted when show() was called, or the show a mounted component starts
   * when its modelValue changes. Only that show's show-prevented event may settle it
   */
  let storeShowCycle: Dismissal | undefined
  /**
   * True from a hide request until the store's modelValue changes or the component reports hidden.
   * The store keeps recording the component as open until its hide delay has passed, so a show()
   * in that window has to reach the component to cancel the hide
   */
  let hideRequested = false
  /**
   * The last numeric modelValue the item had: a toast's countdown. The component counts it down to
   * 0, so showing the item again has to put it back. Forgotten once the item is shown with `true`
   */
  let countdown: number | undefined

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
    show?: () => unknown
    hide?: (trigger?: string, noEmit?: boolean) => void
    toggle?: () => void
    visible?: boolean
  }
  const findItem = () => store.value.get(id)
  // Detached, so the watcher lives exactly as long as the controller whether or not it was created
  // inside a component's setup. destroy() stops it
  const scope = effectScope(true)
  scope.run(() => {
    watch(
      () => findItem()?.value.props.modelValue,
      (value) => {
        hideRequested = false
        if (value) showRequested = false
        if (typeof value === 'number' && value > 0) {
          countdown = value
        } else if (value === true) {
          countdown = undefined
        }
      },
      {flush: 'sync'}
    )
  })

  // Backs controller.ref. It has to be reactive so awaitDismissal notices the component unmounting,
  // shallow because component instances must not be made deeply reactive
  const instance = shallowRef<RefWithMethods | null>(null)
  /**
   * Called with the component's hide, hidden or show-prevented event. Settles the current cycle
   */
  const finishCycle = (event: BvTriggerableEvent) => {
    showRequested = false
    storeShowCycle = undefined
    const current = dismissal
    dismissal = undefined
    current?.resolve(event)
  }
  const settle = (event: BvTriggerableEvent) => {
    // A component reports show-prevented for any show. It only ends the cycle waiting for a show
    // requested through the store; a prevented show() call is read from that call's own result
    if (event.eventType === 'show-prevented' && (!dismissal || storeShowCycle !== dismissal)) return
    finishCycle(event)
    // A hide event only gets here with resolveOnHide. The component is still open at this point
    hideRequested = event.eventType === 'hide'
  }
  /**
   * Shows the item by writing its modelValue. Used when there is no component show() to call, and
   * to restart a countdown, which the component only does for a numeric modelValue
   */
  const showThroughStore = (cycle: Dismissal, modelValue: true | number) => {
    storeShowCycle = cycle
    controller.set({modelValue} as never)
    // A mounted component reacts to its new modelValue in the next flush. One that has yet to
    // mount shows in its mounted hook, see the ref setter
    if (instance.value !== null) {
      void nextTick(() => {
        if (storeShowCycle === cycle) storeShowCycle = undefined
      })
    }
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
          if (!modelValue && mounted === null) {
            const event = new BvTriggerableEvent('hidden', {
              trigger: unmountedHideTrigger ?? null,
              ok: null,
            })
            // Settle now, so a show() right after this can't join the finished cycle
            if (dismissal === cycle) finishCycle(event)
            resolve(event)
          }
        },
        // immediate: destroy() hides before it awaits, so the dismissal may already have happened.
        // sync: decide before the orchestrator can mount the item
        {immediate: true, flush: 'sync'}
      )
    })
    try {
      return await Promise.race([cycle.promise, dismissedWithoutInstance])
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
      // The mount-time show runs in the component's mounted hook, right after its ref is set
      if (value !== null && storeShowCycle) {
        const cycle = storeShowCycle
        void Promise.resolve().then(() => {
          if (storeShowCycle === cycle) storeShowCycle = undefined
        })
      }
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
      const abort = () => {
        controller.hide('abort')
        // A show listener can abort before its show is committed, when there is nothing to hide
        // yet: the mount-time show of an item that was not mounted, or a show still being
        // requested. Hide again once it had the chance to commit; a repeated hide is ignored
        void Promise.resolve().then(() => {
          if (dismissal === cycle) controller.hide('abort')
        })
      }
      signal?.addEventListener('abort', abort, {once: true})
      try {
        if (signal?.aborted) {
          abort()
        } else if (!showRequested && (!currentModelValue || hideRequested)) {
          // With hideRequested the store still records the component as open, but it may be
          // waiting out a hide. Its show() cancels that hide, and does nothing if there is none
          const cancelsHide = !!currentModelValue
          if (!cancelsHide) unmountedHideTrigger = undefined
          const refWithMethods = controller.ref
          if (!cancelsHide && countdown !== undefined) {
            showThroughStore(cycle, countdown)
          } else if (
            refWithMethods !== null &&
            'show' in refWithMethods &&
            typeof refWithMethods.show === 'function'
          ) {
            // The store clears showRequested when it records the open, which it already has here
            if (!cancelsHide) showRequested = true
            hideRequested = false
            void Promise.resolve(refWithMethods.show()).then((result) => {
              if (result === 'show-prevented' && dismissal === cycle) {
                finishCycle(new BvTriggerableEvent('show-prevented', {ok: null}))
              }
            })
          } else if (!cancelsHide) {
            showThroughStore(cycle, true)
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
        // Before the call: a hide that finishes at once is recorded by the store, which clears it
        hideRequested = true
        refWithMethods.hide(trigger, true)
      } else {
        if (refWithMethods === null) unmountedHideTrigger = trigger
        controller.set({modelValue: false})
      }
    },
    toggle() {
      const currentItem = controller.get()
      const refWithMethods = controller.ref
      if (!currentItem?.value.props.modelValue && countdown !== undefined) {
        controller.set({modelValue: countdown} as never)
      } else if (
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
      try {
        if (item && (item.value.props.modelValue || showRequested)) {
          const cycle = currentDismissal()
          controller.hide('destroy')
          await awaitDismissal(cycle)
          await nextTick()
        }
      } finally {
        if (item) store.value.delete(id)
        scope.stop()
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
