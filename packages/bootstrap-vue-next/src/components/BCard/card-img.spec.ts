import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardImg from './BCardImg.vue'
import BImg from '../BImg/BImg.vue'

describe('card-img', () => {
  enableAutoUnmount(afterEach)

  it('has BImg', () => {
    const wrapper = mount(BCardImg)
    const $img = wrapper.findComponent(BImg)
    expect($img.exists()).toBe(true)
  })

  it('renders as img element', () => {
    const wrapper = mount(BCardImg)
    expect(wrapper.element.tagName).toBe('IMG')
  })

  it('has static class b-img from BImg', () => {
    const wrapper = mount(BCardImg)
    expect(wrapper.classes()).toContain('b-img')
  })

  it('has class card-img-top by default when no placement prop', () => {
    const wrapper = mount(BCardImg)
    expect(wrapper.classes()).toContain('card-img-top')
  })

  it('has class card-img-top when placement is top', () => {
    const wrapper = mount(BCardImg, {
      props: {placement: 'top'},
    })
    expect(wrapper.classes()).toContain('card-img-top')
  })

  it('has class card-img-bottom when placement is bottom', () => {
    const wrapper = mount(BCardImg, {
      props: {placement: 'bottom'},
    })
    expect(wrapper.classes()).toContain('card-img-bottom')
  })

  it('has class card-img-start when placement is start', () => {
    const wrapper = mount(BCardImg, {
      props: {placement: 'start'},
    })
    expect(wrapper.classes()).toContain('card-img-start')
  })

  it('has class card-img-end when placement is end', () => {
    const wrapper = mount(BCardImg, {
      props: {placement: 'end'},
    })
    expect(wrapper.classes()).toContain('card-img-end')
  })

  it('has class card-img when placement is overlay', () => {
    const wrapper = mount(BCardImg, {
      props: {placement: 'overlay'},
    })
    expect(wrapper.classes()).toContain('card-img')
  })

  it('placement classes are reactive', async () => {
    const wrapper = mount(BCardImg, {
      props: {placement: 'top'},
    })
    expect(wrapper.classes()).toContain('card-img-top')
    await wrapper.setProps({placement: 'bottom'})
    expect(wrapper.classes()).toContain('card-img-bottom')
    expect(wrapper.classes()).not.toContain('card-img-top')
  })

  it('only has one placement class at a time', async () => {
    const wrapper = mount(BCardImg, {
      props: {placement: 'top'},
    })
    expect(wrapper.classes()).toContain('card-img-top')
    expect(wrapper.classes()).not.toContain('card-img-bottom')
    expect(wrapper.classes()).not.toContain('card-img-start')
    expect(wrapper.classes()).not.toContain('card-img-end')
    expect(wrapper.classes()).not.toContain('card-img')
    await wrapper.setProps({placement: 'overlay'})
    expect(wrapper.classes()).toContain('card-img')
    expect(wrapper.classes()).not.toContain('card-img-top')
    expect(wrapper.classes()).not.toContain('card-img-bottom')
    expect(wrapper.classes()).not.toContain('card-img-start')
    expect(wrapper.classes()).not.toContain('card-img-end')
  })

  it('does not pass placement prop to BImg', () => {
    const wrapper = mount(BCardImg, {
      props: {placement: 'bottom'},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('placement')).toBeUndefined()
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

  it('BImg is given prop block', async () => {
    const wrapper = mount(BCardImg, {
      props: {block: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('block')).toBe(true)
    await wrapper.setProps({block: false})
    expect($img.props('block')).toBe(false)
  })

  it('BImg is given prop fluid', async () => {
    const wrapper = mount(BCardImg, {
      props: {fluid: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('fluid')).toBe(true)
    await wrapper.setProps({fluid: false})
    expect($img.props('fluid')).toBe(false)
  })

  it('BImg is given prop fluidGrow', async () => {
    const wrapper = mount(BCardImg, {
      props: {fluidGrow: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('fluidGrow')).toBe(true)
    await wrapper.setProps({fluidGrow: false})
    expect($img.props('fluidGrow')).toBe(false)
  })

  it('BImg is given prop thumbnail', async () => {
    const wrapper = mount(BCardImg, {
      props: {thumbnail: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('thumbnail')).toBe(true)
    await wrapper.setProps({thumbnail: false})
    expect($img.props('thumbnail')).toBe(false)
  })

  it('BImg is given prop rounded', async () => {
    const wrapper = mount(BCardImg, {
      props: {rounded: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('rounded')).toBe(true)
    await wrapper.setProps({rounded: false})
    expect($img.props('rounded')).toBe(false)
  })

  it('BImg is given prop roundedTop', async () => {
    const wrapper = mount(BCardImg, {
      props: {roundedTop: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('roundedTop')).toBe(true)
    await wrapper.setProps({roundedTop: undefined})
    expect($img.props('roundedTop')).toBeUndefined()
  })

  it('BImg is given prop roundedBottom', async () => {
    const wrapper = mount(BCardImg, {
      props: {roundedBottom: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('roundedBottom')).toBe(true)
    await wrapper.setProps({roundedBottom: undefined})
    expect($img.props('roundedBottom')).toBeUndefined()
  })

  it('BImg is given prop roundedStart', async () => {
    const wrapper = mount(BCardImg, {
      props: {roundedStart: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('roundedStart')).toBe(true)
    await wrapper.setProps({roundedStart: undefined})
    expect($img.props('roundedStart')).toBeUndefined()
  })

  it('BImg is given prop roundedEnd', async () => {
    const wrapper = mount(BCardImg, {
      props: {roundedEnd: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('roundedEnd')).toBe(true)
    await wrapper.setProps({roundedEnd: undefined})
    expect($img.props('roundedEnd')).toBeUndefined()
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
