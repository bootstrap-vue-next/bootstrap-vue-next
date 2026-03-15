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

  it('child hr has class from prop dividerClass', () => {
    const wrapper = mount(BDropdownDivider, {
      props: {dividerClass: 'my-divider'},
    })
    const $hr = wrapper.get('hr')
    expect($hr.classes()).toContain('my-divider')
  })

  it('child hr does not have dividerClass when prop dividerClass is not set', () => {
    const wrapper = mount(BDropdownDivider)
    const $hr = wrapper.get('hr')
    expect($hr.classes()).toEqual(['dropdown-divider'])
  })

  it('li has attrs from prop wrapperAttrs', () => {
    const wrapper = mount(BDropdownDivider, {
      props: {wrapperAttrs: {id: 'my-wrapper'}},
    })
    expect(wrapper.attributes('id')).toBe('my-wrapper')
  })

  it('li has class from inherited class attr', () => {
    const wrapper = mount(BDropdownDivider, {
      attrs: {class: 'my-class'},
    })
    expect(wrapper.classes()).toContain('my-class')
  })

  it('child hr receives non-class inherited attrs', () => {
    const wrapper = mount(BDropdownDivider, {
      attrs: {'data-foo': 'bar'},
    })
    const $hr = wrapper.get('hr')
    expect($hr.attributes('data-foo')).toBe('bar')
  })

  it('child hr does not receive class from inherited attrs', () => {
    const wrapper = mount(BDropdownDivider, {
      attrs: {class: 'my-class'},
    })
    const $hr = wrapper.get('hr')
    expect($hr.classes()).not.toContain('my-class')
  })
})
