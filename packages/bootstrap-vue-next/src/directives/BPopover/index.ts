import {type Directive, type Ref} from 'vue'
import {
  bind,
  type ElementWithPopper,
  resolveActiveStatus,
  resolveContent,
  resolveDirectiveProps,
  unbind,
} from '../../utils/floatingUi'
import {defaultsKey} from '../../utils/keys'
import {findProvides} from '../utils'

export const vBPopover: Directive<ElementWithPopper> = {
  mounted(el, binding, vnode) {
    const defaults = (findProvides(binding, vnode) as Record<symbol, Ref>)[defaultsKey]?.value
    const isActive = resolveActiveStatus(binding.value)
    if (!isActive) return

    const text = resolveContent(binding.value, el)

    if (!text.body && !text.title) return

    // Clear any destroying flag from previous instance
    delete el.$__destroying

    el.$__binding = JSON.stringify([binding.modifiers, binding.value])
    bind(el, binding, {
      ...(defaults['BPopover'] || undefined),
      ...resolveDirectiveProps(binding, el),
      ...text,
    })
  },
  updated(el, binding, vnode) {
    const defaults = (findProvides(binding, vnode) as Record<symbol, Ref>)[defaultsKey]?.value

    const isActive = resolveActiveStatus(binding.value)

    // If inactive, clean up existing popover
    if (!isActive) {
      if (el.$__element) {
        unbind(el)
      }
      return
    }

    const text = resolveContent(binding.value, el)

    if (!text.body && !text.title) {
      // Clean up if no content
      if (el.$__element) {
        unbind(el)
      }
      return
    }

    delete binding.oldValue
    const newBinding = JSON.stringify([binding.modifiers, binding.value])
    if (el.$__binding === newBinding) return

    // Prevent race conditions during update
    if (el.$__destroying) return

    unbind(el)
    bind(el, binding, {
      ...(defaults['BPopover'] || undefined),
      ...resolveDirectiveProps(binding, el),
      ...text,
    })
    el.$__binding = newBinding
  },
  beforeUnmount(el) {
    unbind(el)
  },
}
