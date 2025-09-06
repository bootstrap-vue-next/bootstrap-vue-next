import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BFormSelect from './BFormSelect.vue'
import {ref} from 'vue'

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
})
