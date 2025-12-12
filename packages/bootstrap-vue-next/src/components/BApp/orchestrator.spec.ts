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

  it('exposes registry methods', () => {
    const registry = {
      store: ref([]),
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

    // Check that BOrchestrator exposes the registry methods
    expect(wrapper.vm).toBeDefined()

    // Modal namespace
    expect(wrapper.vm.modal).toBeDefined()
    expect(typeof wrapper.vm.modal?.show).toBe('function')
    expect(typeof wrapper.vm.modal?.hide).toBe('function')
    expect(typeof wrapper.vm.modal?.hideAll).toBe('function')
    expect(typeof wrapper.vm.modal?.get).toBe('function')
    expect(typeof wrapper.vm.modal?.current).toBe('function')
    expect(typeof wrapper.vm.modal?.create).toBe('function')

    // Toast namespace
    expect(wrapper.vm.toast).toBeDefined()
    expect(typeof wrapper.vm.toast?.create).toBe('function')
    expect(typeof wrapper.vm.toast?.show).toBe('function')

    // Popover namespace
    expect(wrapper.vm.popover).toBeDefined()
    expect(typeof wrapper.vm.popover?.create).toBe('function')
    expect(typeof wrapper.vm.popover?.popover).toBe('function')
    expect(typeof wrapper.vm.popover?.tooltip).toBe('function')

    // Registry state
    expect(wrapper.vm._isOrchestratorInstalled).toBeDefined()
    expect(wrapper.vm._isToastAppend).toBeDefined()
    expect(wrapper.vm.store).toBeDefined()
  })
})
