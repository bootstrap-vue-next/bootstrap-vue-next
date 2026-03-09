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

  it('child tag is span by default', () => {
    const wrapper = mount(BDropdownText)
    const $span = wrapper.find('span')
    expect($span.exists()).toBe(true)
  })

  it('child tag is changed by prop tag', () => {
    const wrapper = mount(BDropdownText, {
      props: {tag: 'p'},
    })
    const $p = wrapper.find('p')
    expect($p.exists()).toBe(true)
    const $span = wrapper.find('span')
    expect($span.exists()).toBe(false)
  })

  it('child element has class of prop textClass', () => {
    const wrapper = mount(BDropdownText, {
      props: {textClass: 'foobar'},
    })
    const $span = wrapper.get('span')
    expect($span.classes()).toContain('foobar')
  })

  it('child element has class text-{variant} when prop variant is set', async () => {
    const wrapper = mount(BDropdownText, {
      props: {variant: 'danger'},
    })
    const $span = wrapper.get('span')
    expect($span.classes()).toContain('text-danger')
    await wrapper.setProps({variant: undefined})
    expect($span.classes()).not.toContain('text-danger')
  })

  it('li has attrs from prop wrapperAttrs', () => {
    const wrapper = mount(BDropdownText, {
      props: {wrapperAttrs: {'data-foo': 'bar'}},
    })
    expect(wrapper.attributes('data-foo')).toBe('bar')
  })

  it('li receives class from attrs', () => {
    const wrapper = mount(BDropdownText, {
      attrs: {class: 'wrapper-class'},
    })
    expect(wrapper.classes()).toContain('wrapper-class')
  })

  it('child element receives non-class attrs', () => {
    const wrapper = mount(BDropdownText, {
      attrs: {'data-foo': 'bar'},
    })
    const $span = wrapper.get('span')
    expect($span.attributes('data-foo')).toBe('bar')
  })

  it('child element does not receive class from attrs', () => {
    const wrapper = mount(BDropdownText, {
      attrs: {class: 'wrapper-class'},
    })
    const $span = wrapper.get('span')
    expect($span.classes()).not.toContain('wrapper-class')
  })
})
