import {
  type Component,
  computed,
  type ComputedRef,
  type MaybeRefOrGetter,
  shallowRef,
  toValue,
} from 'vue'
import {useSharedModalStack} from './useModalManager'
import type {BModalProps, OrchestratedModal} from '../types'
import BModal from '../components/BModal/BModal.vue'
import {createGlobalState} from '@vueuse/core'

export default createGlobalState(() => {
  const {lastStack, stack} = useSharedModalStack()

  const modals = shallowRef<
    ComputedRef<{
      component: unknown // TS being weird here, just use unknown
      props: OrchestratedModal & {
        _self: symbol
        _modelValue: BModalProps['modelValue']
        _promise: {
          value: Promise<boolean | null>
          resolve: (value: boolean | null) => void
        }
        _isConfirm: boolean
      }
    }>[]
  >([])

  const buildPromise = (): {
    value: Promise<boolean | null>
    resolve: (value: boolean | null) => void
  } => {
    let resolveFunc: (value: boolean | null) => void = () => {
      /* empty */
    }

    const promise = new Promise<boolean | null>((resolve) => {
      resolveFunc = resolve
    })

    return {
      value: promise,
      resolve: resolveFunc,
    }
  }

  const show = <T>(obj: {
    component?: MaybeRefOrGetter<Readonly<Component<T>>>
    props?: MaybeRefOrGetter<Readonly<OrchestratedModal>>
  }) => {
    const _promise = buildPromise()
    const _self = Symbol()

    modals.value = [
      ...modals.value,
      computed(() => ({
        component: toValue(obj.component) ?? BModal,
        props: {...toValue(obj.props), _isConfirm: false, _promise, _self, _modelValue: true},
      })),
    ]

    return _promise.value
  }

  const confirm = <T>(obj: {
    component?: MaybeRefOrGetter<Readonly<Component<T>>>
    props?: MaybeRefOrGetter<Readonly<OrchestratedModal>>
  }) => {
    const _promise = buildPromise()
    const _self = Symbol()

    modals.value = [
      ...modals.value,
      computed(() => ({
        component: toValue(obj.component) ?? BModal,
        props: {...toValue(obj.props), _isConfirm: true, _promise, _self, _modelValue: true},
      })),
    ]

    return _promise.value
  }

  const remove = (self: symbol) => {
    modals.value = modals.value.filter((el) => el.value.props._self !== self)
  }

  const hide = (trigger = '') => {
    if (lastStack.value) {
      lastStack.value.exposed?.hide(trigger)
    }
  }

  const hideAll = (trigger = '') => {
    stack.value.forEach((modal) => {
      modal.exposed?.hide(trigger)
    })
  }

  return {
    modals,
    remove,
    show,
    confirm,
    hide,
    hideAll,
    // Todo: Supports listening events globally in the future
  }
})
