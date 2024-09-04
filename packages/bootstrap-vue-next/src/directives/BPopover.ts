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
      ...(defaults['BPopover'] || {}),
      ...resolveDirectiveProps(binding, el),
      ...text,
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
      ...(defaults['BPopover'] || {}),
      ...resolveDirectiveProps(binding, el),
      ...text,
    })
    el.$__binding = JSON.stringify(binding)
  },
  beforeUnmount(el) {
    unbind(el)
  },
} satisfies Directive<ElementWithPopper>
