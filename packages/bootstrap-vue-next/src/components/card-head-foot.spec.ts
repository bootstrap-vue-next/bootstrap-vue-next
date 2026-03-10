import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardHeadFoot from './BCardHeadFoot.vue'

describe('card-head-foot', () => {
  enableAutoUnmount(afterEach)

  it('tag is div by default', () => {
    const wrapper = mount(BCardHeadFoot)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BCardHeadFoot, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('tag reacts to prop changes', async () => {
    const wrapper = mount(BCardHeadFoot, {
      props: {tag: 'div'},
    })
    expect(wrapper.element.tagName).toBe('DIV')
    await wrapper.setProps({tag: 'section'})
    expect(wrapper.element.tagName).toBe('SECTION')
  })

  it('has class text-bg-{type} when prop variant', async () => {
    const wrapper = mount(BCardHeadFoot, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('text-bg-primary')
    await wrapper.setProps({variant: 'danger'})
    expect(wrapper.classes()).toContain('text-bg-danger')
    expect(wrapper.classes()).not.toContain('text-bg-primary')
    await wrapper.setProps({variant: undefined})
    expect(wrapper.classes()).not.toContain('text-bg-danger')
  })

  it('has class text-{type} when prop textVariant', async () => {
    const wrapper = mount(BCardHeadFoot, {
      props: {textVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('text-primary')
    await wrapper.setProps({textVariant: 'danger'})
    expect(wrapper.classes()).toContain('text-danger')
    expect(wrapper.classes()).not.toContain('text-primary')
    await wrapper.setProps({textVariant: undefined})
    expect(wrapper.classes()).not.toContain('text-danger')
  })

  it('has class bg-{type} when prop bgVariant', async () => {
    const wrapper = mount(BCardHeadFoot, {
      props: {bgVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('bg-primary')
    await wrapper.setProps({bgVariant: 'danger'})
    expect(wrapper.classes()).toContain('bg-danger')
    expect(wrapper.classes()).not.toContain('bg-primary')
    await wrapper.setProps({bgVariant: undefined})
    expect(wrapper.classes()).not.toContain('bg-danger')
  })

  it('has class border-{type} when prop borderVariant', async () => {
    const wrapper = mount(BCardHeadFoot, {
      props: {borderVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('border-primary')
    await wrapper.setProps({borderVariant: 'danger'})
    expect(wrapper.classes()).toContain('border-danger')
    expect(wrapper.classes()).not.toContain('border-primary')
    await wrapper.setProps({borderVariant: undefined})
    expect(wrapper.classes()).not.toContain('border-danger')
  })

  it('all variant classes can coexist', () => {
    const wrapper = mount(BCardHeadFoot, {
      props: {
        variant: 'primary',
        textVariant: 'danger',
        bgVariant: 'success',
        borderVariant: 'warning',
      },
    })
    expect(wrapper.classes()).toContain('text-bg-primary')
    expect(wrapper.classes()).toContain('text-danger')
    expect(wrapper.classes()).toContain('bg-success')
    expect(wrapper.classes()).toContain('border-warning')
  })

  it('renders default slot', () => {
    const wrapper = mount(BCardHeadFoot, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders default slot with HTML content', () => {
    const wrapper = mount(BCardHeadFoot, {
      slots: {default: '<span class="custom">head foot content</span>'},
    })
    const $span = wrapper.find('.custom')
    expect($span.exists()).toBe(true)
    expect($span.text()).toBe('head foot content')
  })

  it('renders prop text', () => {
    const wrapper = mount(BCardHeadFoot, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders prop text reactively', async () => {
    const wrapper = mount(BCardHeadFoot, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
    await wrapper.setProps({text: 'changed'})
    expect(wrapper.text()).toBe('changed')
  })

  it('renders default slot over prop text', () => {
    const wrapper = mount(BCardHeadFoot, {
      props: {text: 'props'},
      slots: {default: 'slots'},
    })
    expect(wrapper.text()).toBe('slots')
  })

  it('renders empty when no text or slot', () => {
    const wrapper = mount(BCardHeadFoot)
    expect(wrapper.text()).toBe('')
  })
})
