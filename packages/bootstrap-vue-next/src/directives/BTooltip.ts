import {type Directive} from 'vue'
import {
  bind,
  type ElementWithPopper,
  resolveActiveStatus,
  resolveContent,
  resolveDirectiveProps,
  unbind,
} from '../utils/floatingUi'
import {defaultsKey} from '../utils'

export default {
  mounted(el, binding, vnode) {
    const defaults = vnode.ctx?.appContext?.provides?.[defaultsKey]?.value

    const isActive = resolveActiveStatus(binding.value)
    if (!isActive) return

    const text = resolveContent(binding.value, el)

    if (!text.content && !text.title) return
    el.$__binding = JSON.stringify(binding)
    bind(el, binding, {
      noninteractive: true,
      ...(defaults['BTooltip'] || {}),
      ...resolveDirectiveProps(binding, el),
      title: text.title ?? text.content ?? '',
      tooltip: isActive,
    })
  },
  updated(el, binding, vnode) {
    const defaults = vnode.ctx?.appContext?.provides?.[defaultsKey]?.value

    const isActive = resolveActiveStatus(binding.value)
    if (!isActive) return

    const text = resolveContent(binding.value, el)

    if (!text.content && !text.title) return
    delete binding.oldValue
    if (el.$__binding === JSON.stringify(binding)) return
    unbind(el)
    bind(el, binding, {
      noninteractive: true,
      ...(defaults['BTooltip'] || {}),
      ...resolveDirectiveProps(binding, el),
      title: text.title ?? text.content ?? '',
      tooltip: isActive,
    })
    el.$__binding = JSON.stringify(binding)
  },
  beforeUnmount(el) {
    unbind(el)
  },
} satisfies Directive<ElementWithPopper>
