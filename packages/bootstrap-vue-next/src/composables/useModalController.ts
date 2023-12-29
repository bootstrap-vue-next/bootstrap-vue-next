import {ref} from 'vue'
import {useSharedModalStack} from './useModalManager'
import type {BModalProps} from '../types'

type Modal = Omit<BModalProps, 'modelValue'>

export default () => {
  const {lastStack, stack} = useSharedModalStack()
  const modals = ref<
    (Modal & {
      self: symbol
      _modelValue: BModalProps['modelValue']
      _promise: {
        value: Promise<boolean | null>
        resolve: (value: boolean | null) => void
      }
      _isConfirm: boolean
    })[]
  >([])

  const baseCreate = (el?: Readonly<Modal & {_isConfirm?: boolean}>) => {
    let resolveFunc: (value: boolean | null) => void = () => {
      /* empty */
    }

    const promise = new Promise<boolean | null>((resolve) => {
      resolveFunc = resolve
    })

    const self = Symbol()

    const _promise = {
      value: promise,
      resolve: resolveFunc,
    }

    modals.value.push({
      ...el,
      _isConfirm: el?._isConfirm ?? false,
      _promise,
      _modelValue: true,
      self,
    })

    return promise
  }

  const show = (el?: Readonly<Modal>) => baseCreate(el)

  const confirm = (el?: Readonly<Modal>) => baseCreate({...el, _isConfirm: true})

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
