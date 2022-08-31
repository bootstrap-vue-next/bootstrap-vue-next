import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardImg from './BCardImg.vue'

describe('card-img', () => {
  enableAutoUnmount(afterEach)

  it('has class card-img by default', () => {
    const wrapper = mount(BCardImg)
    expect(wrapper.classes()).toContain('card-img')
  })

  it('has class card-img-top when prop top', async () => {
    const wrapper = mount(BCardImg, {
      props: {top: true},
    })
    expect(wrapper.classes()).toContain('card-img-top')
    await wrapper.setProps({top: false})
    expect(wrapper.classes()).not.toContain('card-img-top')
  })

  it('has class card-img-right when prop right', async () => {
    const wrapper = mount(BCardImg, {
      props: {right: true},
    })
    expect(wrapper.classes()).toContain('card-img-right')
    await wrapper.setProps({right: false})
    expect(wrapper.classes()).not.toContain('card-img-right')
  })

  it('has class card-img-right when prop end', async () => {
    const wrapper = mount(BCardImg, {
      props: {end: true},
    })
    expect(wrapper.classes()).toContain('card-img-right')
    await wrapper.setProps({end: false})
    expect(wrapper.classes()).not.toContain('card-img-right')
  })

  it('has class card-img-bottom when prop bottom', async () => {
    const wrapper = mount(BCardImg, {
      props: {bottom: true},
    })
    expect(wrapper.classes()).toContain('card-img-bottom')
    await wrapper.setProps({bottom: false})
    expect(wrapper.classes()).not.toContain('card-img-bottom')
  })

  it('has class card-img-left when prop left', async () => {
    const wrapper = mount(BCardImg, {
      props: {left: true},
    })
    expect(wrapper.classes()).toContain('card-img-left')
    await wrapper.setProps({left: false})
    expect(wrapper.classes()).not.toContain('card-img-left')
  })

  it('has class card-img-left when prop start', async () => {
    const wrapper = mount(BCardImg, {
      props: {start: true},
    })
    expect(wrapper.classes()).toContain('card-img-left')
    await wrapper.setProps({start: false})
    expect(wrapper.classes()).not.toContain('card-img-left')
  })

  it('class card-img-top takes priority over prop right', () => {
    const wrapper = mount(BCardImg, {
      props: {top: true, right: true},
    })
    expect(wrapper.classes()).toContain('card-img-top')
    expect(wrapper.classes()).not.toContain('card-img-right')
  })

  it('class card-img-top takes priority over prop end', () => {
    const wrapper = mount(BCardImg, {
      props: {top: true, end: true},
    })
    expect(wrapper.classes()).toContain('card-img-top')
    expect(wrapper.classes()).not.toContain('card-img-right')
  })

  it('class card-img-right takes priority over prop bottom', () => {
    const wrapper = mount(BCardImg, {
      props: {bottom: true, right: true},
    })
    expect(wrapper.classes()).toContain('card-img-right')
    expect(wrapper.classes()).not.toContain('card-img-bottom')
  })

  it('class card-img-right when prop end takes priority over prop bottom', () => {
    const wrapper = mount(BCardImg, {
      props: {bottom: true, end: true},
    })
    expect(wrapper.classes()).toContain('card-img-right')
    expect(wrapper.classes()).not.toContain('card-img-bottom')
  })

  it('class card-img-bottom takes priority over prop left', () => {
    const wrapper = mount(BCardImg, {
      props: {bottom: true, left: true},
    })
    expect(wrapper.classes()).toContain('card-img-bottom')
    expect(wrapper.classes()).not.toContain('card-img-left')
  })

  it('class card-img-bottom takes priority over prop start', () => {
    const wrapper = mount(BCardImg, {
      props: {bottom: true, start: true},
    })
    expect(wrapper.classes()).toContain('card-img-bottom')
    expect(wrapper.classes()).not.toContain('card-img-left')
  })

  it('has attr src when prop src', async () => {
    const wrapper = mount(BCardImg, {
      props: {src: '/abc'},
    })
    expect(wrapper.attributes('src')).toBe('/abc')
    await wrapper.setProps({src: undefined})
    expect(wrapper.attributes('src')).toBeUndefined()
  })

  it('has attr alt when prop alt', async () => {
    const wrapper = mount(BCardImg, {
      props: {alt: 'foobar'},
    })
    expect(wrapper.attributes('alt')).toBe('foobar')
    await wrapper.setProps({alt: undefined})
    expect(wrapper.attributes('alt')).toBeUndefined()
  })

  it('has attr width when prop width is number', async () => {
    const wrapper = mount(BCardImg, {
      props: {width: 100},
    })
    expect(wrapper.attributes('width')).toBe('100')
    await wrapper.setProps({width: undefined})
    expect(wrapper.attributes('width')).toBeUndefined()
  })

  it('has attr width when prop width is string', async () => {
    const wrapper = mount(BCardImg, {
      props: {width: '100'},
    })
    expect(wrapper.attributes('width')).toBe('100')
    await wrapper.setProps({width: undefined})
    expect(wrapper.attributes('width')).toBeUndefined()
  })

  it('has attr height when prop height is number', async () => {
    const wrapper = mount(BCardImg, {
      props: {height: 100},
    })
    expect(wrapper.attributes('height')).toBe('100')
    await wrapper.setProps({height: undefined})
    expect(wrapper.attributes('height')).toBeUndefined()
  })

  it('has attr height when prop height is string', async () => {
    const wrapper = mount(BCardImg, {
      props: {height: '100'},
    })
    expect(wrapper.attributes('height')).toBe('100')
    await wrapper.setProps({height: undefined})
    expect(wrapper.attributes('height')).toBeUndefined()
  })

  it('attr width returns undefined when 0', async () => {
    const wrapper = mount(BCardImg, {
      props: {width: 0},
    })
    expect(wrapper.attributes('width')).toBeUndefined()
    await wrapper.setProps({width: '0'})
    expect(wrapper.attributes('width')).toBeUndefined()
  })

  it('attr height returns undefined when 0', async () => {
    const wrapper = mount(BCardImg, {
      props: {height: 0},
    })
    expect(wrapper.attributes('height')).toBeUndefined()
    await wrapper.setProps({height: '0'})
    expect(wrapper.attributes('height')).toBeUndefined()
  })

  it('tag is img', () => {
    const wrapper = mount(BCardImg)
    expect(wrapper.element.tagName).toBe('IMG')
  })

  it('has loading as eager by default', () => {
    const wrapper = mount(BCardImg)
    expect(wrapper.attributes('loading')).toBe('eager')
  })

  it('has loading as lazy when prop lazy', async () => {
    const wrapper = mount(BCardImg, {
      props: {lazy: true},
    })
    expect(wrapper.attributes('loading')).toBe('lazy')
    await wrapper.setProps({lazy: false})
    expect(wrapper.attributes('loading')).toBe('eager')
  })
})
