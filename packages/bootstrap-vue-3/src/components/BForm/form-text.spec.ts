import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BFormText from './BFormText.vue'

describe('form-text', () => {
  enableAutoUnmount(afterEach)

  it('tag is small by default', () => {
    const wrapper = mount(BFormText)
    expect(wrapper.element.tagName).toBe('SMALL')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BFormText, {
      props: {tag: 'div'},
    })
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has class form-text when not prop inline', async () => {
    const wrapper = mount(BFormText, {
      props: {inline: false},
    })
    expect(wrapper.classes()).toContain('form-text')
    await wrapper.setProps({inline: true})
    expect(wrapper.classes()).not.toContain('form-text')
  })

  it('has class text-{type} when prop textVariant', async () => {
    const wrapper = mount(BFormText, {
      props: {textVariant: 'danger'},
    })
    expect(wrapper.classes()).toContain('text-danger')
    await wrapper.setProps({textVariant: undefined})
    expect(wrapper.classes()).toContain('text-muted')
  })

  it('has attr id when prop id', async () => {
    const wrapper = mount(BFormText, {
      props: {id: 'foobar'},
    })
    expect(wrapper.attributes('id')).toBe('foobar')
    await wrapper.setProps({id: undefined})
    expect(wrapper.attributes('id')).toBeUndefined()
  })

  it('renders default slot', () => {
    const wrapper = mount(BFormText, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders prop text', () => {
    const wrapper = mount(BFormText, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders default slot over propt ext', () => {
    const wrapper = mount(BFormText, {
      slots: {default: 'slots'},
      props: {text: 'props'},
    })
    expect(wrapper.text()).toBe('slots')
  })
})
