import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import {ref} from 'vue'
import BFormRadio from './BFormRadio.vue'
import BFormRadioGroup from './BFormRadioGroup.vue'
import {radioGroupKey} from '../../utils/keys'
import type {RadioValue} from '../../types/RadioTypes'

describe('form-radio', () => {
  enableAutoUnmount(afterEach)

  it('tag is div', () => {
    const wrapper = mount(BFormRadio)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has class form-check if prop plain and prop button are false', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: false, button: false},
      slots: {
        default: 'checkbox',
      },
    })
    expect(wrapper.classes()).toContain('form-check')
  })

  it('has class form-check if prop plain and prop button are true', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: true, button: true},
    })
    expect(wrapper.classes()).not.toContain('form-check')
  })

  it('does not have class form-check if prop plain false and prop button true', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: false, button: true},
    })
    expect(wrapper.classes()).not.toContain('form-check')
  })

  it('does not have class form-check if prop plain true and prop button false', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: true, button: false},
    })
    expect(wrapper.classes()).not.toContain('form-check')
  })

  it('does not have class form-check if default slot is empty', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: true, button: false},
    })
    expect(wrapper.classes()).not.toContain('form-check')
  })

  it('has class form-check-inline when prop inline', () => {
    const wrapper = mount(BFormRadio, {
      props: {inline: true},
    })
    expect(wrapper.classes()).toContain('form-check-inline')
  })

  it('does not have class form-check-inline when prop inline false', () => {
    const wrapper = mount(BFormRadio, {
      props: {inline: false},
    })
    expect(wrapper.classes()).not.toContain('form-check-inline')
  })

  it('has class form-check-reverse when prop reverse', () => {
    const wrapper = mount(BFormRadio, {
      props: {reverse: true},
    })
    expect(wrapper.classes()).toContain('form-check-reverse')
  })

  it('does not have class form-check-reverse when prop reverse', () => {
    const wrapper = mount(BFormRadio, {
      props: {reverse: false},
    })
    expect(wrapper.classes()).not.toContain('form-check-reverse')
  })

  it('does not have class form-switch when prop switch is false', () => {
    const wrapper = mount(BFormRadio, {
      props: {switch: false},
    })
    expect(wrapper.classes()).not.toContain('form-switch')
  })

  it('has class form-control-{type} when prop size', () => {
    const wrapper = mount(BFormRadio, {
      props: {size: 'lg'},
    })
    expect(wrapper.classes()).toContain('form-control-lg')
  })

  it('does not have class form-control-{type} when prop size undefined', () => {
    const wrapper = mount(BFormRadio, {
      props: {size: undefined},
    })
    expect(wrapper.classes()).not.toContain('form-control-lg')
  })

  it('does not have a form-control size class when size is undefined (default)', () => {
    const wrapper = mount(BFormRadio)
    expect(wrapper.classes()).not.toContain('form-control-md')
    expect(wrapper.classes()).not.toContain('form-control-sm')
    expect(wrapper.classes()).not.toContain('form-control-lg')
  })

  it('has input element', () => {
    const wrapper = mount(BFormRadio)
    const $input = wrapper.find('input')
    expect($input.exists()).toBe(true)
  })

  it('input element has attr id', () => {
    const wrapper = mount(BFormRadio)
    const $input = wrapper.get('input')
    expect($input.attributes('id')).toBeDefined()
  })

  it('input element attr id contains content from prop id', () => {
    const wrapper = mount(BFormRadio, {
      props: {id: 'foobar'},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('id')).toBe('foobar')
  })

  it('input element has attr type to be radio', () => {
    const wrapper = mount(BFormRadio)
    const $input = wrapper.get('input')
    expect($input.attributes('type')).toBe('radio')
  })

  it('input element has class form-check-input when prop plain and prop button are false', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: false, button: false},
    })
    const $input = wrapper.get('input')
    expect($input.classes()).toContain('form-check-input')
  })

  it('input element does not have class form-check-input when prop plain and prop button false', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: true, button: false},
    })
    const $input = wrapper.get('input')
    expect($input.classes()).not.toContain('form-check-input')
  })

  it('input element does not have class form-check-input when prop plain false and prop button true', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: false, button: true},
    })
    const $input = wrapper.get('input')
    expect($input.classes()).not.toContain('form-check-input')
  })

  it('input element does not have class form-check-input when prop plain and prop button are true', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: true, button: true},
    })
    const $input = wrapper.get('input')
    expect($input.classes()).not.toContain('form-check-input')
  })

  it('input element has class form-check-input when prop plain and prop button are undefined', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: undefined, button: undefined},
    })
    const $input = wrapper.get('input')
    expect($input.classes()).toContain('form-check-input')
  })

  it('input element has class btn-check when prop button is true', () => {
    const wrapper = mount(BFormRadio, {
      props: {button: true},
    })
    const $input = wrapper.get('input')
    expect($input.classes()).toContain('btn-check')
  })

  it('input element does not have class btn-check when prop button is false', () => {
    const wrapper = mount(BFormRadio, {
      props: {button: false},
    })
    const $input = wrapper.get('input')
    expect($input.classes()).not.toContain('btn-check')
  })

  it('input element does not have class btn-check when prop button is undefined', () => {
    const wrapper = mount(BFormRadio, {
      props: {button: undefined},
    })
    const $input = wrapper.get('input')
    expect($input.classes()).not.toContain('btn-check')
  })

  it('input element has attr disabled when prop disabled', () => {
    const wrapper = mount(BFormRadio, {
      props: {disabled: true},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('disabled')).toBe('')
  })

  it('input element does not have attr disabled when prop disabled is false', () => {
    const wrapper = mount(BFormRadio, {
      props: {disabled: false},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('disabled')).toBeUndefined()
  })

  it('input element does not have attr disabled when prop disabled is undefined', () => {
    const wrapper = mount(BFormRadio, {
      props: {disabled: undefined},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('disabled')).toBeUndefined()
  })

  it('input element has attr required when prop name and prop required', () => {
    const wrapper = mount(BFormRadio, {
      props: {required: true, name: 'foo'},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('required')).toBe('')
  })

  it('input element does not have attr required when prop name is empty string and prop required', () => {
    const wrapper = mount(BFormRadio, {
      props: {required: true, name: ''},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('required')).toBeUndefined()
  })

  it('input element does not have attr required when prop name is undefined and prop required', () => {
    const wrapper = mount(BFormRadio, {
      props: {required: true, name: undefined},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('required')).toBeUndefined()
  })

  it('input element does not have attr required when prop name and prop required false', () => {
    const wrapper = mount(BFormRadio, {
      props: {required: false, name: 'foo'},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('required')).toBeUndefined()
  })

  it('input element does not have attr required when prop name and prop required undefined', () => {
    const wrapper = mount(BFormRadio, {
      props: {required: undefined, name: 'foo'},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('required')).toBeUndefined()
  })

  it('input element has attr name to be prop name', () => {
    const wrapper = mount(BFormRadio, {
      props: {name: 'foobar'},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('name')).toBe('foobar')
  })

  it('input element has attr name is undefined when prop name undefined', () => {
    const wrapper = mount(BFormRadio, {
      props: {name: undefined},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('name')).toBeUndefined()
  })

  it('input element has attr form to be prop form', () => {
    const wrapper = mount(BFormRadio, {
      props: {form: 'foobar'},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('form')).toBe('foobar')
  })

  it('input element has attr form is undefined when prop form undefined', () => {
    const wrapper = mount(BFormRadio, {
      props: {form: undefined},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('form')).toBeUndefined()
  })

  it('input element has attr aria-label to be prop ariaLabel', () => {
    const wrapper = mount(BFormRadio, {
      props: {ariaLabel: 'foobar'},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('aria-label')).toBe('foobar')
  })

  it('input element has attr aria-label is undefined when prop ariaLabel undefined', () => {
    const wrapper = mount(BFormRadio, {
      props: {ariaLabel: undefined},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('aria-label')).toBeUndefined()
  })

  it('input element has attr aria-labelledby to be prop ariaLabelledby', () => {
    const wrapper = mount(BFormRadio, {
      props: {ariaLabelledby: 'foobar'},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('aria-labelledby')).toBe('foobar')
  })

  it('input element has attr aria-labelledby is undefined when prop ariaLabelledby undefined', () => {
    const wrapper = mount(BFormRadio, {
      props: {ariaLabelledby: undefined},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('aria-labelledby')).toBeUndefined()
  })

  it('input element has attr value to be prop value', () => {
    const wrapper = mount(BFormRadio, {
      props: {value: 'foobar'},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('value')).toBe('foobar')
  })

  it('input element has attr value to be true when value is undefined', () => {
    const wrapper = mount(BFormRadio, {
      props: {value: undefined},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('value')).toBe('true')
  })

  it('input element aria-required when prop name and prop required true', () => {
    const wrapper = mount(BFormRadio, {
      props: {name: 'foo', required: true},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('aria-required')).toBe('true')
  })

  it('input element does not have aria-required when prop name is empty string and prop required true', () => {
    const wrapper = mount(BFormRadio, {
      props: {name: '', required: true},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('aria-required')).toBeUndefined()
  })

  it('input element does not have aria-required when prop name and prop required false', () => {
    const wrapper = mount(BFormRadio, {
      props: {name: 'foo', required: false},
    })
    const $input = wrapper.get('input')
    expect($input.attributes('aria-required')).toBeUndefined()
  })

  it('has child label by default', () => {
    const wrapper = mount(BFormRadio)
    const $label = wrapper.find('label')
    expect($label.exists()).toBe(true)
  })

  it('does not have child label when prop plain is true', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: true},
    })
    const $label = wrapper.find('label')
    expect($label.exists()).toBe(false)
  })

  it('has child label when prop plain is false', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: false},
    })
    const $label = wrapper.find('label')
    expect($label.exists()).toBe(true)
  })

  it('has child label when prop plain is false but has default slot', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: false},
      slots: {default: 'foobar'},
    })
    const $label = wrapper.find('label')
    expect($label.exists()).toBe(true)
  })

  it('has child label when prop plain is true but has default slot', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: true},
      slots: {default: 'foobar'},
    })
    const $label = wrapper.find('label')
    expect($label.exists()).toBe(true)
  })

  it('child label has attr for to be defined by default', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: false},
    })
    const $label = wrapper.get('label')
    expect($label.attributes('for')).toBeDefined()
  })

  it('child label has attr for is prop id', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: false, id: 'foobar'},
    })
    const $label = wrapper.get('label')
    expect($label.attributes('for')).toBe('foobar')
  })

  it('child label attr for is same as input id', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: false},
    })
    const $label = wrapper.get('label')
    const $input = wrapper.get('input')
    const $labelFor = $label.attributes('for')
    const $inputId = $input.attributes('id')
    expect($labelFor).toBe($inputId)
  })

  it('child label does not have class focus by default', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: false},
    })
    const $label = wrapper.get('label')
    expect($label.classes()).not.toContain('focus')
  })

  it('child label removes class focus when input is blurred after focus', async () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: false},
    })
    const $label = wrapper.get('label')
    const $input = wrapper.get('input')
    await $input.trigger('focus')
    await $input.trigger('blur')
    expect($label.classes()).not.toContain('focus')
  })

  it('child label has class form-check-label when prop plain and prop button are false', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: false, button: false},
    })
    const $label = wrapper.get('label')
    expect($label.classes()).toContain('form-check-label')
  })

  it('child label does not have class form-check-label when prop plain true and prop button false', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: true, button: false},
      slots: {default: 'foo'},
    })
    const $label = wrapper.get('label')
    expect($label.classes()).not.toContain('form-check-label')
  })

  it('child label does not have class form-check-label when prop plain false and prop button true', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: false, button: true},
      slots: {default: 'foo'},
    })
    const $label = wrapper.get('label')
    expect($label.classes()).not.toContain('form-check-label')
  })

  it('child label does not have class form-check-label when prop plain and prop button are true', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: true, button: true},
      slots: {default: 'foo'},
    })
    const $label = wrapper.get('label')
    expect($label.classes()).not.toContain('form-check-label')
  })

  it('child label has class btn when prop button', () => {
    const wrapper = mount(BFormRadio, {
      props: {button: true, plain: false},
    })
    const $label = wrapper.get('label')
    expect($label.classes()).toContain('btn')
  })

  it('child label does not have class btn when prop button false', () => {
    const wrapper = mount(BFormRadio, {
      props: {button: false, plain: false},
    })
    const $label = wrapper.get('label')
    expect($label.classes()).not.toContain('btn')
  })

  it('child label has class btn-{type} when prop button and prop buttonVariant', () => {
    const wrapper = mount(BFormRadio, {
      props: {button: true, buttonVariant: 'danger', plain: false},
    })
    const $label = wrapper.get('label')
    expect($label.classes()).toContain('btn-danger')
  })

  it('child label does not have class btn-{type} when prop button false and prop buttonVariant', () => {
    const wrapper = mount(BFormRadio, {
      props: {button: false, buttonVariant: 'danger', plain: false},
    })
    const $label = wrapper.get('label')
    expect($label.classes()).not.toContain('btn-danger')
  })

  it('child label does not have class btn-{type} when prop button true and prop buttonVariant undefined', () => {
    const wrapper = mount(BFormRadio, {
      props: {button: true, buttonVariant: undefined, plain: false},
    })
    const $label = wrapper.get('label')
    expect($label.classes()).not.toContain('btn-undefined')
  })

  it('child label has class btn-{type} when prop button and prop size', () => {
    const wrapper = mount(BFormRadio, {
      props: {button: true, size: 'lg', plain: false},
    })
    const $label = wrapper.get('label')
    expect($label.classes()).toContain('btn-lg')
  })

  it('child label does not have class btn-{type} when prop button false and prop size', () => {
    const wrapper = mount(BFormRadio, {
      props: {button: false, size: 'lg', plain: false},
    })
    const $label = wrapper.get('label')
    expect($label.classes()).not.toContain('btn-lg')
  })

  it('child label does not have class btn-{type} when prop button true and prop size undefined', () => {
    const wrapper = mount(BFormRadio, {
      props: {button: true, size: undefined, plain: false},
    })
    const $label = wrapper.get('label')
    expect($label.classes()).not.toContain('btn-undefined')
  })

  it('child label does not have a btn size class when prop button true and size is undefined (default)', () => {
    const wrapper = mount(BFormRadio, {
      props: {button: true, plain: false},
    })
    const $label = wrapper.get('label')
    expect($label.classes()).not.toContain('btn-md')
    expect($label.classes()).not.toContain('btn-sm')
    expect($label.classes()).not.toContain('btn-lg')
  })

  it('child label has class active when value and modelValue are not the same', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: false, value: 'foo1', modelValue: 'foo'},
    })
    const $label = wrapper.get('label')
    expect($label.classes()).not.toContain('active')
  })

  it('child label renders default slot', () => {
    const wrapper = mount(BFormRadio, {
      slots: {default: 'foobar'},
    })
    const $label = wrapper.get('label')
    expect($label.text()).toBe('foobar')
  })

  describe('prop inheritance from parent group', () => {
    it('inherits buttonVariant from parent when not explicitly set', () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          buttonVariant: 'primary',
          buttons: true,
        },
        slots: {
          default: '<BFormRadio value="1">Radio 1</BFormRadio>',
          option: () => {},
        },
        global: {
          components: {BFormRadio},
        },
      })
      const $radio = wrapper.findComponent(BFormRadio)
      const $label = $radio.get('label')
      expect($label.classes()).toContain('btn-primary')
      expect($label.classes()).not.toContain('btn-secondary')
    })

    it('child buttonVariant overrides parent buttonVariant when explicitly set', () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          buttonVariant: 'primary',
          buttons: true,
        },
        slots: {
          default: '<BFormRadio value="1" button-variant="danger">Radio 1</BFormRadio>',
          option: () => {},
        },
        global: {
          components: {BFormRadio},
        },
      })
      const $radio = wrapper.findComponent(BFormRadio)
      const $label = $radio.get('label')
      expect($label.classes()).toContain('btn-danger')
      expect($label.classes()).not.toContain('btn-primary')
    })

    it('inherits size from parent when not explicitly set', () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          size: 'lg',
        },
        slots: {
          default: '<BFormRadio value="1">Radio 1</BFormRadio>',
          option: () => {},
        },
        global: {
          components: {BFormRadio},
        },
      })
      const $radio = wrapper.findComponent(BFormRadio)
      expect($radio.classes()).toContain('form-control-lg')
    })

    it('child size overrides parent size when explicitly set', () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          size: 'lg',
        },
        slots: {
          default: '<BFormRadio value="1" size="sm">Radio 1</BFormRadio>',
          option: () => {},
        },
        global: {
          components: {BFormRadio},
        },
      })
      const $radio = wrapper.findComponent(BFormRadio)
      expect($radio.classes()).toContain('form-control-sm')
      expect($radio.classes()).not.toContain('form-control-lg')
    })

    it('inherits state from parent when not explicitly set', () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          state: false,
        },
        slots: {
          default: '<BFormRadio value="1">Radio 1</BFormRadio>',
          option: () => {},
        },
        global: {
          components: {BFormRadio},
        },
      })
      const $radio = wrapper.findComponent(BFormRadio)
      const $input = $radio.get('input')
      expect($input.classes()).toContain('is-invalid')
    })

    it('child state overrides parent state when explicitly set', () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          state: false,
        },
        slots: {
          default: '<BFormRadio value="1" :state="true">Radio 1</BFormRadio>',
          option: () => {},
        },
        global: {
          components: {BFormRadio},
        },
      })
      const $radio = wrapper.findComponent(BFormRadio)
      const $input = $radio.get('input')
      expect($input.classes()).toContain('is-valid')
      expect($input.classes()).not.toContain('is-invalid')
    })

    it('inherits button prop from parent when not explicitly set', () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          buttons: true,
        },
        slots: {
          default: '<BFormRadio value="1">Radio 1</BFormRadio>',
          option: () => {},
        },
        global: {
          components: {BFormRadio},
        },
      })
      const $radio = wrapper.findComponent(BFormRadio)
      const $input = $radio.get('input')
      expect($input.classes()).toContain('btn-check')
    })

    it('child can explicitly set button=false to override parent button=true', () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          buttons: true,
        },
        slots: {
          default: '<BFormRadio value="1" :button="false">Radio 1</BFormRadio>',
          option: () => {},
        },
        global: {
          components: {BFormRadio},
        },
      })
      const $radio = wrapper.findComponent(BFormRadio)
      const $input = $radio.get('input')
      expect($input.classes()).not.toContain('btn-check')
      expect($input.classes()).toContain('form-check-input')
    })

    it('inherits plain prop from parent when not explicitly set', () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          plain: true,
        },
        slots: {
          default: '<BFormRadio value="1">Radio 1</BFormRadio>',
          option: () => {},
        },
        global: {
          components: {BFormRadio},
        },
      })
      const $radio = wrapper.findComponent(BFormRadio)
      expect($radio.classes()).not.toContain('form-check')
    })

    it('child can explicitly set plain=false to override parent plain=true', () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          plain: true,
        },
        slots: {
          default: '<BFormRadio value="1" :plain="false">Radio 1</BFormRadio>',
          option: () => {},
        },
        global: {
          components: {BFormRadio},
        },
      })
      const $radio = wrapper.findComponent(BFormRadio)
      expect($radio.classes()).toContain('form-check')
    })

    it('inherits inline prop from parent when not explicitly set', () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          stacked: false,
        },
        slots: {
          default: '<BFormRadio value="1">Radio 1</BFormRadio>',
          option: () => {},
        },
        global: {
          components: {BFormRadio},
        },
      })
      const $radio = wrapper.findComponent(BFormRadio)
      expect($radio.classes()).toContain('form-check-inline')
    })

    it('inherits reverse prop from parent when not explicitly set', () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          reverse: true,
        },
        slots: {
          default: '<BFormRadio value="1">Radio 1</BFormRadio>',
          option: () => {},
        },
        global: {
          components: {BFormRadio},
        },
      })
      const $radio = wrapper.findComponent(BFormRadio)
      expect($radio.classes()).toContain('form-check-reverse')
    })

    it('uses default values when neither parent nor child provide value', () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          buttons: true,
        },
        slots: {
          default: '<BFormRadio value="1">Radio 1</BFormRadio>',
          option: () => {},
        },
        global: {
          components: {BFormRadio},
        },
      })
      const $radio = wrapper.findComponent(BFormRadio)
      const $label = $radio.get('label')
      // Default buttonVariant should be 'secondary'
      expect($label.classes()).toContain('btn-secondary')
      // Default size is undefined which doesn't add a class
      expect($radio.classes()).not.toContain('form-control-sm')
      expect($radio.classes()).not.toContain('form-control-lg')
    })
  })

  describe('model behavior', () => {
    it('emits update:modelValue with value when clicked', async () => {
      const wrapper = mount(BFormRadio, {
        props: {modelValue: undefined, value: 'foo'},
        attachTo: document.body,
      })
      await wrapper.find('input').setValue()
      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')?.length).toBe(1)
      expect(wrapper.emitted('update:modelValue')?.[0][0]).toBe('foo')
    })

    it('emits update:modelValue with default value true when no value prop', async () => {
      const wrapper = mount(BFormRadio, {
        props: {modelValue: undefined},
        attachTo: document.body,
      })
      await wrapper.find('input').setValue()
      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')?.[0][0]).toBe(true)
    })

    it('radio is checked when modelValue matches value', () => {
      const wrapper = mount(BFormRadio, {
        props: {modelValue: 'foo', value: 'foo'},
      })
      const $input = wrapper.get('input')
      expect(($input.element as HTMLInputElement).checked).toBe(true)
    })

    it('radio is not checked when modelValue does not match value', () => {
      const wrapper = mount(BFormRadio, {
        props: {modelValue: 'bar', value: 'foo'},
      })
      const $input = wrapper.get('input')
      expect(($input.element as HTMLInputElement).checked).toBe(false)
    })

    it('radio becomes checked when modelValue changes to match value', async () => {
      const wrapper = mount(BFormRadio, {
        props: {modelValue: 'bar', value: 'foo'},
      })
      const $input = wrapper.get('input')
      expect(($input.element as HTMLInputElement).checked).toBe(false)
      await wrapper.setProps({modelValue: 'foo'})
      expect(($input.element as HTMLInputElement).checked).toBe(true)
    })
  })

  describe('state validation classes on input', () => {
    it('input has class is-valid when state is true', () => {
      const wrapper = mount(BFormRadio, {
        props: {state: true},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).toContain('is-valid')
    })

    it('input has class is-invalid when state is false', () => {
      const wrapper = mount(BFormRadio, {
        props: {state: false},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).toContain('is-invalid')
    })

    it('input does not have is-valid or is-invalid when state is null', () => {
      const wrapper = mount(BFormRadio, {
        props: {state: null},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).not.toContain('is-valid')
      expect($input.classes()).not.toContain('is-invalid')
    })

    it('input does not have is-valid or is-invalid when state is undefined', () => {
      const wrapper = mount(BFormRadio, {
        props: {state: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.classes()).not.toContain('is-valid')
      expect($input.classes()).not.toContain('is-invalid')
    })
  })

  describe('exposed methods', () => {
    it('exposes element ref', () => {
      const wrapper = mount(BFormRadio, {
        attachTo: document.body,
      })
      expect(wrapper.vm.element).toBeDefined()
    })

    it('exposes focus method', () => {
      const wrapper = mount(BFormRadio, {
        attachTo: document.body,
      })
      expect(typeof wrapper.vm.focus).toBe('function')
    })

    it('exposes blur method', () => {
      const wrapper = mount(BFormRadio, {
        attachTo: document.body,
      })
      expect(typeof wrapper.vm.blur).toBe('function')
    })
  })

  describe('radio group injection', () => {
    it('inherits disabled from injected parent group', () => {
      const wrapper = mount(BFormRadio, {
        props: {value: 'a'},
        slots: {default: 'A'},
        global: {
          provide: {
            [radioGroupKey as symbol]: {
              modelValue: ref<RadioValue>(null),
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
      const wrapper = mount(BFormRadio, {
        props: {value: 'a'},
        slots: {default: 'A'},
        global: {
          provide: {
            [radioGroupKey as symbol]: {
              modelValue: ref<RadioValue>(null),
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
      const wrapper = mount(BFormRadio, {
        props: {value: 'a'},
        slots: {default: 'A'},
        global: {
          provide: {
            [radioGroupKey as symbol]: {
              modelValue: ref<RadioValue>(null),
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
      const wrapper = mount(BFormRadio, {
        props: {value: 'a'},
        slots: {default: 'A'},
        global: {
          provide: {
            [radioGroupKey as symbol]: {
              modelValue: ref<RadioValue>(null),
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
      const wrapper = mount(BFormRadio, {
        props: {value: 'a', name: 'child-name'},
        slots: {default: 'A'},
        global: {
          provide: {
            [radioGroupKey as symbol]: {
              modelValue: ref<RadioValue>(null),
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
      const wrapper = mount(BFormRadio, {
        props: {value: 'a', form: 'child-form'},
        slots: {default: 'A'},
        global: {
          provide: {
            [radioGroupKey as symbol]: {
              modelValue: ref<RadioValue>(null),
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
      const parentModelValue = ref<RadioValue>('a')
      const wrapper = mount(BFormRadio, {
        props: {value: 'a'},
        slots: {default: 'A'},
        global: {
          provide: {
            [radioGroupKey as symbol]: {
              modelValue: parentModelValue,
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

    it('radio is unchecked when value is not parent modelValue', () => {
      const parentModelValue = ref<RadioValue>('b')
      const wrapper = mount(BFormRadio, {
        props: {value: 'a'},
        slots: {default: 'A'},
        global: {
          provide: {
            [radioGroupKey as symbol]: {
              modelValue: parentModelValue,
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
      const wrapper = mount(BFormRadio, {
        attrs: {'data-custom': 'test'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('data-custom')).toBe('test')
    })
  })
})
