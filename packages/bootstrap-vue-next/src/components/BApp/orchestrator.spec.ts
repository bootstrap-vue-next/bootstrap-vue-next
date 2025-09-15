import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {ref} from 'vue'
import BOrchestrator from './BOrchestrator.vue'
import {orchestratorRegistryKey} from '../../utils/keys'

describe('BOrchestrator TransitionGroup name conditional behavior', () => {
  enableAutoUnmount(afterEach)

  it('applies b-list transition name only when toast items are present', async () => {
    // Mock store with modal items
    const modalStore = ref([
      {
        _self: 'modal1',
        type: 'modal',
        position: 'modal',
        _component: {},
        promise: {value: {}},
      },
    ])

    const registry = {
      store: modalStore,
      _isOrchestratorInstalled: ref(true),
      _isToastAppend: ref(false),
    }

    const wrapper = mount(BOrchestrator, {
      global: {
        provide: {
          [orchestratorRegistryKey]: registry,
        },
      },
    })

    // Find the TransitionGroup component
    const transitionGroup = wrapper.findComponent({name: 'TransitionGroup'})
    expect(transitionGroup.exists()).toBe(true)

    // Should NOT have the b-list name for modal items
    expect(transitionGroup.props('name')).toBeUndefined()
  })

  it('applies b-list transition name when toast items are present', async () => {
    // Mock store with toast items
    const toastStore = ref([
      {
        _self: 'toast1',
        type: 'toast',
        position: 'top-end',
        _component: {},
        promise: {value: {}},
      },
    ])

    const registry = {
      store: toastStore,
      _isOrchestratorInstalled: ref(true),
      _isToastAppend: ref(false),
    }

    const wrapper = mount(BOrchestrator, {
      global: {
        provide: {
          [orchestratorRegistryKey]: registry,
        },
      },
    })

    // Find the TransitionGroup component
    const transitionGroup = wrapper.findComponent({name: 'TransitionGroup'})
    expect(transitionGroup.exists()).toBe(true)

    // Should have the b-list name for toast items
    expect(transitionGroup.props('name')).toBe('b-list')
  })

  it('applies b-list transition name when mixed items contain toasts', async () => {
    // Mock store with mixed items
    const mixedStore = ref([
      {
        _self: 'modal1',
        type: 'modal',
        position: 'modal',
        _component: {},
        promise: {value: {}},
      },
      {
        _self: 'toast1',
        type: 'toast',
        position: 'top-end',
        _component: {},
        promise: {value: {}},
      },
    ])

    const registry = {
      store: mixedStore,
      _isOrchestratorInstalled: ref(true),
      _isToastAppend: ref(false),
    }

    const wrapper = mount(BOrchestrator, {
      global: {
        provide: {
          [orchestratorRegistryKey]: registry,
        },
      },
    })

    // Find the TransitionGroup component for the toast position
    const transitionGroups = wrapper.findAllComponents({name: 'TransitionGroup'})
    expect(transitionGroups).toHaveLength(2) // One for modal, one for toast

    // The toast position should have b-list transition
    const toastTransition = transitionGroups.find((tg) => tg.props('name') === 'b-list')
    expect(toastTransition).toBeDefined()

    // The modal position should not have b-list transition
    const modalTransition = transitionGroups.find((tg) => tg.props('name') === undefined)
    expect(modalTransition).toBeDefined()
  })
})
