import {createSharedComposable, getSSRHandler, tryOnScopeDispose, unrefElement} from '@vueuse/core'
import {computed, getCurrentInstance, ref, type Ref, watch} from 'vue'

const MODAL_OPEN_CLASS_NAME = 'modal-open'

declare type ModalInstance = NonNullable<ReturnType<typeof getCurrentInstance>>

export const useSharedModalStack = createSharedComposable(() => {
  const registry = ref<ModalInstance[]>([])
  const stack = ref<ModalInstance[]>([])
  const count = computed(() => stack.value.length)
  const last = computed(() => stack.value[stack.value.length - 1])
  const push = (modal: ModalInstance) => stack.value.push(modal)
  const pop = () => stack.value.pop()
  const remove = (modal: ModalInstance) =>
    (stack.value = stack.value.filter((item: ModalInstance) => item.uid !== modal.uid))
  const find = (id: string): ModalInstance | null =>
    registry.value.find((modal: ModalInstance) => modal.proxy?.id === id) || null

  const updateHTMLAttrs = getSSRHandler('updateHTMLAttrs', (selector, attribute, value) => {
    const el =
      typeof selector === 'string'
        ? window?.document.querySelector(selector)
        : unrefElement(selector)
    if (!el) return

    if (attribute === 'class') {
      el.classList.toggle(MODAL_OPEN_CLASS_NAME, value === MODAL_OPEN_CLASS_NAME)
    } else {
      el.setAttribute(attribute, value)
    }
  })

  tryOnScopeDispose(() => {
    updateHTMLAttrs('body', 'class', '')
  })

  watch(count, (newValue) => {
    updateHTMLAttrs('body', 'class', newValue > 0 ? MODAL_OPEN_CLASS_NAME : '')
  })

  return {registry, stack, last, count, push, pop, remove, find}
})

export default (modalOpen: Ref<boolean>): void => {
  const {registry, push, remove} = useSharedModalStack()

  const currentModal = getCurrentInstance()

  if (!currentModal || currentModal.type.__name !== 'BModal') {
    throw new Error('useModalManager must only use in BModal component')
  }

  registry.value.push(currentModal)

  watch(
    modalOpen,
    (newValue, oldValue) => {
      if (newValue) {
        push(currentModal)
      } else if (oldValue && !newValue) {
        remove(currentModal)
      }
    },
    {immediate: true}
  )
}
