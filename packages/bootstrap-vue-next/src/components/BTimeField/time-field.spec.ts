import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTimeField from './BTimeField.vue'

describe('bTimeField', () => {
  enableAutoUnmount(afterEach)

  it('renders with form-control class', () => {
    const wrapper = mount(BTimeField)
    expect(wrapper.classes()).toContain('form-control')
    expect(wrapper.classes()).toContain('b-time-field')
  })

  it('renders time segments', () => {
    const wrapper = mount(BTimeField)
    const segments = wrapper.findAll('.b-time-field-segment, .b-time-field-literal')
    expect(segments.length).toBeGreaterThan(0)
  })

  it('applies disabled class when disabled prop is true', () => {
    const wrapper = mount(BTimeField, {
      props: {disabled: true},
    })
    expect(wrapper.classes()).toContain('disabled')
  })

  it('applies readonly class when readonly prop is true', () => {
    const wrapper = mount(BTimeField, {
      props: {readonly: true},
    })
    expect(wrapper.classes()).toContain('readonly')
  })

  it('applies is-valid class when state is true', () => {
    const wrapper = mount(BTimeField, {
      props: {state: true},
    })
    expect(wrapper.classes()).toContain('is-valid')
  })

  it('applies is-invalid class when state is false', () => {
    const wrapper = mount(BTimeField, {
      props: {state: false},
    })
    expect(wrapper.classes()).toContain('is-invalid')
  })

  it('applies form-control-sm class when size is sm', () => {
    const wrapper = mount(BTimeField, {
      props: {size: 'sm'},
    })
    expect(wrapper.classes()).toContain('form-control-sm')
  })

  it('applies form-control-lg class when size is lg', () => {
    const wrapper = mount(BTimeField, {
      props: {size: 'lg'},
    })
    expect(wrapper.classes()).toContain('form-control-lg')
  })

  it('does not apply size class when size is undefined', () => {
    const wrapper = mount(BTimeField)
    expect(wrapper.classes()).not.toContain('form-control-sm')
    expect(wrapper.classes()).not.toContain('form-control-lg')
  })

  it('passes id prop to the underlying TimeFieldRoot', () => {
    const wrapper = mount(BTimeField, {
      props: {id: 'my-time-field'},
    })
    expect(wrapper.html()).toContain('my-time-field')
  })

  it('passes disabled attribute to root element', () => {
    const wrapper = mount(BTimeField, {
      props: {disabled: true},
    })
    expect(wrapper.attributes('data-disabled')).toBeDefined()
  })

  it('passes readonly attribute to root element', () => {
    const wrapper = mount(BTimeField, {
      props: {readonly: true},
    })
    expect(wrapper.attributes('data-readonly')).toBeDefined()
  })
})
