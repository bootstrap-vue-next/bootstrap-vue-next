import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BNavItemDropdown from './BNavItemDropdown.vue'
import BDropdown from '../BDropdown/BDropdown.vue'

describe('nav-item-dropdown', () => {
  it('has static class nav-item', () => {
    const wrapper = mount(BNavItemDropdown)
    expect(wrapper.classes()).toContain('nav-item')

    wrapper.unmount()
  })

  it('has static class dropdown', () => {
    const wrapper = mount(BNavItemDropdown)
    expect(wrapper.classes()).toContain('dropdown')

    wrapper.unmount()
  })

  it('contains b-dropdown', () => {
    const wrapper = mount(BNavItemDropdown)
    const $bdropdown = wrapper.findComponent(BDropdown)
    expect($bdropdown.exists()).toBe(true)

    wrapper.unmount()
  })

  // There are more tests here, but the component seems broken
})
