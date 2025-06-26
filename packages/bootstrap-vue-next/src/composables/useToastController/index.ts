import {
  inject,
  isReadonly,
  isRef,
  markRaw,
  onScopeDispose,
  type Ref,
  toRef,
  toValue,
  watch,
} from 'vue'
import {toastPluginKey} from '../../utils/keys'
import type {ContainerPosition} from '../../types/Alignment'
import type {
  OrchestratorCreateOptions,
  PromiseWithComponent,
  ToastOrchestratorArrayValue,
  ToastOrchestratorCreateParam,
  ToastOrchestratorParam,
} from '../../types/ComponentOrchestratorTypes'
import {buildPromise} from '../shared'

import {BToast} from '../../components'

const posDefault: ContainerPosition = 'top-end'

export const useToastController = () => {
  const controller = inject(toastPluginKey)
  if (!controller) {
    throw new Error(
      'useToastController() was called outside of the setup() function! or the plugin is not provided.'
    )
  }

  const {toasts, _isAppend, _isOrchestratorInstalled} = controller

  /**
   * @returns {PromiseWithComponent<typeof BToast, ToastOrchestratorParam>} Returns a promise object with methods to control the toast (show, hide, toggle, get, set, destroy)
   */
  const create = (
    obj: ToastOrchestratorCreateParam = {},
    options: OrchestratorCreateOptions = {}
  ): PromiseWithComponent<typeof BToast, ToastOrchestratorParam> => {
    const {component, slots} = toValue(obj)
    if (component) {
      if (isRef(obj)) obj.value.component = markRaw(component)
      else if (typeof obj === 'object') obj.component = markRaw(component)
    } else {
      if (isRef(obj)) obj.value.component = markRaw(BToast)
      else if (typeof obj === 'object') obj.component = markRaw(BToast)
    }
    if (slots) {
      if (isRef(obj)) obj.value.slots = markRaw(slots)
      else if (typeof obj === 'object') obj.slots = markRaw(slots)
    }
    const resolvedProps = toRef(obj)

    const _self = resolvedProps.value?.id || Symbol('Toast controller')
    const promise = buildPromise<
      typeof BToast,
      ToastOrchestratorParam,
      ToastOrchestratorArrayValue
    >(_self, toasts)

    promise.stop = watch(
      resolvedProps,
      (_newValue) => {
        const newValue = {...toValue(_newValue)}
        const previousIndex = toasts.value.findIndex((el) => el._self === _self)
        const previous = previousIndex === -1 ? {} : toasts.value[previousIndex] || {}
        const v: ToastOrchestratorArrayValue = {
          type: 'toast',
          _self,
          ...previous,
          promise,
          options,
        }
        if (newValue.props) {
          Object.assign(v, newValue.props)
          newValue.props = undefined
        }
        if (newValue.pos) {
          v.position = newValue.pos
          newValue.pos = undefined
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
   * @deprecated The `show` method is deprecated. Use the `create` method instead.
   */
  const show = (
    obj: ToastOrchestratorCreateParam = {}
  ): PromiseWithComponent<typeof BToast, ToastOrchestratorParam> => {
    // eslint-disable-next-line no-console
    console.warn(
      '[BootstrapVueNext] useToastController: The `show` method is deprecated. Use the `create` method instead.'
    )
    return create(obj)
  }

  return {
    _isAppend,
    _isOrchestratorInstalled,
    toasts,
    create,
    show,
  }
}
