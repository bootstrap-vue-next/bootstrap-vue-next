import type {Boundary, Placement, RootBoundary} from '@floating-ui/vue'
export {autoUpdate} from '@floating-ui/vue'

import {type DirectiveBinding, h, render} from 'vue'
import BPopover from '../components/BPopover/BPopover.vue'
import type {BPopoverProps} from '../types/ComponentProps'

export const resolveBootstrapPlacement = (placement: Placement): string => {
  const [_placement] = placement.split('-')
  switch (_placement) {
    case 'left':
      return 'start'
    case 'right':
      return 'end'
    default:
      return _placement || 'end'
  }
}
export const resolveBootstrapCaret = (placement: Placement): string => {
  const [_placement] = placement.split('-')
  switch (_placement) {
    case 'left':
      return 'start'
    case 'right':
      return 'end'
    case 'top':
      return 'up'
    case 'bottom':
      return 'down'
    default:
      return _placement || 'down'
  }
}

export const resolveActiveStatus = (values: DirectiveBinding['value']): boolean =>
  typeof values !== 'object' || values.active !== false

export const resolveContent = (
  values: DirectiveBinding['value'],
  el: HTMLElement
): {title?: string; body?: string} => {
  const isActive = resolveActiveStatus(values)
  if (!isActive) return {}

  const missingBindingValue =
    typeof values === 'undefined' ||
    (typeof values === 'object' && !values.title && !values.content && !values.body)

  // SSR guard: skip DOM attribute access on server
  if (typeof document !== 'undefined') {
    const title = el.getAttribute('title') || el.getAttribute('data-original-title')
    if (missingBindingValue) {
      if (title) {
        el.removeAttribute('title')
        el.setAttribute('data-original-title', title)

        return {
          body: title,
        }
      }
      return {}
    }
  } else {
    // SSR: if no binding value provided, return empty
    if (missingBindingValue) return {}
  }

  if (typeof values === 'string') {
    return {
      body: values,
    }
  }

  // TODO: deprication remove warning in 2025-07
  if (values?.content)
    // eslint-disable-next-line no-console
    console.warn('v-b-popover/v-b-tooltip: `content` is deprecated, use `body` instead')

  return {
    title: values?.title ? values?.title : undefined,
    body: values?.body ? values?.body : values?.content ? values?.content : undefined,
  }
}

export const resolveDirectiveProps = (
  binding: Readonly<DirectiveBinding>,
  el: Readonly<HTMLElement>
) => ({
  target: el,
  modelValue: binding.modifiers.show,
  inline: binding.modifiers.inline,
  click: binding.modifiers.click,
  realtime: binding.modifiers.realtime,
  lazy: binding.modifiers.lazy,
  placement: binding.modifiers.left
    ? 'left'
    : binding.modifiers.right
      ? 'right'
      : binding.modifiers.bottom
        ? 'bottom'
        : binding.modifiers.top
          ? 'top'
          : undefined,
  ...(typeof binding.value === 'object' ? binding.value : undefined),
  ...(binding.modifiers.interactive ? {noninteractive: false} : undefined),
  title: null,
  body: null,
})

export interface ElementWithPopper extends HTMLElement {
  [key: string]: unknown
  $__element?: HTMLElement
  $__tooltip?: Record<
    number,
    {
      binding: string
      destroying: boolean
    }
  >
  $__popover?: Record<
    number,
    {
      binding: string
      destroying: boolean
    }
  >
}

export const bind = (
  el: ElementWithPopper,
  binding: Readonly<DirectiveBinding>,
  props: BPopoverProps
) => {
  // SSR guard: skip DOM manipulation on server
  if (typeof document === 'undefined') return

  const div = document.createElement('span')
  if (binding.modifiers.body) document.body.appendChild(div)
  else if (binding.modifiers.child) el.appendChild(div)
  else el.parentNode?.insertBefore(div, el.nextSibling)
  render(h(BPopover, props), div)
  el.$__element = div
}

export const unbind = (el: ElementWithPopper) => {
  const div = el.$__element
  if (!div) return

  // Unmount Vue component immediately
  render(null, div)

  // SSR guard: skip DOM cleanup on server
  if (typeof document === 'undefined') {
    delete el.$__element
    return
  }

  // Use microtask instead of setTimeout(0) for more predictable cleanup
  // and better performance
  queueMicrotask(() => {
    // Remove the element in next microtask
    // The directive's beforeUnmount will have already cleaned up UID-specific state
    div.remove()
    // Only delete the reference if it still points to the div we just unmounted
    // This prevents deleting a fresh reference if bind() was called again immediately
    if (el.$__element === div) {
      delete el.$__element
    }
  })
}

export const isBoundary = (input: unknown): input is Boundary =>
  input === 'clippingAncestors' || input instanceof Element || Array.isArray(input)

export const isRootBoundary = (input: Boundary | RootBoundary): input is RootBoundary =>
  !isBoundary(input)
