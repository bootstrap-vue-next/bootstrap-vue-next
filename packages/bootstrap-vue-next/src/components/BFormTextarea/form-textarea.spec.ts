import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import {nextTick} from 'vue'
import BFormTextarea from './BFormTextarea.vue'

describe('form-textarea', () => {
  enableAutoUnmount(afterEach)

  it('renders a textarea element', () => {
    const wrapper = mount(BFormTextarea)
    expect(wrapper.element.tagName).toBe('TEXTAREA')
  })

  it('has class form-control', () => {
    const wrapper = mount(BFormTextarea)
    expect(wrapper.classes()).toContain('form-control')
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {modelValue: ''},
      attachTo: document.body,
    })
    const textarea = wrapper.find('textarea')
    ;(textarea.element as HTMLTextAreaElement).value = 'hello'
    await textarea.trigger('input')
    expect(wrapper.emitted('update:modelValue')).toBeDefined()
    expect(wrapper.emitted('update:modelValue')?.[0][0]).toBe('hello')
  })

  describe('trim modifier with max-rows', () => {
    it('preserves trailing whitespace in DOM during input with v-model.trim and max-rows', async () => {
      const wrapper = mount(BFormTextarea, {
        props: {
          'modelValue': '',
          'modelModifiers': {trim: true},
          'maxRows': 3,
          'onUpdate:modelValue': (val: string) => {
            wrapper.setProps({modelValue: val})
          },
        },
        attachTo: document.body,
      })

      const textarea = wrapper.find('textarea')
      const el = textarea.element as HTMLTextAreaElement

      // Simulate typing "hello"
      el.value = 'hello'
      await textarea.trigger('input')
      await nextTick()

      // Simulate typing a space after "hello"
      el.value = 'hello '
      await textarea.trigger('input')
      await nextTick()

      // The textarea's DOM value should preserve the trailing space
      // even though the model might be trimmed
      expect(el.value).toBe('hello ')
    })

    it('trims value on blur with v-model.trim and max-rows', async () => {
      const wrapper = mount(BFormTextarea, {
        props: {
          'modelValue': '',
          'modelModifiers': {trim: true},
          'maxRows': 3,
          'onUpdate:modelValue': (val: string) => {
            wrapper.setProps({modelValue: val})
          },
        },
        attachTo: document.body,
      })

      const textarea = wrapper.find('textarea')
      const el = textarea.element as HTMLTextAreaElement

      // Simulate typing "hello "
      el.value = 'hello '
      await textarea.trigger('input')
      await nextTick()

      // On blur, trim should be applied
      await textarea.trigger('blur')
      await nextTick()

      // After blur, the model value should be trimmed
      const emitted = wrapper.emitted('update:modelValue')
      expect(emitted).toBeDefined()
      // The last emitted value should be trimmed
      const [lastEmitted] = emitted![emitted!.length - 1]
      expect(lastEmitted).toBe('hello')
    })

    it('allows typing multiple words with v-model.trim and max-rows', async () => {
      const wrapper = mount(BFormTextarea, {
        props: {
          'modelValue': '',
          'modelModifiers': {trim: true},
          'maxRows': 3,
          'onUpdate:modelValue': (val: string) => {
            wrapper.setProps({modelValue: val})
          },
        },
        attachTo: document.body,
      })

      const textarea = wrapper.find('textarea')
      const el = textarea.element as HTMLTextAreaElement

      // Simulate typing "hello world"
      el.value = 'hello'
      await textarea.trigger('input')
      await nextTick()

      el.value = 'hello '
      await textarea.trigger('input')
      await nextTick()

      el.value = 'hello w'
      await textarea.trigger('input')
      await nextTick()

      el.value = 'hello world'
      await textarea.trigger('input')
      await nextTick()

      expect(el.value).toBe('hello world')
    })
  })
})
