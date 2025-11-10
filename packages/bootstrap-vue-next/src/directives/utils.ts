import type {ComponentInternalInstance, Directive, DirectiveBinding, Ref, VNode} from 'vue'
import type {BPopoverProps} from '../types/ComponentProps'
import {
  bind,
  type ElementWithPopper,
  resolveActiveStatus,
  resolveContent,
  resolveDirectiveProps,
  unbind,
} from '../utils/floatingUi'
import {defaultsKey} from '../utils/keys'

interface _ComponentInternalInstance extends ComponentInternalInstance {
  provides?: Record<string, unknown>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setupState?: any
}

interface _VNode extends VNode {
  ctx?: _ComponentInternalInstance | null
  ssContent?: VNode | null
}

/**
 * Represents per-instance state for directives using UID namespacing
 */
export interface DirectiveInstanceState {
  binding: string // JSON.stringify cache for change detection
  destroying: boolean // Flag to prevent race conditions during cleanup
}

/**
 * Gets the component instance UID from a directive binding
 */
export function getDirectiveUid(binding: DirectiveBinding): number {
  return binding.instance!.$.uid
}

/**
 * Initializes UID-namespaced storage on an element for a directive
 * @param el - The HTML element
 * @param propertyName - The property name (e.g., '$__tooltip', '$__popover')
 * @param uid - The component instance UID
 * @param binding - The directive binding value to cache
 * @returns The initialized instance state
 */
export function initDirectiveInstance(
  el: HTMLElement & Record<string, unknown>,
  propertyName: string,
  uid: number,
  binding: DirectiveBinding
): DirectiveInstanceState {
  // Initialize UID namespace for this directive
  const elWithProps = el as Record<string, unknown>
  elWithProps[propertyName] = elWithProps[propertyName] ?? Object.create(null)

  // Store per-instance state with JSON cache for change detection
  const state: DirectiveInstanceState = {
    binding: JSON.stringify([binding.modifiers, binding.value]),
    destroying: false,
  }

  ;(elWithProps[propertyName] as Record<string, unknown>)[uid] = state
  return state
}

/**
 * Gets the instance state for a directive, if it exists
 * @param el - The HTML element
 * @param propertyName - The property name (e.g., '$__tooltip', '$__popover')
 * @param uid - The component instance UID
 * @returns The instance state or undefined if not found
 */
export function getDirectiveInstance(
  el: HTMLElement & Record<string, unknown>,
  propertyName: string,
  uid: number
): DirectiveInstanceState | undefined {
  const elWithProps = el as Record<string, unknown>
  return (elWithProps[propertyName] as Record<string, unknown> | undefined)?.[uid] as
    | DirectiveInstanceState
    | undefined
}

/**
 * Checks if the directive binding has changed for this instance
 * @param instance - The directive instance state
 * @param binding - The current directive binding
 * @returns true if the binding has changed, false otherwise
 */
export function hasBindingChanged(
  instance: DirectiveInstanceState,
  binding: DirectiveBinding
): boolean {
  const newBinding = JSON.stringify([binding.modifiers, binding.value])
  return instance.binding !== newBinding
}

/**
 * Updates the cached binding value for a directive instance
 * @param instance - The directive instance state
 * @param binding - The new directive binding
 */
export function updateBindingCache(
  instance: DirectiveInstanceState,
  binding: DirectiveBinding
): void {
  instance.binding = JSON.stringify([binding.modifiers, binding.value])
}

/**
 * Cleans up a directive instance
 * @param el - The HTML element
 * @param propertyName - The property name (e.g., '$__tooltip', '$__popover')
 * @param uid - The component instance UID
 */
export function cleanupDirectiveInstance(
  el: HTMLElement & Record<string, unknown>,
  propertyName: string,
  uid: number
): void {
  const elWithProps = el as Record<string, unknown>
  const instance = (elWithProps[propertyName] as Record<string, unknown> | undefined)?.[uid] as
    | DirectiveInstanceState
    | undefined
  if (instance) {
    instance.destroying = true
    delete (elWithProps[propertyName] as Record<string, unknown>)[uid]
  }
}

// taken from vuetify https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/directiveComponent.ts

export function findProvides(binding: DirectiveBinding, vnode: _VNode): Record<string, unknown> {
  const provides =
    (vnode.ctx === binding.instance!.$
      ? findComponentParent(vnode, binding.instance!.$)?.provides
      : vnode.ctx?.provides) ?? binding.instance!.$.provides

  return provides
}

