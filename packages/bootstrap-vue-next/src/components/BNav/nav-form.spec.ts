import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BNavForm from './BNavForm.vue'
import BForm from '../BForm/BForm.vue'

describe('nav-form', () => {
  enableAutoUnmount(afterEach)

  it('contains static class d-flex', () => {
    const wrapper = mount(BNavForm)
    expect(wrapper.classes()).toContain('d-flex')
  })

  it('renders default slot', () => {
    const wrapper = mount(BNavForm, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('contains bform', () => {
    const wrapper = mount(BNavForm)
    const $bform = wrapper.findComponent(BForm)
    expect($bform.exists()).toBe(true)
  })

  it('bform to have prop floating when prop floating', () => {
    const wrapper = mount(BNavForm, {
      props: {floating: true},
    })
    const $bform = wrapper.findComponent(BForm)
    expect($bform.props('floating')).toBe(true)
  })

  it('bform to have attribute role when prop role', () => {
    const wrapper = mount(BNavForm, {
      props: {role: 'abc'},
    })
    const $bform = wrapper.findComponent(BForm)
    expect($bform.attributes('role')).toBe('abc')
  })

  it('bform to have prop id when prop id', () => {
    const wrapper = mount(BNavForm, {
      props: {id: 'abc'},
    })
    const $bform = wrapper.findComponent(BForm)
    expect($bform.props('id')).toBe('abc')
  })

  it('bform to have prop novalidate when prop novalidate', () => {
    const wrapper = mount(BNavForm, {
      props: {novalidate: true},
    })
    const $bform = wrapper.findComponent(BForm)
    expect($bform.props('novalidate')).toBe(true)
  })

  it('bform to have prop validated when prop validated', () => {
    const wrapper = mount(BNavForm, {
      props: {validated: true},
    })
    const $bform = wrapper.findComponent(BForm)
    expect($bform.props('validated')).toBe(true)
  })
})
