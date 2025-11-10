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
    const {uid} = binding.instance!.$
    const defaults = (findProvides(binding, vnode) as Record<symbol, Ref>)[defaultsKey]?.value
    const isActive = resolveActiveStatus(binding.value)
    if (!isActive) return

    const text = resolveContent(binding.value, el)

    if (!text.body && !text.title) return

    // Initialize UID namespace for this directive
    el.$__popover = el.$__popover ?? Object.create(null)

    // Store per-instance state with JSON cache for change detection
    el.$__popover![uid] = {
      binding: JSON.stringify([binding.modifiers, binding.value]),
      destroying: false,
    }

    bind(el, binding, {
      ...(defaults['BPopover'] || undefined),
      ...resolveDirectiveProps(binding, el),
      ...text,
    })
  },
  updated(el, binding, vnode) {
    const {uid} = binding.instance!.$
    const instance = el.$__popover?.[uid]

    // Instance was never mounted or already cleaned up
    if (!instance) return

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
    // Check if binding changed for THIS instance
    const newBinding = JSON.stringify([binding.modifiers, binding.value])
    if (instance.binding === newBinding) return

    // Prevent race conditions during update
    if (instance.destroying) return

    unbind(el)
    bind(el, binding, {
      ...(defaults['BPopover'] || undefined),
      ...resolveDirectiveProps(binding, el),
      ...text,
    })

    // Update THIS instance's cache
    instance.binding = newBinding
  },
  beforeUnmount(el, binding) {
    const {uid} = binding.instance!.$
    const instance = el.$__popover?.[uid]

    if (!instance) return

    instance.destroying = true
    unbind(el)
    delete el.$__popover![uid]
  },
}
