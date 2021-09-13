import {mount} from '@vue/test-utils'
import {createContainer, waitNT, waitRAF} from '../../../tests/utils'
import BFormCheckbox from './BFormCheckbox'

describe('form-checkbox', () => {
  // --- Custom checkbox structure, class and attributes tests ---

  it('default has structure <div><input><label></label></div>', async () => {
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

    wrapper.unmount()
  })

  it('default has wrapper class form-check and custom-checkbox', async () => {
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

    wrapper.unmount()
  })

  it('default has input type checkbox', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input.attributes('type')).toBeDefined()
    expect($input.attributes('type')).toEqual('checkbox')

    wrapper.unmount()
  })

  it('default does not have aria-label attribute on input', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.find('input').attributes('aria-label')).toBeUndefined()

    wrapper.unmount()
  })

  it('has aria-label attribute on input when aria-label provided', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        ariaLabel: 'bar',
      },
      slots: {
        default: 'foo',
      },
    })

    expect(wrapper.find('input').attributes('aria-label')).toBe('bar')

    wrapper.unmount()
  })

  it('default has input class form-check-input', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input.classes().length).toEqual(1)
    expect($input.classes()).toContain('form-check-input')
    expect($input.classes()).not.toContain('position-static')

    wrapper.unmount()
  })

  it('default has label class form-check-label', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $label = wrapper.find('label')
    expect($label.classes().length).toEqual(1)
    expect($label.classes()).toContain('form-check-label')

    wrapper.unmount()
  })

  it('has default slot content in label', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $label = wrapper.find('label')
    expect($label.text()).toEqual('foobar')

    wrapper.unmount()
  })

  it('has default has label when slot content not set', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
    })

    const $label = wrapper.find('label')
    expect($label.text()).toEqual('')

    wrapper.unmount()
  })

  it('default has no disabled attribute on input', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input.attributes('disabled')).toBeUndefined()

    wrapper.unmount()
  })

  it('has disabled attribute on input when prop disabled set', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        disabled: true,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input.attributes('disabled')).toBeDefined()

    wrapper.unmount()
  })

  it('default has no required attribute on input', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input.attributes('required')).toBeUndefined()

    wrapper.unmount()
  })

  it('does not have required attribute on input when prop required set and name prop not provided', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        required: true,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input.attributes('required')).toBeUndefined()

    wrapper.unmount()
  })

  it('has required attribute on input when prop required and name set', async () => {
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

    const $input = wrapper.find('input')
    expect($input.attributes('required')).toBeDefined()

    wrapper.unmount()
  })

  it('default has no name attribute on input', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input.attributes('name')).toBeUndefined()

    wrapper.unmount()
  })

  it('has name attribute on input when name prop set', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        name: 'test',
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input.attributes('name')).toBeDefined()
    expect($input.attributes('name')).toEqual('test')

    wrapper.unmount()
  })

  it('default has no form attribute on input', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input.attributes('form')).toBeUndefined()

    wrapper.unmount()
  })

  it('has form attribute on input when form prop set', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        form: 'test',
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input.attributes('form')).toBeDefined()
    expect($input.attributes('form')).toEqual('test')

    wrapper.unmount()
  })

  it('has custom attributes transferred to input element', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        id: 'foo',
        foo: 'bar',
      },
    })

    const $input = wrapper.find('input')
    expect($input.attributes('foo')).toBeDefined()
    expect($input.attributes('foo')).toEqual('bar')

    wrapper.unmount()
  })

  it('default has class form-check-inline when prop inline=true', async () => {
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

    wrapper.unmount()
  })

  it('default has no input validation classes by default', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input).toBeDefined()
    expect($input.classes()).not.toContain('is-invalid')
    expect($input.classes()).not.toContain('is-valid')

    wrapper.unmount()
  })

  it('default has no input validation classes when state=null', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        state: null,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input).toBeDefined()
    expect($input.classes()).not.toContain('is-invalid')
    expect($input.classes()).not.toContain('is-valid')

    wrapper.unmount()
  })

  it('default has input validation class is-valid when state=true', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        state: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input).toBeDefined()
    expect($input.classes()).not.toContain('is-invalid')
    expect($input.classes()).toContain('is-valid')

    wrapper.unmount()
  })

  it('default has input validation class is-invalid when state=false', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        state: false,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input).toBeDefined()
    expect($input.classes()).toContain('is-invalid')
    expect($input.classes()).not.toContain('is-valid')

    wrapper.unmount()
  })

  it('has id attribute on input when id prop set', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        id: 'test',
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input.attributes('id')).toBeDefined()
    expect($input.attributes('id')).toEqual('test')

    wrapper.unmount()
  })

  it('default has id attribute on input', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input.attributes('id')).toBeDefined()

    wrapper.unmount()
  })

  it('has for attribute on label when id prop set', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        id: 'test',
      },
      slots: {
        default: 'foobar',
      },
    })

    const $label = wrapper.find('label')
    expect($label.attributes('for')).toBeDefined()
    expect($label.attributes('for')).toEqual('test')

    wrapper.unmount()
  })

  it('default has for attribute on label equal to id property of input', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input.attributes('id')).toBeDefined()

    const $label = wrapper.find('label')
    expect($label.attributes('for')).toBeDefined()
    expect($input.attributes('id')).toEqual($label.attributes('for'))

    wrapper.unmount()
  })

  it('default has unique id attribute on input', async () => {
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

    const $input = wrapper.find('input')
    const $input2 = wrapper2.find('input')
    expect($input.attributes('id')).toBeDefined()
    expect($input2.attributes('id')).toBeDefined()
    expect($input.attributes('id')).not.toEqual($input2.attributes('id'))

    wrapper.unmount()
  })
  // --- plain styling ---

  it('plain has structure <div><input><label></label></div>', async () => {
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

    wrapper.unmount()
  })

  it('plain has no wrapper class form-check', async () => {
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

    wrapper.unmount()
  })

  it('plain has input type checkbox', async () => {
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

    const $input = wrapper.find('input')
    expect($input.attributes('type')).toBeDefined()
    expect($input.attributes('type')).toEqual('checkbox')

    wrapper.unmount()
  })

  it('plain has no input class form-check-input', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        plain: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input.classes().length).toEqual(0)
    expect($input.classes()).not.toContain('form-check-input')

    wrapper.unmount()
  })

  it('plain has no label class form-check-label', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        plain: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $label = wrapper.find('label')
    expect($label.classes()).not.toContain('form-check-label')
    expect($label.classes().length).toEqual(0)

    wrapper.unmount()
  })

  it('plain has default slot content in label', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        plain: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $label = wrapper.find('label')
    expect($label.text()).toEqual('foobar')

    wrapper.unmount()
  })

  it('plain does not have class position-static when label provided', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        plain: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.find('input').classes()).not.toContain('position-static')

    wrapper.unmount()
  })

  it('plain has no label when no default slot content', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        plain: true,
        modelValue: false,
      },
    })
    expect(wrapper.find('label').exists()).toBe(false)

    wrapper.unmount()
  })

  it('plain has class form-check-inline when prop inline=true', async () => {
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

    wrapper.unmount()
  })

  it('plain has no input validation classes by default', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        plain: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input).toBeDefined()
    expect($input.classes()).not.toContain('is-invalid')
    expect($input.classes()).not.toContain('is-valid')

    wrapper.unmount()
  })

  it('plain has no input validation classes when state=null', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        state: null,
        plain: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input).toBeDefined()
    expect($input.classes()).not.toContain('is-invalid')
    expect($input.classes()).not.toContain('is-valid')

    wrapper.unmount()
  })

  it('plain has input validation class is-valid when state=true', async () => {
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

    const $input = wrapper.find('input')
    expect($input).toBeDefined()
    expect($input.classes()).not.toContain('is-invalid')
    expect($input.classes()).toContain('is-valid')

    wrapper.unmount()
  })

  it('plain has input validation class is-invalid when state=false', async () => {
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

    const $input = wrapper.find('input')
    expect($input).toBeDefined()
    expect($input.classes()).toContain('is-invalid')
    expect($input.classes()).not.toContain('is-valid')

    wrapper.unmount()
  })

  // --- Switch styling - stand alone ---

  it('switch has structure <div><input><label></label></div>', async () => {
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

    wrapper.unmount()
  })

  it('switch has wrapper classes form-check and form-switch', async () => {
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

    wrapper.unmount()
  })

  it('switch has input type checkbox', async () => {
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

    const $input = wrapper.find('input')
    expect($input.attributes('type')).toBeDefined()
    expect($input.attributes('type')).toEqual('checkbox')

    wrapper.unmount()
  })

  it('switch has input class form-check-input', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        switch: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input.classes().length).toEqual(1)
    expect($input.classes()).toContain('form-check-input')

    wrapper.unmount()
  })

  it('switch has label class form-check-label', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        switch: true,
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $label = wrapper.find('label')
    expect($label.classes().length).toEqual(1)
    expect($label.classes()).toContain('form-check-label')

    wrapper.unmount()
  })

  // --- Button styling - stand-alone mode ---

  it('stand-alone button has structure <div><input><label></label></div>', async () => {
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

    wrapper.unmount()
  })

  it('stand-alone button has wrapper classes btn-check', async () => {
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

    const $input = wrapper.find('input')
    expect($input.classes().length).toEqual(1)
    expect($input.classes()).toContain('btn-check')

    wrapper.unmount()
  })

  it('stand-alone button has label classes btn and btn-secondary when unchecked', async () => {
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

    const $label = wrapper.find('label')
    expect($label).toBeDefined()
    expect($label.classes().length).toEqual(2)
    expect($label.classes()).not.toContain('active')
    expect($label.classes()).not.toContain('focus')
    expect($label.classes()).toContain('btn')
    expect($label.classes()).toContain('btn-secondary')

    wrapper.unmount()
  })

  it('stand-alone button has label classes btn, btn-secondary and active when checked by default', async () => {
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

    const $label = wrapper.find('label')
    expect($label).toBeDefined()
    expect($label.classes().length).toEqual(3)
    expect($label.classes()).not.toContain('focus')
    expect($label.classes()).toContain('btn')
    expect($label.classes()).toContain('btn-secondary')
    expect($label.classes()).toContain('active')

    wrapper.unmount()
  })

  it('stand-alone button has label class active when clicked (checked)', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        'button': true,
        'modelValue': false,
        'value': 'a',
        'onUpdate:modelValue': (modelValue) => wrapper.setProps({modelValue}),
      },
      slots: {
        default: 'foobar',
      },
    })

    const $label = wrapper.find('label')
    expect($label).toBeDefined()

    const $input = wrapper.find('input')
    expect($input).toBeDefined()
    expect($label.classes().length).toEqual(2)
    expect($label.classes()).not.toContain('focus')
    expect($label.classes()).not.toContain('active')
    expect($label.classes()).toContain('btn')
    expect($label.classes()).toContain('btn-secondary')

    await $input.trigger('click')
    expect($label.classes().length).toEqual(3)
    expect($label.classes()).toContain('active')
    expect($label.classes()).toContain('btn')
    expect($label.classes()).toContain('btn-secondary')

    wrapper.unmount()
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

    const $label = wrapper.find('label')
    expect($label).toBeDefined()

    const $input = wrapper.find('input')
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

    wrapper.unmount()
  })

  it('stand-alone button has label btn-primary when prop btn-variant set to primary', async () => {
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

    const $label = wrapper.find('label')
    expect($label).toBeDefined()
    expect($label.classes().length).toEqual(2)
    expect($label.classes()).not.toContain('focus')
    expect($label.classes()).not.toContain('active')
    expect($label.classes()).not.toContain('btn-secondary')
    expect($label.classes()).toContain('btn')
    expect($label.classes()).toContain('btn-primary')

    wrapper.unmount()
  })

  it('plain has no effect on stand-alone button', async () => {
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

    const $input = wrapper.find('input')
    expect($input.classes().length).toEqual(1)
    expect($input.classes()).toContain('btn-check')

    wrapper.unmount()
  })

  // --- Indeterminate testing ---

  it('does not have input indeterminate set by default', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input).toBeDefined()
    expect($input.element.indeterminate).toBe(false)

    wrapper.unmount()
  })

  it('has input indeterminate set by when indeterminate=true', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
        indeterminate: true,
      },
      slots: {
        default: 'foobar',
      },
    })

    const $input = wrapper.find('input')
    expect($input).toBeDefined()
    expect($input.element.indeterminate).toBe(true)

    wrapper.unmount()
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

    const $input = wrapper.find('input')
    expect($input).toBeDefined()
    expect($input.element.indeterminate).toBe(false)

    await wrapper.setProps({indeterminate: true})
    expect($input.element.indeterminate).toBe(true)

    await wrapper.setProps({indeterminate: false})
    expect($input.element.indeterminate).toBe(false)

    wrapper.unmount()
  })

  // --- Functionality testing ---

  it('default has internal localChecked=false when prop modelValue=false', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(wrapper.vm.localChecked).toEqual(false)

    const $input = wrapper.find('input')
    expect($input).toBeDefined()
    expect($input.element.checked).toBe(false)

    wrapper.unmount()
  })

  it('default has internal localChecked=true when prop modelValue=true', async () => {
    const wrapper = mount(BFormCheckbox, {
      props: {
        modelValue: true,
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(wrapper.vm.localChecked).toEqual(true)

    const $input = wrapper.find('input')
    expect($input).toBeDefined()
    expect($input.element.checked).toBe(true)

    wrapper.unmount()
  })

  it('default has internal localChecked null', async () => {
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
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(wrapper.vm.localChecked).toBe(null)

    wrapper.unmount()
  })

  it('default has internal localChecked set to checked prop', async () => {
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
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(wrapper.vm.localChecked).toEqual('foo')

    wrapper.unmount()
  })

  it('default has internal localChecked set to value when checked=value', async () => {
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
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(wrapper.vm.localChecked).toEqual('bar')

    wrapper.unmount()
  })

  it('default has internal localChecked set to value when checked changed to value', async () => {
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
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(wrapper.vm.localChecked).toBe(null)

    await wrapper.setProps({modelValue: 'bar'})
    expect(wrapper.vm.localChecked).toEqual('bar')
    expect(wrapper.emitted('input')).toBeDefined()

    const $last = wrapper.emitted('input').length - 1
    expect(wrapper.emitted('input')[$last]).toBeDefined()
    expect(wrapper.emitted('input')[$last][0]).toEqual('bar')

    wrapper.unmount()
  })

  it('emits a change event when clicked', async () => {
    const wrapper = mount(BFormCheckbox, {
      attachTo: createContainer(),
      props: {
        uncheckedValue: 'foo',
        value: 'bar',
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(wrapper.vm.localChecked).toBe(null)
    expect(wrapper.emitted('change')).toBeUndefined()

    const $input = wrapper.find('input')
    expect($input).toBeDefined()

    await $input.trigger('click')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(1)
    expect(wrapper.emitted('change')[0][0]).toEqual('bar')

    await $input.trigger('click')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(2)
    expect(wrapper.emitted('change')[1][0]).toEqual('foo')

    wrapper.unmount()
  })

  it('emits a change event when label clicked', async () => {
    const wrapper = mount(BFormCheckbox, {
      attachTo: createContainer(),
      props: {
        uncheckedValue: 'foo',
        value: 'bar',
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(wrapper.vm.localChecked).toBe(null)
    expect(wrapper.emitted('change')).toBeUndefined()

    const $label = wrapper.find('label')
    expect($label).toBeDefined()

    await $label.trigger('click')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(1)
    expect(wrapper.emitted('change')[0][0]).toEqual('bar')

    await $label.trigger('click')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(2)
    expect(wrapper.emitted('change')[1][0]).toEqual('foo')

    wrapper.unmount()
  })

  it('does not emit a change event when clicked if disabled', async () => {
    const wrapper = mount(BFormCheckbox, {
      attachTo: createContainer(),
      props: {
        uncheckedValue: 'foo',
        value: 'bar',
        disabled: true,
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(wrapper.vm.localChecked).toBe(null)
    expect(wrapper.emitted('change')).toBeUndefined()

    const $input = wrapper.find('input')
    expect($input).toBeDefined()

    await $input.trigger('click')
    expect(wrapper.emitted('change')).toBeUndefined()

    wrapper.unmount()
  })

  it('does not emit a change event when label clicked if disabled', async () => {
    const wrapper = mount(BFormCheckbox, {
      attachTo: createContainer(),
      props: {
        uncheckedValue: 'foo',
        value: 'bar',
        disabled: true,
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(wrapper.vm.localChecked).toBe(null)
    expect(wrapper.emitted('change')).toBeUndefined()

    const $label = wrapper.find('label')
    expect($label).toBeDefined()

    await $label.trigger('click')
    expect(wrapper.emitted('change')).toBeUndefined()

    wrapper.unmount()
  })

  it('works when v-model bound to an array', async () => {
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
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(Array.isArray(wrapper.vm.localChecked)).toBe(true)
    expect(wrapper.vm.localChecked.length).toBe(1)
    expect(wrapper.vm.localChecked[0]).toEqual('foo')

    const $input = wrapper.find('input')
    expect($input).toBeDefined()
    expect($input.element.checked).toBe(false)

    await $input.trigger('click')
    expect(Array.isArray(wrapper.vm.localChecked)).toBe(true)
    expect(wrapper.vm.localChecked.length).toBe(2)
    expect(wrapper.vm.localChecked[0]).toEqual('foo')
    expect(wrapper.vm.localChecked[1]).toEqual('bar')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(1)
    expect(wrapper.emitted('change')[0][0]).toEqual(['foo', 'bar'])

    expect($input).toBeDefined()
    expect($input.element.checked).toBe(true)

    await $input.trigger('click')
    expect(Array.isArray(wrapper.vm.localChecked)).toBe(true)
    expect(wrapper.vm.localChecked.length).toBe(1)
    expect(wrapper.vm.localChecked[0]).toEqual('foo')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(2)
    expect(wrapper.emitted('change')[1][0]).toEqual(['foo'])

    expect($input).toBeDefined()
    expect($input.element.checked).toBe(false)

    await wrapper.setProps({modelValue: []})
    expect(Array.isArray(wrapper.vm.localChecked)).toBe(true)
    expect(wrapper.vm.localChecked.length).toBe(0)
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(2)

    expect($input).toBeDefined()
    expect($input.element.checked).toBe(false)

    await $input.trigger('click')
    expect(Array.isArray(wrapper.vm.localChecked)).toBe(true)
    expect(wrapper.vm.localChecked.length).toBe(1)
    expect(wrapper.vm.localChecked[0]).toEqual('bar')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(3)
    expect(wrapper.emitted('change')[2][0]).toEqual(['bar'])

    expect($input).toBeDefined()
    expect($input.element.checked).toBe(true)

    await $input.trigger('click')
    expect(Array.isArray(wrapper.vm.localChecked)).toBe(true)
    expect(wrapper.vm.localChecked.length).toBe(0)
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(4)
    expect(wrapper.emitted('change')[3][0]).toEqual([])

    expect($input).toBeDefined()
    expect($input.element.checked).toBe(false)

    wrapper.unmount()
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
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(Array.isArray(wrapper.vm.localChecked)).toBe(true)
    expect(wrapper.vm.localChecked.length).toBe(1)
    expect(wrapper.vm.localChecked[0]).toEqual('foo')

    const $input = wrapper.find('input')
    expect($input).toBeDefined()
    expect($input.element.checked).toBe(false)

    await wrapper.setProps({modelValue: ['bar', 'foo']})

    expect($input).toBeDefined()
    expect($input.element.checked).toBe(true)

    expect(wrapper.vm.localChecked).toBeDefined()
    expect(Array.isArray(wrapper.vm.localChecked)).toBe(true)
    expect(wrapper.vm.localChecked.length).toBe(2)
    expect(wrapper.vm.localChecked[0]).toEqual('bar')
    expect(wrapper.vm.localChecked[1]).toEqual('foo')

    wrapper.unmount()
  })

  it('works when value is an object', async () => {
    const wrapper = mount(BFormCheckbox, {
      attachTo: createContainer(),
      props: {
        value: {bar: 1, baz: 2},
        modelValue: ['foo'],
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(Array.isArray(wrapper.vm.localChecked)).toBe(true)
    expect(wrapper.vm.localChecked.length).toBe(1)
    expect(wrapper.vm.localChecked[0]).toEqual('foo')

    const $input = wrapper.find('input')
    expect($input).toBeDefined()

    await $input.trigger('click')
    expect(Array.isArray(wrapper.vm.localChecked)).toBe(true)
    expect(wrapper.vm.localChecked.length).toBe(2)
    expect(wrapper.vm.localChecked[0]).toEqual('foo')
    expect(wrapper.vm.localChecked[1]).toEqual({bar: 1, baz: 2})

    await $input.trigger('click')
    expect(Array.isArray(wrapper.vm.localChecked)).toBe(true)
    expect(wrapper.vm.localChecked.length).toBe(1)
    expect(wrapper.vm.localChecked[0]).toEqual('foo')

    wrapper.unmount()
  })

  it('focus() and blur() methods work', async () => {
    const wrapper = mount(BFormCheckbox, {
      attachTo: createContainer(),
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()

    const $input = wrapper.find('input')
    expect($input).toBeDefined()
    expect(document).toBeDefined()

    expect(wrapper.vm.focus).toBeDefined()
    expect(typeof wrapper.vm.focus).toBe('function')
    expect(wrapper.vm.blur).toBeDefined()
    expect(typeof wrapper.vm.blur).toBe('function')
    expect($input.element).not.toBe(document.activeElement)

    wrapper.vm.focus()
    await waitNT(wrapper.vm)
    expect($input.element).toBe(document.activeElement)

    wrapper.vm.blur()
    await waitNT(wrapper.vm)
    expect($input.element).not.toBe(document.activeElement)

    wrapper.unmount()
  })

  // These tests are wrapped in a new describe to limit the scope
  // of the `getBoundingClientRect()` mock
  describe('prop `autofocus`', () => {
    const origGetBCR = Element.prototype.getBoundingClientRect

    beforeEach(() => {
      // Mock `getBoundingClientRect()` so that the `isVisible(el)` test returns `true`
      // In our test below, all pagination buttons would normally be visible
      Element.prototype.getBoundingClientRect = jest.fn(() => ({
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
      await waitNT(wrapper.vm)
      await waitRAF()

      const $input = wrapper.find('input')
      expect($input.exists()).toBe(true)
      expect(document).toBeDefined()
      expect(document.activeElement).toBe($input.element)

      wrapper.unmount()
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
      await waitNT(wrapper.vm)
      await waitRAF()

      const $input = wrapper.find('input')
      expect($input.exists()).toBe(true)
      expect(document).toBeDefined()
      expect(document.activeElement).not.toBe($input.element)

      wrapper.unmount()
    })
  })
})
