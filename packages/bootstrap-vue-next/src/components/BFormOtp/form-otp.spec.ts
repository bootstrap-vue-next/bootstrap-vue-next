import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import {nextTick} from 'vue'
import BFormOtp from './BFormOtp.vue'

describe('otp-input', () => {
  enableAutoUnmount(afterEach)

  // Helper to get only visible OTP input fields (excludes the hidden reka-ui input)
  function getVisibleInputs(wrapper: ReturnType<typeof mount>) {
    return wrapper.findAll('.b-form-otp-field')
  }

  // Helper to get the hidden reka-ui input used for form submission
  function getHiddenInput(wrapper: ReturnType<typeof mount>) {
    return wrapper.find('input[aria-hidden="true"]')
  }

  describe('rendering', () => {
    it('renders a root div element', () => {
      const wrapper = mount(BFormOtp)
      expect(wrapper.element.tagName).toBe('DIV')
    })

    it('places the id on the hidden input element', () => {
      const wrapper = mount(BFormOtp, {props: {id: 'my-otp'}})
      const hiddenInput = getHiddenInput(wrapper)
      expect(hiddenInput.attributes('id')).toBe('my-otp')
    })

    it('auto-generates an id on the hidden input element', () => {
      const wrapper = mount(BFormOtp)
      const hiddenInput = getHiddenInput(wrapper)
      expect(hiddenInput.attributes('id')).toBeDefined()
    })

    it('updates id when prop id changes', async () => {
      const wrapper = mount(BFormOtp, {props: {id: 'first'}})
      expect(getHiddenInput(wrapper).attributes('id')).toBe('first')
      await wrapper.setProps({id: 'second'})
      expect(getHiddenInput(wrapper).attributes('id')).toBe('second')
    })

    it('renders 6 visible input fields by default', () => {
      const wrapper = mount(BFormOtp)
      expect(getVisibleInputs(wrapper)).toHaveLength(6)
    })

    it('renders the correct number of visible input fields based on length prop', () => {
      const wrapper = mount(BFormOtp, {props: {length: 4}})
      expect(getVisibleInputs(wrapper)).toHaveLength(4)
    })

    it('defaults to 6 visible input fields when length is 0', () => {
      const wrapper = mount(BFormOtp, {props: {length: 0}})
      expect(getVisibleInputs(wrapper)).toHaveLength(6)
    })

    it('defaults to 6 visible input fields when length is negative', () => {
      const wrapper = mount(BFormOtp, {props: {length: -3}})
      expect(getVisibleInputs(wrapper)).toHaveLength(6)
    })

    it('accepts length as a string', () => {
      const wrapper = mount(BFormOtp, {props: {length: '4' as unknown as number}})
      expect(getVisibleInputs(wrapper)).toHaveLength(4)
    })

    it('updates input count when length changes', async () => {
      const wrapper = mount(BFormOtp, {props: {length: 4}})
      expect(getVisibleInputs(wrapper)).toHaveLength(4)
      await wrapper.setProps({length: 8})
      expect(getVisibleInputs(wrapper)).toHaveLength(8)
    })

    it('all visible input fields have class b-form-otp-field', () => {
      const wrapper = mount(BFormOtp)
      const inputs = getVisibleInputs(wrapper)
      expect(inputs.length).toBeGreaterThan(0)
      for (const input of inputs) {
        expect(input.classes()).toContain('b-form-otp-field')
      }
    })

    it('renders a hidden input for form submission', () => {
      const wrapper = mount(BFormOtp)
      const hiddenInput = getHiddenInput(wrapper)
      expect(hiddenInput.exists()).toBe(true)
      expect(hiddenInput.attributes('tabindex')).toBe('-1')
    })
  })

  describe('CSS classes', () => {
    it('has b-form-otp class', () => {
      const wrapper = mount(BFormOtp)
      expect(wrapper.classes()).toContain('b-form-otp')
    })

    it('has d-flex class', () => {
      const wrapper = mount(BFormOtp)
      expect(wrapper.classes()).toContain('d-flex')
    })

    it('has gap-2 class', () => {
      const wrapper = mount(BFormOtp)
      expect(wrapper.classes()).toContain('gap-2')
    })

    it('has align-items-center class', () => {
      const wrapper = mount(BFormOtp)
      expect(wrapper.classes()).toContain('align-items-center')
    })

    it('does not have size class by default', () => {
      const wrapper = mount(BFormOtp)
      expect(wrapper.classes().some((c) => c.startsWith('b-form-otp-'))).toBe(false)
    })

    it('has b-form-otp-sm class when size is sm', () => {
      const wrapper = mount(BFormOtp, {props: {size: 'sm'}})
      expect(wrapper.classes()).toContain('b-form-otp-sm')
    })

    it('has b-form-otp-lg class when size is lg', () => {
      const wrapper = mount(BFormOtp, {props: {size: 'lg'}})
      expect(wrapper.classes()).toContain('b-form-otp-lg')
    })

    it('updates size class reactively', async () => {
      const wrapper = mount(BFormOtp, {props: {size: 'sm'}})
      expect(wrapper.classes()).toContain('b-form-otp-sm')
      await wrapper.setProps({size: 'lg'})
      expect(wrapper.classes()).toContain('b-form-otp-lg')
      expect(wrapper.classes()).not.toContain('b-form-otp-sm')
    })

    it('removes size class when size is unset', async () => {
      const wrapper = mount(BFormOtp, {props: {size: 'sm'}})
      expect(wrapper.classes()).toContain('b-form-otp-sm')
      await wrapper.setProps({size: undefined})
      expect(wrapper.classes().some((c) => c.startsWith('b-form-otp-'))).toBe(false)
    })
  })

  describe('disabled prop', () => {
    it('input fields are not disabled by default', () => {
      const wrapper = mount(BFormOtp)
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('disabled')).toBeUndefined()
      }
    })

    it('all input fields are disabled when disabled prop is true', () => {
      const wrapper = mount(BFormOtp, {props: {disabled: true}})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('disabled')).toBeDefined()
      }
    })

    it('updates disabled state reactively', async () => {
      const wrapper = mount(BFormOtp, {props: {disabled: false}})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('disabled')).toBeUndefined()
      }
      await wrapper.setProps({disabled: true})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('disabled')).toBeDefined()
      }
    })
  })

  describe('aria-label prop', () => {
    it('uses default "Pin" in aria-label when ariaLabel is not set', () => {
      const wrapper = mount(BFormOtp)
      const inputs = getVisibleInputs(wrapper)
      expect(inputs[0].attributes('aria-label')).toBe('Pin 1 of 6')
      expect(inputs[5].attributes('aria-label')).toBe('Pin 6 of 6')
    })

    it('uses custom ariaLabel in aria-label attribute', () => {
      const wrapper = mount(BFormOtp, {props: {ariaLabel: 'OTP'}})
      const inputs = getVisibleInputs(wrapper)
      expect(inputs[0].attributes('aria-label')).toBe('OTP 1 of 6')
      expect(inputs[5].attributes('aria-label')).toBe('OTP 6 of 6')
    })

    it('reflects custom length in aria-label', () => {
      const wrapper = mount(BFormOtp, {props: {length: 4, ariaLabel: 'Code'}})
      const inputs = getVisibleInputs(wrapper)
      expect(inputs[0].attributes('aria-label')).toBe('Code 1 of 4')
      expect(inputs[3].attributes('aria-label')).toBe('Code 4 of 4')
    })

    it('updates aria-label reactively when ariaLabel changes', async () => {
      const wrapper = mount(BFormOtp, {props: {ariaLabel: 'Pin'}})
      expect(getVisibleInputs(wrapper)[0].attributes('aria-label')).toBe('Pin 1 of 6')
      await wrapper.setProps({ariaLabel: 'OTP'})
      expect(getVisibleInputs(wrapper)[0].attributes('aria-label')).toBe('OTP 1 of 6')
    })
  })

  describe('aria-invalid prop', () => {
    it('does not set aria-invalid by default', () => {
      const wrapper = mount(BFormOtp)
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('aria-invalid')).toBeUndefined()
      }
    })

    it('sets aria-invalid on all visible inputs when ariaInvalid is true', () => {
      const wrapper = mount(BFormOtp, {props: {ariaInvalid: true}})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('aria-invalid')).toBe('true')
      }
    })

    it('sets aria-invalid to "grammar" on all visible inputs', () => {
      const wrapper = mount(BFormOtp, {props: {ariaInvalid: 'grammar'}})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('aria-invalid')).toBe('grammar')
      }
    })
  })

  describe('state prop', () => {
    it('does not have is-valid or is-invalid class by default', () => {
      const wrapper = mount(BFormOtp)
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.classes()).not.toContain('is-valid')
        expect(input.classes()).not.toContain('is-invalid')
      }
    })

    it('has is-valid class on all visible inputs when state is true', () => {
      const wrapper = mount(BFormOtp, {props: {state: true}})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.classes()).toContain('is-valid')
      }
    })

    it('has is-invalid class on all visible inputs when state is false', () => {
      const wrapper = mount(BFormOtp, {props: {state: false}})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.classes()).toContain('is-invalid')
      }
    })

    it('updates state class reactively', async () => {
      const wrapper = mount(BFormOtp, {props: {state: true}})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.classes()).toContain('is-valid')
      }
      await wrapper.setProps({state: false})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.classes()).toContain('is-invalid')
        expect(input.classes()).not.toContain('is-valid')
      }
    })
  })

  describe('size prop on inputs', () => {
    it('input fields do not have form-control-sm or form-control-lg by default', () => {
      const wrapper = mount(BFormOtp)
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.classes()).not.toContain('form-control-sm')
        expect(input.classes()).not.toContain('form-control-lg')
      }
    })

    it('all visible input fields have form-control-sm when size is sm', () => {
      const wrapper = mount(BFormOtp, {props: {size: 'sm'}})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.classes()).toContain('form-control-sm')
      }
    })

    it('all visible input fields have form-control-lg when size is lg', () => {
      const wrapper = mount(BFormOtp, {props: {size: 'lg'}})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.classes()).toContain('form-control-lg')
      }
    })
  })

  describe('plaintext prop', () => {
    it('input fields have form-control class by default', () => {
      const wrapper = mount(BFormOtp)
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.classes()).toContain('form-control')
        expect(input.classes()).not.toContain('form-control-plaintext')
      }
    })

    it('all visible input fields have form-control-plaintext class when plaintext is true', () => {
      const wrapper = mount(BFormOtp, {props: {plaintext: true}})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.classes()).toContain('form-control-plaintext')
      }
    })

    it('visible input fields are readonly when plaintext is true', () => {
      const wrapper = mount(BFormOtp, {props: {plaintext: true}})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('readonly')).toBeDefined()
      }
    })
  })

  describe('readonly prop', () => {
    it('input fields are not readonly by default', () => {
      const wrapper = mount(BFormOtp)
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('readonly')).toBeUndefined()
      }
    })

    it('all visible input fields are readonly when readonly prop is true', () => {
      const wrapper = mount(BFormOtp, {props: {readonly: true}})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('readonly')).toBeDefined()
      }
    })
  })

  describe('form prop', () => {
    it('visible input fields do not have form attribute by default', () => {
      const wrapper = mount(BFormOtp)
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('form')).toBeUndefined()
      }
    })

    it('all visible input fields have form attribute when form prop is set', () => {
      const wrapper = mount(BFormOtp, {props: {form: 'my-form'}})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('form')).toBe('my-form')
      }
    })
  })

  describe('modelValue', () => {
    it('accepts an initial modelValue', () => {
      const wrapper = mount(BFormOtp, {props: {modelValue: ['1', '2', '3', '4', '5', '6']}})
      const inputs = getVisibleInputs(wrapper)
      expect(inputs[0].attributes('value')).toBe('1')
      expect(inputs[1].attributes('value')).toBe('2')
      expect(inputs[5].attributes('value')).toBe('6')
    })

    it('accepts a partial modelValue', () => {
      const wrapper = mount(BFormOtp, {props: {modelValue: ['a', 'b']}})
      const inputs = getVisibleInputs(wrapper)
      expect(inputs[0].attributes('value')).toBe('a')
      expect(inputs[1].attributes('value')).toBe('b')
      expect(inputs[2].attributes('value')).toBeUndefined()
    })

    it('emits update:modelValue when input value changes', async () => {
      const wrapper = mount(BFormOtp)
      const input = getVisibleInputs(wrapper)[0]
      await input.setValue('1')
      await nextTick()
      expect(wrapper.emitted('update:modelValue')).toBeDefined()
    })

    it('sets the value on the hidden input element', () => {
      const wrapper = mount(BFormOtp, {props: {modelValue: ['a', 'b', 'c']}})
      const hiddenInput = getHiddenInput(wrapper)
      expect((hiddenInput.element as HTMLInputElement).value).toBe('abc')
    })
  })

  describe('placeholder prop', () => {
    it('visible input fields have empty placeholder by default', () => {
      const wrapper = mount(BFormOtp)
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('placeholder')).toBe('')
      }
    })

    it('all visible input fields have the placeholder from the prop', () => {
      const wrapper = mount(BFormOtp, {props: {placeholder: '·'}})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('placeholder')).toBe('·')
      }
    })
  })

  describe('dir prop', () => {
    it('has dir="ltr" by default', () => {
      const wrapper = mount(BFormOtp)
      expect(wrapper.attributes('dir')).toBe('ltr')
    })

    it('has dir="ltr" when dir prop is ltr', () => {
      const wrapper = mount(BFormOtp, {props: {dir: 'ltr'}})
      expect(wrapper.attributes('dir')).toBe('ltr')
    })

    it('has dir="rtl" when dir prop is rtl', () => {
      const wrapper = mount(BFormOtp, {props: {dir: 'rtl'}})
      expect(wrapper.attributes('dir')).toBe('rtl')
    })
  })

  describe('type prop', () => {
    it('uses inputmode="text" by default', () => {
      const wrapper = mount(BFormOtp)
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('inputmode')).toBe('text')
      }
    })

    it('uses inputmode="numeric" and pattern when type is number', () => {
      const wrapper = mount(BFormOtp, {props: {type: 'number'}})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('inputmode')).toBe('numeric')
        expect(input.attributes('pattern')).toBe('[0-9]*')
      }
    })
  })

  describe('mask prop', () => {
    it('renders type="text" on visible inputs by default', () => {
      const wrapper = mount(BFormOtp)
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('type')).toBe('text')
      }
    })

    it('renders type="password" on visible inputs when mask is true', () => {
      const wrapper = mount(BFormOtp, {props: {mask: true}})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('type')).toBe('password')
      }
    })
  })

  describe('otp prop', () => {
    it('uses autocomplete="false" by default', () => {
      const wrapper = mount(BFormOtp)
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('autocomplete')).toBe('false')
      }
    })

    it('uses autocomplete="one-time-code" when otp is true', () => {
      const wrapper = mount(BFormOtp, {props: {otp: true}})
      for (const input of getVisibleInputs(wrapper)) {
        expect(input.attributes('autocomplete')).toBe('one-time-code')
      }
    })
  })

  describe('name prop', () => {
    it('hidden input has empty name by default', () => {
      const wrapper = mount(BFormOtp)
      const hiddenInput = getHiddenInput(wrapper)
      expect(hiddenInput.attributes('name')).toBe('')
    })

    it('hidden input has the name from the prop', () => {
      const wrapper = mount(BFormOtp, {props: {name: 'otp-code'}})
      const hiddenInput = getHiddenInput(wrapper)
      expect(hiddenInput.attributes('name')).toBe('otp-code')
    })
  })
})
