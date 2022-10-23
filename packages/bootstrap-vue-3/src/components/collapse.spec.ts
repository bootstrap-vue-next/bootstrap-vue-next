import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCollapse from './BCollapse.vue'

describe('collapse', () => {
  enableAutoUnmount(afterEach)

  it('has static class collapse', () => {
    const wrapper = mount(BCollapse)
    expect(wrapper.classes()).toContain('collapse')
  })

  it('has default tag div', () => {
    const wrapper = mount(BCollapse)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('is tag when prop tag', () => {
    const wrapper = mount(BCollapse, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has default id', () => {
    const wrapper = mount(BCollapse)
    expect(wrapper.attributes('id')).toBeDefined()
  })

  it('has id as prop id', () => {
    const wrapper = mount(BCollapse, {
      props: {id: 'foobar'},
    })
    expect(wrapper.attributes('id')).toBe('foobar')
  })

  it('has data-bs-parent when prop accordion', () => {
    const wrapper = mount(BCollapse, {
      props: {accordion: 'abc'},
    })
    expect(wrapper.attributes('data-bs-parent')).toBe('abc')
  })

  it('has data-bs-parent null when accordion undefined', () => {
    const wrapper = mount(BCollapse)
    expect(wrapper.attributes('data-bs-parent')).toBeUndefined()
  })

  it('has attribute is-nav when prop is nav', async () => {
    const wrapper = mount(BCollapse, {
      props: {isNav: true},
    })
    expect(wrapper.attributes('is-nav')).toBe('true')
    await wrapper.setProps({isNav: false})
    expect(wrapper.attributes('is-nav')).toBe('false')
  })

  it('renders default slot', () => {
    const wrapper = mount(BCollapse, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })
})
