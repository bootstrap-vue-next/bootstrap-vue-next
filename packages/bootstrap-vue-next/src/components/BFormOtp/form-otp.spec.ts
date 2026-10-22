import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import {nextTick} from 'vue'
import BFormOtp from './BFormOtp.vue'

describe('form-otp', () => {
  enableAutoUnmount(afterEach)

  const slots = (w: ReturnType<typeof mount>) => w.findAll('.otp-slot')
  const field = (w: ReturnType<typeof mount>) => w.find('input.otp-input')

  describe('rendering', () => {
    it('renders .otp wrapper with a single text input and aria-hidden slots', () => {
      const w = mount(BFormOtp)
      expect(w.element.tagName).toBe('DIV')
      expect(w.classes()).toContain('otp')
      expect(w.findAll('input')).toHaveLength(1)
      expect(field(w).attributes('type')).toBe('text')
      expect(w.find('.otp-slots').attributes('aria-hidden')).toBe('true')
    })

    it('puts id on the input and auto-generates one', async () => {
      const w = mount(BFormOtp, {props: {id: 'my-otp'}})
      expect(field(w).attributes('id')).toBe('my-otp')
      await w.setProps({id: 'two'})
      expect(field(w).attributes('id')).toBe('two')
      expect(field(mount(BFormOtp)).attributes('id')).toBeDefined()
    })

    it('renders 6 slots by default and respects length', () => {
      expect(slots(mount(BFormOtp))).toHaveLength(6)
      expect(slots(mount(BFormOtp, {props: {length: 4}}))).toHaveLength(4)
      expect(slots(mount(BFormOtp, {props: {length: '8'}}))).toHaveLength(8)
    })

    it.each([0, -3, 'abc'])('falls back to 6 slots for invalid length %s', (length) => {
      const w = mount(BFormOtp, {props: {length}})
      expect(slots(w)).toHaveLength(6)
      expect(field(w).attributes('maxlength')).toBe('6')
    })

    it('sets autocomplete one-time-code', () => {
      expect(field(mount(BFormOtp)).attributes('autocomplete')).toBe('one-time-code')
    })

    it('forwards name, form, required, disabled, readonly', () => {
      const w = mount(BFormOtp, {
        props: {name: 'otp', form: 'f', required: true, disabled: true, readonly: true},
      })
      const el = field(w)
      expect(el.attributes('name')).toBe('otp')
      expect(el.attributes('form')).toBe('f')
      expect(el.attributes('required')).toBeDefined()
      expect(el.attributes('disabled')).toBeDefined()
      expect(el.attributes('readonly')).toBeDefined()
    })

    it('puts ariaLabel on the single input', () => {
      expect(field(mount(BFormOtp, {props: {ariaLabel: 'Code'}})).attributes('aria-label')).toBe(
        'Code'
      )
    })
  })

  describe('type', () => {
    it.each([
      ['numeric', 'numeric', '[0-9]*'],
      ['alphanumeric', 'text', '[A-Za-z0-9]*'],
      ['alpha', 'text', '[A-Za-z]*'],
    ] as const)('type %s sets inputmode and pattern', (type, inputmode, pattern) => {
      const el = field(mount(BFormOtp, {props: {type}}))
      expect(el.attributes('inputmode')).toBe(inputmode)
      expect(el.attributes('pattern')).toBe(pattern)
    })

    it('defaults to numeric', () => {
      expect(field(mount(BFormOtp)).attributes('inputmode')).toBe('numeric')
    })

    it('strips disallowed characters from typed input', async () => {
      const w = mount(BFormOtp)
      await field(w).setValue('1a2b3')
      expect(w.emitted('update:modelValue')?.at(-1)).toEqual(['123'])
    })

    it('alpha keeps only letters', async () => {
      const w = mount(BFormOtp, {props: {type: 'alpha'}})
      await field(w).setValue('a1b2')
      expect(w.emitted('update:modelValue')?.at(-1)).toEqual(['ab'])
    })

    it('alphanumeric keeps letters and digits', async () => {
      const w = mount(BFormOtp, {props: {type: 'alphanumeric'}})
      await field(w).setValue('a1-b2')
      expect(w.emitted('update:modelValue')?.at(-1)).toEqual(['a1b2'])
    })
  })

  describe('model', () => {
    it('renders characters into slots from a string model', () => {
      const w = mount(BFormOtp, {props: {modelValue: '123'}})
      expect(slots(w).map((s) => s.text())).toEqual(['1', '2', '3', '', '', ''])
      expect(slots(w).filter((s) => s.classes('otp-slot-filled'))).toHaveLength(3)
      expect((field(w).element as HTMLInputElement).value).toBe('123')
    })

    it('updates when the model changes', async () => {
      const w = mount(BFormOtp, {props: {modelValue: '12'}})
      await w.setProps({modelValue: '1234'})
      expect(slots(w)[3].text()).toBe('4')
    })

    it('truncates a model longer than length', () => {
      const w = mount(BFormOtp, {props: {modelValue: '123456789', length: 4}})
      expect((field(w).element as HTMLInputElement).value).toBe('1234')
    })

    it('treats null as empty', () => {
      const w = mount(BFormOtp, {props: {modelValue: null}})
      expect(slots(w).every((s) => !s.classes('otp-slot-filled'))).toBe(true)
    })

    it('emits update:modelValue as a string', async () => {
      const w = mount(BFormOtp)
      await field(w).setValue('12')
      expect(w.emitted('update:modelValue')?.at(-1)).toEqual(['12'])
    })
  })

  describe('complete', () => {
    it('emits complete with the string when length is reached', async () => {
      const w = mount(BFormOtp, {props: {length: 4}})
      await field(w).setValue('12')
      expect(w.emitted('complete')).toBeUndefined()
      await field(w).setValue('1234')
      expect(w.emitted('complete')).toEqual([['1234']])
    })

    it('does not emit complete for a value cut by filtering', async () => {
      const w = mount(BFormOtp, {props: {length: 4}})
      await field(w).setValue('12ab')
      expect(w.emitted('complete')).toBeUndefined()
    })
  })

  describe('mask', () => {
    it('shows bullets in slots but keeps the real value', () => {
      const w = mount(BFormOtp, {props: {modelValue: '12', mask: true}})
      expect(
        slots(w)
          .slice(0, 2)
          .map((s) => s.text())
      ).toEqual(['•', '•'])
      expect((field(w).element as HTMLInputElement).value).toBe('12')
    })

    it('shows characters when mask is off', () => {
      expect(slots(mount(BFormOtp, {props: {modelValue: '1'}}))[0].text()).toBe('1')
    })
  })

  describe('groups and separators', () => {
    it('inserts separators between groups', () => {
      const w = mount(BFormOtp, {props: {groups: [3, 3]}})
      const seps = w.findAll('.otp-separator')
      expect(seps).toHaveLength(1)
      expect(seps[0].text()).toBe('·')
      expect(slots(w)).toHaveLength(6)
    })

    it('supports custom separator and repeats the last group size', () => {
      const w = mount(BFormOtp, {props: {length: 6, groups: [2], separator: '-'}})
      const seps = w.findAll('.otp-separator')
      expect(seps).toHaveLength(2)
      expect(seps[0].text()).toBe('-')
    })

    it('renders no separators without groups', () => {
      expect(mount(BFormOtp).findAll('.otp-separator')).toHaveLength(0)
    })

    it('does not include separators in the value', async () => {
      const w = mount(BFormOtp, {props: {groups: [2, 2], length: 4, separator: '-'}})
      await field(w).setValue('1234')
      expect(w.emitted('update:modelValue')?.at(-1)).toEqual(['1234'])
    })
  })

  describe('size, state, connected', () => {
    it.each(['sm', 'lg'] as const)('adds otp-%s', (size) => {
      expect(mount(BFormOtp, {props: {size}}).classes()).toContain(`otp-${size}`)
    })

    it('adds otp-connected', () => {
      expect(mount(BFormOtp, {props: {connected: true}}).classes()).toContain('otp-connected')
    })

    it('state true sets is-valid', () => {
      const w = mount(BFormOtp, {props: {state: true}})
      expect(w.classes()).toContain('is-valid')
      expect(field(w).attributes('aria-invalid')).toBeUndefined()
    })

    it('state false sets is-invalid and aria-invalid', () => {
      const w = mount(BFormOtp, {props: {state: false}})
      expect(w.classes()).toContain('is-invalid')
      expect(field(w).attributes('aria-invalid')).toBe('true')
    })

    it('explicit ariaInvalid is respected', () => {
      const w = mount(BFormOtp, {props: {ariaInvalid: 'grammar'}})
      expect(field(w).attributes('aria-invalid')).toBe('grammar')
    })
  })

  describe('focus and interaction', () => {
    it('marks the active empty slot while focused', async () => {
      const w = mount(BFormOtp, {attachTo: document.body, props: {modelValue: '12'}})
      await field(w).trigger('focus')
      await nextTick()
      expect(slots(w)[2].classes()).toContain('otp-slot-active')
      w.unmount()
    })

    it('has no active slot when blurred', async () => {
      const w = mount(BFormOtp, {attachTo: document.body})
      await field(w).trigger('focus')
      await field(w).trigger('blur')
      expect(w.find('.otp-slot-active').exists()).toBe(false)
      w.unmount()
    })

    it('exposes focus, blur, clear and element', async () => {
      const w = mount(BFormOtp, {attachTo: document.body, props: {modelValue: '12'}})
      const vm = w.vm as unknown as {focus: () => void; clear: () => void; element: unknown}
      vm.focus()
      expect(document.activeElement).toBe(field(w).element)
      vm.clear()
      expect(w.emitted('update:modelValue')?.at(-1)).toEqual([''])
      expect(vm.element).toBeDefined()
      w.unmount()
    })

    it('does not focus when disabled', () => {
      const w = mount(BFormOtp, {attachTo: document.body, props: {disabled: true}})
      ;(w.vm as unknown as {focus: () => void}).focus()
      expect(document.activeElement).not.toBe(field(w).element)
      w.unmount()
    })

    it('autofocuses on mount', async () => {
      const w = mount(BFormOtp, {attachTo: document.body, props: {autofocus: true}})
      await nextTick()
      expect(document.activeElement).toBe(field(w).element)
      w.unmount()
    })
  })

  describe('paste', () => {
    const paste = (w: ReturnType<typeof mount>, text: string) =>
      field(w).trigger('paste', {clipboardData: {getData: () => text}})

    it('sanitizes pasted text before applying the length limit', async () => {
      const w = mount(BFormOtp, {attachTo: document.body, props: {length: 6}})
      await paste(w, '12-34 56')
      expect(w.emitted('update:modelValue')?.at(-1)).toEqual(['123456'])
      expect(w.emitted('complete')).toEqual([['123456']])
      w.unmount()
    })

    it('ignores paste with no valid characters', async () => {
      const w = mount(BFormOtp, {attachTo: document.body})
      await paste(w, 'abc')
      expect(w.emitted('update:modelValue')).toBeUndefined()
      w.unmount()
    })

    it('does not paste when readonly', async () => {
      const w = mount(BFormOtp, {attachTo: document.body, props: {readonly: true}})
      await paste(w, '123')
      expect(w.emitted('update:modelValue')).toBeUndefined()
      w.unmount()
    })
  })

  describe('form submission', () => {
    it('submits the code under name', () => {
      const form = document.createElement('form')
      document.body.appendChild(form)
      const w = mount(BFormOtp, {attachTo: form, props: {name: 'code', modelValue: '123456'}})
      expect(new FormData(form).get('code')).toBe('123456')
      w.unmount()
      form.remove()
    })
  })
})
