import {Directive, DirectiveBinding} from 'vue'
import Tooltip from 'bootstrap/js/dist/tooltip'

function resolveTrigger(modifiers: DirectiveBinding['modifiers']): Tooltip.Options['trigger'] {
  if (modifiers.manual) {
    return 'manual'
  }

  const trigger: string[] = []

  if (modifiers.click) {
    trigger.push('click')
  }

  if (modifiers.hover) {
    trigger.push('hover')
  }

  if (modifiers.focus) {
    trigger.push('focus')
  }

  if (trigger.length > 0) {
    return trigger.join(' ') as Tooltip.Options['trigger']
  }

  return 'hover focus'
}

function resolvePlacement(modifiers: DirectiveBinding['modifiers']): Tooltip.Options['placement'] {
  if (modifiers.left) {
    return 'left'
  }

  if (modifiers.right) {
    return 'right'
  }

  if (modifiers.bottom) {
    return 'bottom'
  }

  return 'top'
}

function resolveDelay(values: DirectiveBinding['value']): Tooltip.Options['delay'] {
  if (values?.delay) {
    return values.delay
  }

  return 0
}

const BTooltip: Directive<HTMLElement> = {
  beforeMount(el, binding) {
    el.setAttribute('data-bs-toogle', 'tooltip')

    const isHtml = /<("[^"]*"|'[^']*'|[^'">])*>/.test(el.title)
    const trigger = resolveTrigger(binding.modifiers)
    const placement = resolvePlacement(binding.modifiers)
    const delay = resolveDelay(binding.value)

    new Tooltip(el, {
      trigger,
      placement,
      delay,
      html: isHtml,
    })
  },
  updated(el) {
    const title = el.getAttribute('title')

    if (title !== '') {
      const instance = Tooltip.getInstance(el)
      instance?.hide()
      el.setAttribute('data-bs-original-title', title || '')
      el.setAttribute('title', '')
    }
  },
  unmounted(el) {
    const instance = Tooltip.getInstance(el)
    instance?.dispose()
  },
}

export default BTooltip
