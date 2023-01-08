// @vitest-environment jsdom
import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BImg from './BImg.vue'

describe('img', () => {
  enableAutoUnmount(afterEach)

  it('tag is img', () => {
    const wrapper = mount(BImg)
    expect(wrapper.element.tagName).toBe('IMG')
  })

  it('has class img-thumbnail if prop thumbnail', async () => {
    const wrapper = mount(BImg, {
      props: {thumbnail: true},
    })
    expect(wrapper.classes()).toContain('img-thumbnail')
    await wrapper.setProps({thumbnail: false})
    expect(wrapper.classes()).not.toContain('img-thumbnail')
  })

  it('has class img-fluid if prop fluid', async () => {
    const wrapper = mount(BImg, {
      props: {fluid: true},
    })
    expect(wrapper.classes()).toContain('img-fluid')
    await wrapper.setProps({fluid: false})
    expect(wrapper.classes()).not.toContain('img-fluid')
  })

  it('has class img-fluid if prop fluidGrow', async () => {
    const wrapper = mount(BImg, {
      props: {fluidGrow: true},
    })
    expect(wrapper.classes()).toContain('img-fluid')
    await wrapper.setProps({fluidGrow: false})
    expect(wrapper.classes()).not.toContain('img-fluid')
  })

  it('has class w-100 if prop fluidGrow', async () => {
    const wrapper = mount(BImg, {
      props: {fluidGrow: true},
    })
    expect(wrapper.classes()).toContain('w-100')
    await wrapper.setProps({fluidGrow: false})
    expect(wrapper.classes()).not.toContain('w-100')
  })

  it('has class rounded if prop rounded true', async () => {
    const wrapper = mount(BImg, {
      props: {rounded: true},
    })
    expect(wrapper.classes()).toContain('rounded')
    await wrapper.setProps({rounded: false})
    expect(wrapper.classes()).not.toContain('rounded')
  })

  it('has class rounded if prop rounded empty string', async () => {
    const wrapper = mount(BImg, {
      props: {rounded: ''},
    })
    expect(wrapper.classes()).toContain('rounded')
    await wrapper.setProps({rounded: false})
    expect(wrapper.classes()).not.toContain('rounded')
  })

  it('has class rounded-{type} if prop rounded string', async () => {
    const wrapper = mount(BImg, {
      props: {rounded: 'abc'},
    })
    expect(wrapper.classes()).toContain('rounded-abc')
    await wrapper.setProps({rounded: false})
    expect(wrapper.classes()).not.toContain('rounded-abc')
  })

  it('has class d-block if prop block', async () => {
    const wrapper = mount(BImg, {
      props: {block: true},
    })
    expect(wrapper.classes()).toContain('d-block')
    await wrapper.setProps({block: false})
    expect(wrapper.classes()).not.toContain('d-block')
  })

  it('has class d-block if prop centerBoolean', async () => {
    const wrapper = mount(BImg, {
      props: {center: true},
    })
    expect(wrapper.classes()).toContain('d-block')
    await wrapper.setProps({center: false})
    expect(wrapper.classes()).not.toContain('d-block')
  })

  it('has class float-start if prop left', async () => {
    const wrapper = mount(BImg, {
      props: {left: true},
    })
    expect(wrapper.classes()).toContain('float-start')
    await wrapper.setProps({left: false})
    expect(wrapper.classes()).not.toContain('float-start')
  })

  it('has class float-end if prop right', async () => {
    const wrapper = mount(BImg, {
      props: {right: true},
    })
    expect(wrapper.classes()).toContain('float-end')
    await wrapper.setProps({right: false})
    expect(wrapper.classes()).not.toContain('float-end')
  })

  it('has class mx-auto if prop center', async () => {
    const wrapper = mount(BImg, {
      props: {center: true},
    })
    expect(wrapper.classes()).toContain('mx-auto')
    await wrapper.setProps({center: false})
    expect(wrapper.classes()).not.toContain('mx-auto')
  })

  it('has class float-start takes priority over prop right/center', async () => {
    const wrapper = mount(BImg, {
      props: {left: true, right: true, center: true},
    })
    expect(wrapper.classes()).toContain('float-start')
    await wrapper.setProps({left: false})
    expect(wrapper.classes()).toContain('float-end')
  })

  it('has class float-end takes priority over prop center', async () => {
    const wrapper = mount(BImg, {
      props: {right: true, center: true},
    })
    expect(wrapper.classes()).toContain('float-end')
    await wrapper.setProps({right: false})
    expect(wrapper.classes()).toContain('mx-auto')
  })

  it('does not have any alignment classes when all props are false', () => {
    const wrapper = mount(BImg, {
      props: {right: false, center: false, left: false},
    })
    expect(wrapper.classes()).not.toContain('float-start')
    expect(wrapper.classes()).not.toContain('float-end')
    expect(wrapper.classes()).not.toContain('mx-auto')
  })

  it('has attr loading to be lazy when prop lazy', () => {
    const wrapper = mount(BImg, {
      props: {lazy: true},
    })
    expect(wrapper.attributes('loading')).toBe('lazy')
  })

  it('has attr loading to be eager when prop lazy false', () => {
    const wrapper = mount(BImg, {
      props: {lazy: false},
    })
    expect(wrapper.attributes('loading')).toBe('eager')
  })

  it('has attr loading to be eager by default', () => {
    const wrapper = mount(BImg)
    expect(wrapper.attributes('loading')).toBe('eager')
  })

  it('has attr src when prop src', () => {
    const wrapper = mount(BImg, {
      props: {src: '/abc'},
    })
    expect(wrapper.attributes('src')).toBe('/abc')
  })

  it('has attr alt when prop alt', () => {
    const wrapper = mount(BImg, {
      props: {alt: 'foobar'},
    })
    expect(wrapper.attributes('alt')).toBe('foobar')
  })

  it('has attr width when prop width is string', () => {
    const wrapper = mount(BImg, {
      props: {width: '100'},
    })
    expect(wrapper.attributes('width')).toBe('100')
  })

  it('has attr width when prop width is number', () => {
    const wrapper = mount(BImg, {
      props: {width: 100},
    })
    expect(wrapper.attributes('width')).toBe('100')
  })

  it('has attr height is undefined when prop height is 0', () => {
    const wrapper = mount(BImg, {
      props: {width: 0},
    })
    expect(wrapper.attributes('width')).toBeUndefined()
  })

  it('has attr height when prop height is string', () => {
    const wrapper = mount(BImg, {
      props: {height: '100'},
    })
    expect(wrapper.attributes('height')).toBe('100')
  })

  it('has attr height when prop height is number', () => {
    const wrapper = mount(BImg, {
      props: {height: 100},
    })
    expect(wrapper.attributes('height')).toBe('100')
  })

  it('has attr height is undefined when prop height is 0', () => {
    const wrapper = mount(BImg, {
      props: {height: 0},
    })
    expect(wrapper.attributes('height')).toBeUndefined()
  })

  it('has attr srcset when prop srcset is string', () => {
    const wrapper = mount(BImg, {
      props: {srcset: 'abc,def'},
    })
    expect(wrapper.attributes('srcset')).toBe('abc,def')
  })

  it('has attr srcset when prop srcset is array', () => {
    const wrapper = mount(BImg, {
      props: {srcset: ['abc', 'def']},
    })
    expect(wrapper.attributes('srcset')).toBe('abc,def')
  })

  it('has attr sizes when prop sizes is string', () => {
    const wrapper = mount(BImg, {
      props: {sizes: 'abc,def'},
    })
    expect(wrapper.attributes('sizes')).toBe('abc,def')
  })

  it('has attr sizes when prop sizes is array', () => {
    const wrapper = mount(BImg, {
      props: {sizes: ['abc', 'def']},
    })
    expect(wrapper.attributes('sizes')).toBe('abc,def')
  })

  it('has height when prop width and prop blank', () => {
    const wrapper = mount(BImg, {
      props: {width: 100, blank: true},
    })
    expect(wrapper.attributes('height')).toBe('100')
  })

  it('has width when prop height and prop blank', () => {
    const wrapper = mount(BImg, {
      props: {height: 100, blank: true},
    })
    expect(wrapper.attributes('width')).toBe('100')
  })

  it('has width and height 1 when prop blank and no height or width', () => {
    const wrapper = mount(BImg, {
      props: {blank: true},
    })
    expect(wrapper.attributes('width')).toBe('1')
    expect(wrapper.attributes('height')).toBe('1')
  })

  it('srcset is undefined when prop blank', () => {
    const wrapper = mount(BImg, {
      props: {blank: true, srcset: 'abc'},
    })
    expect(wrapper.attributes('srcset')).toBeUndefined()
  })

  it('sizes is undefined when prop blank', () => {
    const wrapper = mount(BImg, {
      props: {blank: true, sizes: 'abc'},
    })
    expect(wrapper.attributes('sizes')).toBeUndefined()
  })

  it('src is defined and no prop src when prop blank', () => {
    const wrapper = mount(BImg, {
      props: {blank: true},
    })
    expect(wrapper.attributes('src')).toBeDefined()
  })

  it('src is defined but not set prop when prop blank', () => {
    const wrapper = mount(BImg, {
      props: {blank: true, src: 'abc'},
    })
    expect(wrapper.attributes('src')).toBeDefined()
    expect(wrapper.attributes('src')).not.toBe('abc')
  })

  it('emits load event on load', async () => {
    const wrapper = mount(BImg)
    const $img = wrapper.get('img')
    await $img.trigger('load')
    expect(wrapper.emitted()).toHaveProperty('load')
  })

  it('load event value is instanceof Event', async () => {
    const wrapper = mount(BImg)
    const $img = wrapper.get('img')
    await $img.trigger('load')
    const emitted = wrapper.emitted('load') ?? []
    expect(emitted[0][0] instanceof Event).toBe(true)
  })
})
