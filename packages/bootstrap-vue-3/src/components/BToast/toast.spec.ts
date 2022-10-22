import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BToast from './BToast.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import {waitRAF} from '../../../tests/utils'
import {nextTick} from 'vue'
import BTransition from '../BTransition/BTransition.vue'

describe('toast', () => {
  enableAutoUnmount(afterEach)

  /**
   * Waits for two transitions to finish
   */
  const waitTransitions = async () => {
    await nextTick()
    await waitRAF()
    await nextTick()
    await waitRAF()
  }

  it('tag is div by default', () => {
    const wrapper = mount(BToast)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has static class b-toast', () => {
    const wrapper = mount(BToast)
    expect(wrapper.classes()).toContain('b-toast')
  })

  it('has attr id to be prop id', async () => {
    const wrapper = mount(BToast, {
      props: {id: 'foobar'},
    })
    expect(wrapper.attributes('id')).toBe('foobar')
    await wrapper.setProps({id: undefined})
    expect(wrapper.attributes('id')).toBeUndefined()
  })

  it('has attr role to be alert by default', () => {
    const wrapper = mount(BToast)
    expect(wrapper.attributes('role')).toBe('alert')
  })

  it('has attr role to be status when prop isStatus', async () => {
    const wrapper = mount(BToast, {
      props: {isStatus: true},
    })
    expect(wrapper.attributes('role')).toBe('status')
    await wrapper.setProps({isStatus: false})
    expect(wrapper.attributes('role')).toBe('alert')
  })

  it('has attr aria-live to be assertive by default', () => {
    const wrapper = mount(BToast)
    expect(wrapper.attributes('aria-live')).toBe('assertive')
  })

  it('has attr aria-live to be polite when prop isStatus', async () => {
    const wrapper = mount(BToast, {
      props: {isStatus: true},
    })
    expect(wrapper.attributes('aria-live')).toBe('polite')
    await wrapper.setProps({isStatus: false})
    expect(wrapper.attributes('aria-live')).toBe('assertive')
  })

  // TODO test for isHiding branches

  it.skip('onPause', async () => {
    const wrapper = mount(BToast)
    await wrapper.trigger('mouseenter')
  })

  it.skip('onPause', async () => {
    const wrapper = mount(BToast)
    await wrapper.trigger('mouseleave')
  })

  it('has BCloseButton when prop title and is showing', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'foobar'},
    })
    await waitTransitions()
    const $closebutton = wrapper.findComponent(BCloseButton)
    expect($closebutton.exists()).toBe(true)
  })

  it('role is undefined when isHiding', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'foobar'},
    })
    await waitTransitions()
    const $closebutton = wrapper.getComponent(BCloseButton)
    await $closebutton.trigger('click')
    expect(wrapper.attributes('role')).toBeUndefined()
  })

  it('aria-live is undefined when isHiding', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'foobar'},
    })
    await waitTransitions()
    const $closebutton = wrapper.getComponent(BCloseButton)
    await $closebutton.trigger('click')
    expect(wrapper.attributes('aria-live')).toBeUndefined()
  })

  it('aria-atomic is undefined when isHiding', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'foobar'},
    })
    await waitTransitions()
    const $closebutton = wrapper.getComponent(BCloseButton)
    await $closebutton.trigger('click')
    expect(wrapper.attributes('aria-atomic')).toBeUndefined()
  })

  it('has child BTransition', () => {
    const wrapper = mount(BToast)
    const $transition = wrapper.findComponent(BTransition)
    expect($transition.exists()).toBe(true)
  })

  it('BTransition has prop noFade to be prop noFade', async () => {
    const wrapper = mount(BToast, {
      props: {noFade: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    expect($transition.props('noFade')).toBe(true)
    await wrapper.setProps({noFade: false})
    expect($transition.props('noFade')).toBe(false)
  })

  it('BTransition renders nothing by default', async () => {
    const wrapper = mount(BToast)
    const $transition = wrapper.getComponent(BTransition)
    expect($transition.text()).toBe('')
  })

  it('BTransition has div when wrapper shown', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true},
      slots: {default: 'foobar'},
    })
    await waitTransitions()
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.find('div')
    expect($div.exists()).toBe(true)
  })

  it('BTransition child div when shown has static class toast', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true},
      slots: {default: 'foobar'},
    })
    await waitTransitions()
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.classes()).toContain('toast')
  })

  it('BTransition child div when shown has classes from prop toastClass', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, toastClass: ['foo']},
      slots: {default: 'foobar'},
    })
    await waitTransitions()
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.classes()).toContain('foo')
  })

  it('BTransition child div when shown has static attr tabindex to be 0', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true},
      slots: {default: 'foobar'},
    })
    await waitTransitions()
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.attributes('tabindex')).toBe('0')
  })

  it('BTransition child div when shown has class b-toast-{type} when prop variant', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, variant: 'danger'},
      slots: {default: 'foobar'},
    })
    await waitTransitions()
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.classes()).toContain('b-toast-danger')
    await wrapper.setProps({variant: undefined})
    const $div2 = $transition.get('div') //.Rebuilts div when rerendering props
    expect($div2.classes()).not.toContain('b-toast-danger')
  })
})
