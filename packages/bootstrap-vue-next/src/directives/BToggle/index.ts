import {RX_HASH, RX_HASH_ID, RX_SPACE_SPLIT} from '../../utils/constants'
import {type Directive, type DirectiveBinding, toValue, type VNode} from 'vue'
import {findProvides} from '../utils'
import {type RegisterShowHideValue, showHideRegistryKey} from '../../utils/keys'

const getTargets = (
  binding: DirectiveBinding<string | readonly string[] | undefined>,
  el: Readonly<Element>
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

const handleUpdate = (
  el: Element,
  binding: DirectiveBinding<string | readonly string[] | undefined>,
  vnode: VNode
) => {
  // Determine targets
  const targets = getTargets(binding, el)
  if (targets.length === 0) return

  const provides = findProvides(binding, vnode)
  const showHideMap = (provides as Record<symbol, RegisterShowHideValue>)[showHideRegistryKey]
    ?.values
  if ((el as HTMLElement).dataset.bvtoggle) {
    const oldTargets = ((el as HTMLElement).dataset.bvtoggle || '').split(' ')
    if (oldTargets.length === 0) return
    for (const targetId of oldTargets) {
      const showHide = showHideMap?.value.get(targetId)
      if (!showHide) {
        continue
      }
      if (!targets.includes(targetId)) {
        toValue(showHide).unregisterTrigger('click', el, false)
      }
    }
  }
  ;(el as HTMLElement).dataset.bvtoggle = targets.join(' ')

  targets.forEach(async (targetId) => {
    let count = 0
    const maxAttempts = 5
    const delayMs = 100

    // Keep looking until showHide is found, giving up after 500ms or directive is unmounted
    while (count < maxAttempts) {
      // Check if element is still mounted before each iteration
      if (!(el as HTMLElement).dataset.bvtoggle) {
        // Element was unmounted, stop trying
        return
      }

      const showHide = showHideMap?.value.get(targetId)
      if (!showHide) {
        count++
        if (count < maxAttempts) {
          await new Promise((resolve) => setTimeout(resolve, delayMs))
          continue
        }
        // Only warn if element is still mounted after all attempts
        if ((el as HTMLElement).dataset.bvtoggle) {
          // eslint-disable-next-line no-console
          console.warn(
            `[v-b-toggle] Target with ID ${targetId} not found after ${maxAttempts * delayMs}ms`
          )
        }
        break
      }

      // Final check before registration
      if (!(el as HTMLElement).dataset.bvtoggle) return

      // Register the trigger element
      toValue(showHide).unregisterTrigger('click', el, false)
      toValue(showHide).registerTrigger('click', el)
      break
    }
  })

  el.setAttribute('aria-controls', targets.join(' '))
}
const handleUnmount = (
  el: Element,
  binding: DirectiveBinding<string | readonly string[] | undefined>,
  vnode: VNode
) => {
  // Determine targets
  const targets = getTargets(binding, el)
  if (targets.length === 0) return
  const provides = findProvides(binding, vnode)
  const showHideMap = (provides as Record<symbol, RegisterShowHideValue>)[showHideRegistryKey]
    ?.values

  targets.forEach((targetId) => {
    const showHide = showHideMap?.value.get(targetId)
    if (!showHide) {
      return
    }
    toValue(showHide).unregisterTrigger('click', el, false)
  })

  el.removeAttribute('aria-controls')
  el.removeAttribute('aria-expanded')
  el.classList.remove('collapsed')
  el.classList.remove('not-collapsed')
  delete (el as HTMLElement).dataset.bvtoggle
}

export const vBToggle: Directive<Element> = {
  mounted: handleUpdate,
  updated: handleUpdate,
  unmounted: handleUnmount,
}
