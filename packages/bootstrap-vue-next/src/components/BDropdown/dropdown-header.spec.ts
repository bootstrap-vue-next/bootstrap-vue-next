import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BDropdownHeader from './BDropdownHeader.vue'

describe('dropdown-header', () => {
  enableAutoUnmount(afterEach)

  it('tag is li', () => {
    const wrapper = mount(BDropdownHeader)
    expect(wrapper.element.tagName).toBe('LI')
  })

  it('has child h6', () => {
    const wrapper = mount(BDropdownHeader)
    const $h6 = wrapper.find('h6')
    expect($h6.exists()).toBe(true)
  })

  it('child h6 has static class dropdown-header', () => {
    const wrapper = mount(BDropdownHeader)
    const $h6 = wrapper.get('h6')
    expect($h6.classes()).toContain('dropdown-header')
  })

  it('child h6 renders default slot', () => {
    const wrapper = mount(BDropdownHeader, {
      slots: {default: 'foobar'},
    })
    const $h6 = wrapper.get('h6')
    expect($h6.text()).toBe('foobar')
  })
})
