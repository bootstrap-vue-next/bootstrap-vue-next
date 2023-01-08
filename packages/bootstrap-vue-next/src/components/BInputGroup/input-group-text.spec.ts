import {enableAutoUnmount, mount} from '@vue/test-utils'
import BInputGroupText from './BInputGroupText.vue'
import {afterEach, describe, expect, it} from 'vitest'

describe('input-group-text', () => {
  enableAutoUnmount(afterEach)

  it('tag is div by default', () => {
    const wrapper = mount(BInputGroupText)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BInputGroupText, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has static class input-group-text', () => {
    const wrapper = mount(BInputGroupText)
    expect(wrapper.classes()).toContain('input-group-text')
  })

  it('renders default slot', () => {
    const wrapper = mount(BInputGroupText, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders prop text', () => {
    const wrapper = mount(BInputGroupText, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders default slot over prop text', () => {
    const wrapper = mount(BInputGroupText, {
      slots: {default: 'slots'},
      props: {text: 'props'},
    })
    expect(wrapper.text()).toBe('slots')
  })
})
