import {Directive} from 'vue'
import {Popover} from 'bootstrap'

const BPopover: Directive<HTMLElement> = {
  mounted(el, binding) {
    let placement: Popover.Options['placement'] = 'right'
    const trigger: string[] = []

    if (binding.modifiers.left) {
      placement = 'left'
    } else if (binding.modifiers.right) {
      placement = 'right'
    } else if (binding.modifiers.bottom) {
      placement = 'bottom'
    } else if (binding.modifiers.top) {
      placement = 'top'
    }

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
    })
  },
  unmounted(el) {
    const instance = Popover.getInstance(el)
    instance?.dispose()
  },
}

export default BPopover
