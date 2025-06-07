import {type ComponentPublicInstance, nextTick, type Ref, toValue, type WatchHandle} from 'vue'
import type {
  ControllerKey,
  ModalOrchestratorArrayValue,
  PopoverOrchestratorArrayValue,
  PromiseWithComponent,
  PromiseWithComponentInternal,
  ToastOrchestratorArrayValue,
  TooltipOrchestratorArrayValue,
} from '../types/ComponentOrchestratorTypes'
import type {BvTriggerableEvent} from '../utils'

export function buildPromise<
  TComponent,
  TParam,
  TArrayValue extends
    | ToastOrchestratorArrayValue
    | ModalOrchestratorArrayValue
    | PopoverOrchestratorArrayValue
    | TooltipOrchestratorArrayValue,
>(
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

  Object.assign(promise, {
    id: _id,
    ref: null as ComponentPublicInstance<TComponent> | null,
    show() {
      if (!this.ref) return this.set({modelValue: true} as unknown as Partial<TParam>)
      ;(this.ref as Record<string, (...args: unknown[]) => unknown>).show()
      return promise
    },
    hide(trigger?: string) {
      if (!this.ref) return this.set({modelValue: false} as unknown as Partial<TParam>)
      ;(this.ref as Record<string, (...args: unknown[]) => unknown>).hide(trigger, true)
      return promise
    },
    toggle() {
      const currentItem = this.get() as TParam & {modelValue?: unknown}
      if (!this.ref)
        return this.set({modelValue: !currentItem?.modelValue} as unknown as Partial<TParam>)
      ;(this.ref as Record<string, (...args: unknown[]) => unknown>).toggle()
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
          item.modelValue = false
          const prev = item['onHidden']
          item['onHidden'] = (e) => {
            prev?.(e)
            resolve(e)
          }
          nextTick(() => {
            item['onUpdate:modelValue']?.(false)
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
