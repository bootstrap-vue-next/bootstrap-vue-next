/* eslint-disable no-return-await */
import {mount} from '@vue/test-utils'
import {createContainer, waitNT, waitRAF} from '../../../tests/utils'
import BFormRadio from './BFormRadio'

describe('form-radio', () => {
  /* Custom radio structure, class and attributes tests */

  it('default has structure <div><input><label></label></div>', async () => {
    const wrapper = mount(BFormRadio, {
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
    const {children} = wrapper.element
    expect(children.length).toEqual(2)
    expect(children[0].tagName).toEqual('INPUT')
    expect(children[1].tagName).toEqual('LABEL')

    wrapper.unmount()
  })

  it('default has wrapper class form-check', async () => {
    const wrapper = mount(BFormRadio, {
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

  it('default has input type radio', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input.attributes('type')).toBeDefined()
    expect(input.attributes('type')).toEqual('radio')

    wrapper.unmount()
  })

  it('default has input class form-check-input', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input.classes().length).toEqual(1)
    expect(input.classes()).toContain('form-check-input')

    wrapper.unmount()
  })

  it('default has label class form-check-label', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        modelValue: false,
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('label')
    expect(input.classes().length).toEqual(1)
    expect(input.classes()).toContain('form-check-label')

    wrapper.unmount()
  })

  it('has default slot content in label', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const label = wrapper.find('label')
    expect(label.text()).toEqual('foobar')

    wrapper.unmount()
  })

  it('default has no disabled attribute on input', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input.attributes('disabled')).toBeUndefined()

    wrapper.unmount()
  })

  it('has disabled attribute on input when prop disabled set', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        modelValue: '',
        value: 'a',
        disabled: true,
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input.attributes('disabled')).toBeDefined()

    wrapper.unmount()
  })

  it('default has no required attribute on input', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input.attributes('required')).toBeUndefined()

    wrapper.unmount()
  })

  it('does not have required attribute on input when prop required set and name prop not provided', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        modelValue: '',
        value: 'a',
        required: true,
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input.attributes('required')).toBeUndefined()
    expect(input.attributes('aria-required')).toBeUndefined()

    wrapper.unmount()
  })

  it('has required attribute on input when prop required and name set', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        modelValue: '',
        value: 'a',
        name: 'test',
        required: true,
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input.attributes('required')).toBeDefined()
    expect(input.attributes('aria-required')).toBeDefined()

    wrapper.unmount()
  })

  it('default has no name attribute on input', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input.attributes('name')).toBeUndefined()

    wrapper.unmount()
  })

  it('has name attribute on input when name prop set', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        modelValue: '',
        value: 'a',
        name: 'test',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input.attributes('name')).toBeDefined()
    expect(input.attributes('name')).toEqual('test')

    wrapper.unmount()
  })

  it('default has no form attribute on input', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input.attributes('form')).toBeUndefined()

    wrapper.unmount()
  })

  it('has form attribute on input when form prop set', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        modelValue: '',
        value: 'a',
        form: 'test',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input.attributes('form')).toBeDefined()
    expect(input.attributes('form')).toEqual('test')

    wrapper.unmount()
  })

  it('has custom attributes transferred to input element', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        id: 'foo',
        foo: 'bar',
      },
    })
    const input = wrapper.find('input')
    expect(input.attributes('foo')).toBeDefined()
    expect(input.attributes('foo')).toEqual('bar')

    wrapper.unmount()
  })

  it('default has class form-check-inline when prop inline=true', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        modelValue: '',
        value: 'a',
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
    const wrapper = mount(BFormRadio, {
      props: {
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).not.toContain('is-invalid')
    expect(input.classes()).not.toContain('is-valid')

    wrapper.unmount()
  })

  it('default has no input validation classes when state=null', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        state: null,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).not.toContain('is-invalid')
    expect(input.classes()).not.toContain('is-valid')

    wrapper.unmount()
  })

  it('default has input validation class is-valid when state=true', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        state: true,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).not.toContain('is-invalid')
    expect(input.classes()).toContain('is-valid')

    wrapper.unmount()
  })

  it('default has input validation class is-invalid when state=false', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        state: false,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).toContain('is-invalid')
    expect(input.classes()).not.toContain('is-valid')

    wrapper.unmount()
  })

  it('has id attribute on input when id prop set', async () => {
    const wrapper = mount(BFormRadio, {
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
    const wrapper = mount(BFormRadio, {
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
    const wrapper = mount(BFormRadio, {
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
    const wrapper = mount(BFormRadio, {
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
    const wrapper = mount(BFormRadio, {
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })

    const wrapper2 = mount(BFormRadio, {
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
  // --- Plain styling ---

  it('plain has structure <div><input><label></label></div>', async () => {
    const wrapper = mount(BFormRadio, {
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
    const {children} = wrapper.element
    expect(children.length).toEqual(2)
    expect(children[0].tagName).toEqual('INPUT')
    expect(children[1].tagName).toEqual('LABEL')

    wrapper.unmount()
  })

  it('plain has no wrapper class form-check', async () => {
    const wrapper = mount(BFormRadio, {
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

  it('plain has input type radio', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        plain: true,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input.attributes('type')).toBeDefined()
    expect(input.attributes('type')).toEqual('radio')

    wrapper.unmount()
  })

  it('plain has no input class form-check-input', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        plain: true,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input.classes()).not.toContain('form-check-input')
    expect(input.classes().length).toEqual(0)

    wrapper.unmount()
  })

  it('plain has no label class form-check-label', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        plain: true,
        modelValue: false,
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('label')
    expect(input.classes()).not.toContain('form-check-label')
    expect(input.classes().length).toEqual(0)

    wrapper.unmount()
  })

  it('plain has default slot content in label', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        plain: true,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const label = wrapper.find('label')
    expect(label.text()).toEqual('foobar')

    wrapper.unmount()
  })

  it('plain has no input validation classes by default', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        plain: true,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).not.toContain('is-invalid')
    expect(input.classes()).not.toContain('is-valid')

    wrapper.unmount()
  })

  it('plain has no input validation classes when state=null', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        state: null,
        plain: true,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).not.toContain('is-invalid')
    expect(input.classes()).not.toContain('is-valid')

    wrapper.unmount()
  })

  it('plain has input validation class is-valid when state=true', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        state: true,
        plain: true,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).not.toContain('is-invalid')
    expect(input.classes()).toContain('is-valid')

    wrapper.unmount()
  })

  it('plain has input validation class is-invalid when state=false', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        state: false,
        plain: true,
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(input.classes()).toContain('is-invalid')
    expect(input.classes()).not.toContain('is-valid')

    wrapper.unmount()
  })

  // --- Button styling - stand-alone mode ---

  it('stand-alone button has structure <div><input><label></label></div>', async () => {
    const wrapper = mount(BFormRadio, {
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
    const wrapper = mount(BFormRadio, {
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
    const wrapper = mount(BFormRadio, {
      props: {
        button: true,
        modelValue: false,
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const label = wrapper.find('label')
    expect(label).toBeDefined()
    expect(label.classes().length).toEqual(2)
    expect(label.classes()).not.toContain('active')
    expect(label.classes()).not.toContain('focus')
    expect(label.classes()).toContain('btn')
    expect(label.classes()).toContain('btn-secondary')

    wrapper.unmount()
  })

  it('stand-alone button has label classes btn and btn-size when size property set', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        button: true,
        modelValue: false,
        value: 'a',
        size: 'lg',
      },
      slots: {
        default: 'foobar',
      },
    })
    const label = wrapper.find('label')
    expect(label).toBeDefined()
    expect(label.classes().length).toEqual(3)
    expect(label.classes()).not.toContain('active')
    expect(label.classes()).not.toContain('focus')
    expect(label.classes()).toContain('btn')
    expect(label.classes()).toContain('btn-secondary')
    expect(label.classes()).toContain('btn-lg')

    wrapper.unmount()
  })

  it('stand-alone button has label classes btn, btn-secondary and active when checked by default', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        button: true,
        modelValue: 'a',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    const label = wrapper.find('label')
    expect(label).toBeDefined()
    expect(label.classes().length).toEqual(3)
    expect(label.classes()).not.toContain('focus')
    expect(label.classes()).toContain('btn')
    expect(label.classes()).toContain('btn-secondary')
    expect(label.classes()).toContain('active')

    wrapper.unmount()
  })

  it('stand-alone button has label class active when clicked (checked)', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        'button': true,
        'modelValue': false,
        'value': 'a',
        'onUpdate:modelValue': async (modelValue) => await wrapper.setProps({modelValue}),
      },
      slots: {
        default: 'foobar',
      },
    })
    const label = wrapper.find('label')
    expect(label).toBeDefined()
    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(label.classes().length).toEqual(2)
    expect(label.classes()).not.toContain('focus')
    expect(label.classes()).not.toContain('active')
    expect(label.classes()).toContain('btn')
    expect(label.classes()).toContain('btn-secondary')
    // await input.setChecked(true)
    await input.trigger('click')
    expect(label.classes().length).toEqual(3)
    expect(label.classes()).toContain('active')
    expect(label.classes()).toContain('btn')
    expect(label.classes()).toContain('btn-secondary')

    wrapper.unmount()
  })

  it('stand-alone button has label class focus when input focused', async () => {
    const wrapper = mount(BFormRadio, {
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

    const label = wrapper.find('label')
    expect(label).toBeDefined()

    const input = wrapper.find('input')
    expect(label.classes().length).toEqual(2)
    expect(label.classes()).not.toContain('focus')
    expect(label.classes()).not.toContain('active')
    expect(label.classes()).toContain('btn')
    expect(label.classes()).toContain('btn-secondary')
    expect(input).toBeDefined()

    await input.trigger('focus')
    expect(label.classes().length).toEqual(3)
    expect(label.classes()).toContain('focus')

    await input.trigger('blur')
    expect(label.classes().length).toEqual(2)
    expect(label.classes()).not.toContain('focus')

    wrapper.unmount()
  })

  it('stand-alone button has label btn-primary when prop btn-variant set to primary', async () => {
    const wrapper = mount(BFormRadio, {
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
    const label = wrapper.find('label')
    expect(label).toBeDefined()
    expect(label.classes().length).toEqual(2)
    expect(label.classes()).not.toContain('focus')
    expect(label.classes()).not.toContain('active')
    expect(label.classes()).not.toContain('btn-secondary')
    expect(label.classes()).toContain('btn')
    expect(label.classes()).toContain('btn-primary')

    wrapper.unmount()
  })

  // --- Functionality testing ---

  it.skip('default has internal localChecked="" when prop checked=""', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
        modelValue: '',
        value: 'a',
      },
      slots: {
        default: 'foobar',
      },
    })
    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(wrapper.vm.localChecked).toBe('')

    wrapper.unmount()
  })

  it('default has internal localChecked set to value when checked=value', async () => {
    const wrapper = mount(BFormRadio, {
      props: {
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
    const wrapper = mount(BFormRadio, {
      props: {
        modelValue: false,
        value: 'bar',
      },
      slots: {
        default: 'foobar',
      },
    })
    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(wrapper.vm.localChecked).toBe(false)
    await wrapper.setProps({
      modelValue: 'bar',
    })
    expect(wrapper.vm.localChecked).toEqual('bar')
    expect(wrapper.emitted('input')).toBeDefined()
    const last = wrapper.emitted('input').length - 1
    expect(wrapper.emitted('input')[last]).toBeDefined()
    expect(wrapper.emitted('input')[last][0]).toEqual('bar')

    wrapper.unmount()
  })

  it('emits a change event when clicked', async () => {
    const wrapper = mount(BFormRadio, {
      attachTo: createContainer(),
      props: {
        modelValue: false,
        value: 'bar',
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(wrapper.vm.localChecked).toBe(false)
    expect(wrapper.emitted('change')).toBeUndefined()

    const input = wrapper.find('input')
    expect(input).toBeDefined()

    await input.trigger('click')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(1)
    expect(wrapper.emitted('change')[0][0]).toEqual('bar')

    wrapper.unmount()
  })

  it('emits a change event when label clicked', async () => {
    const wrapper = mount(BFormRadio, {
      attachTo: createContainer(),
      props: {
        'uncheckedValue': 'foo',
        'value': 'bar',
        'onUpdate:modelValue': async (modelValue) => await wrapper.setProps({modelValue}),
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

    await $label.trigger('click') // unchecking should not emit change
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(1)
    expect(wrapper.emitted('change')[0][0]).toEqual('bar')

    wrapper.unmount()
  })

  it('does not emit a change event when clicked if disabled', async () => {
    const wrapper = mount(BFormRadio, {
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
    const wrapper = mount(BFormRadio, {
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
    const wrapper = mount(BFormRadio, {
      attachTo: createContainer(),
      props: {
        'value': 'bar',
        'modelValue': ['foo'],
        'onUpdate:modelValue': async (modelValue) => await wrapper.setProps({modelValue}),
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
    expect(wrapper.vm.localChecked.length).toBe(1)
    expect(wrapper.vm.localChecked[0]).toEqual('bar')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(1)
    expect(wrapper.emitted('change')[0][0]).toEqual(['bar'])

    await $input.trigger('click')
    expect(Array.isArray(wrapper.vm.localChecked)).toBe(true)
    expect(wrapper.vm.localChecked.length).toBe(1)
    expect(wrapper.vm.localChecked[0]).toEqual('bar')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(1)
    expect(wrapper.emitted('change')[0][0]).toEqual(['bar'])

    await wrapper.setProps({modelValue: []})
    expect(Array.isArray(wrapper.vm.localChecked)).toBe(true)
    expect(wrapper.vm.localChecked.length).toBe(0)
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(1)

    await $input.trigger('click')
    expect(Array.isArray(wrapper.vm.localChecked)).toBe(true)
    expect(wrapper.vm.localChecked.length).toBe(1)
    expect(wrapper.vm.localChecked[0]).toEqual('bar')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(2)
    expect(wrapper.emitted('change')[1][0]).toEqual(['bar'])

    await $input.trigger('click')
    expect(Array.isArray(wrapper.vm.localChecked)).toBe(true)
    expect(wrapper.vm.localChecked.length).toBe(1)
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(2)
    expect(wrapper.emitted('change')[1][0]).toEqual(['bar'])

    wrapper.unmount()
  })

  it('works when value is an object', async () => {
    const wrapper = mount(BFormRadio, {
      attachTo: createContainer(),
      props: {
        'value': {bar: 1, baz: 2},
        'modelValue': false,
        'onUpdate:modelValue': async (modelValue) => await wrapper.setProps({modelValue}),
      },
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.vm.localChecked).toBeDefined()
    expect(wrapper.vm.localChecked).toEqual(false)

    const input = wrapper.find('input')
    expect(input).toBeDefined()

    await input.trigger('click')
    expect(wrapper.vm.localChecked).toEqual({bar: 1, baz: 2})

    wrapper.unmount()
  })

  it('focus() and blur() methods work', async () => {
    const wrapper = mount(BFormRadio, {
      attachTo: createContainer(),
      props: {
        modelValue: false,
      },
      slots: {
        default: 'foobar',
      },
    })
    expect(wrapper.vm).toBeDefined()

    const input = wrapper.find('input')
    expect(input).toBeDefined()
    expect(document).toBeDefined()

    expect(wrapper.vm.focus).toBeDefined()
    expect(typeof wrapper.vm.focus).toBe('function')
    expect(wrapper.vm.blur).toBeDefined()
    expect(typeof wrapper.vm.blur).toBe('function')

    expect(input.element).not.toBe(document.activeElement)

    wrapper.vm.focus()
    await waitNT(wrapper.vm)
    expect(input.element).toBe(document.activeElement)

    wrapper.vm.blur()
    await waitNT(wrapper.vm)
    expect(input.element).not.toBe(document.activeElement)

    wrapper.unmount()
  })

  // These tests are wrapped in a new describe to limit the scope of the getBCR Mock
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
      const wrapper = mount(BFormRadio, {
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

      const input = wrapper.find('input')
      expect(input.exists()).toBe(true)
      expect(document).toBeDefined()
      expect(document.activeElement).toBe(input.element)

      wrapper.unmount()
    })

    it('does not autofocus by default', async () => {
      const wrapper = mount(BFormRadio, {
        attachTo: createContainer(),
        props: {
          modelValue: false,
        },
        slots: {
          default: 'foobar',
        },
      })
      expect(wrapper.vm).toBeDefined()
      await waitNT(wrapper.vm)
      await waitRAF()

      const input = wrapper.find('input')
      expect(input.exists()).toBe(true)
      expect(document).toBeDefined()
      expect(document.activeElement).not.toBe(input.element)

      wrapper.unmount()
    })
  })
})
