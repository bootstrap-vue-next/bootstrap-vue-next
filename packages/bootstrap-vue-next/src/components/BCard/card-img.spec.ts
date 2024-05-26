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

  it('has classes when prop placement', async () => {
    const wrapper = mount(BCardImg, {
      props: {placement: 'top'},
    })
    expect(wrapper.classes()).toContain('card-img-top')
    await wrapper.setProps({placement: 'end'})
    expect(wrapper.classes()).toContain('card-img-end')
    await wrapper.setProps({placement: 'bottom'})
    expect(wrapper.classes()).toContain('card-img-bottom')
    await wrapper.setProps({placement: 'start'})
    expect(wrapper.classes()).toContain('card-img-start')
    await wrapper.setProps({placement: 'overlay'})
    expect(wrapper.classes()).toContain('card-img')
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
