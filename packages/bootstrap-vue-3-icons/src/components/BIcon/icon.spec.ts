import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BIcon from './BIcon.vue'
import BIconBase from './BIconBase.vue'

describe('icon', () => {
  enableAutoUnmount(afterEach)

  it('has IconBase', () => {
    const wrapper = mount(BIcon, {
      props: {icon: 'foo'},
    })
    const $iconbase = wrapper.findComponent(BIconBase)
    expect($iconbase.exists()).toBe(true)
  })

  it('gives IconBase prop animation', async () => {
    const wrapper = mount(BIcon, {
      props: {icon: 'foo', animation: 'cylon'},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('animation')).toBe('cylon')
    await wrapper.setProps({animation: undefined})
    expect($iconbase.props('animation')).not.toBe('cylon')
  })

  it('gives IconBase prop flipH', async () => {
    const wrapper = mount(BIcon, {
      props: {icon: 'foo', flipH: true},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('flipH')).toBe(true)
    await wrapper.setProps({flipH: undefined})
    expect($iconbase.props('flipH')).toBe(false)
  })

  it('gives IconBase prop flipV', async () => {
    const wrapper = mount(BIcon, {
      props: {icon: 'foo', flipV: true},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('flipV')).toBe(true)
    await wrapper.setProps({flipV: undefined})
    expect($iconbase.props('flipV')).toBe(false)
  })

  it('gives IconBase prop fontScale', async () => {
    const wrapper = mount(BIcon, {
      props: {icon: 'foo', fontScale: 100},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('fontScale')).toBe(100)
    await wrapper.setProps({fontScale: undefined})
    expect($iconbase.props('fontScale')).toBe(1)
  })

  it('gives IconBase is not given prop icon', () => {
    const wrapper = mount(BIcon, {
      props: {icon: 'foo'},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('icon')).toBeUndefined()
  })

  it('gives IconBase prop rotate', async () => {
    const wrapper = mount(BIcon, {
      props: {icon: 'foo', rotate: 100},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('rotate')).toBe(100)
    await wrapper.setProps({rotate: undefined})
    expect($iconbase.props('rotate')).not.toBe(100)
  })

  it('gives IconBase prop scale', async () => {
    const wrapper = mount(BIcon, {
      props: {icon: 'foo', scale: 100},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('scale')).toBe(100)
    await wrapper.setProps({scale: undefined})
    expect($iconbase.props('scale')).toBe(1)
  })

  it('gives IconBase prop shiftH', async () => {
    const wrapper = mount(BIcon, {
      props: {icon: 'foo', shiftH: 100},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('shiftH')).toBe(100)
    await wrapper.setProps({shiftH: undefined})
    expect($iconbase.props('shiftH')).toBe(0)
  })

  it('gives IconBase prop shiftV', async () => {
    const wrapper = mount(BIcon, {
      props: {icon: 'foo', shiftV: 100},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('shiftV')).toBe(100)
    await wrapper.setProps({shiftV: undefined})
    expect($iconbase.props('shiftV')).toBe(0)
  })

  it('gives IconBase prop size', async () => {
    const wrapper = mount(BIcon, {
      props: {icon: 'foo', size: 'lg'},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('size')).toBe('lg')
    await wrapper.setProps({size: undefined})
    expect($iconbase.props('size')).not.toBe('lg')
  })

  it('gives IconBase prop stacked', async () => {
    const wrapper = mount(BIcon, {
      props: {icon: 'foo', stacked: true},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('stacked')).toBe(true)
    await wrapper.setProps({stacked: undefined})
    expect($iconbase.props('stacked')).toBe(false)
  })

  it('gives IconBase prop title', async () => {
    const wrapper = mount(BIcon, {
      props: {icon: 'foo', title: 'foo'},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('title')).toBe('foo')
    await wrapper.setProps({title: undefined})
    expect($iconbase.props('title')).not.toBe('foo')
  })

  it('gives IconBase prop variant', async () => {
    const wrapper = mount(BIcon, {
      props: {icon: 'foo', variant: 'danger'},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('variant')).toBe('danger')
    await wrapper.setProps({variant: undefined})
    expect($iconbase.props('variant')).not.toBe('danger')
  })

  it('renders default slot', () => {
    const wrapper = mount(BIcon, {
      slots: {default: 'foobar'},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.text()).toBe('foobar')
  })

  it('does not have use if slot default', () => {
    const wrapper = mount(BIcon, {
      slots: {default: 'foobar'},
    })
    const $use = wrapper.find('use')
    expect($use.exists()).toBe(false)
  })

  it('has use if not slot default', () => {
    const wrapper = mount(BIcon)
    const $use = wrapper.find('use')
    expect($use.exists()).toBe(true)
  })

  // TODO the svgSprite computed is not tested
  it('use has attribute xlink', () => {
    const wrapper = mount(BIcon)
    const $use = wrapper.get('use')
    expect($use.attributes('href')).toBeDefined()
  })
})