export function findComponentParent(
  vnode: VNode,
  root: ComponentInternalInstance
): _ComponentInternalInstance | null {
  // Walk the tree from root until we find the child vnode
  const stack = new Set<VNode>()
  const walk = (children: _VNode[]): boolean => {
    for (const child of children) {
      if (!child) continue

      if (child === vnode || (child.el && vnode.el && child.el === vnode.el)) {
        return true
      }

      stack.add(child)
      let result
      if (child.suspense) {
        result = walk([child.ssContent!])
      } else if (Array.isArray(child.children)) {
        result = walk(child.children as VNode[])
      } else if (child.component?.vnode) {
        result = walk([child.component?.subTree])
      }
      if (result) {
        return result
      }
      stack.delete(child)
    }

    return false
  }
  if (!walk([root.subTree])) {
    // eslint-disable-next-line no-console
    console.error('Could not find original vnode,  will not inherit provides')
    return root
  }

  // Return the first component parent
  const result = Array.from(stack).reverse()
  for (const child of result) {
    if (child.component) {
      return child.component
    }
  }
  return root
}

/**
 * Creates a floating UI directive (tooltip or popover) with UID-namespaced state management
 * @param propertyName - The property name for storing state (e.g., '$__tooltip', '$__popover')
 * @param componentDefaultsKey - The key for accessing component defaults (e.g., 'BTooltip', 'BPopover')
 * @param buildProps - Optional function to customize the props passed to bind()
 * @returns A Vue directive object
 */
export function createFloatingDirective(
  propertyName: string,
  componentDefaultsKey: string,
  buildProps?: (
    text: {title?: string; body?: string},
    defaults: unknown,
    binding: Readonly<DirectiveBinding>,
    el: Readonly<HTMLElement>
  ) => BPopoverProps
): Directive<ElementWithPopper> {
  return {
    mounted(el, binding, vnode) {
      const uid = getDirectiveUid(binding)
      const defaultsMap = (findProvides(binding, vnode) as Record<symbol, Ref>)[defaultsKey]
        ?.value as Record<string, unknown> | undefined
      const isActive = resolveActiveStatus(binding.value)
      if (!isActive) return

      const text = resolveContent(binding.value, el)

      if (!text.body && !text.title) return

      // Initialize per-instance state with UID namespacing
      initDirectiveInstance(el, propertyName, uid, binding)

      const props = buildProps
        ? buildProps(text, defaultsMap?.[componentDefaultsKey], binding, el)
        : {
            ...(defaultsMap?.[componentDefaultsKey] || undefined),
            ...resolveDirectiveProps(binding, el),
            ...text,
          }

      bind(el, binding, props)
    },

    updated(el, binding, vnode) {
      const uid = getDirectiveUid(binding)
      const instance = getDirectiveInstance(el, propertyName, uid)

      // Instance was never mounted or already cleaned up
      if (!instance) return

      const defaultsMap = (findProvides(binding, vnode) as Record<symbol, Ref>)[defaultsKey]
        ?.value as Record<string, unknown> | undefined

      const isActive = resolveActiveStatus(binding.value)

      // If inactive, clean up existing instance
      if (!isActive) {
        if (el.$__element) {
          unbind(el)
        }
        return
      }

      const text = resolveContent(binding.value, el)

      if (!text.body && !text.title) {
        // Clean up if no content
        if (el.$__element) {
          unbind(el)
        }
        return
      }

      delete binding.oldValue
      // Check if binding changed for THIS instance
      if (!hasBindingChanged(instance, binding)) return

      // Prevent race conditions during update
      if (instance.destroying) return

      unbind(el)

      const props = buildProps
        ? buildProps(text, defaultsMap?.[componentDefaultsKey], binding, el)
        : {
            ...(defaultsMap?.[componentDefaultsKey] || undefined),
            ...resolveDirectiveProps(binding, el),
            ...text,
          }

      bind(el, binding, props)

      // Update THIS instance's cache
      updateBindingCache(instance, binding)
    },

    beforeUnmount(el, binding) {
      const uid = getDirectiveUid(binding)
      const instance = getDirectiveInstance(el, propertyName, uid)

      if (!instance) return

      unbind(el)
      cleanupDirectiveInstance(el, propertyName, uid)
    },
  }
}
