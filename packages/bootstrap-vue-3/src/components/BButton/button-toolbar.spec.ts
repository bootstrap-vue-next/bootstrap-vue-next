import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BButtonToolbar from './BButtonToolbar.vue'

describe('button-toolbar', () => {
  enableAutoUnmount(afterEach)

  it('tag is div', () => {
    const wrapper = mount(BButtonToolbar)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders default slot', () => {
    const wrapper = mount(BButtonToolbar, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('has static class btn-toolbar', () => {
    const wrapper = mount(BButtonToolbar)
    expect(wrapper.classes()).toContain('btn-toolbar')
  })

  it('has static attr role as toolbar', () => {
    const wrapper = mount(BButtonToolbar)
    expect(wrapper.attributes('role')).toBe('toolbar')
  })

  it('has attr aria-role to be prop ariaRole', async () => {
    const wrapper = mount(BButtonToolbar, {
      props: {ariaLabel: 'foobar'},
    })
    expect(wrapper.attributes('aria-label')).toBe('foobar')
    await wrapper.setProps({ariaLabel: undefined})
    expect(wrapper.attributes('aria-label')).toBe('Group')
  })

  it('has class justify-content-between when prop justify', async () => {
    const wrapper = mount(BButtonToolbar, {
      props: {justify: true},
    })
    expect(wrapper.classes()).toContain('justify-content-between')
    await wrapper.setProps({justify: false})
    expect(wrapper.classes()).not.toContain('justify-content-between')
  })
})
