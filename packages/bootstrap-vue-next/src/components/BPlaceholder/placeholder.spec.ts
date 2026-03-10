import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BPlaceholder from './BPlaceholder.vue'

describe('placeholder', () => {
  enableAutoUnmount(afterEach)

  it('tag is span by default', () => {
    const wrapper = mount(BPlaceholder)
    expect(wrapper.find('.placeholder').element.tagName).toBe('SPAN')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BPlaceholder, {
      props: {tag: 'div'},
    })
    expect(wrapper.find('.placeholder').element.tagName).toBe('DIV')
  })

  it('has static class placeholder', () => {
    const wrapper = mount(BPlaceholder)
    expect(wrapper.find('.placeholder').exists()).toBe(true)
  })

  it('has class col-{type} when prop cols is number', async () => {
    const wrapper = mount(BPlaceholder, {
      props: {cols: 6},
    })
    expect(wrapper.find('.placeholder').classes()).toContain('col-6')
    await wrapper.setProps({cols: undefined})
    expect(wrapper.find('.placeholder').classes()).not.toContain('col-6')
  })

  it('has class col-{type} when prop cols is string', () => {
    const wrapper = mount(BPlaceholder, {
      props: {cols: '6'},
    })
    expect(wrapper.find('.placeholder').classes()).toContain('col-6')
  })

  it('has style width: {type}%; when prop width is number', async () => {
    const wrapper = mount(BPlaceholder, {
      props: {width: 6},
    })
    expect(wrapper.find('.placeholder').attributes('style')).toContain('width: 6%;')
    await wrapper.setProps({width: undefined})
    expect(wrapper.find('.placeholder').attributes('style')).toBeUndefined()
  })

  it('has style width: {type}%; when prop width is string', () => {
    const wrapper = mount(BPlaceholder, {
      props: {width: '6'},
    })
    expect(wrapper.find('.placeholder').attributes('style')).toContain('width: 6%;')
  })

  it('has style width: {type}%; when prop width is string and contains %', () => {
    const wrapper = mount(BPlaceholder, {
      props: {width: '6%'},
    })
    expect(wrapper.find('.placeholder').attributes('style')).toContain('width: 6%;')
  })

  it('has class bg-{type} when prop variant', async () => {
    const wrapper = mount(BPlaceholder, {
      props: {variant: 'info'},
    })
    expect(wrapper.find('.placeholder').classes()).toContain('bg-info')
    await wrapper.setProps({variant: undefined})
    expect(wrapper.find('.placeholder').classes()).not.toContain('bg-info')
  })

  it('has class placeholder-{type} when prop size', async () => {
    const wrapper = mount(BPlaceholder, {
      props: {size: 'lg'},
    })
    expect(wrapper.find('.placeholder').classes()).toContain('placeholder-lg')
    await wrapper.setProps({size: undefined})
    expect(wrapper.find('.placeholder').classes()).not.toContain('placeholder-lg')
  })

  it('has class placeholder-{type} when prop animation', async () => {
    const wrapper = mount(BPlaceholder, {
      props: {animation: 'glow'},
    })
    expect(wrapper.classes()).toContain('placeholder-glow')
    await wrapper.setProps({animation: undefined})
    expect(wrapper.classes()).not.toContain('placeholder-glow')
  })
})
