import {createSharedComposable, getSSRHandler, tryOnScopeDispose, unrefElement} from '@vueuse/core'
import {
  type ComponentInternalInstance,
  computed,
  getCurrentInstance,
  ref,
  type Ref,
  watch,
} from 'vue'

const MODAL_OPEN_CLASS_NAME = 'modal-open'

export const useSharedModalStack = createSharedComposable(() => {
  const registry: Ref<ComponentInternalInstance[]> = ref([])
  const stack: Ref<ComponentInternalInstance[]> = ref([]) 
  const count = computed(() => stack.value.length)
  const last = computed(() => stack.value[stack.value.length - 1])
  const push = (modal: ComponentInternalInstance) => stack.value.push(modal)
  const pop = () => stack.value.pop()
  const remove = (modal: ComponentInternalInstance): void => {
    stack.value = stack.value.filter((item) => item.uid !== modal.uid)
  }
  const find = (id: string) => registry.value.find((modal) => modal.exposed!.id === id) || null

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
  const {registry, push, remove, stack} = useSharedModalStack()

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
