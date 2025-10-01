import {type Directive, type Ref} from 'vue'
import {
  bind,
  type ElementWithPopper,
  resolveActiveStatus,
  resolveContent,
  resolveDirectiveProps,
  unbind,
} from '../../utils/floatingUi'
import {buttonGroupKey, defaultsKey} from '../../utils/keys'
import {findProvides} from '../utils'

export const vBTooltip: Directive<ElementWithPopper> = {
  mounted(el, binding, vnode) {
    const provides = findProvides(binding, vnode) as Record<symbol, Ref>
    const defaults = provides[defaultsKey]?.value
    const isInButtonGroup = provides[buttonGroupKey]?.value

    const isActive = resolveActiveStatus(binding.value)
    if (!isActive) return

    const text = resolveContent(binding.value, el)

    if (!text.body && !text.title) return
    el.$__binding = JSON.stringify([binding.modifiers, binding.value])

    // Create a modified binding that uses body placement if in button group
    const modifiedBinding = isInButtonGroup
      ? {
          ...binding,
          modifiers: {...binding.modifiers, body: true},
        }
      : binding

    bind(el, modifiedBinding, {
      noninteractive: true,
      ...(defaults['BTooltip'] || undefined),
      ...resolveDirectiveProps(binding, el),
      title: text.title ?? text.body ?? '',
      tooltip: isActive,
    })
  },
  updated(el, binding, vnode) {
    const provides = findProvides(binding, vnode) as Record<symbol, Ref>
    const defaults = provides[defaultsKey]?.value
    const isInButtonGroup = provides[buttonGroupKey]?.value

    const isActive = resolveActiveStatus(binding.value)
    if (!isActive) return

    const text = resolveContent(binding.value, el)

    if (!text.body && !text.title) return
    delete binding.oldValue
    if (el.$__binding === JSON.stringify([binding.modifiers, binding.value])) return
    unbind(el)

    // Create a modified binding that uses body placement if in button group
    const modifiedBinding = isInButtonGroup
      ? {
          ...binding,
          modifiers: {...binding.modifiers, body: true},
        }
      : binding

    bind(el, modifiedBinding, {
      noninteractive: true,
      ...(defaults['BTooltip'] || undefined),
      ...resolveDirectiveProps(binding, el),
      title: text.title ?? text.body ?? '',
      tooltip: isActive,
    })
    el.$__binding = JSON.stringify([binding.modifiers, binding.value])
  },
  beforeUnmount(el) {
    unbind(el)
  },
}
