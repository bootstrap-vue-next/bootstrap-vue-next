import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BDateRangeField from './BDateRangeField.vue'

describe('bDateRangeField', () => {
  enableAutoUnmount(afterEach)

  it('renders with form-control class', () => {
    const wrapper = mount(BDateRangeField)
    expect(wrapper.classes()).toContain('form-control')
    expect(wrapper.classes()).toContain('b-date-range-field')
  })

  it('renders date range segments', () => {
    const wrapper = mount(BDateRangeField)
    const segments = wrapper.findAll('.b-date-range-field-segment, .b-date-range-field-literal')
    expect(segments.length).toBeGreaterThan(0)
  })

  it('renders a separator between start and end segments', () => {
    const wrapper = mount(BDateRangeField)
    const separator = wrapper.find('.b-date-range-field-separator')
    expect(separator.exists()).toBe(true)
  })

  it('applies disabled class when disabled prop is true', () => {
    const wrapper = mount(BDateRangeField, {
      props: {disabled: true},
    })
    expect(wrapper.classes()).toContain('disabled')
  })

  it('applies readonly class when readonly prop is true', () => {
    const wrapper = mount(BDateRangeField, {
      props: {readonly: true},
    })
    expect(wrapper.classes()).toContain('readonly')
  })

  it('applies is-valid class when state is true', () => {
    const wrapper = mount(BDateRangeField, {
      props: {state: true},
    })
    expect(wrapper.classes()).toContain('is-valid')
  })

  it('applies is-invalid class when state is false', () => {
    const wrapper = mount(BDateRangeField, {
      props: {state: false},
    })
    expect(wrapper.classes()).toContain('is-invalid')
  })

  it('applies form-control-sm class when size is sm', () => {
    const wrapper = mount(BDateRangeField, {
      props: {size: 'sm'},
    })
    expect(wrapper.classes()).toContain('form-control-sm')
  })

  it('applies form-control-lg class when size is lg', () => {
    const wrapper = mount(BDateRangeField, {
      props: {size: 'lg'},
    })
    expect(wrapper.classes()).toContain('form-control-lg')
  })

  it('does not apply size class when size is undefined', () => {
    const wrapper = mount(BDateRangeField)
    expect(wrapper.classes()).not.toContain('form-control-sm')
    expect(wrapper.classes()).not.toContain('form-control-lg')
  })

  it('passes id prop to the underlying DateRangeFieldRoot', () => {
    const wrapper = mount(BDateRangeField, {
      props: {id: 'my-date-range-field'},
    })
    expect(wrapper.html()).toContain('my-date-range-field')
  })

  it('passes disabled attribute to root element', () => {
    const wrapper = mount(BDateRangeField, {
      props: {disabled: true},
    })
    expect(wrapper.attributes('data-disabled')).toBeDefined()
  })

  it('passes readonly attribute to root element', () => {
    const wrapper = mount(BDateRangeField, {
      props: {readonly: true},
    })
    expect(wrapper.attributes('data-readonly')).toBeDefined()
  })
})
