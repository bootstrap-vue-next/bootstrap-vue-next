import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import {ref} from 'vue'
import BFormCheckbox from './BFormCheckbox.vue'
import BFormCheckboxGroup from './BFormCheckboxGroup.vue'
import {checkboxGroupKey, formGroupKey} from '../../utils/keys'
import type {CheckboxValue} from '../../types/CheckboxTypes'

describe('form-checkbox', () => {
  enableAutoUnmount(afterEach)

  describe('useFormCheck attributes', () => {
    it('tag is div', () => {
      const wrapper = mount(BFormCheckbox)
      expect(wrapper.element.tagName).toBe('DIV')
    })

    it('has class form-check if prop plain and prop button are false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: false, button: false},
        slots: {
          default: 'checkbox',
        },
      })
      expect(wrapper.classes()).toContain('form-check')
    })

    it('has class form-check if prop plain and prop button are true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: true, button: true},
      })
      expect(wrapper.classes()).not.toContain('form-check')
    })

    it('does not have class form-check if default slot is empty', () => {
      const wrapper = mount(BFormCheckbox, {})
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

    it('does not have class form-check-inline when prop inline', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {inline: false},
      })
      expect(wrapper.classes()).not.toContain('form-check-inline')
    })

    it('has class form-check-reverse when prop reverse', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {reverse: true},
      })
      expect(wrapper.classes()).toContain('form-check-reverse')
    })

    it('does not have class form-check-reverse when prop reverse', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {reverse: false},
      })
      expect(wrapper.classes()).not.toContain('form-check-reverse')
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

    it('does not have a form-control size class when size is undefined (default)', () => {
      const wrapper = mount(BFormCheckbox)
      expect(wrapper.classes()).not.toContain('form-control-md')
      expect(wrapper.classes()).not.toContain('form-control-sm')
      expect(wrapper.classes()).not.toContain('form-control-lg')
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

    it('child label does not have a btn size class when prop button true and size is undefined (default)', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {button: true, plain: false},
      })
      const $label = wrapper.get('label')
      expect($label.classes()).not.toContain('btn-md')
      expect($label.classes()).not.toContain('btn-sm')
      expect($label.classes()).not.toContain('btn-lg')
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
    it('default unchecked checkbox emits update:modelValue===true event when clicked', async () => {
      const wrapper = mount(BFormCheckbox, {props: {modelValue: false}, attachTo: document.body})

      await wrapper.find('input').trigger('click')

      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')?.length).toBe(1)
      expect(wrapper.emitted('update:modelValue')?.[0][0]).toBe(true)
    })

    it('default checked checkbox emits update:modelValue===false event when clicked', async () => {
      const wrapper = mount(BFormCheckbox, {props: {modelValue: true}, attachTo: document.body})

      await wrapper.find('input').trigger('click')

      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')?.length).toBe(1)
      expect(wrapper.emitted('update:modelValue')?.[0][0]).toBe(false)
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

    it('custom value checked checkbox emits update:modelValue==="unhecked-value" event when clicked', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {
          modelValue: 'checked',
          value: 'checked',
          uncheckedValue: 'unchecked',
        },
        attachTo: document.body,
      })

      await wrapper.get('input').trigger('click')

      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')?.length).toBe(1)
      expect(wrapper.emitted('update:modelValue')?.[0][0]).toBe('unchecked')
    })
  })

  describe('indeterminate model behavior', () => {
    it('modelValue behaves as intended', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {
          'modelValue': true,
          'indeterminate': true,
          'onUpdate:indeterminate': (e) => {
            wrapper.setProps({indeterminate: e})
          },
          'onUpdate:modelValue': (e) => {
            wrapper.setProps({modelValue: e})
          },
        },
        attachTo: document.body,
      })
      const input = wrapper.get('input')
      await input.trigger('click')
      expect(wrapper.props('modelValue')).toBe(false)
      expect(wrapper.props('indeterminate')).toBe(false)
      await input.trigger('click')
      expect(wrapper.props('modelValue')).toBe(true)
      expect(wrapper.props('indeterminate')).toBe(false)
      await input.trigger('click')
      expect(wrapper.props('modelValue')).toBe(false)
      expect(wrapper.props('indeterminate')).toBe(false)
    })

    it('is given the javascript psuedo property', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {
          'indeterminate': true,
          'onUpdate:indeterminate': (e) => {
            wrapper.setProps({indeterminate: e})
          },
        },
        attachTo: document.body,
      })
      const input = wrapper.get('input')
      expect(input.element.indeterminate).toBe(true)
      await input.trigger('click')
      expect(input.element.indeterminate).toBe(false)
    })
  })

  describe('prop inheritance from parent group', () => {
    it('inherits buttonVariant from parent when not explicitly set', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          buttonVariant: 'primary',
          buttons: true,
        },
        slots: {
          default: '<BFormCheckbox value="1">Checkbox 1</BFormCheckbox>',
          option: () => {},
        },
        global: {
          components: {BFormCheckbox},
        },
      })
      const $checkbox = wrapper.findComponent(BFormCheckbox)
      const $label = $checkbox.get('label')
      expect($label.classes()).toContain('btn-primary')
      expect($label.classes()).not.toContain('btn-secondary')
    })

    it('child buttonVariant overrides parent buttonVariant when explicitly set', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          buttonVariant: 'primary',
          buttons: true,
        },
        slots: {
          default: '<BFormCheckbox value="1" button-variant="danger">Checkbox 1</BFormCheckbox>',
          option: () => {},
        },
        global: {
          components: {BFormCheckbox},
        },
      })
      const $checkbox = wrapper.findComponent(BFormCheckbox)
      const $label = $checkbox.get('label')
      expect($label.classes()).toContain('btn-danger')
      expect($label.classes()).not.toContain('btn-primary')
    })

    it('inherits size from parent when not explicitly set', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          size: 'lg',
        },
        slots: {
          default: '<BFormCheckbox value="1">Checkbox 1</BFormCheckbox>',
          option: () => {},
        },
        global: {
          components: {BFormCheckbox},
        },
      })
      const $checkbox = wrapper.findComponent(BFormCheckbox)
      expect($checkbox.classes()).toContain('form-control-lg')
    })

    it('child size overrides parent size when explicitly set', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          size: 'lg',
        },
        slots: {
          default: '<BFormCheckbox value="1" size="sm">Checkbox 1</BFormCheckbox>',
          option: () => {},
        },
        global: {
          components: {BFormCheckbox},
        },
      })
      const $checkbox = wrapper.findComponent(BFormCheckbox)
      expect($checkbox.classes()).toContain('form-control-sm')
      expect($checkbox.classes()).not.toContain('form-control-lg')
    })

    it('inherits state from parent when not explicitly set', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          state: false,
        },
        slots: {
          default: '<BFormCheckbox value="1">Checkbox 1</BFormCheckbox>',
          option: () => {},
        },
        global: {
          components: {BFormCheckbox},
        },
      })
      const $checkbox = wrapper.findComponent(BFormCheckbox)
      const $input = $checkbox.get('input')
      expect($input.classes()).toContain('is-invalid')
    })

    it('child state overrides parent state when explicitly set', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          state: false,
        },
        slots: {
          default: '<BFormCheckbox value="1" :state="true">Checkbox 1</BFormCheckbox>',
          option: () => {},
        },
        global: {
          components: {BFormCheckbox},
        },
      })
      const $checkbox = wrapper.findComponent(BFormCheckbox)
      const $input = $checkbox.get('input')
      expect($input.classes()).toContain('is-valid')
      expect($input.classes()).not.toContain('is-invalid')
    })

    it('inherits button prop from parent when not explicitly set', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          buttons: true,
        },
        slots: {
          default: '<BFormCheckbox value="1">Checkbox 1</BFormCheckbox>',
          option: () => {},
        },
        global: {
          components: {BFormCheckbox},
        },
      })
      const $checkbox = wrapper.findComponent(BFormCheckbox)
      const $input = $checkbox.get('input')
      expect($input.classes()).toContain('btn-check')
    })

    it('child can explicitly set button=false to override parent button=true', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          buttons: true,
        },
        slots: {
          default: '<BFormCheckbox value="1" :button="false">Checkbox 1</BFormCheckbox>',
          option: () => {},
        },
        global: {
          components: {BFormCheckbox},
        },
      })
      const $checkbox = wrapper.findComponent(BFormCheckbox)
      const $input = $checkbox.get('input')
      expect($input.classes()).not.toContain('btn-check')
      expect($input.classes()).toContain('form-check-input')
    })

    it('inherits plain prop from parent when not explicitly set', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          plain: true,
        },
        slots: {
          default: '<BFormCheckbox value="1">Checkbox 1</BFormCheckbox>',
          option: () => {},
        },
        global: {
          components: {BFormCheckbox},
        },
      })
      const $checkbox = wrapper.findComponent(BFormCheckbox)
      expect($checkbox.classes()).not.toContain('form-check')
    })

    it('child can explicitly set plain=false to override parent plain=true', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          plain: true,
        },
        slots: {
          default: '<BFormCheckbox value="1" :plain="false">Checkbox 1</BFormCheckbox>',
          option: () => {},
        },
        global: {
          components: {BFormCheckbox},
        },
      })
      const $checkbox = wrapper.findComponent(BFormCheckbox)
      expect($checkbox.classes()).toContain('form-check')
    })

    it('inherits inline prop from parent when not explicitly set', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          stacked: false,
        },
        slots: {
          default: '<BFormCheckbox value="1">Checkbox 1</BFormCheckbox>',
        },
        global: {
          components: {BFormCheckbox},
        },
      })
      const $checkbox = wrapper.findComponent(BFormCheckbox)
      expect($checkbox.classes()).toContain('form-check-inline')
    })

    it('inherits reverse prop from parent when not explicitly set', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          reverse: true,
        },
        slots: {
          default: '<BFormCheckbox value="1">Checkbox 1</BFormCheckbox>',
          option: () => {},
        },
        global: {
          components: {BFormCheckbox},
        },
      })
      const $checkbox = wrapper.findComponent(BFormCheckbox)
      expect($checkbox.classes()).toContain('form-check-reverse')
    })

    it('inherits switch prop from parent when not explicitly set', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          switches: true,
        },
        slots: {
          default: '<BFormCheckbox value="1">Checkbox 1</BFormCheckbox>',
          option: () => {},
        },
        global: {
          components: {BFormCheckbox},
        },
      })
      const $checkbox = wrapper.findComponent(BFormCheckbox)
      expect($checkbox.classes()).toContain('form-switch')
    })

    it('uses default values when neither parent nor child provide value', () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          buttons: true,
        },
        slots: {
          default: '<BFormCheckbox value="1">Checkbox 1</BFormCheckbox>',
          option: () => {},
        },
        global: {
          components: {BFormCheckbox},
        },
      })
      const $checkbox = wrapper.findComponent(BFormCheckbox)
      const $label = $checkbox.get('label')
      // Default buttonVariant should be 'secondary'
      expect($label.classes()).toContain('btn-secondary')
      // Default size is undefined which doesn't add a class
      expect($checkbox.classes()).not.toContain('form-control-sm')
      expect($checkbox.classes()).not.toContain('form-control-lg')
    })
  })

  describe('switch prop', () => {
    it('has class form-switch when prop switch is true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {switch: true},
        slots: {default: 'foo'},
      })
      expect(wrapper.classes()).toContain('form-switch')
    })

    it('does not have class form-switch when prop switch is false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {switch: false},
        slots: {default: 'foo'},
      })
      expect(wrapper.classes()).not.toContain('form-switch')
    })

    it('does not have class form-switch when prop switch is undefined', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {switch: undefined},
        slots: {default: 'foo'},
      })
      expect(wrapper.classes()).not.toContain('form-switch')
    })
  })

  describe('state validation classes on input', () => {
    it('input has class is-valid when state is true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {state: true},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).toContain('is-valid')
    })

    it('input has class is-invalid when state is false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {state: false},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).toContain('is-invalid')
    })

    it('input does not have is-valid or is-invalid when state is null', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {state: null},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).not.toContain('is-valid')
      expect($input.classes()).not.toContain('is-invalid')
    })

    it('input does not have is-valid or is-invalid when state is undefined', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {state: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).not.toContain('is-valid')
      expect($input.classes()).not.toContain('is-invalid')
    })
  })

  describe('inputClass prop', () => {
    it('input element has custom class from inputClass string', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {inputClass: 'my-custom-class'},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).toContain('my-custom-class')
    })

    it('input element has custom classes from inputClass array', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {inputClass: ['class-a', 'class-b']},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).toContain('class-a')
      expect($input.classes()).toContain('class-b')
    })

    it('input element retains default classes alongside inputClass', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {inputClass: 'my-custom-class', plain: false, button: false},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).toContain('form-check-input')
      expect($input.classes()).toContain('my-custom-class')
    })
  })

  describe('wrapperAttrs prop', () => {
    it('passes wrapperAttrs to the wrapper element', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {
          wrapperAttrs: {'data-testid': 'checkbox-wrapper'},
        },
        slots: {default: 'foo'},
      })
      expect(wrapper.attributes('data-testid')).toBe('checkbox-wrapper')
    })
  })

  describe('exposed methods', () => {
    it('exposes element ref', () => {
      const wrapper = mount(BFormCheckbox, {
        attachTo: document.body,
      })
      expect(wrapper.vm.element).toBeDefined()
    })

    it('exposes focus method', () => {
      const wrapper = mount(BFormCheckbox, {
        attachTo: document.body,
      })
      expect(typeof wrapper.vm.focus).toBe('function')
    })

    it('exposes blur method', () => {
      const wrapper = mount(BFormCheckbox, {
        attachTo: document.body,
      })
      expect(typeof wrapper.vm.blur).toBe('function')
    })
  })

  describe('checkbox group injection', () => {
    it('inherits disabled from injected parent group', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {value: 'a'},
        slots: {default: 'A'},
        global: {
          provide: {
            [checkboxGroupKey as symbol]: {
              modelValue: ref<CheckboxValue[]>([]),
              switch: ref(false),
              buttonVariant: ref('secondary'),
              form: ref(undefined),
              name: ref('test-group'),
              state: ref(undefined),
              plain: ref(false),
              size: ref(undefined),
              inline: ref(false),
              reverse: ref(false),
              required: ref(false),
              buttons: ref(false),
              disabled: ref(true),
            },
          },
        },
      })
      const $input = wrapper.get('input')
      expect($input.attributes('disabled')).toBe('')
    })

    it('inherits name from injected parent group', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {value: 'a'},
        slots: {default: 'A'},
        global: {
          provide: {
            [checkboxGroupKey as symbol]: {
              modelValue: ref<CheckboxValue[]>([]),
              switch: ref(false),
              buttonVariant: ref('secondary'),
              form: ref(undefined),
              name: ref('parent-name'),
              state: ref(undefined),
              plain: ref(false),
              size: ref(undefined),
              inline: ref(false),
              reverse: ref(false),
              required: ref(false),
              buttons: ref(false),
              disabled: ref(false),
            },
          },
        },
      })
      const $input = wrapper.get('input')
      expect($input.attributes('name')).toBe('parent-name')
    })

    it('inherits form from injected parent group', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {value: 'a'},
        slots: {default: 'A'},
        global: {
          provide: {
            [checkboxGroupKey as symbol]: {
              modelValue: ref<CheckboxValue[]>([]),
              switch: ref(false),
              buttonVariant: ref('secondary'),
              form: ref('parent-form'),
              name: ref('test-group'),
              state: ref(undefined),
              plain: ref(false),
              size: ref(undefined),
              inline: ref(false),
              reverse: ref(false),
              required: ref(false),
              buttons: ref(false),
              disabled: ref(false),
            },
          },
        },
      })
      const $input = wrapper.get('input')
      expect($input.attributes('form')).toBe('parent-form')
    })

    it('inherits required from injected parent group', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {value: 'a'},
        slots: {default: 'A'},
        global: {
          provide: {
            [checkboxGroupKey as symbol]: {
              modelValue: ref<CheckboxValue[]>([]),
              switch: ref(false),
              buttonVariant: ref('secondary'),
              form: ref(undefined),
              name: ref('test-group'),
              state: ref(undefined),
              plain: ref(false),
              size: ref(undefined),
              inline: ref(false),
              reverse: ref(false),
              required: ref(true),
              buttons: ref(false),
              disabled: ref(false),
            },
          },
        },
      })
      const $input = wrapper.get('input')
      expect($input.attributes('required')).toBe('')
    })

    it('child prop overrides parent name when explicitly set', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {value: 'a', name: 'child-name'},
        slots: {default: 'A'},
        global: {
          provide: {
            [checkboxGroupKey as symbol]: {
              modelValue: ref<CheckboxValue[]>([]),
              switch: ref(false),
              buttonVariant: ref('secondary'),
              form: ref(undefined),
              name: ref('parent-name'),
              state: ref(undefined),
              plain: ref(false),
              size: ref(undefined),
              inline: ref(false),
              reverse: ref(false),
              required: ref(false),
              buttons: ref(false),
              disabled: ref(false),
            },
          },
        },
      })
      const $input = wrapper.get('input')
      expect($input.attributes('name')).toBe('child-name')
    })

    it('child prop overrides parent form when explicitly set', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {value: 'a', form: 'child-form'},
        slots: {default: 'A'},
        global: {
          provide: {
            [checkboxGroupKey as symbol]: {
              modelValue: ref<CheckboxValue[]>([]),
              switch: ref(false),
              buttonVariant: ref('secondary'),
              form: ref('parent-form'),
              name: ref('test-group'),
              state: ref(undefined),
              plain: ref(false),
              size: ref(undefined),
              inline: ref(false),
              reverse: ref(false),
              required: ref(false),
              buttons: ref(false),
              disabled: ref(false),
            },
          },
        },
      })
      const $input = wrapper.get('input')
      expect($input.attributes('form')).toBe('child-form')
    })

    it('uses parent modelValue when in a group', () => {
      const parentModelValue = ref<CheckboxValue[]>(['a'])
      const wrapper = mount(BFormCheckbox, {
        props: {value: 'a'},
        slots: {default: 'A'},
        global: {
          provide: {
            [checkboxGroupKey as symbol]: {
              modelValue: parentModelValue,
              switch: ref(false),
              buttonVariant: ref('secondary'),
              form: ref(undefined),
              name: ref('test-group'),
              state: ref(undefined),
              plain: ref(false),
              size: ref(undefined),
              inline: ref(false),
              reverse: ref(false),
              required: ref(false),
              buttons: ref(false),
              disabled: ref(false),
            },
          },
        },
      })
      const $input = wrapper.get('input')
      expect(($input.element as HTMLInputElement).checked).toBe(true)
    })

    it('checkbox is unchecked when value is not in parent modelValue', () => {
      const parentModelValue = ref<CheckboxValue[]>(['b'])
      const wrapper = mount(BFormCheckbox, {
        props: {value: 'a'},
        slots: {default: 'A'},
        global: {
          provide: {
            [checkboxGroupKey as symbol]: {
              modelValue: parentModelValue,
              switch: ref(false),
              buttonVariant: ref('secondary'),
              form: ref(undefined),
              name: ref('test-group'),
              state: ref(undefined),
              plain: ref(false),
              size: ref(undefined),
              inline: ref(false),
              reverse: ref(false),
              required: ref(false),
              buttons: ref(false),
              disabled: ref(false),
            },
          },
        },
      })
      const $input = wrapper.get('input')
      expect(($input.element as HTMLInputElement).checked).toBe(false)
    })
  })

  describe('attrs forwarding', () => {
    it('forwards extra attributes to input element', () => {
      const wrapper = mount(BFormCheckbox, {
        attrs: {'data-custom': 'test'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('data-custom')).toBe('test')
    })

    it('applies class attr to wrapper element', () => {
      const wrapper = mount(BFormCheckbox, {
        attrs: {class: 'extra-class'},
        slots: {default: 'foo'},
      })
      expect(wrapper.classes()).toContain('extra-class')
    })

    it('does not forward class attr to input element', () => {
      const wrapper = mount(BFormCheckbox, {
        attrs: {class: 'extra-class'},
        slots: {default: 'foo'},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).not.toContain('extra-class')
    })

    it('forwards multiple extra attributes to input element', () => {
      const wrapper = mount(BFormCheckbox, {
        attrs: {'data-foo': 'bar', 'data-baz': 'qux'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('data-foo')).toBe('bar')
      expect($input.attributes('data-baz')).toBe('qux')
    })
  })

  describe('autofocus', () => {
    it('accepts autofocus prop true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {autofocus: true},
        attachTo: document.body,
      })
      expect(wrapper.props('autofocus')).toBe(true)
    })

    it('accepts autofocus prop false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {autofocus: false},
        attachTo: document.body,
      })
      expect(wrapper.props('autofocus')).toBe(false)
    })
  })

  describe('buttonGroup / ConditionalWrapper', () => {
    it('wrapper div is rendered when buttonGroup is false', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {buttonGroup: false},
        slots: {default: 'foo'},
      })
      expect(wrapper.element.tagName).toBe('DIV')
    })

    it('wrapper div is skipped when buttonGroup is true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {buttonGroup: true},
        slots: {default: 'foo'},
      })
      // When ConditionalWrapper skips, VTU wraps in a div
      // but it should not have the form-check class
      expect(wrapper.classes()).not.toContain('form-check')
    })

    it('wrapper div is skipped when parent has buttons=true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {value: 'a'},
        slots: {default: 'A'},
        global: {
          provide: {
            [checkboxGroupKey as symbol]: {
              modelValue: ref<CheckboxValue[]>([]),
              switch: ref(false),
              buttonVariant: ref('secondary'),
              form: ref(undefined),
              name: ref('test-group'),
              state: ref(undefined),
              plain: ref(false),
              size: ref(undefined),
              inline: ref(false),
              reverse: ref(false),
              required: ref(false),
              buttons: ref(true),
              disabled: ref(false),
            },
          },
        },
      })
      const $input = wrapper.find('input')
      expect($input.exists()).toBe(true)
      expect($input.classes()).toContain('btn-check')
    })
  })

  describe('disabled from multiple sources', () => {
    it('is disabled when own disabled prop is true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {disabled: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('disabled')).toBe('')
    })

    it('is disabled when parent group disabled is true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {value: 'a', disabled: false},
        slots: {default: 'A'},
        global: {
          provide: {
            [checkboxGroupKey as symbol]: {
              modelValue: ref<CheckboxValue[]>([]),
              switch: ref(false),
              buttonVariant: ref('secondary'),
              form: ref(undefined),
              name: ref('test-group'),
              state: ref(undefined),
              plain: ref(false),
              size: ref(undefined),
              inline: ref(false),
              reverse: ref(false),
              required: ref(false),
              buttons: ref(false),
              disabled: ref(true),
            },
          },
        },
      })
      const $input = wrapper.get('input')
      expect($input.attributes('disabled')).toBe('')
    })

    it('is disabled when formGroup disabled is true', () => {
      const disabled = ref(true)
      const state = ref<boolean | undefined>(undefined)
      const wrapper = mount(BFormCheckbox, {
        global: {
          provide: {
            [formGroupKey as unknown as symbol]: () => ({state, disabled}),
          },
        },
      })
      const $input = wrapper.get('input')
      expect($input.attributes('disabled')).toBe('')
    })

    it('is not disabled when all sources are false', () => {
      const disabled = ref(false)
      const state = ref<boolean | undefined>(undefined)
      const wrapper = mount(BFormCheckbox, {
        props: {disabled: false},
        global: {
          provide: {
            [formGroupKey as unknown as symbol]: () => ({state, disabled}),
          },
        },
      })
      const $input = wrapper.get('input')
      expect($input.attributes('disabled')).toBeUndefined()
    })
  })

  describe('model behavior with various value types', () => {
    it('emits numeric value when clicked', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {value: 42, uncheckedValue: 0},
        attachTo: document.body,
      })
      await wrapper.find('input').trigger('click')
      expect(wrapper.emitted('update:modelValue')?.[0][0]).toBe(42)
    })

    it('emits null uncheckedValue when unchecked', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {modelValue: 'yes', value: 'yes', uncheckedValue: null},
        attachTo: document.body,
      })
      await wrapper.find('input').trigger('click')
      expect(wrapper.emitted('update:modelValue')?.[0][0]).toBe(null)
    })

    it('does not emit when disabled and clicked', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {disabled: true, modelValue: false},
        attachTo: document.body,
      })
      await wrapper.find('input').trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    it('clears indeterminate when value changes via click', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {
          'modelValue': false,
          'indeterminate': true,
          'onUpdate:indeterminate': (e: boolean) => {
            wrapper.setProps({indeterminate: e})
          },
          'onUpdate:modelValue': (e: unknown) => {
            wrapper.setProps({modelValue: e as boolean})
          },
        },
        attachTo: document.body,
      })
      expect(wrapper.props('indeterminate')).toBe(true)
      await wrapper.find('input').trigger('click')
      expect(wrapper.props('indeterminate')).toBe(false)
    })
  })

  describe('prop reactivity', () => {
    it('inline class reacts to prop change', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {inline: false},
      })
      expect(wrapper.classes()).not.toContain('form-check-inline')
      await wrapper.setProps({inline: true})
      expect(wrapper.classes()).toContain('form-check-inline')
    })

    it('reverse class reacts to prop change', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {reverse: false},
      })
      expect(wrapper.classes()).not.toContain('form-check-reverse')
      await wrapper.setProps({reverse: true})
      expect(wrapper.classes()).toContain('form-check-reverse')
    })

    it('size class reacts to prop change', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {size: 'sm'},
      })
      expect(wrapper.classes()).toContain('form-control-sm')
      await wrapper.setProps({size: 'lg'})
      expect(wrapper.classes()).not.toContain('form-control-sm')
      expect(wrapper.classes()).toContain('form-control-lg')
    })

    it('switch class reacts to prop change', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {switch: false},
        slots: {default: 'foo'},
      })
      expect(wrapper.classes()).not.toContain('form-switch')
      await wrapper.setProps({switch: true})
      expect(wrapper.classes()).toContain('form-switch')
    })

    it('state class on input reacts to prop change', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {state: true},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).toContain('is-valid')
      await wrapper.setProps({state: false})
      expect($input.classes()).not.toContain('is-valid')
      expect($input.classes()).toContain('is-invalid')
    })

    it('disabled attribute reacts to prop change', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {disabled: false},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('disabled')).toBeUndefined()
      await wrapper.setProps({disabled: true})
      expect($input.attributes('disabled')).toBe('')
    })

    it('name attribute reacts to prop change', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {name: 'first'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('name')).toBe('first')
      await wrapper.setProps({name: 'second'})
      expect($input.attributes('name')).toBe('second')
    })

    it('id attribute reacts to prop change', async () => {
      const wrapper = mount(BFormCheckbox, {
        props: {id: 'id-1'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('id')).toBe('id-1')
      await wrapper.setProps({id: 'id-2'})
      expect($input.attributes('id')).toBe('id-2')
    })
  })

  describe('checkbox group click interaction', () => {
    it('clicking checkbox in group updates parent modelValue', async () => {
      const parentModelValue = ref<CheckboxValue[]>([])
      const wrapper = mount(BFormCheckbox, {
        props: {value: 'a'},
        slots: {default: 'A'},
        attachTo: document.body,
        global: {
          provide: {
            [checkboxGroupKey as symbol]: {
              modelValue: parentModelValue,
              switch: ref(false),
              buttonVariant: ref('secondary'),
              form: ref(undefined),
              name: ref('test-group'),
              state: ref(undefined),
              plain: ref(false),
              size: ref(undefined),
              inline: ref(false),
              reverse: ref(false),
              required: ref(false),
              buttons: ref(false),
              disabled: ref(false),
            },
          },
        },
      })
      await wrapper.find('input').trigger('click')
      expect(parentModelValue.value).toEqual(['a'])
    })

    it('unchecking checkbox in group removes value from parent modelValue', async () => {
      const parentModelValue = ref<CheckboxValue[]>(['a'])
      const wrapper = mount(BFormCheckbox, {
        props: {value: 'a'},
        slots: {default: 'A'},
        attachTo: document.body,
        global: {
          provide: {
            [checkboxGroupKey as symbol]: {
              modelValue: parentModelValue,
              switch: ref(false),
              buttonVariant: ref('secondary'),
              form: ref(undefined),
              name: ref('test-group'),
              state: ref(undefined),
              plain: ref(false),
              size: ref(undefined),
              inline: ref(false),
              reverse: ref(false),
              required: ref(false),
              buttons: ref(false),
              disabled: ref(false),
            },
          },
        },
      })
      await wrapper.find('input').trigger('click')
      expect(parentModelValue.value).toEqual([])
    })
  })

  describe('computedRequired', () => {
    it('required is true when parent group provides name and required', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {value: 'a'},
        slots: {default: 'A'},
        global: {
          provide: {
            [checkboxGroupKey as symbol]: {
              modelValue: ref<CheckboxValue[]>([]),
              switch: ref(false),
              buttonVariant: ref('secondary'),
              form: ref(undefined),
              name: ref('group-name'),
              state: ref(undefined),
              plain: ref(false),
              size: ref(undefined),
              inline: ref(false),
              reverse: ref(false),
              required: ref(true),
              buttons: ref(false),
              disabled: ref(false),
            },
          },
        },
      })
      const $input = wrapper.get('input')
      expect($input.attributes('required')).toBe('')
      expect($input.attributes('aria-required')).toBe('true')
    })

    it('required is false when parent group has no name even if required is true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {value: 'a'},
        slots: {default: 'A'},
        global: {
          provide: {
            [checkboxGroupKey as symbol]: {
              modelValue: ref<CheckboxValue[]>([]),
              switch: ref(false),
              buttonVariant: ref('secondary'),
              form: ref(undefined),
              name: ref(''),
              state: ref(undefined),
              plain: ref(false),
              size: ref(undefined),
              inline: ref(false),
              reverse: ref(false),
              required: ref(true),
              buttons: ref(false),
              disabled: ref(false),
            },
          },
        },
      })
      const $input = wrapper.get('input')
      expect($input.attributes('required')).toBeUndefined()
    })
  })

  describe('default slot content', () => {
    it('renders HTML content in default slot', () => {
      const wrapper = mount(BFormCheckbox, {
        slots: {default: '<strong>Bold</strong>'},
      })
      const $label = wrapper.get('label')
      expect($label.find('strong').exists()).toBe(true)
      expect($label.text()).toBe('Bold')
    })

    it('renders empty when no slot and plain is true', () => {
      const wrapper = mount(BFormCheckbox, {
        props: {plain: true},
      })
      const $label = wrapper.find('label')
      expect($label.exists()).toBe(false)
    })
  })
})
