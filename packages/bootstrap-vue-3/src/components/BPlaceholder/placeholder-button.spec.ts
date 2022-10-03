import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BPlaceholderButton from './BPlaceholderButton.vue'
import BPlaceholder from './BPlaceholder.vue'

describe('placeholder-button', () => {
  enableAutoUnmount(afterEach)

  it('is BPlaceholder', () => {
    const wrapper = mount(BPlaceholderButton)
    const $placeholder = wrapper.findComponent(BPlaceholder)
    expect($placeholder.exists()).toBe(true)
  })

  it('BPlaceholder has class btn', () => {
    const wrapper = mount(BPlaceholderButton)
    const $placeholder = wrapper.getComponent(BPlaceholder)
    expect($placeholder.classes()).toContain('btn')
  })

  it('BPlaceholder has class disabled', () => {
    const wrapper = mount(BPlaceholderButton)
    const $placeholder = wrapper.getComponent(BPlaceholder)
    expect($placeholder.classes()).toContain('disabled')
  })

  it('BPlaceholder has class btn-primary by default', () => {
    const wrapper = mount(BPlaceholderButton)
    const $placeholder = wrapper.getComponent(BPlaceholder)
    expect($placeholder.classes()).toContain('btn-primary')
  })

  it('BPlaceholder has class btn-{type} when prop variant', () => {
    const wrapper = mount(BPlaceholderButton, {
      props: {variant: 'danger'},
    })
    const $placeholder = wrapper.getComponent(BPlaceholder)
    expect($placeholder.classes()).toContain('btn-danger')
  })

  it('BPlaceholder has prop tag to be div by default', () => {
    const wrapper = mount(BPlaceholderButton)
    const $placeholder = wrapper.getComponent(BPlaceholder)
    expect($placeholder.props('tag')).toBe('div')
  })

  it('BPlaceholder has prop tag to be prop tag', () => {
    const wrapper = mount(BPlaceholderButton, {
      props: {tag: 'span'},
    })
    const $placeholder = wrapper.getComponent(BPlaceholder)
    expect($placeholder.props('tag')).toBe('span')
  })

  it('BPlaceholder has prop width to be div by default', () => {
    const wrapper = mount(BPlaceholderButton)
    const $placeholder = wrapper.getComponent(BPlaceholder)
    expect($placeholder.props('width')).toBeUndefined()
  })

  it('BPlaceholder has prop width to be prop width', () => {
    const wrapper = mount(BPlaceholderButton, {
      props: {width: 1000},
    })
    const $placeholder = wrapper.getComponent(BPlaceholder)
    expect($placeholder.props('width')).toBe(1000)
  })

  it('BPlaceholder has prop cols to be div by default', () => {
    const wrapper = mount(BPlaceholderButton)
    const $placeholder = wrapper.getComponent(BPlaceholder)
    expect($placeholder.props('cols')).toBeUndefined()
  })

  it('BPlaceholder has prop cols to be prop cols', () => {
    const wrapper = mount(BPlaceholderButton, {
      props: {cols: 6},
    })
    const $placeholder = wrapper.getComponent(BPlaceholder)
    expect($placeholder.props('cols')).toBe(6)
  })

  it('BPlaceholder has prop animation to be div by default', () => {
    const wrapper = mount(BPlaceholderButton)
    const $placeholder = wrapper.getComponent(BPlaceholder)
    expect($placeholder.props('animation')).toBeUndefined()
  })

  it('BPlaceholder has prop animation to be prop animation', () => {
    const wrapper = mount(BPlaceholderButton, {
      props: {animation: 'glow'},
    })
    const $placeholder = wrapper.getComponent(BPlaceholder)
    expect($placeholder.props('animation')).toBe('glow')
  })
})
