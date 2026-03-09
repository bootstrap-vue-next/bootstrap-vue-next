import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardHeader from './BCardHeader.vue'
import BCardHeadFoot from '../BCardHeadFoot.vue'

describe('card-header', () => {
  enableAutoUnmount(afterEach)

  it('has static class card-header', () => {
    const wrapper = mount(BCardHeader)
    expect(wrapper.classes()).toContain('card-header')
  })

  it('has child of BCardHeadFoot', () => {
    const wrapper = mount(BCardHeader)
    const $headfoot = wrapper.findComponent(BCardHeadFoot)
    expect($headfoot.exists()).toBe(true)
  })

  it('tag is div by default', () => {
    const wrapper = mount(BCardHeader)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BCardHeader, {
      props: {tag: 'header'},
    })
    expect(wrapper.element.tagName).toBe('HEADER')
  })

  it('gives prop text to child', () => {
    const wrapper = mount(BCardHeader, {
      props: {text: 'foobar'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('text')).toBe('foobar')
  })

  it('gives prop bgVariant to child', () => {
    const wrapper = mount(BCardHeader, {
      props: {bgVariant: 'danger'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('bgVariant')).toBe('danger')
  })

  it('gives prop borderVariant to child', () => {
    const wrapper = mount(BCardHeader, {
      props: {borderVariant: 'danger'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('borderVariant')).toBe('danger')
  })

  it('gives prop tag to child', () => {
    const wrapper = mount(BCardHeader, {
      props: {tag: 'span'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('tag')).toBe('span')
  })

  it('gives prop textVariant to child', () => {
    const wrapper = mount(BCardHeader, {
      props: {textVariant: 'danger'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('textVariant')).toBe('danger')
  })

  it('gives prop variant to child', () => {
    const wrapper = mount(BCardHeader, {
      props: {variant: 'primary'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('variant')).toBe('primary')
  })

  it('renders default slot', () => {
    const wrapper = mount(BCardHeader, {
      slots: {default: 'foobar'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.text()).toBe('foobar')
  })

  it('renders prop text', () => {
    const wrapper = mount(BCardHeader, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders default slot over prop text', () => {
    const wrapper = mount(BCardHeader, {
      props: {text: 'props'},
      slots: {default: 'slots'},
    })
    expect(wrapper.text()).toBe('slots')
  })

  it('has class text-{type} when prop textVariant', async () => {
    const wrapper = mount(BCardHeader, {
      props: {textVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('text-primary')
    await wrapper.setProps({textVariant: undefined})
    expect(wrapper.classes()).not.toContain('text-primary')
  })

  it('has class bg-{type} when prop bgVariant', async () => {
    const wrapper = mount(BCardHeader, {
      props: {bgVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('bg-primary')
    await wrapper.setProps({bgVariant: undefined})
    expect(wrapper.classes()).not.toContain('bg-primary')
  })

  it('has class border-{type} when prop borderVariant', async () => {
    const wrapper = mount(BCardHeader, {
      props: {borderVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('border-primary')
    await wrapper.setProps({borderVariant: undefined})
    expect(wrapper.classes()).not.toContain('border-primary')
  })
})
