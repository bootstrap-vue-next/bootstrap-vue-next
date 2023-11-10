import {createSharedComposable, getSSRHandler, tryOnScopeDispose, unrefElement} from '@vueuse/core'
import {
  type ComponentInternalInstance,
  computed,
  getCurrentInstance,
  type Ref,
  shallowRef,
  toRef,
  watch,
} from 'vue'

const modalOpenClassName = 'modal-open'

export const useSharedModalStack = createSharedComposable(() => {
  /**
   * A collection of all currently active modals
   */
  const stack: Ref<ComponentInternalInstance[]> = shallowRef([])

  const countStack = toRef(() => stack.value.length)
  const lastStack = toRef(() => stack.value[stack.value.length - 1])

  const pushStack = (modal: ComponentInternalInstance) => {
    stack.value = [...stack.value, modal]
  }
  const removeStack = (modal: ComponentInternalInstance) => {
    stack.value = stack.value.filter((item) => item.uid !== modal.uid)
  }

  /**
   * A collection of all registered modals
   */
  const registry: Ref<ComponentInternalInstance[]> = shallowRef([])

  // Utility getters not made, would not be used (count, last)

  const pushRegistry = (modal: ComponentInternalInstance) => {
    registry.value = [...registry.value, modal]
  }
  const removeRegistry = (modal: ComponentInternalInstance) => {
    registry.value = registry.value.filter((item) => item.uid !== modal.uid)
  }

  /**
   * Removes an item from both the stack and registry
   */
  const dispose = (modal: ComponentInternalInstance): void => {
    removeStack(modal)
    removeRegistry(modal)
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

  watch(countStack, (newValue) => {
    updateHTMLAttrs('body', 'class', newValue > 0 ? modalOpenClassName : '')
  })

  return {
    registry,
    stack,
    lastStack,
    countStack,
    pushStack,
    removeStack,
    pushRegistry,
    removeRegistry,
    dispose,
  }
})

export default (modalOpen: Ref<boolean>) => {
  const {pushRegistry, pushStack, removeStack, stack, dispose, countStack} = useSharedModalStack()

  const currentModal = getCurrentInstance()

  if (!currentModal || currentModal.type.__name !== 'BModal') {
    throw new Error('useModalManager must only use in BModal component')
  }

  pushRegistry(currentModal)

  tryOnScopeDispose(() => {
    dispose(currentModal)
  })

  watch(
    modalOpen,
    (newValue, oldValue) => {
      if (newValue) {
        pushStack(currentModal)
      } else if (oldValue && !newValue) {
        removeStack(currentModal)
      }
    },
    {immediate: true}
  )

  return {
    activePosition: computed(() =>
      stack.value.findIndex((el) => el.exposed?.id === currentModal.exposed?.id)
    ),
    activeModalCount: countStack,
  }
}
