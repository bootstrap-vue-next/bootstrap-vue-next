import {enableAutoUnmount, mount} from '@vue/test-utils'
import BFormSelectOption from './BFormSelectOption.vue'
import {afterEach, describe, expect, it} from 'vitest'

describe('form-select-option', () => {
  enableAutoUnmount(afterEach)

  it('has expected default structure', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {
        value: 'foo',
      },
    })

    expect(wrapper.element.tagName).toBe('OPTION')
    expect(wrapper.attributes('value')).toEqual('foo')
    expect(wrapper.text()).toEqual('')
  })

  it('renders default slot content', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {
        value: 'foo',
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.element.tagName).toBe('OPTION')
    expect(wrapper.attributes('value')).toEqual('foo')
    expect(wrapper.text()).toEqual('foobar')
  })

  it('renders HTML as default slot content', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {
        value: 'foo',
      },
      slots: {
        default: '<b>Bold</b>',
      },
    })

    expect(wrapper.element.tagName).toBe('OPTION')
    expect(wrapper.attributes('value')).toEqual('foo')

    const $bold = wrapper.get('b')
    expect($bold.text()).toEqual('Bold')
  })

  it('has disabled attribute applied when disabled=true', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {
        value: 'foo',
        disabled: true,
      },
    })

    expect(wrapper.element.tagName).toBe('OPTION')
    expect(wrapper.attributes('value')).toEqual('foo')
    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.text()).toEqual('')
  })

  it('applies class prop to option element', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {
        value: 'foo',
        class: 'custom-class',
      },
    })

    expect(wrapper.element.tagName).toBe('OPTION')
    expect(wrapper.classes()).toContain('custom-class')
  })

  it('applies class object prop to option element', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {
        value: 'foo',
        class: {'class-a': true, 'class-b': false},
      },
    })

    expect(wrapper.element.tagName).toBe('OPTION')
    expect(wrapper.classes()).toContain('class-a')
    expect(wrapper.classes()).not.toContain('class-b')
  })

  it('applies attrs prop to option element', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {
        value: 'foo',
        attrs: {'data-test': 'test-value', 'data-id': '123'},
      },
    })

    expect(wrapper.element.tagName).toBe('OPTION')
    expect(wrapper.attributes('data-test')).toBe('test-value')
    expect(wrapper.attributes('data-id')).toBe('123')
  })

  it('applies both class and attrs props to option element', () => {
    const wrapper = mount(BFormSelectOption, {
      props: {
        value: 'foo',
        class: 'custom-class',
        attrs: {'data-test': 'test-value'},
      },
    })

    expect(wrapper.element.tagName).toBe('OPTION')
    expect(wrapper.classes()).toContain('custom-class')
    expect(wrapper.attributes('data-test')).toBe('test-value')
  })
})
