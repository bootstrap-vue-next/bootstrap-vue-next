import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCard from './BCard.vue'

describe('card', () => {
  enableAutoUnmount(afterEach)

  it('tag is div by default', () => {
    const wrapper = mount(BCard)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BCard, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has static class card', () => {
    const wrapper = mount(BCard)
    expect(wrapper.classes()).toContain('card')
  })

  it('has class text-{type} when prop align', async () => {
    const wrapper = mount(BCard, {
      props: {align: 'fill'},
    })
    expect(wrapper.classes()).toContain('text-fill')
    await wrapper.setProps({align: undefined})
    expect(wrapper.classes()).not.toContain('text-fill')
  })

  it('has class text-{type} when prop textVariant', async () => {
    const wrapper = mount(BCard, {
      props: {textVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('text-primary')
    await wrapper.setProps({textVariant: undefined})
    expect(wrapper.classes()).not.toContain('text-primary')
  })

  it('has class bg-{type} when prop bgVariant', async () => {
    const wrapper = mount(BCard, {
      props: {bgVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('bg-primary')
    await wrapper.setProps({bgVariant: undefined})
    expect(wrapper.classes()).not.toContain('bg-primary')
  })

  it('has class border-{type} when prop textVariant', async () => {
    const wrapper = mount(BCard, {
      props: {borderVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('border-primary')
    await wrapper.setProps({borderVariant: undefined})
    expect(wrapper.classes()).not.toContain('border-primary')
  })

  it('has class flex-row when prop imgLeft', async () => {
    const wrapper = mount(BCard, {
      props: {imgLeft: true},
    })
    expect(wrapper.classes()).toContain('flex-row')
    await wrapper.setProps({imgLeft: undefined})
    expect(wrapper.classes()).not.toContain('flex-row')
  })

  it('has class flex-row when prop imgStart', async () => {
    const wrapper = mount(BCard, {
      props: {imgStart: true},
    })
    expect(wrapper.classes()).toContain('flex-row')
    await wrapper.setProps({imgStart: undefined})
    expect(wrapper.classes()).not.toContain('flex-row')
  })

  it('has class flex-row-reverse when prop imgEnd', async () => {
    const wrapper = mount(BCard, {
      props: {imgEnd: true},
    })
    expect(wrapper.classes()).toContain('flex-row-reverse')
    await wrapper.setProps({imgEnd: undefined})
    expect(wrapper.classes()).not.toContain('flex-row-reverse')
  })

  it('has class flex-row-reverse when prop imgRight', async () => {
    const wrapper = mount(BCard, {
      props: {imgRight: true},
    })
    expect(wrapper.classes()).toContain('flex-row-reverse')
    await wrapper.setProps({imgRight: undefined})
    expect(wrapper.classes()).not.toContain('flex-row-reverse')
  })

  it('has child img when prop imgSrc', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc'},
    })
    const $img = wrapper.find('img')
    expect($img.exists()).toBe(true)
  })

  it('child img has attr src as prop imgSrc', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc'},
    })
    const $img = wrapper.get('img')
    expect($img.attributes('src')).toBe('/abc')
  })

  it('child img has attr alt as prop imgAlt', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc', imgAlt: 'foobar'},
    })
    const $img = wrapper.get('img')
    expect($img.attributes('alt')).toBe('foobar')
  })

  it('child img has attr width as prop imgWidth is number', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc', imgWidth: 100},
    })
    const $img = wrapper.get('img')
    expect($img.attributes('width')).toBe('100')
  })

  it('child img has attr width as prop imgWidth is string', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc', imgWidth: '100'},
    })
    const $img = wrapper.get('img')
    expect($img.attributes('width')).toBe('100')
  })

  it('child img has attr height as prop imgHeight is number', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc', imgHeight: 100},
    })
    const $img = wrapper.get('img')
    expect($img.attributes('height')).toBe('100')
  })

  it('child img has attr height as prop imgHeight is string', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc', imgHeight: '100'},
    })
    const $img = wrapper.get('img')
    expect($img.attributes('height')).toBe('100')
  })
})
