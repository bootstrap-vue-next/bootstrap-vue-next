import {type ComponentPublicInstance, inject, nextTick, provide, readonly, type Ref, ref, toValue} from 'vue'
import type {
  ControllerKey,
  ModalOrchestratorArrayValue,
  PromiseWithComponent,
  PromiseWithComponentInternal,
  ShowPromiseWithComponent,
} from '../../types/ComponentOrchestratorTypes'
import type {BvTriggerableEvent} from '../../utils'
import {orchestratorRegistryKey, type OrchestratorStoreObject} from '../../utils/keys'

export function buildPromise<TComponent, TParam extends Ref>(
  _id: ControllerKey,
  store: Ref<Ref<ModalOrchestratorArrayValue>[]>
): {
  value: PromiseWithComponent<TComponent, TParam>
  resolve: (value: BvTriggerableEvent) => void
} {
  let resolveFunc: (value: BvTriggerableEvent) => void = () => {}

  const promise = new Promise<BvTriggerableEvent>((resolve) => {
    resolveFunc = resolve
  }) as PromiseWithComponent<TComponent, TParam>

  type RefWithMethods = ComponentPublicInstance<TComponent> & {
    show?: () => void
    hide?: (trigger?: string, noEmit?: boolean) => void
    toggle?: () => void
  }
  Object.assign(promise, {
    id: _id,
    ref: null as ComponentPublicInstance<TComponent> | null,
    show() {
      const refWithMethods = this.ref as RefWithMethods | null
      if (refWithMethods !== null && 'show' in refWithMethods && typeof refWithMethods.show === 'function') {
        refWithMethods.show()
      } else {
        this.set({modelValue: true} as unknown as Partial<TParam>)
      }
      const self = this as PromiseWithComponentInternal<TComponent, TParam>
      const showPromise = promise.then((event) =>
        Object.assign(Object.create(event), {
          [Symbol.asyncDispose]: self.destroy,
        })
      )
      return Object.assign(showPromise, {
        id: self.id,
        ref: self.ref,
        show: self.show,
        hide: self.hide,
        toggle: self.toggle,
        set: self.set,
        get: self.get,
        destroy: self.destroy,
        [Symbol.asyncDispose]: self.destroy,
      }) as ShowPromiseWithComponent<TComponent, TParam>
    },
    hide(trigger?: string) {
      const refWithMethods = this.ref as RefWithMethods | null
      if (refWithMethods !== null && 'hide' in refWithMethods && typeof refWithMethods.hide === 'function') {
        refWithMethods.hide(trigger, true)
        return promise
      } else {
        return this.set({modelValue: false} as unknown as Partial<TParam>)
      }
    },
    toggle() {
      const currentItem = this.get() as TParam & {modelValue?: unknown}
      const refWithMethods = this.ref as RefWithMethods | null
      if (refWithMethods !== null && 'toggle' in refWithMethods && typeof refWithMethods.toggle === 'function') {
        refWithMethods.toggle()
        return promise
      } else {
        return this.set({modelValue: !currentItem?.modelValue} as unknown as Partial<TParam>)
      }
    },
    get(): TParam | undefined {
      return store.value.find((el) => el.value._self === _id) as TParam | undefined
    },
    set(val: Partial<TParam>) {
      const item = store.value.find((el) => el.value._self === _id)
      if (item?.value) {
        item.value = {
          ...item.value,
          ...toValue(val)
        }
      }
      return promise
    },
    async destroy() {
      const item = store.value.find((el) => el.value._self === _id)
      if (!item?.value) return
      if (item.value.props.modelValue) {
        await new Promise<BvTriggerableEvent>((resolve) => {
          const prev = item.value.props['onHidden']
          item.value.props['onHidden'] = (e) => {
            prev?.(e)
            resolve(e)
          }
          nextTick(() => {
            this.hide('destroy')
          })
        })
      }
      store.value = store.value.filter((el) => el.value._self !== _id)
    },
    [Symbol.asyncDispose]() {
      return this.destroy()
    },
  } as PromiseWithComponentInternal<TComponent, TParam>)

  return {
    value: promise,
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
      modal: [],
      tooltip: [],
      popover: [],
      toast: []
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
