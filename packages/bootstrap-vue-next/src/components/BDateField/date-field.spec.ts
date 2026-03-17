import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BDateField from './BDateField.vue'

describe('bDateField', () => {
  enableAutoUnmount(afterEach)

  it('renders with form-control class', () => {
    const wrapper = mount(BDateField)
    expect(wrapper.classes()).toContain('form-control')
    expect(wrapper.classes()).toContain('b-date-field')
  })

  it('renders date segments', () => {
    const wrapper = mount(BDateField)
    const segments = wrapper.findAll('.b-date-field-segment, .b-date-field-literal')
    expect(segments.length).toBeGreaterThan(0)
  })

  it('applies disabled class when disabled prop is true', () => {
    const wrapper = mount(BDateField, {
      props: {disabled: true},
    })
    expect(wrapper.classes()).toContain('disabled')
  })

  it('applies readonly class when readonly prop is true', () => {
    const wrapper = mount(BDateField, {
      props: {readonly: true},
    })
    expect(wrapper.classes()).toContain('readonly')
  })

  it('applies is-valid class when state is true', () => {
    const wrapper = mount(BDateField, {
      props: {state: true},
    })
    expect(wrapper.classes()).toContain('is-valid')
  })

  it('applies is-invalid class when state is false', () => {
    const wrapper = mount(BDateField, {
      props: {state: false},
    })
    expect(wrapper.classes()).toContain('is-invalid')
  })

  it('applies form-control-sm class when size is sm', () => {
    const wrapper = mount(BDateField, {
      props: {size: 'sm'},
    })
    expect(wrapper.classes()).toContain('form-control-sm')
  })

  it('applies form-control-lg class when size is lg', () => {
    const wrapper = mount(BDateField, {
      props: {size: 'lg'},
    })
    expect(wrapper.classes()).toContain('form-control-lg')
  })

  it('does not apply size class when size is undefined', () => {
    const wrapper = mount(BDateField)
    expect(wrapper.classes()).not.toContain('form-control-sm')
    expect(wrapper.classes()).not.toContain('form-control-lg')
  })

  it('passes id prop to the underlying DateFieldRoot', () => {
    const wrapper = mount(BDateField, {
      props: {id: 'my-date-field'},
    })
    expect(wrapper.html()).toContain('my-date-field')
  })

  it('passes disabled attribute to root element', () => {
    const wrapper = mount(BDateField, {
      props: {disabled: true},
    })
    expect(wrapper.attributes('data-disabled')).toBeDefined()
  })

  it('passes readonly attribute to root element', () => {
    const wrapper = mount(BDateField, {
      props: {readonly: true},
    })
    expect(wrapper.attributes('data-readonly')).toBeDefined()
  })
})
