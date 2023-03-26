import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BFormRadio from './BFormRadio.vue'

describe('form-radio', () => {
  enableAutoUnmount(afterEach)

  it('tag is div', () => {
    const wrapper = mount(BFormRadio)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has class form-check if prop plain and prop button are false', () => {
    const wrapper = mount(BFormRadio, {
      props: {plain: false, button: false},
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

  it('has class form-check-inline when prop inline', () => {
    const wrapper = mount(BFormRadio, {
      props: {inline: true},
    })
    expect(wrapper.classes()).toContain('form-check-inline')
  })

  it('has class form-check-inline when prop inline', () => {
    const wrapper = mount(BFormRadio, {
      props: {inline: false},
    })
    expect(wrapper.classes()).not.toContain('form-check-inline')
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

  it('has does not have class form-control-{type} when prop size is md', () => {
    const wrapper = mount(BFormRadio, {
      props: {size: 'md'},
    })
    expect(wrapper.classes()).not.toContain('form-control-md')
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

  it('child label does not have class btn-md when prop button true and prop size md', () => {
    const wrapper = mount(BFormRadio, {
      props: {button: true, size: 'md', plain: false},
    })
    const $label = wrapper.get('label')
    expect($label.classes()).not.toContain('btn-md')
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

  // TODO onMounted events
  // TODO localValue change emit events
  // TODO input element has v-model, not sure how this works. Does it bind to value??
})
