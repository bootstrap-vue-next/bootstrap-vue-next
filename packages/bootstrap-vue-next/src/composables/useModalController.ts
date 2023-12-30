import {computed, type ComputedRef, type MaybeRefOrGetter, ref, toValue} from 'vue'
import {useSharedModalStack} from './useModalManager'
import type {BModalProps, OrchestratedModal} from '../types'

export default () => {
  const {lastStack, stack} = useSharedModalStack()
  const modals = ref<
    ComputedRef<
      OrchestratedModal & {
        _self: symbol
        _modelValue: BModalProps['modelValue']
        _promise: {
          value: Promise<boolean | null>
          resolve: (value: boolean | null) => void
        }
        _isConfirm: boolean
      }
    >[]
  >([])

  const baseCreate = (
    el?: MaybeRefOrGetter<Readonly<OrchestratedModal & {_isConfirm?: boolean}>>
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

    modals.value.push(
      computed(() => {
        const elV = toValue(el)

        return {
          ...elV,
          _isConfirm: elV?._isConfirm ?? false,
          _promise,
          _modelValue: true,
          _self,
        }
      })
    )

    return promise
  }

  const show = (el?: MaybeRefOrGetter<Readonly<OrchestratedModal>>) => baseCreate(el)

  const confirm = (el?: MaybeRefOrGetter<Readonly<OrchestratedModal>>) =>
    baseCreate({...el, _isConfirm: true})

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
    show,
    confirm,
    hide,
    hideAll,
    // Todo: Supports listening events globally in the future
  }
}
