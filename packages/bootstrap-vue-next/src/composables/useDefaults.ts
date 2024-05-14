/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Utilities
import {
  type ComponentInternalInstance,
  computed,
  type ComputedRef,
  getCurrentInstance,
  inject,
  type InjectionKey,
  type MaybeRef,
  provide,
  ref,
  type Ref,
  shallowRef,
  unref,
  type VNode,
  watchEffect,
} from 'vue'
// import type { ComponentProps } from '../types'
// import {getCurrentInstance, injectSelf, mergeDeep, toKebabCase} from '@/util'

export function injectSelf<T>(
  key: InjectionKey<T> | string,
  vm?: ComponentInternalInstance
): T | undefined
export function injectSelf(key: InjectionKey<any> | string, vm = getCurrentInstance()) {
  const {provides} = vm

  if (provides && (key as string | symbol) in provides) {
    // TS doesn't allow symbol as index type
    return provides[key as string]
  }
  return undefined
}

export type DefaultsInstance =
  | undefined
  | {
      [key: string]: undefined | Record<string, unknown>
      global?: Record<string, unknown>
    }

export type DefaultsOptions = Partial<DefaultsInstance>

export const DefaultsSymbol: InjectionKey<Ref<DefaultsInstance>> = Symbol.for('vuetify:defaults')

export function createDefaults(options?: DefaultsInstance): Ref<DefaultsInstance> {
  return ref(options)
}

export function injectDefaults() {
  const defaults = inject(DefaultsSymbol)

  if (!defaults) throw new Error('[Vuetify] Could not find defaults instance')

  return defaults
}

const toKebabCase = (str: string) =>
  str
    .replace(/[^a-z]/gi, '-')
    .replace(/\B([A-Z])/g, '-$1')
    .toLowerCase()

const mergeDeep = (
  source: Record<string, any> = {},
  target: Record<string, any> = {},
  arrayFn?: (a: unknown[], b: unknown[]) => unknown[]
) => {
  const isObject = (obj: any): obj is Record<string, any> =>
    obj !== null && typeof obj === 'object' && !Array.isArray(obj)

  const out: Record<string, any> = {}

  for (const key in source) {
    out[key] = source[key]
  }

  for (const key in target) {
    const sourceProperty = source[key]
    const targetProperty = target[key]

    // Only continue deep merging if
    // both properties are objects
    if (isObject(sourceProperty) && isObject(targetProperty)) {
      out[key] = mergeDeep(sourceProperty, targetProperty, arrayFn)

      continue
    }

    if (Array.isArray(sourceProperty) && Array.isArray(targetProperty) && arrayFn) {
      out[key] = arrayFn(sourceProperty, targetProperty)

      continue
    }

    out[key] = targetProperty
  }

  return out
}

export function provideDefaults(
  defaults?: MaybeRef<DefaultsInstance | undefined>,
  options?: {
    disabled?: MaybeRef<boolean | undefined>
    reset?: MaybeRef<number | string | undefined>
    root?: MaybeRef<boolean | string | undefined>
    scoped?: MaybeRef<boolean | undefined>
  }
) {
  const injectedDefaults = injectDefaults()
  const providedDefaults = ref(defaults)

  const newDefaults = computed(() => {
    const disabled = unref(options?.disabled)

    if (disabled) return injectedDefaults.value

    const scoped = unref(options?.scoped)
    const reset = unref(options?.reset)
    const root = unref(options?.root)

    if (
      (providedDefaults.value === null || providedDefaults.value === undefined) &&
      !(scoped || reset || root)
    )
      return injectedDefaults.value

    let properties = mergeDeep(providedDefaults.value, {prev: injectedDefaults.value})

    if (scoped) return properties

    if (reset || root) {
      const len = Number(reset || Infinity)

      for (let i = 0; i <= len; i++) {
        if (!properties || !('prev' in properties)) {
          break
        }

        properties = properties.prev
      }

      if (properties && typeof root === 'string' && root in properties) {
        properties = mergeDeep(mergeDeep(properties, {prev: properties}), properties[root])
      }

      return properties
    }

    return properties.prev ? mergeDeep(properties.prev, properties) : properties
  }) as ComputedRef<DefaultsInstance>

  provide(DefaultsSymbol, newDefaults)

  return newDefaults
}

export function internalUseDefaults(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: Record<string, any> = {},
  name?: string,
  defaults = injectDefaults()
) {
  const propIsDefined = (vnode: VNode, prop: string) =>
    typeof vnode.props?.[prop] !== 'undefined' ||
    typeof vnode.props?.[toKebabCase(prop)] !== 'undefined'

  const vm = getCurrentInstance()

  name = name ?? vm?.type.name ?? vm?.type.__name
  if (!name) throw new Error('Could not determine component name')

  const componentDefaults = computed(() => defaults.value?.[props._as ?? name])
  const _props = new Proxy(props, {
    get(target, prop) {
      const propValue = Reflect.get(target, prop)
      if (prop === 'class' || prop === 'style') {
        return [componentDefaults.value?.[prop], propValue].filter((v) => v != null)
      } else if (typeof prop === 'string' && !propIsDefined(vm.vnode, prop)) {
        return componentDefaults.value?.[prop] ?? defaults.value?.global?.[prop] ?? propValue
      }
      return propValue
    },
  })

  const _subcomponentDefaults = shallowRef()
  watchEffect(() => {
    if (componentDefaults.value) {
      const subComponents = Object.entries(componentDefaults.value).filter(([key]) =>
        key.startsWith(key[0].toUpperCase())
      )
      _subcomponentDefaults.value = subComponents.length
        ? Object.fromEntries(subComponents)
        : undefined
    } else {
      _subcomponentDefaults.value = undefined
    }
  })

  function provideSubDefaults() {
    const injected = injectSelf(DefaultsSymbol, vm)
    provide(
      DefaultsSymbol,
      computed(() =>
        _subcomponentDefaults.value
          ? mergeDeep(injected?.value ?? {}, _subcomponentDefaults.value)
          : injected?.value
      )
    )
  }

  return {props: _props, provideSubDefaults}
}

export function useDefaults<T extends Record<string, any>>(props: T, name?: string): T
export function useDefaults(props?: undefined, name?: string): Record<string, any>
export function useDefaults(props: Record<string, any> = {}, name?: string) {
  const {props: _props, provideSubDefaults} = internalUseDefaults(props, name)
  provideSubDefaults()
  return _props
}
