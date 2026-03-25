import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTimeRangeField from './BTimeRangeField.vue'

describe('bTimeRangeField', () => {
  enableAutoUnmount(afterEach)

  it('renders with form-control class', () => {
    const wrapper = mount(BTimeRangeField)
    expect(wrapper.classes()).toContain('form-control')
    expect(wrapper.classes()).toContain('b-time-range-field')
  })

  it('renders time range segments', () => {
    const wrapper = mount(BTimeRangeField)
    const segments = wrapper.findAll('.b-time-range-field-segment, .b-time-range-field-literal')
    expect(segments.length).toBeGreaterThan(0)
  })

  it('renders a separator between start and end segments', () => {
    const wrapper = mount(BTimeRangeField)
    const separator = wrapper.find('.b-time-range-field-separator')
    expect(separator.exists()).toBe(true)
  })

  it('applies disabled class when disabled prop is true', () => {
    const wrapper = mount(BTimeRangeField, {
      props: {disabled: true},
    })
    expect(wrapper.classes()).toContain('disabled')
  })

  it('applies readonly class when readonly prop is true', () => {
    const wrapper = mount(BTimeRangeField, {
      props: {readonly: true},
    })
    expect(wrapper.classes()).toContain('readonly')
  })

  it('applies is-valid class when state is true', () => {
    const wrapper = mount(BTimeRangeField, {
      props: {state: true},
    })
    expect(wrapper.classes()).toContain('is-valid')
  })

  it('applies is-invalid class when state is false', () => {
    const wrapper = mount(BTimeRangeField, {
      props: {state: false},
    })
    expect(wrapper.classes()).toContain('is-invalid')
  })

  it('applies form-control-sm class when size is sm', () => {
    const wrapper = mount(BTimeRangeField, {
      props: {size: 'sm'},
    })
    expect(wrapper.classes()).toContain('form-control-sm')
  })

  it('applies form-control-lg class when size is lg', () => {
    const wrapper = mount(BTimeRangeField, {
      props: {size: 'lg'},
    })
    expect(wrapper.classes()).toContain('form-control-lg')
  })

  it('does not apply size class when size is undefined', () => {
    const wrapper = mount(BTimeRangeField)
    expect(wrapper.classes()).not.toContain('form-control-sm')
    expect(wrapper.classes()).not.toContain('form-control-lg')
  })

  it('passes id prop to the underlying TimeRangeFieldRoot', () => {
    const wrapper = mount(BTimeRangeField, {
      props: {id: 'my-time-range-field'},
    })
    expect(wrapper.html()).toContain('my-time-range-field')
  })

  it('passes disabled attribute to root element', () => {
    const wrapper = mount(BTimeRangeField, {
      props: {disabled: true},
    })
    expect(wrapper.attributes('data-disabled')).toBeDefined()
  })

  it('passes readonly attribute to root element', () => {
    const wrapper = mount(BTimeRangeField, {
      props: {readonly: true},
    })
    expect(wrapper.attributes('data-readonly')).toBeDefined()
  })
})
