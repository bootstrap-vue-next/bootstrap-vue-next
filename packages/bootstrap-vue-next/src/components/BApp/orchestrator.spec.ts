import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {defineComponent, h, markRaw, ref} from 'vue'
import BOrchestrator from './BOrchestrator.vue'
import {orchestratorRegistryKey} from '../../utils/keys'
import type {
  ModalOrchestratorArrayValue,
  ToastOrchestratorArrayValue,
} from '../../types/ComponentOrchestratorTypes'

const DummyComponent = markRaw(
  defineComponent({
    name: 'DummyComponent',
    setup: () => () => h('div'),
  })
)

const buildItem = <T extends ModalOrchestratorArrayValue | ToastOrchestratorArrayValue>(
  id: string,
  props: T['props']
) =>
  ({
    component: DummyComponent,
    id,
    fns: {
      resolve: () => {},
      setRef: () => {},
      destroy: async () => {},
    },
    props,
  }) as T

const buildRegistry = (overrides: {
  modal?: ModalOrchestratorArrayValue[]
  toast?: ToastOrchestratorArrayValue[]
}) => {
  const modalMap = new Map((overrides.modal ?? []).map((item) => [item.id, ref(item)]))
  const toastMap = new Map((overrides.toast ?? []).map((item) => [item.id, ref(item)]))

  return {
    store: ref({
      modal: modalMap,
      tooltip: new Map(),
      popover: new Map(),
      toast: toastMap,
    }),
    _isOrchestratorInstalled: ref(true),
    _setOrchestratorInstalled: () => {},
    _isToastAppend: ref(false),
    _setToastAppend: () => {},
  }
}

describe('BOrchestrator TransitionGroup name conditional behavior', () => {
  enableAutoUnmount(afterEach)

  it('applies b-list transition name only when toast items are present', () => {
    const registry = buildRegistry({
      modal: [buildItem<ModalOrchestratorArrayValue>('modal1', {modelValue: false})],
    })

    const wrapper = mount(BOrchestrator, {
      global: {
        provide: {
          [orchestratorRegistryKey]: registry,
        },
      },
    })

    const transitionGroup = wrapper.findComponent({name: 'TransitionGroup'})
    expect(transitionGroup.exists()).toBe(true)

    // Should NOT have the b-list name for modal items
    expect(transitionGroup.props('name')).toBeUndefined()
  })

  it('applies b-list transition name when toast items are present', () => {
    const registry = buildRegistry({
      toast: [
        buildItem<ToastOrchestratorArrayValue>('toast1', {
          modelValue: false,
          position: 'top-end',
        }),
      ],
    })

    const wrapper = mount(BOrchestrator, {
      global: {
        provide: {
          [orchestratorRegistryKey]: registry,
        },
      },
    })

    const transitionGroup = wrapper.findComponent({name: 'TransitionGroup'})
    expect(transitionGroup.exists()).toBe(true)

    // Should have the b-list name for toast items
    expect(transitionGroup.props('name')).toBe('b-list')
  })

  it('applies b-list transition name when mixed items contain toasts', () => {
    const registry = buildRegistry({
      modal: [buildItem<ModalOrchestratorArrayValue>('modal1', {modelValue: false})],
      toast: [
        buildItem<ToastOrchestratorArrayValue>('toast1', {
          modelValue: false,
          position: 'top-end',
        }),
      ],
    })

    const wrapper = mount(BOrchestrator, {
      global: {
        provide: {
          [orchestratorRegistryKey]: registry,
        },
      },
    })

    // Find the TransitionGroup components for both positions
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
