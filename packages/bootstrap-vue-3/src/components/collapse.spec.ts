import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BCollapse from './BCollapse.vue'

describe('collapse', () => {
  it('has static class collapse', () => {
    const wrapper = mount(BCollapse)
    expect(wrapper.classes()).toContain('collapse')

    wrapper.unmount()
  })

  it('has default tag div', () => {
    const wrapper = mount(BCollapse)
    expect(wrapper.element.tagName).toBe('DIV')

    wrapper.unmount()
  })

  it('is tag when prop tag', () => {
    const wrapper = mount(BCollapse, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')

    wrapper.unmount()
  })

  it('has default id', () => {
    const wrapper = mount(BCollapse)
    expect(wrapper.attributes('id')).toBeDefined()

    wrapper.unmount()
  })

  it('has id as prop id', () => {
    const wrapper = mount(BCollapse, {
      props: {id: 'foobar'},
    })
    expect(wrapper.attributes('id')).toBe('foobar')

    wrapper.unmount()
  })

  it('has data-bs-parent when prop accordion', () => {
    const wrapper = mount(BCollapse, {
      props: {accordion: 'abc'},
    })
    expect(wrapper.attributes('data-bs-parent')).toBe('abc')

    wrapper.unmount()
  })

  it('has data-bs-parent null when accordion undefined', () => {
    const wrapper = mount(BCollapse)
    expect(wrapper.attributes('data-bs-parent')).toBeUndefined()

    wrapper.unmount()
  })

  it('has attribute is-nav when prop is nav', async () => {
    const wrapper = mount(BCollapse, {
      props: {isNav: true},
    })
    expect(wrapper.attributes('is-nav')).toBe('true')
    await wrapper.setProps({isNav: false})
    expect(wrapper.attributes('is-nav')).toBe('false')

    wrapper.unmount()
  })

  it('renders default slot', () => {
    const wrapper = mount(BCollapse, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')

    wrapper.unmount()
  })

  // TODO :visible prop on default slot does not seem to have any affect on slot being visible
  // Perhaps it was supposed to be v-if/v-show?
})
