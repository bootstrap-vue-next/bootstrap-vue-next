/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Utilities
import {
  getCurrentInstance as _getCurrentInstance,
  type ComponentInternalInstance,
  computed,
  inject,
  type InjectionKey,
  provide,
  ref,
  shallowRef,
  type VNode,
  watchEffect,
} from 'vue'
import {defaultsKey} from '../utils'
import type {BvnComponentProps} from '../types'

// Code here was taken from
// https://github.com/vuetifyjs/vuetify/blob/8ed87310890e2b6c8ad2a626a02c17f9467cbb60/packages/vuetify/src/composables/defaults.ts#L138
// Thanks to the Vuetify team. Vue does not make this easy

function injectSelf<T>(key: InjectionKey<T> | string, vm?: ComponentInternalInstance): T | undefined
function injectSelf(key: InjectionKey<any> | string, vm = getCurrentInstance('injectSelf')) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const {provides} = vm

  if (provides && (key as string | symbol) in provides) {
    // TS doesn't allow symbol as index type
    return provides[key as string]
  }
  return undefined
}

function getCurrentInstance(name: string, message?: string) {
  const vm = _getCurrentInstance()

  if (!vm) {
    throw new Error(`[Bvn] ${name} ${message || 'must be called from inside a setup function'}`)
  }

  return vm
}

const toKebabCase = (str = '') =>
  str
    .replace(/[^a-z]/gi, '-')
    .replace(/\B([A-Z])/g, '-$1')
    .toLowerCase()
const isObject = (obj: any): obj is Record<string, any> =>
  obj !== null && typeof obj === 'object' && !Array.isArray(obj)

function mergeDeep(
  source: Record<string, any> = {},
  target: Record<string, any> = {},
  arrayFn?: (a: unknown[], b: unknown[]) => unknown[]
) {
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

const propIsDefined = (vnode: VNode, prop: string) =>
  typeof vnode.props?.[prop] !== 'undefined' ||
  typeof vnode.props?.[toKebabCase(prop)] !== 'undefined'

function internalUseDefaults(props: Record<string, any> = {}, name?: string) {
  const defaults = inject(defaultsKey, ref({}))
  const vm = getCurrentInstance('useDefaults')

  name = name ?? vm.type.name ?? vm.type.__name
  if (!name) {
    // Should never happen
    throw new Error('[Bvn] Could not determine component name')
  }

  const componentDefaults = computed(() => (defaults.value as any)?.[props._as ?? name])
  const _props = new Proxy(props, {
    get(target, prop) {
      const propValue = Reflect.get(target, prop)
      if (prop === 'class' || prop === 'style') {
        return [componentDefaults.value?.[prop], propValue].filter((v) => v != null)
      } else if (typeof prop === 'string' && !propIsDefined(vm.vnode, prop)) {
        return (
          componentDefaults.value?.[prop] ?? (defaults.value as any)?.global?.[prop] ?? propValue
        )
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
    const injected = injectSelf(defaultsKey, vm)
    provide(
      defaultsKey,
      computed(() =>
        _subcomponentDefaults.value
          ? mergeDeep(injected?.value ?? {}, _subcomponentDefaults.value)
          : injected?.value
      ) as any
    )
  }

  return {props: _props, provideSubDefaults}
}

export function useDefaults<T extends Record<string, any>>(
  props: T,
  name: keyof BvnComponentProps
): T {
  const {props: _props, provideSubDefaults} = internalUseDefaults(props, name)
  provideSubDefaults()
  return _props as T
}
