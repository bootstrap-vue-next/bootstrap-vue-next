import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardHeader from './BCardHeader.vue'
import BCardHeadFoot from './BCardHeadFoot.vue'

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

  it('gives prop html to child', () => {
    const wrapper = mount(BCardHeader, {
      props: {html: 'danger'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('html')).toBe('danger')
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

  it('renders default slot', () => {
    const wrapper = mount(BCardHeader, {
      slots: {default: 'foobar'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.text()).toBe('foobar')
  })
})
