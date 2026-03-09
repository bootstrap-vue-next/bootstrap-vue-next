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
      props: {gutterX: '5'},
    })
    expect(wrapper.classes()).toContain('gx-5')
    await wrapper.setProps({gutterX: undefined})
    expect(wrapper.classes()).not.toContain('gx-5')
  })

  it('has class gy-{type} when prop gutterY', async () => {
    const wrapper = mount(BContainer, {
      props: {gutterY: '5'},
    })
    expect(wrapper.classes()).toContain('gy-5')
    await wrapper.setProps({gutterY: undefined})
    expect(wrapper.classes()).not.toContain('gy-5')
  })

  it('has class container by default', () => {
    const wrapper = mount(BContainer)
    expect(wrapper.classes()).toContain('container')
  })

  it('does not have container-fluid class by default', () => {
    const wrapper = mount(BContainer)
    expect(wrapper.classes()).not.toContain('container-fluid')
  })

  it('has class container-sm when prop fluid is sm', () => {
    const wrapper = mount(BContainer, {
      props: {fluid: 'sm'},
    })
    expect(wrapper.classes()).toContain('container-sm')
    expect(wrapper.classes()).not.toContain('container')
  })

  it('has class container-md when prop fluid is md', () => {
    const wrapper = mount(BContainer, {
      props: {fluid: 'md'},
    })
    expect(wrapper.classes()).toContain('container-md')
  })

  it('has class container-lg when prop fluid is lg', () => {
    const wrapper = mount(BContainer, {
      props: {fluid: 'lg'},
    })
    expect(wrapper.classes()).toContain('container-lg')
  })

  it('has class container-xl when prop fluid is xl', () => {
    const wrapper = mount(BContainer, {
      props: {fluid: 'xl'},
    })
    expect(wrapper.classes()).toContain('container-xl')
  })

  it('combines gutterX and gutterY classes', () => {
    const wrapper = mount(BContainer, {
      props: {gutterX: '3', gutterY: '4'},
    })
    expect(wrapper.classes()).toContain('gx-3')
    expect(wrapper.classes()).toContain('gy-4')
  })

  it('renders slot content with HTML', () => {
    const wrapper = mount(BContainer, {
      slots: {default: '<span class="test-child">content</span>'},
    })
    expect(wrapper.find('.test-child').exists()).toBe(true)
    expect(wrapper.find('.test-child').text()).toBe('content')
  })

  it('tag can be set to section', () => {
    const wrapper = mount(BContainer, {
      props: {tag: 'section'},
    })
    expect(wrapper.element.tagName).toBe('SECTION')
  })
})
