import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {h} from 'vue'
import BFormSelectOptionGroup from './BFormSelectOptionGroup.vue'

describe('form-select-option-group', () => {
  enableAutoUnmount(afterEach)

  // --- Default structure ---

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

  // --- Options rendering ---

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

  it('renders number options', () => {
    const wrapper = mount(BFormSelectOptionGroup, {
      props: {
        label: 'Numbers',
        options: [10, 20, 30],
      },
    })
    const $options = wrapper.findAll('option')
    expect($options).toHaveLength(3)
    expect($options[0].text()).toBe('10')
    expect($options[0].attributes('value')).toBe('10')
    expect($options[1].text()).toBe('20')
    expect($options[2].text()).toBe('30')
  })

  it('renders empty when options is empty array', () => {
    const wrapper = mount(BFormSelectOptionGroup, {
      props: {label: 'Empty', options: []},
    })
    expect(wrapper.findAll('option')).toHaveLength(0)
  })

  // --- Custom field names ---

  it('uses custom valueField', () => {
    const wrapper = mount(BFormSelectOptionGroup, {
      props: {
        label: 'Group',
        valueField: 'id',
        options: [
          {id: 1, text: 'First'},
          {id: 2, text: 'Second'},
        ],
      },
    })
    const $options = wrapper.findAll('option')
    expect($options[0].attributes('value')).toBe('1')
    expect($options[1].attributes('value')).toBe('2')
  })

  it('uses custom textField', () => {
    const wrapper = mount(BFormSelectOptionGroup, {
      props: {
        label: 'Group',
        textField: 'name',
        options: [
          {value: 'a', name: 'Alpha'},
          {value: 'b', name: 'Beta'},
        ],
      },
    })
    const $options = wrapper.findAll('option')
    expect($options[0].text()).toBe('Alpha')
    expect($options[1].text()).toBe('Beta')
  })

  it('uses custom disabledField', () => {
    const wrapper = mount(BFormSelectOptionGroup, {
      props: {
        label: 'Group',
        disabledField: 'inactive',
        options: [
          {value: 'a', text: 'A', inactive: true},
          {value: 'b', text: 'B', inactive: false},
        ],
      },
    })
    const $options = wrapper.findAll('option')
    expect($options[0].attributes('disabled')).toBeDefined()
    expect($options[1].attributes('disabled')).toBeUndefined()
  })

  it('uses all custom field names together', () => {
    const wrapper = mount(BFormSelectOptionGroup, {
      props: {
        label: 'Custom',
        valueField: 'id',
        textField: 'label',
        disabledField: 'locked',
        options: [
          {id: 100, label: 'Item A', locked: false},
          {id: 200, label: 'Item B', locked: true},
        ],
      },
    })
    const $options = wrapper.findAll('option')
    expect($options[0].attributes('value')).toBe('100')
    expect($options[0].text()).toBe('Item A')
    expect($options[0].attributes('disabled')).toBeUndefined()
    expect($options[1].attributes('value')).toBe('200')
    expect($options[1].text()).toBe('Item B')
    expect($options[1].attributes('disabled')).toBeDefined()
  })

  // --- Slots ---

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

  it('renders first slot before options', () => {
    const wrapper = mount(BFormSelectOptionGroup, {
      props: {
        label: 'Group',
        options: ['one', 'two'],
      },
      slots: {
        first: h('option', {value: ''}, 'Pick one'),
      },
    })
    const $options = wrapper.findAll('option')
    expect($options).toHaveLength(3)
    expect($options[0].text()).toBe('Pick one')
    expect($options[0].attributes('value')).toBe('')
    expect($options[1].text()).toBe('one')
    expect($options[2].text()).toBe('two')
  })

  it('renders default slot after options', () => {
    const wrapper = mount(BFormSelectOptionGroup, {
      props: {
        label: 'Group',
        options: ['one'],
      },
      slots: {
        default: h('option', {value: 'extra'}, 'Extra'),
      },
    })
    const $options = wrapper.findAll('option')
    expect($options).toHaveLength(2)
    expect($options[0].text()).toBe('one')
    expect($options[1].text()).toBe('Extra')
  })

  it('renders first, options, and default slots in correct order', () => {
    const wrapper = mount(BFormSelectOptionGroup, {
      props: {
        label: 'Group',
        options: ['middle'],
      },
      slots: {
        first: h('option', {value: 'first'}, 'First'),
        default: h('option', {value: 'last'}, 'Last'),
      },
    })
    const $options = wrapper.findAll('option')
    expect($options).toHaveLength(3)
    expect($options[0].text()).toBe('First')
    expect($options[1].text()).toBe('middle')
    expect($options[2].text()).toBe('Last')
  })

  it('option scoped slot receives option data', () => {
    let receivedProps: Record<string, unknown> | undefined
    mount(BFormSelectOptionGroup, {
      props: {
        label: 'Group',
        options: [{value: 'x', text: 'Option X'}],
      },
      slots: {
        option: (props: Record<string, unknown>) => {
          receivedProps = props
          return 'custom text'
        },
      },
    })
    expect(receivedProps).toBeDefined()
    expect(receivedProps?.value).toBe('x')
    expect(receivedProps?.text).toBe('Option X')
  })

  // --- Attrs inheritance ---

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

  // --- Reactivity ---

  it('options are reactive', async () => {
    const wrapper = mount(BFormSelectOptionGroup, {
      props: {
        label: 'Group',
        options: ['a', 'b'],
      },
    })
    expect(wrapper.findAll('option')).toHaveLength(2)

    await wrapper.setProps({options: ['x', 'y', 'z']})
    expect(wrapper.findAll('option')).toHaveLength(3)
    expect(wrapper.findAll('option')[0].text()).toBe('x')
  })

  it('label is reactive', async () => {
    const wrapper = mount(BFormSelectOptionGroup, {
      props: {label: 'First Label'},
    })
    expect(wrapper.attributes('label')).toBe('First Label')

    await wrapper.setProps({label: 'Second Label'})
    expect(wrapper.attributes('label')).toBe('Second Label')
  })

  // --- Label ---

  it('renders without label when label is undefined', () => {
    const wrapper = mount(BFormSelectOptionGroup, {
      props: {label: undefined},
    })
    expect(wrapper.element.tagName).toBe('OPTGROUP')
  })
})
