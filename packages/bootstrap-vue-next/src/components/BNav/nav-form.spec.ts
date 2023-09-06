import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BNavForm from './BNavForm.vue'
import BForm from '../BForm/BForm.vue'

describe('nav-form', () => {
  enableAutoUnmount(afterEach)

  it('contains li', () => {
    const wrapper = mount(BNavForm)
    const $li = wrapper.find('li')
    expect($li.exists()).toBe(true)
  })

  it('contains static class d-flex flex-row align-items-center flex-wrap', () => {
    const wrapper = mount(BNavForm)
    const $li = wrapper.get('li')
    expect($li.classes()).toContain('d-flex')
    expect($li.classes()).toContain('flex-row')
    expect($li.classes()).toContain('align-items-center')
    expect($li.classes()).toContain('flex-wrap')
  })

  it('contains bform', () => {
    const wrapper = mount(BNavForm)
    const $bform = wrapper.findComponent(BForm)
    expect($bform.exists()).toBe(true)
  })

  it('bform renders default slot', () => {
    const wrapper = mount(BNavForm, {
      slots: {default: 'foobar'},
    })
    const $bform = wrapper.getComponent(BForm)
    expect($bform.text()).toBe('foobar')
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
