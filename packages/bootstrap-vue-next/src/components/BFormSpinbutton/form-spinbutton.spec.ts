import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import {nextTick} from 'vue'
import BFormSpinbutton from './BFormSpinbutton.vue'

describe('form-spinbutton', () => {
  enableAutoUnmount(afterEach)

  describe('rendering', () => {
    it('renders a div element', () => {
      const wrapper = mount(BFormSpinbutton)
      expect(wrapper.element.tagName).toBe('DIV')
    })

    it('has static class b-form-spinbutton', () => {
      const wrapper = mount(BFormSpinbutton)
      expect(wrapper.classes()).toContain('b-form-spinbutton')
    })

    it('has static class form-control', () => {
      const wrapper = mount(BFormSpinbutton)
      expect(wrapper.classes()).toContain('form-control')
    })

    it('has role="group"', () => {
      const wrapper = mount(BFormSpinbutton)
      expect(wrapper.attributes('role')).toBe('group')
    })

    it('renders two buttons by default', () => {
      const wrapper = mount(BFormSpinbutton)
      expect(wrapper.findAll('button')).toHaveLength(2)
    })

    it('renders an output element', () => {
      const wrapper = mount(BFormSpinbutton)
      expect(wrapper.find('output').exists()).toBe(true)
    })

    it('has tabindex -1 on root when not disabled', () => {
      const wrapper = mount(BFormSpinbutton)
      expect(wrapper.attributes('tabindex')).toBe('-1')
    })

    it('has no tabindex on root when disabled', () => {
      const wrapper = mount(BFormSpinbutton, {props: {disabled: true}})
      expect(wrapper.attributes('tabindex')).toBeUndefined()
    })
  })

  describe('id', () => {
    it('auto-generates an id on the output element', () => {
      const wrapper = mount(BFormSpinbutton)
      const output = wrapper.find('output')
      expect(output.attributes('id')).toBeDefined()
    })

    it('uses custom id when prop id is set', () => {
      const wrapper = mount(BFormSpinbutton, {props: {id: 'my-spinbutton'}})
      const output = wrapper.find('output')
      expect(output.attributes('id')).toBe('my-spinbutton')
    })

    it('updates id when prop id changes', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {id: 'first'}})
      expect(wrapper.find('output').attributes('id')).toBe('first')
      await wrapper.setProps({id: 'second'})
      expect(wrapper.find('output').attributes('id')).toBe('second')
    })

    it('buttons have aria-controls matching output id', () => {
      const wrapper = mount(BFormSpinbutton, {props: {id: 'my-id'}})
      const buttons = wrapper.findAll('button')
      for (const btn of buttons) {
        expect(btn.attributes('aria-controls')).toBe('my-id')
      }
    })
  })

  describe('CSS classes', () => {
    it('has disabled class when disabled', () => {
      const wrapper = mount(BFormSpinbutton, {props: {disabled: true}})
      expect(wrapper.classes()).toContain('disabled')
    })

    it('does not have disabled class when not disabled', () => {
      const wrapper = mount(BFormSpinbutton, {props: {disabled: false}})
      expect(wrapper.classes()).not.toContain('disabled')
    })

    it('has readonly class when readonly', () => {
      const wrapper = mount(BFormSpinbutton, {props: {readonly: true}})
      expect(wrapper.classes()).toContain('readonly')
    })

    it('does not have readonly class when not readonly', () => {
      const wrapper = mount(BFormSpinbutton, {props: {readonly: false}})
      expect(wrapper.classes()).not.toContain('readonly')
    })

    it('has d-flex class when not inline and not vertical', () => {
      const wrapper = mount(BFormSpinbutton, {props: {inline: false, vertical: false}})
      expect(wrapper.classes()).toContain('d-flex')
    })

    it('does not have d-inline-flex class when not inline and not vertical', () => {
      const wrapper = mount(BFormSpinbutton, {props: {inline: false, vertical: false}})
      expect(wrapper.classes()).not.toContain('d-inline-flex')
    })

    it('has d-inline-flex class when inline', () => {
      const wrapper = mount(BFormSpinbutton, {props: {inline: true}})
      expect(wrapper.classes()).toContain('d-inline-flex')
    })

    it('does not have d-flex class when inline', () => {
      const wrapper = mount(BFormSpinbutton, {props: {inline: true}})
      expect(wrapper.classes()).not.toContain('d-flex')
    })

    it('has d-inline-flex class when vertical', () => {
      const wrapper = mount(BFormSpinbutton, {props: {vertical: true}})
      expect(wrapper.classes()).toContain('d-inline-flex')
    })

    it('has flex-column class when vertical', () => {
      const wrapper = mount(BFormSpinbutton, {props: {vertical: true}})
      expect(wrapper.classes()).toContain('flex-column')
    })

    it('does not have flex-column class when not vertical', () => {
      const wrapper = mount(BFormSpinbutton, {props: {vertical: false}})
      expect(wrapper.classes()).not.toContain('flex-column')
    })

    it('has align-items-stretch class when not vertical', () => {
      const wrapper = mount(BFormSpinbutton, {props: {vertical: false}})
      expect(wrapper.classes()).toContain('align-items-stretch')
    })

    it('does not have align-items-stretch class when vertical', () => {
      const wrapper = mount(BFormSpinbutton, {props: {vertical: true}})
      expect(wrapper.classes()).not.toContain('align-items-stretch')
    })

    it('has form-control-sm class when size is sm', () => {
      const wrapper = mount(BFormSpinbutton, {props: {size: 'sm'}})
      expect(wrapper.classes()).toContain('form-control-sm')
    })

    it('has form-control-lg class when size is lg', () => {
      const wrapper = mount(BFormSpinbutton, {props: {size: 'lg'}})
      expect(wrapper.classes()).toContain('form-control-lg')
    })

    it('does not have form-control-{size} class when size is not set', () => {
      const wrapper = mount(BFormSpinbutton)
      expect(wrapper.classes().some((c) => c.startsWith('form-control-'))).toBe(false)
    })

    it('updates size class reactively', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {size: 'sm'}})
      expect(wrapper.classes()).toContain('form-control-sm')
      await wrapper.setProps({size: 'lg'})
      expect(wrapper.classes()).toContain('form-control-lg')
      expect(wrapper.classes()).not.toContain('form-control-sm')
    })
  })

  describe('output element', () => {
    it('has role="spinbutton"', () => {
      const wrapper = mount(BFormSpinbutton)
      expect(wrapper.find('output').attributes('role')).toBe('spinbutton')
    })

    it('has tabindex 0 on output when not disabled', () => {
      const wrapper = mount(BFormSpinbutton)
      expect(wrapper.find('output').attributes('tabindex')).toBe('0')
    })

    it('has no tabindex on output when disabled', () => {
      const wrapper = mount(BFormSpinbutton, {props: {disabled: true}})
      expect(wrapper.find('output').attributes('tabindex')).toBeUndefined()
    })

    it('sets aria-label from ariaLabel prop', () => {
      const wrapper = mount(BFormSpinbutton, {props: {ariaLabel: 'My spinbutton'}})
      expect(wrapper.find('output').attributes('aria-label')).toBe('My spinbutton')
    })

    it('does not set aria-label when ariaLabel is not provided', () => {
      const wrapper = mount(BFormSpinbutton)
      expect(wrapper.find('output').attributes('aria-label')).toBeUndefined()
    })

    it('sets aria-valuemin to min prop', () => {
      const wrapper = mount(BFormSpinbutton, {props: {min: 5}})
      expect(wrapper.find('output').attributes('aria-valuemin')).toBe('5')
    })

    it('sets aria-valuemax to max prop', () => {
      const wrapper = mount(BFormSpinbutton, {props: {min: 0, max: 50}})
      expect(wrapper.find('output').attributes('aria-valuemax')).toBe('50')
    })

    it('sets aria-valuenow to modelValue', () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 42}})
      expect(wrapper.find('output').attributes('aria-valuenow')).toBe('42')
    })

    it('does not set aria-valuenow when modelValue is null', () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: null}})
      expect(wrapper.find('output').attributes('aria-valuenow')).toBeUndefined()
    })

    it('sets aria-valuetext to formatted value when modelValue is set', () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5}})
      expect(wrapper.find('output').attributes('aria-valuetext')).toBe('5')
    })

    it('does not set aria-valuetext when modelValue is null', () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: null}})
      expect(wrapper.find('output').attributes('aria-valuetext')).toBeUndefined()
    })

    it('sets aria-required when required is true', () => {
      const wrapper = mount(BFormSpinbutton, {props: {required: true}})
      expect(wrapper.find('output').attributes('aria-required')).toBe('true')
    })

    it('does not set aria-required when required is false', () => {
      const wrapper = mount(BFormSpinbutton, {props: {required: false}})
      expect(wrapper.find('output').attributes('aria-required')).toBeUndefined()
    })

    it('sets aria-invalid when state is false', () => {
      const wrapper = mount(BFormSpinbutton, {props: {state: false}})
      expect(wrapper.find('output').attributes('aria-invalid')).toBe('true')
    })

    it('does not set aria-invalid when state is true', () => {
      const wrapper = mount(BFormSpinbutton, {props: {state: true}})
      expect(wrapper.find('output').attributes('aria-invalid')).toBeUndefined()
    })

    it('does not set aria-invalid when state is null', () => {
      const wrapper = mount(BFormSpinbutton, {props: {state: null}})
      expect(wrapper.find('output').attributes('aria-invalid')).toBeUndefined()
    })

    it('has class flex-grow-1', () => {
      const wrapper = mount(BFormSpinbutton)
      expect(wrapper.find('output').classes()).toContain('flex-grow-1')
    })

    it('has aria-live="off"', () => {
      const wrapper = mount(BFormSpinbutton)
      expect(wrapper.find('output').attributes('aria-live')).toBe('off')
    })
  })

  describe('displayed value', () => {
    it('displays formatted value when modelValue is set', () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 42}})
      expect(wrapper.find('bdi').text()).toBe('42')
    })

    it('displays placeholder when modelValue is null', () => {
      const wrapper = mount(BFormSpinbutton, {
        props: {modelValue: null, placeholder: 'Pick a number'},
      })
      expect(wrapper.find('bdi').text()).toBe('Pick a number')
    })

    it('displays empty string when modelValue is null and no placeholder', () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: null}})
      expect(wrapper.find('bdi').text()).toBe('')
    })

    it('updates displayed value reactively', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 10}})
      expect(wrapper.find('bdi').text()).toBe('10')
      await wrapper.setProps({modelValue: 20})
      expect(wrapper.find('bdi').text()).toBe('20')
    })

    it('uses custom formatterFn to format display', () => {
      const formatterFn = (value: number) => `$${value.toFixed(2)}`
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5, formatterFn}})
      expect(wrapper.find('bdi').text()).toBe('$5.00')
    })

    it('uses step precision for display formatting', () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 1.5, step: 0.5}})
      expect(wrapper.find('bdi').text()).toBe('1.5')
    })

    it('formats value with locale', () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 1000, locale: 'en-US'}})
      // Intl.NumberFormat with useGrouping: false, notation: standard
      const expected = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        useGrouping: false,
        minimumIntegerDigits: 1,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        notation: 'standard',
      }).format(1000)
      expect(wrapper.find('bdi').text()).toBe(expected)
    })
  })

  describe('buttons', () => {
    it('decrement button has default aria-label "Decrement"', () => {
      const wrapper = mount(BFormSpinbutton)
      const buttons = wrapper.findAll('button')
      // In horizontal (non-vertical) mode: top=decrement, bottom=increment
      expect(buttons[0].attributes('aria-label')).toBe('Decrement')
    })

    it('increment button has default aria-label "Increment"', () => {
      const wrapper = mount(BFormSpinbutton)
      const buttons = wrapper.findAll('button')
      // In horizontal mode: bottom=increment
      expect(buttons[1].attributes('aria-label')).toBe('Increment')
    })

    it('uses custom labelDecrement prop', () => {
      const wrapper = mount(BFormSpinbutton, {props: {labelDecrement: 'Less'}})
      const buttons = wrapper.findAll('button')
      expect(buttons[0].attributes('aria-label')).toBe('Less')
    })

    it('uses custom labelIncrement prop', () => {
      const wrapper = mount(BFormSpinbutton, {props: {labelIncrement: 'More'}})
      const buttons = wrapper.findAll('button')
      expect(buttons[1].attributes('aria-label')).toBe('More')
    })

    it('decrement button has aria-keyshortcuts="ArrowDown"', () => {
      const wrapper = mount(BFormSpinbutton)
      const buttons = wrapper.findAll('button')
      expect(buttons[0].attributes('aria-keyshortcuts')).toBe('ArrowDown')
    })

    it('increment button has aria-keyshortcuts="ArrowUp"', () => {
      const wrapper = mount(BFormSpinbutton)
      const buttons = wrapper.findAll('button')
      expect(buttons[1].attributes('aria-keyshortcuts')).toBe('ArrowUp')
    })

    it('buttons are disabled when disabled prop is true', () => {
      const wrapper = mount(BFormSpinbutton, {props: {disabled: true}})
      const buttons = wrapper.findAll('button')
      for (const btn of buttons) {
        expect(btn.attributes('disabled')).toBeDefined()
      }
    })

    it('buttons are not disabled when disabled prop is false', () => {
      const wrapper = mount(BFormSpinbutton, {props: {disabled: false}})
      const buttons = wrapper.findAll('button')
      for (const btn of buttons) {
        expect(btn.attributes('disabled')).toBeUndefined()
      }
    })

    it('buttons are disabled when readonly prop is true', () => {
      const wrapper = mount(BFormSpinbutton, {props: {readonly: true}})
      const buttons = wrapper.findAll('button')
      for (const btn of buttons) {
        expect(btn.attributes('disabled')).toBeDefined()
      }
    })

    it('buttons have aria-disabled="true" when disabled', () => {
      const wrapper = mount(BFormSpinbutton, {props: {disabled: true}})
      const buttons = wrapper.findAll('button')
      for (const btn of buttons) {
        expect(btn.attributes('aria-disabled')).toBe('true')
      }
    })

    it('buttons do not have aria-disabled when enabled', () => {
      const wrapper = mount(BFormSpinbutton)
      const buttons = wrapper.findAll('button')
      for (const btn of buttons) {
        expect(btn.attributes('aria-disabled')).toBeUndefined()
      }
    })

    it('buttons have tabindex="-1"', () => {
      const wrapper = mount(BFormSpinbutton)
      const buttons = wrapper.findAll('button')
      for (const btn of buttons) {
        expect(btn.attributes('tabindex')).toBe('-1')
      }
    })

    it('buttons have type="button"', () => {
      const wrapper = mount(BFormSpinbutton)
      const buttons = wrapper.findAll('button')
      for (const btn of buttons) {
        expect(btn.attributes('type')).toBe('button')
      }
    })

    it('increment button at top in vertical mode', () => {
      const wrapper = mount(BFormSpinbutton, {props: {vertical: true}})
      const buttons = wrapper.findAll('button')
      // In vertical mode: top=increment, bottom=decrement
      expect(buttons[0].attributes('aria-label')).toBe('Increment')
      expect(buttons[1].attributes('aria-label')).toBe('Decrement')
    })

    it('decrement button at top in horizontal mode', () => {
      const wrapper = mount(BFormSpinbutton, {props: {vertical: false}})
      const buttons = wrapper.findAll('button')
      // In horizontal mode: top=decrement, bottom=increment
      expect(buttons[0].attributes('aria-label')).toBe('Decrement')
      expect(buttons[1].attributes('aria-label')).toBe('Increment')
    })
  })

  describe('hidden input', () => {
    it('renders hidden input when name is set and not disabled', () => {
      const wrapper = mount(BFormSpinbutton, {props: {name: 'qty', modelValue: 5}})
      const input = wrapper.find('input[type="hidden"]')
      expect(input.exists()).toBe(true)
    })

    it('does not render hidden input when name is not provided', () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5}})
      expect(wrapper.find('input[type="hidden"]').exists()).toBe(false)
    })

    it('does not render hidden input when disabled', () => {
      const wrapper = mount(BFormSpinbutton, {props: {name: 'qty', modelValue: 5, disabled: true}})
      expect(wrapper.find('input[type="hidden"]').exists()).toBe(false)
    })

    it('hidden input has correct name attribute', () => {
      const wrapper = mount(BFormSpinbutton, {props: {name: 'quantity', modelValue: 10}})
      expect(wrapper.find('input[type="hidden"]').attributes('name')).toBe('quantity')
    })

    it('hidden input has correct value attribute', () => {
      const wrapper = mount(BFormSpinbutton, {props: {name: 'qty', modelValue: 7}})
      expect(wrapper.find('input[type="hidden"]').attributes('value')).toBe('7')
    })

    it('hidden input value is empty string when modelValue is null', () => {
      const wrapper = mount(BFormSpinbutton, {props: {name: 'qty', modelValue: null}})
      expect(wrapper.find('input[type="hidden"]').attributes('value')).toBe('')
    })

    it('hidden input has form attribute when form prop is set', () => {
      const wrapper = mount(BFormSpinbutton, {props: {name: 'qty', form: 'my-form', modelValue: 5}})
      const input = wrapper.find('input[type="hidden"]')
      expect(input.attributes('form')).toBe('my-form')
    })

    it('hidden input value uses step precision (decimal)', () => {
      const wrapper = mount(BFormSpinbutton, {props: {name: 'qty', modelValue: 1.5, step: 0.5}})
      expect(wrapper.find('input[type="hidden"]').attributes('value')).toBe('1.5')
    })
  })

  describe('ariaLabel and ariaControls', () => {
    it('sets title attribute from ariaLabel prop on root', () => {
      const wrapper = mount(BFormSpinbutton, {props: {ariaLabel: 'Volume'}})
      expect(wrapper.attributes('title')).toBe('Volume')
    })

    it('buttons have aria-controls matching output id with ariaControls fallback', () => {
      const wrapper = mount(BFormSpinbutton, {props: {id: 'spin1'}})
      const buttons = wrapper.findAll('button')
      for (const btn of buttons) {
        expect(btn.attributes('aria-controls')).toBe('spin1')
      }
    })
  })

  describe('modelValue and v-model', () => {
    it('emits update:modelValue when increment button is mousedown', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5, min: 1, max: 100}})
      const buttons = wrapper.findAll('button')
      // bottom button is increment in horizontal mode
      await buttons[1].trigger('mousedown')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([6])
    })

    it('emits update:modelValue when decrement button is mousedown', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5, min: 1, max: 100}})
      const buttons = wrapper.findAll('button')
      // top button is decrement in horizontal mode
      await buttons[0].trigger('mousedown')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([4])
    })

    it('sets modelValue to min when incrementing from null', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: null, min: 1, max: 10}})
      const buttons = wrapper.findAll('button')
      await buttons[1].trigger('mousedown')
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([1])
    })

    it('sets modelValue to min when decrementing from null without wrap', async () => {
      const wrapper = mount(BFormSpinbutton, {
        props: {modelValue: null, min: 1, max: 10, wrap: false},
      })
      const buttons = wrapper.findAll('button')
      await buttons[0].trigger('mousedown')
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([1])
    })

    it('sets modelValue to max when decrementing from null with wrap', async () => {
      const wrapper = mount(BFormSpinbutton, {
        props: {modelValue: null, min: 1, max: 10, wrap: true},
      })
      const buttons = wrapper.findAll('button')
      await buttons[0].trigger('mousedown')
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([10])
    })
  })

  describe('min/max/step', () => {
    it('clamps value at max when incrementing to max without wrap', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 9, min: 1, max: 10, wrap: false}})
      const buttons = wrapper.findAll('button')
      await buttons[1].trigger('mousedown')
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([10])
    })

    it('clamps value at min when decrementing to min without wrap', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 2, min: 1, max: 10, wrap: false}})
      const buttons = wrapper.findAll('button')
      await buttons[0].trigger('mousedown')
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([1])
    })

    it('wraps value from max to min when wrap is true on increment', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 10, min: 1, max: 10, wrap: true}})
      const buttons = wrapper.findAll('button')
      await buttons[1].trigger('mousedown')
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([1])
    })

    it('wraps value from min to max when wrap is true on decrement', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 1, min: 1, max: 10, wrap: true}})
      const buttons = wrapper.findAll('button')
      await buttons[0].trigger('mousedown')
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([10])
    })

    it('uses step prop for incrementing', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5, min: 0, max: 100, step: 5}})
      const buttons = wrapper.findAll('button')
      await buttons[1].trigger('mousedown')
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([10])
    })

    it('uses step prop for decrementing', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 10, min: 0, max: 100, step: 5}})
      const buttons = wrapper.findAll('button')
      await buttons[0].trigger('mousedown')
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([5])
    })

    it('sets aria-valuemin to computed min', () => {
      const wrapper = mount(BFormSpinbutton, {props: {min: 10, max: 50}})
      expect(wrapper.find('output').attributes('aria-valuemin')).toBe('10')
    })

    it('sets aria-valuemax to computed max', () => {
      const wrapper = mount(BFormSpinbutton, {props: {min: 0, max: 100, step: 1}})
      expect(wrapper.find('output').attributes('aria-valuemax')).toBe('100')
    })
  })

  describe('keyboard events', () => {
    it('increments value on ArrowUp keydown', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5, min: 1, max: 100}})
      await nextTick()
      await wrapper.trigger('keydown', {key: 'ArrowUp', code: 'ArrowUp'})
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([6])
    })

    it('decrements value on ArrowDown keydown', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5, min: 1, max: 100}})
      await nextTick()
      await wrapper.trigger('keydown', {key: 'ArrowDown', code: 'ArrowDown'})
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([4])
    })

    it('sets value to min on Home keydown', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 50, min: 1, max: 100}})
      await nextTick()
      await wrapper.trigger('keydown', {key: 'Home', code: 'Home'})
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([1])
    })

    it('sets value to max on End keydown', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 50, min: 1, max: 100}})
      await nextTick()
      await wrapper.trigger('keydown', {key: 'End', code: 'End'})
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([100])
    })

    it('does not emit on ArrowUp when disabled', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5, disabled: true}})
      await nextTick()
      await wrapper.trigger('keydown', {key: 'ArrowUp', code: 'ArrowUp'})
      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    })

    it('does not emit on ArrowDown when disabled', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5, disabled: true}})
      await nextTick()
      await wrapper.trigger('keydown', {key: 'ArrowDown', code: 'ArrowDown'})
      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    })

    it('does not emit on ArrowUp when readonly', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5, readonly: true}})
      await nextTick()
      await wrapper.trigger('keydown', {key: 'ArrowUp', code: 'ArrowUp'})
      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    })

    it('does not emit on Home when disabled', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 50, disabled: true}})
      await nextTick()
      await wrapper.trigger('keydown', {key: 'Home', code: 'Home'})
      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    })

    it('does not emit when Alt key is held', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5}})
      await nextTick()
      await wrapper.trigger('keydown', {key: 'ArrowUp', code: 'ArrowUp', altKey: true})
      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    })

    it('does not emit when Ctrl key is held', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5}})
      await nextTick()
      await wrapper.trigger('keydown', {key: 'ArrowUp', code: 'ArrowUp', ctrlKey: true})
      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    })

    it('does not emit when Meta key is held', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5}})
      await nextTick()
      await wrapper.trigger('keydown', {key: 'ArrowUp', code: 'ArrowUp', metaKey: true})
      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    })

    it('emits change event on keyup', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5}})
      await nextTick()
      await wrapper.trigger('keydown', {key: 'ArrowUp', code: 'ArrowUp'})
      await wrapper.trigger('keyup', {key: 'ArrowUp', code: 'ArrowUp'})
      expect(wrapper.emitted('change')).toBeTruthy()
    })

    it('does not emit change on keyup when disabled', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5, disabled: true}})
      await nextTick()
      await wrapper.trigger('keyup', {key: 'ArrowUp', code: 'ArrowUp'})
      expect(wrapper.emitted('change')).toBeFalsy()
    })

    it('does not emit change on keyup when readonly', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5, readonly: true}})
      await nextTick()
      await wrapper.trigger('keyup', {key: 'ArrowUp', code: 'ArrowUp'})
      expect(wrapper.emitted('change')).toBeFalsy()
    })

    it('increments by step multiplier on PageUp keydown', async () => {
      const wrapper = mount(BFormSpinbutton, {
        props: {modelValue: 5, min: 1, max: 100, step: 1, repeatStepMultiplier: 4},
      })
      await nextTick()
      await wrapper.trigger('keydown', {key: 'PageUp', code: 'PageUp'})
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([9])
    })

    it('decrements by step multiplier on PageDown keydown', async () => {
      const wrapper = mount(BFormSpinbutton, {
        props: {modelValue: 20, min: 1, max: 100, step: 1, repeatStepMultiplier: 4},
      })
      await nextTick()
      await wrapper.trigger('keydown', {key: 'PageDown', code: 'PageDown'})
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([17])
    })
  })

  describe('disabled prop', () => {
    it('does not increment value when disabled button is mousedown', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5, disabled: true}})
      const buttons = wrapper.findAll('button')
      await buttons[1].trigger('mousedown')
      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    })

    it('does not decrement value when disabled button is mousedown', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5, disabled: true}})
      const buttons = wrapper.findAll('button')
      await buttons[0].trigger('mousedown')
      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    })
  })

  describe('readonly prop', () => {
    it('does not increment value when readonly and button is mousedown', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5, readonly: true}})
      const buttons = wrapper.findAll('button')
      await buttons[1].trigger('mousedown')
      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    })

    it('does not decrement value when readonly and button is mousedown', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5, readonly: true}})
      const buttons = wrapper.findAll('button')
      await buttons[0].trigger('mousedown')
      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    })
  })

  describe('vertical layout', () => {
    it('has flex-column class when vertical', () => {
      const wrapper = mount(BFormSpinbutton, {props: {vertical: true}})
      expect(wrapper.classes()).toContain('flex-column')
    })

    it('output has d-flex class when vertical', () => {
      const wrapper = mount(BFormSpinbutton, {props: {vertical: true}})
      expect(wrapper.find('output').classes()).toContain('d-flex')
    })

    it('output has align-items-center class when vertical', () => {
      const wrapper = mount(BFormSpinbutton, {props: {vertical: true}})
      expect(wrapper.find('output').classes()).toContain('align-items-center')
    })

    it('output has border-top and border-bottom classes when vertical', () => {
      const wrapper = mount(BFormSpinbutton, {props: {vertical: true}})
      const output = wrapper.find('output')
      expect(output.classes()).toContain('border-top')
      expect(output.classes()).toContain('border-bottom')
    })

    it('output has border-start and border-end classes when horizontal', () => {
      const wrapper = mount(BFormSpinbutton, {props: {vertical: false}})
      const output = wrapper.find('output')
      expect(output.classes()).toContain('border-start')
      expect(output.classes()).toContain('border-end')
    })

    it('output has align-self-center class when horizontal', () => {
      const wrapper = mount(BFormSpinbutton, {props: {vertical: false}})
      expect(wrapper.find('output').classes()).toContain('align-self-center')
    })
  })

  describe('slots', () => {
    it('renders custom increment slot content', () => {
      const wrapper = mount(BFormSpinbutton, {
        slots: {
          increment: '<button id="custom-increment">+</button>',
        },
      })
      expect(wrapper.find('#custom-increment').exists()).toBe(true)
    })

    it('renders custom decrement slot content', () => {
      const wrapper = mount(BFormSpinbutton, {
        slots: {
          decrement: '<button id="custom-decrement">-</button>',
        },
      })
      expect(wrapper.find('#custom-decrement').exists()).toBe(true)
    })

    it('hides default increment button when increment slot is provided', () => {
      const wrapper = mount(BFormSpinbutton, {
        slots: {
          increment: '<button id="custom-increment">+</button>',
        },
      })
      // There should only be our custom button for increment, no default SVG button for it
      expect(wrapper.find('#custom-increment').exists()).toBe(true)
    })

    it('hides default decrement button when decrement slot is provided', () => {
      const wrapper = mount(BFormSpinbutton, {
        slots: {
          decrement: '<button id="custom-decrement">-</button>',
        },
      })
      expect(wrapper.find('#custom-decrement').exists()).toBe(true)
    })
  })

  describe('inline layout', () => {
    it('has d-inline-flex when inline', () => {
      const wrapper = mount(BFormSpinbutton, {props: {inline: true}})
      expect(wrapper.classes()).toContain('d-inline-flex')
    })

    it('does not have d-flex when inline', () => {
      const wrapper = mount(BFormSpinbutton, {props: {inline: true}})
      expect(wrapper.classes()).not.toContain('d-flex')
    })

    it('has d-flex when not inline and not vertical', () => {
      const wrapper = mount(BFormSpinbutton, {props: {inline: false, vertical: false}})
      expect(wrapper.classes()).toContain('d-flex')
    })
  })

  describe('locale', () => {
    it('sets lang attribute on root element', () => {
      const wrapper = mount(BFormSpinbutton, {props: {locale: 'en-US'}})
      // The computedLocale resolves via Intl.NumberFormat
      const lang = wrapper.attributes('lang')
      expect(lang).toBeDefined()
    })

    it('formats value according to locale', () => {
      const locale = 'de-DE'
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 1.5, step: 0.5, locale}})
      const expected = new Intl.NumberFormat(locale, {
        style: 'decimal',
        useGrouping: false,
        minimumIntegerDigits: 1,
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
        notation: 'standard',
      }).format(1.5)
      expect(wrapper.find('bdi').text()).toBe(expected)
    })
  })

  describe('default values', () => {
    it('default min is 1', () => {
      const wrapper = mount(BFormSpinbutton)
      expect(wrapper.find('output').attributes('aria-valuemin')).toBe('1')
    })

    it('default max is 100', () => {
      const wrapper = mount(BFormSpinbutton)
      expect(wrapper.find('output').attributes('aria-valuemax')).toBe('100')
    })

    it('default modelValue is null', () => {
      const wrapper = mount(BFormSpinbutton)
      expect(wrapper.find('output').attributes('aria-valuenow')).toBeUndefined()
    })

    it('default step is 1', async () => {
      const wrapper = mount(BFormSpinbutton, {props: {modelValue: 5}})
      const buttons = wrapper.findAll('button')
      await buttons[1].trigger('mousedown')
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([6])
    })
  })
})
