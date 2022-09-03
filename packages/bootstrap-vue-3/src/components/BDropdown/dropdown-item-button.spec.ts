import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BDropdownItemButton from './BDropdownItemButton.vue'

describe('dropdown-item-button', () => {
  enableAutoUnmount(afterEach)

  it('tag is li', () => {
    const wrapper = mount(BDropdownItemButton)
    expect(wrapper.element.tagName).toBe('LI')
  })

  it('has static attr role to be presentation', () => {
    const wrapper = mount(BDropdownItemButton)
    expect(wrapper.attributes('role')).toBe('presentation')
  })

  it('has child button', () => {
    const wrapper = mount(BDropdownItemButton)
    const $button = wrapper.find('button')
    expect($button.exists()).toBe(true)
  })

  it('child button has static class dropdown-item', () => {
    const wrapper = mount(BDropdownItemButton)
    const $button = wrapper.get('button')
    expect($button.classes()).toContain('dropdown-item')
  })

  it('child button has static attr role to be menu', () => {
    const wrapper = mount(BDropdownItemButton)
    const $button = wrapper.get('button')
    expect($button.attributes('role')).toBe('menu')
  })

  it('child button has static attr type to be button', () => {
    const wrapper = mount(BDropdownItemButton)
    const $button = wrapper.get('button')
    expect($button.attributes('type')).toBe('button')
  })

  it('child button has class of prop activeClass when prop active', async () => {
    const wrapper = mount(BDropdownItemButton, {
      props: {active: true, activeClass: 'foo'},
    })
    const $button = wrapper.get('button')
    expect($button.classes()).toContain('foo')
    await wrapper.setProps({active: false})
    expect($button.classes()).not.toContain('foo')
  })

  it('child button has class of prop activeClass to be active by default', () => {
    const wrapper = mount(BDropdownItemButton, {
      props: {active: true},
    })
    const $button = wrapper.get('button')
    expect($button.classes()).toContain('active')
  })

  it('child button has class disabled when prop disabled', async () => {
    const wrapper = mount(BDropdownItemButton, {
      props: {disabled: true},
    })
    const $button = wrapper.get('button')
    expect($button.classes()).toContain('disabled')
    await wrapper.setProps({disabled: false})
    expect($button.classes()).not.toContain('disabled')
  })

  it('child button has class text-{type} when prop variant', async () => {
    const wrapper = mount(BDropdownItemButton, {
      props: {variant: 'danger'},
    })
    const $button = wrapper.get('button')
    expect($button.classes()).toContain('text-danger')
    await wrapper.setProps({variant: undefined})
    expect($button.classes()).not.toContain('text-danger')
  })

  it('child button has attr disabled', async () => {
    const wrapper = mount(BDropdownItemButton, {
      props: {disabled: true},
    })
    const $button = wrapper.get('button')
    expect($button.attributes('disabled')).toBe('')
    await wrapper.setProps({disabled: false})
    expect($button.attributes('disabled')).toBeUndefined()
  })

  it('renders default slot', () => {
    const wrapper = mount(BDropdownItemButton, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('emits click when button is clicked', async () => {
    const wrapper = mount(BDropdownItemButton)
    const $button = wrapper.get('button')
    await $button.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('click emit sends MouseEvent', async () => {
    const wrapper = mount(BDropdownItemButton)
    const $button = wrapper.get('button')
    await $button.trigger('click')
    const $emitted = wrapper.emitted('click') ?? []
    expect($emitted[0][0] instanceof MouseEvent).toBe(true)
  })

  it('button has class to include prop buttonClass', () => {
    const wrapper = mount(BDropdownItemButton, {
      props: {buttonClass: ['foo']},
    })
    const $button = wrapper.get('button')
    expect($button.classes()).toContain('foo')
  })
})
