import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BNavbarToggle from './BNavbarToggle.vue'

describe('navbar-toggle', () => {
  it('contains static class navbar-toggler', () => {
    const wrapper = mount(BNavbarToggle)
    expect(wrapper.classes()).toContain('navbar-toggler')

    wrapper.unmount()
  })

  it('tag is button', () => {
    const wrapper = mount(BNavbarToggle)
    expect(wrapper.element.tagName).toBe('BUTTON')

    wrapper.unmount()
  })

  it('renders default slot', () => {
    const wrapper = mount(BNavbarToggle)
    expect(wrapper.text()).toBe('')
    const $span = wrapper.get('span')
    expect($span.classes()).toContain('navbar-toggler-icon')

    wrapper.unmount()
  })

  it('renders default slot custom content', () => {
    const wrapper = mount(BNavbarToggle, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')

    wrapper.unmount()
  })

  it('button type is button', () => {
    const wrapper = mount(BNavbarToggle)
    expect(wrapper.attributes('type')).toBe('button')

    wrapper.unmount()
  })

  it('has aria-label by default', () => {
    const wrapper = mount(BNavbarToggle)
    expect(wrapper.attributes('aria-label')).toBe('Toggle navigation')

    wrapper.unmount()
  })

  it('has aria-label when aria-label prop', () => {
    const wrapper = mount(BNavbarToggle, {
      props: {label: 'abc'},
    })
    expect(wrapper.attributes('aria-label')).toBe('abc')

    wrapper.unmount()
  })

  it('disabled attribute is undefined by default', () => {
    const wrapper = mount(BNavbarToggle)
    expect(wrapper.attributes('disabled')).toBeUndefined()

    wrapper.unmount()
  })

  it('disabled attribute is undefined by default', () => {
    const wrapper = mount(BNavbarToggle, {
      props: {disabled: true},
    })
    expect(wrapper.attributes('disabled')).toBe('')

    wrapper.unmount()
  })

  it('has disabled class when prop disabled', () => {
    const wrapper = mount(BNavbarToggle, {
      props: {disabled: true},
    })
    expect(wrapper.classes()).toContain('disabled')

    wrapper.unmount()
  })

  it('emits click when not disabled', async () => {
    const wrapper = mount(BNavbarToggle, {
      props: {disabled: false},
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')

    wrapper.unmount()
  })

  it('does not emit click when not disabled', async () => {
    const wrapper = mount(BNavbarToggle, {
      props: {disabled: true},
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')

    wrapper.unmount()
  })
})
