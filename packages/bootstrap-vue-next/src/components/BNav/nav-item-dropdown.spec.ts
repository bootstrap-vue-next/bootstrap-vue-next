import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BNavItemDropdown from './BNavItemDropdown.vue'
import BButton from '../BButton/BButton.vue'
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

  it('is opened if open called', async () => {
    const wrapper = mount(BNavItemDropdown)
    const $bbutton = wrapper.findComponent(BButton)
    await wrapper.vm.show()
    expect($bbutton.classes()).toContain('show')
  })

  it('is closed if close called', async () => {
    const wrapper = mount(BNavItemDropdown)
    const $bbutton = wrapper.findComponent(BButton)
    await wrapper.vm.show()
    await wrapper.vm.hide()
    expect($bbutton.classes()).not.toContain('show')
  })

  it('is toggled if toggle called', async () => {
    const wrapper = mount(BNavItemDropdown)
    const $bbutton = wrapper.findComponent(BButton)
    await wrapper.vm.toggle()
    expect($bbutton.classes()).toContain('show')
    await wrapper.vm.toggle()
    expect($bbutton.classes()).not.toContain('show')
  })

  // There are more tests here, but the component seems broken
})
