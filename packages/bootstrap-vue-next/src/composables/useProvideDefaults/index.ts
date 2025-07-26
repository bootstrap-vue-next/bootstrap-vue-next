import {computed, inject, provide} from 'vue'
import {defaultsKey} from '../../utils/keys'
import type {BvnComponentProps} from '../../types/BootstrapVueOptions'
import type {BAppProps} from '../../types/ComponentProps'

export const useProvideDefaults = (
  defaults: BAppProps['defaults'],
  mergeDefaults: BAppProps['mergeDefaults']
) => {
  // Inject existing defaults from parent (could be from plugins)
  const injectedDefaults = inject(defaultsKey, undefined)

  // Merge injected defaults with prop defaults (prop takes priority)
  const mergedDefaults = computed<Partial<BvnComponentProps>>(() => {
    if (!injectedDefaults) {
      return defaults ?? {}
    }
    const merged = {...injectedDefaults.value} as Partial<BvnComponentProps>

    if (defaults) {
      if (mergeDefaults) {
        if (typeof mergeDefaults === 'function') {
          return mergeDefaults(merged, defaults) as Partial<BvnComponentProps>
        } else if (mergeDefaults === true) {
          return deepMerge(merged, defaults)
        }
        return Object.assign(merged, defaults)
      }
      return defaults
    }

    return merged
  })

  // Provide the merged defaults to child components
  provide(defaultsKey, mergedDefaults)
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    value !== null &&
    typeof value === 'object' &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === '[object Object]'
  )
}

function deepMerge<T extends Record<string, unknown>, S extends Record<string, unknown>>(
  target: T,
  source: S,
  visited = new WeakSet()
): T & S {
  // Handle circular references
  if (visited.has(source)) {
    return target as T & S
  }
  visited.add(source)

  // Create a new object to avoid mutating the target
  const result: Record<string, unknown> = {...target}

  for (const key in source) {
    const sourceValue = source[key]
    const targetValue = target[key]

    if (isPlainObject(sourceValue) && isPlainObject(targetValue)) {
      // Recursively merge plain objects
      result[key] = deepMerge(
        targetValue as Record<string, unknown>,
        sourceValue as Record<string, unknown>,
        visited
      )
    } else if (Array.isArray(sourceValue)) {
      // Copy arrays to avoid mutation
      result[key] = [...sourceValue]
    } else {
      // Replace value for all other types (primitives, class instances, Vue refs, etc.)
      result[key] = sourceValue
    }
  }

  return result as T & S
}
