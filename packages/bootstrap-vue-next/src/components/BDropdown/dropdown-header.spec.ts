import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BDropdownHeader from './BDropdownHeader.vue'

describe('dropdown-header', () => {
  enableAutoUnmount(afterEach)

  it('tag is li', () => {
    const wrapper = mount(BDropdownHeader)
    expect(wrapper.element.tagName).toBe('LI')
  })

  it('has static attr role to be presentation', () => {
    const wrapper = mount(BDropdownHeader)
    expect(wrapper.attributes('role')).toBe('presentation')
  })

  it('has child h6', () => {
    const wrapper = mount(BDropdownHeader)
    const $h6 = wrapper.find('h6')
    expect($h6.exists()).toBe(true)
  })

  it('child tag is h6 by default', () => {
    const wrapper = mount(BDropdownHeader)
    expect(wrapper.find('h6').exists()).toBe(true)
  })

  it('child tag is changed by prop tag', () => {
    const wrapper = mount(BDropdownHeader, {
      props: {tag: 'h4'},
    })
    expect(wrapper.find('h4').exists()).toBe(true)
    expect(wrapper.find('h6').exists()).toBe(false)
  })

  it('child h6 has static class dropdown-header', () => {
    const wrapper = mount(BDropdownHeader)
    const $h6 = wrapper.get('h6')
    expect($h6.classes()).toContain('dropdown-header')
  })

  it('child element has class from prop headerClass', () => {
    const wrapper = mount(BDropdownHeader, {
      props: {headerClass: 'my-header-class'},
    })
    const $h6 = wrapper.get('h6')
    expect($h6.classes()).toContain('my-header-class')
  })

  it('child element has class text-{variant} when prop variant is set', () => {
    const wrapper = mount(BDropdownHeader, {
      props: {variant: 'danger'},
    })
    const $h6 = wrapper.get('h6')
    expect($h6.classes()).toContain('text-danger')
  })

  it('child h6 renders default slot', () => {
    const wrapper = mount(BDropdownHeader, {
      slots: {default: 'foobar'},
    })
    const $h6 = wrapper.get('h6')
    expect($h6.text()).toBe('foobar')
  })

  it('renders prop text', () => {
    const wrapper = mount(BDropdownHeader, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders default slot over prop text', () => {
    const wrapper = mount(BDropdownHeader, {
      slots: {default: 'slots'},
      props: {text: 'props'},
    })
    expect(wrapper.text()).toBe('slots')
  })

  it('li receives class from attrs', () => {
    const wrapper = mount(BDropdownHeader, {
      attrs: {class: 'wrapper-class'},
    })
    expect(wrapper.classes()).toContain('wrapper-class')
  })

  it('child element receives non-class attrs', () => {
    const wrapper = mount(BDropdownHeader, {
      attrs: {'data-foo': 'bar'},
    })
    const $h6 = wrapper.get('h6')
    expect($h6.attributes('data-foo')).toBe('bar')
  })

  it('child element does not receive class from attrs', () => {
    const wrapper = mount(BDropdownHeader, {
      attrs: {class: 'wrapper-class'},
    })
    const $h6 = wrapper.get('h6')
    expect($h6.classes()).not.toContain('wrapper-class')
  })

  it('li receives wrapperAttrs', () => {
    const wrapper = mount(BDropdownHeader, {
      props: {wrapperAttrs: {'data-foo': 'bar'}},
    })
    expect(wrapper.attributes('data-foo')).toBe('bar')
  })
})
