import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {h} from 'vue'
import BFormSelectOptionGroup from './BFormSelectOptionGroup.vue'

describe('form-select-option-group', () => {
  enableAutoUnmount(afterEach)

  it('has expected default structure', () => {
    const wrapper = mount(BFormSelectOptionGroup, {
      props: {
        label: 'foo',
      },
    })

    expect(wrapper.element.tagName).toBe('OPTGROUP')
    expect(wrapper.attributes('label')).toEqual('foo')
    expect(wrapper.text()).toEqual('')
  })

  it('has option elements from simple options array', () => {
    const wrapper = mount(BFormSelectOptionGroup, {
      props: {
        label: 'foo',
        options: ['one', 'two', 'three'],
      },
    })

    expect(wrapper.element.tagName).toBe('OPTGROUP')
    expect(wrapper.attributes('label')).toEqual('foo')

    const $options = wrapper.findAll('option')
    expect($options.length).toBe(3)
    expect($options[0].text()).toBe('one')
    expect($options[1].text()).toBe('two')
    expect($options[2].text()).toBe('three')
    $options.forEach(($option) => {
      expect($option.attributes('disabled')).toBeUndefined()
    })
  })

  it('has option elements from options array of objects', () => {
    const wrapper = mount(BFormSelectOptionGroup, {
      props: {
        label: 'foo',
        options: [
          {text: 'one', value: 1},
          {text: 'two', value: 2, disabled: true},
          {text: 'three', value: 3},
        ],
      },
    })

    expect(wrapper.element.tagName).toBe('OPTGROUP')
    expect(wrapper.attributes('label')).toEqual('foo')

    const $options = wrapper.findAll('option')
    expect($options.length).toBe(3)
    expect($options[0].text()).toBe('one')
    expect($options[1].text()).toBe('two')
    expect($options[2].text()).toBe('three')
    expect($options[0].attributes('value')).toBe('1')
    expect($options[1].attributes('value')).toBe('2')
    expect($options[2].attributes('value')).toBe('3')
    expect($options[0].attributes('disabled')).toBeUndefined()
    expect($options[1].attributes('disabled')).toBeDefined()
    expect($options[2].attributes('disabled')).toBeUndefined()
  })

  it('has option elements from default slot', () => {
    const wrapper = mount(BFormSelectOptionGroup, {
      props: {
        label: 'foo',
      },
      slots: {
        default: [
          h('option', {value: 1}, 'one'),
          h('option', {value: 2}, 'two'),
          h('option', {value: 3}, 'three'),
        ],
      },
    })

    expect(wrapper.element.tagName).toBe('OPTGROUP')
    expect(wrapper.attributes('label')).toEqual('foo')

    const $options = wrapper.findAll('option')
    expect($options.length).toBe(3)
    expect($options[0].text()).toBe('one')
    expect($options[1].text()).toBe('two')
    expect($options[2].text()).toBe('three')
    expect($options[0].attributes('value')).toBe('1')
    expect($options[1].attributes('value')).toBe('2')
    expect($options[2].attributes('value')).toBe('3')
  })

  it('inherits $attrs along with option attributes', () => {
    const wrapper = mount(BFormSelectOptionGroup, {
      props: {
        label: 'foo',
        options: [
          {'text': 'one', 'value': 1, 'data-option': 'opt1'},
          {text: 'two', value: 2, class: 'custom-class'},
        ],
      },
      attrs: {
        'data-group': 'test-group',
        'data-inherited': 'yes',
      },
    })

    expect(wrapper.element.tagName).toBe('OPTGROUP')

    const $options = wrapper.findAll('option')
    expect($options.length).toBe(2)

    // First option should have both its own data-option and inherited $attrs
    expect($options[0].attributes('data-option')).toBe('opt1')
    expect($options[0].attributes('data-group')).toBe('test-group')
    expect($options[0].attributes('data-inherited')).toBe('yes')

    // Second option should have its class and inherited $attrs
    expect($options[1].classes()).toContain('custom-class')
    expect($options[1].attributes('data-group')).toBe('test-group')
    expect($options[1].attributes('data-inherited')).toBe('yes')
  })
})
