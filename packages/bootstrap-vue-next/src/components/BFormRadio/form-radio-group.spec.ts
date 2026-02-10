import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BFormRadioGroup from './BFormRadioGroup.vue'
import BFormRadio from './BFormRadio.vue'

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
      expect(radios[0].text()).toBe('foo')
      expect(radios[1].text()).toBe('foo')
      expect(radios[2].text()).toBe('foo')
    })

    it('renders custom field names with valueField', async () => {
      interface CustomOption {
        id: string
        label: string
      }
      const wrapper = mount<typeof BFormRadioGroup<CustomOption, 'id'>>(BFormRadioGroup, {
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
      const radios = wrapper.findAllComponents(BFormRadio)
      expect(radios).toHaveLength(3)
      expect(radios[0].text()).toBe('First')
      expect(radios[1].text()).toBe('Second')
      expect(radios[2].text()).toBe('Third')
      expect(radios[0].vm.value).toBe('a')
      expect(radios[1].vm.value).toBe('b')
      expect(radios[2].vm.value).toBe('c')
    })

    it('renders custom field names with disabledField', async () => {
      interface CustomOption {
        id: string
        label: string
        inactive: boolean
      }
      const wrapper = mount<typeof BFormRadioGroup<CustomOption, 'id'>>(BFormRadioGroup, {
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
      const radios = wrapper.findAllComponents(BFormRadio)
      expect(radios).toHaveLength(3)
      expect(radios[0].vm.disabled).toBe(false)
      expect(radios[1].vm.disabled).toBe(true)
      expect(radios[2].vm.disabled).toBe(false)
    })

    it('handles modelValue with custom valueField', async () => {
      interface CustomOption {
        id: string
        label: string
      }
      const wrapper = mount<typeof BFormRadioGroup<CustomOption, 'id'>>(BFormRadioGroup, {
        props: {
          options: [
            {id: 'a', label: 'First'},
            {id: 'b', label: 'Second'},
            {id: 'c', label: 'Third'},
          ],
          valueField: 'id',
          textField: 'label',
          modelValue: 'b',
        },
      })
      await wrapper.vm.$nextTick()

      // Verify checked state through DOM
      const inputs = wrapper.findAll('input[type="radio"]')
      expect(inputs.length).toBe(3)
      expect((inputs[1].element as HTMLInputElement).checked).toBe(true)
      expect((inputs[0].element as HTMLInputElement).checked).toBe(false)
      expect((inputs[2].element as HTMLInputElement).checked).toBe(false)
    })

    it('emits update:modelValue with custom valueField value', async () => {
      interface CustomOption {
        id: string
        label: string
      }
      const wrapper = mount<typeof BFormRadioGroup<CustomOption, 'id'>>(BFormRadioGroup, {
        props: {
          options: [
            {id: 'a', label: 'First'},
            {id: 'b', label: 'Second'},
            {id: 'c', label: 'Third'},
          ],
          valueField: 'id',
          textField: 'label',
          modelValue: 'a',
        },
      })
      const radios = wrapper.findAllComponents(BFormRadio)
      await radios[1].find('input').setValue()
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['b'])
    })

    it('handles complex nested object values', async () => {
      interface ProductOption {
        code: {id: number; type: string}
        display: string
      }
      const wrapper = mount<typeof BFormRadioGroup<ProductOption, 'code'>>(BFormRadioGroup, {
        props: {
          options: [
            {code: {id: 1, type: 'A'}, display: 'Option 1'},
            {code: {id: 2, type: 'B'}, display: 'Option 2'},
          ],
          valueField: 'code',
          textField: 'display',
        },
      })
      const radios = wrapper.findAllComponents(BFormRadio)
      expect(radios).toHaveLength(2)
      expect(radios[0].text()).toBe('Option 1')
      expect(radios[1].text()).toBe('Option 2')
      expect(radios[0].vm.value).toEqual({id: 1, type: 'A'})
      expect(radios[1].vm.value).toEqual({id: 2, type: 'B'})
    })

    it('handles numeric values with custom valueField', async () => {
      interface NumericOption {
        num: number
        name: string
      }
      const wrapper = mount<typeof BFormRadioGroup<NumericOption, 'num'>>(BFormRadioGroup, {
        props: {
          options: [
            {num: 10, name: 'Ten'},
            {num: 20, name: 'Twenty'},
            {num: 30, name: 'Thirty'},
          ],
          valueField: 'num',
          textField: 'name',
          modelValue: 20,
        },
      })
      const radios = wrapper.findAllComponents(BFormRadio)
      const inputs = wrapper.findAll('input[type="radio"]')
      expect((inputs[1].element as HTMLInputElement).checked).toBe(true)
      expect(radios[1].vm.value).toBe(20)
    })
  })
})
