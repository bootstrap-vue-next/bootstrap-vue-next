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
      noninteractive: true,
      ...resolveDirectiveProps(binding, el),
      title: text.title ?? text.content ?? '',
      tooltip: isActive,
    })
    bind(el, binding)
  },
  updated(el, binding) {
    const isActive = resolveActiveStatus(binding.value)
    if (!isActive) return

    const text = resolveContent(binding.value, el)

    if (!text.content && !text.title) return
    unbind(el)

    el.$__state = ref({
      noninteractive: true,
      ...resolveDirectiveProps(binding, el),
      title: text.title ?? text.content ?? '',
      tooltip: isActive,
    })
    bind(el, binding)
  },
  beforeUnmount(el) {
    unbind(el)
  },
} satisfies Directive<ElementWithPopper>
