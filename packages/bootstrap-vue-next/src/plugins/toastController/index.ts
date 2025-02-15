import {isReadonly, isRef, markRaw, type Plugin, ref, type Ref, toRef, toValue, watch} from 'vue'
import {toastPluginKey} from '../../utils/keys'
import type {ContainerPosition} from '../../types/Alignment'
import type {
  ControllerKey,
  PromiseWithShowHide,
  ToastOrchestratorArrayValue,
  ToastOrchestratorShowParam,
} from '../../types/ComponentOrchestratorTypes'

const posDefault: ContainerPosition = 'top-end'

export const toastPlugin: Plugin = {
  install(app) {
    const toasts = ref<ToastOrchestratorArrayValue[]>([])

    const _isAppend = ref(false)

    const buildPromise = (
      _id: ControllerKey
    ): {
      value: PromiseWithShowHide
      resolve: (value: boolean | null) => void
    } => {
      let resolveFunc: (value: boolean | null) => void = () => {
        /* empty */
      }

      const promise = new Promise<boolean | null>((resolve) => {
        resolveFunc = resolve
      }) as PromiseWithShowHide
      Object.assign(promise, {
        id: _id,
        show() {
          const modal = toasts.value.find((el) => el._self === _id)
          if (!modal) return promise
          modal.modelValue = true
          modal['onUpdate:modelValue']?.(true)
          return promise
        },
        hide() {
          const modal = toasts.value.find((el) => el._self === _id)
          if (modal) {
            modal.modelValue = false
            modal['onUpdate:modelValue']?.(false)
          }
        },
        toggle() {
          const modal = toasts.value.find((el) => el._self === _id)
          if (modal) {
            modal.modelValue = !modal.modelValue
            modal['onUpdate:modelValue']?.(modal.modelValue)
          }
        },
        remove() {
          remove(_id)
        },
      })

      return {
        value: promise,
        resolve: resolveFunc,
      }
    }

    /**
     * @returns {ControllerKey} If `id` is passed to props, it will use that id, otherwise, a symbol will be created that corresponds to its unique id.
     * You can pass this id to the hide function to force a Toast to hide
     */
    const create = (obj: ToastOrchestratorShowParam = {}): PromiseWithShowHide => {
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

      const stop = watch(
        resolvedProps,
        (newValue) => {
          const previousIndex = toasts.value.findIndex((el) => el._self === _self)
          const previous = previousIndex === -1 ? {} : toasts.value[previousIndex]
          const v: ToastOrchestratorArrayValue = {
            _self,
            ...(previous || {}),
            promise,
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
              v[key as keyof ToastOrchestratorShowParam] =
                newValue[key as keyof ToastOrchestratorShowParam]
            } else {
              v[key as keyof ToastOrchestratorShowParam] = toValue(
                newValue[key as keyof ToastOrchestratorShowParam]
              )
            }
          }
          v.position = v.position || posDefault
          v.modelValue = v.modelValue || 5000
          v['onUpdate:modelValue'] = (val: boolean) => {
            newValue['onUpdate:modelValue']?.(val)
            const {modelValue} = toValue(obj)
            if (isRef(obj) && !isRef(modelValue)) obj.value.modelValue = val
            if (isRef(modelValue) && !isReadonly(modelValue)) {
              ;(modelValue as Ref<ToastOrchestratorArrayValue['modelValue']>).value = val
            }
            if (!!val === false) {
              stop()
              remove(_self)
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

      return promise.value
    }

    const show = (obj: ToastOrchestratorShowParam = {}): PromiseWithShowHide => create(obj).show()

    /**
     * You can get the symbol param from the return value from the show method, or use props.id
     */
    const remove = (self: ControllerKey) => {
      toasts.value = toasts.value.filter((el) => el._self !== self)
    }

    /**
     * You can get the symbol param from the return value from the show method, or use props.id
     */
    const hide = (self: ControllerKey) => {
      const toastIndex = toasts.value.findIndex((el) => el._self === self)
      if (toastIndex === -1) return
      const toast = toasts.value[toastIndex]
      toast['onUpdate:modelValue']?.(false)
    }

    app.provide(toastPluginKey, {
      _isAppend,
      _isOrchestratorInstalled: ref(false),
      toasts,
      show,
      create,
      remove,
      hide,
    })
  },
}
