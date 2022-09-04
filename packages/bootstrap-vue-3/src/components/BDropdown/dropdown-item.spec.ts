import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BDropdownItem from './BDropdownItem.vue'
import BLink from '../BLink/BLink.vue'

describe('dropdown-item', () => {
  enableAutoUnmount(afterEach)

  it('is tag li', () => {
    const wrapper = mount(BDropdownItem)
    expect(wrapper.element.tagName).toBe('LI')
  })

  it('has static attr role to be presentation', () => {
    const wrapper = mount(BDropdownItem)
    expect(wrapper.attributes('role')).toBe('presentation')
  })

  it('has child with dynamic tag of button by default', () => {
    const wrapper = mount(BDropdownItem)
    const $button = wrapper.find('button')
    expect($button.exists()).toBe(true)
  })

  it('child is tag a when prop href', () => {
    const wrapper = mount(BDropdownItem, {
      props: {href: '/abc'},
    })
    const $button = wrapper.find('button')
    const $a = wrapper.find('a')
    expect($button.exists()).toBe(false)
    expect($a.exists()).toBe(true)
  })

  it('child is tag BLink when prop to', () => {
    const wrapper = mount(BDropdownItem, {
      props: {to: '/abc'},
    })
    const $button = wrapper.find('button')
    const $blink = wrapper.findComponent(BLink)
    expect($button.exists()).toBe(false)
    expect($blink.exists()).toBe(true)
  })

  it('child is tag prefers a over blink', () => {
    const wrapper = mount(BDropdownItem, {
      props: {href: '/abc', to: '/abc'},
    })
    const $a = wrapper.find('a')
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(false)
    expect($a.exists()).toBe(true)
  })

  it('child is tag prefers Blink over button', () => {
    const wrapper = mount(BDropdownItem, {
      props: {to: '/abc'},
    })
    const $button = wrapper.find('button')
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(true)
    expect($button.exists()).toBe(false)
  })

  it('button child contains static class dropdown-item', () => {
    const wrapper = mount(BDropdownItem)
    const $button = wrapper.get('button')
    expect($button.classes()).toContain('dropdown-item')
  })

  it('button renders default slot', () => {
    const wrapper = mount(BDropdownItem, {
      slots: {default: 'foobar'},
    })
    const $button = wrapper.get('button')
    expect($button.text()).toBe('foobar')
  })

  it('button contains prop link class as class', () => {
    const wrapper = mount(BDropdownItem, {
      props: {linkClass: ['foo']},
    })
    const $button = wrapper.get('button')
    expect($button.classes()).toContain('foo')
  })

  it('button has class active when prop active', async () => {
    const wrapper = mount(BDropdownItem, {
      props: {active: true},
    })
    const $button = wrapper.get('button')
    expect($button.classes()).toContain('active')
    await wrapper.setProps({active: false})
    expect($button.classes()).not.toContain('active')
  })

  it('button has class disabled when prop disabled', async () => {
    const wrapper = mount(BDropdownItem, {
      props: {disabled: true},
    })
    const $button = wrapper.get('button')
    expect($button.classes()).toContain('disabled')
    await wrapper.setProps({disabled: false})
    expect($button.classes()).not.toContain('disabled')
  })

  it('button has class text-{type} when prop variant', async () => {
    const wrapper = mount(BDropdownItem, {
      props: {variant: 'danger'},
    })
    const $button = wrapper.get('button')
    expect($button.classes()).toContain('text-danger')
    await wrapper.setProps({variant: undefined})
    expect($button.classes()).not.toContain('text-danger')
  })

  it('emits a click event when clicked', async () => {
    const wrapper = mount(BDropdownItem)
    const $button = wrapper.get('button')
    await $button.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('click event passes value MouseEvent', async () => {
    const wrapper = mount(BDropdownItem)
    const $button = wrapper.get('button')
    await $button.trigger('click')
    const $emitted = wrapper.emitted('click') ?? []
    expect($emitted[0][0] instanceof MouseEvent).toBe(true)
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(BDropdownItem, {
      props: {disabled: true},
    })
    const $button = wrapper.get('button')
    await $button.trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })

  it('button has disabled attr when prop disabled', async () => {
    const wrapper = mount(BDropdownItem, {
      props: {disabled: true},
    })
    const $button = wrapper.get('button')
    expect($button.attributes('disabled')).toBe('')
    await wrapper.setProps({disabled: false})
    expect($button.attributes('disabled')).toBeUndefined()
  })

  it('button has aria-current attr when prop active', async () => {
    const wrapper = mount(BDropdownItem, {
      props: {active: true},
    })
    const $button = wrapper.get('button')
    expect($button.attributes('aria-current')).toBe('true')
    await wrapper.setProps({active: false})
    expect($button.attributes('aria-current')).toBeUndefined()
  })

  it('button has href attr when prop href', () => {
    const wrapper = mount(BDropdownItem, {
      props: {href: '/abc'},
    })
    const $a = wrapper.get('a')
    expect($a.attributes('href')).toBe('/abc')
  })

  it('button has rel attr when prop rel', () => {
    const wrapper = mount(BDropdownItem, {
      props: {rel: 'foobar'},
    })
    const $button = wrapper.get('button')
    expect($button.attributes('rel')).toBe('foobar')
  })

  it('button has target attr when prop target', () => {
    const wrapper = mount(BDropdownItem, {
      props: {target: '_parent'},
    })
    const $button = wrapper.get('button')
    expect($button.attributes('target')).toBe('_parent')
  })

  it('button has type button when tag is button', () => {
    const wrapper = mount(BDropdownItem)
    const $button = wrapper.get('button')
    expect($button.attributes('type')).toBe('button')
  })

  it('does not have type button when tag is not button', () => {
    const wrapper = mount(BDropdownItem, {
      props: {href: '/abc'},
    })
    const $a = wrapper.get('a')
    expect($a.attributes('type')).toBeUndefined()
  })
})
