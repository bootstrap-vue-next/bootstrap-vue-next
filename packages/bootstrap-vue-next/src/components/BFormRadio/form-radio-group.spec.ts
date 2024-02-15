import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import {nextTick} from 'vue'
import BFormRadioGroup from './BFormRadioGroup.vue'
import BFormRadio from './BFormRadio.vue'

describe('form-radio-group', () => {
  enableAutoUnmount(afterEach)

  it('tag is div', () => {
    const wrapper = mount(BFormRadioGroup)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has static attr role to be radiogroup', () => {
    const wrapper = mount(BFormRadioGroup)
    expect(wrapper.attributes('role')).toBe('radiogroup')
  })

  it('has static class to contain bv-no-focus-ring', () => {
    const wrapper = mount(BFormRadioGroup)
    expect(wrapper.classes()).toContain('bv-no-focus-ring')
  })

  it('has static attr role to be radiogroup', () => {
    const wrapper = mount(BFormRadioGroup)
    expect(wrapper.attributes('tabindex')).toBe('-1')
  })

  it('has attr id to be defined', async () => {
    const wrapper = mount(BFormRadioGroup)
    expect(wrapper.attributes('id')).not.toBeDefined()
    await nextTick()
    expect(wrapper.attributes('id')).toBeDefined()
  })

  it('has attr id contains content from prop id', () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {id: 'foobar'},
    })
    expect(wrapper.attributes('id')).toBe('foobar')
  })

  it('has b-form-radio', () => {
    const wrapper = mount(BFormRadioGroup)
    const $formradio = wrapper.findComponent(BFormRadio)
    expect($formradio.exists()).toBe(false)
  })

  it('has class was-validated when prop validated', async () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {validated: true},
    })
    expect(wrapper.classes()).toContain('was-validated')
    await wrapper.setProps({validated: false})
    expect(wrapper.classes()).not.toContain('was-validated')
    await wrapper.setProps({validated: undefined})
    expect(wrapper.classes()).not.toContain('was-validated')
  })

  it('has class btn-group when prop buttons', async () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {buttons: true},
    })
    expect(wrapper.classes()).toContain('btn-group')
    await wrapper.setProps({buttons: false})
    expect(wrapper.classes()).not.toContain('btn-group')
    await wrapper.setProps({buttons: undefined})
    expect(wrapper.classes()).not.toContain('btn-group')
  })

  it('does not have class btn-group when prop buttons but also prop stacked is true', async () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {buttons: true, stacked: true},
    })
    expect(wrapper.classes()).not.toContain('btn-group')
    await wrapper.setProps({stacked: false})
    expect(wrapper.classes()).toContain('btn-group')
  })

  it('has class btn-group-{type} when prop size', async () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {size: 'lg'},
    })
    expect(wrapper.classes()).toContain('btn-group-lg')
    await wrapper.setProps({size: undefined})
    expect(wrapper.classes()).not.toContain('btn-group-lg')
  })

  it('has attr aria-required when prop required', async () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {required: true},
    })
    expect(wrapper.attributes('aria-required')).toBe('true')
    await wrapper.setProps({required: false})
    expect(wrapper.attributes('aria-required')).toBeUndefined()
    await wrapper.setProps({required: undefined})
    expect(wrapper.attributes('aria-required')).toBeUndefined()
  })

  it('has attr aria-invalid when prop ariaInvalid', async () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {ariaInvalid: true},
    })
    expect(wrapper.attributes('aria-invalid')).toBe('true')
    await wrapper.setProps({ariaInvalid: 'grammar'})
    expect(wrapper.attributes('aria-invalid')).toBe('grammar')
    await wrapper.setProps({ariaInvalid: 'spelling'})
    expect(wrapper.attributes('aria-invalid')).toBe('spelling')
    await wrapper.setProps({ariaInvalid: false})
    expect(wrapper.attributes('aria-invalid')).toBe('false')
  })

  it('has attr aria-invalid to be true when state is false and ariaInvalid is false', () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {ariaInvalid: false, state: false},
    })
    expect(wrapper.attributes('aria-invalid')).toBe('true')
  })

  it('has attr aria-invalid to be true when state is false and ariaInvalid is undefined', () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {ariaInvalid: undefined, state: false},
    })
    expect(wrapper.attributes('aria-invalid')).toBe('true')
  })

  it('has attr aria-invalid to be undefined when state is undefined and ariaInvalid is undefined', () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {ariaInvalid: undefined, state: undefined},
    })
    expect(wrapper.attributes('aria-invalid')).toBeUndefined()
  })
})
