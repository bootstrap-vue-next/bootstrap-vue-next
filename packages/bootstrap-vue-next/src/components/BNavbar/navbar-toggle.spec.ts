import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BNavbarToggle from './BNavbarToggle.vue'

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
})
