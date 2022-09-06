import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BFormInvalidFeedback from './BFormInvalidFeedback.vue'

describe('form-invalid-feedback', () => {
  enableAutoUnmount(afterEach)

  it('tag is div by default', () => {
    const wrapper = mount(BFormInvalidFeedback)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has class invalid-feedback when not prop tooltip', async () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {tooltip: false},
    })
    expect(wrapper.classes()).toContain('invalid-feedback')
    await wrapper.setProps({tooltip: true})
    expect(wrapper.classes()).not.toContain('invalid-feedback')
  })

  it('has class invalid-tooltip when prop tooltip', async () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {tooltip: true},
    })
    expect(wrapper.classes()).toContain('invalid-tooltip')
    await wrapper.setProps({tooltip: false})
    expect(wrapper.classes()).not.toContain('invalid-tooltip')
  })

  it('has class d-block when prop forceShow', async () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {forceShow: true},
    })
    expect(wrapper.classes()).toContain('d-block')
    await wrapper.setProps({forceShow: false})
    expect(wrapper.classes()).not.toContain('d-block')
  })

  it('has class d-block when not prop state', async () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {state: false},
    })
    expect(wrapper.classes()).toContain('d-block')
    await wrapper.setProps({state: true})
    expect(wrapper.classes()).not.toContain('d-block')
  })

  it('has attr id when prop id', async () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {id: 'foobar'},
    })
    expect(wrapper.attributes('id')).toBe('foobar')
    await wrapper.setProps({id: undefined})
    expect(wrapper.attributes('id')).toBeUndefined()
  })

  it('has attr id when prop role', async () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {role: 'foobar'},
    })
    expect(wrapper.attributes('role')).toBe('foobar')
    await wrapper.setProps({role: undefined})
    expect(wrapper.attributes('role')).toBeUndefined()
  })

  it('has attr aria-live when prop aria-live', async () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {ariaLive: 'true'},
    })
    expect(wrapper.attributes('aria-live')).toBe('true')
    await wrapper.setProps({ariaLive: undefined})
    expect(wrapper.attributes('aria-live')).toBeUndefined()
  })

  it('has attr aria-atomic when prop aria-live', async () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {ariaLive: 'true'},
    })
    expect(wrapper.attributes('aria-atomic')).toBe('true')
    await wrapper.setProps({ariaLive: undefined})
    expect(wrapper.attributes('aria-atomic')).toBeUndefined()
  })

  it('renders default slot', () => {
    const wrapper = mount(BFormInvalidFeedback, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders prop text', () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders default slot', () => {
    const wrapper = mount(BFormInvalidFeedback, {
      slots: {default: 'slots'},
      props: {text: 'props'},
    })
    expect(wrapper.text()).toBe('slots')
  })
})
