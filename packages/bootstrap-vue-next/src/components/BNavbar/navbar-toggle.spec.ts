import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it, vi} from 'vitest'
import {type ComponentInternalInstance, readonly, ref} from 'vue'
import BNavbarToggle from './BNavbarToggle.vue'
import {
  type RegisterShowHideInstances,
  type RegisterShowHideMapValue,
  showHideRegistryKey,
} from '../../utils/keys'

const createMockShowHideInstance = (shown = false): RegisterShowHideMapValue => ({
  id: 'test-id',
  component: {uid: 1} as ComponentInternalInstance,
  value: readonly(ref(shown)),
  hide: vi.fn(async () => true),
  show: vi.fn(async () => true),
  toggle: vi.fn(async () => true),
  registerTrigger: vi.fn(),
  unregisterTrigger: vi.fn(),
})

const createRegistryHolder = (
  instances: RegisterShowHideMapValue[]
): RegisterShowHideInstances => ({
  instances,
  getActive: () => instances[instances.length - 1],
})

describe('navbar-toggle', () => {
  enableAutoUnmount(afterEach)

  it('contains static class navbar-toggler', () => {
    const wrapper = mount(BNavbarToggle)
    expect(wrapper.classes()).toContain('navbar-toggler')
  })

  it('tag is button', () => {
    const wrapper = mount(BNavbarToggle)
    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('renders default slot', () => {
    const wrapper = mount(BNavbarToggle)
    expect(wrapper.text()).toBe('')
    const $span = wrapper.get('span')
    expect($span.classes()).toContain('navbar-toggler-icon')
  })

  it('renders default slot custom content', () => {
    const wrapper = mount(BNavbarToggle, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('button type is button', () => {
    const wrapper = mount(BNavbarToggle)
    expect(wrapper.attributes('type')).toBe('button')
  })

  it('has aria-label by default', () => {
    const wrapper = mount(BNavbarToggle)
    expect(wrapper.attributes('aria-label')).toBe('Toggle navigation')
  })

  it('has aria-label when aria-label prop', () => {
    const wrapper = mount(BNavbarToggle, {
      props: {label: 'abc'},
    })
    expect(wrapper.attributes('aria-label')).toBe('abc')
  })

  it('aria-label is reactive', async () => {
    const wrapper = mount(BNavbarToggle, {
      props: {label: 'Open menu'},
    })
    expect(wrapper.attributes('aria-label')).toBe('Open menu')
    await wrapper.setProps({label: 'Close menu'})
    expect(wrapper.attributes('aria-label')).toBe('Close menu')
  })

  it('disabled attribute is undefined by default', () => {
    const wrapper = mount(BNavbarToggle)
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('disabled attribute is empty string when true', () => {
    const wrapper = mount(BNavbarToggle, {
      props: {disabled: true},
    })
    expect(wrapper.attributes('disabled')).toBe('')
  })

  it('has disabled class when prop disabled', () => {
    const wrapper = mount(BNavbarToggle, {
      props: {disabled: true},
    })
    expect(wrapper.classes()).toContain('disabled')
  })

  it('does not have disabled class by default', () => {
    const wrapper = mount(BNavbarToggle)
    expect(wrapper.classes()).not.toContain('disabled')
  })

  it('disabled prop is reactive', async () => {
    const wrapper = mount(BNavbarToggle)
    expect(wrapper.classes()).not.toContain('disabled')
    await wrapper.setProps({disabled: true})
    expect(wrapper.classes()).toContain('disabled')
    await wrapper.setProps({disabled: false})
    expect(wrapper.classes()).not.toContain('disabled')
  })

  it('emits click when not disabled', async () => {
    const wrapper = mount(BNavbarToggle, {
      props: {disabled: false},
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('does not emit click when not disabled', async () => {
    const wrapper = mount(BNavbarToggle, {
      props: {disabled: true},
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })

  it('provides expanded slot prop as false when no target', () => {
    const wrapper = mount(BNavbarToggle, {
      slots: {
        default: `<template #default="{ expanded }">{{ expanded }}</template>`,
      },
    })
    expect(wrapper.text()).toBe('false')
  })

  it('provides expanded slot prop as false when target has no showHideData', () => {
    const wrapper = mount(BNavbarToggle, {
      props: {target: 'my-collapse'},
      slots: {
        default: `<template #default="{ expanded }">{{ expanded }}</template>`,
      },
    })
    expect(wrapper.text()).toBe('false')
  })

  it('provides expanded slot prop as false when target is not in registry', () => {
    const values = ref(new Map<string, RegisterShowHideInstances>())

    const wrapper = mount(BNavbarToggle, {
      props: {target: 'my-collapse'},
      global: {
        provide: {
          [showHideRegistryKey as unknown as symbol]: {
            register: vi.fn(),
            values,
          },
        },
      },
      slots: {
        default: `<template #default="{ expanded }">{{ expanded }}</template>`,
      },
    })
    expect(wrapper.text()).toBe('false')
  })

  it('provides expanded slot prop as true when target is shown in registry', () => {
    const instance = createMockShowHideInstance(true)
    const values = ref(new Map([['my-collapse', createRegistryHolder([instance])]]))

    const wrapper = mount(BNavbarToggle, {
      props: {target: 'my-collapse'},
      global: {
        provide: {
          [showHideRegistryKey as unknown as symbol]: {
            register: vi.fn(),
            values,
          },
        },
      },
      slots: {
        default: `<template #default="{ expanded }">{{ expanded }}</template>`,
      },
    })
    expect(wrapper.text()).toBe('true')
  })

  it('provides expanded slot prop as false when target is hidden in registry', () => {
    const instance = createMockShowHideInstance(false)
    const values = ref(new Map([['my-collapse', createRegistryHolder([instance])]]))

    const wrapper = mount(BNavbarToggle, {
      props: {target: 'my-collapse'},
      global: {
        provide: {
          [showHideRegistryKey as unknown as symbol]: {
            register: vi.fn(),
            values,
          },
        },
      },
      slots: {
        default: `<template #default="{ expanded }">{{ expanded }}</template>`,
      },
    })
    expect(wrapper.text()).toBe('false')
  })

  it('calls toggle on the target instance when clicked', async () => {
    const instance = createMockShowHideInstance(false)
    const values = ref(new Map([['my-collapse', createRegistryHolder([instance])]]))

    const wrapper = mount(BNavbarToggle, {
      props: {target: 'my-collapse'},
      global: {
        provide: {
          [showHideRegistryKey as unknown as symbol]: {
            register: vi.fn(),
            values,
          },
        },
      },
    })
    await wrapper.trigger('click')
    expect(instance.toggle).toHaveBeenCalledOnce()
  })

  it('does not call toggle when disabled', async () => {
    const instance = createMockShowHideInstance(false)
    const values = ref(new Map([['my-collapse', createRegistryHolder([instance])]]))

    const wrapper = mount(BNavbarToggle, {
      props: {target: 'my-collapse', disabled: true},
      global: {
        provide: {
          [showHideRegistryKey as unknown as symbol]: {
            register: vi.fn(),
            values,
          },
        },
      },
    })
    await wrapper.trigger('click')
    expect(instance.toggle).not.toHaveBeenCalled()
  })

  it('provides expanded as true when any target in array is shown', () => {
    const hiddenInstance = createMockShowHideInstance(false)
    const shownInstance = createMockShowHideInstance(true)
    const values = ref(
      new Map([
        ['collapse-1', createRegistryHolder([hiddenInstance])],
        ['collapse-2', createRegistryHolder([shownInstance])],
      ])
    )

    const wrapper = mount(BNavbarToggle, {
      props: {target: ['collapse-1', 'collapse-2']},
      global: {
        provide: {
          [showHideRegistryKey as unknown as symbol]: {
            register: vi.fn(),
            values,
          },
        },
      },
      slots: {
        default: `<template #default="{ expanded }">{{ expanded }}</template>`,
      },
    })
    expect(wrapper.text()).toBe('true')
  })

  it('provides expanded as false when all targets in array are hidden', () => {
    const instance1 = createMockShowHideInstance(false)
    const instance2 = createMockShowHideInstance(false)
    const values = ref(
      new Map([
        ['collapse-1', createRegistryHolder([instance1])],
        ['collapse-2', createRegistryHolder([instance2])],
      ])
    )

    const wrapper = mount(BNavbarToggle, {
      props: {target: ['collapse-1', 'collapse-2']},
      global: {
        provide: {
          [showHideRegistryKey as unknown as symbol]: {
            register: vi.fn(),
            values,
          },
        },
      },
      slots: {
        default: `<template #default="{ expanded }">{{ expanded }}</template>`,
      },
    })
    expect(wrapper.text()).toBe('false')
  })

  it('calls toggle on all targets in array when clicked', async () => {
    const instance1 = createMockShowHideInstance(false)
    const instance2 = createMockShowHideInstance(false)
    const values = ref(
      new Map([
        ['collapse-1', createRegistryHolder([instance1])],
        ['collapse-2', createRegistryHolder([instance2])],
      ])
    )

    const wrapper = mount(BNavbarToggle, {
      props: {target: ['collapse-1', 'collapse-2']},
      global: {
        provide: {
          [showHideRegistryKey as unknown as symbol]: {
            register: vi.fn(),
            values,
          },
        },
      },
    })
    await wrapper.trigger('click')
    expect(instance1.toggle).toHaveBeenCalledOnce()
    expect(instance2.toggle).toHaveBeenCalledOnce()
  })
})
