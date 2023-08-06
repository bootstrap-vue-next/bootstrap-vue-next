import {type Directive, ref} from 'vue'
import {
  bind,
  type ElementWithPopper,
  resolveActiveStatus,
  resolveContent,
  resolveDirectiveProps,
  unbind,
} from '../utils/floatingUi'

export default {
  mounted(el, binding) {
    const isActive = resolveActiveStatus(binding.value)
    if (!isActive) return

    const text = resolveContent(binding.value, el)

    if (!text.content && !text.title) return

    el.$__state = ref({
      ...resolveDirectiveProps(binding, el),
      ...text,
    })
    bind(el, binding)
  },
  updated(el, binding) {
    const isActive = resolveActiveStatus(binding.value)
    if (!isActive) return

    const text = resolveContent(binding.value, el)

    if (!text.content && !text.title) return

    if (!el.$__state) {
      // Same binding as above
      // This happens when mounting occurs, but binding does not happen ie (if (!text.content && !text.title) return)
      // So mounting occurs without a title or content set
      el.$__state = ref({
        ...resolveDirectiveProps(binding, el),
        ...text,
      })
      bind(el, binding)
      return
    }
    el.$__state.value = {
      ...resolveDirectiveProps(binding, el),
      ...text,
    }
  },
  beforeUnmount(el) {
    unbind(el)
  },
} satisfies Directive<ElementWithPopper>
