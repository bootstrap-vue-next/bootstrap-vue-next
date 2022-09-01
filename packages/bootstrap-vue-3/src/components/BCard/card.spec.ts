import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCard from './BCard.vue'
import BCardImg from './BCardImg.vue'

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

  it('does not have child BCardImg by default', () => {
    const wrapper = mount(BCard)
    const $img = wrapper.findComponent(BCardImg)
    expect($img.exists()).toBe(false)
  })

  it('has child img when prop imgSrc', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc'},
    })
    const $img = wrapper.findComponent(BCardImg)
    expect($img.exists()).toBe(true)
  })

  it('child img has its prop src as imgSrc', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc'},
    })
    const $img = wrapper.getComponent(BCardImg)
    expect($img.props('src')).toBe('/abc')
  })

  it('child img has its prop alt as imgAlt', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc', imgAlt: 'foobar'},
    })
    const $img = wrapper.getComponent(BCardImg)
    expect($img.props('alt')).toBe('foobar')
  })

  it('child img has its prop width as imgWidth', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc', imgWidth: 100},
    })
    const $img = wrapper.getComponent(BCardImg)
    expect($img.props('width')).toBe(100)
  })

  it('child img has its prop width as imgWidth string', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc', imgWidth: '100'},
    })
    const $img = wrapper.getComponent(BCardImg)
    expect($img.props('width')).toBe('100')
  })

  it('child img has its prop height as imgHeight', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc', imgHeight: 100},
    })
    const $img = wrapper.getComponent(BCardImg)
    expect($img.props('height')).toBe(100)
  })

  it('child img has its prop height as imgHeight string', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc', imgHeight: '100'},
    })
    const $img = wrapper.getComponent(BCardImg)
    expect($img.props('height')).toBe('100')
  })

  it('has headerTag as child when prop header', () => {
    const wrapper = mount(BCard, {
      props: {header: 'foobar', headerTag: 'p'},
    })
    const $p = wrapper.find('p')
    expect($p.exists()).toBe(true)
  })

  it('first child renders text when prop header', () => {
    const wrapper = mount(BCard, {
      props: {header: 'foobar', headerTag: 'p'},
    })
    const $p = wrapper.get('p')
    expect($p.text()).toBe('foobar')
  })

  it('has headerTag as child when slot header', () => {
    const wrapper = mount(BCard, {
      props: {headerTag: 'p'},
      slots: {header: 'foobar'},
    })
    const $p = wrapper.find('p')
    expect($p.exists()).toBe(true)
  })

  it('first child renders text when slot header', () => {
    const wrapper = mount(BCard, {
      props: {headerTag: 'p'},
      slots: {header: 'foobar'},
    })
    const $p = wrapper.get('p')
    expect($p.text()).toBe('foobar')
  })

  it('has headerTag as child when prop headerHtml', () => {
    const wrapper = mount(BCard, {
      props: {headerHtml: 'foobar', headerTag: 'p'},
    })
    const $p = wrapper.find('p')
    expect($p.exists()).toBe(true)
  })

  it('first child renders html when prop headerHtml', () => {
    const wrapper = mount(BCard, {
      props: {headerHtml: '<h1>foobar</h1>', headerTag: 'p'},
    })
    const $p = wrapper.get('p')
    const $h1 = $p.find('h1')
    expect($h1.exists()).toBe(true)
    expect($h1.text()).toBe('foobar')
  })

  it('first child has static class card-header', () => {
    const wrapper = mount(BCard, {
      props: {header: 'foobar', headerTag: 'p'},
    })
    const $p = wrapper.get('p')
    expect($p.classes()).toContain('card-header')
  })

  it('first child has class bg-{type} when prop headerBgVariant', async () => {
    const wrapper = mount(BCard, {
      props: {header: 'foobar', headerTag: 'p', headerBgVariant: 'primary'},
    })
    const $p = wrapper.get('p')
    expect($p.classes()).toContain('bg-primary')
    await wrapper.setProps({headerBgVariant: undefined})
    expect($p.classes()).not.toContain('bg-primary')
  })

  it('first child has class border-{type} when prop headerBorderVariant', async () => {
    const wrapper = mount(BCard, {
      props: {header: 'foobar', headerTag: 'p', headerBorderVariant: 'primary'},
    })
    const $p = wrapper.get('p')
    expect($p.classes()).toContain('border-primary')
    await wrapper.setProps({headerBorderVariant: undefined})
    expect($p.classes()).not.toContain('border-primary')
  })

  it('first child has class text-{type} when prop headerTextVariant', async () => {
    const wrapper = mount(BCard, {
      props: {header: 'foobar', headerTag: 'p', headerTextVariant: 'primary'},
    })
    const $p = wrapper.get('p')
    expect($p.classes()).toContain('text-primary')
    await wrapper.setProps({headerTextVariant: undefined})
    expect($p.classes()).not.toContain('text-primary')
  })

  it('first child has classes added through prop headerClass', () => {
    const wrapper = mount(BCard, {
      props: {header: 'foobar', headerTag: 'p', headerClass: ['foobar']},
    })
    const $p = wrapper.get('p')
    expect($p.classes()).toContain('foobar')
  })
})
