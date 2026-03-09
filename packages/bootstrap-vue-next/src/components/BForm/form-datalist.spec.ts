import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BFormDatalist from './BFormDatalist.vue'

describe('form-datalist', () => {
  enableAutoUnmount(afterEach)

  it('renders a datalist element', () => {
    const wrapper = mount(BFormDatalist)
    expect(wrapper.element.tagName).toBe('DATALIST')
  })

  it('has auto-generated id attribute when no id prop', () => {
    const wrapper = mount(BFormDatalist)
    const id = wrapper.attributes('id')
    expect(id).toBeDefined()
    expect(id).toContain('datalist')
  })

  it('has custom id when id prop is provided', () => {
    const wrapper = mount(BFormDatalist, {
      props: {id: 'my-datalist'},
    })
    expect(wrapper.attributes('id')).toBe('my-datalist')
  })

  it('id prop is reactive', async () => {
    const wrapper = mount(BFormDatalist, {
      props: {id: 'first-id'},
    })
    expect(wrapper.attributes('id')).toBe('first-id')
    await wrapper.setProps({id: 'second-id'})
    expect(wrapper.attributes('id')).toBe('second-id')
  })

  it('renders string options as option elements', () => {
    const wrapper = mount(BFormDatalist, {
      props: {options: ['Apple', 'Banana', 'Cherry']},
    })
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(3)
    expect(options[0].text()).toBe('Apple')
    expect(options[1].text()).toBe('Banana')
    expect(options[2].text()).toBe('Cherry')
  })

  it('string options have correct value attributes', () => {
    const wrapper = mount(BFormDatalist, {
      props: {options: ['Apple', 'Banana']},
    })
    const options = wrapper.findAll('option')
    expect(options[0].attributes('value')).toBe('Apple')
    expect(options[1].attributes('value')).toBe('Banana')
  })

  it('renders number options converted to strings', () => {
    const wrapper = mount(BFormDatalist, {
      props: {options: [1, 2, 3]},
    })
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(3)
    expect(options[0].text()).toBe('1')
    expect(options[1].text()).toBe('2')
    expect(options[2].text()).toBe('3')
  })

  it('renders boolean options converted to strings', () => {
    const wrapper = mount(BFormDatalist, {
      props: {options: [true, false]},
    })
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(2)
    expect(options[0].text()).toBe('true')
    expect(options[1].text()).toBe('false')
  })

  it('renders object options with default value/text fields', () => {
    const wrapper = mount(BFormDatalist, {
      props: {
        options: [
          {value: 'a', text: 'Option A'},
          {value: 'b', text: 'Option B'},
        ],
      },
    })
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(2)
    expect(options[0].text()).toBe('Option A')
    expect(options[0].attributes('value')).toBe('a')
    expect(options[1].text()).toBe('Option B')
    expect(options[1].attributes('value')).toBe('b')
  })

  it('renders object options with disabled field', () => {
    const wrapper = mount(BFormDatalist, {
      props: {
        options: [
          {value: 'a', text: 'Option A', disabled: true},
          {value: 'b', text: 'Option B', disabled: false},
        ],
      },
    })
    const options = wrapper.findAll('option')
    expect(options[0].attributes('disabled')).toBeDefined()
    expect(options[1].attributes('disabled')).toBeUndefined()
  })

  it('renders object options with custom valueField', () => {
    const wrapper = mount(BFormDatalist, {
      props: {
        options: [
          {id: '1', text: 'First'},
          {id: '2', text: 'Second'},
        ],
        valueField: 'id',
      },
    })
    const options = wrapper.findAll('option')
    expect(options[0].attributes('value')).toBe('1')
    expect(options[1].attributes('value')).toBe('2')
  })

  it('renders object options with custom textField', () => {
    const wrapper = mount(BFormDatalist, {
      props: {
        options: [
          {value: 'a', label: 'Label A'},
          {value: 'b', label: 'Label B'},
        ],
        textField: 'label',
      },
    })
    const options = wrapper.findAll('option')
    expect(options[0].text()).toBe('Label A')
    expect(options[1].text()).toBe('Label B')
  })

  it('renders object options with custom disabledField', () => {
    const wrapper = mount(BFormDatalist, {
      props: {
        options: [
          {value: 'a', text: 'A', inactive: true},
          {value: 'b', text: 'B', inactive: false},
        ],
        disabledField: 'inactive',
      },
    })
    const options = wrapper.findAll('option')
    expect(options[0].attributes('disabled')).toBeDefined()
    expect(options[1].attributes('disabled')).toBeUndefined()
  })

  it('renders empty when no options are provided', () => {
    const wrapper = mount(BFormDatalist)
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(0)
  })

  it('renders default slot content after options', () => {
    const wrapper = mount(BFormDatalist, {
      props: {options: ['Apple']},
      slots: {default: '<option value="manual">Manual</option>'},
    })
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(2)
    expect(options[0].text()).toBe('Apple')
    expect(options[1].text()).toBe('Manual')
  })

  it('renders first slot content before options', () => {
    const wrapper = mount(BFormDatalist, {
      props: {options: ['Apple']},
      slots: {first: '<option value="first">First</option>'},
    })
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(2)
    expect(options[0].text()).toBe('First')
    expect(options[1].text()).toBe('Apple')
  })

  it('renders both first slot and default slot with options', () => {
    const wrapper = mount(BFormDatalist, {
      props: {options: ['Middle']},
      slots: {
        first: '<option value="first">First</option>',
        default: '<option value="last">Last</option>',
      },
    })
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(3)
    expect(options[0].text()).toBe('First')
    expect(options[1].text()).toBe('Middle')
    expect(options[2].text()).toBe('Last')
  })

  it('options prop is reactive', async () => {
    const wrapper = mount(BFormDatalist, {
      props: {options: ['Apple']},
    })
    expect(wrapper.findAll('option')).toHaveLength(1)
    expect(wrapper.findAll('option')[0].text()).toBe('Apple')
    await wrapper.setProps({options: ['Apple', 'Banana', 'Cherry']})
    expect(wrapper.findAll('option')).toHaveLength(3)
    expect(wrapper.findAll('option')[2].text()).toBe('Cherry')
  })

  it('renders mixed string and number options', () => {
    const wrapper = mount(BFormDatalist, {
      props: {options: ['Apple', 42]},
    })
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(2)
    expect(options[0].text()).toBe('Apple')
    expect(options[1].text()).toBe('42')
  })

  it('renders object option text as empty string when text field is missing', () => {
    const wrapper = mount(BFormDatalist, {
      props: {
        options: [{value: 'a'}],
      },
    })
    const options = wrapper.findAll('option')
    expect(options[0].text()).toBe('')
  })
})
