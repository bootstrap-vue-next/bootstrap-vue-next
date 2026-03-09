import {afterEach, describe, expect, it, vi} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import {nextTick, ref} from 'vue'
import BFormTextarea from './BFormTextarea.vue'
import {formGroupKey} from '../../utils/keys'

describe('form-textarea', () => {
  enableAutoUnmount(afterEach)

  describe('rendering', () => {
    it('renders a textarea element', () => {
      const wrapper = mount(BFormTextarea)
      expect(wrapper.element.tagName).toBe('TEXTAREA')
    })

    it('has class form-control by default', () => {
      const wrapper = mount(BFormTextarea)
      expect(wrapper.classes()).toContain('form-control')
    })

    it('has auto-generated id attribute', () => {
      const wrapper = mount(BFormTextarea)
      expect(wrapper.attributes('id')).toBeDefined()
    })

    it('uses custom id when prop id is set', () => {
      const wrapper = mount(BFormTextarea, {props: {id: 'my-textarea'}})
      expect(wrapper.attributes('id')).toBe('my-textarea')
    })

    it('updates id when prop id changes', async () => {
      const wrapper = mount(BFormTextarea, {props: {id: 'first'}})
      expect(wrapper.attributes('id')).toBe('first')
      await wrapper.setProps({id: 'second'})
      expect(wrapper.attributes('id')).toBe('second')
    })
  })

  describe('CSS classes', () => {
    it('has form-control class by default', () => {
      const wrapper = mount(BFormTextarea)
      expect(wrapper.classes()).toContain('form-control')
    })

    it('has form-control-plaintext class when plaintext is true', () => {
      const wrapper = mount(BFormTextarea, {props: {plaintext: true}})
      expect(wrapper.classes()).toContain('form-control-plaintext')
      expect(wrapper.classes()).not.toContain('form-control')
    })

    it('has form-control-sm class when size is sm', () => {
      const wrapper = mount(BFormTextarea, {props: {size: 'sm'}})
      expect(wrapper.classes()).toContain('form-control-sm')
    })

    it('has form-control-lg class when size is lg', () => {
      const wrapper = mount(BFormTextarea, {props: {size: 'lg'}})
      expect(wrapper.classes()).toContain('form-control-lg')
    })

    it('does not have size class when size is not set', () => {
      const wrapper = mount(BFormTextarea)
      expect(wrapper.classes().some((c) => c.startsWith('form-control-sm'))).toBe(false)
      expect(wrapper.classes().some((c) => c.startsWith('form-control-lg'))).toBe(false)
    })

    it('updates size class reactively', async () => {
      const wrapper = mount(BFormTextarea, {props: {size: 'sm'}})
      expect(wrapper.classes()).toContain('form-control-sm')
      await wrapper.setProps({size: 'lg'})
      expect(wrapper.classes()).toContain('form-control-lg')
      expect(wrapper.classes()).not.toContain('form-control-sm')
    })
  })

  describe('state and validation classes', () => {
    it('has is-valid class when state is true', () => {
      const wrapper = mount(BFormTextarea, {props: {state: true}})
      expect(wrapper.classes()).toContain('is-valid')
    })

    it('has is-invalid class when state is false', () => {
      const wrapper = mount(BFormTextarea, {props: {state: false}})
      expect(wrapper.classes()).toContain('is-invalid')
    })

    it('has no state class when state is null', () => {
      const wrapper = mount(BFormTextarea, {props: {state: null}})
      expect(wrapper.classes()).not.toContain('is-valid')
      expect(wrapper.classes()).not.toContain('is-invalid')
    })

    it('has no state class when state is undefined', () => {
      const wrapper = mount(BFormTextarea)
      expect(wrapper.classes()).not.toContain('is-valid')
      expect(wrapper.classes()).not.toContain('is-invalid')
    })

    it('updates state class reactively', async () => {
      const wrapper = mount(BFormTextarea, {props: {state: true}})
      expect(wrapper.classes()).toContain('is-valid')
      await wrapper.setProps({state: false})
      expect(wrapper.classes()).toContain('is-invalid')
      expect(wrapper.classes()).not.toContain('is-valid')
      await wrapper.setProps({state: null})
      expect(wrapper.classes()).not.toContain('is-valid')
      expect(wrapper.classes()).not.toContain('is-invalid')
    })
  })

  describe('attributes', () => {
    it('sets name attribute when prop name is provided', () => {
      const wrapper = mount(BFormTextarea, {props: {name: 'my-textarea'}})
      expect(wrapper.attributes('name')).toBe('my-textarea')
    })

    it('does not set name attribute when prop name is not provided', () => {
      const wrapper = mount(BFormTextarea)
      expect(wrapper.attributes('name')).toBeUndefined()
    })

    it('sets form attribute when prop form is provided', () => {
      const wrapper = mount(BFormTextarea, {props: {form: 'my-form'}})
      expect(wrapper.attributes('form')).toBe('my-form')
    })

    it('does not set form attribute when prop form is not provided', () => {
      const wrapper = mount(BFormTextarea)
      expect(wrapper.attributes('form')).toBeUndefined()
    })

    it('sets placeholder attribute', () => {
      const wrapper = mount(BFormTextarea, {props: {placeholder: 'Enter text'}})
      expect(wrapper.attributes('placeholder')).toBe('Enter text')
    })

    it('sets required attribute when prop required is true', () => {
      const wrapper = mount(BFormTextarea, {props: {required: true}})
      expect(wrapper.attributes('required')).toBeDefined()
    })

    it('does not set required attribute when prop required is false', () => {
      const wrapper = mount(BFormTextarea, {props: {required: false}})
      expect(wrapper.attributes('required')).toBeUndefined()
    })

    it('sets autocomplete attribute', () => {
      const wrapper = mount(BFormTextarea, {props: {autocomplete: 'off'}})
      expect(wrapper.attributes('autocomplete')).toBe('off')
    })

    it('does not set autocomplete attribute when not provided', () => {
      const wrapper = mount(BFormTextarea)
      expect(wrapper.attributes('autocomplete')).toBeUndefined()
    })

    it('sets readonly attribute when prop readonly is true', () => {
      const wrapper = mount(BFormTextarea, {props: {readonly: true}})
      expect(wrapper.attributes('readonly')).toBeDefined()
    })

    it('does not set readonly when readonly is false', () => {
      const wrapper = mount(BFormTextarea, {props: {readonly: false}})
      expect(wrapper.attributes('readonly')).toBeUndefined()
    })

    it('sets readonly when plaintext is true', () => {
      const wrapper = mount(BFormTextarea, {props: {plaintext: true}})
      expect(wrapper.attributes('readonly')).toBeDefined()
    })

    it('sets disabled attribute when prop disabled is true', () => {
      const wrapper = mount(BFormTextarea, {props: {disabled: true}})
      expect(wrapper.attributes('disabled')).toBeDefined()
    })

    it('does not set disabled when prop disabled is false', () => {
      const wrapper = mount(BFormTextarea, {props: {disabled: false}})
      expect(wrapper.attributes('disabled')).toBeUndefined()
    })

    it('updates disabled reactively', async () => {
      const wrapper = mount(BFormTextarea, {props: {disabled: false}})
      expect(wrapper.attributes('disabled')).toBeUndefined()
      await wrapper.setProps({disabled: true})
      expect(wrapper.attributes('disabled')).toBeDefined()
    })
  })

  describe('rows prop', () => {
    it('has rows attribute of 2 by default', () => {
      const wrapper = mount(BFormTextarea)
      expect(wrapper.attributes('rows')).toBe('2')
    })

    it('sets rows attribute', () => {
      const wrapper = mount(BFormTextarea, {props: {rows: 5}})
      expect(wrapper.attributes('rows')).toBe('5')
    })

    it('updates rows reactively', async () => {
      const wrapper = mount(BFormTextarea, {props: {rows: 3}})
      expect(wrapper.attributes('rows')).toBe('3')
      await wrapper.setProps({rows: 6})
      expect(wrapper.attributes('rows')).toBe('6')
    })

    it('enforces minimum of 2 rows', () => {
      const wrapper = mount(BFormTextarea, {props: {rows: 1}})
      expect(wrapper.attributes('rows')).toBe('2')
    })
  })

  describe('wrap prop', () => {
    it('has wrap soft by default', () => {
      const wrapper = mount(BFormTextarea)
      expect(wrapper.attributes('wrap')).toBe('soft')
    })

    it('sets wrap attribute', () => {
      const wrapper = mount(BFormTextarea, {props: {wrap: 'hard'}})
      expect(wrapper.attributes('wrap')).toBe('hard')
    })
  })

  describe('noResize prop', () => {
    it('has no resize style by default', () => {
      const wrapper = mount(BFormTextarea)
      expect(wrapper.element.style.resize).not.toBe('none')
    })

    it('sets resize none style when noResize is true', () => {
      const wrapper = mount(BFormTextarea, {props: {noResize: true}})
      expect(wrapper.element.style.resize).toBe('none')
    })

    it('updates noResize reactively', async () => {
      const wrapper = mount(BFormTextarea, {props: {noResize: false}})
      expect(wrapper.element.style.resize).not.toBe('none')
      await wrapper.setProps({noResize: true})
      expect(wrapper.element.style.resize).toBe('none')
    })
  })

  describe('aria attributes', () => {
    it('sets aria-required when prop required is true', () => {
      const wrapper = mount(BFormTextarea, {props: {required: true}})
      expect(wrapper.attributes('aria-required')).toBe('true')
    })

    it('does not set aria-required when prop required is false', () => {
      const wrapper = mount(BFormTextarea, {props: {required: false}})
      expect(wrapper.attributes('aria-required')).toBeUndefined()
    })

    it('sets aria-invalid to true when ariaInvalid is true', () => {
      const wrapper = mount(BFormTextarea, {props: {ariaInvalid: true}})
      expect(wrapper.attributes('aria-invalid')).toBe('true')
    })

    it('sets aria-invalid to grammar when ariaInvalid is grammar', () => {
      const wrapper = mount(BFormTextarea, {props: {ariaInvalid: 'grammar'}})
      expect(wrapper.attributes('aria-invalid')).toBe('grammar')
    })

    it('sets aria-invalid to spelling when ariaInvalid is spelling', () => {
      const wrapper = mount(BFormTextarea, {props: {ariaInvalid: 'spelling'}})
      expect(wrapper.attributes('aria-invalid')).toBe('spelling')
    })

    it('sets aria-invalid to true when state is false', () => {
      const wrapper = mount(BFormTextarea, {props: {state: false}})
      expect(wrapper.attributes('aria-invalid')).toBe('true')
    })

    it('does not set aria-invalid when state is true', () => {
      const wrapper = mount(BFormTextarea, {props: {state: true}})
      expect(wrapper.attributes('aria-invalid')).toBeUndefined()
    })

    it('does not set aria-invalid when state is null', () => {
      const wrapper = mount(BFormTextarea, {props: {state: null}})
      expect(wrapper.attributes('aria-invalid')).toBeUndefined()
    })

    it('ariaInvalid prop takes precedence over state', () => {
      const wrapper = mount(BFormTextarea, {props: {ariaInvalid: 'grammar', state: false}})
      expect(wrapper.attributes('aria-invalid')).toBe('grammar')
    })

    it('sets aria-invalid to false when ariaInvalid is false', () => {
      const wrapper = mount(BFormTextarea, {props: {ariaInvalid: false}})
      expect(wrapper.attributes('aria-invalid')).toBe('false')
    })
  })

  describe('modelValue', () => {
    it('has empty value by default', () => {
      const wrapper = mount(BFormTextarea)
      expect(wrapper.element.value).toBe('')
    })

    it('sets initial value from modelValue prop', () => {
      const wrapper = mount(BFormTextarea, {props: {modelValue: 'hello'}})
      expect(wrapper.element.value).toBe('hello')
    })

    it('updates value when modelValue changes', async () => {
      const wrapper = mount(BFormTextarea, {props: {modelValue: 'hello'}})
      expect(wrapper.element.value).toBe('hello')
      await wrapper.setProps({modelValue: 'world'})
      expect(wrapper.element.value).toBe('world')
    })

    it('emits update:modelValue on input event', async () => {
      const wrapper = mount(BFormTextarea, {props: {modelValue: ''}})
      const textarea = wrapper.element
      textarea.value = 'test'
      await wrapper.trigger('input')
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test'])
    })

    it('emits update:modelValue on change event', async () => {
      const wrapper = mount(BFormTextarea, {props: {modelValue: ''}})
      const textarea = wrapper.element
      textarea.value = 'test'
      await wrapper.trigger('change')
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test'])
    })

    it('accepts numeric modelValue', () => {
      const wrapper = mount(BFormTextarea, {props: {modelValue: 42}})
      expect(wrapper.element.value).toBe('42')
    })
  })

  describe('events', () => {
    it('emits update:modelValue on input', async () => {
      const wrapper = mount(BFormTextarea, {props: {modelValue: ''}})
      wrapper.element.value = 'abc'
      await wrapper.trigger('input')
      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual(['abc'])
    })

    it('emits update:modelValue on change', async () => {
      const wrapper = mount(BFormTextarea, {props: {modelValue: ''}})
      wrapper.element.value = 'abc'
      await wrapper.trigger('change')
      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual(['abc'])
    })

    it('does not emit update:modelValue on change when value is unchanged', async () => {
      const wrapper = mount(BFormTextarea, {props: {modelValue: 'abc'}})
      wrapper.element.value = 'abc'
      await wrapper.trigger('change')
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })
  })

  describe('formatter', () => {
    it('applies formatter on input', async () => {
      const formatter = vi.fn((val: string) => val.toUpperCase())
      const wrapper = mount(BFormTextarea, {props: {modelValue: '', formatter}})
      wrapper.element.value = 'hello'
      await wrapper.trigger('input')
      expect(formatter).toHaveBeenCalled()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual(['HELLO'])
    })

    it('does not apply formatter on input when lazyFormatter is true', async () => {
      const formatter = vi.fn((val: string) => val.toUpperCase())
      const wrapper = mount(BFormTextarea, {
        props: {modelValue: '', formatter, lazyFormatter: true},
      })
      wrapper.element.value = 'hello'
      await wrapper.trigger('input')
      expect(formatter).not.toHaveBeenCalled()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual(['hello'])
    })

    it('applies formatter on change', async () => {
      const formatter = vi.fn((val: string) => val.toUpperCase())
      const wrapper = mount(BFormTextarea, {props: {modelValue: '', formatter}})
      wrapper.element.value = 'hello'
      await wrapper.trigger('change')
      expect(formatter).toHaveBeenCalled()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual(['HELLO'])
    })

    it('applies lazy formatter on blur', async () => {
      const formatter = vi.fn((val: string) => val.toUpperCase())
      const wrapper = mount(BFormTextarea, {
        props: {modelValue: '', formatter, lazyFormatter: true},
      })
      wrapper.element.value = 'hello'
      await wrapper.trigger('blur')
      expect(formatter).toHaveBeenCalled()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual(['HELLO'])
    })

    it('formatter receives value and event', async () => {
      const formatter = vi.fn((val: string) => val)
      const wrapper = mount(BFormTextarea, {props: {modelValue: '', formatter}})
      wrapper.element.value = 'test'
      await wrapper.trigger('input')
      expect(formatter).toHaveBeenCalledWith('test', expect.any(Event))
    })
  })

  describe('formGroupKey injection', () => {
    it('inherits disabled from form group', () => {
      const disabled = ref(true)
      const state = ref<boolean | undefined>(undefined)
      const wrapper = mount(BFormTextarea, {
        global: {
          provide: {
            [formGroupKey as unknown as symbol]: () => ({state, disabled}),
          },
        },
      })
      expect(wrapper.attributes('disabled')).toBeDefined()
    })

    it('inherits state from form group when own state is undefined', () => {
      const disabled = ref(false)
      const state = ref<boolean | undefined>(false)
      const wrapper = mount(BFormTextarea, {
        global: {
          provide: {
            [formGroupKey as unknown as symbol]: () => ({state, disabled}),
          },
        },
      })
      expect(wrapper.classes()).toContain('is-invalid')
    })

    it('own state takes precedence over form group state', () => {
      const disabled = ref(false)
      const state = ref<boolean | undefined>(false)
      const wrapper = mount(BFormTextarea, {
        props: {state: true},
        global: {
          provide: {
            [formGroupKey as unknown as symbol]: () => ({state, disabled}),
          },
        },
      })
      expect(wrapper.classes()).toContain('is-valid')
      expect(wrapper.classes()).not.toContain('is-invalid')
    })

    it('disabled from form group combines with own disabled', () => {
      const disabled = ref(true)
      const state = ref<boolean | undefined>(undefined)
      const wrapper = mount(BFormTextarea, {
        props: {disabled: false},
        global: {
          provide: {
            [formGroupKey as unknown as symbol]: () => ({state, disabled}),
          },
        },
      })
      expect(wrapper.attributes('disabled')).toBeDefined()
    })
  })

  describe('exposed methods', () => {
    it('exposes element ref', () => {
      const wrapper = mount(BFormTextarea)
      expect(wrapper.vm.element).toBeDefined()
    })

    it('exposes focus method', () => {
      const wrapper = mount(BFormTextarea)
      expect(typeof wrapper.vm.focus).toBe('function')
    })

    it('exposes blur method', () => {
      const wrapper = mount(BFormTextarea)
      expect(typeof wrapper.vm.blur).toBe('function')
    })

    it('exposes flushDebounce method', () => {
      const wrapper = mount(BFormTextarea)
      expect(typeof wrapper.vm.flushDebounce).toBe('function')
    })
  })

  describe('plaintext mode', () => {
    it('has form-control-plaintext class', () => {
      const wrapper = mount(BFormTextarea, {props: {plaintext: true}})
      expect(wrapper.classes()).toContain('form-control-plaintext')
    })

    it('does not have form-control class', () => {
      const wrapper = mount(BFormTextarea, {props: {plaintext: true}})
      expect(wrapper.classes()).not.toContain('form-control')
    })

    it('is readonly', () => {
      const wrapper = mount(BFormTextarea, {props: {plaintext: true}})
      expect(wrapper.attributes('readonly')).toBeDefined()
    })

    it('updates plaintext reactively', async () => {
      const wrapper = mount(BFormTextarea, {props: {plaintext: false}})
      expect(wrapper.classes()).toContain('form-control')
      expect(wrapper.classes()).not.toContain('form-control-plaintext')
      await wrapper.setProps({plaintext: true})
      expect(wrapper.classes()).toContain('form-control-plaintext')
      expect(wrapper.classes()).not.toContain('form-control')
    })
  })

  describe('debounce', () => {
    it('emits update:modelValue immediately when debounce is 0', async () => {
      const wrapper = mount(BFormTextarea, {props: {modelValue: '', debounce: 0}})
      wrapper.element.value = 'test'
      await wrapper.trigger('input')
      expect(wrapper.emitted('update:modelValue')![0]).toEqual(['test'])
    })

    it('delays update:modelValue when debounce is set', async () => {
      vi.useFakeTimers()
      const wrapper = mount(BFormTextarea, {props: {modelValue: '', debounce: 200}})
      wrapper.element.value = 'test'
      await wrapper.trigger('input')
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      vi.advanceTimersByTime(200)
      await nextTick()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual(['test'])
      vi.useRealTimers()
    })

    it('flushes debounce on blur', async () => {
      vi.useFakeTimers()
      const wrapper = mount(BFormTextarea, {props: {modelValue: '', debounce: 500}})
      wrapper.element.value = 'debounced'
      await wrapper.trigger('input')
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      await wrapper.trigger('blur')
      await nextTick()
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['debounced'])
      vi.useRealTimers()
    })
  })

  describe('extra attributes pass-through', () => {
    it('passes through extra attributes to the textarea element', () => {
      const wrapper = mount(BFormTextarea, {attrs: {'data-testid': 'custom-textarea'}})
      expect(wrapper.attributes('data-testid')).toBe('custom-textarea')
    })

    it('passes through tabindex', () => {
      const wrapper = mount(BFormTextarea, {attrs: {tabindex: '2'}})
      expect(wrapper.attributes('tabindex')).toBe('2')
    })
  })
})
