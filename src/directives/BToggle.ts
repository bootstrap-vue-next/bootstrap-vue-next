import {RX_HASH, RX_HASH_ID, RX_SPACE_SPLIT} from '../constants/regex'
import {concat} from '../utils/array'
import {getAttr, isTag} from '../utils/dom'
import {isString} from '../utils/inspect'
import {Directive, DirectiveBinding} from 'vue'

function resolveToggleType(el: HTMLElement): string {
  if (el.classList.contains('offcanvas')) {
    return 'offcanvas'
  }

  if (el.classList.contains('collapse')) {
    return 'collapse'
  }

  throw Error("Couldn't resolve toggle type")
}

const getTargets = (binding: DirectiveBinding<string>, el: HTMLElement) => {
  const {modifiers, arg, value} = binding
  // Any modifiers are considered target IDs
  const targets = Object.keys(modifiers || {})

  // If value is a string, split out individual targets (if space delimited)
  const localValue = isString(value) ? value.split(RX_SPACE_SPLIT) : value

  // Support target ID as link href (`href="#id"`)
  if (isTag(el.tagName, 'a')) {
    const href = getAttr(el, 'href') || ''
    if (RX_HASH_ID.test(href)) {
      targets.push(href.replace(RX_HASH, ''))
    }
  }

  // Add ID from `arg` (if provided), and support value
  // as a single string ID or an array of string IDs
  // If `value` is not an array or string, then it gets filtered out
  concat(arg, localValue).forEach((t) => isString(t) && targets.push(t))

  // Return only unique and truthy target IDs
  return targets.filter((t, index, arr) => t && arr.indexOf(t) === index)
}

const BToggle: Directive<HTMLElement> = {
  mounted(el: HTMLElement, binding: DirectiveBinding<string>): void {
    const targetIds = getTargets(binding, el)
    const targetAttrs = []

    let targetAttr = 'data-bs-target'
    if (el.tagName === 'a') {
      targetAttr = 'href'
    }
    for (let index = 0; index < targetIds.length; index++) {
      const targetId = targetIds[index]
      const target = document.getElementById(targetId)

      if (target) {
        el.setAttribute('data-bs-toggle', resolveToggleType(target))

        targetAttrs.push(`#${targetId}`)
      }
    }
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
}

export default BToggle
