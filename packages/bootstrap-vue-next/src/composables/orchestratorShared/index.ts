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
  ShowPromiseWithComponent,
} from '../../types/ComponentOrchestratorTypes'
import type {BvTriggerableEvent} from '../../utils'
import {orchestratorRegistryKey} from '../../utils/keys'

export function buildPromise<TComponent, TParam, TArrayValue extends OrchestratorArrayValue>(
  _id: ControllerKey,
  store: Ref<TArrayValue[]>
): {
  value: PromiseWithComponent<TComponent, TParam>
  resolve: (value: BvTriggerableEvent) => void
  stop: WatchHandle | undefined
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
      if (refWithMethods?.show) {
        refWithMethods.show()
      } else {
        this.set({modelValue: true} as unknown as Partial<TParam>)
      }
      const self = this as PromiseWithComponentInternal<TComponent, TParam>
      const asyncDispose = async () => {
        await self.destroy()
      }
      const showPromise = promise.then((event) =>
        Object.assign(Object.create(event), {
          [Symbol.asyncDispose]: asyncDispose,
        })
      )
      return Object.assign(showPromise, {
        id: self.id,
        ref: self.ref,
        show: () => self.show(),
        hide: (trigger?: string) => self.hide(trigger),
        toggle: () => self.toggle(),
        set: (val: Partial<TParam>) => self.set(val),
        get: () => self.get(),
        destroy: () => self.destroy(),
        [Symbol.asyncDispose]: asyncDispose,
      }) as ShowPromiseWithComponent<TComponent, TParam>
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
        const updatedItem = {
          ...v,
          modelValue: toValue(v.modelValue),
        } as TArrayValue
        // Only set title and body if they are defined in v
        const vRecord = v as Record<string, unknown>
        if ('title' in vRecord && vRecord.title !== undefined) {
          ;(updatedItem as Record<string, unknown>).title = toValue(vRecord.title)
        }
        if ('body' in vRecord && vRecord.body !== undefined) {
          ;(updatedItem as Record<string, unknown>).body = toValue(vRecord.body)
        }
        store.value.splice(itemIndex, 1, updatedItem)
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
