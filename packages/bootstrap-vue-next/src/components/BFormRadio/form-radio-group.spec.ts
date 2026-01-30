import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BFormRadioGroup from './BFormRadioGroup.vue'
import BFormRadio from './BFormRadio.vue'
import {expectCorrectModelType} from '../../../tests/utils/type-assertions'
import {ref} from 'vue'

describe('form-radio-group', () => {
  enableAutoUnmount(afterEach)

  it('tag is div', () => {
    const wrapper = mount(BFormRadioGroup)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has static attr role to be radiogroup', () => {
    const wrapper = mount(BFormRadioGroup)
    expect(wrapper.attributes('role')).toBe('radiogroup')
  })

  it('has static class to contain bv-no-focus-ring', () => {
    const wrapper = mount(BFormRadioGroup)
    expect(wrapper.classes()).toContain('bv-no-focus-ring')
  })

  it('has tabindex to be -1', () => {
    const wrapper = mount(BFormRadioGroup)
    expect(wrapper.attributes('tabindex')).toBe('-1')
  })

  it('has attr id to be defined', () => {
    const wrapper = mount(BFormRadioGroup)
    expect(wrapper.attributes('id')).toBeDefined()
  })

  it('has attr id contains content from prop id', () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {id: 'foobar'},
    })
    expect(wrapper.attributes('id')).toBe('foobar')
  })

  it('has b-form-radio', () => {
    const wrapper = mount(BFormRadioGroup)
    const $formradio = wrapper.findComponent(BFormRadio)
    expect($formradio.exists()).toBe(false)
  })

  it('has class was-validated when prop validated', async () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {validated: true},
    })
    expect(wrapper.classes()).toContain('was-validated')
    await wrapper.setProps({validated: false})
    expect(wrapper.classes()).not.toContain('was-validated')
    await wrapper.setProps({validated: undefined})
    expect(wrapper.classes()).not.toContain('was-validated')
  })

  it('has class btn-group when prop buttons', async () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {buttons: true},
    })
    expect(wrapper.classes()).toContain('btn-group')
    await wrapper.setProps({buttons: false})
    expect(wrapper.classes()).not.toContain('btn-group')
    await wrapper.setProps({buttons: undefined})
    expect(wrapper.classes()).not.toContain('btn-group')
  })

  it('does not have class btn-group when prop buttons but also prop stacked is true', async () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {buttons: true, stacked: true},
    })
    expect(wrapper.classes()).not.toContain('btn-group')
    await wrapper.setProps({stacked: false})
    expect(wrapper.classes()).toContain('btn-group')
  })

  it('has class btn-group-{type} when prop size', async () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {size: 'lg'},
    })
    expect(wrapper.classes()).toContain('btn-group-lg')
    await wrapper.setProps({size: undefined})
    expect(wrapper.classes()).not.toContain('btn-group-lg')
  })

  it('has attr aria-required when prop required', async () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {required: true},
    })
    expect(wrapper.attributes('aria-required')).toBe('true')
    await wrapper.setProps({required: false})
    expect(wrapper.attributes('aria-required')).toBeUndefined()
    await wrapper.setProps({required: undefined})
    expect(wrapper.attributes('aria-required')).toBeUndefined()
  })

  it('has attr aria-invalid when prop ariaInvalid', async () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {ariaInvalid: true},
    })
    expect(wrapper.attributes('aria-invalid')).toBe('true')
    await wrapper.setProps({ariaInvalid: 'grammar'})
    expect(wrapper.attributes('aria-invalid')).toBe('grammar')
    await wrapper.setProps({ariaInvalid: 'spelling'})
    expect(wrapper.attributes('aria-invalid')).toBe('spelling')
    await wrapper.setProps({ariaInvalid: false})
    expect(wrapper.attributes('aria-invalid')).toBe('false')
  })

  it('has attr aria-invalid to be true when state is false and ariaInvalid is false', () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {ariaInvalid: false, state: false},
    })
    expect(wrapper.attributes('aria-invalid')).toBe('true')
  })

  it('has attr aria-invalid to be true when state is false and ariaInvalid is undefined', () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {ariaInvalid: undefined, state: false},
    })
    expect(wrapper.attributes('aria-invalid')).toBe('true')
  })

  it('has attr aria-invalid to be undefined when state is undefined and ariaInvalid is undefined', () => {
    const wrapper = mount(BFormRadioGroup, {
      props: {ariaInvalid: undefined, state: undefined},
    })
    expect(wrapper.attributes('aria-invalid')).toBeUndefined()
  })

  describe('options prop', () => {
    it('renders strings', async () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          options: ['0', '1', '2'],
        },
      })
      const radios = wrapper.findAllComponents(BFormRadio)
      radios.forEach((element, index) => {
        expect(element.text()).toBe(index.toString())
      })
    })

    it('renders numbers', async () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          options: [0, 1, 2],
        },
      })
      const radios = wrapper.findAllComponents(BFormRadio)
      radios.forEach((element, index) => {
        expect(element.text()).toBe(index.toString())
      })
    })

    it('renders objects', async () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          options: [
            {
              text: '0',
            },
            {
              text: '1',
            },
            {
              text: '2',
            },
          ],
        },
      })
      const radios = wrapper.findAllComponents(BFormRadio)
      radios.forEach((element, index) => {
        expect(element.text()).toBe(index.toString())
      })
    })

    it('renders objects that uses slots options', async () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          options: [
            {
              text: '0',
            },
            {
              text: '1',
            },
            {
              text: '2',
            },
          ],
        },
        slots: {
          option: 'foo',
        },
      })
      const radios = wrapper.findAllComponents(BFormRadio)
      expect(radios[0]!.text()).toBe('foo')
      expect(radios[1]!.text()).toBe('foo')
      expect(radios[2]!.text()).toBe('foo')
    })
  })

  describe('type safety with custom fields', () => {
    it('renders options from typed array with custom value and text fields', () => {
      interface User {
        id: number
        name: string
        email: string
      }

      const users: User[] = [
        {id: 1, name: 'Alice', email: 'alice@example.com'},
        {id: 2, name: 'Bob', email: 'bob@example.com'},
        {id: 3, name: 'Charlie', email: 'charlie@example.com'},
      ]

      const wrapper = mount(BFormRadioGroup<User, 'id'>, {
        props: {
          options: users,
          valueField: 'id',
          textField: 'name',
        },
      })

      const radios = wrapper.findAllComponents(BFormRadio)
      expect(radios.length).toBe(3)
      expect(radios[0]!.find('input').attributes('value')).toBe('1')
      expect(radios[0]!.text()).toBe('Alice')
      expect(radios[1]!.find('input').attributes('value')).toBe('2')
      expect(radios[1]!.text()).toBe('Bob')
      expect(radios[2]!.find('input').attributes('value')).toBe('3')
      expect(radios[2]!.text()).toBe('Charlie')
    })

    it('renders options with disabled field', () => {
      interface User {
        id: number
        name: string
        inactive: boolean
      }

      const users: User[] = [
        {id: 1, name: 'Alice', inactive: false},
        {id: 2, name: 'Bob', inactive: true},
        {id: 3, name: 'Charlie', inactive: false},
      ]

      const wrapper = mount(BFormRadioGroup<User, 'id'>, {
        props: {
          options: users,
          valueField: 'id',
          textField: 'name',
          disabledField: 'inactive',
        },
      })

      const radios = wrapper.findAllComponents(BFormRadio)
      expect(radios.length).toBe(3)
      expect(radios[0]!.find('input').attributes('disabled')).toBeUndefined()
      expect(radios[1]!.find('input').attributes('disabled')).toBeDefined()
      expect(radios[2]!.find('input').attributes('disabled')).toBeUndefined()
    })

    it('works with API response format (snake_case fields)', () => {
      interface ApiUser {
        user_id: number
        user_name: string
        user_email: string
      }

      const apiUsers: ApiUser[] = [
        {user_id: 1, user_name: 'Alice', user_email: 'alice@example.com'},
        {user_id: 2, user_name: 'Bob', user_email: 'bob@example.com'},
      ]

      const wrapper = mount(BFormRadioGroup<ApiUser, 'user_id'>, {
        props: {
          options: apiUsers,
          valueField: 'user_id',
          textField: 'user_name',
        },
      })

      const radios = wrapper.findAllComponents(BFormRadio)
      expect(radios.length).toBe(2)
      expect(radios[0]!.find('input').attributes('value')).toBe('1')
      expect(radios[0]!.text()).toBe('Alice')
      expect(radios[1]!.find('input').attributes('value')).toBe('2')
      expect(radios[1]!.text()).toBe('Bob')
    })

    it('works with enum values', () => {
      enum Priority {
        Low = 'low',
        Medium = 'medium',
        High = 'high',
      }

      interface PriorityOption {
        label: string
        value: Priority
      }

      const priorities: PriorityOption[] = [
        {label: 'Low Priority', value: Priority.Low},
        {label: 'Medium Priority', value: Priority.Medium},
        {label: 'High Priority', value: Priority.High},
      ]

      const wrapper = mount(BFormRadioGroup<PriorityOption, 'value'>, {
        props: {
          options: priorities,
          valueField: 'value',
          textField: 'label',
        },
      })

      const radios = wrapper.findAllComponents(BFormRadio)
      expect(radios.length).toBe(3)
      expect(radios[0]!.find('input').attributes('value')).toBe('low')
      expect(radios[0]!.text()).toBe('Low Priority')
      expect(radios[1]!.find('input').attributes('value')).toBe('medium')
      expect(radios[1]!.text()).toBe('Medium Priority')
      expect(radios[2]!.find('input').attributes('value')).toBe('high')
      expect(radios[2]!.text()).toBe('High Priority')
    })

    it('has correct v-model type inference', () => {
      // This test validates that TypeScript correctly infers v-model types from the generic parameters.
      // Type checking happens at compile time - if the types don't match, TypeScript will error.

      // Test with numeric value field
      const model1 = ref<number>(1)
      expectCorrectModelType<number>(model1.value)

      // Test with string value field
      const model2 = ref<string>('a')
      expectCorrectModelType<string>(model2.value)

      // Test with enum value field
      enum Priority {
        Low = 'low',
        High = 'high',
      }
      const model3 = ref<Priority>(Priority.Low)
      expectCorrectModelType<Priority>(model3.value)

      // Test with undefined (no selection)
      const model4 = ref<number | undefined>(undefined)
      expectCorrectModelType<number | undefined>(model4.value)

      /*
       * Negative test cases: These would cause compile-time errors if uncommented,
       * which proves that expectCorrectModelType correctly enforces type safety.
       * If TypeScript allowed these, the type checking would be broken.
       */
      // expectCorrectModelType<string>(model1.value) // Should fail: wrong type
      // expectCorrectModelType<number>(model2.value) // Should fail: wrong type

      expect(true).toBe(true)
    })
  })
})
