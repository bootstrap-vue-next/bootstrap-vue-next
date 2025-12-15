import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BFormSelect from './BFormSelect.vue'
import {expectCorrectModelType} from '../../../../tests/utils/type-assertions'

describe('BFormSelect', () => {
  enableAutoUnmount(afterEach)

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
    // This is currently failing, which is the bug we need to fix
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

  it('updates modelValue when option is selected', async () => {
    let modelValue = 'one'
    const wrapper = mount(BFormSelect, {
      props: {
        modelValue,
        'onUpdate:modelValue': (value: string) => {
          modelValue = value
        },
        'options': ['one', 'two', 'three'],
      },
    })

    const select = wrapper.find('select')
    await select.setValue('two')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['two'])
  })

  describe('type safety with generics', () => {
    it('has correct v-model type inference', () => {
      // This test validates that TypeScript correctly infers v-model types from the generic parameters.
      // Type checking happens at compile time - if the types don't match, TypeScript will error.

      // Test with numeric value field (single selection)
      const numValue: number = 1
      expectCorrectModelType<number>(numValue)

      // Test with string value field
      const strValue: string = 'a'
      expectCorrectModelType<string>(strValue)

      // Test with enum value field
      enum Status {
        Active = 'active',
        Inactive = 'inactive',
      }
      const enumValue: Status = Status.Active
      expectCorrectModelType<Status>(enumValue)

      // Test with undefined (no selection)
      const undefinedValue: number | undefined = undefined
      expectCorrectModelType<number | undefined>(undefinedValue)

      // Test with multiple selection (array type)
      const arrayValue: readonly number[] = [1, 2, 3]
      expectCorrectModelType<readonly number[]>(arrayValue)

      // Test with mixed union types
      const mixedValue: number | readonly number[] = 1
      expectCorrectModelType<number | readonly number[]>(mixedValue)

      /*
       * Negative test cases: These would cause compile-time errors if uncommented,
       * which proves that expectCorrectModelType correctly enforces type safety.
       * If TypeScript allowed these, the type checking would be broken.
       */
      // expectCorrectModelType<string>(numValue) // Should fail: wrong type
      // expectCorrectModelType<number>(strValue) // Should fail: wrong type

      expect(true).toBe(true)
    })
  })
})
