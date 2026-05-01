import type {ComponentInternalInstance, Directive, DirectiveBinding, Ref, VNode} from 'vue'
import {markRaw} from 'vue'
import type {BPopoverProps} from '../types/ComponentProps'
import {
  bind,
  type ElementWithPopper,
  resolveActiveStatus,
  resolveContent,
  resolveDirectiveProps,
  unbind,
  updateBind,
} from '../utils/floatingUi'
import {defaultsKey, orchestratorRegistryKey} from '../utils/keys'
import type {OrchestratorArrayValue} from '../types/ComponentOrchestratorTypes'
import BPopover from '../components/BPopover/BPopover.vue'

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
  _self?: symbol // Symbol used as key in orchestrator store (when using orchestrator path)
  orchestratorStore?: Ref<OrchestratorArrayValue[]> // Ref to orchestrator store (when using orchestrator path)
}

/**
 * Gets the component instance UID from a directive binding
 * @throws Error if binding.instance is not available
 */
export function getDirectiveUid(binding: DirectiveBinding): number {
  if (!binding.instance) {
    throw new Error('[Bootstrap-Vue-Next] Directive binding.instance is not available')
  }
  return binding.instance.$.uid
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

type OrchestratorRegistryValue = {
  store: Ref<OrchestratorArrayValue[]>
  _isOrchestratorInstalled: Ref<boolean>
  _isToastAppend: Ref<boolean>
}

/**
 * Retrieves the orchestrator registry from a provides object, if available.
 */
function getOrchestratorRegistry(
  provides: Record<string, unknown>
): OrchestratorRegistryValue | undefined {
  return (provides as Record<symbol, OrchestratorRegistryValue | undefined>)[
    orchestratorRegistryKey
  ]
}

/**
 * Builds an orchestrator store entry for a tooltip or popover directive instance.
 * The store is passed so that the modelValue update handler can reactively sync state.
 */
function buildOrchestratorEntry(
  _self: symbol,
  props: BPopoverProps,
  store: Ref<OrchestratorArrayValue[]>
): OrchestratorArrayValue {
  return {
    ...props,
    type: props.tooltip ? ('tooltip' as const) : ('popover' as const),
    _self,
    position: 'popover' as const,
    options: {keep: true},
    _component: markRaw(BPopover),
    'onUpdate:modelValue': (val: boolean) => {
      const item = store.value.find((e) => e._self === _self)
      if (item) (item as Record<string, unknown>).modelValue = val
    },
    promise: {
      value: {ref: null} as unknown,
      resolve: () => {},
      stop: undefined,
    },
  } as unknown as OrchestratorArrayValue
}

/**
 * Removes an orchestrator store entry by _self symbol.
 */
function removeOrchestratorEntry(store: Ref<OrchestratorArrayValue[]>, _self: symbol): void {
  const idx = store.value.findIndex((e) => e._self === _self)
  if (idx !== -1) store.value.splice(idx, 1)
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
      const provides = findProvides(binding, vnode)
      const defaultsMap = (provides as Record<symbol, Ref>)[defaultsKey]?.value as
        | Record<string, unknown>
        | undefined
      const isActive = resolveActiveStatus(binding.value)
      if (!isActive) return

      const text = resolveContent(binding.value, el)

      if (!text.body && !text.title) return

      // Initialize per-instance state with UID namespacing
      const state = initDirectiveInstance(el, propertyName, uid, binding)

      const props = buildProps
        ? buildProps(text, defaultsMap?.[componentDefaultsKey], binding, el)
        : {
            ...(defaultsMap?.[componentDefaultsKey] || undefined),
            ...resolveDirectiveProps(binding, el),
            ...text,
          }

      // Use the orchestrator when BOrchestrator is installed (i.e. inside BApp)
      const orchestratorReg = getOrchestratorRegistry(provides as Record<string, unknown>)
      if (orchestratorReg?._isOrchestratorInstalled.value) {
        const _self = Symbol(`directive-${propertyName}`)
        state._self = _self
        state.orchestratorStore = orchestratorReg.store
        orchestratorReg.store.value.push(buildOrchestratorEntry(_self, props, orchestratorReg.store))
      } else {
        bind(el, binding, props)
      }
    },

    updated(el, binding, vnode) {
      const uid = getDirectiveUid(binding)
      let instance = getDirectiveInstance(el, propertyName, uid)

      const provides = findProvides(binding, vnode)
      const defaultsMap = (provides as Record<symbol, Ref>)[defaultsKey]?.value as
        | Record<string, unknown>
        | undefined

      const isActive = resolveActiveStatus(binding.value)

      // If inactive, clean up existing instance if present
      if (!isActive) {
        if (instance) {
          if (instance.orchestratorStore && instance._self) {
            removeOrchestratorEntry(instance.orchestratorStore, instance._self)
          } else if (el.$__element) {
            unbind(el)
          }
          cleanupDirectiveInstance(el, propertyName, uid)
        }
        return
      }

      const text = resolveContent(binding.value, el)

      if (!text.body && !text.title) {
        // Clean up if no content
        if (instance) {
          if (instance.orchestratorStore && instance._self) {
            removeOrchestratorEntry(instance.orchestratorStore, instance._self)
          } else if (el.$__element) {
            unbind(el)
          }
          cleanupDirectiveInstance(el, propertyName, uid)
        }
        return
      }

      // If instance doesn't exist, this is a transition from inactive/no-content to active
      // Initialize the instance now (similar to mounted)
      if (!instance) {
        instance = initDirectiveInstance(el, propertyName, uid, binding)

        const props = buildProps
          ? buildProps(text, defaultsMap?.[componentDefaultsKey], binding, el)
          : {
              ...(defaultsMap?.[componentDefaultsKey] || undefined),
              ...resolveDirectiveProps(binding, el),
              ...text,
            }

        const orchestratorReg = getOrchestratorRegistry(provides as Record<string, unknown>)
        if (orchestratorReg?._isOrchestratorInstalled.value) {
          const _self = Symbol(`directive-${propertyName}`)
          instance._self = _self
          instance.orchestratorStore = orchestratorReg.store
          orchestratorReg.store.value.push(
            buildOrchestratorEntry(_self, props, orchestratorReg.store)
          )
        } else {
          bind(el, binding, props)
        }
        return
      }

      // Check if binding changed for THIS instance
      if (!hasBindingChanged(instance, binding)) return

      // Prevent race conditions during update
      if (instance.destroying) return

      const props = buildProps
        ? buildProps(text, defaultsMap?.[componentDefaultsKey], binding, el)
        : {
            ...(defaultsMap?.[componentDefaultsKey] || undefined),
            ...resolveDirectiveProps(binding, el),
            ...text,
          }

      if (instance.orchestratorStore && instance._self) {
        // Replace the store entry in-place (BOrchestrator uses v-for :key="_self" so Vue patches it)
        const store = instance.orchestratorStore
        const idx = store.value.findIndex((e) => e._self === instance!._self)
        if (idx !== -1) {
          store.value.splice(idx, 1, buildOrchestratorEntry(instance._self, props, store))
        }
      } else {
        // Update props in-place so the tooltip stays visible if it was open
        updateBind(el, binding, props)
      }

      // Update THIS instance's cache
      updateBindingCache(instance, binding)
    },

    beforeUnmount(el, binding) {
      const uid = getDirectiveUid(binding)
      const instance = getDirectiveInstance(el, propertyName, uid)

      if (!instance) return

      if (instance.orchestratorStore && instance._self) {
        removeOrchestratorEntry(instance.orchestratorStore, instance._self)
      } else {
        unbind(el)
      }
      cleanupDirectiveInstance(el, propertyName, uid)
    },
  }
}
