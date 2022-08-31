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
})
