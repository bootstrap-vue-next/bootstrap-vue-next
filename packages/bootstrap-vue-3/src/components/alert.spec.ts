import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BAlert from './BAlert.vue'

describe('alert', () => {
  enableAutoUnmount(afterEach)

  it('has static class alert', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
    })
    expect(wrapper.classes()).toContain('alert')
  })

  it('has static role set to alert', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
    })
    expect(wrapper.attributes('role')).toBe('alert')
  })

  it('has class alert-{type} when prop variant', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('alert-primary')
    await wrapper.setProps({variant: undefined})
    expect(wrapper.classes()).not.toContain('alert-primary')
  })

  it('has class show when prop modelValue', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
    })
    expect(wrapper.classes()).toContain('show')
    await wrapper.setProps({modelValue: false})
    expect(wrapper.classes()).not.toContain('show')
  })

  it('has class alert-dismissible when prop dismissible', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
    })
    expect(wrapper.classes()).toContain('alert-dismissible')
    await wrapper.setProps({dismissible: false})
    expect(wrapper.classes()).not.toContain('alert-dismissible')
  })

  it('has class fade when prop modelValue', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
    })
    expect(wrapper.classes()).toContain('fade')
    await wrapper.setProps({modelValue: false})
    expect(wrapper.classes()).not.toContain('fade')
  })

  it('component exists when modelValue true', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
    })
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
  })

  it('component does not exist when modelValue false', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: false},
    })
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(false)
  })

  it('component exists when show true', () => {
    const wrapper = mount(BAlert, {
      props: {show: true},
    })
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
  })

  it('component does not exist when show false', () => {
    const wrapper = mount(BAlert, {
      props: {show: false},
    })
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(false)
  })

  it('renders default slot', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('has button child if prop dismissible', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
    })
    const $button = wrapper.find('button')
    expect($button.exists()).toBe(true)
  })

  it('does not have button child if prop dismissible false', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: false},
    })
    const $button = wrapper.find('button')
    expect($button.exists()).toBe(false)
  })

  it('button child has static attribute type button', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
    })
    const $button = wrapper.get('button')
    expect($button.attributes('type')).toBe('button')
  })

  it('button child has static class btn-close', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
    })
    const $button = wrapper.get('button')
    expect($button.classes()).toContain('btn-close')
  })

  it('button child has static attribute data-bs-dismiss alert', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
    })
    const $button = wrapper.get('button')
    expect($button.attributes('data-bs-dismiss')).toBe('alert')
  })

  it('button child has aria-label Close by default', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
    })
    const $button = wrapper.get('button')
    expect($button.attributes('aria-label')).toBe('Close')
  })

  it('button child has aria-label prop dismissLabel', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true, dismissLabel: 'foobar'},
    })
    const $button = wrapper.get('button')
    expect($button.attributes('aria-label')).toBe('foobar')
  })

  it('button child on click emits update:modelValue', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
    })
    const $button = wrapper.get('button')
    await $button.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })

  it('button child on click emits dismissed', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
    })
    const $button = wrapper.get('button')
    await $button.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('dismissed')
  })

  it('button child on click emits update:modelValue and gives value false if prop modelValue boolean', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
    })
    const $button = wrapper.get('button')
    await $button.trigger('click')
    expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
    const [event] = wrapper.emitted('update:modelValue') ?? []
    expect(event).toEqual([false])
  })

  it('button child on click emits update:modelValue and gives value 0 if prop modelValue number', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: 1000, dismissible: true},
    })
    const $button = wrapper.get('button')
    await $button.trigger('click')
    expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
    const [event] = wrapper.emitted('update:modelValue') ?? []
    expect(event).toEqual([0])
  })
})
