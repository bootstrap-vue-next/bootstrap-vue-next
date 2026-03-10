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

  it('default should contain only single class of card-title', () => {
    const wrapper = mount(BCardTitle)
    expect(wrapper.classes().length).toBe(1)
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

  it('renders default slot with HTML content', () => {
    const wrapper = mount(BCardTitle, {
      slots: {default: '<span class="custom">title content</span>'},
    })
    const $span = wrapper.find('span.custom')
    expect($span.exists()).toBe(true)
    expect($span.text()).toBe('title content')
  })

  it('renders prop text', () => {
    const wrapper = mount(BCardTitle, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders empty when no text prop and no slot provided', () => {
    const wrapper = mount(BCardTitle)
    expect(wrapper.text()).toBe('')
  })

  it('renders default slot over prop text', () => {
    const wrapper = mount(BCardTitle, {
      props: {text: 'props'},
      slots: {default: 'slots'},
    })
    expect(wrapper.text()).toBe('slots')
  })
})
