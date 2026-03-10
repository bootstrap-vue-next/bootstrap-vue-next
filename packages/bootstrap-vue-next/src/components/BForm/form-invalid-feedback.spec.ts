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

  it('tag changes reactively', async () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {tag: 'div'},
    })
    expect(wrapper.element.tagName).toBe('DIV')
    await wrapper.setProps({tag: 'span'})
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has static class invalid-feedback by default', () => {
    const wrapper = mount(BFormInvalidFeedback)
    expect(wrapper.classes()).toContain('invalid-feedback')
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

  it('does not have both invalid-feedback and invalid-tooltip at the same time', async () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {tooltip: false},
    })
    expect(wrapper.classes()).toContain('invalid-feedback')
    expect(wrapper.classes()).not.toContain('invalid-tooltip')
    await wrapper.setProps({tooltip: true})
    expect(wrapper.classes()).not.toContain('invalid-feedback')
    expect(wrapper.classes()).toContain('invalid-tooltip')
  })

  it('does not have class d-block by default', () => {
    const wrapper = mount(BFormInvalidFeedback)
    expect(wrapper.classes()).not.toContain('d-block')
  })

  it('does not have class d-block when state is null', () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {state: null},
    })
    expect(wrapper.classes()).not.toContain('d-block')
  })

  it('does not have class d-block when state is true', () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {state: true},
    })
    expect(wrapper.classes()).not.toContain('d-block')
  })

  it('has class d-block when prop forceShow is true', async () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {forceShow: true},
    })
    expect(wrapper.classes()).toContain('d-block')
    await wrapper.setProps({forceShow: false})
    expect(wrapper.classes()).not.toContain('d-block')
  })

  it('has class d-block when prop state is false', async () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {state: false},
    })
    expect(wrapper.classes()).toContain('d-block')
    await wrapper.setProps({state: true})
    expect(wrapper.classes()).not.toContain('d-block')
  })

  it('has class d-block when forceShow is true even if state is true', () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {forceShow: true, state: true},
    })
    expect(wrapper.classes()).toContain('d-block')
  })

  it('has class d-block when forceShow is true even if state is null', () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {forceShow: true, state: null},
    })
    expect(wrapper.classes()).toContain('d-block')
  })

  it('has attr id when prop id', async () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {id: 'foobar'},
    })
    expect(wrapper.attributes('id')).toBe('foobar')
    await wrapper.setProps({id: undefined})
    expect(wrapper.attributes('id')).toBeUndefined()
  })

  it('has attr role when prop role', async () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {role: 'foobar'},
    })
    expect(wrapper.attributes('role')).toBe('foobar')
    await wrapper.setProps({role: undefined})
    expect(wrapper.attributes('role')).toBeUndefined()
  })

  it('has attr aria-live when prop ariaLive', async () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {ariaLive: 'polite'},
    })
    expect(wrapper.attributes('aria-live')).toBe('polite')
    await wrapper.setProps({ariaLive: undefined})
    expect(wrapper.attributes('aria-live')).toBeUndefined()
  })

  it('has attr aria-atomic when prop ariaLive is set', async () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {ariaLive: 'assertive'},
    })
    expect(wrapper.attributes('aria-atomic')).toBe('true')
    await wrapper.setProps({ariaLive: undefined})
    expect(wrapper.attributes('aria-atomic')).toBeUndefined()
  })

  it('does not have attr aria-atomic when prop ariaLive is not set', () => {
    const wrapper = mount(BFormInvalidFeedback)
    expect(wrapper.attributes('aria-atomic')).toBeUndefined()
  })

  it('renders default slot', () => {
    const wrapper = mount(BFormInvalidFeedback, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders HTML in default slot', () => {
    const wrapper = mount(BFormInvalidFeedback, {
      slots: {default: '<span>foobar</span>'},
    })
    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders prop text', () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('prop text changes reactively', async () => {
    const wrapper = mount(BFormInvalidFeedback, {
      props: {text: 'foo'},
    })
    expect(wrapper.text()).toBe('foo')
    await wrapper.setProps({text: 'bar'})
    expect(wrapper.text()).toBe('bar')
  })

  it('renders default slot over prop text', () => {
    const wrapper = mount(BFormInvalidFeedback, {
      slots: {default: 'slots'},
      props: {text: 'props'},
    })
    expect(wrapper.text()).toBe('slots')
  })
})
