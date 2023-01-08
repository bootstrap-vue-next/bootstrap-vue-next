import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BToaster from './BToaster.vue'
import BToast from './BToast.vue'
import {ToastInstance} from './plugin'

describe('toaster', () => {
  enableAutoUnmount(afterEach)

  it('has static class b-toaster', () => {
    const wrapper = mount(BToaster)
    expect(wrapper.classes()).toContain('b-toaster')
  })

  it('has static class position-fixed', () => {
    const wrapper = mount(BToaster)
    expect(wrapper.classes()).toContain('b-toaster')
  })

  it('has static class p-3', () => {
    const wrapper = mount(BToaster)
    expect(wrapper.classes()).toContain('b-toaster')
  })

  it('has static style z-index: 11', () => {
    const wrapper = mount(BToaster)
    expect(wrapper.attributes('style')).toBe('z-index: 11;')
  })

  it('tag is div', () => {
    const wrapper = mount(BToaster)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has position class', async () => {
    const wrapper = mount(BToaster, {
      props: {position: 'top-right'},
    })
    expect(wrapper.classes()).toContain('top-0')
    expect(wrapper.classes()).toContain('end-0')
    await wrapper.setProps({position: 'top-left'})
    expect(wrapper.classes()).toContain('top-0')
    expect(wrapper.classes()).toContain('start-0')
    await wrapper.setProps({position: 'top-center'})
    expect(wrapper.classes()).toContain('top-0')
    expect(wrapper.classes()).toContain('start-50')
    expect(wrapper.classes()).toContain('translate-middle-x')
    await wrapper.setProps({position: 'middle-left'})
    expect(wrapper.classes()).toContain('top-50')
    expect(wrapper.classes()).toContain('start-0')
    expect(wrapper.classes()).toContain('translate-middle-y')
    await wrapper.setProps({position: 'middle-center'})
    expect(wrapper.classes()).toContain('top-50')
    expect(wrapper.classes()).toContain('start-50')
    expect(wrapper.classes()).toContain('translate-middle')
    await wrapper.setProps({position: 'middle-right'})
    expect(wrapper.classes()).toContain('top-50')
    expect(wrapper.classes()).toContain('end-0')
    expect(wrapper.classes()).toContain('translate-middle-y')
    await wrapper.setProps({position: 'bottom-left'})
    expect(wrapper.classes()).toContain('bottom-0')
    expect(wrapper.classes()).toContain('start-0')
    await wrapper.setProps({position: 'bottom-center'})
    expect(wrapper.classes()).toContain('bottom-0')
    expect(wrapper.classes()).toContain('start-50')
    expect(wrapper.classes()).toContain('translate-middle-x')
    await wrapper.setProps({position: 'bottom-right'})
    expect(wrapper.classes()).toContain('bottom-0')
    expect(wrapper.classes()).toContain('end-0')
  })

  it('contains child b-toast when prop instance has an acceptable instance', () => {
    const instance = new ToastInstance({
      root: true,
      id: Symbol(),
      container: undefined,
      toasts: [{content: {body: 'abc'}, options: {pos: 'top-right', value: true}}],
    })
    const wrapper = mount(BToaster, {
      props: {instance, position: 'top-right'},
    })
    const $toast = wrapper.findComponent(BToast)
    expect($toast.exists()).toBe(true)
  })
})
