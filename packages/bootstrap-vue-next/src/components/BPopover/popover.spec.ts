import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BPopover from './BPopover.vue'

describe('popover', () => {
  enableAutoUnmount(afterEach)

  it('has div.popover', () => {
    const wrapper = mount(BPopover, {props: {modelValue: true}})
    const $div = wrapper.find('div.popover')
    expect($div.exists()).toBe(true)
  })

  it('has static class popover', () => {
    const wrapper = mount(BPopover, {props: {modelValue: true}})
    const $div = wrapper.get('div.popover')

    expect($div.classes()).toContain('popover')
  })

  it('has static class b-popover', () => {
    const wrapper = mount(BPopover, {
      props: {modelValue: true},
    })
    const $div = wrapper.get('div.popover')

    expect($div.classes()).toContain('b-popover')
  })

  it('has role tooltip', () => {
    const wrapper = mount(BPopover, {props: {modelValue: true}})
    const $div = wrapper.get('div.popover')
    expect($div.attributes('role')).toBe('tooltip')
  })

  it('has tabindex -1', () => {
    const wrapper = mount(BPopover, {props: {modelValue: true}})
    const $div = wrapper.get('div.popover')

    expect($div.attributes('tabindex')).toBe('-1')
  })

  it('is tag div', () => {
    const wrapper = mount(BPopover)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has prop id', async () => {
    const wrapper = mount(BPopover, {props: {id: 'abc', modelValue: true}})
    const $div = wrapper.get('div.popover')

    expect($div.attributes('id')).toBe('abc')
    await wrapper.setProps({id: undefined})
    expect($div.attributes('id')).toBeDefined()
  })

  it('first child contains slot title', () => {
    const wrapper = mount(BPopover, {
      props: {modelValue: true},
      slots: {title: 'foobar'},
    })
    const $div = wrapper.get('div.popover-header')
    expect($div.text()).toBe('foobar')
  })

  it('first child contains prop title', () => {
    const wrapper = mount(BPopover, {
      props: {title: 'foobar', modelValue: true},
    })
    const $div = wrapper.get('div.popover-header')
    expect($div.text()).toBe('foobar')
  })

  it('first child contains slot title if both slot and prop exists', () => {
    const wrapper = mount(BPopover, {
      props: {title: 'propbar', modelValue: true},
      slots: {title: 'slotbar'},
    })
    const $div = wrapper.get('div.popover-header')
    expect($div.text()).toBe('slotbar')
  })

  it('contains slot default', () => {
    const wrapper = mount(BPopover, {
      props: {modelValue: true},
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toContain('foobar')
  })

  it('second child contains prop content', () => {
    const wrapper = mount(BPopover, {
      props: {body: 'foobar', modelValue: true},
    })
    const $div = wrapper.get('div.popover-body')
    expect($div.text()).toBe('foobar')
  })

  it('contains slot default if both slot and prop exists', () => {
    const wrapper = mount(BPopover, {
      props: {body: 'propbar', modelValue: true},
      slots: {default: '<div class="trigger">slotbar</div>'},
    })
    const $div = wrapper.get('div.trigger')
    expect($div.text()).toBe('slotbar')
  })

  // Test new trigger props
  it('defaults to hover and focus triggers', async () => {
    const wrapper = mount(BPopover, {
      props: {body: 'test'},
      slots: {target: '<button>Test</button>'},
      attachTo: document.body,
    })

    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)

    // Test hover trigger
    await button.trigger('pointerenter')
    expect(wrapper.emitted('show')).toBeTruthy()

    // Test focus trigger
    await button.trigger('focus')
    expect((wrapper.emitted('show')?.length || 0) >= 2).toBeTruthy()

    wrapper.unmount()
  })

  it('respects click prop for backward compatibility', async () => {
    const wrapper = mount(BPopover, {
      props: {click: true, body: 'test'},
      slots: {target: '<button>Test</button>'},
      attachTo: document.body,
    })

    const button = wrapper.find('button')

    // Click should trigger show
    await button.trigger('click')
    expect(wrapper.emitted('show')).toBeTruthy()

    // Hover should not trigger (since click=true overrides defaults)
    const showEvents = wrapper.emitted('show')?.length || 0
    await button.trigger('pointerenter')
    expect((wrapper.emitted('show')?.length || 0) - showEvents).toBe(0)

    wrapper.unmount()
  })

  it('respects hover=false to disable hover trigger', async () => {
    const wrapper = mount(BPopover, {
      props: {hover: false, focus: true, body: 'test'},
      slots: {target: '<button>Test</button>'},
      attachTo: document.body,
    })

    const button = wrapper.find('button')

    // Hover should not trigger
    await button.trigger('pointerenter')
    expect(wrapper.emitted('show')).toBeFalsy()

    // Focus should trigger
    await button.trigger('focus')
    expect(wrapper.emitted('show')).toBeTruthy()

    wrapper.unmount()
  })

  it('respects focus=false to disable focus trigger', async () => {
    const wrapper = mount(BPopover, {
      props: {focus: false, hover: true, body: 'test'},
      slots: {target: '<button>Test</button>'},
      attachTo: document.body,
    })

    const button = wrapper.find('button')

    // Focus should not trigger
    await button.trigger('focus')
    expect(wrapper.emitted('show')).toBeFalsy()

    // Hover should trigger
    await button.trigger('pointerenter')
    expect(wrapper.emitted('show')).toBeTruthy()

    wrapper.unmount()
  })

  it('allows combining click with hover/focus', async () => {
    const wrapper = mount(BPopover, {
      props: {click: true, hover: true, focus: true, body: 'test'},
      slots: {target: '<button>Test</button>'},
      attachTo: document.body,
    })

    const button = wrapper.find('button')

    // All triggers should work
    await button.trigger('click')
    expect(wrapper.emitted('show')).toBeTruthy()

    await button.trigger('pointerenter')
    expect((wrapper.emitted('show')?.length || 0) >= 2).toBeTruthy()

    await button.trigger('focus')
    expect((wrapper.emitted('show')?.length || 0) >= 3).toBeTruthy()

    wrapper.unmount()
  })

  it('respects manual prop to disable all automatic triggers', async () => {
    const wrapper = mount(BPopover, {
      props: {manual: true, body: 'test'},
      slots: {target: '<button>Test</button>'},
      attachTo: document.body,
    })

    const button = wrapper.find('button')

    // No triggers should work
    await button.trigger('click')
    await button.trigger('pointerenter')
    await button.trigger('focus')

    expect(wrapper.emitted('show')).toBeFalsy()

    wrapper.unmount()
  })

  // Functionally, this component does more, but this only tests the component
  // Behaviorally, the component does emit, which should be tested,
  // But as I am writting this, I am unsure of how to invoke the events from popover,
  // and pass them into a test
})
