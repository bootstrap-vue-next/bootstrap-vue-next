import {
  inject,
  isReadonly,
  isRef,
  markRaw,
  onScopeDispose,
  type Ref,
  shallowRef,
  toValue,
  watch,
} from 'vue'
import {orchestratorRegistryKey} from '../../utils/keys'
import type {ContainerPosition} from '../../types/Alignment'
import type {
  OrchestratorCreateOptions,
  PromiseWithComponent,
  ToastOrchestratorArrayValue,
  ToastOrchestratorCreateParam,
  ToastOrchestratorParam,
} from '../../types/ComponentOrchestratorTypes'
import {buildPromise} from '../orchestratorShared'
import {BToast} from '../../components'

const posDefault: ContainerPosition = 'top-end'

export const useToast = () => {
  const orchestratorRegistry = inject(orchestratorRegistryKey)
  if (!orchestratorRegistry) {
    throw new Error(
      'useToast() must be called within setup(), and BApp, useRegistry or plugin must be installed/provided.'
    )
  }

  const {store, _isToastAppend, _isOrchestratorInstalled} = orchestratorRegistry

  /**
   * @returns {PromiseWithComponent<typeof BToast, ToastOrchestratorParam>} Returns a promise object with methods to control the toast (show, hide, toggle, get, set, destroy)
   */
  const create = (
    obj: ToastOrchestratorCreateParam = {},
    options: OrchestratorCreateOptions = {}
  ): PromiseWithComponent<typeof BToast, ToastOrchestratorParam> => {
    if (!_isOrchestratorInstalled.value) {
      throw new Error(
        'The BApp or BOrchestrator component must be mounted to use the toast composable'
      )
    }

    const resolvedProps = isRef(obj) ? obj : shallowRef(obj)

    const _self = resolvedProps.value?.id || Symbol('Toast controller')
    const promise = buildPromise<
      typeof BToast,
      ToastOrchestratorParam,
      ToastOrchestratorArrayValue
    >(_self, store as Ref<ToastOrchestratorArrayValue[]>)

    promise.stop = watch(
      resolvedProps,
      (_newValue) => {
        const newValue = {...toValue(_newValue)}
        const previousIndex = store.value.findIndex((el) => el._self === _self)
        const previous =
          previousIndex === -1
            ? {_component: markRaw(BToast)}
            : (store.value[previousIndex] as ToastOrchestratorArrayValue)
        const v: ToastOrchestratorArrayValue = {
          ...previous,
          type: 'toast',
          _self,
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
          } else if (key === 'component' && newValue.component) {
            v._component = markRaw(newValue.component)
          } else if (key === 'slots' && newValue.slots) {
            v.slots = markRaw(newValue.slots)
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
            const toast = store.value.find((el) => el._self === _self)
            if (toast) {
              toast.modelValue = val
            }
          }
        }
        if (previousIndex === -1) {
          if (
            resolvedProps.value?.appendToast !== undefined
              ? resolvedProps.value.appendToast
              : _isToastAppend.value
          ) {
            store.value.push(v)
          } else {
            store.value.unshift(v)
          }
        } else {
          store.value.splice(previousIndex, 1, v)
        }
      },
      {
        deep: true,
        immediate: true,
      }
    )
    onScopeDispose(() => {
      const toast = store.value.find((el) => el._self === _self)
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
      '[BootstrapVueNext] useToast: The `show` method is deprecated. Use the `create` method instead.'
    )
    return create(obj)
  }

  return {
    _isToastAppend,
    _isOrchestratorInstalled,
    store,
    create,
    show,
  }
}

/**
 * @deprecated use useToast() instead.
 * @returns {ReturnType<typeof useToast>} The toast controller
 */
export const useToastController = useToast
