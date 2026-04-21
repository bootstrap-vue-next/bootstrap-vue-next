import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BFormCheckboxGroupBase from './BFormCheckboxGroupBase.vue'
import BFormCheckbox from './BFormCheckbox.vue'

describe('form-checkbox-group-base', () => {
  enableAutoUnmount(afterEach)

  describe('root element', () => {
    it('tag is div', () => {
      const wrapper = mount(BFormCheckboxGroupBase)
      expect(wrapper.element.tagName).toBe('DIV')
    })

    it('has static attr role to be group', () => {
      const wrapper = mount(BFormCheckboxGroupBase)
      expect(wrapper.attributes('role')).toBe('group')
    })

    it('has static class to contain bv-no-focus-ring', () => {
      const wrapper = mount(BFormCheckboxGroupBase)
      expect(wrapper.classes()).toContain('bv-no-focus-ring')
    })

    it('has tabindex to be -1', () => {
      const wrapper = mount(BFormCheckboxGroupBase)
      expect(wrapper.attributes('tabindex')).toBe('-1')
    })

    it('has attr id to be defined', () => {
      const wrapper = mount(BFormCheckboxGroupBase)
      expect(wrapper.attributes('id')).toBeDefined()
    })

    it('has attr id contains content from prop id', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {id: 'foobar'},
      })
      expect(wrapper.attributes('id')).toBe('foobar')
    })
  })

  describe('validation classes', () => {
    it('has class was-validated when prop validated', async () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
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
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {buttons: true},
      })
      expect(wrapper.classes()).toContain('btn-group')
      await wrapper.setProps({buttons: false})
      expect(wrapper.classes()).not.toContain('btn-group')
      await wrapper.setProps({buttons: undefined})
      expect(wrapper.classes()).not.toContain('btn-group')
    })

    it('does not have class btn-group when prop buttons but also prop stacked is true', async () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {buttons: true, stacked: true},
      })
      expect(wrapper.classes()).not.toContain('btn-group')
      await wrapper.setProps({stacked: false})
      expect(wrapper.classes()).toContain('btn-group')
    })

    it('has class btn-group-vertical when prop buttons and prop stacked', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {buttons: true, stacked: true},
      })
      expect(wrapper.classes()).toContain('btn-group-vertical')
    })

    it('does not have class btn-group-vertical when prop buttons and prop stacked is false', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {buttons: true, stacked: false},
      })
      expect(wrapper.classes()).not.toContain('btn-group-vertical')
    })

    it('has class btn-group-{type} when prop size', async () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {size: 'lg'},
      })
      expect(wrapper.classes()).toContain('btn-group-lg')
      await wrapper.setProps({size: undefined})
      expect(wrapper.classes()).not.toContain('btn-group-lg')
    })
  })

  describe('aria attributes', () => {
    it('has attr aria-required when prop required', async () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {required: true},
      })
      expect(wrapper.attributes('aria-required')).toBe('true')
      await wrapper.setProps({required: false})
      expect(wrapper.attributes('aria-required')).toBeUndefined()
      await wrapper.setProps({required: undefined})
      expect(wrapper.attributes('aria-required')).toBeUndefined()
    })

    it('has attr aria-invalid when prop ariaInvalid', async () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
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
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {ariaInvalid: false, state: false},
      })
      expect(wrapper.attributes('aria-invalid')).toBe('true')
    })

    it('has attr aria-invalid to be true when state is false and ariaInvalid is undefined', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {ariaInvalid: undefined, state: false},
      })
      expect(wrapper.attributes('aria-invalid')).toBe('true')
    })

    it('has attr aria-invalid to be undefined when state is undefined and ariaInvalid is undefined', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {ariaInvalid: undefined, state: undefined},
      })
      expect(wrapper.attributes('aria-invalid')).toBeUndefined()
    })
  })

  describe('no child checkboxes by default', () => {
    it('has no BFormCheckbox when no options', () => {
      const wrapper = mount(BFormCheckboxGroupBase)
      const $checkbox = wrapper.findComponent(BFormCheckbox)
      expect($checkbox.exists()).toBe(false)
    })
  })

  describe('options prop', () => {
    it('renders checkboxes for string options', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          options: [
            {text: 'Option A', value: 'a', disabled: false},
            {text: 'Option B', value: 'b', disabled: false},
            {text: 'Option C', value: 'c', disabled: false},
          ],
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes).toHaveLength(3)
      expect(checkboxes[0].text()).toBe('Option A')
      expect(checkboxes[1].text()).toBe('Option B')
      expect(checkboxes[2].text()).toBe('Option C')
    })

    it('passes value prop to child checkboxes', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          options: [
            {text: 'A', value: 'val-a', disabled: false},
            {text: 'B', value: 'val-b', disabled: false},
          ],
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes[0].props('value')).toBe('val-a')
      expect(checkboxes[1].props('value')).toBe('val-b')
    })

    it('passes disabled prop to child checkboxes', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: true},
          ],
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes[0].props('disabled')).toBe(false)
      expect(checkboxes[1].props('disabled')).toBe(true)
    })
  })

  describe('slots', () => {
    it('renders first slot before options', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
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
      const wrapper = mount(BFormCheckboxGroupBase, {
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
      const wrapper = mount(BFormCheckboxGroupBase, {
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
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes[0].text()).toBe('custom-text')
      expect(checkboxes[1].text()).toBe('custom-text')
    })
  })

  describe('modelValue', () => {
    it('emits update:modelValue when child checkbox is clicked', async () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          modelValue: [],
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
          ],
        },
        attachTo: document.body,
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      await inputs[0].trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')?.[0][0]).toEqual(['a'])
    })

    it('supports selecting multiple values', async () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          'modelValue': [],
          'options': [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
            {text: 'C', value: 'c', disabled: false},
          ],
          'onUpdate:modelValue': (e: unknown) => {
            wrapper.setProps({modelValue: e as string[]})
          },
        },
        attachTo: document.body,
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      await inputs[0].trigger('click')
      expect(wrapper.props('modelValue')).toEqual(['a'])
      await inputs[2].trigger('click')
      expect(wrapper.props('modelValue')).toEqual(['a', 'c'])
    })

    it('reflects checked state from modelValue', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          modelValue: ['b'],
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
            {text: 'C', value: 'c', disabled: false},
          ],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect((inputs[0].element as HTMLInputElement).checked).toBe(false)
      expect((inputs[1].element as HTMLInputElement).checked).toBe(true)
      expect((inputs[2].element as HTMLInputElement).checked).toBe(false)
    })

    it('unchecking emits update:modelValue without the value', async () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          'modelValue': ['a', 'b'],
          'options': [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
          ],
          'onUpdate:modelValue': (e: unknown) => {
            wrapper.setProps({modelValue: e as string[]})
          },
        },
        attachTo: document.body,
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      await inputs[0].trigger('click')
      expect(wrapper.props('modelValue')).toEqual(['b'])
    })
  })

  describe('disabled prop', () => {
    it('propagates disabled to all child checkboxes via provide', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          disabled: true,
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
          ],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect(inputs[0].attributes('disabled')).toBe('')
      expect(inputs[1].attributes('disabled')).toBe('')
    })

    it('does not prevent clicking when disabled is false', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          disabled: false,
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
          ],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect(inputs[0].attributes('disabled')).toBeUndefined()
      expect(inputs[1].attributes('disabled')).toBeUndefined()
    })
  })

  describe('stacked prop', () => {
    it('child checkboxes are inline when stacked is false', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          stacked: false,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      expect(checkbox.classes()).toContain('form-check-inline')
    })

    it('child checkboxes are not inline when stacked is true', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          stacked: true,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      expect(checkbox.classes()).not.toContain('form-check-inline')
    })
  })

  describe('switches prop', () => {
    it('child checkboxes have form-switch class when switches is true', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          switches: true,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      expect(checkbox.classes()).toContain('form-switch')
    })

    it('child checkboxes do not have form-switch class when switches is false', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          switches: false,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      expect(checkbox.classes()).not.toContain('form-switch')
    })
  })

  describe('buttons prop', () => {
    it('child checkboxes have btn-check class when buttons is true', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          buttons: true,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      const input = checkbox.get('input')
      expect(input.classes()).toContain('btn-check')
    })

    it('child checkboxes do not have btn-check class when buttons is false', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          buttons: false,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      const input = checkbox.get('input')
      expect(input.classes()).not.toContain('btn-check')
    })
  })

  describe('plain prop', () => {
    it('child checkboxes inherit plain from group', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          plain: true,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      expect(checkbox.classes()).not.toContain('form-check')
    })
  })

  describe('reverse prop', () => {
    it('child checkboxes inherit reverse from group', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          reverse: true,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      expect(checkbox.classes()).toContain('form-check-reverse')
    })
  })

  describe('size prop', () => {
    it('child checkboxes inherit size from group', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          size: 'lg',
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      expect(checkbox.classes()).toContain('form-control-lg')
    })

    it('child checkboxes inherit size sm from group', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          size: 'sm',
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      expect(checkbox.classes()).toContain('form-control-sm')
    })
  })

  describe('state prop', () => {
    it('child checkboxes inherit state from group', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          state: false,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      const input = checkbox.get('input')
      expect(input.classes()).toContain('is-invalid')
    })

    it('child checkboxes inherit valid state from group', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          state: true,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      const input = checkbox.get('input')
      expect(input.classes()).toContain('is-valid')
    })
  })

  describe('buttonVariant prop', () => {
    it('child checkboxes inherit buttonVariant when buttons is true', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          buttons: true,
          buttonVariant: 'primary',
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      const label = checkbox.get('label')
      expect(label.classes()).toContain('btn-primary')
    })
  })

  describe('name prop', () => {
    it('child checkboxes inherit name from group', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          name: 'my-group',
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
          ],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect(inputs[0].attributes('name')).toBe('my-group')
      expect(inputs[1].attributes('name')).toBe('my-group')
    })
  })

  describe('form prop', () => {
    it('child checkboxes inherit form from group', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          form: 'my-form',
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
          ],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect(inputs[0].attributes('form')).toBe('my-form')
      expect(inputs[1].attributes('form')).toBe('my-form')
    })
  })

  describe('required prop', () => {
    it('child checkboxes inherit required from group when name is set', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          required: true,
          name: 'my-group',
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const input = wrapper.get('input[type="checkbox"]')
      expect(input.attributes('required')).toBe('')
    })
  })

  describe('exposed methods', () => {
    it('exposes focus method', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        attachTo: document.body,
      })
      expect(typeof wrapper.vm.focus).toBe('function')
    })

    it('exposes blur method', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        attachTo: document.body,
      })
      expect(typeof wrapper.vm.blur).toBe('function')
    })
  })

  describe('autofocus', () => {
    it('accepts autofocus prop true', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {autofocus: true},
        attachTo: document.body,
      })
      expect(wrapper.props('autofocus')).toBe(true)
    })

    it('accepts autofocus prop false', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {autofocus: false},
        attachTo: document.body,
      })
      expect(wrapper.props('autofocus')).toBe(false)
    })
  })

  describe('slot ordering', () => {
    it('renders first slot before options and default slot after', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          options: [{text: 'Option', value: 'opt', disabled: false}],
        },
        slots: {
          first: '<span class="first-marker">FIRST</span>',
          default: '<span class="default-marker">DEFAULT</span>',
        },
      })
      const html = wrapper.html()
      const firstIdx = html.indexOf('first-marker')
      const optionIdx = html.indexOf('Option')
      const defaultIdx = html.indexOf('default-marker')
      expect(firstIdx).toBeLessThan(optionIdx)
      expect(optionIdx).toBeLessThan(defaultIdx)
    })

    it('renders first slot even without options', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        slots: {
          first: '<span class="first-marker">FIRST</span>',
        },
      })
      expect(wrapper.find('.first-marker').exists()).toBe(true)
    })
  })

  describe('option normalization edge cases', () => {
    it('options with null value render with null', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          options: [{text: 'None', value: null, disabled: false}],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      expect(checkbox.props('value')).toBe(null)
    })

    it('options without text use String(value) as text', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          options: [{value: 42, disabled: false}],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      expect(checkbox.text()).toBe('42')
    })

    it('options without value default to null', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          options: [{text: 'No Value', disabled: false}],
        },
      })
      const checkbox = wrapper.findComponent(BFormCheckbox)
      expect(checkbox.props('value')).toBe(null)
    })
  })

  describe('options reactivity', () => {
    it('updates checkboxes when options change', async () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
          ],
        },
      })
      expect(wrapper.findAllComponents(BFormCheckbox)).toHaveLength(2)
      await wrapper.setProps({
        options: [
          {text: 'A', value: 'a', disabled: false},
          {text: 'B', value: 'b', disabled: false},
          {text: 'C', value: 'c', disabled: false},
        ],
      })
      expect(wrapper.findAllComponents(BFormCheckbox)).toHaveLength(3)
    })
  })

  describe('auto-generated name', () => {
    it('generates a name when name prop is not provided', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const input = wrapper.get('input[type="checkbox"]')
      expect(input.attributes('name')).toBeDefined()
    })
  })

  describe('size classes', () => {
    it('does not add a btn-group size class when size is undefined (default)', () => {
      const wrapper = mount(BFormCheckboxGroupBase)
      expect(wrapper.classes()).not.toContain('btn-group-md')
      expect(wrapper.classes()).not.toContain('btn-group-sm')
      expect(wrapper.classes()).not.toContain('btn-group-lg')
    })

    it('adds btn-group-sm class for size sm', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {size: 'sm'},
      })
      expect(wrapper.classes()).toContain('btn-group-sm')
    })
  })

  describe('multiple modelValue selections', () => {
    it('reflects multiple checked states from modelValue', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          modelValue: ['a', 'c'],
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
            {text: 'C', value: 'c', disabled: false},
          ],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect((inputs[0].element as HTMLInputElement).checked).toBe(true)
      expect((inputs[1].element as HTMLInputElement).checked).toBe(false)
      expect((inputs[2].element as HTMLInputElement).checked).toBe(true)
    })

    it('reflects all checked state when all values are in modelValue', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          modelValue: ['a', 'b', 'c'],
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
            {text: 'C', value: 'c', disabled: false},
          ],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect((inputs[0].element as HTMLInputElement).checked).toBe(true)
      expect((inputs[1].element as HTMLInputElement).checked).toBe(true)
      expect((inputs[2].element as HTMLInputElement).checked).toBe(true)
    })

    it('reflects none checked when modelValue is empty', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          modelValue: [],
          options: [
            {text: 'A', value: 'a', disabled: false},
            {text: 'B', value: 'b', disabled: false},
          ],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect((inputs[0].element as HTMLInputElement).checked).toBe(false)
      expect((inputs[1].element as HTMLInputElement).checked).toBe(false)
    })
  })

  describe('disabled option normalization', () => {
    it('group disabled overrides individual option disabled=false', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          disabled: true,
          options: [{text: 'A', value: 'a', disabled: false}],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect(inputs[0].attributes('disabled')).toBe('')
    })

    it('primitive options inherit group disabled', () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {
          disabled: true,
          options: [{text: 'Primitive', value: 'p', disabled: false}],
        },
      })
      const inputs = wrapper.findAll('input[type="checkbox"]')
      expect(inputs[0].attributes('disabled')).toBe('')
    })
  })

  describe('validation classes reactivity', () => {
    it('button group class reacts to buttons prop change', async () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {buttons: false},
      })
      expect(wrapper.classes()).not.toContain('btn-group')
      await wrapper.setProps({buttons: true})
      expect(wrapper.classes()).toContain('btn-group')
    })

    it('stacked class reacts to prop change', async () => {
      const wrapper = mount(BFormCheckboxGroupBase, {
        props: {buttons: true, stacked: false},
      })
      expect(wrapper.classes()).toContain('btn-group')
      expect(wrapper.classes()).not.toContain('btn-group-vertical')
      await wrapper.setProps({stacked: true})
      expect(wrapper.classes()).not.toContain('btn-group')
      expect(wrapper.classes()).toContain('btn-group-vertical')
    })
  })
})
