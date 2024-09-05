import {type Directive} from 'vue'
import {
  bind,
  type ElementWithPopper,
  resolveActiveStatus,
  resolveContent,
  resolveDirectiveProps,
  unbind,
} from '../../utils/floatingUi'
import {defaultsKey} from '../../utils/keys'

export const vBPopover: Directive<ElementWithPopper> = {
  mounted(el, binding, vnode) {
    // @ts-expect-error type doesn't have runtime ctx
    const defaults = vnode.ctx?.appContext?.provides?.[defaultsKey as symbol]?.value
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
    // @ts-expect-error type doesn't have runtime ctx
    const defaults = vnode.ctx?.appContext?.provides?.[defaultsKey as symbol]?.value

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
}
