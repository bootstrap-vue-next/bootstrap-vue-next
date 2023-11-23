import type {Placement} from '@floating-ui/vue'
export {autoUpdate} from '@floating-ui/vue'

import {type App, createApp, type DirectiveBinding, h, type Ref} from 'vue'
import {DefaultAllowlist, sanitizeHtml} from './sanitizer'
import BPopover from '../components/BPopover.vue'

// TODO this function doesn't currently resolve with RTL in mind. Once Bootstrap finalizes their RTL, we should make this change here
/**
 * Configures Bootstrap-like placement props to floating-ui Placement strings.
 * Top drops up, bottom drops down, end drops right, start drops left, dropend will _align_ the drop to the 'end',
 * dropstart will _align_ the drop to the 'start'. Bottom is default, so it is the last in the order. Bottom should essentially be the opposite of top
 * @param {top: boolean; bottom: boolean; start: boolean; end: boolean; dropstart: boolean; dropend: boolean}
 * @returns {Placement} Placement
 */
export const resolveFloatingPlacement = ({
  top,
  end,
  start,
  alignCenter,
  alignEnd,
}: {
  top: boolean
  start: boolean
  end: boolean
  alignCenter: boolean
  alignEnd: boolean
}): Placement => {
  const direction = top ? 'top' : start ? 'left' : end ? 'right' : 'bottom'
  const align = alignEnd ? 'end' : alignCenter ? null : 'start'
  return `${direction}${align ? `-${align}` : ''}` as Placement
}

export const resolveBootstrapPlacement = (placement: Placement): string => {
  const [_placement] = placement.split('-')
  switch (_placement) {
    case 'left':
      return 'start'
    case 'right':
      return 'end'
    default:
      return _placement
  }
}

export const resolveActiveStatus = (values: DirectiveBinding['value']): boolean =>
  typeof values !== 'object' || values.active !== false

export const resolveContent = (
  values: DirectiveBinding['value'],
  el: HTMLElement
): {title?: string; content?: string} => {
  const isActive = resolveActiveStatus(values)
  if (!isActive) return {}

  const missingBindingValue =
    typeof values === 'undefined' ||
    (typeof values === 'object' && !values.title && !values.content)
  const title = el.getAttribute('title') || el.getAttribute('data-original-title')
  if (missingBindingValue) {
    if (title) {
      el.removeAttribute('title')
      el.setAttribute('data-original-title', title)

      return {
        content: sanitizeHtml(title, DefaultAllowlist),
      }
    }
    return {}
  }
  if (typeof values === 'string') {
    return {
      content: sanitizeHtml(values, DefaultAllowlist),
    }
  }
  return {
    title: values?.title ? sanitizeHtml(values?.title, DefaultAllowlist) : undefined,
    content: values?.content ? sanitizeHtml(values?.content, DefaultAllowlist) : undefined,
  }
}

export const resolveDirectiveProps = (binding: DirectiveBinding, el: HTMLElement) => ({
  target: el,
  modelValue: binding.modifiers.show,
  inline: binding.modifiers.inline,
  click: binding.modifiers.click,
  realtime: binding.modifiers.realtime,
  persistent: binding.modifiers.persistent,
  placement: binding.modifiers.left
    ? 'left'
    : binding.modifiers.right
    ? 'right'
    : binding.modifiers.bottom
    ? 'bottom'
    : binding.modifiers.top
    ? 'top'
    : undefined,
  html: true,
  ...(typeof binding.value === 'object' ? binding.value : {}),
  title: null,
  content: null,
})

export interface ElementWithPopper extends HTMLElement {
  $__state?: Ref<{title: string; target: HTMLElement}>
  $__app?: App
  $__element?: HTMLElement
}

export const bind = (el: ElementWithPopper, binding: DirectiveBinding) => {
  const div = document.createElement('span')
  if (binding.modifiers.body) document.body.appendChild(div)
  else if (binding.modifiers.child) el.appendChild(div)
  else el.parentNode?.insertBefore(div, el.nextSibling)
  el.$__app = createApp({render: () => h(BPopover, {...el.$__state?.value})})
  el.$__app.mount(div)
  el.$__element = div
}

export const unbind = (el: ElementWithPopper) => {
  const div = el.$__element
  el.$__app?.unmount()
  delete el.$__app
  delete el.$__state
  setTimeout(() => {
    div?.remove()
  }, 0)
  delete el.$__element
}
