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

  it('has a child span tag', () => {
    const wrapper = mount(BDropdownText)
    const $p = wrapper.find('span')
    expect($p.exists()).toBe(true)
  })

  it('child span tag has static class dropdown-item-text', () => {
    const wrapper = mount(BDropdownText)
    const $p = wrapper.get('span')
    expect($p.classes()).toContain('dropdown-item-text')
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
