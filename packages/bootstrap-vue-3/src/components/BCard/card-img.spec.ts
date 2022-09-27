import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardImg from './BCardImg.vue'
import BImg from '../BImg.vue'

describe('card-img', () => {
  enableAutoUnmount(afterEach)

  it('has BImg', () => {
    const wrapper = mount(BCardImg)
    const $img = wrapper.findComponent(BImg)
    expect($img.exists()).toBe(true)
  })

  it('has class card-img by default', () => {
    const wrapper = mount(BCardImg)
    expect(wrapper.classes()).toContain('card-img')
  })

  it('BImg has class card-img by default', () => {
    const wrapper = mount(BCardImg)
    const $img = wrapper.getComponent(BImg)
    expect($img.classes()).toContain('card-img')
  })

  it('has class card-img-top when prop top', async () => {
    const wrapper = mount(BCardImg, {
      props: {top: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.classes()).toContain('card-img-top')
    await wrapper.setProps({top: false})
    expect($img.classes()).not.toContain('card-img-top')
  })

  it('has class card-img-right when prop right', async () => {
    const wrapper = mount(BCardImg, {
      props: {right: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.classes()).toContain('card-img-right')
    await wrapper.setProps({right: false})
    expect($img.classes()).not.toContain('card-img-right')
  })

  it('has class card-img-right when prop end', async () => {
    const wrapper = mount(BCardImg, {
      props: {end: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.classes()).toContain('card-img-right')
    await wrapper.setProps({end: false})
    expect($img.classes()).not.toContain('card-img-right')
  })

  it('has class card-img-bottom when prop bottom', async () => {
    const wrapper = mount(BCardImg, {
      props: {bottom: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.classes()).toContain('card-img-bottom')
    await wrapper.setProps({bottom: false})
    expect($img.classes()).not.toContain('card-img-bottom')
  })

  it('has class card-img-left when prop left', async () => {
    const wrapper = mount(BCardImg, {
      props: {left: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.classes()).toContain('card-img-left')
    await wrapper.setProps({left: false})
    expect($img.classes()).not.toContain('card-img-left')
  })

  it('has class card-img-left when prop start', async () => {
    const wrapper = mount(BCardImg, {
      props: {start: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.classes()).toContain('card-img-left')
    await wrapper.setProps({start: false})
    expect($img.classes()).not.toContain('card-img-left')
  })

  it('class card-img-top takes priority over prop right', () => {
    const wrapper = mount(BCardImg, {
      props: {top: true, right: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.classes()).toContain('card-img-top')
    expect($img.classes()).not.toContain('card-img-right')
  })

  it('class card-img-top takes priority over prop end', () => {
    const wrapper = mount(BCardImg, {
      props: {top: true, end: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.classes()).toContain('card-img-top')
    expect($img.classes()).not.toContain('card-img-right')
  })

  it('class card-img-right takes priority over prop bottom', () => {
    const wrapper = mount(BCardImg, {
      props: {bottom: true, right: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.classes()).toContain('card-img-right')
    expect($img.classes()).not.toContain('card-img-bottom')
  })

  it('class card-img-right when prop end takes priority over prop bottom', () => {
    const wrapper = mount(BCardImg, {
      props: {bottom: true, end: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.classes()).toContain('card-img-right')
    expect($img.classes()).not.toContain('card-img-bottom')
  })

  it('class card-img-bottom takes priority over prop left', () => {
    const wrapper = mount(BCardImg, {
      props: {bottom: true, left: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.classes()).toContain('card-img-bottom')
    expect($img.classes()).not.toContain('card-img-left')
  })

  it('class card-img-bottom takes priority over prop start', () => {
    const wrapper = mount(BCardImg, {
      props: {bottom: true, start: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.classes()).toContain('card-img-bottom')
    expect($img.classes()).not.toContain('card-img-left')
  })

  it('BImg is given prop alt', async () => {
    const wrapper = mount(BCardImg, {
      props: {alt: 'foobar'},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('alt')).toBe('foobar')
    await wrapper.setProps({alt: undefined})
    expect($img.props('alt')).toBeUndefined()
  })

  it('BImg is given prop height', async () => {
    const wrapper = mount(BCardImg, {
      props: {height: '100'},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('height')).toBe('100')
    await wrapper.setProps({height: undefined})
    expect($img.props('height')).toBeUndefined()
  })

  it('BImg is given prop src', async () => {
    const wrapper = mount(BCardImg, {
      props: {src: '100'},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('src')).toBe('100')
    await wrapper.setProps({src: undefined})
    expect($img.props('src')).toBeUndefined()
  })

  it('BImg is given prop lazy', async () => {
    const wrapper = mount(BCardImg, {
      props: {lazy: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('lazy')).toBe(true)
    await wrapper.setProps({lazy: false})
    expect($img.props('lazy')).toBe(false)
  })

  it('BImg is given prop width', async () => {
    const wrapper = mount(BCardImg, {
      props: {width: '100'},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('width')).toBe('100')
    await wrapper.setProps({width: undefined})
    expect($img.props('width')).toBeUndefined()
  })

  it('BImg is given prop blank', async () => {
    const wrapper = mount(BCardImg, {
      props: {blank: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('blank')).toBe(true)
    await wrapper.setProps({blank: false})
    expect($img.props('blank')).toBe(false)
  })

  it('BImg is given prop blankColor', async () => {
    const wrapper = mount(BCardImg, {
      props: {blankColor: 'abc'},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('blankColor')).toBe('abc')
    await wrapper.setProps({blankColor: 'def'})
    expect($img.props('blankColor')).toBe('def')
  })

  it('BImg is given prop sizes', async () => {
    const wrapper = mount(BCardImg, {
      props: {sizes: 'abc'},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('sizes')).toBe('abc')
    await wrapper.setProps({sizes: 'def'})
    expect($img.props('sizes')).toBe('def')
  })

  it('BImg is given prop srcset', async () => {
    const wrapper = mount(BCardImg, {
      props: {srcset: 'abc'},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('srcset')).toBe('abc')
    await wrapper.setProps({srcset: 'def'})
    expect($img.props('srcset')).toBe('def')
  })

  it('BImg is not given prop right', () => {
    const wrapper = mount(BCardImg, {
      props: {right: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('right')).toBe(false)
  })

  it('BImg is not given prop left', () => {
    const wrapper = mount(BCardImg, {
      props: {left: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('left')).toBe(false)
  })

  it('BImg is not given prop end', () => {
    const wrapper = mount(BCardImg, {
      props: {end: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('end')).toBe(false)
  })

  it('BImg is not given prop start', () => {
    const wrapper = mount(BCardImg, {
      props: {start: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('start')).toBe(false)
  })

  it('BImg is not given prop top', () => {
    const wrapper = mount(BCardImg, {
      props: {top: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('top')).toBeUndefined()
  })

  it('BImg is not given prop bottom', () => {
    const wrapper = mount(BCardImg, {
      props: {bottom: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('bottom')).toBeUndefined()
  })

  it('emits load event on load', async () => {
    const wrapper = mount(BCardImg)
    const $img = wrapper.getComponent(BImg)
    await $img.trigger('load')
    expect(wrapper.emitted()).toHaveProperty('load')
  })

  it('load event value is instanceof Event', async () => {
    const wrapper = mount(BCardImg)
    const $img = wrapper.getComponent(BImg)
    await $img.trigger('load')
    const emitted = wrapper.emitted('load') ?? []
    expect(emitted[0][0] instanceof Event).toBe(true)
  })
})
