import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BIconstack from './BIconstack.vue'
import BIconBase from './BIconBase.vue'

describe('iconstack', () => {
  enableAutoUnmount(afterEach)

  it('has IconBase', () => {
    const wrapper = mount(BIconstack)
    const $iconbase = wrapper.findComponent(BIconBase)
    expect($iconbase.exists()).toBe(true)
  })

  it.skip('IconBase renders default slot', () => {
    const wrapper = mount(BIconstack, {
      slots: {default: 'foo'},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.text()).toBe('foo')
  })

  it('IconBase has static class b-icon-stack', () => {
    const wrapper = mount(BIconstack)
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.classes()).toContain('b-icon-stack')
  })

  it('IconBase is given prop animation', async () => {
    const wrapper = mount(BIconstack, {
      props: {animation: 'cylon'},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('animation')).toBe('cylon')
    await wrapper.setProps({animation: undefined})
    expect($iconbase.props('animation')).not.toBe('cylon')
  })

  it('IconBase is given prop flipH', async () => {
    const wrapper = mount(BIconstack, {
      props: {flipH: true},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('flipH')).toBe(true)
    await wrapper.setProps({flipH: undefined})
    expect($iconbase.props('flipH')).toBe(false)
  })

  it('IconBase is given prop flipV', async () => {
    const wrapper = mount(BIconstack, {
      props: {flipV: true},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('flipV')).toBe(true)
    await wrapper.setProps({flipV: undefined})
    expect($iconbase.props('flipV')).toBe(false)
  })

  it('IconBase is given prop fontScale', async () => {
    const wrapper = mount(BIconstack, {
      props: {fontScale: 1000},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('fontScale')).toBe(1000)
    await wrapper.setProps({fontScale: undefined})
    expect($iconbase.props('fontScale')).toBe(1)
  })

  it('IconBase is given prop rotate', async () => {
    const wrapper = mount(BIconstack, {
      props: {rotate: 100},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('rotate')).toBe(100)
    await wrapper.setProps({rotate: undefined})
    expect($iconbase.props('rotate')).not.toBe(100)
  })

  it('IconBase is given prop scale', async () => {
    const wrapper = mount(BIconstack, {
      props: {scale: 100},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('scale')).toBe(100)
    await wrapper.setProps({scale: undefined})
    expect($iconbase.props('scale')).toBe(1)
  })

  it('IconBase is given prop shiftH', async () => {
    const wrapper = mount(BIconstack, {
      props: {shiftH: 100},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('shiftH')).toBe(100)
    await wrapper.setProps({shiftH: undefined})
    expect($iconbase.props('shiftH')).toBe(0)
  })

  it('IconBase is given prop shiftV', async () => {
    const wrapper = mount(BIconstack, {
      props: {shiftV: 100},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('shiftV')).toBe(100)
    await wrapper.setProps({shiftV: undefined})
    expect($iconbase.props('shiftV')).toBe(0)
  })

  it('IconBase is given prop size', async () => {
    const wrapper = mount(BIconstack, {
      props: {size: 'lg'},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('size')).toBe('lg')
    await wrapper.setProps({size: undefined})
    expect($iconbase.props('size')).not.toBe('lg')
  })

  it('IconBase is given prop title', async () => {
    const wrapper = mount(BIconstack, {
      props: {title: 'foo'},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('title')).toBe('foo')
    await wrapper.setProps({title: undefined})
    expect($iconbase.props('title')).not.toBe('foo')
  })

  it('IconBase is given prop variant', async () => {
    const wrapper = mount(BIconstack, {
      props: {variant: 'danger'},
    })
    const $iconbase = wrapper.getComponent(BIconBase)
    expect($iconbase.props('variant')).toBe('danger')
    await wrapper.setProps({variant: undefined})
    expect($iconbase.props('variant')).not.toBe('danger')
  })
})
