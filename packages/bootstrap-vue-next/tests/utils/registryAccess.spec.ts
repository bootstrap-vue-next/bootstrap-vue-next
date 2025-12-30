import {describe, expect, it} from 'vitest'
import {type ComponentInternalInstance, readonly, ref} from 'vue'
import {getActiveShowHide, getShowHideValue} from '../../src/utils/registryAccess'
import type {RegisterShowHideInstances, RegisterShowHideMapValue} from '../../src/utils/keys'

describe('registryAccess', () => {
  const createMockInstance = (uid: number, shown = false): RegisterShowHideMapValue => ({
    id: 'test-id',
    component: {uid} as ComponentInternalInstance,
    value: readonly(ref(shown)),
    hide: async () => true,
    show: async () => true,
    toggle: async () => true,
    registerTrigger: () => {},
    unregisterTrigger: () => {},
  })

  const createRegistryHolder = (
    instances: RegisterShowHideMapValue[]
  ): RegisterShowHideInstances => ({
    instances,
    getActive: () => instances[instances.length - 1],
  })

  describe('getActiveShowHide', () => {
    it('returns null when id is falsy', () => {
      const registry = ref(new Map())
      expect(getActiveShowHide(registry, undefined)).toBeNull()
      expect(getActiveShowHide(registry, '')).toBeNull()
    })

    it('returns undefined when registry is null', () => {
      expect(getActiveShowHide(null, 'test-id')).toBeUndefined()
    })

    it('returns undefined when id not found', () => {
      const registry = ref(new Map())
      expect(getActiveShowHide(registry, 'missing')).toBeUndefined()
    })

    it('returns the active instance for an id', () => {
      const instance = createMockInstance(1)
      const registry = ref(new Map([['test-id', createRegistryHolder([instance])]]))

      const result = getActiveShowHide(registry, 'test-id')
      expect(result).toBeDefined()
      expect(result?.component.uid).toBe(1)
    })

    it('works with simplified BToggle pattern (no ternary needed)', () => {
      const instance = createMockInstance(1)
      const registry = ref(new Map([['test-id', createRegistryHolder([instance])]]))

      // Old: showHideMap ? getActiveShowHide(showHideMap.value, id) : undefined
      // New: getActiveShowHide(showHideMap, id)
      const result = getActiveShowHide(registry, 'test-id')
      expect(result).toBeDefined()
    })

    it('works with simplified useToggle pattern (no || null needed)', () => {
      const instance = createMockInstance(1)
      const registry = ref(new Map([['test-id', createRegistryHolder([instance])]]))

      // Old: componentId ? getActiveShowHide(registry.value, componentId) || null : null
      // New: getActiveShowHide(registry, componentId)
      const result = getActiveShowHide(registry, 'test-id')
      expect(result).toBeDefined()
    })
  })

  describe('getShowHideValue', () => {
    it('returns false when registry is null', () => {
      expect(getShowHideValue(null, 'test-id')).toBe(false)
    })

    it('returns false when id not found', () => {
      const registry = ref(new Map())
      expect(getShowHideValue(registry, 'missing')).toBe(false)
    })

    it('returns the shown value when instance exists', () => {
      const instance = createMockInstance(1, true)
      const registry = ref(new Map([['test-id', createRegistryHolder([instance])]]))

      expect(getShowHideValue(registry, 'test-id')).toBe(true)
    })

    it('works with simplified BNavbarToggle pattern (no .value needed)', () => {
      const instance = createMockInstance(1, true)
      const registry = ref(new Map([['navbar-collapse', createRegistryHolder([instance])]]))

      // Old: getShowHideValue(showHideData.values.value, props.target)
      // New: getShowHideValue(showHideData.values, props.target)
      expect(getShowHideValue(registry, 'navbar-collapse')).toBe(true)
    })
  })
})
