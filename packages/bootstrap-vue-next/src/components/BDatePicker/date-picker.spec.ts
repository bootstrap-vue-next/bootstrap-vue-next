import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BDatePicker from './BDatePicker.vue'

describe('bDatePicker', () => {
  enableAutoUnmount(afterEach)

  it('renders with form-control class on the field', () => {
    const wrapper = mount(BDatePicker)
    const field = wrapper.find('.b-date-picker-field')
    expect(field.exists()).toBe(true)
    expect(field.classes()).toContain('form-control')
  })

  it('renders date segments', () => {
    const wrapper = mount(BDatePicker)
    const segments = wrapper.findAll('.b-date-picker-segment, .b-date-picker-literal')
    expect(segments.length).toBeGreaterThan(0)
  })

  it('renders a trigger button', () => {
    const wrapper = mount(BDatePicker)
    const trigger = wrapper.find('.b-date-picker-trigger')
    expect(trigger.exists()).toBe(true)
  })

  it('applies disabled class when disabled prop is true', () => {
    const wrapper = mount(BDatePicker, {
      props: {disabled: true},
    })
    const field = wrapper.find('.b-date-picker-field')
    expect(field.classes()).toContain('disabled')
  })

  it('applies is-valid class when state is true', () => {
    const wrapper = mount(BDatePicker, {
      props: {state: true},
    })
    const field = wrapper.find('.b-date-picker-field')
    expect(field.classes()).toContain('is-valid')
  })

  it('applies is-invalid class when state is false', () => {
    const wrapper = mount(BDatePicker, {
      props: {state: false},
    })
    const field = wrapper.find('.b-date-picker-field')
    expect(field.classes()).toContain('is-invalid')
  })

  it('applies form-control-sm class when size is sm', () => {
    const wrapper = mount(BDatePicker, {
      props: {size: 'sm'},
    })
    const field = wrapper.find('.b-date-picker-field')
    expect(field.classes()).toContain('form-control-sm')
  })

  it('applies form-control-lg class when size is lg', () => {
    const wrapper = mount(BDatePicker, {
      props: {size: 'lg'},
    })
    const field = wrapper.find('.b-date-picker-field')
    expect(field.classes()).toContain('form-control-lg')
  })
})
