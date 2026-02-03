import {getSSRHandler, tryOnScopeDispose, unrefElement} from '@vueuse/core'
import {
  type ComponentInternalInstance,
  computed,
  getCurrentInstance,
  inject,
  type Ref,
  toValue,
  watch,
} from 'vue'
import {modalManagerKey} from '../utils/keys'

const modalOpenClassName = 'modal-open'

export const useSharedModalStack = () => {
  const modalManagerPlugin = inject(modalManagerKey, null)

  /**
   * Removes an item from both the stack and registry
   */
  const dispose = (modal: Readonly<ComponentInternalInstance>): void => {
    modalManagerPlugin?.removeStack(modal)
    modalManagerPlugin?.removeRegistry(modal)
  }

  const updateHTMLAttrs = getSSRHandler('updateHTMLAttrs', (selector, attribute, value) => {
    const el =
      typeof selector === 'string'
        ? window?.document.querySelector(selector)
        : unrefElement(selector)
    if (!el) return

    if (attribute === 'class') {
      el.classList.toggle(modalOpenClassName, value === modalOpenClassName)
    } else {
      el.setAttribute(attribute, value)
    }
  })

  tryOnScopeDispose(() => {
    if (modalManagerPlugin?.countStack.value === 0) {
      updateHTMLAttrs('body', 'class', '')
    }
  })

  watch(
    () => modalManagerPlugin?.countStack.value,
    (newValue) => {
      if (newValue === undefined) return
      updateHTMLAttrs('body', 'class', newValue > 0 ? modalOpenClassName : '')
    }
  )

  return {
    ...modalManagerPlugin,
    dispose,
  }
}

export const useModalManager = (modalOpen: Readonly<Ref<boolean>>, initialValue: boolean) => {
  const {pushRegistry, pushStack, removeStack, stack, dispose, countStack} = useSharedModalStack()

  const currentModal = getCurrentInstance()

  if (!currentModal || currentModal.type.__name !== 'BModal') {
    throw new Error('useModalManager must only use in BModal component')
  }

  pushRegistry?.(currentModal)

  tryOnScopeDispose(() => {
    dispose(currentModal)
  })

  const setInStack = (newValue: boolean, oldValue: boolean) => {
    if (newValue) {
      pushStack?.(currentModal)
    } else if (oldValue && !newValue) {
      removeStack?.(currentModal)
    }
  }

  // (initialValue, initialValue) is meant to always only ever trigger the first `if (newValue) {` block. The other block is skipped _always_
  setInStack(initialValue, initialValue)

  watch(modalOpen, setInStack)

  return {
    activePosition: computed(() =>
      stack?.value.findIndex((el) => toValue(el.exposed?.id) === toValue(currentModal.exposed?.id))
    ),
    activeModalCount: countStack,
    stackWithoutSelf: computed(
      () =>
        stack?.value.filter(
          (el) => toValue(el.exposed?.id) !== toValue(currentModal.exposed?.id)
        ) ?? []
    ),
  }
}
