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
      component: unknown // TS bullshit here
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

  const show = <T>(
    obj: MaybeRefOrGetter<{
      component?: Readonly<Component<T>>
      props?: Readonly<OrchestratedModal>
    }>
  ) => {
    let resolveFunc: (value: boolean | null) => void = () => {
      /* empty */
    }

    const promise = new Promise<boolean | null>((resolve) => {
      resolveFunc = resolve
    })

    const _self = Symbol()

    const _promise = {
      value: promise,
      resolve: resolveFunc,
    }

    modals.value = [
      ...modals.value,
      computed(() => {
        const unwrapped = toValue(obj)

        return {
          component: unwrapped.component ?? BModal,
          props: {...unwrapped.props, _isConfirm: false, _promise, _self, _modelValue: true},
        }
      }),
    ]

    return promise
  }

  const confirm = <T>(
    obj: MaybeRefOrGetter<{
      component?: Readonly<Component<T>>
      props?: Readonly<OrchestratedModal>
    }>
  ) => {
    let resolveFunc: (value: boolean | null) => void = () => {
      /* empty */
    }

    const promise = new Promise<boolean | null>((resolve) => {
      resolveFunc = resolve
    })

    const _self = Symbol()

    const _promise = {
      value: promise,
      resolve: resolveFunc,
    }

    modals.value = [
      ...modals.value,
      computed(() => {
        const unwrapped = toValue(obj)

        return {
          component: unwrapped.component ?? BModal,
          props: {...unwrapped.props, _isConfirm: true, _promise, _self, _modelValue: true},
        }
      }),
    ]

    return promise
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
