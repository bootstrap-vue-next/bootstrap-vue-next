import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BFormCheckbox from './BFormCheckbox.vue'
import BFormCheckboxGroup from './BFormCheckboxGroup.vue'

describe('form-checkbox-group', () => {
  enableAutoUnmount(afterEach)

  describe('options prop', () => {
    it('renders strings', async () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: ['0', '1', '2'],
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      checkboxes.forEach((element, index) => {
        expect(element.text()).toBe(index.toString())
      })
    })

    it('renders numbers', async () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: [0, 1, 2],
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      checkboxes.forEach((element, index) => {
        expect(element.text()).toBe(index.toString())
      })
    })

    it('renders objects', async () => {
      const wrapper = mount(BFormCheckboxGroup, {
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
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      checkboxes.forEach((element, index) => {
        expect(element.text()).toBe(index.toString())
      })
    })

    it('renders objects that uses slots options()', async () => {
      const wrapper = mount(BFormCheckboxGroup, {
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
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes[0].text()).toBe('foo')
      expect(checkboxes[1].text()).toBe('foo')
      expect(checkboxes[2].text()).toBe('foo')
    })

    it('renders boolean options', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: [true, false],
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes).toHaveLength(2)
      expect(checkboxes[0].text()).toBe('true')
      expect(checkboxes[1].text()).toBe('false')
    })

    it('renders correct number of checkboxes', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: ['a', 'b', 'c', 'd', 'e'],
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes).toHaveLength(5)
    })

    it('renders no checkboxes when options is empty', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: [],
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes).toHaveLength(0)
    })
  })

  describe('custom field names', () => {
    it('renders custom field names with valueField', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: [
            {id: 'a', label: 'First'},
            {id: 'b', label: 'Second'},
            {id: 'c', label: 'Third'},
          ],
          valueField: 'id',
          textField: 'label',
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes).toHaveLength(3)
      expect(checkboxes[0].text()).toBe('First')
      expect(checkboxes[1].text()).toBe('Second')
      expect(checkboxes[2].text()).toBe('Third')
      expect(checkboxes[0].props('value')).toBe('a')
      expect(checkboxes[1].props('value')).toBe('b')
      expect(checkboxes[2].props('value')).toBe('c')
    })

    it('renders custom field names with disabledField', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: [
            {id: 'a', label: 'First', inactive: false},
            {id: 'b', label: 'Second', inactive: true},
            {id: 'c', label: 'Third', inactive: false},
          ],
          valueField: 'id',
          textField: 'label',
          disabledField: 'inactive',
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes).toHaveLength(3)
      expect(checkboxes[0].props('disabled')).toBe(false)
      expect(checkboxes[1].props('disabled')).toBe(true)
      expect(checkboxes[2].props('disabled')).toBe(false)
    })

    it('handles complex nested object values', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: [
            {code: {id: 1, type: 'A'}, display: 'Option 1'},
            {code: {id: 2, type: 'B'}, display: 'Option 2'},
          ],
          valueField: 'code',
          textField: 'display',
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes).toHaveLength(2)
      expect(checkboxes[0].text()).toBe('Option 1')
      expect(checkboxes[1].text()).toBe('Option 2')
      expect(checkboxes[0].props('value')).toEqual({id: 1, type: 'A'})
      expect(checkboxes[1].props('value')).toEqual({id: 2, type: 'B'})
    })

    it('handles numeric values with custom valueField', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: [
            {num: 10, name: 'Ten'},
            {num: 20, name: 'Twenty'},
            {num: 30, name: 'Thirty'},
          ],
          valueField: 'num',
          textField: 'name',
          modelValue: [20],
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect((inputs[1].element as HTMLInputElement).checked).toBe(true)
      expect(checkboxes[1].props('value')).toBe(20)
    })
  })

  describe('modelValue', () => {
    it('reflects checked state from modelValue', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: ['a', 'b', 'c'],
          modelValue: ['b'],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect((inputs[0].element as HTMLInputElement).checked).toBe(false)
      expect((inputs[1].element as HTMLInputElement).checked).toBe(true)
      expect((inputs[2].element as HTMLInputElement).checked).toBe(false)
    })

    it('reflects checked state for multiple selected values', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: ['a', 'b', 'c'],
          modelValue: ['a', 'c'],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect((inputs[0].element as HTMLInputElement).checked).toBe(true)
      expect((inputs[1].element as HTMLInputElement).checked).toBe(false)
      expect((inputs[2].element as HTMLInputElement).checked).toBe(true)
    })

    it('emits update:modelValue when checkbox is clicked', async () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: ['a', 'b', 'c'],
          modelValue: [],
        },
        attachTo: document.body,
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      await inputs[1].trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')?.[0][0]).toEqual(['b'])
    })

    it('emits update:modelValue with custom valueField value', async () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: [
            {id: 'a', label: 'First'},
            {id: 'b', label: 'Second'},
            {id: 'c', label: 'Third'},
          ],
          valueField: 'id',
          textField: 'label',
          modelValue: ['a'],
        },
        attachTo: document.body,
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      await inputs[1].trigger('click')
      expect(wrapper.emitted('update:modelValue')?.[0][0]).toEqual(['a', 'b'])
    })

    it('handles modelValue with custom valueField', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: [
            {id: 'a', label: 'First'},
            {id: 'b', label: 'Second'},
            {id: 'c', label: 'Third'},
          ],
          valueField: 'id',
          textField: 'label',
          modelValue: ['b'],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect((inputs[0].element as HTMLInputElement).checked).toBe(false)
      expect((inputs[1].element as HTMLInputElement).checked).toBe(true)
      expect((inputs[2].element as HTMLInputElement).checked).toBe(false)
    })
  })

  describe('disabled prop', () => {
    it('disables all checkboxes when group disabled is true', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          disabled: true,
          options: ['a', 'b', 'c'],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect(inputs[0].attributes('disabled')).toBe('')
      expect(inputs[1].attributes('disabled')).toBe('')
      expect(inputs[2].attributes('disabled')).toBe('')
    })

    it('does not disable checkboxes when group disabled is false', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          disabled: false,
          options: ['a', 'b'],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect(inputs[0].attributes('disabled')).toBeUndefined()
      expect(inputs[1].attributes('disabled')).toBeUndefined()
    })
  })

  describe('slots', () => {
    it('renders first slot', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: ['a'],
        },
        slots: {
          first: '<span class="first-slot">First!</span>',
        },
      })
      expect(wrapper.find('.first-slot').exists()).toBe(true)
      expect(wrapper.find('.first-slot').text()).toBe('First!')
    })

    it('renders default slot', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: ['a'],
        },
        slots: {
          default: '<span class="default-slot">Default!</span>',
        },
      })
      expect(wrapper.find('.default-slot').exists()).toBe(true)
      expect(wrapper.find('.default-slot').text()).toBe('Default!')
    })

    it('renders default slot with manual BFormCheckbox', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        slots: {
          default: '<BFormCheckbox value="manual">Manual Checkbox</BFormCheckbox>',
        },
        global: {
          components: {BFormCheckbox},
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes).toHaveLength(1)
      expect(checkboxes[0].text()).toBe('Manual Checkbox')
    })
  })

  describe('prop forwarding', () => {
    it('forwards buttons prop to base', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          buttons: true,
          options: ['a'],
        },
      })
      expect(wrapper.classes()).toContain('btn-group')
    })

    it('forwards stacked prop to base', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          stacked: true,
          buttons: true,
          options: ['a'],
        },
      })
      expect(wrapper.classes()).toContain('btn-group-vertical')
      expect(wrapper.classes()).not.toContain('btn-group')
    })

    it('forwards validated prop to base', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          validated: true,
          options: ['a'],
        },
      })
      expect(wrapper.classes()).toContain('was-validated')
    })

    it('forwards size prop to base', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          size: 'lg',
          options: ['a'],
        },
      })
      expect(wrapper.classes()).toContain('btn-group-lg')
    })

    it('forwards required prop to base', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          required: true,
          options: ['a'],
        },
      })
      expect(wrapper.attributes('aria-required')).toBe('true')
    })

    it('forwards ariaInvalid prop to base', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          ariaInvalid: true,
          options: ['a'],
        },
      })
      expect(wrapper.attributes('aria-invalid')).toBe('true')
    })

    it('forwards switches prop to child checkboxes', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          switches: true,
          options: ['a'],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      expect(checkbox.classes()).toContain('form-switch')
    })

    it('forwards plain prop to child checkboxes', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          plain: true,
          options: ['a'],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      expect(checkbox.classes()).not.toContain('form-check')
    })

    it('forwards reverse prop to child checkboxes', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          reverse: true,
          options: ['a'],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      expect(checkbox.classes()).toContain('form-check-reverse')
    })

    it('forwards name prop to child checkboxes', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          name: 'my-group',
          options: ['a', 'b'],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect(inputs[0].attributes('name')).toBe('my-group')
      expect(inputs[1].attributes('name')).toBe('my-group')
    })

    it('forwards form prop to child checkboxes', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          form: 'my-form',
          options: ['a', 'b'],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect(inputs[0].attributes('form')).toBe('my-form')
      expect(inputs[1].attributes('form')).toBe('my-form')
    })

    it('forwards state prop to child checkboxes', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          state: false,
          options: ['a'],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      const input = checkbox.get('input')
      expect(input.classes()).toContain('is-invalid')
    })

    it('forwards buttonVariant prop to child checkboxes', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          buttons: true,
          buttonVariant: 'danger',
          options: ['a'],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      const label = checkbox.get('label')
      expect(label.classes()).toContain('btn-danger')
    })

    it('forwards id prop to group container', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          id: 'my-group-id',
          options: ['a'],
        },
      })
      expect(wrapper.attributes('id')).toBe('my-group-id')
    })
  })

  describe('options reactivity', () => {
    it('updates checkboxes when options change', async () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: ['a', 'b'],
        },
      })
      let checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes).toHaveLength(2)
      await wrapper.setProps({options: ['a', 'b', 'c', 'd']})
      checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes).toHaveLength(4)
    })

    it('reduces checkboxes when options are removed', async () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: ['a', 'b', 'c'],
        },
      })
      let checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes).toHaveLength(3)
      await wrapper.setProps({options: ['a']})
      checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes).toHaveLength(1)
    })

    it('renders empty when options become empty array', async () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: ['a', 'b'],
        },
      })
      expect(wrapper.findAllComponents(BFormCheckbox)).toHaveLength(2)
      await wrapper.setProps({options: []})
      expect(wrapper.findAllComponents(BFormCheckbox)).toHaveLength(0)
    })
  })

  describe('missing text field fallback', () => {
    it('uses String(value) when text field is missing from object', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: [{value: 42}, {value: 'hello'}],
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes[0].text()).toBe('42')
      expect(checkboxes[1].text()).toBe('hello')
    })

    it('uses String(value) for custom valueField when textField is missing', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: [{id: 100}, {id: 200}],
          valueField: 'id',
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes[0].text()).toBe('100')
      expect(checkboxes[1].text()).toBe('200')
    })
  })

  describe('disabled with option-level disabled', () => {
    it('group disabled overrides option disabled=false', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          disabled: true,
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
          ],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect(inputs[0].attributes('disabled')).toBe('')
      expect(inputs[1].attributes('disabled')).toBe('')
    })

    it('individual options can be disabled when group is not disabled', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          disabled: false,
          options: [
            {text: 'A', value: 'a', disabled: true},
            {text: 'B', value: 'b', disabled: false},
          ],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect(inputs[0].attributes('disabled')).toBe('')
      expect(inputs[1].attributes('disabled')).toBeUndefined()
    })
  })

  describe('unchecking behavior', () => {
    it('removes value from modelValue when unchecked', async () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          'modelValue': ['a', 'b'],
          'options': ['a', 'b', 'c'],
          'onUpdate:modelValue': (e: unknown) => {
            wrapper.setProps({modelValue: e as string[]})
          },
        },
        attachTo: document.body,
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      await inputs[0].trigger('click')
      expect(wrapper.props('modelValue')).toEqual(['b'])
    })

    it('handles checking and unchecking multiple values', async () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          'modelValue': [],
          'options': ['a', 'b', 'c'],
          'onUpdate:modelValue': (e: unknown) => {
            wrapper.setProps({modelValue: e as string[]})
          },
        },
        attachTo: document.body,
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      await inputs[0].trigger('click')
      expect(wrapper.props('modelValue')).toEqual(['a'])
      await inputs[2].trigger('click')
      expect(wrapper.props('modelValue')).toEqual(['a', 'c'])
      await inputs[0].trigger('click')
      expect(wrapper.props('modelValue')).toEqual(['c'])
    })
  })

  describe('auto-generated id', () => {
    it('has a generated id when id prop is not provided', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {options: ['a']},
      })
      expect(wrapper.attributes('id')).toBeDefined()
    })
  })

  describe('default modelValue', () => {
    it('defaults to empty array when modelValue is not provided', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {options: ['a', 'b']},
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect((inputs[0].element as HTMLInputElement).checked).toBe(false)
      expect((inputs[1].element as HTMLInputElement).checked).toBe(false)
    })
  })
})
