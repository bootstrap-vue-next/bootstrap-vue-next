import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardText from './BCardText.vue'

describe('card-text', () => {
  enableAutoUnmount(afterEach)

  it('tag is p by default', () => {
    const wrapper = mount(BCardText)
    expect(wrapper.element.tagName).toBe('P')
  })

  it('has static class card-text', () => {
    const wrapper = mount(BCardText)
    expect(wrapper.classes()).toContain('card-text')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BCardText, {
      props: {tag: 'div'},
    })
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders default slot', () => {
    const wrapper = mount(BCardText, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders prop text', () => {
    const wrapper = mount(BCardText, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders default slot over prop text', () => {
    const wrapper = mount(BCardText, {
      props: {text: 'props'},
      slots: {default: 'slots'},
    })
    expect(wrapper.text()).toBe('slots')
  })
})
