import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BFormFloatingLabel from './BFormFloatingLabel.vue'

describe('form-floating-label', () => {
  enableAutoUnmount(afterEach)

  it('tag is div', () => {
    const wrapper = mount(BFormFloatingLabel)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has static class form-floating', () => {
    const wrapper = mount(BFormFloatingLabel)
    expect(wrapper.classes()).toContain('form-floating')
  })

  it('renders default slot', () => {
    const wrapper = mount(BFormFloatingLabel, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toContain('foobar')
  })

  it('renders default slot with HTML content', () => {
    const wrapper = mount(BFormFloatingLabel, {
      slots: {default: '<input id="test" type="text" />'},
    })
    expect(wrapper.find('input#test').exists()).toBe(true)
  })

  it('has child label', () => {
    const wrapper = mount(BFormFloatingLabel)
    const $label = wrapper.find('label')
    expect($label.exists()).toBe(true)
  })

  it('child label has no for attr by default', () => {
    const wrapper = mount(BFormFloatingLabel)
    const $label = wrapper.get('label')
    expect($label.attributes('for')).toBeUndefined()
  })

  it('child label has attr for to be labelFor', async () => {
    const wrapper = mount(BFormFloatingLabel, {
      props: {labelFor: 'foobar'},
    })
    const $label = wrapper.get('label')
    expect($label.attributes('for')).toBe('foobar')
    await wrapper.setProps({labelFor: undefined})
    expect($label.attributes('for')).toBeUndefined()
  })

  it('child label renders slot label', () => {
    const wrapper = mount(BFormFloatingLabel, {
      slots: {label: 'foobar', default: 'slots'},
    })
    const $label = wrapper.get('label')
    expect($label.text()).toBe('foobar')
  })

  it('child label renders slot label with HTML content', () => {
    const wrapper = mount(BFormFloatingLabel, {
      slots: {label: '<span id="label-content">My label</span>', default: 'slots'},
    })
    const $label = wrapper.get('label')
    expect($label.find('span#label-content').exists()).toBe(true)
    expect($label.text()).toBe('My label')
  })

  it('child label renders props label', () => {
    const wrapper = mount(BFormFloatingLabel, {
      props: {label: 'foobar'},
    })
    const $label = wrapper.get('label')
    expect($label.text()).toBe('foobar')
  })

  it('child label is reactive to prop label', async () => {
    const wrapper = mount(BFormFloatingLabel, {
      props: {label: 'initial'},
    })
    const $label = wrapper.get('label')
    expect($label.text()).toBe('initial')
    await wrapper.setProps({label: 'updated'})
    expect($label.text()).toBe('updated')
  })

  it('child label is empty when neither label prop nor label slot provided', () => {
    const wrapper = mount(BFormFloatingLabel)
    const $label = wrapper.get('label')
    expect($label.text()).toBe('')
  })

  it('child label prefers to render slot label over prop label', () => {
    const wrapper = mount(BFormFloatingLabel, {
      props: {label: 'props'},
      slots: {label: 'slots', default: 'slots'},
    })
    const $label = wrapper.get('label')
    expect($label.text()).toBe('slots')
  })

  it('renders in the correct order', () => {
    const wrapper = mount(BFormFloatingLabel, {
      slots: {default: 'default', label: 'label'},
    })
    expect(wrapper.text()).toBe('defaultlabel')
  })
})
