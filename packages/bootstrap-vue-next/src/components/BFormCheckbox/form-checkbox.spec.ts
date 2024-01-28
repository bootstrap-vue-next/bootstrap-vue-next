import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BFormCheckbox from './BFormCheckbox.vue'

describe('form-checkbox', () => {
  enableAutoUnmount(afterEach)

  describe('useFormCHeck attributes', () => {
    it('tag is div', () => {
      const wrapper = mount(BFormCheckbox)
      expect(wrapper.element.tagName).toBe('DIV')
    })

    it('has class form-check if prop plain and prop button are false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: false, button: false},
      })
      expect(wrapper.classes()).toContain('form-check')
    })

    it('has class form-check if prop plain and prop button are true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: true, button: true},
      })
      expect(wrapper.classes()).not.toContain('form-check')
    })

    it('does not have class form-check if prop plain false and prop button true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: false, button: true},
      })
      expect(wrapper.classes()).not.toContain('form-check')
    })

    it('does not have class form-check if prop plain true and prop button false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: true, button: false},
      })
      expect(wrapper.classes()).not.toContain('form-check')
    })

    it('has class form-check-inline when prop inline', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {inline: true},
      })
      expect(wrapper.classes()).toContain('form-check-inline')
    })

    it('has class form-check-inline when prop inline', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {inline: false},
      })
      expect(wrapper.classes()).not.toContain('form-check-inline')
    })

    it('does not have class form-switch when prop switch is false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {switch: false},
      })
      expect(wrapper.classes()).not.toContain('form-switch')
    })

    it('has class form-control-{type} when prop size', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {size: 'lg'},
      })
      expect(wrapper.classes()).toContain('form-control-lg')
    })

    it('does not have class form-control-{type} when prop size undefined', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {size: undefined},
      })
      expect(wrapper.classes()).not.toContain('form-control-lg')
    })

    it('has class form-control-{type} when prop size is md', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {size: 'md'},
      })
      expect(wrapper.classes()).not.toContain('form-control-md')
    })
  })

  describe('input attributes', () => {
    it('has input element', () => {
      const wrapper = mount(BFormCheckbox)
      const $input = wrapper.find('input')
      expect($input.exists()).toBe(true)
    })

    it('input element has attr id', () => {
      const wrapper = mount(BFormCheckbox)
      const $input = wrapper.get('input')
      expect($input.attributes('id')).toBeDefined()
    })

    it('input element attr id contains content from prop id', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {id: 'foobar'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('id')).toBe('foobar')
    })

    it('input element has attr type to be checkbox', () => {
      const wrapper = mount(BFormCheckbox)
      const $input = wrapper.get('input')
      expect($input.attributes('type')).toBe('checkbox')
    })

    it('input element has class form-check-input when prop plain and prop button are false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: false, button: false},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).toContain('form-check-input')
    })

    it('input element does not have class form-check-input when prop plain and prop button false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: true, button: false},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).not.toContain('form-check-input')
    })

    it('input element does not have class form-check-input when prop plain false and prop button true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: false, button: true},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).not.toContain('form-check-input')
    })

    it('input element does not have class form-check-input when prop plain and prop button are true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: true, button: true},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).not.toContain('form-check-input')
    })

    it('input element has class form-check-input when prop plain and prop button are undefined', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: undefined, button: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).toContain('form-check-input')
    })

    it('input element has class btn-check when prop button is true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {button: true},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).toContain('btn-check')
    })

    it('input element does not have class btn-check when prop button is false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {button: false},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).not.toContain('btn-check')
    })

    it('input element does not have class btn-check when prop button is undefined', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {button: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).not.toContain('btn-check')
    })

    it('input element has attr disabled when prop disabled', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {disabled: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('disabled')).toBe('')
    })

    it('input element does not have attr disabled when prop disabled is false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {disabled: false},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('disabled')).toBeUndefined()
    })

    it('input element does not have attr disabled when prop disabled is undefined', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {disabled: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('disabled')).toBeUndefined()
    })

    it('input element has attr required when prop name and prop required', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {required: true, name: 'foo'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('required')).toBe('')
    })

    it('input element does not have attr required when prop name is empty string and prop required', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {required: true, name: ''},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('required')).toBeUndefined()
    })

    it('input element does not have attr required when prop name is undefined and prop required', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {required: true, name: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('required')).toBeUndefined()
    })

    it('input element does not have attr required when prop name and prop required false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {required: false, name: 'foo'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('required')).toBeUndefined()
    })

    it('input element does not have attr required when prop name and prop required undefined', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {required: undefined, name: 'foo'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('required')).toBeUndefined()
    })

    it('input element has attr name to be prop name', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {name: 'foobar'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('name')).toBe('foobar')
    })

    it('input element has attr name is undefined when prop name undefined', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {name: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('name')).toBeUndefined()
    })

    it('input element has attr form to be prop form', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {form: 'foobar'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('form')).toBe('foobar')
    })

    it('input element has attr form is undefined when prop form undefined', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {form: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('form')).toBeUndefined()
    })

    it('input element has attr aria-label to be prop ariaLabel', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {ariaLabel: 'foobar'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-label')).toBe('foobar')
    })

    it('input element has attr aria-label is undefined when prop ariaLabel undefined', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {ariaLabel: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-label')).toBeUndefined()
    })

    it('input element has attr aria-labelledby to be prop ariaLabelledby', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {ariaLabelledby: 'foobar'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-labelledby')).toBe('foobar')
    })

    it('input element has attr aria-labelledby is undefined when prop ariaLabelledby undefined', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {ariaLabelledby: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-labelledby')).toBeUndefined()
    })

    it('input element has attr aria-labelledby is undefined when prop ariaLabelledby undefined', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {ariaLabelledby: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-labelledby')).toBeUndefined()
    })

    it('input element has attr value to be prop value', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {value: 'foobar'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('value')).toBe('foobar')
    })

    it('input element has attr value to be true when value is undefined', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {value: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('value')).toBe('true')
    })

    it('input element aria-required when prop name and prop required true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {name: 'foo', required: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-required')).toBe('true')
    })

    it('input element does not have aria-required when prop name is empty string and prop required true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {name: '', required: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-required')).toBeUndefined()
    })

    it('input element does not have aria-required when prop name and prop required false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {name: 'foo', required: false},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-required')).toBeUndefined()
    })
  })

  describe('label attributes', () => {
    it('has child label by default', () => {
      const wrapper = mount(BFormCheckbox)
      const $label = wrapper.find('label')
      expect($label.exists()).toBe(true)
    })

    it('does not have child label when prop plain is true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: true},
      })
      const $label = wrapper.find('label')
      expect($label.exists()).toBe(false)
    })

    it('has child label when prop plain is false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: false},
      })
      const $label = wrapper.find('label')
      expect($label.exists()).toBe(true)
    })

    it('has child label when prop plain is false but has default slot', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: false},
        slots: {default: 'foobar'},
      })
      const $label = wrapper.find('label')
      expect($label.exists()).toBe(true)
    })

    it('has child label when prop plain is true but has default slot', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: true},
        slots: {default: 'foobar'},
      })
      const $label = wrapper.find('label')
      expect($label.exists()).toBe(true)
    })

    it('child label has attr for to be defined by default', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: false},
      })
      const $label = wrapper.get('label')
      expect($label.attributes('for')).toBeDefined()
    })

    it('child label has attr for is prop id', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: false, id: 'foobar'},
      })
      const $label = wrapper.get('label')
      expect($label.attributes('for')).toBe('foobar')
    })

    it('child label attr for is same as input id', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: false},
      })
      const $label = wrapper.get('label')
      const $input = wrapper.get('input')
      const $labelFor = $label.attributes('for')
      const $inputId = $input.attributes('id')
      expect($labelFor).toBe($inputId)
    })

    it('child label does not have class focus by default', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: false},
      })
      const $label = wrapper.get('label')
      expect($label.classes()).not.toContain('focus')
    })

    it('child label removes class focus when input is blurred after focus', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: false},
      })
      const $label = wrapper.get('label')
      const $input = wrapper.get('input')
      await $input.trigger('focus')
      await $input.trigger('blur')
      expect($label.classes()).not.toContain('focus')
    })

    it('child label has class form-check-label when prop plain and prop button are false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: false, button: false},
      })
      const $label = wrapper.get('label')
      expect($label.classes()).toContain('form-check-label')
    })

    it('child label has class form-check-label when prop plain and prop button are false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: false, button: false},
      })
      const $label = wrapper.get('label')
      expect($label.classes()).toContain('form-check-label')
    })

    it('child label does not have class form-check-label when prop plain true and prop button false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: true, button: false},
        slots: {default: 'foo'},
      })
      const $label = wrapper.get('label')
      expect($label.classes()).not.toContain('form-check-label')
    })

    it('child label does not have class form-check-label when prop plain false and prop button true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: false, button: true},
        slots: {default: 'foo'},
      })
      const $label = wrapper.get('label')
      expect($label.classes()).not.toContain('form-check-label')
    })

    it('child label does not have class form-check-label when prop plain and prop button are true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: true, button: true},
        slots: {default: 'foo'},
      })
      const $label = wrapper.get('label')
      expect($label.classes()).not.toContain('form-check-label')
    })

    it('child label has class btn when prop button', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {button: true, plain: false},
      })
      const $label = wrapper.get('label')
      expect($label.classes()).toContain('btn')
    })

    it('child label does not have class btn when prop button false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {button: false, plain: false},
      })
      const $label = wrapper.get('label')
      expect($label.classes()).not.toContain('btn')
    })

    it('child label has class btn-{type} when prop button and prop buttonVariant', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {button: true, buttonVariant: 'danger', plain: false},
      })
      const $label = wrapper.get('label')
      expect($label.classes()).toContain('btn-danger')
    })

    it('child label does not have class btn-{type} when prop button false and prop buttonVariant', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {button: false, buttonVariant: 'danger', plain: false},
      })
      const $label = wrapper.get('label')
      expect($label.classes()).not.toContain('btn-danger')
    })

    it('child label does not have class btn-{type} when prop button true and prop buttonVariant undefined', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {button: true, buttonVariant: undefined, plain: false},
      })
      const $label = wrapper.get('label')
      expect($label.classes()).not.toContain('btn-undefined')
    })

    it('child label has class btn-{type} when prop button and prop size', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {button: true, size: 'lg', plain: false},
      })
      const $label = wrapper.get('label')
      expect($label.classes()).toContain('btn-lg')
    })

    it('child label does not have class btn-{type} when prop button false and prop size', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {button: false, size: 'lg', plain: false},
      })
      const $label = wrapper.get('label')
      expect($label.classes()).not.toContain('btn-lg')
    })

    it('child label does not have class btn-{type} when prop button true and prop size undefined', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {button: true, size: undefined, plain: false},
      })
      const $label = wrapper.get('label')
      expect($label.classes()).not.toContain('btn-undefined')
    })

    it('child label does not have class btn-md when prop button true and prop size md', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {button: true, size: 'md', plain: false},
      })
      const $label = wrapper.get('label')
      expect($label.classes()).not.toContain('btn-md')
    })

    it('child label has class active when value and modelValue are not the same', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: false, value: 'foo1', modelValue: 'foo'},
      })
      const $label = wrapper.get('label')
      expect($label.classes()).not.toContain('active')
    })

    it('child label renders default slot', () => {
      const wrapper = mount(BFormCheckbox, {
        slots: {default: 'foobar'},
      })
      const $label = wrapper.get('label')
      expect($label.text()).toBe('foobar')
    })
  })

  describe('model behavior', () => {
    it('default unchecked checkbox emits input event when clicked', async () => {
      const wrapper = mount(BFormCheckbox, {props: {modelValue: false}, attachTo: document.body})

      await wrapper.find('input').trigger('click')

      expect(wrapper.emitted('input')).toBeDefined()
      expect(wrapper.emitted('input')?.length).toBe(1)
      expect(wrapper.emitted('input')?.[0][0]).toBeInstanceOf(Event)
    })

    it('default unchecked checkbox emits change event when clicked', async () => {
      const wrapper = mount(BFormCheckbox, {props: {modelValue: false}, attachTo: document.body})

      await wrapper.find('input').trigger('click')

      expect(wrapper.emitted('change')).toBeDefined()
      expect(wrapper.emitted('change')?.length).toBe(1)
      expect(wrapper.emitted('change')?.[0][0]).toBeInstanceOf(Event)
    })

    it('default unchecked checkbox emits update:modelValue===true event when clicked', async () => {
      const wrapper = mount(BFormCheckbox, {props: {modelValue: false}, attachTo: document.body})

      await wrapper.find('input').trigger('click')

      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')?.length).toBe(1)
      expect(wrapper.emitted('update:modelValue')?.[0][0]).toBe(true)
    })

    it('default checked checkbox emits input event when clicked', async () => {
      const wrapper = mount(BFormCheckbox, {props: {modelValue: true}, attachTo: document.body})

      await wrapper.find('input').trigger('click')

      expect(wrapper.emitted('input')).toBeDefined()
      expect(wrapper.emitted('input')?.length).toBe(1)
      expect(wrapper.emitted('input')?.[0][0]).toBeInstanceOf(Event)
    })

    it('default checked checkbox emits change event when clicked', async () => {
      const wrapper = mount(BFormCheckbox, {props: {modelValue: true}, attachTo: document.body})

      await wrapper.find('input').trigger('click')

      expect(wrapper.emitted('change')).toBeDefined()
      expect(wrapper.emitted('change')?.length).toBe(1)
      expect(wrapper.emitted('change')?.[0][0]).toBeInstanceOf(Event)
    })

    it('default checked checkbox emits update:modelValue===false event when clicked', async () => {
      const wrapper = mount(BFormCheckbox, {props: {modelValue: true}, attachTo: document.body})

      await wrapper.find('input').trigger('click')

      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')?.length).toBe(1)
      expect(wrapper.emitted('update:modelValue')?.[0][0]).toBe(false)
    })

    it('custom value unchecked checkbox emits input event when clicked', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {
          modelValue: 'unchecked',
          value: 'checked',
          uncheckedValue: 'unchecked',
        },
        attachTo: document.body,
      })

      await wrapper.find('input').trigger('click')

      expect(wrapper.emitted('input')).toBeDefined()
      expect(wrapper.emitted('input')?.length).toBe(1)
      expect(wrapper.emitted('input')?.[0][0]).toBeInstanceOf(Event)
    })

    it('custom value unchecked checkbox emits change event when clicked', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {value: 'checked', uncheckedValue: 'unchecked'},
        attachTo: document.body,
      })

      await wrapper.find('input').trigger('click')

      expect(wrapper.emitted('change')).toBeDefined()
      expect(wrapper.emitted('change')?.length).toBe(1)
      expect(wrapper.emitted('change')?.[0][0]).toBeInstanceOf(Event)
    })

    it('custom value unchecked checkbox emits update:modelValue==="checked" event when clicked', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {value: 'checked', uncheckedValue: 'unchecked'},
        attachTo: document.body,
      })

      await wrapper.find('input').trigger('click')

      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')?.length).toBe(1)
      expect(wrapper.emitted('update:modelValue')?.[0][0]).toBe('checked')
    })

    it('custom value checked checkbox emits input event when clicked', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {
          modelValue: 'checked',
          value: 'checked',
          uncheckedValue: 'unchecked',
        },
        attachTo: document.body,
      })

      await wrapper.find('input').trigger('click')

      expect(wrapper.emitted('input')).toBeDefined()
      expect(wrapper.emitted('input')?.length).toBe(1)
      expect(wrapper.emitted('input')?.[0][0]).toBeInstanceOf(Event)
    })

    it('custom value checked checkbox emits change event when clicked', async () => {
      const props = {
        modelValue: 'checked',
        value: 'checked',
        uncheckedValue: 'unchecked',
      }
      const wrapper = mount(BFormCheckbox, {
        props,
        attachTo: document.body,
      })

      await wrapper.find('input').trigger('click')

      expect(wrapper.emitted('change')).toBeDefined()
      expect(wrapper.emitted('change')?.length).toBe(1)
      expect(wrapper.emitted('change')?.[0][0]).toBeInstanceOf(Event)
    })

    it('custom value checked checkbox emits update:modelValue==="unhecked-value" event when clicked', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {
          modelValue: 'checked',
          value: 'checked',
          uncheckedValue: 'unchecked',
        },
        attachTo: document.body,
      })

      await wrapper.find('input').trigger('click')

      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')?.length).toBe(1)
      expect(wrapper.emitted('update:modelValue')?.[0][0]).toBe('unchecked')
    })
  })

  describe('indeterminate model behavior', () => {
    it('has attribute "indeterminate" when indeterminate prop is true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {indeterminate: true},
      })
      const $input = wrapper.find('input')
      expect($input.attributes('indeterminate')).toBeDefined()
    })

    it('does not have attribute "indeterminate" when indeterminate prop is false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {indeterminate: false},
      })
      const $input = wrapper.find('input')
      expect($input.attributes('indeterminate')).toBeUndefined()
    })

    it('does not have attribute "indeterminate" when indeterminate prop is undefined', () => {
      const wrapper = mount(BFormCheckbox)
      const $input = wrapper.find('input')
      expect($input.attributes('indeterminate')).toBeUndefined()
    })

    it('emits "update:indeterminate=false" when checkbox is changed', async () => {
      const wrapper = mount(BFormCheckbox)
      const $input = wrapper.find('input')
      await $input.trigger('change')
      expect($input.attributes('indeterminate')).toBeUndefined()
    })

    it('has attribute "indeterminate" when indeterminate prop is set to true', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {indeterminate: false},
      })
      await wrapper.setProps({indeterminate: true})
      const $input = wrapper.find('input')
      expect($input.attributes('indeterminate')).toBeDefined()
    })
  })
})
