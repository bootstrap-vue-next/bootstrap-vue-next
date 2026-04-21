import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BFormSelect from './BFormSelect.vue'
import {h, ref} from 'vue'

describe('BFormSelect', () => {
  enableAutoUnmount(afterEach)

  // --- Rendering / Structure ---

  it('has expected default structure', () => {
    const wrapper = mount(BFormSelect)
    expect(wrapper.element.tagName).toBe('SELECT')
    expect(wrapper.classes()).toContain('form-select')
  })

  it('renders options from simple array', () => {
    const wrapper = mount(BFormSelect, {
      props: {
        options: ['one', 'two', 'three'],
      },
    })

    const options = wrapper.findAll('option')
    expect(options.length).toBe(3)
    expect(options[0].text()).toBe('one')
    expect(options[1].text()).toBe('two')
    expect(options[2].text()).toBe('three')
  })

  it('renders options from array of objects', () => {
    const wrapper = mount(BFormSelect, {
      props: {
        options: [
          {value: 1, text: 'One'},
          {value: 2, text: 'Two'},
          {value: 3, text: 'Three'},
        ],
      },
    })

    const options = wrapper.findAll('option')
    expect(options.length).toBe(3)
    expect(options[0].attributes('value')).toBe('1')
    expect(options[0].text()).toBe('One')
    expect(options[1].attributes('value')).toBe('2')
    expect(options[1].text()).toBe('Two')
    expect(options[2].attributes('value')).toBe('3')
    expect(options[2].text()).toBe('Three')
  })

  it('renders number options', () => {
    const wrapper = mount(BFormSelect, {
      props: {
        options: [10, 20, 30],
      },
    })
    const options = wrapper.findAll('option')
    expect(options.length).toBe(3)
    expect(options[0].text()).toBe('10')
    expect(options[0].attributes('value')).toBe('10')
    expect(options[1].text()).toBe('20')
    expect(options[2].text()).toBe('30')
  })

  it('renders boolean options', () => {
    const wrapper = mount(BFormSelect, {
      props: {
        options: [true, false],
      },
    })
    const options = wrapper.findAll('option')
    expect(options.length).toBe(2)
    expect(options[0].text()).toBe('true')
    expect(options[1].text()).toBe('false')
  })

  it('renders empty when options is empty array', () => {
    const wrapper = mount(BFormSelect, {
      props: {options: []},
    })
    expect(wrapper.findAll('option')).toHaveLength(0)
  })

  it('renders options with disabled property', () => {
    const wrapper = mount(BFormSelect, {
      props: {
        options: [
          {value: 'a', text: 'A', disabled: true},
          {value: 'b', text: 'B'},
          {value: 'c', text: 'C', disabled: false},
        ],
      },
    })
    const options = wrapper.findAll('option')
    expect(options[0].attributes('disabled')).toBeDefined()
    expect(options[1].attributes('disabled')).toBeUndefined()
    expect(options[2].attributes('disabled')).toBeUndefined()
  })

  // --- modelValue / SSR ---

  it('applies modelValue correctly during initial render (SSR simulation)', () => {
    const wrapper = mount(BFormSelect, {
      props: {
        modelValue: 'two',
        options: ['one', 'two', 'three'],
      },
    })

    // In SSR, we need the correct option to have the selected attribute
    const options = wrapper.findAll('option')
    expect(options.length).toBe(3)

    // The option with value 'two' should be selected
    const selectedOption = options.find((option) => option.attributes('value') === 'two')
    expect(selectedOption).toBeDefined()

    // For SSR compatibility, the selected option should have the selected attribute
    expect(selectedOption?.attributes('selected')).toBeDefined()
  })

  it('applies modelValue correctly with object options during initial render', () => {
    const wrapper = mount(BFormSelect, {
      props: {
        modelValue: 2,
        options: [
          {value: 1, text: 'One'},
          {value: 2, text: 'Two'},
          {value: 3, text: 'Three'},
        ],
      },
    })

    const options = wrapper.findAll('option')
    expect(options.length).toBe(3)

    // The option with value 2 should be selected
    const selectedOption = options.find((option) => option.attributes('value') === '2')
    expect(selectedOption).toBeDefined()

    // For SSR compatibility, the selected option should have the selected attribute
    expect(selectedOption?.attributes('selected')).toBeDefined()
  })

  it('applies modelValue correctly with option groups during initial render', () => {
    const wrapper = mount(BFormSelect, {
      props: {
        modelValue: 'two',
        options: [
          {
            label: 'Group 1',
            options: ['one', 'two'],
          },
          {
            label: 'Group 2',
            options: ['three', 'four'],
          },
        ],
      },
    })

    const optgroups = wrapper.findAll('optgroup')
    expect(optgroups.length).toBe(2)

    const allOptions = wrapper.findAll('option')
    expect(allOptions.length).toBe(4)

    // The option with value 'two' should be selected
    const selectedOption = allOptions.find((option) => option.attributes('value') === 'two')
    expect(selectedOption).toBeDefined()

    // For SSR compatibility, the selected option should have the selected attribute
    expect(selectedOption?.attributes('selected')).toBeDefined()
  })

  it('non-selected options do not have selected attribute', () => {
    const wrapper = mount(BFormSelect, {
      props: {
        modelValue: 'two',
        options: ['one', 'two', 'three'],
      },
    })
    const options = wrapper.findAll('option')
    const nonSelected = options.filter((o) => o.attributes('value') !== 'two')
    nonSelected.forEach((o) => {
      expect(o.attributes('selected')).toBeUndefined()
    })
  })

  // --- Events ---

  it('updates modelValue when option is selected', async () => {
    const modelValue = ref('one')
    const wrapper = mount(BFormSelect, {
      props: {
        'modelValue': modelValue.value,
        'onUpdate:modelValue': (value: string) => {
          modelValue.value = value
        },
        'options': ['one', 'two', 'three'],
      },
    })

    const select = wrapper.find('select')
    await select.setValue('two')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['two'])
  })

  // --- CSS Classes ---

  it('has form-select-sm class when size is sm', () => {
    const wrapper = mount(BFormSelect, {
      props: {size: 'sm'},
    })
    expect(wrapper.classes()).toContain('form-select')
    expect(wrapper.classes()).toContain('form-select-sm')
  })

  it('has form-select-lg class when size is lg', () => {
    const wrapper = mount(BFormSelect, {
      props: {size: 'lg'},
    })
    expect(wrapper.classes()).toContain('form-select')
    expect(wrapper.classes()).toContain('form-select-lg')
  })

  it('does not have size class when size is undefined (default)', () => {
    const wrapper = mount(BFormSelect)
    expect(wrapper.classes()).toContain('form-select')
    expect(wrapper.classes()).not.toContain('form-select-md')
  })

  it('has form-control class when plain is true', () => {
    const wrapper = mount(BFormSelect, {
      props: {plain: true},
    })
    expect(wrapper.classes()).toContain('form-control')
    expect(wrapper.classes()).not.toContain('form-select')
  })

  it('has form-control-sm when plain is true and size is sm', () => {
    const wrapper = mount(BFormSelect, {
      props: {plain: true, size: 'sm'},
    })
    expect(wrapper.classes()).toContain('form-control')
    expect(wrapper.classes()).toContain('form-control-sm')
  })

  it('has is-valid class when state is true', () => {
    const wrapper = mount(BFormSelect, {
      props: {state: true},
    })
    expect(wrapper.classes()).toContain('is-valid')
    expect(wrapper.classes()).not.toContain('is-invalid')
  })

  it('has is-invalid class when state is false', () => {
    const wrapper = mount(BFormSelect, {
      props: {state: false},
    })
    expect(wrapper.classes()).toContain('is-invalid')
    expect(wrapper.classes()).not.toContain('is-valid')
  })

  it('has no state class when state is null', () => {
    const wrapper = mount(BFormSelect)
    expect(wrapper.classes()).not.toContain('is-valid')
    expect(wrapper.classes()).not.toContain('is-invalid')
  })

  // --- Attributes ---

  it('has disabled attribute when disabled is true', () => {
    const wrapper = mount(BFormSelect, {
      props: {disabled: true},
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('does not have disabled attribute when disabled is false', () => {
    const wrapper = mount(BFormSelect, {
      props: {disabled: false},
    })
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('has required attribute when required is true', () => {
    const wrapper = mount(BFormSelect, {
      props: {required: true},
    })
    expect(wrapper.attributes('required')).toBeDefined()
    expect(wrapper.attributes('aria-required')).toBe('true')
  })

  it('has name attribute when name prop is set', () => {
    const wrapper = mount(BFormSelect, {
      props: {name: 'my-select'},
    })
    expect(wrapper.attributes('name')).toBe('my-select')
  })

  it('has form attribute when form prop is set', () => {
    const wrapper = mount(BFormSelect, {
      props: {form: 'my-form'},
    })
    expect(wrapper.attributes('form')).toBe('my-form')
  })

  it('has id attribute when id prop is set', () => {
    const wrapper = mount(BFormSelect, {
      props: {id: 'my-id'},
    })
    expect(wrapper.attributes('id')).toBe('my-id')
  })

  it('has multiple attribute when multiple is true', () => {
    const wrapper = mount(BFormSelect, {
      props: {multiple: true},
    })
    expect(wrapper.attributes('multiple')).toBeDefined()
  })

  it('has HTML size attribute when selectSize > 0', () => {
    const wrapper = mount(BFormSelect, {
      props: {selectSize: 4},
    })
    expect(wrapper.attributes('size')).toBe('4')
  })

  it('has aria-invalid when ariaInvalid is true', () => {
    const wrapper = mount(BFormSelect, {
      props: {ariaInvalid: true},
    })
    expect(wrapper.attributes('aria-invalid')).toBe('true')
  })

  it('has aria-invalid when state is false', () => {
    const wrapper = mount(BFormSelect, {
      props: {state: false},
    })
    expect(wrapper.attributes('aria-invalid')).toBe('true')
  })

  // --- Class / Attrs on options ---

  it('applies class to options', () => {
    const wrapper = mount(BFormSelect, {
      props: {
        options: [
          {value: 1, text: 'One', class: 'custom-class'},
          {value: 2, text: 'Two', class: 'another-class'},
          {value: 3, text: 'Three'},
        ],
      },
    })

    const options = wrapper.findAll('option')
    expect(options.length).toBe(3)
    expect(options[0].classes()).toContain('custom-class')
    expect(options[1].classes()).toContain('another-class')
    expect(options[2].classes()).not.toContain('custom-class')
  })

  it('applies class object to options', () => {
    const wrapper = mount(BFormSelect, {
      props: {
        options: [
          {value: 1, text: 'One', class: {'class-a': true, 'class-b': false}},
          {value: 2, text: 'Two', class: {'class-c': true}},
        ],
      },
    })

    const options = wrapper.findAll('option')
    expect(options.length).toBe(2)
    expect(options[0].classes()).toContain('class-a')
    expect(options[0].classes()).not.toContain('class-b')
    expect(options[1].classes()).toContain('class-c')
  })

  it('applies class array to options', () => {
    const wrapper = mount(BFormSelect, {
      props: {
        options: [
          {value: 1, text: 'One', class: ['class-a', 'class-b']},
          {value: 2, text: 'Two', class: ['class-c']},
        ],
      },
    })

    const options = wrapper.findAll('option')
    expect(options.length).toBe(2)
    expect(options[0].classes()).toContain('class-a')
    expect(options[0].classes()).toContain('class-b')
    expect(options[1].classes()).toContain('class-c')
  })

  it('applies attrs to options', () => {
    const wrapper = mount(BFormSelect, {
      props: {
        options: [
          {'value': 1, 'text': 'One', 'data-test': 'test-value'},
          {'value': 2, 'text': 'Two', 'data-id': '123'},
          {value: 3, text: 'Three'},
        ],
      },
    })

    const options = wrapper.findAll('option')
    expect(options.length).toBe(3)
    expect(options[0].attributes('data-test')).toBe('test-value')
    expect(options[1].attributes('data-id')).toBe('123')
    expect(options[2].attributes('data-test')).toBeUndefined()
  })

  it('applies class and attrs to options in option groups', () => {
    const wrapper = mount(BFormSelect, {
      props: {
        options: [
          {
            label: 'Group 1',
            options: [
              {'value': 1, 'text': 'One', 'class': 'group-class', 'data-group': '1'},
              {value: 2, text: 'Two', class: 'group-class'},
            ],
          },
        ],
      },
    })

    const options = wrapper.findAll('option')
    expect(options.length).toBe(2)
    expect(options[0].classes()).toContain('group-class')
    expect(options[0].attributes('data-group')).toBe('1')
    expect(options[1].classes()).toContain('group-class')
  })

  // --- Custom field names ---

  it('renders grouped options with custom field names', () => {
    const wrapper = mount(BFormSelect, {
      props: {
        labelField: 'name',
        valueField: 'id',
        textField: 'name',
        optionsField: 'items',
        options: [
          {
            name: 'Fruits',
            items: [
              {id: 1, name: 'Apple'},
              {id: 2, name: 'Banana'},
            ],
          },
          {
            name: 'Vegetables',
            items: [
              {id: 3, name: 'Carrot'},
              {id: 4, name: 'Potato'},
            ],
          },
        ],
      },
    })

    const optgroups = wrapper.findAll('optgroup')
    expect(optgroups.length).toBe(2)
    expect(optgroups[0].attributes('label')).toBe('Fruits')
    expect(optgroups[1].attributes('label')).toBe('Vegetables')

    const allOptions = wrapper.findAll('option')
    expect(allOptions.length).toBe(4)
    expect(allOptions[0].text()).toBe('Apple')
    expect(allOptions[0].attributes('value')).toBe('1')
    expect(allOptions[1].text()).toBe('Banana')
    expect(allOptions[1].attributes('value')).toBe('2')
    expect(allOptions[2].text()).toBe('Carrot')
    expect(allOptions[2].attributes('value')).toBe('3')
    expect(allOptions[3].text()).toBe('Potato')
    expect(allOptions[3].attributes('value')).toBe('4')
  })

  it('selects correct value in grouped options with custom field names', () => {
    const wrapper = mount(BFormSelect, {
      props: {
        modelValue: 2,
        labelField: 'name',
        valueField: 'id',
        textField: 'name',
        optionsField: 'items',
        options: [
          {
            name: 'Fruits',
            items: [
              {id: 1, name: 'Apple'},
              {id: 2, name: 'Banana'},
            ],
          },
        ],
      },
    })

    const allOptions = wrapper.findAll('option')
    expect(allOptions.length).toBe(2)

    const selectedOption = allOptions.find((option) => option.attributes('value') === '2')
    expect(selectedOption).toBeDefined()
    expect(selectedOption?.attributes('selected')).toBeDefined()
  })

  it('renders options with custom disabledField', () => {
    const wrapper = mount(BFormSelect, {
      props: {
        valueField: 'id',
        textField: 'label',
        disabledField: 'inactive',
        options: [
          {id: 1, label: 'Active', inactive: false},
          {id: 2, label: 'Inactive', inactive: true},
        ],
      },
    })
    const options = wrapper.findAll('option')
    expect(options[0].attributes('disabled')).toBeUndefined()
    expect(options[1].attributes('disabled')).toBeDefined()
  })

  // --- Slots ---

  it('renders first slot before options', () => {
    const wrapper = mount(BFormSelect, {
      props: {options: ['one', 'two']},
      slots: {
        first: h('option', {value: ''}, 'Choose...'),
      },
    })
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(3)
    expect(options[0].text()).toBe('Choose...')
    expect(options[0].attributes('value')).toBe('')
    expect(options[1].text()).toBe('one')
  })

  it('renders default slot after options', () => {
    const wrapper = mount(BFormSelect, {
      props: {options: ['one']},
      slots: {
        default: h('option', {value: 'extra'}, 'Extra'),
      },
    })
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(2)
    expect(options[0].text()).toBe('one')
    expect(options[1].text()).toBe('Extra')
  })

  it('renders first, options, and default slots in correct order', () => {
    const wrapper = mount(BFormSelect, {
      props: {options: ['middle']},
      slots: {
        first: h('option', {value: 'first'}, 'First'),
        default: h('option', {value: 'last'}, 'Last'),
      },
    })
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(3)
    expect(options[0].text()).toBe('First')
    expect(options[1].text()).toBe('middle')
    expect(options[2].text()).toBe('Last')
  })

  it('option scoped slot receives option data', () => {
    let receivedProps: Record<string, unknown> | undefined
    mount(BFormSelect, {
      props: {
        options: [{value: 'x', text: 'Option X'}],
      },
      slots: {
        option: (props: Record<string, unknown>) => {
          receivedProps = props
          return 'custom'
        },
      },
    })
    expect(receivedProps).toBeDefined()
    expect(receivedProps?.value).toBe('x')
    expect(receivedProps?.text).toBe('Option X')
  })

  // --- Options reactivity ---

  it('options are reactive', async () => {
    const wrapper = mount(BFormSelect, {
      props: {options: ['a', 'b']},
    })
    expect(wrapper.findAll('option')).toHaveLength(2)

    await wrapper.setProps({options: ['x', 'y', 'z']})
    expect(wrapper.findAll('option')).toHaveLength(3)
    expect(wrapper.findAll('option')[0].text()).toBe('x')
  })

  // --- Mixed options ---

  it('renders mixed simple and complex options', () => {
    const wrapper = mount(BFormSelect, {
      props: {
        options: [
          {value: 'solo', text: 'Solo option'},
          {
            label: 'Grouped',
            options: [
              {value: 'g1', text: 'Grouped 1'},
              {value: 'g2', text: 'Grouped 2'},
            ],
          },
        ],
      },
    })
    const optgroups = wrapper.findAll('optgroup')
    expect(optgroups).toHaveLength(1)
    expect(optgroups[0].attributes('label')).toBe('Grouped')

    const allOptions = wrapper.findAll('option')
    expect(allOptions).toHaveLength(3)
  })
})
