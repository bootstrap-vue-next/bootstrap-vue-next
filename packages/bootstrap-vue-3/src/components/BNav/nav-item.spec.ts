import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BNavItem from './BNavItem.vue'
import BLink from '../BLink/BLink.vue'

describe('nav-item', () => {
  it('has class nav item', () => {
    const wrapper = mount(BNavItem)
    expect(wrapper.classes()).toContain('nav-item')

    wrapper.unmount()
  })

  it('contains blink', () => {
    const wrapper = mount(BNavItem)
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(true)

    wrapper.unmount()
  })

  it('blink has nav-link class', () => {
    const wrapper = mount(BNavItem)
    const $blink = wrapper.findComponent(BLink)
    expect($blink.classes()).toContain('nav-link')

    wrapper.unmount()
  })

  it('blink has tabindex -1 when prop disabled', () => {
    const wrapper = mount(BNavItem, {
      props: {
        disabled: true,
      },
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.attributes('tabindex')).toBe('-1')

    wrapper.unmount()
  })

  it('blink has tabindex undefined when prop disabled is false', () => {
    const wrapper = mount(BNavItem, {
      props: {
        disabled: false,
      },
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.attributes('tabindex')).toBeUndefined()

    wrapper.unmount()
  })

  it('blink has aria disabled true when prop disabled', () => {
    const wrapper = mount(BNavItem, {
      props: {
        disabled: true,
      },
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.attributes('aria-disabled')).toBe('true')

    wrapper.unmount()
  })

  it('blink has aria disabled undefined when prop disabled', () => {
    const wrapper = mount(BNavItem, {
      props: {
        disabled: false,
      },
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.attributes('aria-disabled')).toBeUndefined()

    wrapper.unmount()
  })

  it('renders content from default slot', () => {
    const wrapper = mount(BNavItem, {
      slots: {
        default: 'foobar',
      },
    })
    expect(wrapper.text()).toBe('foobar')

    wrapper.unmount()
  })
})
