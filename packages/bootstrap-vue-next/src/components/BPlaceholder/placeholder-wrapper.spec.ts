import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BPlaceholderWrapper from './BPlaceholderWrapper.vue'

describe('placeholder-wrapper', () => {
  enableAutoUnmount(afterEach)

  it('renders slot default by default', () => {
    const wrapper = mount(BPlaceholderWrapper, {
      slots: {default: 'default', loading: 'loading'},
    })
    expect(wrapper.text()).toBe('default')
  })

  it('renders slot default when prop loading false', () => {
    const wrapper = mount(BPlaceholderWrapper, {
      props: {loading: false},
      slots: {default: 'default', loading: 'loading'},
    })
    expect(wrapper.text()).toBe('default')
  })

  it('renders slot loading when prop loading true', () => {
    const wrapper = mount(BPlaceholderWrapper, {
      props: {loading: true},
      slots: {default: 'default', loading: 'loading'},
    })
    expect(wrapper.text()).toBe('loading')
  })
})
