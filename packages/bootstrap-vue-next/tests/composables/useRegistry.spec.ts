import {describe, expect, it} from 'vitest'
import {type ComponentInternalInstance, ref} from 'vue'
import {_newShowHideRegistry} from '../../src/composables/useRegistry'
import type {RegisterShowHideFnInput} from '../../src/utils/keys'

describe('useRegistry - _newShowHideRegistry', () => {
  const createMockInput = (uid: number, id = 'test-id'): RegisterShowHideFnInput => ({
    id,
    component: {uid} as ComponentInternalInstance,
    value: ref(false),
    toggle: async () => true,
    show: async () => true,
    hide: async () => true,
    registerTrigger: () => {},
    unregisterTrigger: () => {},
  })

  describe('register', () => {
    it('adds instance to registry', () => {
      const registry = _newShowHideRegistry()
      const input = createMockInput(1)

      registry.register(input)

      expect(registry.values.value.size).toBe(1)
      expect(registry.values.value.has('test-id')).toBe(true)
    })

    it('creates instances array for new ID', () => {
      const registry = _newShowHideRegistry()
      const input = createMockInput(1)

      registry.register(input)

      const holder = registry.values.value.get('test-id')
      expect(holder).toBeDefined()
      expect(holder?.instances).toHaveLength(1)
      expect(holder?.instances[0].component.uid).toBe(1)
    })

    it('appends multiple instances with same ID to array', () => {
      const registry = _newShowHideRegistry()
      const input1 = createMockInput(1, 'modal-1')
      const input2 = createMockInput(2, 'modal-1')
      const input3 = createMockInput(3, 'modal-1')

      registry.register(input1)
      registry.register(input2)
      registry.register(input3)

      const holder = registry.values.value.get('modal-1')
      expect(holder?.instances).toHaveLength(3)
      expect(holder?.instances[0].component.uid).toBe(1)
      expect(holder?.instances[1].component.uid).toBe(2)
      expect(holder?.instances[2].component.uid).toBe(3)
    })

    it('handles multiple IDs independently', () => {
      const registry = _newShowHideRegistry()
      const input1 = createMockInput(1, 'modal-1')
      const input2 = createMockInput(2, 'modal-2')
      const input3 = createMockInput(3, 'modal-1')

      registry.register(input1)
      registry.register(input2)
      registry.register(input3)

      expect(registry.values.value.size).toBe(2)
      expect(registry.values.value.get('modal-1')?.instances).toHaveLength(2)
      expect(registry.values.value.get('modal-2')?.instances).toHaveLength(1)
    })
  })

  describe('getActive', () => {
    it('returns undefined for empty instances array', () => {
      const registry = _newShowHideRegistry()
      const input = createMockInput(1)

      const {unregister} = registry.register(input)
      unregister()

      const holder = registry.values.value.get('test-id')
      // Holder should be deleted when empty
      expect(holder).toBeUndefined()
    })

    it('returns last instance (most recent) for single instance', () => {
      const registry = _newShowHideRegistry()
      const input = createMockInput(1)

      registry.register(input)

      const holder = registry.values.value.get('test-id')
      const active = holder?.getActive()
      expect(active?.component.uid).toBe(1)
    })

    it('returns last instance (most recent) for multiple instances', () => {
      const registry = _newShowHideRegistry()
      const input1 = createMockInput(1, 'modal-1')
      const input2 = createMockInput(2, 'modal-1')
      const input3 = createMockInput(3, 'modal-1')

      registry.register(input1)
      registry.register(input2)
      registry.register(input3)

      const holder = registry.values.value.get('modal-1')
      const active = holder?.getActive()
      expect(active?.component.uid).toBe(3) // Last mounted
    })

    it('handles race condition: old instance lingers when new mounts', () => {
      const registry = _newShowHideRegistry()
      const oldInput = createMockInput(100, 'collapse-1')
      const newInput = createMockInput(101, 'collapse-1')

      // Old instance still mounted
      registry.register(oldInput)
      // New instance mounts before old unmounts (race condition)
      registry.register(newInput)

      const holder = registry.values.value.get('collapse-1')
      expect(holder?.instances).toHaveLength(2)
      // getActive() returns most recent (new instance)
      const active = holder?.getActive()
      expect(active?.component.uid).toBe(101)
    })
  })

  describe('unregister', () => {
    it('removes instance by UID', () => {
      const registry = _newShowHideRegistry()
      const input = createMockInput(1)

      const {unregister} = registry.register(input)
      unregister()

      expect(registry.values.value.has('test-id')).toBe(false)
    })

    it('removes only specific instance by UID from multiple instances', () => {
      const registry = _newShowHideRegistry()
      const input1 = createMockInput(1, 'modal-1')
      const input2 = createMockInput(2, 'modal-1')
      const input3 = createMockInput(3, 'modal-1')

      registry.register(input1)
      const {unregister: unregister2} = registry.register(input2)
      registry.register(input3)

      // Remove middle instance
      unregister2()

      const holder = registry.values.value.get('modal-1')
      expect(holder?.instances).toHaveLength(2)
      expect(holder?.instances[0].component.uid).toBe(1)
      expect(holder?.instances[1].component.uid).toBe(3)
    })

    it('cleans up map entry when last instance removed', () => {
      const registry = _newShowHideRegistry()
      const input1 = createMockInput(1, 'modal-1')
      const input2 = createMockInput(2, 'modal-1')

      const {unregister: unregister1} = registry.register(input1)
      const {unregister: unregister2} = registry.register(input2)

      unregister1()
      expect(registry.values.value.has('modal-1')).toBe(true)

      unregister2()
      expect(registry.values.value.has('modal-1')).toBe(false)
    })

    it('handles unregister when ID not in registry', () => {
      const registry = _newShowHideRegistry()
      const input = createMockInput(1)

      const {unregister} = registry.register(input)
      registry.values.value.delete('test-id')

      // Should not throw
      expect(() => unregister()).not.toThrow()
    })

    it('handles unregister when instance not in array', () => {
      const registry = _newShowHideRegistry()
      const input = createMockInput(1)

      const {unregister} = registry.register(input)
      const holder = registry.values.value.get('test-id')
      holder!.instances.splice(0, 1)

      // Should not throw
      expect(() => unregister()).not.toThrow()
    })

    it('handles race condition cleanup: removes old instance after new mounted', () => {
      const registry = _newShowHideRegistry()
      const oldInput = createMockInput(100, 'collapse-1')
      const newInput = createMockInput(101, 'collapse-1')

      const {unregister: unregisterOld} = registry.register(oldInput)
      registry.register(newInput)

      // Old instance finally unmounts
      unregisterOld()

      const holder = registry.values.value.get('collapse-1')
      expect(holder?.instances).toHaveLength(1)
      expect(holder?.instances[0].component.uid).toBe(101)
    })
  })

  describe('updateId', () => {
    it('moves instance to new ID', () => {
      const registry = _newShowHideRegistry()
      const input = createMockInput(1, 'old-id')

      const {updateId} = registry.register(input)
      updateId('new-id', 'old-id')

      expect(registry.values.value.has('old-id')).toBe(false)
      expect(registry.values.value.has('new-id')).toBe(true)

      const holder = registry.values.value.get('new-id')
      expect(holder?.instances[0].id).toBe('new-id')
      expect(holder?.instances[0].component.uid).toBe(1)
    })

    it('updates instance id property', () => {
      const registry = _newShowHideRegistry()
      const input = createMockInput(1, 'old-id')

      const {updateId} = registry.register(input)
      updateId('new-id', 'old-id')

      const holder = registry.values.value.get('new-id')
      expect(holder?.instances[0].id).toBe('new-id')
    })

    it('cleans up old ID when last instance moved', () => {
      const registry = _newShowHideRegistry()
      const input = createMockInput(1, 'old-id')

      const {updateId} = registry.register(input)
      updateId('new-id', 'old-id')

      expect(registry.values.value.has('old-id')).toBe(false)
    })

    it('keeps old ID when other instances remain', () => {
      const registry = _newShowHideRegistry()
      const input1 = createMockInput(1, 'modal-1')
      const input2 = createMockInput(2, 'modal-1')

      const {updateId: updateId1} = registry.register(input1)
      registry.register(input2)

      updateId1('modal-2', 'modal-1')

      expect(registry.values.value.has('modal-1')).toBe(true)
      expect(registry.values.value.has('modal-2')).toBe(true)
      expect(registry.values.value.get('modal-1')?.instances).toHaveLength(1)
      expect(registry.values.value.get('modal-2')?.instances).toHaveLength(1)
    })

    it('moves instance to existing ID with other instances', () => {
      const registry = _newShowHideRegistry()
      const input1 = createMockInput(1, 'modal-1')
      const input2 = createMockInput(2, 'modal-2')

      const {updateId: updateId1} = registry.register(input1)
      registry.register(input2)

      updateId1('modal-2', 'modal-1')

      expect(registry.values.value.has('modal-1')).toBe(false)
      const holder = registry.values.value.get('modal-2')
      expect(holder?.instances).toHaveLength(2)
      expect(holder?.instances[0].component.uid).toBe(2)
      expect(holder?.instances[1].component.uid).toBe(1)
    })

    it('handles updateId when old ID not in registry', () => {
      const registry = _newShowHideRegistry()
      const input = createMockInput(1, 'old-id')

      const {updateId} = registry.register(input)
      registry.values.value.delete('old-id')

      // Should not throw
      expect(() => updateId('new-id', 'old-id')).not.toThrow()
    })

    it('handles updateId when instance not in array', () => {
      const registry = _newShowHideRegistry()
      const input = createMockInput(1, 'old-id')

      const {updateId} = registry.register(input)
      const holder = registry.values.value.get('old-id')
      holder!.instances.splice(0, 1)

      // Should not throw
      expect(() => updateId('new-id', 'old-id')).not.toThrow()
    })
  })

  describe('race condition scenarios', () => {
    it('handles rapid mount/unmount cycles', () => {
      const registry = _newShowHideRegistry()
      const input1 = createMockInput(1, 'component-1')
      const input2 = createMockInput(2, 'component-1')
      const input3 = createMockInput(3, 'component-1')

      const {unregister: unregister1} = registry.register(input1)
      const {unregister: unregister2} = registry.register(input2)
      registry.register(input3)

      // All three mounted simultaneously (race condition)
      const holder = registry.values.value.get('component-1')
      expect(holder?.instances).toHaveLength(3)
      expect(holder?.getActive()?.component.uid).toBe(3)

      // Old instances finally unmount
      unregister1()
      unregister2()

      expect(holder?.instances).toHaveLength(1)
      expect(holder?.getActive()?.component.uid).toBe(3)
    })

    it('handles out-of-order unmounting', () => {
      const registry = _newShowHideRegistry()
      const input1 = createMockInput(1, 'modal-1')
      const input2 = createMockInput(2, 'modal-1')
      const input3 = createMockInput(3, 'modal-1')

      const {unregister: unregister1} = registry.register(input1)
      const {unregister: unregister2} = registry.register(input2)
      const {unregister: unregister3} = registry.register(input3)

      // Unmount in reverse order
      unregister3()
      const holder = registry.values.value.get('modal-1')
      expect(holder?.getActive()?.component.uid).toBe(2)

      unregister1()
      expect(holder?.getActive()?.component.uid).toBe(2)

      unregister2()
      expect(registry.values.value.has('modal-1')).toBe(false)
    })

    it('handles ID change during race condition', () => {
      const registry = _newShowHideRegistry()
      const input1 = createMockInput(1, 'old-id')
      const input2 = createMockInput(2, 'old-id')

      registry.register(input1)
      const {updateId: updateId2} = registry.register(input2)

      // Second instance changes ID while first still mounted
      updateId2('new-id', 'old-id')

      expect(registry.values.value.get('old-id')?.instances).toHaveLength(1)
      expect(registry.values.value.get('new-id')?.instances).toHaveLength(1)
      expect(registry.values.value.get('old-id')?.getActive()?.component.uid).toBe(1)
      expect(registry.values.value.get('new-id')?.getActive()?.component.uid).toBe(2)
    })

    it('ensures most recent instance is always active during race', () => {
      const registry = _newShowHideRegistry()

      // Simulate component remounting rapidly
      const iterations = 10
      const unregisterFns: (() => void)[] = []

      for (let i = 1; i <= iterations; i++) {
        const input = createMockInput(i, 'rapid-component')
        const {unregister} = registry.register(input)
        unregisterFns.push(unregister)

        // Active should always be most recent
        const holder = registry.values.value.get('rapid-component')
        expect(holder?.getActive()?.component.uid).toBe(i)
      }

      // Cleanup in random order
      const cleanupOrder = [3, 7, 1, 9, 2, 5, 10, 4, 6, 8]
      for (const index of cleanupOrder) {
        unregisterFns[index - 1]()

        const holder = registry.values.value.get('rapid-component')
        if (holder) {
          // Active should be last element in array
          const lastUid = holder.instances[holder.instances.length - 1].component.uid
          expect(holder.getActive()?.component.uid).toBe(lastUid)
        }
      }

      expect(registry.values.value.has('rapid-component')).toBe(false)
    })
  })
})
