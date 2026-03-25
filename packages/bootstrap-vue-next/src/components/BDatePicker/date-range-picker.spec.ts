import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BDateRangePicker from './BDateRangePicker.vue'

describe('bDateRangePicker', () => {
  enableAutoUnmount(afterEach)

  it('renders with form-control class on the field', () => {
    const wrapper = mount(BDateRangePicker)
    const field = wrapper.find('.b-date-range-picker-field')
    expect(field.exists()).toBe(true)
    expect(field.classes()).toContain('form-control')
  })

  it('renders date range segments', () => {
    const wrapper = mount(BDateRangePicker)
    const segments = wrapper.findAll('.b-date-range-picker-segment, .b-date-range-picker-literal')
    expect(segments.length).toBeGreaterThan(0)
  })

  it('renders a separator between start and end segments', () => {
    const wrapper = mount(BDateRangePicker)
    const separator = wrapper.find('.b-date-range-picker-separator')
    expect(separator.exists()).toBe(true)
  })

  it('renders a trigger button', () => {
    const wrapper = mount(BDateRangePicker)
    const trigger = wrapper.find('.b-date-range-picker-trigger')
    expect(trigger.exists()).toBe(true)
  })

  it('applies disabled class when disabled prop is true', () => {
    const wrapper = mount(BDateRangePicker, {
      props: {disabled: true},
    })
    const field = wrapper.find('.b-date-range-picker-field')
    expect(field.classes()).toContain('disabled')
  })

  it('applies is-valid class when state is true', () => {
    const wrapper = mount(BDateRangePicker, {
      props: {state: true},
    })
    const field = wrapper.find('.b-date-range-picker-field')
    expect(field.classes()).toContain('is-valid')
  })

  it('applies is-invalid class when state is false', () => {
    const wrapper = mount(BDateRangePicker, {
      props: {state: false},
    })
    const field = wrapper.find('.b-date-range-picker-field')
    expect(field.classes()).toContain('is-invalid')
  })

  it('applies form-control-sm class when size is sm', () => {
    const wrapper = mount(BDateRangePicker, {
      props: {size: 'sm'},
    })
    const field = wrapper.find('.b-date-range-picker-field')
    expect(field.classes()).toContain('form-control-sm')
  })

  it('applies form-control-lg class when size is lg', () => {
    const wrapper = mount(BDateRangePicker, {
      props: {size: 'lg'},
    })
    const field = wrapper.find('.b-date-range-picker-field')
    expect(field.classes()).toContain('form-control-lg')
  })
})
