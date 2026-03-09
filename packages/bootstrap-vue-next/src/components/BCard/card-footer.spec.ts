import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardFooter from './BCardFooter.vue'
import BCardHeadFoot from '../BCardHeadFoot.vue'

describe('card-footer', () => {
  enableAutoUnmount(afterEach)

  it('has static class card-footer', () => {
    const wrapper = mount(BCardFooter)
    expect(wrapper.classes()).toContain('card-footer')
  })

  it('has child of BCardHeadFoot', () => {
    const wrapper = mount(BCardFooter)
    const $headfoot = wrapper.findComponent(BCardHeadFoot)
    expect($headfoot.exists()).toBe(true)
  })

  it('tag is div by default', () => {
    const wrapper = mount(BCardFooter)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BCardFooter, {
      props: {tag: 'footer'},
    })
    expect(wrapper.element.tagName).toBe('FOOTER')
  })

  it('gives prop text to child', () => {
    const wrapper = mount(BCardFooter, {
      props: {text: 'foobar'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('text')).toBe('foobar')
  })

  it('renders prop text', () => {
    const wrapper = mount(BCardFooter, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('gives prop bgVariant to child', () => {
    const wrapper = mount(BCardFooter, {
      props: {bgVariant: 'danger'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('bgVariant')).toBe('danger')
  })

  it('gives prop borderVariant to child', () => {
    const wrapper = mount(BCardFooter, {
      props: {borderVariant: 'danger'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('borderVariant')).toBe('danger')
  })

  it('gives prop tag to child', () => {
    const wrapper = mount(BCardFooter, {
      props: {tag: 'span'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('tag')).toBe('span')
  })

  it('gives prop textVariant to child', () => {
    const wrapper = mount(BCardFooter, {
      props: {textVariant: 'danger'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('textVariant')).toBe('danger')
  })

  it('gives prop variant to child', () => {
    const wrapper = mount(BCardFooter, {
      props: {variant: 'primary'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('variant')).toBe('primary')
  })

  it('has class text-bg-{type} when prop variant', async () => {
    const wrapper = mount(BCardFooter, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('text-bg-primary')
    await wrapper.setProps({variant: undefined})
    expect(wrapper.classes()).not.toContain('text-bg-primary')
  })

  it('has class text-{type} when prop textVariant', async () => {
    const wrapper = mount(BCardFooter, {
      props: {textVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('text-primary')
    await wrapper.setProps({textVariant: undefined})
    expect(wrapper.classes()).not.toContain('text-primary')
  })

  it('has class bg-{type} when prop bgVariant', async () => {
    const wrapper = mount(BCardFooter, {
      props: {bgVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('bg-primary')
    await wrapper.setProps({bgVariant: undefined})
    expect(wrapper.classes()).not.toContain('bg-primary')
  })

  it('has class border-{type} when prop borderVariant', async () => {
    const wrapper = mount(BCardFooter, {
      props: {borderVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('border-primary')
    await wrapper.setProps({borderVariant: undefined})
    expect(wrapper.classes()).not.toContain('border-primary')
  })

  it('renders default slot', () => {
    const wrapper = mount(BCardFooter, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders default slot over prop text', () => {
    const wrapper = mount(BCardFooter, {
      props: {text: 'props'},
      slots: {default: 'slots'},
    })
    expect(wrapper.text()).toBe('slots')
  })
})
