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

  it('child form has static class dropdown-item-text', () => {
    const wrapper = mount(BDropdownForm)
    const $form = wrapper.get('form')
    expect($form.classes()).toContain('dropdown-item-text')
  })

  it('child form renders default slot', () => {
    const wrapper = mount(BDropdownForm, {
      slots: {default: 'foobar'},
    })
    const $form = wrapper.get('form')
    expect($form.text()).toBe('foobar')
  })

  it('child from has class was-validated when prop validated', async () => {
    const wrapper = mount(BDropdownForm, {
      props: {validated: true},
    })
    const $form = wrapper.get('form')
    expect($form.classes()).toContain('was-validated')
    await wrapper.setProps({validated: false})
    expect($form.classes()).not.toContain('was-validated')
  })

  it('child form has attr id to be prop novalidate', async () => {
    const wrapper = mount(BDropdownForm, {
      props: {novalidate: true},
    })
    const $form = wrapper.get('form')
    expect($form.attributes('novalidate')).toBe('')
    await wrapper.setProps({novalidate: false})
    expect($form.attributes('novalidate')).toBeUndefined()
  })

  it('child form has class from prop formClass', async () => {
    const wrapper = mount(BDropdownForm, {
      props: {formClass: 'foobar'},
    })
    const $form = wrapper.get('form')
    expect($form.classes()).toContain('foobar')
    await wrapper.setProps({formClass: undefined})
    expect($form.classes()).not.toContain('foobar')
  })

  it('li has attrs from prop wrapperAttrs', () => {
    const wrapper = mount(BDropdownForm, {
      props: {wrapperAttrs: {'data-foo': 'bar'}},
    })
    expect(wrapper.attributes('data-foo')).toBe('bar')
  })

  it('li has class from class attr', () => {
    const wrapper = mount(BDropdownForm, {
      attrs: {class: 'foobar'},
    })
    expect(wrapper.classes()).toContain('foobar')
  })

  it('class attr is not applied to child form', () => {
    const wrapper = mount(BDropdownForm, {
      attrs: {class: 'foobar'},
    })
    const $form = wrapper.get('form')
    expect($form.classes()).not.toContain('foobar')
  })

  it('non-class attrs are applied to child form', () => {
    const wrapper = mount(BDropdownForm, {
      attrs: {'data-foo': 'bar'},
    })
    const $form = wrapper.get('form')
    expect($form.attributes('data-foo')).toBe('bar')
  })
})
