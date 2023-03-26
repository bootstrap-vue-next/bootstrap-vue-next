import {type Directive, ref} from 'vue'
import {
  bind,
  type ElementWithPopper,
  resolveContent,
  resolveDirectiveProps,
  unbind,
} from '../utils/floatingUi'

export default {
  mounted(el, binding) {
    const text = resolveContent(binding.value, el)

    el.$__state = ref({
      ...resolveDirectiveProps(binding, el),
      ...text,
    })
    bind(el, binding)
  },
  updated(el, binding) {
    const text = resolveContent(binding.value, el)

    if (!el.$__state) return
    el.$__state.value = {
      ...resolveDirectiveProps(binding, el),
      ...text,
    }
  },
  beforeUnmount(el) {
    unbind(el)
  },
} as Directive<ElementWithPopper>
