import {RX_HASH, RX_HASH_ID, RX_SPACE_SPLIT} from '../constants/regex'
import type {Directive, DirectiveBinding} from 'vue'

const getTargets = (
  binding: DirectiveBinding<string | readonly string[] | undefined>,
  el: Readonly<HTMLElement>
) => {
  const {modifiers, arg, value} = binding
  // Any modifiers are considered target Ids
  const targets = Object.keys(modifiers || {})

  // If value is a string, split out individual targets (if space delimited)
  const localValue = typeof value === 'string' ? value.split(RX_SPACE_SPLIT) : value

  // Support target Id as link href (`href="#id"`)
  if (el.tagName.toLowerCase() === 'a') {
    const href = el.getAttribute('href') || ''
    if (RX_HASH_ID.test(href)) {
      targets.push(href.replace(RX_HASH, ''))
    }
  }

  // Add Id from `arg` (if provided), and support value
  // as a single string Id or an array of string Ids
  // If `value` is not an array or string, then it gets filtered out
  Array.prototype.concat
    .apply([], [arg, localValue])
    .forEach((t) => typeof t === 'string' && targets.push(t))

  // Return only unique and truthy target Ids
  return targets.filter((t, index, arr) => t && arr.indexOf(t) === index)
}

const toggle = (targetIds: readonly string[], el: Readonly<HTMLElement>) => {
  targetIds.forEach((targetId) => {
    const target = document.getElementById(targetId)

    if (target !== null) {
      target.dispatchEvent(new Event('bv-toggle'))
    }
  })
  setTimeout(() => checkVisibility(targetIds, el), 50)
}

const checkVisibility = (targetIds: readonly string[], el: Readonly<HTMLElement>) => {
  let visible = false
  targetIds.forEach((targetId) => {
    const target = document.getElementById(targetId)

    if (target?.classList.contains('show')) {
      visible = true
    }
    if (target?.classList.contains('closing')) {
      visible = false
    }
  })
  el.setAttribute('aria-expanded', visible ? 'true' : 'false')
  el.classList.remove(visible ? 'collapsed' : 'not-collapsed')
  el.classList.add(visible ? 'not-collapsed' : 'collapsed')
}

const handleUpdate = (
  el: WithToggle,
  binding: DirectiveBinding<string | readonly string[] | undefined>
) => {
  // Determine targets
  const targets = getTargets(binding, el)
  if (targets.length === 0) return

  // Set up click handler
  if (el.__toggle) {
    el.removeEventListener('click', el.__toggle)
  }
  el.__toggle = () => toggle(targets, el)
  el.addEventListener('click', el.__toggle)

  // Update attributes
  el.setAttribute('aria-controls', targets.join(' '))
  checkVisibility(targets, el)
}

export interface WithToggle extends HTMLElement {
  __toggle: () => void
}

export default {
  mounted: handleUpdate,
  updated: handleUpdate,
  unmounted(el: WithToggle): void {
    el.removeEventListener('click', el.__toggle)
    el.removeAttribute('aria-controls')
    el.removeAttribute('aria-expanded')
  },
} satisfies Directive<WithToggle>
