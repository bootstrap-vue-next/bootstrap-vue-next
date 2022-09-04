import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BDropdownDivider from './BDropdownDivider.vue'

describe('dropdown-divider', () => {
  enableAutoUnmount(afterEach)

  it('is tag li', () => {
    const wrapper = mount(BDropdownDivider)
    expect(wrapper.element.tagName).toBe('LI')
  })

  it('has static attr role to be presentation', () => {
    const wrapper = mount(BDropdownDivider)
    expect(wrapper.attributes('role')).toBe('presentation')
  })

  it('has child hr when not prop hr', () => {
    const wrapper = mount(BDropdownDivider)
    const $hr = wrapper.find('hr')
    expect($hr.exists()).toBe(true)
  })

  it('has child hr is prop tag', () => {
    const wrapper = mount(BDropdownDivider, {
      props: {tag: 'h4'},
    })
    const $hr = wrapper.find('hr')
    const $h4 = wrapper.find('h4')
    expect($hr.exists()).toBe(false)
    expect($h4.exists()).toBe(true)
  })

  it('child hr has static class dropdown-divider', () => {
    const wrapper = mount(BDropdownDivider)
    const $hr = wrapper.get('hr')
    expect($hr.classes()).toContain('dropdown-divider')
  })

  it('child hr has static attr role to be separator', () => {
    const wrapper = mount(BDropdownDivider)
    const $hr = wrapper.get('hr')
    expect($hr.attributes('role')).toBe('separator')
  })

  it('child hr has static attr aria-orientation to be horizontal', () => {
    const wrapper = mount(BDropdownDivider)
    const $hr = wrapper.get('hr')
    expect($hr.attributes('aria-orientation')).toBe('horizontal')
  })
})
