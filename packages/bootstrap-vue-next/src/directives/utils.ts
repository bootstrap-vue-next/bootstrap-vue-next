import type {ComponentInternalInstance, DirectiveBinding, InjectionKey} from 'vue'

interface _ComponentInternalInstance extends ComponentInternalInstance {
  /**
   * Object containing values this component provides for its descendants
   * @internal Vue internal property
   */
  provides: Record<string, unknown>
}

/**
 * Utility to inject a value within a directive's lifecycle hooks.
 *
 * If/when https://github.com/vuejs/core/issues/5002 is resolved we can switch to `inject` and remove this.
 *
 * @param binding Directive binding
 * @param key Injection key
 */
export function injectWithinDirective<T>(
  binding: DirectiveBinding,
  key: InjectionKey<T> | string
): T | undefined
export function injectWithinDirective(
  binding: DirectiveBinding,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  key: InjectionKey<any> | string
) {
  const {provides} = binding.instance!.$ as _ComponentInternalInstance

  if (provides && (key as string | symbol) in provides) {
    return provides[key as string]
  }

  return undefined
}
