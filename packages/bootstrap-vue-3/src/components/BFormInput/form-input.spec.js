// @vitest-environment jsdom
import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, beforeEach, describe, expect, it, vitest} from 'vitest'
import {nextTick} from 'vue'
import {createContainer, waitRAF} from '../../../tests/utils'
import BFormInput from './BFormInput.vue'

describe('form-input', () => {
  enableAutoUnmount(afterEach)

  it('has class form-control', () => {
    const wrapper = mount(BFormInput)

    const $input = wrapper.get('input')
    expect($input.classes()).toContain('form-control')
  })

  it('has class form-control-lg when size=lg and plane=false', () => {
    const wrapper = mount(BFormInput, {
      props: {
        size: 'lg',
      },
    })

    const $input = wrapper.get('input')
    expect($input.classes()).toContain('form-control-lg')
  })

  it('has class form-control-sm when size=lg and plain=false', () => {
    const wrapper = mount(BFormInput, {
      props: {
        size: 'sm',
      },
    })

    const $input = wrapper.get('input')
    expect($input.classes()).toContain('form-control-sm')
  })

  it('does not have class form-control-plaintext when plaintext not set', () => {
    const wrapper = mount(BFormInput)

    const $input = wrapper.get('input')
    expect($input.classes()).not.toContain('form-control-plaintext')
    expect($input.attributes('readonly')).toBeUndefined()
  })

  it('has class form-control-plaintext when plaintext=true', () => {
    const wrapper = mount(BFormInput, {
      props: {
        plaintext: true,
      },
    })

    const $input = wrapper.get('input')
    expect($input.classes()).toContain('form-control-plaintext')
  })

  it('has attribute read-only when plaintext=true', () => {
    const wrapper = mount(BFormInput, {
      props: {
        plaintext: true,
      },
    })

    const $input = wrapper.get('input')
    expect($input.classes()).toContain('form-control-plaintext')
    expect($input.attributes('readonly')).toBeDefined()
  })

  it('has class custom-range instead of form-control when type=range', () => {
    const wrapper = mount(BFormInput, {
      props: {
        type: 'range',
      },
    })

    const $input = wrapper.get('input')
    expect($input.classes()).toContain('form-range')
    expect($input.classes()).not.toContain('form-control')
  })

  it('does not have class form-control-plaintext when type=range and plaintext=true', () => {
    const wrapper = mount(BFormInput, {
      props: {
        type: 'range',
        plaintext: true,
      },
    })

    const $input = wrapper.get('input')
    expect($input.classes()).toContain('form-range')
    expect($input.classes()).not.toContain('form-control')
    expect($input.classes()).not.toContain('form-control-plaintext')
  })

  it('does not have class form-control-plaintext when type=color and plaintext=true', () => {
    const wrapper = mount(BFormInput, {
      props: {
        type: 'color',
        plaintext: true,
      },
    })

    const $input = wrapper.get('input')
    expect($input.classes()).not.toContain('custom-range')
    expect($input.classes()).not.toContain('form-control-plaintext')
    expect($input.classes()).toContain('form-control')
  })

  it('has user supplied id', () => {
    const wrapper = mount(BFormInput, {
      props: {
        id: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('id')).toBe('foobar')
  })

  it('has safeId after mount when no id provided', async () => {
    const wrapper = mount(BFormInput, {
      attachTo: createContainer(),
    })

    // We need to wait a tick for `safeId` to be generated
    await nextTick()

    const $input = wrapper.get('input')
    expect($input.attributes('id')).toBeDefined()
  })

  it('has form attribute when form prop set', () => {
    const wrapper = mount(BFormInput, {
      props: {
        form: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('form')).toBe('foobar')
  })

  it('does not have list attribute when list prop not set', () => {
    const wrapper = mount(BFormInput)

    const $input = wrapper.get('input')
    expect($input.attributes('list')).toBeUndefined()
  })

  it('has list attribute when list prop set', () => {
    const wrapper = mount(BFormInput, {
      props: {
        list: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('list')).toBe('foobar')
  })

  it('does not have list attribute when list prop set and type=password', () => {
    const wrapper = mount(BFormInput, {
      props: {
        list: 'foobar',
        type: 'password',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('list')).toBeUndefined()
  })

  it('renders text input by default', () => {
    const wrapper = mount(BFormInput)

    const $input = wrapper.get('input')
    expect($input.attributes('type')).toBe('text')
  })

  it('renders number input when type set to number', () => {
    const wrapper = mount(BFormInput, {
      props: {
        type: 'number',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('type')).toBe('number')
  })

  it('renders text input when type not supported', () => {
    const warnHandler = vitest.fn()

    const wrapper = mount(BFormInput, {
      global: {
        config: {
          warnHandler,
        },
      },
      props: {
        type: 'foobar',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('type')).toBe('text')

    expect(warnHandler).toHaveBeenCalled()
  })

  it('does not have is-valid or is-invalid classes when state is default', () => {
    const wrapper = mount(BFormInput)

    const $input = wrapper.get('input')
    expect($input.classes()).not.toContain('is-valid')
    expect($input.classes()).not.toContain('is-invalid')
  })

  it('has class is-valid when state=true', () => {
    const wrapper = mount(BFormInput, {
      props: {
        state: true,
      },
    })

    const $input = wrapper.get('input')
    expect($input.classes()).toContain('is-valid')
    expect($input.classes()).not.toContain('is-invalid')
  })

  it('has class is-invalid when state=false', () => {
    const wrapper = mount(BFormInput, {
      props: {
        state: false,
      },
    })

    const $input = wrapper.get('input')
    expect($input.classes()).toContain('is-invalid')
    expect($input.classes()).not.toContain('is-valid')
  })

  it('does not have aria-invalid attribute by default', () => {
    const wrapper = mount(BFormInput)

    expect(wrapper.attributes('aria-invalid')).toBeUndefined()
  })

  it('does not have aria-invalid attribute when state is true', () => {
    const wrapper = mount(BFormInput, {
      props: {
        state: true,
      },
    })

    expect(wrapper.attributes('aria-invalid')).toBeUndefined()
  })

  it('has aria-invalid attribute when state=false', () => {
    const wrapper = mount(BFormInput, {
      props: {
        state: false,
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('aria-invalid')).toBe('true')
  })

  it('has aria-invalid attribute when aria-invalid="true"', () => {
    const wrapper = mount(BFormInput, {
      props: {
        ariaInvalid: 'true',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('aria-invalid')).toBe('true')
  })

  it('has aria-invalid attribute when aria-invalid=true', () => {
    const wrapper = mount(BFormInput, {
      props: {
        ariaInvalid: true,
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('aria-invalid')).toBe('true')
  })

  it('has aria-invalid attribute when aria-invalid="spelling"', () => {
    const wrapper = mount(BFormInput, {
      props: {
        ariaInvalid: 'spelling',
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('aria-invalid')).toBe('spelling')
  })

  it('is disabled when disabled=true', () => {
    const wrapper = mount(BFormInput, {
      props: {
        disabled: true,
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('disabled')).toBeDefined()
    expect($input.element.disabled).toBe(true)
  })

  it('is not disabled when disabled=false', () => {
    const wrapper = mount(BFormInput, {
      props: {
        disabled: false,
      },
    })

    const $input = wrapper.get('input')
    expect($input.attributes('disabled')).toBeUndefined()
    expect($input.element.disabled).toBe(false)
  })

  it('emits an input event', async () => {
    const wrapper = mount(BFormInput)

    const $input = wrapper.get('input')
    $input.element.value = 'test'
    await $input.trigger('input')

    expect(wrapper.emitted('input')).toBeDefined()
    expect(wrapper.emitted('input')[0].length).toEqual(1)
    expect(wrapper.emitted('input')[0][0]).toEqual('test')
  })

  it('emits a native focus event', async () => {
    const spy = vitest.fn()
    const wrapper = mount(BFormInput, {
      attrs: {
        onFocus: spy,
      },
    })

    const $input = wrapper.get('input')
    await $input.trigger('focus')

    expect(wrapper.emitted()).toMatchObject({})
    expect(spy).toHaveBeenCalled()
  })

  it('emits a blur event with native event as only arg', async () => {
    const wrapper = mount(BFormInput, {
      props: {
        modelValue: 'TEST',
      },
    })

    const $input = wrapper.get('input')
    await $input.trigger('blur')

    expect(wrapper.emitted('blur')).toBeDefined()
    expect(wrapper.emitted('blur')[0].length).toEqual(1)
    expect(wrapper.emitted('blur')[0][0] instanceof Event).toBe(true)
    expect(wrapper.emitted('blur')[0][0].type).toEqual('blur')
  })

  it('applies formatter on input when not lazy', async () => {
    const wrapper = mount(BFormInput, {
      props: {
        formatter(value) {
          return value.toLowerCase()
        },
      },
      attachTo: createContainer(),
    })

    const $input = wrapper.get('input')
    $input.element.value = 'TEST'
    await $input.trigger('input')

    expect(wrapper.emitted('update:modelValue')).toBeDefined()
    expect(wrapper.emitted('update:modelValue').length).toEqual(1)
    expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('test')

    expect(wrapper.emitted('input')).toBeDefined()
    expect(wrapper.emitted('input').length).toEqual(1)
    expect(wrapper.emitted('input')[0][0]).toEqual('test')
  })

  it('does not apply formatter on input when lazy', async () => {
    const wrapper = mount(BFormInput, {
      props: {
        formatter(value) {
          return value.toLowerCase()
        },
        lazyFormatter: true,
      },
      attrs: {
        'onUpdate:modelValue': (modelValue) => wrapper.setProps({modelValue}),
      },
      attachTo: createContainer(),
    })

    const $input = wrapper.get('input')
    $input.element.value = 'TEST'
    await $input.trigger('input')

    expect(wrapper.vm.modelValue).toEqual('TEST')
    expect(wrapper.emitted('update:modelValue')).toBeDefined()
    expect(wrapper.emitted('update:modelValue').length).toEqual(1)
    expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('TEST')
    expect(wrapper.emitted('input')).toBeDefined()
    expect(wrapper.emitted('input').length).toEqual(1)
    expect(wrapper.emitted('input')[0][0]).toEqual('TEST')
    expect(wrapper.emitted('change')).toBeUndefined()
  })

  it('applies formatter on blur when lazy', async () => {
    const wrapper = mount(BFormInput, {
      props: {
        modelValue: '',
        formatter(value) {
          return value.toLowerCase()
        },
        lazyFormatter: true,
      },
      attrs: {
        'onUpdate:modelValue': (modelValue) => wrapper.setProps({modelValue}),
      },
      attachTo: createContainer(),
    })

    const $input = wrapper.get('input')

    // Input event needed to set initial value
    $input.element.value = 'TEST'
    await $input.trigger('input')

    expect(wrapper.vm.modelValue).toEqual('TEST')
    expect(wrapper.emitted('update:modelValue')).toBeDefined()
    expect(wrapper.emitted('update:modelValue').length).toEqual(1)
    expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('TEST')

    await $input.trigger('blur')

    expect(wrapper.vm.modelValue).toEqual('test')
    expect(wrapper.emitted('update:modelValue')).toBeDefined()
    expect(wrapper.emitted('update:modelValue').length).toEqual(2)
    expect(wrapper.emitted('update:modelValue')[1][0]).toEqual('test')
    expect(wrapper.emitted('input')).toBeDefined()
    expect(wrapper.emitted('change')).toBeUndefined()
    expect(wrapper.emitted('blur')).toBeDefined()
    expect(wrapper.emitted('blur').length).toEqual(1)
  })

  it('does not apply formatter when value supplied on mount and not lazy', () => {
    const wrapper = mount(BFormInput, {
      props: {
        modelValue: 'TEST',
        formatter(value) {
          return String(value).toLowerCase()
        },
      },
      attachTo: createContainer(),
    })

    expect(wrapper.vm.modelValue).toEqual('TEST')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    expect(wrapper.emitted('input')).toBeUndefined()
    expect(wrapper.emitted('change')).toBeUndefined()
    expect(wrapper.emitted('blur')).toBeUndefined()
  })

  it('does not apply formatter when value prop updated and not lazy', async () => {
    const wrapper = mount(BFormInput, {
      props: {
        modelValue: '',
        formatter(value) {
          return value.toLowerCase()
        },
      },
      attachTo: createContainer(),
    })

    const $input = wrapper.get('input')
    await wrapper.setProps({modelValue: 'TEST'})

    expect($input.element.value).toEqual('TEST')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined() // Note emitted as value hasn't changed
    expect(wrapper.emitted('input')).toBeUndefined()
    expect(wrapper.emitted('change')).toBeUndefined()
    expect(wrapper.emitted('blur')).toBeUndefined()
  })

  it('does not apply formatter when value prop updated and lazy', async () => {
    const wrapper = mount(BFormInput, {
      props: {
        modelValue: '',
        formatter(value) {
          return value.toLowerCase()
        },
        lazyFormatter: true,
      },
      attachTo: createContainer(),
    })

    const $input = wrapper.get('input')
    await wrapper.setProps({modelValue: 'TEST'})

    expect($input.element.value).toEqual('TEST')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined() // Not emitted when value doesnt change
    expect(wrapper.emitted('input')).toBeUndefined()
    expect(wrapper.emitted('change')).toBeUndefined()
    expect(wrapper.emitted('blur')).toBeUndefined()
  })

  it('does not update value when non-lazy formatter returns false', async () => {
    const wrapper = mount(BFormInput, {
      props: {
        modelValue: 'abc',
        formatter() {
          return false
        },
      },
      attrs: {
        'onUpdate:modelValue': (modelValue) => wrapper.setProps({modelValue}),
      },
      attachTo: createContainer(),
    })

    const $input = wrapper.find('input')
    expect($input.exists()).toBe(true)

    await $input.trigger('focus')
    await $input.setValue('TEST')

    expect(wrapper.emitted('input')).toBeUndefined()
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    // v-model should not change
    expect(wrapper.vm.modelValue).toBe('abc')
    // Value in input should remain the same as entered
    expect($input.element.value).toEqual('TEST')
  })

  /* TODO: implement noWheel
  it('focused number input with no-wheel set to true works', () => {
    const spy = vitest.fn()
    const wrapper = mount(BFormInput, {
      attachTo: createContainer(),
      props: {
        noWheel: true,
        type: 'number',
        modelValue: '123',
      },
      attrs: {
        onBlur: spy
      }
    })

    expect(wrapper.element.type).toBe('number')
    expect(wrapper.props().noWheel).toBe(true)

    wrapper.element.focus()
    await wrapper.trigger('focus')
    await wrapper.trigger('wheel', { deltaY: 33.33, deltaX: 0, deltaZ: 0, deltaMode: 0 })

    // `:no-wheel="true"` will fire a blur event on the input when wheel fired
    expect(spy).toHaveBeenCalled()

    
  })


  it('focused number input with no-wheel set to false works', () => {
    const spy = vitest.fn(() => {})
    const wrapper = mount(BFormInput, {
      attachTo: createContainer(),
      props: {
        noWheel: false,
        type: 'number',
        modelValue: '123'
      },
      attrs: {
        onBlur: spy
      }
    })

    expect(wrapper.element.type).toBe('number')
    expect(wrapper.props().noWheel).toBe(false)
    expect(document.activeElement).not.toBe(wrapper.element)

    wrapper.element.focus()
    await wrapper.trigger('focus')
    expect(document.activeElement).toBe(wrapper.element)
    await wrapper.trigger('wheel', { deltaY: 33.33, deltaX: 0, deltaZ: 0, deltaMode: 0 })

    // `:no-wheel="false"` will not fire a blur event on the input when wheel fired
    expect(spy).not.toHaveBeenCalled()

    
  })


  it('changing no-wheel after mount works', () => {
    const spy = vitest.fn(() => {})
    const wrapper = mount(BFormInput, {
      attachTo: createContainer(),
      props: {
        noWheel: false,
        type: 'number',
        modelValue: '123'
      },
      attrs: {
        onBlur: spy
      }
    })

    expect(wrapper.element.type).toBe('number')
    expect(wrapper.props().noWheel).toBe(false)
    expect(document.activeElement).not.toBe(wrapper.element)

    wrapper.element.focus()
    await wrapper.trigger('focus')
    expect(document.activeElement).toBe(wrapper.element)
    await wrapper.trigger('wheel', { deltaY: 33.33, deltaX: 0, deltaZ: 0, deltaMode: 0 })

    // no-wheel=false will not fire a blur event on the input when wheel fired
    expect(spy).not.toHaveBeenCalled()

    await wrapper.setProps({ noWheel: true })
    expect(wrapper.props().noWheel).toBe(true)

    wrapper.element.focus()
    await wrapper.trigger('focus')
    expect(document.activeElement).toBe(wrapper.element)
    await wrapper.trigger('wheel', { deltaY: 33.33, deltaX: 0, deltaZ: 0, deltaMode: 0 })

    // no-wheel=true will fire a blur event on the input when wheel fired
    expect(document.activeElement).not.toBe(wrapper.element)
    expect(spy).toHaveBeenCalled()

    
  })
  */

  it('"number" modifier prop works', async () => {
    const wrapper = mount(BFormInput, {
      props: {
        type: 'text',
        number: true,
      },
      attrs: {
        'onUpdate:modelValue': (modelValue) => wrapper.setProps({modelValue}),
      },
    })

    const $input = wrapper.get('input')
    $input.element.value = '123.450'
    await $input.trigger('input')

    expect($input.element.value).toBe('123.450')
    // `v-model` update event (should emit a numerical value)
    expect(wrapper.emitted('update:modelValue')).toBeDefined()
    expect(wrapper.emitted('update:modelValue').length).toBe(1)
    expect(wrapper.emitted('update:modelValue')[0].length).toEqual(1)
    expect(wrapper.emitted('update:modelValue')[0][0]).toBeCloseTo(123.45)
    // Pre converted value as string (raw input value)
    expect(wrapper.emitted('input')).toBeDefined()
    expect(wrapper.emitted('input').length).toBe(1)
    expect(wrapper.emitted('input')[0].length).toEqual(1)
    expect(wrapper.emitted('input')[0][0]).toEqual('123.450')

    // Update the input to be different string-wise, but same numerically
    $input.element.value = '123.4500'
    await $input.trigger('input')

    expect($input.element.value).toBe('123.4500')
    // Should emit a new input event
    expect(wrapper.emitted('input').length).toEqual(2)
    expect(wrapper.emitted('input')[1][0]).toEqual('123.4500')
    // `v-model` value stays the same and update event shouldn't be emitted again
    expect(wrapper.emitted('update:modelValue').length).toBe(1)
    expect(wrapper.emitted('update:modelValue')[0][0]).toBeCloseTo(123.45)

    // Updating the `v-model` to new numeric value
    await wrapper.setProps({modelValue: 45.6})
    expect($input.element.value).toBe('45.6')
  })

  it('"lazy" modifier prop works', async () => {
    const wrapper = mount(BFormInput, {
      props: {
        type: 'text',
        lazy: true,
      },
      attrs: {
        'onUpdate:modelValue': (modelValue) => wrapper.setProps({modelValue}),
      },
    })

    const $input = wrapper.get('input')
    $input.element.value = 'a'
    await $input.trigger('input')
    expect($input.element.value).toBe('a')
    // `v-model` update event should not have emitted
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()

    $input.element.value = 'ab'
    await $input.trigger('input')
    expect($input.element.value).toBe('ab')
    // `v-model` update event should not have emitted
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()

    // trigger a change event
    await $input.trigger('change')
    expect($input.element.value).toBe('ab')
    // `v-model` update event should have emitted
    expect(wrapper.emitted('update:modelValue')).toBeDefined()
    expect(wrapper.emitted('update:modelValue').length).toEqual(1)
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe('ab')

    $input.element.value = 'abc'
    await $input.trigger('input')
    expect($input.element.value).toBe('abc')
    // `v-model` update event should not have emitted new event
    expect(wrapper.emitted('update:modelValue').length).toEqual(1)

    $input.element.value = 'abcd'
    await $input.trigger('input')
    expect($input.element.value).toBe('abcd')
    // `v-model` update event should not have emitted new event
    expect(wrapper.emitted('update:modelValue').length).toEqual(1)

    // Trigger a blur event
    await $input.trigger('blur')
    expect($input.element.value).toBe('abcd')
    // `v-model` update event should have emitted
    expect(wrapper.emitted('update:modelValue').length).toEqual(2)
    expect(wrapper.emitted('update:modelValue')[1][0]).toBe('abcd')
  })

  /* TODO: implement debounce
  it('"debounce" prop works', () => {
    vitest.useFakeTimers()
    const wrapper = mount(BFormInput, {
      props: {
        type: 'text',
        modelValue: '',
        debounce: 100
      }
    })

    const $input = wrapper.get('input')
    $input.element.value = 'a'
    await $input.trigger('input')
    expect($input.element.value).toBe('a')
    // `v-model` update event should not have emitted
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    // `input` event should be emitted
    expect(wrapper.emitted('input')).toBeDefined()
    expect(wrapper.emitted('input').length).toBe(1)
    expect(wrapper.emitted('input')[0][0]).toBe('a')

    $input.element.value = 'ab'
    await $input.trigger('input')
    expect($input.element.value).toBe('ab')
    // `v-model` update event should not have emitted
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    // `input` event should be emitted
    expect(wrapper.emitted('input').length).toBe(2)
    expect(wrapper.emitted('input')[1][0]).toBe('ab')

    // Advance timer
    vitest.runOnlyPendingTimers()
    // Should update the v-model
    expect($input.element.value).toBe('ab')
    // `v-model` update event should have emitted
    expect(wrapper.emitted('update:modelValue')).toBeDefined()
    expect(wrapper.emitted('update:modelValue').length).toBe(1)
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe('ab')
    // `input` event should not have emitted new event
    expect(wrapper.emitted('input').length).toBe(2)

    // Update input
    $input.element.value = 'abc'
    await $input.trigger('input')
    expect($input.element.value).toBe('abc')
    // `v-model` update event should not have emitted new event
    expect(wrapper.emitted('update:modelValue').length).toBe(1)
    // `input` event should be emitted
    expect(wrapper.emitted('input').length).toBe(3)
    expect(wrapper.emitted('input')[2][0]).toBe('abc')

    // Update input
    $input.element.value = 'abcd'
    await $input.trigger('input')
    expect($input.element.value).toBe('abcd')
    // `v-model` update event should not have emitted new event
    expect(wrapper.emitted('update:modelValue').length).toEqual(1)
    // `input` event should be emitted
    expect(wrapper.emitted('input').length).toBe(4)
    expect(wrapper.emitted('input')[3][0]).toBe('abcd')

    // Trigger a `change` event
    await $input.trigger('change')
    expect($input.element.value).toBe('abcd')
    // `v-model` update event should have emitted (change overrides debounce)
    expect(wrapper.emitted('update:modelValue').length).toEqual(2)
    expect(wrapper.emitted('update:modelValue')[1][0]).toBe('abcd')
    // `input` event should not have emitted new event
    expect(wrapper.emitted('input').length).toBe(4)

    $input.element.value = 'abc'
    await $input.trigger('input')
    expect($input.element.value).toBe('abc')
    // `v-model` update event should not have emitted new event
    expect(wrapper.emitted('update:modelValue').length).toBe(2)
    // `input` event should be emitted
    expect(wrapper.emitted('input').length).toBe(5)
    expect(wrapper.emitted('input')[4][0]).toBe('abc')

    $input.element.value = 'abcd'
    await $input.trigger('input')
    expect($input.element.value).toBe('abcd')
    // `v-model` update event should not have emitted new event
    expect(wrapper.emitted('update:modelValue').length).toBe(2)
    // `input` event should be emitted
    expect(wrapper.emitted('input').length).toBe(6)
    expect(wrapper.emitted('input')[5][0]).toBe('abcd')

    // Advance timer
    vitest.runOnlyPendingTimers()
    // Should update the v-model
    expect($input.element.value).toBe('abcd')
    // `v-model` update event should not have emitted new event
    expect(wrapper.emitted('update:modelValue').length).toBe(2)
    // `input` event should not have emitted new event
    expect(wrapper.emitted('input').length).toBe(6)

    
  })
  */

  // These tests are wrapped in a new describe to limit the scope of the getBCR Mock
  describe('prop `autofocus`', () => {
    const origGetBCR = Element.prototype.getBoundingClientRect

    beforeEach(() => {
      // Mock `getBoundingClientRect()` so that the `isVisible(el)` test returns `true`
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
      const wrapper = mount(BFormInput, {
        attachTo: createContainer(),
        props: {
          autofocus: true,
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

    it('does not autofocus when false', async () => {
      const wrapper = mount(BFormInput, {
        attachTo: createContainer(),
        props: {
          autofocus: false,
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
