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
import {injectWithinDirective} from '../utils'

export const vBPopover: Directive<ElementWithPopper> = {
  mounted(el, binding) {
    const defaults = injectWithinDirective(binding, defaultsKey)?.value
    const isActive = resolveActiveStatus(binding.value)
    if (!isActive) return

    const text = resolveContent(binding.value, el)

    if (!text.body && !text.title) return
    el.$__binding = JSON.stringify([binding.modifiers, binding.value])
    bind(el, binding, {
      ...(defaults?.['BPopover'] || undefined),
      ...resolveDirectiveProps(binding, el),
      ...text,
    })
  },
  updated(el, binding) {
    const defaults = injectWithinDirective(binding, defaultsKey)?.value

    const isActive = resolveActiveStatus(binding.value)
    if (!isActive) return

    const text = resolveContent(binding.value, el)

    if (!text.body && !text.title) return
    delete binding.oldValue
    if (el.$__binding === JSON.stringify([binding.modifiers, binding.value])) return
    unbind(el)
    bind(el, binding, {
      ...(defaults?.['BPopover'] || undefined),
      ...resolveDirectiveProps(binding, el),
      ...text,
    })
    el.$__binding = JSON.stringify([binding.modifiers, binding.value])
  },
  beforeUnmount(el) {
    unbind(el)
  },
}
