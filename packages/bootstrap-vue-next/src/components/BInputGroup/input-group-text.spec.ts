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

  it('tag is reactive', async () => {
    const wrapper = mount(BInputGroupText)
    expect(wrapper.element.tagName).toBe('DIV')
    await wrapper.setProps({tag: 'span'})
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('text prop is reactive', async () => {
    const wrapper = mount(BInputGroupText, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
    await wrapper.setProps({text: 'baz'})
    expect(wrapper.text()).toBe('baz')
  })

  it('renders HTML content in slot', () => {
    const wrapper = mount(BInputGroupText, {
      slots: {default: '<strong>bold</strong>'},
    })
    expect(wrapper.find('strong').exists()).toBe(true)
    expect(wrapper.find('strong').text()).toBe('bold')
  })

  it('renders nothing when no text or slot provided', () => {
    const wrapper = mount(BInputGroupText)
    expect(wrapper.text()).toBe('')
  })
})
