import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BContainer from './BContainer.vue'

describe('container', () => {
  enableAutoUnmount(afterEach)

  it('tag is default div', () => {
    const wrapper = mount(BContainer)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BContainer, {
      props: {tag: 'small'},
    })
    expect(wrapper.element.tagName).toBe('SMALL')
  })

  it('renders default slot', () => {
    const wrapper = mount(BContainer, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('has class container when prop fluid is false', async () => {
    const wrapper = mount(BContainer, {
      props: {fluid: false},
    })
    expect(wrapper.classes()).toContain('container')
    await wrapper.setProps({fluid: true})
    expect(wrapper.classes()).not.toContain('container')
  })

  it('has class container-fluid when prop fluid is true', async () => {
    const wrapper = mount(BContainer, {
      props: {fluid: true},
    })
    expect(wrapper.classes()).toContain('container-fluid')
    await wrapper.setProps({fluid: false})
    expect(wrapper.classes()).not.toContain('container-fluid')
  })

  it('has class container-{type} when prop fluid is string', async () => {
    const wrapper = mount(BContainer, {
      props: {fluid: 'xxl'},
    })
    expect(wrapper.classes()).toContain('container-xxl')
    await wrapper.setProps({fluid: undefined})
    expect(wrapper.classes()).not.toContain('container-xxl')
  })

  it('has class gx-{type} when prop gutterX', async () => {
    const wrapper = mount(BContainer, {
      props: {gutterX: 'xxl'},
    })
    expect(wrapper.classes()).toContain('gx-xxl')
    await wrapper.setProps({gutterX: undefined})
    expect(wrapper.classes()).not.toContain('gx-xxl')
  })

  it('has class gy-{type} when prop gutterY', async () => {
    const wrapper = mount(BContainer, {
      props: {gutterY: 'xxl'},
    })
    expect(wrapper.classes()).toContain('gy-xxl')
    await wrapper.setProps({gutterY: undefined})
    expect(wrapper.classes()).not.toContain('gy-xxl')
  })
})
