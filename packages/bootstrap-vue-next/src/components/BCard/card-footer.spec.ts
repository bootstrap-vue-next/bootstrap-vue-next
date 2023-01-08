import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardFooter from './BCardFooter.vue'
import BCardHeadFoot from './BCardHeadFoot.vue'

describe('card-header', () => {
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

  it('gives prop text to child', () => {
    const wrapper = mount(BCardFooter, {
      props: {text: 'foobar'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('text')).toBe('foobar')
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

  it('gives prop html to child', () => {
    const wrapper = mount(BCardFooter, {
      props: {html: 'danger'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('html')).toBe('danger')
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

  it('renders default slot', () => {
    const wrapper = mount(BCardFooter, {
      slots: {default: 'foobar'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.text()).toBe('foobar')
  })
})
