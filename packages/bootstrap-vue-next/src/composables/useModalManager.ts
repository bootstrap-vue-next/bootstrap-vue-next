import {getSSRHandler, tryOnScopeDispose, unrefElement} from '@vueuse/core'
import {
  type ComponentInternalInstance,
  computed,
  getCurrentInstance,
  inject,
  type Ref,
  watch,
} from 'vue'
import {modalManagerPluginKey} from '../utils'

const modalOpenClassName = 'modal-open'

export const useSharedModalStack = () => {
  const modalManagerPlugin = inject(modalManagerPluginKey)

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
    updateHTMLAttrs('body', 'class', '')
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

export default (modalOpen: Readonly<Ref<boolean>>) => {
  const {pushRegistry, pushStack, removeStack, stack, dispose, countStack} = useSharedModalStack()

  const currentModal = getCurrentInstance()

  if (!currentModal || currentModal.type.__name !== 'BModal') {
    throw new Error('useModalManager must only use in BModal component')
  }

  pushRegistry?.(currentModal)

  tryOnScopeDispose(() => {
    dispose(currentModal)
  })

  watch(
    modalOpen,
    (newValue, oldValue) => {
      if (newValue) {
        pushStack?.(currentModal)
      } else if (oldValue && !newValue) {
        removeStack?.(currentModal)
      }
    },
    {immediate: true}
  )

  return {
    activePosition: computed(() =>
      stack?.value.findIndex((el) => el.exposed?.id === currentModal.exposed?.id)
    ),
    activeModalCount: countStack,
  }
}
