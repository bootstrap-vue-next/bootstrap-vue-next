import {mount} from '@vue/test-utils'
import {createContainer, waitNT, waitRAF} from '../../../tests/utils'
import BFormTextarea from './BFormTextarea'

describe('form-textarea', () => {
  it('has class form-control', async () => {
    const wrapper = mount(BFormTextarea)

    const $textarea = wrapper.find('textarea')
    expect($textarea.classes()).toContain('form-control')

    wrapper.unmount()
  })

  it('has class form-control-lg when size=lg and plane=false', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        size: 'lg',
      },
    })

    const $textarea = wrapper.find('textarea')
    expect($textarea.classes()).toContain('form-control-lg')

    wrapper.unmount()
  })

  it('has class form-control-sm when size=lg and plain=false', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        size: 'sm',
      },
    })

    const $textarea = wrapper.find('textarea')
    expect($textarea.classes()).toContain('form-control-sm')

    wrapper.unmount()
  })

  it('does not have class form-control-plaintext when plaintext not set', async () => {
    const wrapper = mount(BFormTextarea)

    const $textarea = wrapper.find('textarea')
    expect($textarea.classes()).not.toContain('form-control-plaintext')
    expect($textarea.attributes('readonly')).toBeUndefined()

    wrapper.unmount()
  })

  it('has class form-control-plaintext when plaintext=true', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        plaintext: true,
      },
    })

    const $textarea = wrapper.find('textarea')
    expect($textarea.classes()).toContain('form-control-plaintext')

    wrapper.unmount()
  })

  it('has attribute read-only when plaintext=true', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        plaintext: true,
      },
    })

    const $textarea = wrapper.find('textarea')
    expect($textarea.classes()).toContain('form-control-plaintext')
    expect($textarea.attributes('readonly')).toBeDefined()

    wrapper.unmount()
  })

  it('has user supplied id', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        id: 'foobar',
      },
    })

    const $textarea = wrapper.find('textarea')
    expect($textarea.attributes('id')).toBe('foobar')

    wrapper.unmount()
  })

  it('has safeId after mount when no id provided', async () => {
    const wrapper = mount(BFormTextarea, {
      attachTo: createContainer(),
    })

    // We need to wait a tick for `safeId` to be generated
    await waitNT(wrapper.vm)

    const $textarea = wrapper.find('textarea')
    expect($textarea.attributes('id')).toBeDefined()

    wrapper.unmount()
  })

  it('has form attribute when form prop set', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        form: 'foobar',
      },
    })

    const $textarea = wrapper.find('textarea')
    expect($textarea.attributes('form')).toBe('foobar')

    wrapper.unmount()
  })

  it('does not have is-valid or is-invalid classes when state is default', async () => {
    const wrapper = mount(BFormTextarea)

    const $textarea = wrapper.find('textarea')
    expect($textarea.classes()).not.toContain('is-valid')
    expect($textarea.classes()).not.toContain('is-invalid')

    wrapper.unmount()
  })

  it('has class is-valid when state=true', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        state: true,
      },
    })

    const $textarea = wrapper.find('textarea')
    expect($textarea.classes()).toContain('is-valid')
    expect($textarea.classes()).not.toContain('is-invalid')

    wrapper.unmount()
  })

  it('has class is-invalid when state=false', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        state: false,
      },
    })

    const $textarea = wrapper.find('textarea')
    expect($textarea.classes()).toContain('is-invalid')
    expect($textarea.classes()).not.toContain('is-valid')

    wrapper.unmount()
  })

  it('does not have aria-invalid attribute by default', async () => {
    const wrapper = mount(BFormTextarea)

    expect(wrapper.attributes('aria-invalid')).toBeUndefined()

    wrapper.unmount()
  })

  it('does not have aria-invalid attribute when state is true', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        state: true,
      },
    })

    expect(wrapper.attributes('aria-invalid')).toBeUndefined()

    wrapper.unmount()
  })

  it('has aria-invalid attribute when state=false', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        state: false,
      },
    })

    const $textarea = wrapper.find('textarea')
    expect($textarea.attributes('aria-invalid')).toBe('true')

    wrapper.unmount()
  })

  it('has aria-invalid attribute when aria-invalid="true"', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        ariaInvalid: 'true',
      },
    })

    const $textarea = wrapper.find('textarea')
    expect($textarea.attributes('aria-invalid')).toBe('true')

    wrapper.unmount()
  })

  it('has aria-invalid attribute when aria-invalid=true', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        ariaInvalid: true,
      },
    })

    const $textarea = wrapper.find('textarea')
    expect($textarea.attributes('aria-invalid')).toBe('true')

    wrapper.unmount()
  })

  it('has aria-invalid attribute when aria-invalid="spelling"', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        ariaInvalid: 'spelling',
      },
    })

    const $textarea = wrapper.find('textarea')
    expect($textarea.attributes('aria-invalid')).toBe('spelling')

    wrapper.unmount()
  })

  it('has user supplied rows', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        rows: 8,
      },
    })

    const $textarea = wrapper.find('textarea')
    expect($textarea.attributes('rows')).toBeDefined()
    expect($textarea.element.rows).toBe(8)

    wrapper.unmount()
  })

  it('is disabled when disabled=true', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        disabled: true,
      },
    })

    const $textarea = wrapper.find('textarea')
    expect($textarea.attributes('disabled')).toBeDefined()
    expect($textarea.element.disabled).toBe(true)

    wrapper.unmount()
  })

  it('is not disabled when disabled=false', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        disabled: false,
      },
    })

    const $textarea = wrapper.find('textarea')
    expect($textarea.attributes('disabled')).toBeUndefined()
    expect($textarea.element.disabled).toBe(false)

    wrapper.unmount()
  })

  it('emits an input event', async () => {
    const wrapper = mount(BFormTextarea)

    const $textarea = wrapper.find('textarea')
    $textarea.element.value = 'test'
    await $textarea.trigger('input')

    expect(wrapper.emitted('input')).toBeDefined()
    expect(wrapper.emitted('input')[0].length).toEqual(1)
    expect(wrapper.emitted('input')[0][0]).toEqual('test')

    wrapper.unmount()
  })

  it('emits a native focus event', async () => {
    const spy = jest.fn()
    const wrapper = mount(BFormTextarea, {
      attrs: {
        onFocus: spy,
      },
    })

    const $textarea = wrapper.find('textarea')
    await $textarea.trigger('focus')

    expect(wrapper.emitted()).toMatchObject({})
    expect(spy).toHaveBeenCalled()

    wrapper.unmount()
  })

  it('emits a blur event with native event as only arg', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        modelValue: 'TEST',
      },
    })

    const $textarea = wrapper.find('textarea')
    await $textarea.trigger('blur')

    expect(wrapper.emitted('blur')).toBeDefined()
    expect(wrapper.emitted('blur')[0].length).toEqual(1)
    expect(wrapper.emitted('blur')[0][0] instanceof Event).toBe(true)
    expect(wrapper.emitted('blur')[0][0].type).toEqual('blur')

    wrapper.unmount()
  })

  it('applies formatter on textarea when not lazy', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        formatter(value) {
          return value.toLowerCase()
        },
      },
      attachTo: createContainer(),
    })

    const $textarea = wrapper.find('textarea')
    $textarea.element.value = 'TEST'
    await $textarea.trigger('input')

    expect(wrapper.emitted('update:modelValue')).toBeDefined()
    expect(wrapper.emitted('update:modelValue').length).toEqual(1)
    expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('test')

    expect(wrapper.emitted('input')).toBeDefined()
    expect(wrapper.emitted('input').length).toEqual(1)
    expect(wrapper.emitted('input')[0][0]).toEqual('test')

    wrapper.unmount()
  })

  it('does not apply formatter on textarea when lazy', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        'formatter'(value) {
          return value.toLowerCase()
        },
        'lazyFormatter': true,
        'onUpdate:modelValue': async (modelValue) => wrapper.setProps({modelValue}),
      },
      attachTo: createContainer(),
    })

    const $textarea = wrapper.find('textarea')
    $textarea.element.value = 'TEST'
    await $textarea.trigger('input')

    expect(wrapper.vm.modelValue).toEqual('TEST')
    expect(wrapper.emitted('update:modelValue')).toBeDefined()
    expect(wrapper.emitted('update:modelValue').length).toEqual(1)
    expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('TEST')
    expect(wrapper.emitted('input')).toBeDefined()
    expect(wrapper.emitted('input').length).toEqual(1)
    expect(wrapper.emitted('input')[0][0]).toEqual('TEST')
    expect(wrapper.emitted('change')).toBeUndefined()

    wrapper.unmount()
  })

  it('applies formatter on blur when lazy', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        'modelValue': '',
        'formatter'(value) {
          return value.toLowerCase()
        },
        'lazyFormatter': true,
        'onUpdate:modelValue': async (modelValue) => wrapper.setProps({modelValue}),
      },
      attachTo: createContainer(),
    })

    const $textarea = wrapper.find('textarea')

    // Input event needed to set initial value
    $textarea.element.value = 'TEST'
    await $textarea.trigger('input')

    expect(wrapper.vm.modelValue).toEqual('TEST')
    expect(wrapper.emitted('update:modelValue')).toBeDefined()
    expect(wrapper.emitted('update:modelValue').length).toEqual(1)
    expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('TEST')

    await $textarea.trigger('blur')

    expect(wrapper.vm.modelValue).toEqual('test')
    expect(wrapper.emitted('update:modelValue')).toBeDefined()
    expect(wrapper.emitted('update:modelValue').length).toEqual(2)
    expect(wrapper.emitted('update:modelValue')[1][0]).toEqual('test')
    expect(wrapper.emitted('input')).toBeDefined()
    expect(wrapper.emitted('change')).toBeUndefined()
    expect(wrapper.emitted('blur')).toBeDefined()
    expect(wrapper.emitted('blur').length).toEqual(1)

    wrapper.unmount()
  })

  it('does not apply formatter when value supplied on mount and not lazy', async () => {
    const wrapper = mount(BFormTextarea, {
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

    wrapper.unmount()
  })

  it('does not apply formatter when value prop updated and not lazy', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        modelValue: '',
        formatter(value) {
          return value.toLowerCase()
        },
      },
      attachTo: createContainer(),
    })

    const $textarea = wrapper.find('textarea')
    await wrapper.setProps({modelValue: 'TEST'})

    expect($textarea.element.value).toEqual('TEST')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined() // Note emitted as value hasn't changed
    expect(wrapper.emitted('input')).toBeUndefined()
    expect(wrapper.emitted('change')).toBeUndefined()
    expect(wrapper.emitted('blur')).toBeUndefined()

    wrapper.unmount()
  })

  it('does not apply formatter when value prop updated and lazy', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        modelValue: '',
        formatter(value) {
          return value.toLowerCase()
        },
        lazyFormatter: true,
      },
      attachTo: createContainer(),
    })

    const $textarea = wrapper.find('textarea')
    await wrapper.setProps({modelValue: 'TEST'})

    expect($textarea.element.value).toEqual('TEST')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined() // Not emitted when value doesnt change
    expect(wrapper.emitted('input')).toBeUndefined()
    expect(wrapper.emitted('change')).toBeUndefined()
    expect(wrapper.emitted('blur')).toBeUndefined()

    wrapper.unmount()
  })

  it('does not update value when non-lazy formatter returns false', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        'modelValue': 'abc',
        'formatter'() {
          return false
        },
        'onUpdate:modelValue': async (modelValue) => wrapper.setProps({modelValue}),
      },
      attachTo: createContainer(),
    })

    const $textarea = wrapper.find('textarea')
    expect($textarea.exists()).toBe(true)

    await $textarea.trigger('focus')
    await $textarea.setValue('TEST')

    expect(wrapper.emitted('input')).toBeUndefined()
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    // v-model should not change
    expect(wrapper.vm.modelValue).toBe('abc')
    // Value in input should remain the same as entered
    expect($textarea.element.value).toEqual('TEST')

    wrapper.unmount()
  })

  /* TODO: implement noWheel
  it('focused number input with no-wheel set to true works', async () => {
    const spy = jest.fn()
    const wrapper = mount(BFormTextarea, {
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

    wrapper.unmount()
  })


  it('focused number input with no-wheel set to false works', async () => {
    const spy = jest.fn(() => {})
    const wrapper = mount(BFormTextarea, {
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

    wrapper.unmount()
  })


  it('changing no-wheel after mount works', async () => {
    const spy = jest.fn(() => {})
    const wrapper = mount(BFormTextarea, {
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

    wrapper.unmount()
  })
  */

  it('"lazy" modifier prop works', async () => {
    const wrapper = mount(BFormTextarea, {
      props: {
        'type': 'text',
        'lazy': true,
        'onUpdate:modelValue': async (modelValue) => wrapper.setProps({modelValue}),
      },
    })

    const $textarea = wrapper.find('textarea')
    $textarea.element.value = 'a'
    await $textarea.trigger('input')
    expect($textarea.element.value).toBe('a')
    // `v-model` update event should not have emitted
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()

    $textarea.element.value = 'ab'
    await $textarea.trigger('input')
    expect($textarea.element.value).toBe('ab')
    // `v-model` update event should not have emitted
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()

    // trigger a change event
    await $textarea.trigger('change')
    expect($textarea.element.value).toBe('ab')
    // `v-model` update event should have emitted
    expect(wrapper.emitted('update:modelValue')).toBeDefined()
    expect(wrapper.emitted('update:modelValue').length).toEqual(1)
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe('ab')

    $textarea.element.value = 'abc'
    await $textarea.trigger('input')
    expect($textarea.element.value).toBe('abc')
    // `v-model` update event should not have emitted new event
    expect(wrapper.emitted('update:modelValue').length).toEqual(1)

    $textarea.element.value = 'abcd'
    await $textarea.trigger('input')
    expect($textarea.element.value).toBe('abcd')
    // `v-model` update event should not have emitted new event
    expect(wrapper.emitted('update:modelValue').length).toEqual(1)

    // Trigger a blur event
    await $textarea.trigger('blur')
    expect($textarea.element.value).toBe('abcd')
    // `v-model` update event should have emitted
    expect(wrapper.emitted('update:modelValue').length).toEqual(2)
    expect(wrapper.emitted('update:modelValue')[1][0]).toBe('abcd')

    wrapper.unmount()
  })

  /* TODO: implement debounce
  it('"debounce" prop works', async () => {
    jest.useFakeTimers()
    const wrapper = mount(BFormTextarea, {
      props: {
        type: 'text',
        modelValue: '',
        debounce: 100
      }
    })

    const $textarea = wrapper.find('textarea')
    $textarea.element.value = 'a'
    await $textarea.trigger('input')
    expect($textarea.element.value).toBe('a')
    // `v-model` update event should not have emitted
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    // `input` event should be emitted
    expect(wrapper.emitted('input')).toBeDefined()
    expect(wrapper.emitted('input').length).toBe(1)
    expect(wrapper.emitted('input')[0][0]).toBe('a')

    $textarea.element.value = 'ab'
    await $textarea.trigger('input')
    expect($textarea.element.value).toBe('ab')
    // `v-model` update event should not have emitted
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    // `input` event should be emitted
    expect(wrapper.emitted('input').length).toBe(2)
    expect(wrapper.emitted('input')[1][0]).toBe('ab')

    // Advance timer
    jest.runOnlyPendingTimers()
    // Should update the v-model
    expect($textarea.element.value).toBe('ab')
    // `v-model` update event should have emitted
    expect(wrapper.emitted('update:modelValue')).toBeDefined()
    expect(wrapper.emitted('update:modelValue').length).toBe(1)
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe('ab')
    // `input` event should not have emitted new event
    expect(wrapper.emitted('input').length).toBe(2)

    // Update input
    $textarea.element.value = 'abc'
    await $textarea.trigger('input')
    expect($textarea.element.value).toBe('abc')
    // `v-model` update event should not have emitted new event
    expect(wrapper.emitted('update:modelValue').length).toBe(1)
    // `input` event should be emitted
    expect(wrapper.emitted('input').length).toBe(3)
    expect(wrapper.emitted('input')[2][0]).toBe('abc')

    // Update input
    $textarea.element.value = 'abcd'
    await $textarea.trigger('input')
    expect($textarea.element.value).toBe('abcd')
    // `v-model` update event should not have emitted new event
    expect(wrapper.emitted('update:modelValue').length).toEqual(1)
    // `input` event should be emitted
    expect(wrapper.emitted('input').length).toBe(4)
    expect(wrapper.emitted('input')[3][0]).toBe('abcd')

    // Trigger a `change` event
    await $textarea.trigger('change')
    expect($textarea.element.value).toBe('abcd')
    // `v-model` update event should have emitted (change overrides debounce)
    expect(wrapper.emitted('update:modelValue').length).toEqual(2)
    expect(wrapper.emitted('update:modelValue')[1][0]).toBe('abcd')
    // `input` event should not have emitted new event
    expect(wrapper.emitted('input').length).toBe(4)

    $textarea.element.value = 'abc'
    await $textarea.trigger('input')
    expect($textarea.element.value).toBe('abc')
    // `v-model` update event should not have emitted new event
    expect(wrapper.emitted('update:modelValue').length).toBe(2)
    // `input` event should be emitted
    expect(wrapper.emitted('input').length).toBe(5)
    expect(wrapper.emitted('input')[4][0]).toBe('abc')

    $textarea.element.value = 'abcd'
    await $textarea.trigger('input')
    expect($textarea.element.value).toBe('abcd')
    // `v-model` update event should not have emitted new event
    expect(wrapper.emitted('update:modelValue').length).toBe(2)
    // `input` event should be emitted
    expect(wrapper.emitted('input').length).toBe(6)
    expect(wrapper.emitted('input')[5][0]).toBe('abcd')

    // Advance timer
    jest.runOnlyPendingTimers()
    // Should update the v-model
    expect($textarea.element.value).toBe('abcd')
    // `v-model` update event should not have emitted new event
    expect(wrapper.emitted('update:modelValue').length).toBe(2)
    // `input` event should not have emitted new event
    expect(wrapper.emitted('input').length).toBe(6)

    wrapper.unmount()
  })
  */

  it('focus() and blur() methods work', async () => {
    const wrapper = mount(BFormTextarea, {
      attachTo: createContainer(),
    })

    const $textarea = wrapper.find('textarea')

    expect(typeof wrapper.vm.focus).toBe('function')
    expect(typeof wrapper.vm.blur).toBe('function')

    expect(document.activeElement).not.toBe($textarea.element)
    wrapper.vm.focus()
    expect(document.activeElement).toBe($textarea.element)
    wrapper.vm.blur()
    expect(document.activeElement).not.toBe($textarea.element)

    wrapper.unmount()
  })

  // These tests are wrapped in a new describe to limit the scope of the getBCR Mock
  describe('prop `autofocus`', () => {
    const origGetBCR = Element.prototype.getBoundingClientRect

    beforeEach(() => {
      // Mock `getBoundingClientRect()` so that the `isVisible(el)` test returns `true`
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
      const wrapper = mount(BFormTextarea, {
        attachTo: createContainer(),
        props: {
          autofocus: true,
        },
      })

      expect(wrapper.vm).toBeDefined()
      await waitNT(wrapper.vm)
      await waitRAF()

      const $textarea = wrapper.find('textarea')
      expect($textarea.exists()).toBe(true)
      expect(document).toBeDefined()
      expect(document.activeElement).toBe($textarea.element)

      wrapper.unmount()
    })

    it('does not autofocus when false', async () => {
      const wrapper = mount(BFormTextarea, {
        attachTo: createContainer(),
        props: {
          autofocus: false,
        },
      })

      expect(wrapper.vm).toBeDefined()
      await waitNT(wrapper.vm)
      await waitRAF()

      const $textarea = wrapper.find('textarea')
      expect($textarea.exists()).toBe(true)
      expect(document).toBeDefined()
      expect(document.activeElement).not.toBe($textarea.element)

      wrapper.unmount()
    })
  })
})
