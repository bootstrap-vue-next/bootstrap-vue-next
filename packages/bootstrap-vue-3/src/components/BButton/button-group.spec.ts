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

  it('has attr aria-label as prop ariaLabel', async () => {
    const wrapper = mount(BButtonGroup, {
      props: {ariaLabel: 'foobar'},
    })
    expect(wrapper.attributes('aria-label')).toBe('foobar')
    await wrapper.setProps({ariaLabel: undefined})
    expect(wrapper.attributes('aria-label')).toBe('Group')
  })

  it('renders default slot', () => {
    const wrapper = mount(BButtonGroup, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('has class btn-group-vertical prop vertical', () => {
    const wrapper = mount(BButtonGroup, {
      props: {vertical: true},
    })
    expect(wrapper.classes()).toContain('btn-group-vertical')
  })

  it('has class btn-group when not prop vertical', () => {
    const wrapper = mount(BButtonGroup)
    expect(wrapper.classes()).toContain('btn-group')
  })

  it('has class btn-group-{type} prop size', async () => {
    const wrapper = mount(BButtonGroup, {
      props: {size: 'sm'},
    })
    expect(wrapper.classes()).toContain('btn-group-sm')
    await wrapper.setProps({size: undefined})
    expect(wrapper.classes()).not.toContain('btn-group-sm')
  })

  it('has class btn-group when prop size is undefined', () => {
    const wrapper = mount(BButtonGroup, {props: {size: undefined}})
    expect(wrapper.classes()).toContain('btn-group')
  })
})
