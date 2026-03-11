import {afterEach, describe, expect, it, vi} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import {nextTick, ref} from 'vue'
import BFormInput from './BFormInput.vue'
import {formGroupKey, inputGroupKey} from '../../utils/keys'

describe('form-input', () => {
  enableAutoUnmount(afterEach)

  describe('rendering', () => {
    it('renders an input element', () => {
      const wrapper = mount(BFormInput)
      expect(wrapper.element.tagName).toBe('INPUT')
    })

    it('has type text by default', () => {
      const wrapper = mount(BFormInput)
      expect(wrapper.attributes('type')).toBe('text')
    })

    it('has class form-control by default', () => {
      const wrapper = mount(BFormInput)
      expect(wrapper.classes()).toContain('form-control')
    })

    it('has auto-generated id attribute', () => {
      const wrapper = mount(BFormInput)
      expect(wrapper.attributes('id')).toBeDefined()
    })

    it('uses custom id when prop id is set', () => {
      const wrapper = mount(BFormInput, {props: {id: 'my-input'}})
      expect(wrapper.attributes('id')).toBe('my-input')
    })

    it('updates id when prop id changes', async () => {
      const wrapper = mount(BFormInput, {props: {id: 'first'}})
      expect(wrapper.attributes('id')).toBe('first')
      await wrapper.setProps({id: 'second'})
      expect(wrapper.attributes('id')).toBe('second')
    })
  })

  describe('type prop', () => {
    const types = [
      'text',
      'number',
      'email',
      'password',
      'search',
      'url',
      'tel',
      'date',
      'time',
      'range',
      'color',
      'datetime-local',
      'month',
      'week',
    ] as const

    for (const type of types) {
      it(`renders type="${type}"`, () => {
        const wrapper = mount(BFormInput, {props: {type}})
        expect(wrapper.attributes('type')).toBe(type)
      })
    }

    it('updates type reactively', async () => {
      const wrapper = mount(BFormInput, {props: {type: 'text'}})
      expect(wrapper.attributes('type')).toBe('text')
      await wrapper.setProps({type: 'email'})
      expect(wrapper.attributes('type')).toBe('email')
    })
  })

  describe('CSS classes', () => {
    it('has form-control class for default text type', () => {
      const wrapper = mount(BFormInput)
      expect(wrapper.classes()).toContain('form-control')
    })

    it('has form-range class when type is range', () => {
      const wrapper = mount(BFormInput, {props: {type: 'range'}})
      expect(wrapper.classes()).toContain('form-range')
    })

    it('does not have form-control class when type is range (outside input group)', () => {
      const wrapper = mount(BFormInput, {props: {type: 'range'}})
      expect(wrapper.classes()).not.toContain('form-control')
    })

    it('has form-control class when type is range and inside input group', () => {
      const wrapper = mount(BFormInput, {
        props: {type: 'range'},
        global: {provide: {[inputGroupKey as unknown as symbol]: true}},
      })
      expect(wrapper.classes()).toContain('form-control')
      expect(wrapper.classes()).toContain('form-range')
    })

    it('has form-control-color class when type is color', () => {
      const wrapper = mount(BFormInput, {props: {type: 'color'}})
      expect(wrapper.classes()).toContain('form-control-color')
      expect(wrapper.classes()).toContain('form-control')
    })

    it('has form-control-plaintext class when plaintext is true', () => {
      const wrapper = mount(BFormInput, {props: {plaintext: true}})
      expect(wrapper.classes()).toContain('form-control-plaintext')
      expect(wrapper.classes()).not.toContain('form-control')
    })

    it('does not have form-control-plaintext when type is range even if plaintext is true', () => {
      const wrapper = mount(BFormInput, {props: {plaintext: true, type: 'range'}})
      expect(wrapper.classes()).not.toContain('form-control-plaintext')
    })

    it('does not have form-control-plaintext when type is color even if plaintext is true', () => {
      const wrapper = mount(BFormInput, {props: {plaintext: true, type: 'color'}})
      expect(wrapper.classes()).not.toContain('form-control-plaintext')
    })

    it('has form-control-sm class when size is sm', () => {
      const wrapper = mount(BFormInput, {props: {size: 'sm'}})
      expect(wrapper.classes()).toContain('form-control-sm')
    })

    it('has form-control-lg class when size is lg', () => {
      const wrapper = mount(BFormInput, {props: {size: 'lg'}})
      expect(wrapper.classes()).toContain('form-control-lg')
    })

    it('does not have size class when size is not set', () => {
      const wrapper = mount(BFormInput)
      expect(wrapper.classes().some((c) => c.startsWith('form-control-sm'))).toBe(false)
      expect(wrapper.classes().some((c) => c.startsWith('form-control-lg'))).toBe(false)
    })

    it('updates size class reactively', async () => {
      const wrapper = mount(BFormInput, {props: {size: 'sm'}})
      expect(wrapper.classes()).toContain('form-control-sm')
      await wrapper.setProps({size: 'lg'})
      expect(wrapper.classes()).toContain('form-control-lg')
      expect(wrapper.classes()).not.toContain('form-control-sm')
    })
  })

  describe('state and validation classes', () => {
    it('has is-valid class when state is true', () => {
      const wrapper = mount(BFormInput, {props: {state: true}})
      expect(wrapper.classes()).toContain('is-valid')
    })

    it('has is-invalid class when state is false', () => {
      const wrapper = mount(BFormInput, {props: {state: false}})
      expect(wrapper.classes()).toContain('is-invalid')
    })

    it('has no state class when state is null', () => {
      const wrapper = mount(BFormInput, {props: {state: null}})
      expect(wrapper.classes()).not.toContain('is-valid')
      expect(wrapper.classes()).not.toContain('is-invalid')
    })

    it('has no state class when state is undefined', () => {
      const wrapper = mount(BFormInput)
      expect(wrapper.classes()).not.toContain('is-valid')
      expect(wrapper.classes()).not.toContain('is-invalid')
    })

    it('updates state class reactively', async () => {
      const wrapper = mount(BFormInput, {props: {state: true}})
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
      const wrapper = mount(BFormInput, {props: {name: 'my-input'}})
      expect(wrapper.attributes('name')).toBe('my-input')
    })

    it('does not set name attribute when prop name is not provided', () => {
      const wrapper = mount(BFormInput)
      expect(wrapper.attributes('name')).toBeUndefined()
    })

    it('sets form attribute when prop form is provided', () => {
      const wrapper = mount(BFormInput, {props: {form: 'my-form'}})
      expect(wrapper.attributes('form')).toBe('my-form')
    })

    it('does not set form attribute when prop form is not provided', () => {
      const wrapper = mount(BFormInput)
      expect(wrapper.attributes('form')).toBeUndefined()
    })

    it('sets placeholder attribute', () => {
      const wrapper = mount(BFormInput, {props: {placeholder: 'Enter text'}})
      expect(wrapper.attributes('placeholder')).toBe('Enter text')
    })

    it('sets required attribute when prop required is true', () => {
      const wrapper = mount(BFormInput, {props: {required: true}})
      expect(wrapper.attributes('required')).toBeDefined()
    })

    it('does not set required attribute when prop required is false', () => {
      const wrapper = mount(BFormInput, {props: {required: false}})
      expect(wrapper.attributes('required')).toBeUndefined()
    })

    it('sets autocomplete attribute', () => {
      const wrapper = mount(BFormInput, {props: {autocomplete: 'off'}})
      expect(wrapper.attributes('autocomplete')).toBe('off')
    })

    it('does not set autocomplete attribute when not provided', () => {
      const wrapper = mount(BFormInput)
      expect(wrapper.attributes('autocomplete')).toBeUndefined()
    })

    it('sets readonly attribute when prop readonly is true', () => {
      const wrapper = mount(BFormInput, {props: {readonly: true}})
      expect(wrapper.attributes('readonly')).toBeDefined()
    })

    it('does not set readonly when readonly is false', () => {
      const wrapper = mount(BFormInput, {props: {readonly: false}})
      expect(wrapper.attributes('readonly')).toBeUndefined()
    })

    it('sets readonly when plaintext is true', () => {
      const wrapper = mount(BFormInput, {props: {plaintext: true}})
      expect(wrapper.attributes('readonly')).toBeDefined()
    })

    it('sets min attribute', () => {
      const wrapper = mount(BFormInput, {props: {min: 0}})
      expect(wrapper.attributes('min')).toBe('0')
    })

    it('sets max attribute', () => {
      const wrapper = mount(BFormInput, {props: {max: 100}})
      expect(wrapper.attributes('max')).toBe('100')
    })

    it('sets step attribute', () => {
      const wrapper = mount(BFormInput, {props: {step: 5}})
      expect(wrapper.attributes('step')).toBe('5')
    })

    it('sets list attribute', () => {
      const wrapper = mount(BFormInput, {props: {list: 'datalist-id'}})
      expect(wrapper.attributes('list')).toBe('datalist-id')
    })

    it('does not set list attribute when type is password', () => {
      const wrapper = mount(BFormInput, {props: {type: 'password', list: 'datalist-id'}})
      expect(wrapper.attributes('list')).toBeUndefined()
    })

    it('sets disabled attribute when prop disabled is true', () => {
      const wrapper = mount(BFormInput, {props: {disabled: true}})
      expect(wrapper.attributes('disabled')).toBeDefined()
    })

    it('does not set disabled when prop disabled is false', () => {
      const wrapper = mount(BFormInput, {props: {disabled: false}})
      expect(wrapper.attributes('disabled')).toBeUndefined()
    })

    it('updates disabled reactively', async () => {
      const wrapper = mount(BFormInput, {props: {disabled: false}})
      expect(wrapper.attributes('disabled')).toBeUndefined()
      await wrapper.setProps({disabled: true})
      expect(wrapper.attributes('disabled')).toBeDefined()
    })
  })

  describe('aria attributes', () => {
    it('sets aria-required when prop required is true', () => {
      const wrapper = mount(BFormInput, {props: {required: true}})
      expect(wrapper.attributes('aria-required')).toBe('true')
    })

    it('does not set aria-required when prop required is false', () => {
      const wrapper = mount(BFormInput, {props: {required: false}})
      expect(wrapper.attributes('aria-required')).toBeUndefined()
    })

    it('sets aria-invalid to true when ariaInvalid is true', () => {
      const wrapper = mount(BFormInput, {props: {ariaInvalid: true}})
      expect(wrapper.attributes('aria-invalid')).toBe('true')
    })

    it('sets aria-invalid to grammar when ariaInvalid is grammar', () => {
      const wrapper = mount(BFormInput, {props: {ariaInvalid: 'grammar'}})
      expect(wrapper.attributes('aria-invalid')).toBe('grammar')
    })

    it('sets aria-invalid to spelling when ariaInvalid is spelling', () => {
      const wrapper = mount(BFormInput, {props: {ariaInvalid: 'spelling'}})
      expect(wrapper.attributes('aria-invalid')).toBe('spelling')
    })

    it('sets aria-invalid to true when state is false', () => {
      const wrapper = mount(BFormInput, {props: {state: false}})
      expect(wrapper.attributes('aria-invalid')).toBe('true')
    })

    it('does not set aria-invalid when state is true', () => {
      const wrapper = mount(BFormInput, {props: {state: true}})
      expect(wrapper.attributes('aria-invalid')).toBeUndefined()
    })

    it('does not set aria-invalid when state is null', () => {
      const wrapper = mount(BFormInput, {props: {state: null}})
      expect(wrapper.attributes('aria-invalid')).toBeUndefined()
    })

    it('ariaInvalid prop takes precedence over state', () => {
      const wrapper = mount(BFormInput, {props: {ariaInvalid: 'grammar', state: false}})
      expect(wrapper.attributes('aria-invalid')).toBe('grammar')
    })

    it('sets aria-invalid to false when ariaInvalid is false', () => {
      const wrapper = mount(BFormInput, {props: {ariaInvalid: false}})
      expect(wrapper.attributes('aria-invalid')).toBe('false')
    })
  })

  describe('modelValue', () => {
    it('has empty value by default', () => {
      const wrapper = mount(BFormInput)
      expect(wrapper.element.value).toBe('')
    })

    it('sets initial value from modelValue prop', () => {
      const wrapper = mount(BFormInput, {props: {modelValue: 'hello'}})
      expect(wrapper.element.value).toBe('hello')
    })

    it('updates value attribute when modelValue changes', async () => {
      const wrapper = mount(BFormInput, {props: {modelValue: 'hello'}})
      expect(wrapper.element.value).toBe('hello')
      await wrapper.setProps({modelValue: 'world'})
      expect(wrapper.element.value).toBe('world')
    })

    it('emits update:modelValue on input event', async () => {
      const wrapper = mount(BFormInput, {props: {modelValue: ''}})
      const input = wrapper.element
      input.value = 'test'
      await wrapper.trigger('input')
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test'])
    })

    it('emits update:modelValue on change event', async () => {
      const wrapper = mount(BFormInput, {props: {modelValue: ''}})
      const input = wrapper.element
      input.value = 'test'
      await wrapper.trigger('change')
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test'])
    })

    it('accepts numeric modelValue', () => {
      const wrapper = mount(BFormInput, {props: {modelValue: 42}})
      expect(wrapper.element.value).toBe('42')
    })
  })

  describe('events', () => {
    it('emits update:modelValue on input', async () => {
      const wrapper = mount(BFormInput, {props: {modelValue: ''}})
      wrapper.element.value = 'abc'
      await wrapper.trigger('input')
      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual(['abc'])
    })

    it('emits update:modelValue on change', async () => {
      const wrapper = mount(BFormInput, {props: {modelValue: ''}})
      wrapper.element.value = 'abc'
      await wrapper.trigger('change')
      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual(['abc'])
    })

    it('does not emit update:modelValue on change when value is unchanged', async () => {
      const wrapper = mount(BFormInput, {props: {modelValue: 'abc'}})
      wrapper.element.value = 'abc'
      await wrapper.trigger('change')
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })
  })

  describe('formatter', () => {
    it('applies formatter on input', async () => {
      const formatter = vi.fn((val: string) => val.toUpperCase())
      const wrapper = mount(BFormInput, {props: {modelValue: '', formatter}})
      wrapper.element.value = 'hello'
      await wrapper.trigger('input')
      expect(formatter).toHaveBeenCalled()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual(['HELLO'])
    })

    it('does not apply formatter on input when lazyFormatter is true', async () => {
      const formatter = vi.fn((val: string) => val.toUpperCase())
      const wrapper = mount(BFormInput, {props: {modelValue: '', formatter, lazyFormatter: true}})
      wrapper.element.value = 'hello'
      await wrapper.trigger('input')
      expect(formatter).not.toHaveBeenCalled()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual(['hello'])
    })

    it('applies formatter on change', async () => {
      const formatter = vi.fn((val: string) => val.toUpperCase())
      const wrapper = mount(BFormInput, {props: {modelValue: '', formatter}})
      wrapper.element.value = 'hello'
      await wrapper.trigger('change')
      expect(formatter).toHaveBeenCalled()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual(['HELLO'])
    })

    it('applies lazy formatter on blur', async () => {
      const formatter = vi.fn((val: string) => val.toUpperCase())
      const wrapper = mount(BFormInput, {props: {modelValue: '', formatter, lazyFormatter: true}})
      wrapper.element.value = 'hello'
      await wrapper.trigger('blur')
      expect(formatter).toHaveBeenCalled()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual(['HELLO'])
    })

    it('formatter receives value and event', async () => {
      const formatter = vi.fn((val: string) => val)
      const wrapper = mount(BFormInput, {props: {modelValue: '', formatter}})
      wrapper.element.value = 'test'
      await wrapper.trigger('input')
      expect(formatter).toHaveBeenCalledWith('test', expect.any(Event))
    })
    
    it('keeps input display value in sync with formatted value when formatted equals previous model', async () => {
      // Reproduces: typing disallowed chars when formatter strips them and formatted == previous model
      // e.g. model is "1", user types "a" making raw value "1a", formatter returns "1"
      // Since model stays "1" (no change), Vue won't re-render, so the input must be updated directly
      const digitsOnly = (val: string) => val.replace(/\D/g, '')
      const wrapper = mount(BFormInput, {props: {modelValue: '1', formatter: digitsOnly}})
      // Simulate the user having typed "1a" into the field
      wrapper.element.value = '1a'
      await wrapper.trigger('input')
      // The model should remain "1" (no new emission since value is unchanged)
      // The displayed input value must also be "1" (not "1a")
      expect(wrapper.element.value).toBe('1')
    })

    it('updates input display value to formatted value when formatter strips characters', async () => {
      // Formatter only allows digits
      const digitsOnly = (val: string) => val.replace(/\D/g, '')
      const wrapper = mount(BFormInput, {props: {modelValue: '', formatter: digitsOnly}})
      // User types "a" — formatter returns "" which equals previous model ""
      wrapper.element.value = 'a'
      await wrapper.trigger('input')
      expect(wrapper.element.value).toBe('')
    })
  })

  describe('formGroupKey injection', () => {
    it('inherits disabled from form group', () => {
      const disabled = ref(true)
      const state = ref<boolean | undefined>(undefined)
      const wrapper = mount(BFormInput, {
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
      const wrapper = mount(BFormInput, {
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
      const wrapper = mount(BFormInput, {
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
      const wrapper = mount(BFormInput, {
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

  describe('inputGroupKey injection', () => {
    it('range type gets form-control class inside input group', () => {
      const wrapper = mount(BFormInput, {
        props: {type: 'range'},
        global: {provide: {[inputGroupKey as unknown as symbol]: true}},
      })
      expect(wrapper.classes()).toContain('form-control')
      expect(wrapper.classes()).toContain('form-range')
    })

    it('range type does not get form-control class outside input group', () => {
      const wrapper = mount(BFormInput, {
        props: {type: 'range'},
      })
      expect(wrapper.classes()).not.toContain('form-control')
      expect(wrapper.classes()).toContain('form-range')
    })
  })

  describe('exposed methods', () => {
    it('exposes element ref', () => {
      const wrapper = mount(BFormInput)
      expect(wrapper.vm.element).toBeDefined()
    })

    it('exposes focus method', () => {
      const wrapper = mount(BFormInput)
      expect(typeof wrapper.vm.focus).toBe('function')
    })

    it('exposes blur method', () => {
      const wrapper = mount(BFormInput)
      expect(typeof wrapper.vm.blur).toBe('function')
    })

    it('exposes flushDebounce method', () => {
      const wrapper = mount(BFormInput)
      expect(typeof wrapper.vm.flushDebounce).toBe('function')
    })
  })

  describe('plaintext mode', () => {
    it('has form-control-plaintext class', () => {
      const wrapper = mount(BFormInput, {props: {plaintext: true}})
      expect(wrapper.classes()).toContain('form-control-plaintext')
    })

    it('does not have form-control class', () => {
      const wrapper = mount(BFormInput, {props: {plaintext: true}})
      expect(wrapper.classes()).not.toContain('form-control')
    })

    it('is readonly', () => {
      const wrapper = mount(BFormInput, {props: {plaintext: true}})
      expect(wrapper.attributes('readonly')).toBeDefined()
    })

    it('updates plaintext reactively', async () => {
      const wrapper = mount(BFormInput, {props: {plaintext: false}})
      expect(wrapper.classes()).toContain('form-control')
      expect(wrapper.classes()).not.toContain('form-control-plaintext')
      await wrapper.setProps({plaintext: true})
      expect(wrapper.classes()).toContain('form-control-plaintext')
      expect(wrapper.classes()).not.toContain('form-control')
    })
  })

  describe('debounce', () => {
    it('emits update:modelValue immediately when debounce is 0', async () => {
      const wrapper = mount(BFormInput, {props: {modelValue: '', debounce: 0}})
      wrapper.element.value = 'test'
      await wrapper.trigger('input')
      expect(wrapper.emitted('update:modelValue')![0]).toEqual(['test'])
    })

    it('delays update:modelValue when debounce is set', async () => {
      vi.useFakeTimers()
      const wrapper = mount(BFormInput, {props: {modelValue: '', debounce: 200}})
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
      const wrapper = mount(BFormInput, {props: {modelValue: '', debounce: 500}})
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
    it('passes through extra attributes to the input element', () => {
      const wrapper = mount(BFormInput, {attrs: {'data-testid': 'custom-input'}})
      expect(wrapper.attributes('data-testid')).toBe('custom-input')
    })

    it('passes through tabindex', () => {
      const wrapper = mount(BFormInput, {attrs: {tabindex: '2'}})
      expect(wrapper.attributes('tabindex')).toBe('2')
    })
  })

  describe('model modifiers', () => {
    describe('.number modifier', () => {
      it('converts numeric string to number on input', async () => {
        const wrapper = mount(BFormInput, {
          props: {modelValue: '', modelModifiers: {number: true}},
        })
        wrapper.element.value = '42'
        await wrapper.trigger('input')
        expect(wrapper.emitted('update:modelValue')![0]).toEqual([42])
      })

      it('keeps non-numeric string as string on input', async () => {
        const wrapper = mount(BFormInput, {
          props: {modelValue: '', modelModifiers: {number: true}},
        })
        wrapper.element.value = 'abc'
        await wrapper.trigger('input')
        expect(wrapper.emitted('update:modelValue')![0]).toEqual(['abc'])
      })

      it('converts decimal numeric string to float on input', async () => {
        const wrapper = mount(BFormInput, {
          props: {modelValue: '', modelModifiers: {number: true}},
        })
        wrapper.element.value = '3.14'
        await wrapper.trigger('input')
        expect(wrapper.emitted('update:modelValue')![0]).toEqual([3.14])
      })
    })

    describe('.lazy modifier', () => {
      it('does not emit update:modelValue on input event', async () => {
        const wrapper = mount(BFormInput, {
          props: {modelValue: '', modelModifiers: {lazy: true}},
        })
        wrapper.element.value = 'hello'
        await wrapper.trigger('input')
        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })

      it('emits update:modelValue on change event', async () => {
        const wrapper = mount(BFormInput, {
          props: {modelValue: '', modelModifiers: {lazy: true}},
        })
        wrapper.element.value = 'hello'
        await wrapper.trigger('change')
        expect(wrapper.emitted('update:modelValue')![0]).toEqual(['hello'])
      })

      it('emits update:modelValue on blur event', async () => {
        const wrapper = mount(BFormInput, {
          props: {modelValue: '', modelModifiers: {lazy: true}},
        })
        wrapper.element.value = 'hello'
        await wrapper.trigger('blur')
        expect(wrapper.emitted('update:modelValue')![0]).toEqual(['hello'])
      })
    })

    describe('.trim modifier', () => {
      it('trims whitespace from value on blur', async () => {
        const wrapper = mount(BFormInput, {
          props: {modelValue: '', modelModifiers: {trim: true}},
        })
        wrapper.element.value = '  hello  '
        await wrapper.trigger('blur')
        expect(wrapper.emitted('update:modelValue')![0]).toEqual(['hello'])
      })

      it('trims whitespace from value on input', async () => {
        const wrapper = mount(BFormInput, {
          props: {modelValue: '', modelModifiers: {trim: true}},
        })
        wrapper.element.value = '  hello  '
        await wrapper.trigger('input')
        expect(wrapper.emitted('update:modelValue')![0]).toEqual(['hello'])
      })

      it('updates input element value to trimmed string on blur', async () => {
        const wrapper = mount(BFormInput, {
          props: {modelValue: '', modelModifiers: {trim: true}},
        })
        wrapper.element.value = '  hello  '
        await wrapper.trigger('blur')
        expect(wrapper.element.value).toBe('hello')
      })
    })
  })

  describe('debounceMaxWait', () => {
    it('fires update before debounce timeout expires when maxWait is reached', async () => {
      vi.useFakeTimers()
      const wrapper = mount(BFormInput, {
        props: {modelValue: '', debounce: 500, debounceMaxWait: 200},
      })
      wrapper.element.value = 'test'
      await wrapper.trigger('input')
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      vi.advanceTimersByTime(200)
      await nextTick()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual(['test'])
      vi.useRealTimers()
    })
  })

  describe('autofocus', () => {
    it('focuses the input element on mount when autofocus is true', async () => {
      const wrapper = mount(BFormInput, {
        props: {autofocus: true},
        attachTo: document.body,
      })
      await nextTick()
      expect(document.activeElement).toBe(wrapper.element)
      wrapper.unmount()
    })

    it('does not focus input on mount when autofocus is false', async () => {
      const wrapper = mount(BFormInput, {
        props: {autofocus: false},
        attachTo: document.body,
      })
      await nextTick()
      expect(document.activeElement).not.toBe(wrapper.element)
      wrapper.unmount()
    })
  })

  describe('null modelValue', () => {
    it('renders empty value when modelValue is null', () => {
      const wrapper = mount(BFormInput, {props: {modelValue: null}})
      expect(wrapper.element.value).toBe('')
    })
  })
})
