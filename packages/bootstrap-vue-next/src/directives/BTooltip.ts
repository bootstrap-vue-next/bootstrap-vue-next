import type {Directive, DirectiveBinding} from 'vue'
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

  const trigger: Array<string> = []

  if (modifiers.click) {
    trigger.push('click')
  }

  if (modifiers.hover) {
    trigger.push('hover')
  }

  if (modifiers.focus) {
    trigger.push('focus')
  }

  return trigger.length > 0 ? (trigger.join(' ') as Tooltip.Options['trigger']) : 'hover focus'
}

const resolvePlacement = (
  modifiers: DirectiveBinding['modifiers'],
  value: DirectiveBinding['value']
): Tooltip.Options['placement'] =>
  value?.placement
    ? value.placement
    : modifiers.left
    ? 'left'
    : modifiers.right
    ? 'right'
    : modifiers.bottom
    ? 'bottom'
    : 'top'

const resolveDelay = (values: DirectiveBinding['value']): Tooltip.Options['delay'] =>
  values?.delay ? values.delay : 0

const resolveTitle = (values: DirectiveBinding['value']): Tooltip.Options['title'] => {
  if (typeof values === 'undefined') {
    console.warn(
      'Review tooltip directive usage. Some uses are not defining a title in root component or a value like `v-b-tooltip=\'{title: "my title"}\'` nor `v-b-tooltip="\'my title\'"` to define a title'
    )
    return ''
  }
  return typeof values === 'object' ? values?.title : values
}

/**
 * @external
 */
export default {
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
    if (instance !== null) {
      instance.dispose()
    }
  },
} as Directive<HTMLElement>
