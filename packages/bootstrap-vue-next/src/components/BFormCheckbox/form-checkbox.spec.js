// @vitest-environment jsdom
import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, beforeEach, describe, expect, it, vitest} from 'vitest'
import {nextTick} from 'vue'
import {createContainer, waitRAF} from '../../../tests/utils'
import BFormCheckbox from './BFormCheckbox.vue'

describe('form-checkbox', () => {
  enableAutoUnmount(afterEach)
  // --- Custom checkbox structure, class and attributes tests ---

  it('default has structure <div><input><label></label></div>', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper).toBeDefined()
    expect(wrapper.element.tagName).toBe('DIV')

    const $children = wrapper.element.children
    expect($children.length).toEqual(2)
    expect($children[0].tagName).toEqual('INPUT')
    expect($children[1].tagName).toEqual('LABEL')
  })

  it('default has wrapper class form-check and custom-checkbox', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.classes().length).toEqual(1)
    expect(wrapper.classes()).toContain('form-check')
  })

  it('default has input type checkbox', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('type')).toBeDefined()
    expect($input.attributes('type')).toEqual('checkbox')
  })

  it('default does not have aria-label attribute on input', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.get('input').attributes('aria-label')).toBeUndefined()
  })

  it('has aria-label attribute on input when aria-label provided', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        ariaLabel: 'bar',
      },
      slots: {
        default: 'foo',
      },
    })

    expect(wrapper.get('input').attributes('aria-label')).toBe('bar')
  })

  it('default has input class form-check-input', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.classes().length).toEqual(1)
    expect($input.classes()).toContain('form-check-input')
    expect($input.classes()).not.toContain('position-static')
  })

  it('default has label class form-check-label', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $label = wrapper.get('label')
    expect($label.classes().length).toEqual(1)
    expect($label.classes()).toContain('form-check-label')
  })

  it('has default slot content in label', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $label = wrapper.get('label')
    expect($label.text()).toEqual('foobar')
  })

  it('has default has label when slot content not set', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
    })

    const $label = wrapper.get('label')
    expect($label.text()).toEqual('')
  })

  it('default has no disabled attribute on input', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('disabled')).toBeUndefined()
  })

  it('has disabled attribute on input when prop disabled set', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        disabled: true,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('disabled')).toBeDefined()
  })

  it('default has no required attribute on input', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('required')).toBeUndefined()
  })

  it('does not have required attribute on input when prop required set and name prop not provided', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        required: true,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('required')).toBeUndefined()
  })

  it('has required attribute on input when prop required and name set', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        name: 'test',
        required: true,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('required')).toBeDefined()
  })

  it('default has no name attribute on input', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('name')).toBeUndefined()
  })

  it('has name attribute on input when name prop set', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        name: 'test',
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('name')).toBeDefined()
    expect($input.attributes('name')).toEqual('test')
  })

  it('default has no form attribute on input', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('form')).toBeUndefined()
  })

  it('has form attribute on input when form prop set', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        form: 'test',
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('form')).toBeDefined()
    expect($input.attributes('form')).toEqual('test')
  })

  it('has custom attributes transferred to input element', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        id: 'foo',
        foo: 'bar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('foo')).toBeDefined()
    expect($input.attributes('foo')).toEqual('bar')
  })

  it('default has class form-check-inline when prop inline=true', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        inline: true,
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.classes().length).toEqual(2)
    expect(wrapper.classes()).toContain('form-check')
    expect(wrapper.classes()).toContain('form-check-inline')
  })

  it('default has no input validation classes by default', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input).toBeDefined()
    expect($input.classes()).not.toContain('is-invalid')
    expect($input.classes()).not.toContain('is-valid')
  })

  it('default has no input validation classes when state=undefined', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        state: undefined,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input).toBeDefined()
    expect($input.classes()).not.toContain('is-invalid')
    expect($input.classes()).not.toContain('is-valid')
  })

  it('default has input validation class is-valid when state=true', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        state: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input).toBeDefined()
    expect($input.classes()).not.toContain('is-invalid')
    expect($input.classes()).toContain('is-valid')
  })

  it('default has input validation class is-invalid when state=false', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        state: false,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input).toBeDefined()
    expect($input.classes()).toContain('is-invalid')
    expect($input.classes()).not.toContain('is-valid')
  })

  it('has id attribute on input when id prop set', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        id: 'test',
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('id')).toBeDefined()
    expect($input.attributes('id')).toEqual('test')
  })

  it('default has id attribute on input', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('id')).toBeDefined()
  })

  it('has for attribute on label when id prop set', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        id: 'test',
      },
      slots: {
        default: 'foobar',
      },
    })

    const $label = wrapper.get('label')
    expect($label.attributes('for')).toBeDefined()
    expect($label.attributes('for')).toEqual('test')
  })

  it('default has for attribute on label equal to id property of input', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('id')).toBeDefined()

    const $label = wrapper.get('label')
    expect($label.attributes('for')).toBeDefined()
    expect($input.attributes('id')).toEqual($label.attributes('for'))
  })

  it('default has unique id attribute on input', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const wrapper2 = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    const $input2 = wrapper2.get('input')
    expect($input.attributes('id')).toBeDefined()
    expect($input2.attributes('id')).toBeDefined()
    expect($input.attributes('id')).not.toEqual($input2.attributes('id'))
  })
  // --- plain styling ---

  it('plain has structure <div><input><label></label></div>', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        plain: true,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper).toBeDefined()
    expect(wrapper.element.tagName).toBe('DIV')

    const $children = wrapper.element.children
    expect($children.length).toEqual(2)
    expect($children[0].tagName).toEqual('INPUT')
    expect($children[1].tagName).toEqual('LABEL')
  })

  it('plain has no wrapper class form-check', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        plain: true,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.classes().length).toEqual(0)
    expect(wrapper.classes()).not.toContain('form-check')
  })

  it('plain has input type checkbox', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        plain: true,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('type')).toBeDefined()
    expect($input.attributes('type')).toEqual('checkbox')
  })

  it('plain has no input class form-check-input', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        plain: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.classes().length).toEqual(0)
    expect($input.classes()).not.toContain('form-check-input')
  })

  it('plain has no label class form-check-label', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        plain: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $label = wrapper.get('label')
    expect($label.classes()).not.toContain('form-check-label')
    expect($label.classes().length).toEqual(0)
  })

  it('plain has default slot content in label', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        plain: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $label = wrapper.get('label')
    expect($label.text()).toEqual('foobar')
  })

  it('plain does not have class position-static when label provided', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        plain: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.get('input').classes()).not.toContain('position-static')
  })

  it('plain has no label when no default slot content', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        plain: true,
        modelValue: false,
      },
    })
    expect(wrapper.find('label').exists()).toBe(false)
  })

  it('plain has class form-check-inline when prop inline=true', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        plain: true,
        modelValue: false,
        inline: true,
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.classes()).toContain('form-check-inline')
  })

  it('plain has no input validation classes by default', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        plain: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input).toBeDefined()
    expect($input.classes()).not.toContain('is-invalid')
    expect($input.classes()).not.toContain('is-valid')
  })

  it('plain has no input validation classes when state=undefined', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        state: undefined,
        plain: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input).toBeDefined()
    expect($input.classes()).not.toContain('is-invalid')
    expect($input.classes()).not.toContain('is-valid')
  })

  it('plain has input validation class is-valid when state=true', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        state: true,
        plain: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input).toBeDefined()
    expect($input.classes()).not.toContain('is-invalid')
    expect($input.classes()).toContain('is-valid')
  })

  it('plain has input validation class is-invalid when state=false', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        state: false,
        plain: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input).toBeDefined()
    expect($input.classes()).toContain('is-invalid')
    expect($input.classes()).not.toContain('is-valid')
  })

  // --- Switch styling - stand alone ---

  it('switch has structure <div><input><label></label></div>', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        switch: true,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper).toBeDefined()
    expect(wrapper.element.tagName).toBe('DIV')

    const $children = wrapper.element.children
    expect($children.length).toEqual(2)
    expect($children[0].tagName).toEqual('INPUT')
    expect($children[1].tagName).toEqual('LABEL')
  })

  it('switch has wrapper classes form-check and form-switch', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        switch: true,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.classes().length).toEqual(2)
    expect(wrapper.classes()).toContain('form-check')
    expect(wrapper.classes()).toContain('form-switch')
  })

  it('switch has input type checkbox', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        switch: true,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('type')).toBeDefined()
    expect($input.attributes('type')).toEqual('checkbox')
  })

  it('switch has input class form-check-input', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        switch: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.classes().length).toEqual(1)
    expect($input.classes()).toContain('form-check-input')
  })

  it('switch has label class form-check-label', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        switch: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $label = wrapper.get('label')
    expect($label.classes().length).toEqual(1)
    expect($label.classes()).toContain('form-check-label')
  })

  // --- Button styling - stand-alone mode ---

  it('stand-alone button has structure <div><input><label></label></div>', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        button: true,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper).toBeDefined()
    expect(wrapper.element.tagName).toBe('DIV')

    const $children = wrapper.element.children
    expect($children.length).toEqual(2)
    expect($children[0].tagName).toEqual('INPUT')
    expect($children[1].tagName).toEqual('LABEL')
  })

  it('stand-alone button has wrapper classes btn-check', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        button: true,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.classes().length).toEqual(1)
    expect($input.classes()).toContain('btn-check')
  })

  it('stand-alone button has label classes btn and btn-secondary when unchecked', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        button: true,
        modelValue: false,
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })

    const $label = wrapper.get('label')
    expect($label).toBeDefined()
    expect($label.classes().length).toEqual(2)
    expect($label.classes()).not.toContain('active')
    expect($label.classes()).not.toContain('focus')
    expect($label.classes()).toContain('btn')
    expect($label.classes()).toContain('btn-secondary')
  })

  it('stand-alone button has label classes btn, btn-secondary and active when checked by default', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        button: true,
        modelValue: 'a',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })

    const $label = wrapper.get('label')
    expect($label).toBeDefined()
    expect($label.classes().length).toEqual(3)
    expect($label.classes()).not.toContain('focus')
    expect($label.classes()).toContain('btn')
    expect($label.classes()).toContain('btn-secondary')
    expect($label.classes()).toContain('active')
  })

  it('stand-alone button has label class active when clicked (checked)', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        button: true,
        modelValue: false,
        value: 'a',
      },
      attrs: {
        'onUpdate:modelValue': (modelValue) => wrapper.setProps({modelValue}),
      },
      slots: {
        default: 'foobar',
      },
    })

    const $label = wrapper.get('label')
    expect($label).toBeDefined()

    const $input = wrapper.get('input')
    expect($input).toBeDefined()
    expect($label.classes().length).toEqual(2)
    expect($label.classes()).not.toContain('focus')
    expect($label.classes()).not.toContain('active')
    expect($label.classes()).toContain('btn')
    expect($label.classes()).toContain('btn-secondary')

    await $input.setValue(true)
    expect($label.classes().length).toEqual(3)
    expect($label.classes()).toContain('active')
    expect($label.classes()).toContain('btn')
    expect($label.classes()).toContain('btn-secondary')
  })

  it('stand-alone button has label class focus when input focused', async () => {
    const wrapper = mount(BFormCheckbox, {
      attachTo: createContainer(),
      props: {
        button: true,
        modelValue: false,
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })

    const $label = wrapper.get('label')
    expect($label).toBeDefined()

    const $input = wrapper.get('input')
    expect($label.classes().length).toEqual(2)
    expect($label.classes()).not.toContain('focus')
    expect($label.classes()).not.toContain('active')
    expect($label.classes()).toContain('btn')
    expect($label.classes()).toContain('btn-secondary')
    expect($input).toBeDefined()

    await $input.trigger('focus')
    expect($label.classes().length).toEqual(3)
    expect($label.classes()).toContain('focus')

    await $input.trigger('blur')
    expect($label.classes().length).toEqual(2)
    expect($label.classes()).not.toContain('focus')
  })

  it('stand-alone button has label btn-primary when prop btn-variant set to primary', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        button: true,
        buttonVariant: 'primary',
        modelValue: false,
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })

    const $label = wrapper.get('label')
    expect($label).toBeDefined()
    expect($label.classes().length).toEqual(2)
    expect($label.classes()).not.toContain('focus')
    expect($label.classes()).not.toContain('active')
    expect($label.classes()).not.toContain('btn-secondary')
    expect($label.classes()).toContain('btn')
    expect($label.classes()).toContain('btn-primary')
  })

  it('plain has no effect on stand-alone button', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        button: true,
        plain: true,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.classes().length).toEqual(1)
    expect($input.classes()).toContain('btn-check')
  })

  // --- Indeterminate testing ---

  it('does not have input indeterminate set by default', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input).toBeDefined()
    expect($input.element.indeterminate).toBe(false)
  })

  it('has input indeterminate set by when indeterminate=true', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        indeterminate: true,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input).toBeDefined()
    expect($input.element.indeterminate).toBe(true)
  })

  it('has input indeterminate set by when indeterminate set to true after mount', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        indeterminate: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input).toBeDefined()
    expect($input.element.indeterminate).toBe(false)

    await wrapper.setProps({indeterminate: true})
    expect($input.element.indeterminate).toBe(true)

    await wrapper.setProps({indeterminate: false})
    expect($input.element.indeterminate).toBe(false)
  })

  // --- Functionality testing ---

  it('default has internal modelValue=false when prop modelValue=false', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.modelValue).toBeDefined()
    expect(wrapper.vm.modelValue).toEqual(false)

    const $input = wrapper.get('input')
    expect($input).toBeDefined()
    expect($input.element.checked).toBe(false)
  })

  it('default has internal modelValue=true when prop modelValue=true', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: true,
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.modelValue).toBeDefined()
    expect(wrapper.vm.modelValue).toEqual(true)

    const $input = wrapper.get('input')
    expect($input).toBeDefined()
    expect($input.element.checked).toBe(true)
  })

  it('default has internal modelValue null', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        uncheckedValue: 'foo',
        value: 'bar',
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.modelValue).toBeUndefined()
  })

  it('default has internal modelValue set to checked prop', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        uncheckedValue: 'foo',
        value: 'bar',
        modelValue: 'foo',
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.modelValue).toBeDefined()
    expect(wrapper.vm.modelValue).toEqual('foo')
  })

  it('default has internal modelValue set to value when checked=value', () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        uncheckedValue: 'foo',
        value: 'bar',
        modelValue: 'bar',
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.modelValue).toBeDefined()
    expect(wrapper.vm.modelValue).toEqual('bar')
  })

  it('emits a change event when clicked', async () => {
    const wrapper = mount(BFormCheckbox, {
      attachTo: createContainer(),
      props: {
        uncheckedValue: 'foo',
        value: 'bar',
      },
      attrs: {
        'onUpdate:modelValue': (modelValue) => wrapper.setProps({modelValue}),
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.modelValue).toBeUndefined()
    expect(wrapper.emitted('change')).toBeUndefined()

    const $input = wrapper.get('input')
    expect($input).toBeDefined()

    await $input.setValue(true)
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(1)
    expect(wrapper.emitted('change')[0][0]).toEqual('bar')

    await $input.setValue(false)
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(2)
    expect(wrapper.emitted('change')[1][0]).toEqual('foo')
  })

  it('emits a change event when label clicked', async () => {
    const wrapper = mount(BFormCheckbox, {
      attachTo: createContainer(),
      props: {
        uncheckedValue: 'foo',
        value: 'bar',
      },
      attrs: {
        'onUpdate:modelValue': (modelValue) => wrapper.setProps({modelValue}),
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.modelValue).toBeUndefined()
    expect(wrapper.emitted('change')).toBeUndefined()

    const $label = wrapper.get('label')
    expect($label).toBeDefined()

    await $label.trigger('click')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(1)
    expect(wrapper.emitted('change')[0][0]).toEqual('bar')

    await $label.trigger('click')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(2)
    expect(wrapper.emitted('change')[1][0]).toEqual('foo')
  })

  it('does not emit a change event when clicked if disabled', async () => {
    const wrapper = mount(BFormCheckbox, {
      attachTo: createContainer(),
      props: {
        uncheckedValue: 'foo',
        value: 'bar',
        disabled: true,
      },
      attrs: {
        'onUpdate:modelValue': (modelValue) => wrapper.setProps({modelValue}),
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.modelValue).toBeUndefined()
    expect(wrapper.emitted('change')).toBeUndefined()

    const $input = wrapper.get('input')
    expect($input).toBeDefined()

    await $input.trigger('click')
    expect(wrapper.emitted('change')).toBeUndefined()
  })

  it('does not emit a change event when label clicked if disabled', async () => {
    const wrapper = mount(BFormCheckbox, {
      attachTo: createContainer(),
      props: {
        uncheckedValue: 'foo',
        value: 'bar',
        disabled: true,
      },
      attrs: {
        'onUpdate:modelValue': (modelValue) => wrapper.setProps({modelValue}),
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.modelValue).toBeUndefined()
    expect(wrapper.emitted('change')).toBeUndefined()

    const $label = wrapper.get('label')
    expect($label).toBeDefined()

    await $label.trigger('click')
    expect(wrapper.emitted('change')).toBeUndefined()
  })

  it('works when v-model bound to an array', async () => {
    const wrapper = mount(BFormCheckbox, {
      attachTo: createContainer(),
      props: {
        value: 'bar',
        modelValue: ['foo'],
      },
      attrs: {
        'onUpdate:modelValue': (modelValue) => wrapper.setProps({modelValue}),
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.modelValue).toBeDefined()
    expect(Array.isArray(wrapper.vm.modelValue)).toBe(true)
    expect(wrapper.vm.modelValue.length).toBe(1)
    expect(wrapper.vm.modelValue[0]).toEqual('foo')

    const $input = wrapper.get('input')
    expect($input).toBeDefined()
    expect($input.element.checked).toBe(false)

    await $input.trigger('click')
    expect(Array.isArray(wrapper.vm.modelValue)).toBe(true)
    expect(wrapper.vm.modelValue.length).toBe(2)
    expect(wrapper.vm.modelValue[0]).toEqual('foo')
    expect(wrapper.vm.modelValue[1]).toEqual('bar')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(1)
    expect(wrapper.emitted('change')[0][0]).toEqual(['foo', 'bar'])

    expect($input).toBeDefined()
    expect($input.element.checked).toBe(true)

    await $input.trigger('click')
    expect(Array.isArray(wrapper.vm.modelValue)).toBe(true)
    expect(wrapper.vm.modelValue.length).toBe(1)
    expect(wrapper.vm.modelValue[0]).toEqual('foo')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(2)
    expect(wrapper.emitted('change')[1][0]).toEqual(['foo'])

    expect($input).toBeDefined()
    expect($input.element.checked).toBe(false)

    await wrapper.setProps({modelValue: []})
    expect(Array.isArray(wrapper.vm.modelValue)).toBe(true)
    expect(wrapper.vm.modelValue.length).toBe(0)
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(2)

    expect($input).toBeDefined()
    expect($input.element.checked).toBe(false)

    await $input.trigger('click')
    expect(Array.isArray(wrapper.vm.modelValue)).toBe(true)
    expect(wrapper.vm.modelValue.length).toBe(1)
    expect(wrapper.vm.modelValue[0]).toEqual('bar')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(3)
    expect(wrapper.emitted('change')[2][0]).toEqual(['bar'])

    expect($input).toBeDefined()
    expect($input.element.checked).toBe(true)

    await $input.trigger('click')
    expect(Array.isArray(wrapper.vm.modelValue)).toBe(true)
    expect(wrapper.vm.modelValue.length).toBe(0)
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(4)
    expect(wrapper.emitted('change')[3][0]).toEqual([])

    expect($input).toBeDefined()
    expect($input.element.checked).toBe(false)
  })

  it('should react to model changes when bound to an array', async () => {
    const wrapper = mount(BFormCheckbox, {
      attachTo: createContainer(),
      props: {
        value: 'bar',
        modelValue: ['foo'],
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.modelValue).toBeDefined()
    expect(Array.isArray(wrapper.vm.modelValue)).toBe(true)
    expect(wrapper.vm.modelValue.length).toBe(1)
    expect(wrapper.vm.modelValue[0]).toEqual('foo')

    const $input = wrapper.get('input')
    expect($input).toBeDefined()
    expect($input.element.checked).toBe(false)

    await wrapper.setProps({modelValue: ['bar', 'foo']})

    expect($input).toBeDefined()
    expect($input.element.checked).toBe(true)

    expect(wrapper.vm.modelValue).toBeDefined()
    expect(Array.isArray(wrapper.vm.modelValue)).toBe(true)
    expect(wrapper.vm.modelValue.length).toBe(2)
    expect(wrapper.vm.modelValue[0]).toEqual('bar')
    expect(wrapper.vm.modelValue[1]).toEqual('foo')
  })

  it('works when value is an object', async () => {
    const wrapper = mount(BFormCheckbox, {
      attachTo: createContainer(),
      props: {
        value: {bar: 1, baz: 2},
        modelValue: ['foo'],
      },
      attrs: {
        'onUpdate:modelValue': (modelValue) => wrapper.setProps({modelValue}),
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.modelValue).toBeDefined()
    expect(Array.isArray(wrapper.vm.modelValue)).toBe(true)
    expect(wrapper.vm.modelValue.length).toBe(1)
    expect(wrapper.vm.modelValue[0]).toEqual('foo')

    const $input = wrapper.get('input')
    expect($input).toBeDefined()

    await $input.trigger('click')
    expect(Array.isArray(wrapper.vm.modelValue)).toBe(true)
    expect(wrapper.vm.modelValue.length).toBe(2)
    expect(wrapper.vm.modelValue[0]).toEqual('foo')
    expect(wrapper.vm.modelValue[1]).toEqual({bar: 1, baz: 2})

    await $input.trigger('click')
    expect(Array.isArray(wrapper.vm.modelValue)).toBe(true)
    expect(wrapper.vm.modelValue.length).toBe(1)
    expect(wrapper.vm.modelValue[0]).toEqual('foo')
  })
  // These tests are wrapped in a new describe to limit the scope
  // of the `getBoundingClientRect()` mock
  describe('prop `autofocus`', () => {
    const origGetBCR = Element.prototype.getBoundingClientRect

    beforeEach(() => {
      // Mock `getBoundingClientRect()` so that the `isVisible(el)` test returns `true`
      // In our test below, all pagination buttons would normally be visible
      Element.prototype.getBoundingClientRect = vitest.fn(() => ({
        width: 24,
        height: 24,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }))
    })

    afterEach(() => {
      // Restore prototype
      Element.prototype.getBoundingClientRect = origGetBCR
    })

    it('works when true', async () => {
      const wrapper = mount(BFormCheckbox, {
        attachTo: createContainer(),
        props: {
          modelValue: false,
          autofocus: true,
        },
        slots: {
          default: 'foobar',
        },
      })

      expect(wrapper.vm).toBeDefined()
      await nextTick()
      await waitRAF()

      const $input = wrapper.find('input')
      expect($input.exists()).toBe(true)
      expect(document).toBeDefined()
      expect(document.activeElement).toBe($input.element)
    })

    it('does not auto focus when false', async () => {
      const wrapper = mount(BFormCheckbox, {
        attachTo: createContainer(),
        props: {
          modelValue: false,
          autofocus: false,
        },
        slots: {
          default: 'foobar',
        },
      })

      expect(wrapper.vm).toBeDefined()
      await nextTick()
      await waitRAF()

      const $input = wrapper.find('input')
      expect($input.exists()).toBe(true)
      expect(document).toBeDefined()
      expect(document.activeElement).not.toBe($input.element)
    })
  })
})
