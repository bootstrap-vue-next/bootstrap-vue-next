import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BDropdownText from './BDropdownText.vue'

describe('dropdown-text', () => {
  enableAutoUnmount(afterEach)

  it('is tag li', () => {
    const wrapper = mount(BDropdownText)
    expect(wrapper.element.tagName).toBe('LI')
  })

  it('has static attr role to be presentation', () => {
    const wrapper = mount(BDropdownText)
    expect(wrapper.attributes('role')).toBe('presentation')
  })

  it('has a child p tag', () => {
    const wrapper = mount(BDropdownText)
    const $p = wrapper.find('p')
    expect($p.exists()).toBe(true)
  })

  it('child p tag has static class px-4', () => {
    const wrapper = mount(BDropdownText)
    const $p = wrapper.get('p')
    expect($p.classes()).toContain('px-4')
  })

  it('child p tag has static class mb-0', () => {
    const wrapper = mount(BDropdownText)
    const $p = wrapper.get('p')
    expect($p.classes()).toContain('mb-0')
  })

  it('child p tag has static class text-muted', () => {
    const wrapper = mount(BDropdownText)
    const $p = wrapper.get('p')
    expect($p.classes()).toContain('text-muted')
  })

  it('child p tag has static class py-1', () => {
    const wrapper = mount(BDropdownText)
    const $p = wrapper.get('p')
    expect($p.classes()).toContain('py-1')
  })

  it('renders default slot', () => {
    const wrapper = mount(BDropdownText, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders prop text', () => {
    const wrapper = mount(BDropdownText, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders default slot over prop text', () => {
    const wrapper = mount(BDropdownText, {
      slots: {default: 'slots'},
      props: {text: 'props'},
    })
    expect(wrapper.text()).toBe('slots')
  })
})
