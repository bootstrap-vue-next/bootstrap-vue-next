import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BNavbarBrand from './BNavbarBrand.vue'
import BLink from '../BLink/BLink.vue'

describe('navbar-brand', () => {
  it('contains static class navbar-brand', () => {
    const wrapper = mount(BNavbarBrand)
    expect(wrapper.classes()).toContain('navbar-brand')

    wrapper.unmount()
  })

  it('contains blink when has to prop', () => {
    const wrapper = mount(BNavbarBrand, {
      props: {
        to: '/abc',
      },
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(true)

    wrapper.unmount()
  })

  it('contains blink when has href prop', () => {
    const wrapper = mount(BNavbarBrand, {
      props: {
        href: '/abc',
      },
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(true)

    wrapper.unmount()
  })

  it('tag is div when not isLink', () => {
    const wrapper = mount(BNavbarBrand)
    expect(wrapper.element.tagName).toBe('DIV')

    wrapper.unmount()
  })

  it('tag is prop tag when set', () => {
    const wrapper = mount(BNavbarBrand, {
      props: {
        tag: 'span',
      },
    })
    expect(wrapper.element.tagName).toBe('SPAN')

    wrapper.unmount()
  })

  it('is still BLINK when tag is set, but isLink', () => {
    const wrapper = mount(BNavbarBrand, {
      props: {
        tag: 'span',
        to: '/abc',
      },
    })
    expect(wrapper.element.tagName).toBe('A')

    wrapper.unmount()
  })

  it('renders default slot', () => {
    const wrapper = mount(BNavbarBrand, {
      slots: {
        default: 'foobar',
      },
    })
    expect(wrapper.text()).toBe('foobar')

    wrapper.unmount()
  })
})
