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
    const text = resolveContent(binding.value, el)

    el.$__state = ref({
      ...resolveDirectiveProps(binding, el),
      title: text.title ?? text.content ?? '',
      tooltip: isActive,
    })
    bind(el, binding)
  },
  updated(el, binding) {
    const isActive = resolveActiveStatus(binding.value)
    const text = resolveContent(binding.value, el)
    if (!el.$__state) return
    el.$__state.value = {
      ...resolveDirectiveProps(binding, el),
      title: text.title ?? text.content ?? '',
      tooltip: isActive,
    }
  },
  beforeUnmount(el) {
    unbind(el)
  },
} as Directive<ElementWithPopper>
