import {RX_HASH, RX_HASH_ID, RX_SPACE_SPLIT} from '../constants/regex'
import {getAttr, isTag} from '../utils'
import type {Directive, DirectiveBinding} from 'vue'

/**
 *
 * @param el
 * @returns
 */
const resolveToggleType = (el: HTMLElement): string => {
  if (el.classList.contains('offcanvas')) {
    return 'offcanvas'
  }

  if (el.classList.contains('collapse')) {
    return 'collapse'
  }

  throw Error("Couldn't resolve toggle type")
}

/**
 *
 * @param binding
 * @param el
 * @returns
 */
const getTargets = (binding: DirectiveBinding<string>, el: HTMLElement) => {
  const {modifiers, arg, value} = binding
  // Any modifiers are considered target Ids
  const targets = Object.keys(modifiers || {})

  // If value is a string, split out individual targets (if space delimited)
  const localValue = typeof value === 'string' ? value.split(RX_SPACE_SPLIT) : value

  // Support target Id as link href (`href="#id"`)
  if (isTag(el.tagName, 'a')) {
    const href = getAttr(el, 'href') || ''
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

/**
 * @external
 */
export default {
  mounted(el, binding: DirectiveBinding<string>): void {
    const targetIds = getTargets(binding, el)
    const targetAttrs: Array<string> = []

    const targetAttr = el.tagName === 'a' ? 'href' : 'data-bs-target'

    targetIds.forEach((targetId) => {
      const target = document.getElementById(targetId)

      if (target !== null) {
        el.setAttribute('data-bs-toggle', resolveToggleType(target))

        targetAttrs.push(`#${targetId}`)
      }
    })

    if (targetAttrs.length > 0) {
      el.setAttribute(targetAttr, targetAttrs.join(','))
    }

    // if (typeof binding.arg === 'string') {
    //   const target = document.getElementById(binding.arg)
    //   let targetAttr = 'data-bs-target'

    //   if (target) {
    //     el.setAttribute('data-bs-toggle', resolveToggleType(target))

    //     if (el.tagName === 'a') {
    //       targetAttr = 'href'
    //     }

    //     el.setAttribute(targetAttr, `#${binding.arg}`)
    //   }
    // }

    // TODO support class selector

    // if (binding.arg) {
    //     let toggle = 'collapse';
    //     let selector = `#${binding.arg}`
    //     const elements = document.querySelectorAll(`.${binding.arg}`);

    //     if (elements.length > 1) {
    //         selector = selector.replace('#', '.');
    //     }

    //     el.setAttribute('data-bs-target', selector)
    // }
  },
} as Directive<HTMLElement>
