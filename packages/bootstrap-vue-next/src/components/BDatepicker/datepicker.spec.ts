import {enableAutoUnmount, flushPromises, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BDatepicker from './BDatepicker.vue'

const mountPicker = async (options: Parameters<typeof mount>[1] = {}) => {
  const wrapper = mount(BDatepicker as never, {attachTo: document.body, ...options})
  await flushPromises()
  await new Promise((resolve) => setTimeout(resolve, 0))
  return wrapper
}

describe('bDatepicker', () => {
  enableAutoUnmount(afterEach)

  describe('rendering', () => {
    it('renders a text input with form-control and the datepicker toggle', async () => {
      const wrapper = await mountPicker()
      expect(wrapper.element.tagName).toBe('INPUT')
      expect(wrapper.attributes('type')).toBe('text')
      expect(wrapper.classes()).toContain('form-control')
      expect(wrapper.attributes('data-bs-toggle')).toBe('datepicker')
    })

    it('applies id and name', async () => {
      const wrapper = await mountPicker({props: {id: 'dp', name: 'date'}})
      expect(wrapper.attributes('id')).toBe('dp')
      expect(wrapper.attributes('name')).toBe('date')
    })

    it('generates an id when none is given', async () => {
      const wrapper = await mountPicker()
      expect(wrapper.attributes('id')).toBeTruthy()
    })

    it('applies size class', async () => {
      const wrapper = await mountPicker({props: {size: 'lg'}})
      expect(wrapper.classes()).toContain('form-control-lg')
    })

    it('applies state classes and aria-invalid', async () => {
      const valid = await mountPicker({props: {state: true}})
      expect(valid.classes()).toContain('is-valid')
      const invalid = await mountPicker({props: {state: false}})
      expect(invalid.classes()).toContain('is-invalid')
      expect(invalid.attributes('aria-invalid')).toBe('true')
    })

    it('applies disabled, readonly, required and placeholder', async () => {
      const wrapper = await mountPicker({
        props: {disabled: true, readonly: true, required: true, placeholder: 'Pick'},
      })
      expect(wrapper.attributes('disabled')).toBeDefined()
      expect(wrapper.attributes('readonly')).toBeDefined()
      expect(wrapper.attributes('required')).toBeDefined()
      expect(wrapper.attributes('placeholder')).toBe('Pick')
    })

    it('uses form-control-plaintext when plaintext', async () => {
      const wrapper = await mountPicker({props: {plaintext: true}})
      expect(wrapper.classes()).toContain('form-control-plaintext')
      expect(wrapper.classes()).not.toContain('form-control')
    })
  })

  describe('trigger modes', () => {
    it('renders a button trigger with a display element', async () => {
      const wrapper = await mountPicker({props: {trigger: 'button', placeholder: 'Select date'}})
      expect(wrapper.element.tagName).toBe('BUTTON')
      expect(wrapper.attributes('data-bs-toggle')).toBe('datepicker')
      expect(wrapper.find('[data-bs-datepicker-display]').text()).toBe('Select date')
    })

    it('renders the icon slot in button mode', async () => {
      const wrapper = await mountPicker({
        props: {trigger: 'button'},
        slots: {icon: '<i class="my-icon"></i>'},
      })
      expect(wrapper.find('.my-icon').exists()).toBe(true)
    })

    it('renders an inline container with a hidden input when named', async () => {
      const wrapper = await mountPicker({props: {inline: true, name: 'd'}})
      expect(wrapper.element.tagName).toBe('DIV')
      expect(wrapper.find('[data-bs-inline="true"]').exists()).toBe(true)
      expect(wrapper.find('input[type="hidden"]').attributes('name')).toBe('d')
    })
  })

  describe('model', () => {
    it('shows a single string model in the input', async () => {
      const wrapper = await mountPicker({
        props: {modelValue: '2026-03-05', locale: 'en-US'},
      })
      expect((wrapper.element as HTMLInputElement).value).toBe('3/5/2026')
    })

    it('exposes selected dates for a string model', async () => {
      const wrapper = await mountPicker({props: {modelValue: '2026-03-05'}})
      expect(
        (wrapper.vm as unknown as {getSelectedDates: () => string[]}).getSelectedDates()
      ).toEqual(['2026-03-05'])
    })

    it('accepts string[] in multiple-ranged mode', async () => {
      const wrapper = await mountPicker({
        props: {modelValue: ['2026-03-05', '2026-03-07'], selectionMode: 'multiple-ranged'},
      })
      expect(
        (wrapper.vm as unknown as {getSelectedDates: () => string[]}).getSelectedDates()
      ).toContain('2026-03-05')
    })

    it('syncs the instance when the model changes', async () => {
      const wrapper = await mountPicker({props: {modelValue: '2026-03-05', locale: 'en-US'}})
      await wrapper.setProps({modelValue: '2026-04-10'})
      expect((wrapper.element as HTMLInputElement).value).toBe('4/10/2026')
    })
  })

  describe('events', () => {
    it('updates a single model and emits change from a bootstrap change event', async () => {
      const wrapper = await mountPicker()
      const event = new Event('change.bs.datepicker') as Event & {dates: string[]}
      event.dates = ['2026-05-01']
      wrapper.element.dispatchEvent(event)
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['2026-05-01'])
      expect(wrapper.emitted('change')?.[0]?.[0]).toMatchObject({dates: ['2026-05-01']})
    })

    it('updates an array model in multiple mode', async () => {
      const wrapper = await mountPicker({props: {selectionMode: 'multiple'}})
      const event = new Event('change.bs.datepicker') as Event & {dates: string[]}
      event.dates = ['2026-05-01', '2026-05-03']
      wrapper.element.dispatchEvent(event)
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['2026-05-01', '2026-05-03']])
    })

    it('ignores change events without dates', async () => {
      const wrapper = await mountPicker()
      wrapper.element.dispatchEvent(new Event('change'))
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      expect(wrapper.emitted('change')).toBeUndefined()
    })

    it('emits show and shown when shown via the exposed method', async () => {
      const wrapper = await mountPicker()
      await (wrapper.vm as unknown as {show: () => Promise<void>}).show()
      expect(wrapper.emitted('show')).toHaveLength(1)
      expect(wrapper.emitted('shown')).toHaveLength(1)
      await (wrapper.vm as unknown as {hide: () => Promise<void>}).hide()
      expect(wrapper.emitted('hide')).toHaveLength(1)
      expect(wrapper.emitted('hidden')).toHaveLength(1)
    })
  })

  describe('lifecycle', () => {
    it('disposes the bootstrap instance on unmount', async () => {
      const wrapper = await mountPicker()
      const el = wrapper.element
      wrapper.unmount()
      const {default: Datepicker} = await import('bootstrap/js/dist/datepicker.js')
      expect(Datepicker.getInstance(el)).toBeNull()
    })
  })
})
