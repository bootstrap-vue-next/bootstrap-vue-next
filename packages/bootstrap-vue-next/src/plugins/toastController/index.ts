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
import {toastPluginKey} from '../../utils/keys'
import type {ContainerPosition} from '../../types/Alignment'
import type {
  ControllerKey,
  PromiseWithToast,
  PromiseWithToastInternal,
  ToastOrchestratorArrayValue,
  ToastOrchestratorCreateOptions,
  ToastOrchestratorCreateParam,
  ToastOrchestratorParam,
} from '../../types/ComponentOrchestratorTypes'
import type {BvTriggerableEvent} from '../../utils'

const posDefault: ContainerPosition = 'top-end'

export const toastPlugin: Plugin = {
  install(app) {
    const toasts = ref<ToastOrchestratorArrayValue[]>([])

    const _isAppend = ref(false)

    const buildPromise = (
      _id: ControllerKey
    ): {
      value: PromiseWithToast
      resolve: (value: BvTriggerableEvent) => void
      stop?: WatchHandle
    } => {
      let resolveFunc: (value: BvTriggerableEvent) => void = () => {
        /* empty */
      }

      const promise = new Promise<BvTriggerableEvent>((resolve) => {
        resolveFunc = resolve
      }) as PromiseWithToast
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
          return toasts.value.find((el) => el._self === _id)
        },
        set(val: Partial<ToastOrchestratorParam>) {
          const toastIndex = toasts.value.findIndex((el) => el._self === _id)
          const toast = toasts.value[toastIndex]
          if (toast) {
            const v = {...toast, ...toValue(val)}
            if (toast.modelValue !== v.modelValue) {
              toast['onUpdate:modelValue']?.(v.modelValue as boolean)
            }
            toasts.value.splice(toastIndex, 1, {
              ...v,
              title: toValue(v.title),
              body: toValue(v.body),
              modelValue: toValue(v.modelValue),
            })
          }
        },
        async destroy() {
          const toast = toasts.value.find((el) => el._self === _id)
          if (!toast) return
          toast.promise.stop?.()
          if (toast.modelValue) {
            await new Promise(async (resolve) => {
              toast.modelValue = false
              toast['onHidden'] = () => {
                resolve(undefined)
              }
              await nextTick()
              toast['onUpdate:modelValue']?.(false)
            })
          }
          toasts.value.splice(
            toasts.value.findIndex((el) => el._self === _id),
            1
          )
        },
        async [Symbol.asyncDispose]() {
          await this.destroy()
        },
      } as PromiseWithToastInternal)

      return {
        value: promise,
        resolve: resolveFunc,
      }
    }

    /**
     * @returns {ControllerKey} If `id` is passed to props, it will use that id, otherwise, a symbol will be created that corresponds to its unique id.
     * You can pass this id to the hide function to force a Toast to hide
     */
    const create = (
      obj: ToastOrchestratorCreateParam = {},
      options: ToastOrchestratorCreateOptions = {}
    ): PromiseWithToast => {
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

      const _self = resolvedProps.value?.id || Symbol('Toast controller')
      const promise = buildPromise(_self)

      promise.stop = watch(
        resolvedProps,
        (newValue) => {
          const previousIndex = toasts.value.findIndex((el) => el._self === _self)
          const previous = previousIndex === -1 ? {} : toasts.value[previousIndex]
          const v: ToastOrchestratorArrayValue = {
            _self,
            ...(previous || {}),
            promise,
            options,
          }
          if (newValue.props) {
            Object.assign(v, newValue.props)
            delete newValue.props
          }
          if (newValue.pos) {
            v.position = newValue.pos
            delete newValue.pos
          }
          for (const key in newValue) {
            if (key.startsWith('on')) {
              v[key as keyof ToastOrchestratorCreateParam] =
                newValue[key as keyof ToastOrchestratorCreateParam]
            } else {
              v[key as keyof ToastOrchestratorCreateParam] = toValue(
                newValue[key as keyof ToastOrchestratorCreateParam]
              )
            }
          }
          v.position = v.position || posDefault
          v.modelValue = v.modelValue ?? 5000
          v['onUpdate:modelValue'] = (val: boolean) => {
            newValue['onUpdate:modelValue']?.(val)
            const {modelValue} = toValue(obj)
            if (isRef(obj) && !isRef(modelValue)) obj.value.modelValue = val
            if (isRef(modelValue) && !isReadonly(modelValue)) {
              ;(modelValue as Ref<ToastOrchestratorArrayValue['modelValue']>).value = val
            }
            if (v.modelValue !== val) {
              const toast = toasts.value.find((el) => el._self === _self)
              if (toast) {
                toast.modelValue = val
              }
            }
          }
          if (previousIndex === -1) {
            if (
              resolvedProps.value?.appendToast !== undefined
                ? resolvedProps.value.appendToast
                : _isAppend.value
            ) {
              toasts.value.push(v)
            } else {
              toasts.value.unshift(v)
            }
          } else {
            toasts.value.splice(previousIndex, 1, v)
          }
        },
        {
          deep: true,
          immediate: true,
        }
      )
      onScopeDispose(() => {
        const toast = toasts.value.find((el) => el._self === _self)
        if (toast) {
          toast.promise.value.destroy?.()
        }
      }, true)
      return promise.value
    }

    /*
    @deprecated
    */
    const show = (obj: ToastOrchestratorCreateParam = {}): PromiseWithToast => create(obj).show()

    app.provide(toastPluginKey, {
      _isAppend,
      _isOrchestratorInstalled: ref(false),
      toasts,
      create,
      show,
    })
  },
}
