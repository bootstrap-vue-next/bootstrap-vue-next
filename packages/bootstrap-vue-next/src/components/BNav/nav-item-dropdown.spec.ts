import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BNavItemDropdown from './BNavItemDropdown.vue'
import BDropdown from '../BDropdown/BDropdown.vue'

describe('nav-item-dropdown', () => {
  enableAutoUnmount(afterEach)

  it('has static class nav-item', () => {
    const wrapper = mount(BNavItemDropdown)
    expect(wrapper.classes()).toContain('nav-item')
  })

  it('has static class dropdown', () => {
    const wrapper = mount(BNavItemDropdown)
    expect(wrapper.classes()).toContain('dropdown')
  })

  it('contains b-dropdown', () => {
    const wrapper = mount(BNavItemDropdown)
    const $bdropdown = wrapper.findComponent(BDropdown)
    expect($bdropdown.exists()).toBe(true)
  })

  it('BDropdown has prop isNav set to true', () => {
    const wrapper = mount(BNavItemDropdown)
    const $bdropdown = wrapper.findComponent(BDropdown)
    expect($bdropdown.props('isNav')).toBe(true)
  })

  it('passes text prop to BDropdown', () => {
    const wrapper = mount(BNavItemDropdown, {
      props: {text: 'My Dropdown'},
    })
    const $bdropdown = wrapper.findComponent(BDropdown)
    expect($bdropdown.props('text')).toBe('My Dropdown')
  })

  it('passes variant prop to BDropdown', () => {
    const wrapper = mount(BNavItemDropdown, {
      props: {variant: 'primary'},
    })
    const $bdropdown = wrapper.findComponent(BDropdown)
    expect($bdropdown.props('variant')).toBe('primary')
  })

  it('passes split prop to BDropdown', async () => {
    const wrapper = mount(BNavItemDropdown, {
      props: {split: true},
    })
    const $bdropdown = wrapper.findComponent(BDropdown)
    expect($bdropdown.props('split')).toBe(true)
    await wrapper.setProps({split: false})
    expect($bdropdown.props('split')).toBe(false)
  })

  it('passes id prop to BDropdown', () => {
    const wrapper = mount(BNavItemDropdown, {
      props: {id: 'my-dropdown-id'},
    })
    const $bdropdown = wrapper.findComponent(BDropdown)
    expect($bdropdown.props('id')).toBe('my-dropdown-id')
  })

  it('passes disabled prop to BDropdown', async () => {
    const wrapper = mount(BNavItemDropdown, {
      props: {disabled: true},
    })
    const $bdropdown = wrapper.findComponent(BDropdown)
    expect($bdropdown.props('disabled')).toBe(true)
    await wrapper.setProps({disabled: false})
    expect($bdropdown.props('disabled')).toBe(false)
  })

  it('passes size prop to BDropdown', () => {
    const wrapper = mount(BNavItemDropdown, {
      props: {size: 'lg'},
    })
    const $bdropdown = wrapper.findComponent(BDropdown)
    expect($bdropdown.props('size')).toBe('lg')
  })

  it('passes noCaret prop to BDropdown', async () => {
    const wrapper = mount(BNavItemDropdown, {
      props: {noCaret: true},
    })
    const $bdropdown = wrapper.findComponent(BDropdown)
    expect($bdropdown.props('noCaret')).toBe(true)
    await wrapper.setProps({noCaret: false})
    expect($bdropdown.props('noCaret')).toBe(false)
  })

  it('passes menuClass prop to BDropdown', () => {
    const wrapper = mount(BNavItemDropdown, {
      props: {menuClass: 'custom-menu'},
    })
    const $bdropdown = wrapper.findComponent(BDropdown)
    expect($bdropdown.props('menuClass')).toBe('custom-menu')
  })

  it('modelValue defaults to false', () => {
    const wrapper = mount(BNavItemDropdown)
    const $bdropdown = wrapper.findComponent(BDropdown)
    expect($bdropdown.props('modelValue')).toBe(false)
  })

  it('modelValue is passed to BDropdown', async () => {
    const wrapper = mount(BNavItemDropdown, {
      props: {modelValue: true},
    })
    const $bdropdown = wrapper.findComponent(BDropdown)
    expect($bdropdown.props('modelValue')).toBe(true)
    await wrapper.setProps({modelValue: false})
    expect($bdropdown.props('modelValue')).toBe(false)
  })

  it('renders button-content slot', () => {
    const wrapper = mount(BNavItemDropdown, {
      slots: {'button-content': 'button text'},
    })
    expect(wrapper.text()).toContain('button text')
  })

  it('renders default slot content when modelValue is true', () => {
    const wrapper = mount(BNavItemDropdown, {
      props: {modelValue: true},
      slots: {default: 'dropdown content'},
    })
    expect(wrapper.text()).toContain('dropdown content')
  })

  describe('exposed methods', () => {
    it('exposes show method', () => {
      const wrapper = mount(BNavItemDropdown)
      expect(wrapper.vm.show).toBeDefined()
      expect(typeof wrapper.vm.show).toBe('function')
    })

    it('exposes hide method', () => {
      const wrapper = mount(BNavItemDropdown)
      expect(wrapper.vm.hide).toBeDefined()
      expect(typeof wrapper.vm.hide).toBe('function')
    })

    it('exposes toggle method', () => {
      const wrapper = mount(BNavItemDropdown)
      expect(wrapper.vm.toggle).toBeDefined()
      expect(typeof wrapper.vm.toggle).toBe('function')
    })
  })
})
