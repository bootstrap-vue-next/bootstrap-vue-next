import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {defineComponent, h, markRaw, ref} from 'vue'
import BOrchestrator from './BOrchestrator.vue'
import {orchestratorRegistryKey} from '../../utils/keys'
import type {
  ModalOrchestratorArrayValue,
  ToastOrchestratorArrayValue,
} from '../../types/ComponentOrchestratorTypes'
import type {ContainerPosition} from '../../types/Alignment'

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

enableAutoUnmount(afterEach)

describe('BOrchestrator TransitionGroup name conditional behavior', () => {
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

describe('BOrchestrator toast container position classes', () => {
  const mountWithToast = (position?: ContainerPosition) => {
    const registry = buildRegistry({
      toast: [
        buildItem<ToastOrchestratorArrayValue>('toast1', {
          modelValue: false,
          ...(position ? {position} : {}),
        }),
      ],
    })

    return mount(BOrchestrator, {
      global: {
        provide: {
          [orchestratorRegistryKey]: registry,
        },
      },
    })
  }

  // The semantic position must be mapped to Bootstrap position utilities. Emitting the raw
  // value instead yields e.g. `bottom-end`, which matches no stylesheet rule, leaving the
  // fixed container with auto offsets in the top-left corner.
  it.each([
    ['top-start', 'top-0 start-0'],
    ['top-center', 'top-0 start-50 translate-middle-x'],
    ['top-end', 'top-0 end-0'],
    ['middle-start', 'top-50 start-0 translate-middle-y'],
    ['middle-center', 'top-50 start-50 translate-middle'],
    ['middle-end', 'top-50 end-0 translate-middle-y'],
    ['bottom-start', 'bottom-0 start-0'],
    ['bottom-center', 'bottom-0 start-50 translate-middle-x'],
    ['bottom-end', 'bottom-0 end-0'],
  ] satisfies [ContainerPosition, string][])(
    'renders position %s as the utility classes %s',
    (position, expected) => {
      const wrapper = mountWithToast(position)

      const container = wrapper.find('.toast-container')
      expect(container.exists()).toBe(true)
      expect(container.attributes('class')).toBe(`${expected} toast-container position-fixed p-3`)
    }
  )

  it('falls back to the bottom-start utility classes when no position is given', () => {
    const wrapper = mountWithToast()

    const container = wrapper.find('.toast-container')
    expect(container.exists()).toBe(true)
    expect(container.attributes('class')).toBe(
      'bottom-0 start-0 toast-container position-fixed p-3'
    )
  })
})
