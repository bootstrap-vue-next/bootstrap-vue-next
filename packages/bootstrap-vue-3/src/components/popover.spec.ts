import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BPopover from './BPopover.vue'

describe('popover', () => {
  enableAutoUnmount(afterEach)

  it('has static class popover', () => {
    const wrapper = mount(BPopover)
    expect(wrapper.classes()).toContain('popover')
  })

  it('has static class b-popover', () => {
    const wrapper = mount(BPopover)
    expect(wrapper.classes()).toContain('b-popover')
  })

  // There doesn't seem to be any way to get ref? It is not an attribute nor prop...
  it.skip('has attribute ref element', () => {
    const wrapper = mount(BPopover)
    expect(wrapper.attributes('ref')).toBe('element')
  })

  it('has role tooltip', () => {
    const wrapper = mount(BPopover)
    expect(wrapper.attributes('role')).toBe('tooltip')
  })

  it('has tabindex -1', () => {
    const wrapper = mount(BPopover)
    expect(wrapper.attributes('tabindex')).toBe('-1')
  })

  it('is tag div', () => {
    const wrapper = mount(BPopover)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has prop id', async () => {
    const wrapper = mount(BPopover, {
      props: {id: 'abc'},
    })
    expect(wrapper.attributes('id')).toBe('abc')
    await wrapper.setProps({id: undefined})
    expect(wrapper.attributes('id')).toBeUndefined()
  })

  it('first child contains slot title', () => {
    const wrapper = mount(BPopover, {
      slots: {title: 'foobar'},
    })
    const [, $div] = wrapper.findAll('div')
    expect($div.text()).toBe('foobar')
  })

  it('first child contains prop title', () => {
    const wrapper = mount(BPopover, {
      props: {title: 'foobar'},
    })
    const [, $div] = wrapper.findAll('div')
    expect($div.text()).toBe('foobar')
  })

  it('first child contains slot title if both slot and prop exists', () => {
    const wrapper = mount(BPopover, {
      props: {title: 'propbar'},
      slots: {title: 'slotbar'},
    })
    const [, $div] = wrapper.findAll('div')
    expect($div.text()).toBe('slotbar')
  })

  it('second child contains slot default', () => {
    const wrapper = mount(BPopover, {
      slots: {default: 'foobar'},
    })
    const [, , $div] = wrapper.findAll('div')
    expect($div.text()).toBe('foobar')
  })

  it('second child contains prop content', () => {
    const wrapper = mount(BPopover, {
      props: {content: 'foobar'},
    })
    const [, , $div] = wrapper.findAll('div')
    expect($div.text()).toBe('foobar')
  })

  it('second child contains slot default if both slot and prop exists', () => {
    const wrapper = mount(BPopover, {
      props: {content: 'propbar'},
      slots: {default: 'slotbar'},
    })
    const [, , $div] = wrapper.findAll('div')
    expect($div.text()).toBe('slotbar')
  })

  it('contains b-popover-{type} if prop variant', async () => {
    const wrapper = mount(BPopover, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('b-popover-primary')
    await wrapper.setProps({variant: undefined})
    expect(wrapper.classes()).not.toContain('b-popover-primary')
  })

  // Functionally, this component does more, but this only tests the component
  // Behaviorally, the component does emit, which should be tested,
  // But as I am writting this, I am unsure of how to invoke the events from popover,
  // and pass them into a test
})
