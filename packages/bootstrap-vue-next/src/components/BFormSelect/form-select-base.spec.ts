import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import {h, ref} from 'vue'
import BFormSelectBase from './BFormSelectBase.vue'
import {formGroupKey} from '../../utils/keys'

describe('form-select-base', () => {
  enableAutoUnmount(afterEach)

  // --- Rendering / Structure ---

  it('renders a select element', () => {
    const wrapper = mount(BFormSelectBase)
    expect(wrapper.element.tagName).toBe('SELECT')
  })

  it('has form-select class by default', () => {
    const wrapper = mount(BFormSelectBase)
    expect(wrapper.classes()).toContain('form-select')
  })

  it('has auto-generated id attribute', () => {
    const wrapper = mount(BFormSelectBase)
    const id = wrapper.attributes('id')
    expect(id).toBeDefined()
    expect(id!.length).toBeGreaterThan(0)
  })

  it('uses custom id when provided', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {id: 'my-select'},
    })
    expect(wrapper.attributes('id')).toBe('my-select')
  })

  it('id prop is reactive', async () => {
    const wrapper = mount(BFormSelectBase, {
      props: {id: 'first-id'},
    })
    expect(wrapper.attributes('id')).toBe('first-id')
    await wrapper.setProps({id: 'second-id'})
    expect(wrapper.attributes('id')).toBe('second-id')
  })

  // --- CSS Classes ---

  it('has form-select class when plain is false (default)', () => {
    const wrapper = mount(BFormSelectBase)
    expect(wrapper.classes()).toContain('form-select')
    expect(wrapper.classes()).not.toContain('form-control')
  })

  it('has form-select-sm class when size is sm', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {size: 'sm'},
    })
    expect(wrapper.classes()).toContain('form-select')
    expect(wrapper.classes()).toContain('form-select-sm')
  })

  it('has form-select-lg class when size is lg', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {size: 'lg'},
    })
    expect(wrapper.classes()).toContain('form-select')
    expect(wrapper.classes()).toContain('form-select-lg')
  })

  it('does not have size class when size is md (default)', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {size: 'md'},
    })
    expect(wrapper.classes()).toContain('form-select')
    expect(wrapper.classes()).not.toContain('form-select-md')
  })

  it('has form-control class when plain is true', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {plain: true},
    })
    expect(wrapper.classes()).toContain('form-control')
    expect(wrapper.classes()).not.toContain('form-select')
  })

  it('has form-control-sm class when plain is true and size is sm', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {plain: true, size: 'sm'},
    })
    expect(wrapper.classes()).toContain('form-control')
    expect(wrapper.classes()).toContain('form-control-sm')
    expect(wrapper.classes()).not.toContain('form-select')
  })

  it('has form-control-lg class when plain is true and size is lg', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {plain: true, size: 'lg'},
    })
    expect(wrapper.classes()).toContain('form-control')
    expect(wrapper.classes()).toContain('form-control-lg')
  })

  it('does not have form-control size class when plain is true and size is md', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {plain: true, size: 'md'},
    })
    expect(wrapper.classes()).toContain('form-control')
    expect(wrapper.classes()).not.toContain('form-control-md')
  })

  it('has is-valid class when state is true', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {state: true},
    })
    expect(wrapper.classes()).toContain('is-valid')
    expect(wrapper.classes()).not.toContain('is-invalid')
  })

  it('has is-invalid class when state is false', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {state: false},
    })
    expect(wrapper.classes()).toContain('is-invalid')
    expect(wrapper.classes()).not.toContain('is-valid')
  })

  it('has no state class when state is null (default)', () => {
    const wrapper = mount(BFormSelectBase)
    expect(wrapper.classes()).not.toContain('is-valid')
    expect(wrapper.classes()).not.toContain('is-invalid')
  })

  it('state class is reactive', async () => {
    const wrapper = mount(BFormSelectBase, {
      props: {state: null},
    })
    expect(wrapper.classes()).not.toContain('is-valid')
    expect(wrapper.classes()).not.toContain('is-invalid')

    await wrapper.setProps({state: true})
    expect(wrapper.classes()).toContain('is-valid')

    await wrapper.setProps({state: false})
    expect(wrapper.classes()).toContain('is-invalid')
    expect(wrapper.classes()).not.toContain('is-valid')

    await wrapper.setProps({state: null})
    expect(wrapper.classes()).not.toContain('is-valid')
    expect(wrapper.classes()).not.toContain('is-invalid')
  })

  it('size class is reactive', async () => {
    const wrapper = mount(BFormSelectBase, {
      props: {size: 'sm'},
    })
    expect(wrapper.classes()).toContain('form-select-sm')

    await wrapper.setProps({size: 'lg'})
    expect(wrapper.classes()).toContain('form-select-lg')
    expect(wrapper.classes()).not.toContain('form-select-sm')

    await wrapper.setProps({size: 'md'})
    expect(wrapper.classes()).not.toContain('form-select-lg')
    expect(wrapper.classes()).not.toContain('form-select-md')
  })

  it('plain class is reactive', async () => {
    const wrapper = mount(BFormSelectBase, {
      props: {plain: false},
    })
    expect(wrapper.classes()).toContain('form-select')
    expect(wrapper.classes()).not.toContain('form-control')

    await wrapper.setProps({plain: true})
    expect(wrapper.classes()).toContain('form-control')
    expect(wrapper.classes()).not.toContain('form-select')
  })

  // --- Attributes ---

  it('has name attribute when name prop is set', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {name: 'my-select'},
    })
    expect(wrapper.attributes('name')).toBe('my-select')
  })

  it('has form attribute when form prop is set', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {form: 'my-form'},
    })
    expect(wrapper.attributes('form')).toBe('my-form')
  })

  it('does not have form attribute when form prop is not set', () => {
    const wrapper = mount(BFormSelectBase)
    expect(wrapper.attributes('form')).toBeUndefined()
  })

  it('has disabled attribute when disabled is true', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {disabled: true},
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('does not have disabled attribute when disabled is false', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {disabled: false},
    })
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('disabled is reactive', async () => {
    const wrapper = mount(BFormSelectBase, {
      props: {disabled: false},
    })
    expect(wrapper.attributes('disabled')).toBeUndefined()

    await wrapper.setProps({disabled: true})
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('has required attribute when required is true', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {required: true},
    })
    expect(wrapper.attributes('required')).toBeDefined()
  })

  it('does not have required attribute when required is false', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {required: false},
    })
    expect(wrapper.attributes('required')).toBeUndefined()
  })

  it('has aria-required attribute when required is true', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {required: true},
    })
    expect(wrapper.attributes('aria-required')).toBe('true')
  })

  it('does not have aria-required attribute when required is false', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {required: false},
    })
    expect(wrapper.attributes('aria-required')).toBeUndefined()
  })

  it('has multiple attribute when multiple is true', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {multiple: true},
    })
    expect(wrapper.attributes('multiple')).toBeDefined()
  })

  it('does not have multiple attribute when multiple is false', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {multiple: false},
    })
    expect(wrapper.attributes('multiple')).toBeUndefined()
  })

  it('has HTML size attribute when selectSize > 0 and plain is false', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {selectSize: 5, plain: false},
    })
    expect(wrapper.attributes('size')).toBe('5')
  })

  it('does not have HTML size attribute when selectSize is 0', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {selectSize: 0},
    })
    expect(wrapper.attributes('size')).toBeUndefined()
  })

  it('does not have HTML size attribute when plain is true', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {selectSize: 5, plain: true},
    })
    expect(wrapper.attributes('size')).toBeUndefined()
  })

  // --- aria-invalid ---

  it('has aria-invalid=true when ariaInvalid is true', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {ariaInvalid: true},
    })
    expect(wrapper.attributes('aria-invalid')).toBe('true')
  })

  it('has aria-invalid with string value when ariaInvalid is a string', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {ariaInvalid: 'grammar'},
    })
    expect(wrapper.attributes('aria-invalid')).toBe('grammar')
  })

  it('has aria-invalid=true when state is false and ariaInvalid is not set', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {state: false},
    })
    expect(wrapper.attributes('aria-invalid')).toBe('true')
  })

  it('has aria-invalid=false when ariaInvalid is false', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {ariaInvalid: false},
    })
    expect(wrapper.attributes('aria-invalid')).toBe('false')
  })

  it('does not have aria-invalid when state is null and ariaInvalid is not set', () => {
    const wrapper = mount(BFormSelectBase)
    expect(wrapper.attributes('aria-invalid')).toBeUndefined()
  })

  // --- Options Rendering ---

  it('renders string options', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {options: ['one', 'two', 'three']},
    })
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(3)
    expect(options[0].text()).toBe('one')
    expect(options[0].attributes('value')).toBe('one')
    expect(options[1].text()).toBe('two')
    expect(options[2].text()).toBe('three')
  })

  it('renders number options', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {options: [1, 2, 3]},
    })
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(3)
    expect(options[0].text()).toBe('1')
    expect(options[0].attributes('value')).toBe('1')
    expect(options[1].text()).toBe('2')
    expect(options[2].text()).toBe('3')
  })

  it('renders object options with value and text', () => {
    const wrapper = mount(BFormSelectBase, {
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

  it('renders disabled options', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {
        options: [
          {value: 'a', text: 'A', disabled: true},
          {value: 'b', text: 'B'},
        ],
      },
    })
    const options = wrapper.findAll('option')
    expect(options[0].attributes('disabled')).toBeDefined()
    expect(options[1].attributes('disabled')).toBeUndefined()
  })

  it('renders options with custom field names', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {
        valueField: 'id',
        textField: 'name',
        disabledField: 'inactive',
        options: [
          {id: 1, name: 'First', inactive: false},
          {id: 2, name: 'Second', inactive: true},
        ],
      },
    })
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(2)
    expect(options[0].text()).toBe('First')
    expect(options[0].attributes('value')).toBe('1')
    expect(options[0].attributes('disabled')).toBeUndefined()
    expect(options[1].text()).toBe('Second')
    expect(options[1].attributes('disabled')).toBeDefined()
  })

  it('renders complex options as option groups', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {
        options: [
          {
            label: 'Fruits',
            options: [
              {value: 'apple', text: 'Apple'},
              {value: 'banana', text: 'Banana'},
            ],
          },
          {
            label: 'Veggies',
            options: [{value: 'carrot', text: 'Carrot'}],
          },
        ],
      },
    })
    const optgroups = wrapper.findAll('optgroup')
    expect(optgroups).toHaveLength(2)
    expect(optgroups[0].attributes('label')).toBe('Fruits')
    expect(optgroups[1].attributes('label')).toBe('Veggies')

    const options = wrapper.findAll('option')
    expect(options).toHaveLength(3)
  })

  it('renders empty when options is empty array', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {options: []},
    })
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(0)
  })

  it('options are reactive', async () => {
    const wrapper = mount(BFormSelectBase, {
      props: {options: ['one', 'two']},
    })
    expect(wrapper.findAll('option')).toHaveLength(2)

    await wrapper.setProps({options: ['a', 'b', 'c']})
    expect(wrapper.findAll('option')).toHaveLength(3)
    expect(wrapper.findAll('option')[0].text()).toBe('a')
  })

  // --- Slots ---

  it('renders first slot before options', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {options: ['one', 'two']},
      slots: {
        first: h('option', {value: ''}, 'Please select'),
      },
    })
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(3)
    expect(options[0].text()).toBe('Please select')
    expect(options[0].attributes('value')).toBe('')
    expect(options[1].text()).toBe('one')
    expect(options[2].text()).toBe('two')
  })

  it('renders default slot after options', () => {
    const wrapper = mount(BFormSelectBase, {
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

  it('option scoped slot receives option data', () => {
    let receivedProps: Record<string, unknown> | undefined
    mount(BFormSelectBase, {
      props: {
        options: [{value: 'a', text: 'Option A'}],
      },
      slots: {
        option: (props: Record<string, unknown>) => {
          receivedProps = props
          return 'custom text'
        },
      },
    })
    expect(receivedProps).toBeDefined()
    expect(receivedProps?.text).toBe('Option A')
    expect(receivedProps?.value).toBe('a')
  })

  it('renders all three slots in correct order', () => {
    const wrapper = mount(BFormSelectBase, {
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

  // --- modelValue / events ---

  it('emits update:modelValue when value changes', async () => {
    const wrapper = mount(BFormSelectBase, {
      props: {
        modelValue: 'one',
        options: ['one', 'two', 'three'],
      },
    })
    const select = wrapper.find('select')
    await select.setValue('two')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['two'])
  })

  it('selected option reflects modelValue', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {
        modelValue: 'two',
        options: ['one', 'two', 'three'],
      },
    })
    const options = wrapper.findAll('option')
    const selected = options.find((o) => o.attributes('selected') !== undefined)
    expect(selected).toBeDefined()
    expect(selected?.attributes('value')).toBe('two')
  })

  // --- formGroupKey injection ---

  it('inherits disabled from form group', () => {
    const disabled = ref(true)
    const state = ref<boolean | undefined>(undefined)
    const wrapper = mount(BFormSelectBase, {
      global: {
        provide: {
          [formGroupKey as unknown as symbol]: () => ({state, disabled}),
        },
      },
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('own disabled OR form group disabled results in disabled', () => {
    const disabled = ref(true)
    const state = ref<boolean | undefined>(undefined)
    const wrapper = mount(BFormSelectBase, {
      props: {disabled: false},
      global: {
        provide: {
          [formGroupKey as unknown as symbol]: () => ({state, disabled}),
        },
      },
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('is not disabled when both own and form group disabled are false', () => {
    const disabled = ref(false)
    const state = ref<boolean | undefined>(undefined)
    const wrapper = mount(BFormSelectBase, {
      props: {disabled: false},
      global: {
        provide: {
          [formGroupKey as unknown as symbol]: () => ({state, disabled}),
        },
      },
    })
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  // --- formSelectKey provide ---

  it('provides formSelectKey context to child BFormSelectOption', () => {
    const wrapper = mount(BFormSelectBase, {
      props: {
        modelValue: 'two',
        options: ['one', 'two', 'three'],
      },
    })
    const options = wrapper.findAll('option')
    // The option with value 'two' should have the selected attribute from context injection
    const selectedOption = options.find((o) => o.attributes('value') === 'two')
    expect(selectedOption?.attributes('selected')).toBeDefined()

    // Other options should not be selected
    const otherOption = options.find((o) => o.attributes('value') === 'one')
    expect(otherOption?.attributes('selected')).toBeUndefined()
  })

  // --- Exposed methods ---

  it('exposes element ref', () => {
    const wrapper = mount(BFormSelectBase)
    expect(wrapper.vm.element).toBeDefined()
  })

  it('exposes focus method', () => {
    const wrapper = mount(BFormSelectBase)
    expect(typeof wrapper.vm.focus).toBe('function')
  })

  it('exposes blur method', () => {
    const wrapper = mount(BFormSelectBase)
    expect(typeof wrapper.vm.blur).toBe('function')
  })

  // --- name and form reactivity ---

  it('name is reactive', async () => {
    const wrapper = mount(BFormSelectBase, {
      props: {name: 'first-name'},
    })
    expect(wrapper.attributes('name')).toBe('first-name')
    await wrapper.setProps({name: 'second-name'})
    expect(wrapper.attributes('name')).toBe('second-name')
  })

  it('form is reactive', async () => {
    const wrapper = mount(BFormSelectBase, {
      props: {form: 'form-1'},
    })
    expect(wrapper.attributes('form')).toBe('form-1')
    await wrapper.setProps({form: 'form-2'})
    expect(wrapper.attributes('form')).toBe('form-2')
  })

  // --- Multiple selection ---

  it('emits array when multiple is true', async () => {
    const wrapper = mount(BFormSelectBase, {
      props: {
        modelValue: [],
        multiple: true,
        options: ['one', 'two', 'three'],
      },
    })
    expect(wrapper.attributes('multiple')).toBeDefined()
  })
})
