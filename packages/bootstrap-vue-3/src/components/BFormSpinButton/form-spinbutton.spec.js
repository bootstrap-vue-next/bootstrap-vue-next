import BFormSpinbutton from './BFormSpinButton.vue'
import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'

describe('form-spin-button', () => {
  enableAutoUnmount(afterEach)
  // --- Structure, class and attributes tests ---

  it('tag is div', () => {
    const wrapper = mount(BFormSpinbutton)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has static classes', () => {
    const wrapper = mount(BFormSpinbutton)
    expect(wrapper.classes()).toContain('b-form-spinbutton')
    expect(wrapper.classes()).toContain('form-control')
    expect(wrapper.classes()).toContain('d-flex')
    expect(wrapper.classes()).not.toContain('d-inline-flex')
    expect(wrapper.classes()).not.toContain('flex-column')
    expect(wrapper.classes()).toContain('align-items-stretch')
    // expect(wrapper.attributes('role')).toEqual('group')
    //   expect(wrapper.attributes('tabindex')).toEqual('-1')
  })
  // Should have 4 child elements (btn, hidden,output, btn)
  it('button has four children', () => {
    const wrapper = mount(BFormSpinbutton)
    expect(wrapper.findAll('.b-form-spinbutton > *').length).toBe(4)
  })

  it('decrement button', () => {
    const wrapper = mount(BFormSpinbutton)
    const $decrement = wrapper.find('[aria-label="Decrement"]')
    expect($decrement.exists()).toBe(true)
    expect($decrement.element.tagName).toBe('BUTTON')
    expect($decrement.attributes('tabindex')).toEqual('-1')
    expect($decrement.attributes('aria-keyshortcuts')).toEqual('ArrowDown')
  })

  it('increment button', () => {
    const wrapper = mount(BFormSpinbutton)
    const $increment = wrapper.find('[aria-label="Increment"]')
    expect($increment.exists()).toBe(true)
    expect($increment.element.tagName).toBe('BUTTON')
    expect($increment.attributes('tabindex')).toEqual('-1')
    expect($increment.attributes('aria-keyshortcuts')).toEqual('ArrowUp')
  })

  it('output button', () => {
    const wrapper = mount(BFormSpinbutton)
    const $output = wrapper.find('output')
    expect($output.exists()).toBe(true)
    expect($output.attributes('role')).toEqual('spinbutton')
    expect($output.attributes('tabindex')).toEqual('0')
    expect($output.attributes('aria-live')).toEqual('off')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    // These two attribute should not exist on the element
    expect($output.element.hasAttribute('aria-valuenow')).toBe(false)
    expect($output.element.hasAttribute('aria-valuetext')).toBe(false)
    expect($output.text()).toEqual('')
  })
})
