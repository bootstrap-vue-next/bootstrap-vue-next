import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BDropdownForm from './BDropdownForm.vue'

describe('dropdown-form', () => {
  enableAutoUnmount(afterEach)

  it('tag is li', () => {
    const wrapper = mount(BDropdownForm)
    expect(wrapper.element.tagName).toBe('LI')
  })

  it('has static role to be presentation', () => {
    const wrapper = mount(BDropdownForm)
    expect(wrapper.attributes('role')).toBe('presentation')
  })

  it('has child form', () => {
    const wrapper = mount(BDropdownForm)
    const $form = wrapper.find('form')
    expect($form.exists()).toBe(true)
  })

  it('child form has static class px-4', () => {
    const wrapper = mount(BDropdownForm)
    const $form = wrapper.get('form')
    expect($form.classes()).toContain('px-4')
  })

  it('child form has static class py-3', () => {
    const wrapper = mount(BDropdownForm)
    const $form = wrapper.get('form')
    expect($form.classes()).toContain('py-3')
  })

  it('child form renders default slot', () => {
    const wrapper = mount(BDropdownForm, {
      slots: {default: 'foobar'},
    })
    const $form = wrapper.get('form')
    expect($form.text()).toBe('foobar')
  })
})
