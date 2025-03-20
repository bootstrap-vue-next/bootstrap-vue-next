import {
  isReadonly,
  isRef,
  markRaw,
  nextTick,
  onScopeDispose,
  type Plugin,
  ref,
  type Ref,
  toRef,
  toValue,
  watch,
  type WatchHandle,
} from 'vue'
import {popoverPluginKey} from '../../utils/keys'
import type {
  ControllerKey,
  PopoverOrchestratorCreateParam,
  PopoverOrchestratorMapValue,
  PopoverOrchestratorParam,
  PromiseWithPopover,
  PromiseWithPopoverInternal,
  TooltipOrchestratorCreateParam,
  TooltipOrchestratorMapValue,
  TooltipOrchestratorParam,
} from '../../types/ComponentOrchestratorTypes'
import type {BvTriggerableEvent} from '../../utils'

export const popoverPlugin: Plugin = {
  install(app) {
    const _isOrchestratorInstalled = ref(false)
    const popovers = ref(
      new Map<ControllerKey, PopoverOrchestratorMapValue | TooltipOrchestratorMapValue>()
    )

    const buildPromise = (
      _id: ControllerKey,
      store: Ref<Map<ControllerKey, PopoverOrchestratorMapValue | TooltipOrchestratorMapValue>>
    ): {
      value: PromiseWithPopover
      resolve: (value: BvTriggerableEvent) => void
      stop?: WatchHandle
    } => {
      let resolveFunc: (value: BvTriggerableEvent) => void = () => {
        /* empty */
      }

      const promise = new Promise<BvTriggerableEvent>((resolve) => {
        resolveFunc = resolve
      }) as PromiseWithPopover
      Object.assign(promise, {
        id: _id,
        ref: null,
        show() {
          if (!this.ref) return this.set({modelValue: true})
          this.ref.show()
          return promise
        },
        hide(trigger?: string) {
          if (!this.ref) return this.set({modelValue: false})
          this.ref.hide(trigger, true)
          return promise
        },
        toggle() {
          if (!this.ref) return this.set({modelValue: !this.get()?.modelValue})
          this.ref.toggle()
          return promise
        },
        get() {
          store.value.get(_id)
        },
        set(val: Partial<PopoverOrchestratorParam | TooltipOrchestratorParam>) {
          const item = store.value.get(_id)
          if (item) {
            const v = {...item, ...toValue(val)}
            // add modal to v
            if (item.modelValue !== v.modelValue) {
              item['onUpdate:modelValue']?.(v.modelValue as boolean)
            }
            store.value.set(_id, {
              ...v,
              title: toValue(v.title),
              body: toValue(v.body),
              modelValue: toValue(v.modelValue),
            })
          }
          return promise
        },
        async destroy() {
          const item = store.value.get(_id)
          if (!item) return
          item.promise.stop?.()
          if (item.modelValue) {
            await new Promise(async (resolve) => {
              item.modelValue = false
              item['onHidden'] = () => {
                resolve(undefined)
              }
              await nextTick()
              item['onUpdate:modelValue']?.(false)
            })
          }
          store.value.delete(_id)
        },

        async [Symbol.asyncDispose]() {
          await this.destroy()
        },
      } as PromiseWithPopoverInternal)

      return {
        value: promise,
        resolve: resolveFunc,
      }
    }

    const create = (obj: PopoverOrchestratorCreateParam, tooltip?: boolean): PromiseWithPopover => {
      if (!_isOrchestratorInstalled.value) {
        throw new Error(
          'The BPopoverOrchestrator component must be mounted to use the popover controller'
        )
      }
      const {component, slots} = toValue(obj)
      if (component) {
        if (isRef(obj)) obj.value.component = markRaw(component)
        else if (typeof obj === 'object') obj.component = markRaw(component)
      }
      if (slots) {
        if (isRef(obj)) obj.value.slots = markRaw(slots)
        else if (typeof obj === 'object') obj.slots = markRaw(slots)
      }
      const resolvedProps = toRef(obj)
      const _self = resolvedProps.value?.id || Symbol('Popover controller')

      const promise = buildPromise(_self, popovers)

      promise.stop = watch(
        resolvedProps,
        (newValue) => {
          const previous = popovers.value.get(_self)
          // if (!previous) return
          const v: Partial<PopoverOrchestratorMapValue> = {
            ...(previous || {}),
          }

          for (const key in newValue) {
            if (key.startsWith('on')) {
              v[key as keyof PopoverOrchestratorCreateParam] =
                newValue[key as keyof PopoverOrchestratorCreateParam]
            } else {
              v[key as keyof PopoverOrchestratorCreateParam] = toValue(
                newValue[key as keyof PopoverOrchestratorCreateParam]
              )
            }
          }
          popovers.value.set(_self, {
            ...v,
            ...(v.modelValue === undefined && {modelValue: false}),
            'onUpdate:modelValue': (val: boolean) => {
              newValue['onUpdate:modelValue']?.(val)
              const {modelValue} = toValue(obj)
              if (isRef(obj) && !isRef(modelValue)) obj.value.modelValue = val
              if (isRef(modelValue) && !isReadonly(modelValue)) {
                ;(modelValue as Ref<PopoverOrchestratorParam['modelValue']>).value = val
              }
              if (v.modelValue !== val) {
                const popover = popovers.value.get(_self)
                if (popover) {
                  popover.modelValue = val
                }
              }
            },
            tooltip,
            promise,
          })
        },
        {
          immediate: true,
          deep: true,
        }
      )

      onScopeDispose(() => {
        const popover = popovers.value.get(_self)
        if (popover) {
          popover.promise.value.destroy?.()
        }
      }, true)

      return promise.value
    }

    const tooltip = (obj: TooltipOrchestratorCreateParam): PromiseWithPopover => create(obj, true)

    const popover = (obj: PopoverOrchestratorCreateParam): PromiseWithPopover => create(obj, false)

    app.provide(popoverPluginKey, {
      _isOrchestratorInstalled,
      popovers,
      tooltip,
      popover,
    })
  },
}
