import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardSubtitle from './BCardSubtitle.vue'

describe('card-subtitle', () => {
  enableAutoUnmount(afterEach)

  it('tag is h6 by default', () => {
    const wrapper = mount(BCardSubtitle)
    expect(wrapper.element.tagName).toBe('H6')
  })

  it('has static class card-subtitle', () => {
    const wrapper = mount(BCardSubtitle)
    expect(wrapper.classes()).toContain('card-subtitle')
  })

  it('has static class mb-2', () => {
    const wrapper = mount(BCardSubtitle)
    expect(wrapper.classes()).toContain('mb-2')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BCardSubtitle, {
      props: {tag: 'div'},
    })
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag prop is reactive', async () => {
    const wrapper = mount(BCardSubtitle, {
      props: {tag: 'h6'},
    })
    expect(wrapper.element.tagName).toBe('H6')
    await wrapper.setProps({tag: 'span'})
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('renders default slot', () => {
    const wrapper = mount(BCardSubtitle, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders HTML content in default slot', () => {
    const wrapper = mount(BCardSubtitle, {
      slots: {default: '<span>foobar</span>'},
    })
    const $span = wrapper.find('span')
    expect($span.exists()).toBe(true)
    expect($span.text()).toBe('foobar')
  })

  it('renders prop text', () => {
    const wrapper = mount(BCardSubtitle, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('text prop is reactive', async () => {
    const wrapper = mount(BCardSubtitle, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
    await wrapper.setProps({text: 'bazqux'})
    expect(wrapper.text()).toBe('bazqux')
  })

  it('renders default slot over prop text', () => {
    const wrapper = mount(BCardSubtitle, {
      props: {text: 'props'},
      slots: {default: 'slots'},
    })
    expect(wrapper.text()).toBe('slots')
  })

  it('renders empty when no slot and no text prop', () => {
    const wrapper = mount(BCardSubtitle)
    expect(wrapper.text()).toBe('')
  })

  it('has class text-body-secondary by default', () => {
    const wrapper = mount(BCardSubtitle)
    expect(wrapper.classes()).toContain('text-body-secondary')
  })

  it('has class text-{type} when prop textVariant', async () => {
    const wrapper = mount(BCardSubtitle, {
      props: {textVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('text-primary')
    await wrapper.setProps({textVariant: undefined})
    expect(wrapper.classes()).not.toContain('text-primary')
    expect(wrapper.classes()).toContain('text-body-secondary')
  })

  it('does not have text-body-secondary when textVariant is null', () => {
    const wrapper = mount(BCardSubtitle, {
      props: {textVariant: null},
    })
    expect(wrapper.classes()).not.toContain('text-body-secondary')
    expect(wrapper.classes()).not.toContain('text-null')
  })
})
