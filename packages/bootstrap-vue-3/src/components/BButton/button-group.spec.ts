import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BButtonGroup from './BButtonGroup.vue'

describe('button-group', () => {
  enableAutoUnmount(afterEach)

  it('tag is div by default', () => {
    const wrapper = mount(BButtonGroup)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BButtonGroup, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has static attr role as group', () => {
    const wrapper = mount(BButtonGroup)
    expect(wrapper.attributes('role')).toBe('group')
  })

  it('has attr aria-label as prop ariaLabel', () => {
    const wrapper = mount(BButtonGroup, {
      props: {ariaLabel: 'foobar'},
    })
    expect(wrapper.attributes('aria-label')).toBe('foobar')
  })

  it('has attr aria-label to be Group by default', () => {
    const wrapper = mount(BButtonGroup)
    expect(wrapper.attributes('aria-label')).toBe('Group')
  })

  it('renders default slot', () => {
    const wrapper = mount(BButtonGroup, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('has class btn-group when not prop vertical', () => {
    const wrapper = mount(BButtonGroup, {
      props: {vertical: false},
    })
    expect(wrapper.classes()).toContain('btn-group')
  })

  it('does not have class btn-group when prop vertical', () => {
    const wrapper = mount(BButtonGroup, {
      props: {vertical: true},
    })
    expect(wrapper.classes()).not.toContain('btn-group')
  })

  it('has class btn-group-{type} when prop size', () => {
    const wrapper = mount(BButtonGroup, {
      props: {size: 'lg'},
    })
    expect(wrapper.classes()).toContain('btn-group-lg')
  })

  it('does not have class btn-group-{type} when prop size is undefined', () => {
    const wrapper = mount(BButtonGroup, {
      props: {vertical: undefined},
    })
    expect(wrapper.classes()).not.toContain('btn-group-undefined')
  })

  it('does not have class btn-group-vertical when not prop vertical', () => {
    const wrapper = mount(BButtonGroup, {
      props: {vertical: false},
    })
    expect(wrapper.classes()).not.toContain('btn-group-vertical')
  })

  it('has class btn-group-vertical when prop vertical', () => {
    const wrapper = mount(BButtonGroup, {
      props: {vertical: true},
    })
    expect(wrapper.classes()).toContain('btn-group-vertical')
  })
})
