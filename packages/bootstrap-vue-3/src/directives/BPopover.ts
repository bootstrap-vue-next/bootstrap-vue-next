import type {Directive, DirectiveBinding} from 'vue'
import {Popover} from 'bootstrap'

/**
 * @external
 */
export default {
  mounted(el, binding: DirectiveBinding) {
    const placement: Popover.Options['placement'] = binding.modifiers.left
      ? 'left'
      : binding.modifiers.right
      ? 'right'
      : binding.modifiers.bottom
      ? 'bottom'
      : binding.modifiers.top
      ? 'top'
      : 'right'

    const trigger: Array<string> = []

    if (binding.modifiers.manual) {
      trigger.push('manual')
    } else {
      if (binding.modifiers.click) {
        trigger.push('click')
      }

      if (binding.modifiers.hover) {
        trigger.push('hover')
      }

      if (binding.modifiers.focus) {
        trigger.push('focus')
      }
    }

    el.setAttribute('data-bs-toggle', 'popover')

    new Popover(el, {
      trigger: trigger.length === 0 ? 'click' : (trigger.join(' ') as Popover.Options['trigger']),
      placement,
      content: binding.value,
      html: binding.modifiers.html,
    })
  },
  unmounted(el) {
    const instance = Popover.getInstance(el)
    if (instance !== null) {
      instance.dispose()
    }
  },
} as Directive<HTMLElement>
