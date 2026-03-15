import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it, vi} from 'vitest'
import BDropdownItem from './BDropdownItem.vue'
import BLink from '../BLink/BLink.vue'
import {ref} from 'vue'
import {collapseInjectionKey, dropdownInjectionKey, navbarInjectionKey} from '../../utils/keys'

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

  it('child prefers to be blink when href and to', () => {
    const wrapper = mount(BDropdownItem, {
      props: {href: '/abc', to: '/abc'},
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(true)
  })

  it('child is tag prefers BLink over button', () => {
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

  it('button has aria-disabled attr when prop disabled', async () => {
    const wrapper = mount(BDropdownItem, {
      props: {disabled: true},
    })
    const $button = wrapper.get('button')
    expect($button.attributes('aria-disabled')).toBe('true')
    await wrapper.setProps({disabled: false})
    expect($button.attributes('aria-disabled')).toBeUndefined()
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

  it('child has static attr role to be menuitem', () => {
    const wrapper = mount(BDropdownItem)
    const $button = wrapper.get('button')
    expect($button.attributes('role')).toBe('menuitem')
  })

  it('wrapperAttrs are bound to the li wrapper', () => {
    const wrapper = mount(BDropdownItem, {
      props: {wrapperAttrs: {'data-foo': 'bar'}},
    })
    expect(wrapper.attributes('data-foo')).toBe('bar')
  })

  it('class from attrs is applied to the li wrapper, not the inner element', () => {
    const wrapper = mount(BDropdownItem, {
      attrs: {class: 'custom-wrapper-class'},
    })
    expect(wrapper.classes()).toContain('custom-wrapper-class')
    const $button = wrapper.get('button')
    expect($button.classes()).not.toContain('custom-wrapper-class')
  })

  it('calls dropdownData.hide when clicked', async () => {
    const hide = vi.fn()
    const wrapper = mount(BDropdownItem, {
      global: {
        provide: {
          [dropdownInjectionKey as unknown as symbol]: {hide},
        },
      },
    })
    await wrapper.get('button').trigger('click')
    expect(hide).toHaveBeenCalledOnce()
  })

  it('calls collapseData.hide when clicked and navbarData is present with noAutoClose false', async () => {
    const collapseHide = vi.fn()
    const wrapper = mount(BDropdownItem, {
      global: {
        provide: {
          [navbarInjectionKey as unknown as symbol]: {noAutoClose: ref(false)},
          [collapseInjectionKey as unknown as symbol]: {hide: collapseHide},
        },
      },
    })
    await wrapper.get('button').trigger('click')
    expect(collapseHide).toHaveBeenCalledOnce()
  })

  it('does not call collapseData.hide when navbarData.noAutoClose is true', async () => {
    const collapseHide = vi.fn()
    const wrapper = mount(BDropdownItem, {
      global: {
        provide: {
          [navbarInjectionKey as unknown as symbol]: {noAutoClose: ref(true)},
          [collapseInjectionKey as unknown as symbol]: {hide: collapseHide},
        },
      },
    })
    await wrapper.get('button').trigger('click')
    expect(collapseHide).not.toHaveBeenCalled()
  })

  it('does not call collapseData.hide when navbarData is not present', async () => {
    const collapseHide = vi.fn()
    const wrapper = mount(BDropdownItem, {
      global: {
        provide: {
          [collapseInjectionKey as unknown as symbol]: {hide: collapseHide},
        },
      },
    })
    await wrapper.get('button').trigger('click')
    expect(collapseHide).not.toHaveBeenCalled()
  })
})
