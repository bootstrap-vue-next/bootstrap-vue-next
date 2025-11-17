import {
  type ComponentPublicInstance,
  inject,
  nextTick,
  provide,
  type Ref,
  ref,
  toValue,
  type WatchHandle,
} from 'vue'
import type {
  ControllerKey,
  OrchestratorArrayValue,
  PromiseWithComponent,
  PromiseWithComponentInternal,
} from '../types/ComponentOrchestratorTypes'
import type {BvTriggerableEvent} from '../utils'
import {orchestratorRegistryKey} from '../utils/keys'

export function buildPromise<TComponent, TParam, TArrayValue extends OrchestratorArrayValue>(
  _id: ControllerKey,
  store: Ref<TArrayValue[]>
): {
  value: PromiseWithComponent<TComponent, TParam>
  resolve: (value: BvTriggerableEvent | boolean | null) => void
  stop: WatchHandle | undefined
} {
  let resolveFunc: (value: BvTriggerableEvent | boolean | null) => void = () => {}

  const promise = new Promise<BvTriggerableEvent | boolean | null>((resolve) => {
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
      if (refWithMethods?.show) {
        refWithMethods.show()
      } else return this.set({modelValue: true} as unknown as Partial<TParam>)
      return promise
    },
    hide(trigger?: string) {
      const refWithMethods = this.ref as RefWithMethods | null
      if (refWithMethods?.hide) {
        refWithMethods.hide(trigger, true)
      } else return this.set({modelValue: false} as unknown as Partial<TParam>)
      return promise
    },
    toggle() {
      const currentItem = this.get() as TParam & {modelValue?: unknown}
      const refWithMethods = this.ref as RefWithMethods | null
      if (refWithMethods?.toggle) {
        refWithMethods.toggle()
      } else return this.set({modelValue: !currentItem?.modelValue} as unknown as Partial<TParam>)
      return promise
    },
    get(): TParam | undefined {
      return store.value.find((el) => el._self === _id) as TParam | undefined
    },
    set(val: Partial<TParam>) {
      const itemIndex = store.value.findIndex((el) => el._self === _id)
      const item = store.value[itemIndex]
      if (item) {
        const v = {...toValue(item), ...toValue(val)}
        if (item.modelValue !== v.modelValue) {
          item['onUpdate:modelValue']?.(v.modelValue as boolean)
        }
        store.value.splice(itemIndex, 1, {
          ...v,
          title: toValue((v as Record<string, unknown>).title),
          body: toValue((v as Record<string, unknown>).body),
          modelValue: toValue(v.modelValue),
        } as TArrayValue)
      }
      return promise
    },
    async destroy() {
      const item = store.value.find((el) => el._self === _id)
      if (!item) return
      item.promise.stop?.()
      if (item.modelValue) {
        await new Promise((resolve) => {
          const prev = item['onHidden']
          item['onHidden'] = (e) => {
            prev?.(e)
            resolve(e)
          }
          nextTick(() => {
            this.hide('destroy')
          })
        })
      }
      store.value.splice(
        store.value.findIndex((el) => el._self === _id),
        1
      )
    },
    async [Symbol.asyncDispose]() {
      await this.destroy()
    },
  } as PromiseWithComponentInternal<TComponent, TParam>)

  return {
    value: promise,
    resolve: resolveFunc,
    stop: undefined as WatchHandle | undefined,
  }
}

export const _newOrchestratorRegistry = (): {
  store: Ref<OrchestratorArrayValue[]>
  _isOrchestratorInstalled: Ref<boolean>
  _isToastAppend: Ref<boolean>
} => ({
  store: ref<OrchestratorArrayValue[]>([]),
  _isOrchestratorInstalled: ref(false),
  _isToastAppend: ref(false),
})

export const useOrchestratorRegistry = () => {
  const orchestratorRegistry = inject(orchestratorRegistryKey, null)

  if (orchestratorRegistry) {
    return orchestratorRegistry
  }
  const newOrchestratorRegistry = _newOrchestratorRegistry()
  provide(orchestratorRegistryKey, newOrchestratorRegistry)
  return newOrchestratorRegistry
}
