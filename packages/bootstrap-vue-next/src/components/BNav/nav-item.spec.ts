import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BNavItem from './BNavItem.vue'
import BLink from '../BLink/BLink.vue'

describe('nav-item', () => {
  enableAutoUnmount(afterEach)

  it('has class nav item', () => {
    const wrapper = mount(BNavItem)
    expect(wrapper.classes()).toContain('nav-item')
  })

  it('contains blink', () => {
    const wrapper = mount(BNavItem)
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(true)
  })

  it('blink has nav-link class', () => {
    const wrapper = mount(BNavItem)
    const $blink = wrapper.findComponent(BLink)
    expect($blink.classes()).toContain('nav-link')
  })

  it("blink has custom-class class when prop link-class='custom-class'", () => {
    const wrapper = mount(BNavItem, {
      props: {
        linkClass: 'custom-class',
      },
    })
    const $blink = wrapper.findComponent(BLink)

    expect($blink.classes()).toContain('custom-class')
  })

  it('blink has tabindex -1 when prop disabled', () => {
    const wrapper = mount(BNavItem, {
      props: {
        disabled: true,
      },
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.attributes('tabindex')).toBe('-1')
  })

  it('blink has tabindex undefined when prop disabled is false', () => {
    const wrapper = mount(BNavItem, {
      props: {
        disabled: false,
      },
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.attributes('tabindex')).toBeUndefined()
  })

  it('blink has aria disabled true when prop disabled', () => {
    const wrapper = mount(BNavItem, {
      props: {
        disabled: true,
      },
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.attributes('aria-disabled')).toBe('true')
  })

  it('blink has aria disabled undefined when prop disabled', () => {
    const wrapper = mount(BNavItem, {
      props: {
        disabled: false,
      },
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.attributes('aria-disabled')).toBeUndefined()
  })

  it('renders content from default slot', () => {
    const wrapper = mount(BNavItem, {
      slots: {
        default: 'foobar',
      },
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('passes exactActiveClass prop to BLink', () => {
    const wrapper = mount(BNavItem, {
      props: {
        exactActiveClass: 'my-exact-active',
      },
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.props('exactActiveClass')).toBe('my-exact-active')
  })

  it('passes stretched prop to BLink', () => {
    const wrapper = mount(BNavItem, {
      props: {
        stretched: true,
      },
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.props('stretched')).toBe(true)
  })

  it('passes noRel prop to BLink', () => {
    const wrapper = mount(BNavItem, {
      props: {
        noRel: true,
      },
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.props('noRel')).toBe(true)
  })

  it('passes prefetch prop to BLink', () => {
    const wrapper = mount(BNavItem, {
      props: {
        prefetch: true,
      },
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.props('prefetch')).toBe(true)
  })
})
