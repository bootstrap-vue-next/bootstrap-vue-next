import {createSharedComposable, getSSRHandler, unrefElement, useCounter} from '@vueuse/core'
import {type Ref, watch} from 'vue'

const MODAL_OPEN_CLASS_NAME = 'modal-open'

const useSharedModalCounter = createSharedComposable(() => {
  const {count, inc, dec} = useCounter()

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

  watch(count, (newValue) => {
    updateHTMLAttrs('body', 'class', newValue > 0 ? MODAL_OPEN_CLASS_NAME : '')
  })

  return {inc, dec}
})

export default (modalOpen: Ref<boolean>): void => {
  const {inc, dec} = useSharedModalCounter()

  watch(
    modalOpen,
    (newValue, oldValue) => {
      if (newValue) {
        inc()
      } else if (oldValue && !newValue) {
        dec()
      }
    },
    {immediate: true}
  )
}
