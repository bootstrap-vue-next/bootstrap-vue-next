import {type Directive} from 'vue'
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

    bind(el, binding, {
      noninteractive: true,
      ...resolveDirectiveProps(binding, el),
      title: text.title ?? text.content ?? '',
      tooltip: isActive,
    })
  },
  updated(el, binding) {
    const isActive = resolveActiveStatus(binding.value)
    if (!isActive) return

    const text = resolveContent(binding.value, el)

    if (!text.content && !text.title) return
    unbind(el)

    bind(el, binding, {
      noninteractive: true,
      ...resolveDirectiveProps(binding, el),
      title: text.title ?? text.content ?? '',
      tooltip: isActive,
    })
  },
  beforeUnmount(el) {
    unbind(el)
  },
} satisfies Directive<ElementWithPopper>
