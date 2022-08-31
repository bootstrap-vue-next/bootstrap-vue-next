import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardTitle from './BCardTitle.vue'

describe('card-title', () => {
  enableAutoUnmount(afterEach)

  it('tag is h4 by default', () => {
    const wrapper = mount(BCardTitle)
    expect(wrapper.element.tagName).toBe('H4')
  })

  it('has static class card-title', () => {
    const wrapper = mount(BCardTitle)
    expect(wrapper.classes()).toContain('card-title')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BCardTitle, {
      props: {tag: 'div'},
    })
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders default slot', () => {
    const wrapper = mount(BCardTitle, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders prop text', () => {
    const wrapper = mount(BCardTitle, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders default slot over prop text', () => {
    const wrapper = mount(BCardTitle, {
      props: {text: 'props'},
      slots: {default: 'slots'},
    })
    expect(wrapper.text()).toBe('slots')
  })
})
