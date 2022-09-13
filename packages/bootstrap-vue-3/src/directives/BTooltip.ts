import {Directive, DirectiveBinding} from 'vue'
import {Tooltip} from 'bootstrap'

const resolveTrigger = (
  modifiers: DirectiveBinding['modifiers'],
  value: DirectiveBinding['value']
): Tooltip.Options['trigger'] => {
  if (value?.trigger) {
    return value.trigger
  }

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

const resolvePlacement = (
  modifiers: DirectiveBinding['modifiers'],
  value: DirectiveBinding['value']
): Tooltip.Options['placement'] => {
  if (value?.placement) {
    return value.placement
  }

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

const resolveDelay = (values: DirectiveBinding['value']): Tooltip.Options['delay'] => {
  if (values?.delay) {
    return values.delay
  }

  return 0
}

const resolveTitle = (values: DirectiveBinding['value']): Tooltip.Options['title'] =>
  typeof values === 'object' ? values?.title : values

/**
 * @external
 */
const BTooltip: Directive<HTMLElement> = {
  beforeMount(el, binding) {
    el.setAttribute('data-bs-toggle', 'tooltip')
    if (!el.getAttribute('title')) {
      el.setAttribute('title', resolveTitle(binding.value).toString())
    }

    const isHtml = /<("[^"]*"|'[^']*'|[^'">])*>/.test(el.title)
    const trigger = resolveTrigger(binding.modifiers, binding.value)
    const placement = resolvePlacement(binding.modifiers, binding.value)
    const delay = resolveDelay(binding.value)
    const title = el.getAttribute('title')

    new Tooltip(el, {
      trigger,
      placement,
      delay,
      html: isHtml,
    })

    if (title) {
      el.setAttribute('data-bs-original-title', title)
    }
  },
  updated(el, binding) {
    if (!el.getAttribute('title')) {
      el.setAttribute('title', resolveTitle(binding.value).toString())
    }

    const title = el.getAttribute('title')
    const originalTitle = el.getAttribute('data-bs-original-title')
    const instance = Tooltip.getInstance(el)

    el.removeAttribute('title')

    if (title && title !== originalTitle) {
      instance?.setContent({'.tooltip-inner': title})
      el.setAttribute('data-bs-original-title', title)
    }
  },
  unmounted(el) {
    const instance = Tooltip.getInstance(el)
    instance?.dispose()
  },
}

export default BTooltip
