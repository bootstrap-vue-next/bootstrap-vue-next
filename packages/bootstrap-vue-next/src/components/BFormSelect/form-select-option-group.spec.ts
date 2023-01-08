import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it, vitest} from 'vitest'
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

  it('has option elements from options legacy object format', () => {
    const spyWarn = vitest.spyOn(console, 'warn').mockImplementationOnce((fn) => fn)
    const wrapper = mount(BFormSelectOptionGroup, {
      props: {
        label: 'foo',
        options: {one: 1, two: {value: 2, text: 'Two'}, three: 'three'},
      },
    })

    expect(wrapper.element.tagName).toBe('OPTGROUP')
    expect(wrapper.attributes('label')).toEqual('foo')

    const $options = wrapper.findAll('option')
    expect($options.length).toBe(3)
    expect($options[0].text()).toBe('1')
    expect($options[1].text()).toBe('Two')
    expect($options[2].text()).toBe('three')

    expect(spyWarn).toHaveBeenLastCalledWith(
      '[BootstrapVue warn]: BFormSelectOptionGroup - Setting prop "options" to an object is deprecated. Use the array format instead.'
    )
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
})
