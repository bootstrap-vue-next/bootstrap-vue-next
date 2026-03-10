import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BFormDatalistBase from './BFormDatalistBase.vue'
import BFormSelectOption from '../BFormSelect/BFormSelectOption.vue'

describe('form-datalist-base', () => {
  enableAutoUnmount(afterEach)

  it('tag is datalist', () => {
    const wrapper = mount(BFormDatalistBase)
    expect(wrapper.element.tagName).toBe('DATALIST')
  })

  it('has attr id when prop id is set', () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {id: 'my-datalist'},
    })
    expect(wrapper.attributes('id')).toBe('my-datalist')
  })

  it('has a generated id when prop id is not set', () => {
    const wrapper = mount(BFormDatalistBase)
    expect(wrapper.attributes('id')).toBeDefined()
    expect(wrapper.attributes('id')).not.toBe('')
  })

  it('id is reactive', async () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {id: 'first-id'},
    })
    expect(wrapper.attributes('id')).toBe('first-id')
    await wrapper.setProps({id: 'second-id'})
    expect(wrapper.attributes('id')).toBe('second-id')
  })

  it('renders default slot', () => {
    const wrapper = mount(BFormDatalistBase, {
      slots: {default: '<option value="custom">Custom</option>'},
    })
    const options = wrapper.findAll('option')
    const customOption = options.find((o) => o.attributes('value') === 'custom')
    expect(customOption).toBeDefined()
    expect(customOption?.text()).toBe('Custom')
  })

  it('renders first slot', () => {
    const wrapper = mount(BFormDatalistBase, {
      slots: {first: '<option value="first">First</option>'},
    })
    const options = wrapper.findAll('option')
    const firstOption = options.find((o) => o.attributes('value') === 'first')
    expect(firstOption).toBeDefined()
    expect(firstOption?.text()).toBe('First')
  })

  it('renders first slot before options and default slot after options', () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {
        options: [{value: 'mid', text: 'Mid'}],
      },
      slots: {
        first: '<option value="first">First</option>',
        default: '<option value="last">Last</option>',
      },
    })
    const options = wrapper.findAll('option')
    expect(options.length).toBe(3)
    expect(options[0].attributes('value')).toBe('first')
    expect(options[1].attributes('value')).toBe('mid')
    expect(options[2].attributes('value')).toBe('last')
  })

  it('renders string options', () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {
        options: ['Apple', 'Banana', 'Cherry'],
      },
    })
    const options = wrapper.findAll('option')
    expect(options.length).toBe(3)
    expect(options[0].text()).toBe('Apple')
    expect(options[1].text()).toBe('Banana')
    expect(options[2].text()).toBe('Cherry')
  })

  it('string options have value attribute matching text', () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {
        options: ['Apple', 'Banana'],
      },
    })
    const options = wrapper.findAll('option')
    expect(options[0].attributes('value')).toBe('Apple')
    expect(options[1].attributes('value')).toBe('Banana')
  })

  it('renders number options', () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {
        options: [1, 2, 3],
      },
    })
    const options = wrapper.findAll('option')
    expect(options.length).toBe(3)
    expect(options[0].text()).toBe('1')
    expect(options[1].text()).toBe('2')
    expect(options[2].text()).toBe('3')
  })

  it('number options have value attribute as number', () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {
        options: [10, 20],
      },
    })
    const options = wrapper.findAll('option')
    expect(options[0].attributes('value')).toBe('10')
    expect(options[1].attributes('value')).toBe('20')
  })

  it('renders object options with text and value', () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {
        options: [
          {value: 'a', text: 'Option A'},
          {value: 'b', text: 'Option B'},
        ],
      },
    })
    const options = wrapper.findAll('option')
    expect(options.length).toBe(2)
    expect(options[0].text()).toBe('Option A')
    expect(options[0].attributes('value')).toBe('a')
    expect(options[1].text()).toBe('Option B')
    expect(options[1].attributes('value')).toBe('b')
  })

  it('uses custom textField', () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {
        textField: 'label',
        options: [
          {value: 'a', label: 'Label A'},
          {value: 'b', label: 'Label B'},
        ],
      },
    })
    const options = wrapper.findAll('option')
    expect(options[0].text()).toBe('Label A')
    expect(options[1].text()).toBe('Label B')
  })

  it('uses custom valueField', () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {
        valueField: 'id',
        options: [
          {id: 1, text: 'One'},
          {id: 2, text: 'Two'},
        ],
      },
    })
    const options = wrapper.findAll('option')
    expect(options[0].attributes('value')).toBe('1')
    expect(options[1].attributes('value')).toBe('2')
  })

  it('filters out complex/grouped options', () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {
        options: [
          {value: 'a', text: 'Simple A'},
          {label: 'Group', options: [{value: 'g1', text: 'Grouped 1'}]},
          {value: 'b', text: 'Simple B'},
        ],
      },
    })
    const options = wrapper.findAll('option')
    expect(options.length).toBe(2)
    expect(options[0].text()).toBe('Simple A')
    expect(options[1].text()).toBe('Simple B')
  })

  it('renders disabled option when disabled field is true', () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {
        options: [
          {value: 'a', text: 'Enabled'},
          {value: 'b', text: 'Disabled', disabled: true},
        ],
      },
    })
    const options = wrapper.findAll('option')
    expect(options[0].attributes('disabled')).toBeUndefined()
    expect(options[1].attributes('disabled')).toBe('')
  })

  it('uses custom disabledField', () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {
        disabledField: 'inactive',
        options: [
          {value: 'a', text: 'Active', inactive: false},
          {value: 'b', text: 'Inactive', inactive: true},
        ],
      },
    })
    const options = wrapper.findAll('option')
    expect(options[0].attributes('disabled')).toBeUndefined()
    expect(options[1].attributes('disabled')).toBe('')
  })

  it('renders no options when options is empty', () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {
        options: [],
      },
    })
    const options = wrapper.findAll('option')
    expect(options.length).toBe(0)
  })

  it('renders BFormSelectOption components for each option', () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {
        options: ['Apple', 'Banana'],
      },
    })
    const selectOptions = wrapper.findAllComponents(BFormSelectOption)
    expect(selectOptions.length).toBe(2)
  })

  it('options are reactive', async () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {
        options: ['Apple'],
      },
    })
    expect(wrapper.findAll('option').length).toBe(1)
    expect(wrapper.findAll('option')[0].text()).toBe('Apple')

    await wrapper.setProps({options: ['Apple', 'Banana', 'Cherry']})
    expect(wrapper.findAll('option').length).toBe(3)
    expect(wrapper.findAll('option')[2].text()).toBe('Cherry')
  })

  it('option slot receives option data', () => {
    let receivedProps: Record<string, unknown> | undefined
    const wrapper = mount(BFormDatalistBase, {
      props: {
        options: [{value: 'a', text: 'Option A'}],
      },
      slots: {
        option: (props: Record<string, unknown>) => {
          receivedProps = props
          return 'custom'
        },
      },
    })
    expect(wrapper.findAll('option').length).toBe(1)
    expect(receivedProps).toBeDefined()
    expect(receivedProps?.text).toBe('Option A')
    expect(receivedProps?.value).toBe('a')
  })

  it('option slot fallback renders text from option', () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {
        options: [{value: 'a', text: 'Fallback Text'}],
      },
    })
    const options = wrapper.findAll('option')
    expect(options[0].text()).toBe('Fallback Text')
  })

  it('renders empty text when option has no text property', () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {
        options: [10],
      },
    })
    // Number options are normalized to {value: 10, text: '10'}
    const options = wrapper.findAll('option')
    expect(options[0].text()).toBe('10')
  })

  it('passes extra attributes from object options to option element', () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {
        options: [{'value': 'a', 'text': 'A', 'data-custom': 'test-attr'}],
      },
    })
    const options = wrapper.findAll('option')
    expect(options[0].attributes('data-custom')).toBe('test-attr')
  })

  it('renders mixed string and object options', () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {
        options: ['StringOption', {value: 'obj', text: 'Object Option'}],
      },
    })
    const options = wrapper.findAll('option')
    expect(options.length).toBe(2)
    expect(options[0].text()).toBe('StringOption')
    expect(options[1].text()).toBe('Object Option')
  })

  it('id falls back to generated id when prop id is set to undefined', async () => {
    const wrapper = mount(BFormDatalistBase, {
      props: {id: 'custom-id'},
    })
    expect(wrapper.attributes('id')).toBe('custom-id')
    await wrapper.setProps({id: undefined})
    const id = wrapper.attributes('id')
    expect(id).toBeDefined()
    expect(id).not.toBe('custom-id')
  })
})
