import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardSubtitle from './BCardSubtitle.vue'

describe('card-subtitle', () => {
  enableAutoUnmount(afterEach)

  it('tag is h4 by default', () => {
    const wrapper = mount(BCardSubtitle)
    expect(wrapper.element.tagName).toBe('H6')
  })

  it('has static class card-text', () => {
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

  it('renders default slot', () => {
    const wrapper = mount(BCardSubtitle, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders prop text', () => {
    const wrapper = mount(BCardSubtitle, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders default slot over prop text', () => {
    const wrapper = mount(BCardSubtitle, {
      props: {text: 'props'},
      slots: {default: 'slots'},
    })
    expect(wrapper.text()).toBe('slots')
  })

  it('has class text-{type} when prop textVariant', async () => {
    const wrapper = mount(BCardSubtitle, {
      props: {textVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('text-primary')
    await wrapper.setProps({textVariant: undefined})
    expect(wrapper.classes()).not.toContain('text-primary')
    expect(wrapper.classes()).toContain('text-muted')
  })
})
