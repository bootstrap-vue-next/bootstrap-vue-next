import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BFormRadioGroupBase from './BFormRadioGroupBase.vue'
import BFormRadio from './BFormRadio.vue'

describe('form-radio-group-base', () => {
  enableAutoUnmount(afterEach)

  describe('root element', () => {
    it('tag is div', () => {
      const wrapper = mount(BFormRadioGroupBase)
      expect(wrapper.element.tagName).toBe('DIV')
    })

    it('has static attr role to be radiogroup', () => {
      const wrapper = mount(BFormRadioGroupBase)
      expect(wrapper.attributes('role')).toBe('radiogroup')
    })

    it('has static class to contain bv-no-focus-ring', () => {
      const wrapper = mount(BFormRadioGroupBase)
      expect(wrapper.classes()).toContain('bv-no-focus-ring')
    })

    it('has tabindex to be -1', () => {
      const wrapper = mount(BFormRadioGroupBase)
      expect(wrapper.attributes('tabindex')).toBe('-1')
    })

    it('has attr id to be defined', () => {
      const wrapper = mount(BFormRadioGroupBase)
      expect(wrapper.attributes('id')).toBeDefined()
    })

    it('has attr id contains content from prop id', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {id: 'foobar'},
      })
      expect(wrapper.attributes('id')).toBe('foobar')
    })
  })

  describe('validation classes', () => {
    it('has class was-validated when prop validated', async () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {validated: true},
      })
      expect(wrapper.classes()).toContain('was-validated')
      await wrapper.setProps({validated: false})
      expect(wrapper.classes()).not.toContain('was-validated')
      await wrapper.setProps({validated: undefined})
      expect(wrapper.classes()).not.toContain('was-validated')
    })
  })

  describe('button group classes', () => {
    it('has class btn-group when prop buttons', async () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {buttons: true},
      })
      expect(wrapper.classes()).toContain('btn-group')
      await wrapper.setProps({buttons: false})
      expect(wrapper.classes()).not.toContain('btn-group')
      await wrapper.setProps({buttons: undefined})
      expect(wrapper.classes()).not.toContain('btn-group')
    })

    it('does not have class btn-group when prop buttons but also prop stacked is true', async () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {buttons: true, stacked: true},
      })
      expect(wrapper.classes()).not.toContain('btn-group')
      await wrapper.setProps({stacked: false})
      expect(wrapper.classes()).toContain('btn-group')
    })

    it('has class btn-group-vertical when prop buttons and prop stacked', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {buttons: true, stacked: true},
      })
      expect(wrapper.classes()).toContain('btn-group-vertical')
    })

    it('does not have class btn-group-vertical when prop buttons and prop stacked is false', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {buttons: true, stacked: false},
      })
      expect(wrapper.classes()).not.toContain('btn-group-vertical')
    })

    it('has class btn-group-{type} when prop size', async () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {size: 'lg'},
      })
      expect(wrapper.classes()).toContain('btn-group-lg')
      await wrapper.setProps({size: undefined})
      expect(wrapper.classes()).not.toContain('btn-group-lg')
    })
  })

  describe('aria attributes', () => {
    it('has attr aria-required when prop required', async () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {required: true},
      })
      expect(wrapper.attributes('aria-required')).toBe('true')
      await wrapper.setProps({required: false})
      expect(wrapper.attributes('aria-required')).toBeUndefined()
      await wrapper.setProps({required: undefined})
      expect(wrapper.attributes('aria-required')).toBeUndefined()
    })

    it('has attr aria-invalid when prop ariaInvalid', async () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {ariaInvalid: true},
      })
      expect(wrapper.attributes('aria-invalid')).toBe('true')
      await wrapper.setProps({ariaInvalid: 'grammar'})
      expect(wrapper.attributes('aria-invalid')).toBe('grammar')
      await wrapper.setProps({ariaInvalid: 'spelling'})
      expect(wrapper.attributes('aria-invalid')).toBe('spelling')
      await wrapper.setProps({ariaInvalid: false})
      expect(wrapper.attributes('aria-invalid')).toBe('false')
    })

    it('has attr aria-invalid to be true when state is false and ariaInvalid is false', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {ariaInvalid: false, state: false},
      })
      expect(wrapper.attributes('aria-invalid')).toBe('true')
    })

    it('has attr aria-invalid to be true when state is false and ariaInvalid is undefined', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {ariaInvalid: undefined, state: false},
      })
      expect(wrapper.attributes('aria-invalid')).toBe('true')
    })

    it('has attr aria-invalid to be undefined when state is undefined and ariaInvalid is undefined', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {ariaInvalid: undefined, state: undefined},
      })
      expect(wrapper.attributes('aria-invalid')).toBeUndefined()
    })
  })

  describe('no child radios by default', () => {
    it('has no BFormRadio when no options', () => {
      const wrapper = mount(BFormRadioGroupBase)
      const $radio = wrapper.findComponent(BFormRadio)
      expect($radio.exists()).toBe(false)
    })
  })

  describe('options prop', () => {
    it('renders radios for options', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          options: [
            {text: 'Option A', value: 'a', disabled: false},
            {text: 'Option B', value: 'b', disabled: false},
            {text: 'Option C', value: 'c', disabled: false},
          ],
        },
      })
      const radios = wrapper.findAllComponents(BFormRadio)
      expect(radios).toHaveLength(3)
      expect(radios[0].text()).toBe('Option A')
      expect(radios[1].text()).toBe('Option B')
      expect(radios[2].text()).toBe('Option C')
    })

    it('passes value prop to child radios', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          options: [
            {text: 'A', value: 'val-a', disabled: false},
            {text: 'B', value: 'val-b', disabled: false},
          ],
        },
      })
      const radios = wrapper.findAllComponents(BFormRadio)
      expect(radios[0].props('value')).toBe('val-a')
      expect(radios[1].props('value')).toBe('val-b')
    })

    it('passes disabled prop to child radios', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: true},
          ],
        },
      })
      const radios = wrapper.findAllComponents(BFormRadio)
      expect(radios[0].props('disabled')).toBe(false)
      expect(radios[1].props('disabled')).toBe(true)
    })
  })

  describe('slots', () => {
    it('renders first slot before options', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          options: [{text: 'A', value: 'a', disabled: false}],
        },
        slots: {
          first: '<span class="first-slot">First!</span>',
        },
      })
      const firstSlot = wrapper.find('.first-slot')
      expect(firstSlot.exists()).toBe(true)
      expect(firstSlot.text()).toBe('First!')
    })

    it('renders default slot after options', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          options: [{text: 'A', value: 'a', disabled: false}],
        },
        slots: {
          default: '<span class="default-slot">Default!</span>',
        },
      })
      const defaultSlot = wrapper.find('.default-slot')
      expect(defaultSlot.exists()).toBe(true)
      expect(defaultSlot.text()).toBe('Default!')
    })

    it('renders option slot to override option text', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
          ],
        },
        slots: {
          option: 'custom-text',
        },
      })
      const radios = wrapper.findAllComponents(BFormRadio)
      expect(radios[0].text()).toBe('custom-text')
      expect(radios[1].text()).toBe('custom-text')
    })
  })

  describe('modelValue', () => {
    it('emits update:modelValue when child radio is clicked', async () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          modelValue: null,
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
          ],
        },
        attachTo: document.body,
      })
      const inputs = wrapper.findAll('input[type="radio"]')
      await inputs[0].setValue()
      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')?.[0][0]).toBe('a')
    })

    it('supports selecting a different value', async () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          'modelValue': 'a',
          'options': [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
            {text: 'C', value: 'c', disabled: false},
          ],
          'onUpdate:modelValue': (e: unknown) => {
            wrapper.setProps({modelValue: e as string})
          },
        },
        attachTo: document.body,
      })
      const inputs = wrapper.findAll('input[type="radio"]')
      await inputs[2].setValue()
      expect(wrapper.props('modelValue')).toBe('c')
    })

    it('reflects checked state from modelValue', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          modelValue: 'b',
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
            {text: 'C', value: 'c', disabled: false},
          ],
        },
      })
      const inputs = wrapper.findAll('input[type="radio"]')
      expect((inputs[0].element as HTMLInputElement).checked).toBe(false)
      expect((inputs[1].element as HTMLInputElement).checked).toBe(true)
      expect((inputs[2].element as HTMLInputElement).checked).toBe(false)
    })

    it('changing selection updates the checked radio', async () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          'modelValue': 'a',
          'options': [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
          ],
          'onUpdate:modelValue': (e: unknown) => {
            wrapper.setProps({modelValue: e as string})
          },
        },
        attachTo: document.body,
      })
      const inputs = wrapper.findAll('input[type="radio"]')
      expect((inputs[0].element as HTMLInputElement).checked).toBe(true)
      expect((inputs[1].element as HTMLInputElement).checked).toBe(false)
      await inputs[1].setValue()
      expect((inputs[0].element as HTMLInputElement).checked).toBe(false)
      expect((inputs[1].element as HTMLInputElement).checked).toBe(true)
    })
  })

  describe('disabled prop', () => {
    it('propagates disabled to all child radios via provide', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          disabled: true,
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
          ],
        },
      })
      const inputs = wrapper.findAll('input[type="radio"]')
      expect(inputs[0].attributes('disabled')).toBe('')
      expect(inputs[1].attributes('disabled')).toBe('')
    })

    it('does not disable when disabled is false', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          disabled: false,
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
          ],
        },
      })
      const inputs = wrapper.findAll('input[type="radio"]')
      expect(inputs[0].attributes('disabled')).toBeUndefined()
      expect(inputs[1].attributes('disabled')).toBeUndefined()
    })
  })

  describe('stacked prop', () => {
    it('child radios are inline when stacked is false', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          stacked: false,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const radio = wrapper.findComponent(BFormRadio)
      expect(radio.classes()).toContain('form-check-inline')
    })

    it('child radios are not inline when stacked is true', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          stacked: true,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const radio = wrapper.findComponent(BFormRadio)
      expect(radio.classes()).not.toContain('form-check-inline')
    })
  })

  describe('buttons prop', () => {
    it('child radios have btn-check class when buttons is true', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          buttons: true,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const radio = wrapper.findComponent(BFormRadio)
      const input = radio.get('input')
      expect(input.classes()).toContain('btn-check')
    })

    it('child radios do not have btn-check class when buttons is false', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          buttons: false,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const radio = wrapper.findComponent(BFormRadio)
      const input = radio.get('input')
      expect(input.classes()).not.toContain('btn-check')
    })
  })

  describe('plain prop', () => {
    it('child radios inherit plain from group', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          plain: true,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const radio = wrapper.findComponent(BFormRadio)
      expect(radio.classes()).not.toContain('form-check')
    })
  })

  describe('reverse prop', () => {
    it('child radios inherit reverse from group', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          reverse: true,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const radio = wrapper.findComponent(BFormRadio)
      expect(radio.classes()).toContain('form-check-reverse')
    })
  })

  describe('size prop', () => {
    it('child radios inherit size from group', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          size: 'lg',
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const radio = wrapper.findComponent(BFormRadio)
      expect(radio.classes()).toContain('form-control-lg')
    })

    it('child radios inherit size sm from group', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          size: 'sm',
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const radio = wrapper.findComponent(BFormRadio)
      expect(radio.classes()).toContain('form-control-sm')
    })
  })

  describe('state prop', () => {
    it('child radios inherit state from group', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          state: false,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const radio = wrapper.findComponent(BFormRadio)
      const input = radio.get('input')
      expect(input.classes()).toContain('is-invalid')
    })

    it('child radios inherit valid state from group', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          state: true,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const radio = wrapper.findComponent(BFormRadio)
      const input = radio.get('input')
      expect(input.classes()).toContain('is-valid')
    })
  })

  describe('buttonVariant prop', () => {
    it('child radios inherit buttonVariant when buttons is true', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          buttons: true,
          buttonVariant: 'primary',
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const radio = wrapper.findComponent(BFormRadio)
      const label = radio.get('label')
      expect(label.classes()).toContain('btn-primary')
    })
  })

  describe('name prop', () => {
    it('child radios inherit name from group', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          name: 'my-group',
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
          ],
        },
      })
      const inputs = wrapper.findAll('input[type="radio"]')
      expect(inputs[0].attributes('name')).toBe('my-group')
      expect(inputs[1].attributes('name')).toBe('my-group')
    })
  })

  describe('form prop', () => {
    it('child radios inherit form from group', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          form: 'my-form',
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
          ],
        },
      })
      const inputs = wrapper.findAll('input[type="radio"]')
      expect(inputs[0].attributes('form')).toBe('my-form')
      expect(inputs[1].attributes('form')).toBe('my-form')
    })
  })

  describe('required prop', () => {
    it('child radios inherit required from group when name is set', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        props: {
          required: true,
          name: 'my-group',
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const input = wrapper.get('input[type="radio"]')
      expect(input.attributes('required')).toBe('')
    })
  })

  describe('exposed methods', () => {
    it('exposes focus method', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        attachTo: document.body,
      })
      expect(typeof wrapper.vm.focus).toBe('function')
    })

    it('exposes blur method', () => {
      const wrapper = mount(BFormRadioGroupBase, {
        attachTo: document.body,
      })
      expect(typeof wrapper.vm.blur).toBe('function')
    })
  })
})
