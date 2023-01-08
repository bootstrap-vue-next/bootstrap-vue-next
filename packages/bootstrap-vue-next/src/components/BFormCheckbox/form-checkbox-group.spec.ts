// @vitest-environment jsdom
import {afterEach, describe, expect, it} from 'vitest'
import {nextTick} from 'vue'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import {createContainer} from '../../../tests/utils'
import BFormCheckboxGroup from './BFormCheckboxGroup.vue'
import BFormCheckbox from './BFormCheckbox.vue'

const global = {components: {BFormCheckbox}}

describe('form-checkbox-group', () => {
  enableAutoUnmount(afterEach)
  // --- Structure, class and attributes tests ---

  it('default has structure <div></div>', () => {
    const wrapper = mount(BFormCheckboxGroup, {global})

    expect(wrapper).toBeDefined()
    expect(wrapper.element.tagName).toBe('DIV')

    const $children = wrapper.element.children
    expect($children.length).toEqual(0)
  })

  it('default has no classes on wrapper other than focus ring', () => {
    const wrapper = mount(BFormCheckboxGroup, {global})

    expect(wrapper.classes()).toContain('bv-no-focus-ring')
    expect(wrapper.classes().length).toEqual(1)
  })

  it('default has auto Id set', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
    })

    await nextTick()

    // Auto Id not generated until after mount
    expect(wrapper.attributes('id')).toBeDefined()
  })

  it('default has tabindex set to -1', () => {
    const wrapper = mount(BFormCheckboxGroup, {global})

    expect(wrapper.attributes('tabindex')).toBeDefined()
    expect(wrapper.attributes('tabindex')).toBe('-1')
  })

  it('default does not have aria-required set', () => {
    const wrapper = mount(BFormCheckboxGroup, {global})

    expect(wrapper.attributes('aria-required')).toBeUndefined()
  })

  it('default does not have aria-invalid set', () => {
    const wrapper = mount(BFormCheckboxGroup, {global})

    expect(wrapper.attributes('aria-invalid')).toBeUndefined()
  })

  it('default has attribute role=group', () => {
    const wrapper = mount(BFormCheckboxGroup, {global})

    expect(wrapper.attributes('role')).toBeDefined()
    expect(wrapper.attributes('role')).toBe('group')
  })

  it('default has user provided Id', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        id: 'test',
      },
    })

    expect(wrapper.attributes('id')).toBeDefined()
    expect(wrapper.attributes('id')).toBe('test')
  })

  it('default has class was-validated when validated=true', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        validated: true,
      },
    })

    expect(wrapper.classes()).toBeDefined()
    expect(wrapper.classes()).toContain('was-validated')
  })

  it('default has attribute aria-invalid=true when state=false', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        state: false,
      },
    })

    expect(wrapper.attributes('aria-invalid')).toBeDefined()
    expect(wrapper.attributes('aria-invalid')).toBe('true')
  })

  it('default does not have attribute aria-invalid when state=true', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        state: true,
      },
    })

    expect(wrapper.attributes('aria-invalid')).toBeUndefined()
  })

  it('default does not have attribute aria-invalid when state=undefined', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        state: undefined,
      },
    })

    expect(wrapper.attributes('aria-invalid')).toBeUndefined()
  })

  it('default has attribute aria-invalid=true when aria-invalid=true', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        ariaInvalid: true,
      },
    })

    expect(wrapper.attributes('aria-invalid')).toBeDefined()
    expect(wrapper.attributes('aria-invalid')).toBe('true')
  })

  it('default has attribute aria-invalid=true when aria-invalid="true"', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        ariaInvalid: 'true',
      },
    })

    expect(wrapper.attributes('aria-invalid')).toBeDefined()
    expect(wrapper.attributes('aria-invalid')).toBe('true')
  })

  it('default has attribute aria-invalid=true when aria-invalid=""', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        ariaInvalid: '',
      },
    })

    expect(wrapper.attributes('aria-invalid')).toBeDefined()
    expect(wrapper.attributes('aria-invalid')).toBe('true')
  })

  // --- Button mode structure ---

  it('button mode has classes button-group and button-group-toggle', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        buttons: true,
      },
    })

    expect(wrapper.classes()).toBeDefined()
    expect(wrapper.classes().length).toBe(2)
    expect(wrapper.classes()).toContain('btn-group')
    expect(wrapper.classes()).toContain('bv-no-focus-ring')
  })

  it('button mode has classes button-group-vertical and button-group-toggle when stacked=true', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        buttons: true,
        stacked: true,
      },
    })

    expect(wrapper.classes()).toBeDefined()
    expect(wrapper.classes().length).toBe(2)
    expect(wrapper.classes()).toContain('btn-group-vertical')
    expect(wrapper.classes()).toContain('bv-no-focus-ring')
  })

  it('button mode has size class when size prop set', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        buttons: true,
        size: 'lg',
      },
    })

    expect(wrapper.classes()).toBeDefined()
    expect(wrapper.classes().length).toBe(3)
    expect(wrapper.classes()).toContain('btn-group')
    expect(wrapper.classes()).toContain('btn-group-lg')
    expect(wrapper.classes()).toContain('bv-no-focus-ring')
  })

  it('button mode has size class when size prop set and stacked', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        buttons: true,
        stacked: true,
        size: 'lg',
      },
    })

    expect(wrapper.classes()).toBeDefined()
    expect(wrapper.classes().length).toBe(3)
    expect(wrapper.classes()).toContain('btn-group-vertical')
    expect(wrapper.classes()).toContain('btn-group-lg')
    expect(wrapper.classes()).toContain('bv-no-focus-ring')
  })

  it('button mode button variant works', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        modelValue: [],
        buttons: true,
        buttonVariant: 'primary',
        options: [
          {text: 'button 1', value: 'first'},
          {text: 'button 2', value: 'second'},
          {text: 'button 3', value: 'third', props: {buttonVariant: 'danger'}},
        ],
      },
    })

    expect(wrapper).toBeDefined()
    await nextTick()
    // Find all the labels with `.btn` class
    const $btns = wrapper.findAll('label.btn')
    expect($btns).toBeDefined()
    expect($btns.length).toBe(3)
    // Expect them to have the correct variant classes
    expect($btns[0].classes()).toContain('btn-primary')
    expect($btns[1].classes()).toContain('btn-primary')
    expect($btns[2].classes()).toContain('btn-danger')
  })

  // --- Functionality testing ---

  it('has checkboxes via options array', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: ['one', 'two', 'three'],
        modelValue: [],
      },
    })

    // expect(wrapper.vm.isRadioGroup).toEqual(false)
    expect(wrapper.vm.modelValue).toEqual([])
    expect(wrapper.findAll('input[type=checkbox]').length).toBe(3)
  })

  it('has checkboxes via options array which respect disabled', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: [{text: 'one'}, {text: 'two'}, {text: 'three', disabled: true}],
        modelValue: [],
      },
    })

    expect(wrapper.classes()).toBeDefined()

    expect(wrapper.vm.modelValue).toEqual([])
    const $inputs = wrapper.findAll('input[type=checkbox]')
    expect($inputs.length).toBe(3)
    expect($inputs[0].attributes('disabled')).toBeUndefined()
    expect($inputs[1].attributes('disabled')).toBeUndefined()
    expect($inputs[2].attributes('disabled')).toBeDefined()
  })

  it('emits change event when checkbox clicked', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: ['one', 'two', 'three'],
        modelValue: [],
      },
      attrs: {
        'onUpdate:modelValue': (modelValue: Array<unknown>) => wrapper.setProps({modelValue}),
      },
    })

    expect(wrapper.classes()).toBeDefined()

    const $inputs = wrapper.findAll('input')
    expect($inputs.length).toBe(3)
    expect(wrapper.vm.modelValue).toEqual([])

    await $inputs[0].trigger('click')
    expect(wrapper.vm.modelValue).toEqual(['one'])
    expect(wrapper.emitted('change')).toBeDefined()
    const $changed = wrapper.emitted('change') as unknown[][]
    expect($changed.length).toBe(1)
    expect($changed[0][0]).toEqual(['one'])
    expect(wrapper.emitted('update:modelValue')).toBeDefined()
    const $emitted = wrapper.emitted('update:modelValue') as unknown[][]
    expect($emitted.length).toBe(1)
    expect($emitted[0][0]).toEqual(['one'])

    await $inputs[2].trigger('click')
    expect(wrapper.vm.modelValue).toEqual(['one', 'three'])
    expect($changed.length).toBe(2)
    expect($changed[1][0]).toEqual(['one', 'three'])
    expect($emitted.length).toBe(2)
    expect($emitted[1][0]).toEqual(['one', 'three'])

    await $inputs[0].trigger('click')
    expect(wrapper.vm.modelValue).toEqual(['three'])
    expect($changed.length).toBe(3)
    expect($changed[2][0]).toEqual(['three'])
    expect($emitted.length).toBe(3)
    expect($emitted[2][0]).toEqual(['three'])

    await $inputs[1].trigger('click')
    expect(wrapper.vm.modelValue).toEqual(['two', 'three'])
    expect($changed.length).toBe(4)
    expect($changed[3][0]).toEqual(['two', 'three'])
    expect($emitted.length).toBe(4)
    expect($emitted[3][0]).toEqual(['two', 'three'])
  })

  it('modelValue organizes based on options', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: ['one', 'two', {value: {d: 1}, text: 'abc'}, 'three'],
        modelValue: [],
      },
      attrs: {
        'onUpdate:modelValue': (modelValue: Array<unknown>) => wrapper.setProps({modelValue}),
      },
    })

    const $inputs = wrapper.findAll('input')
    await $inputs[3].trigger('click')
    expect(wrapper.vm.modelValue).toEqual(['three'])
    await $inputs[2].trigger('click')
    expect(wrapper.vm.modelValue).toEqual([{d: 1}, 'three'])
    await $inputs[1].trigger('click')
    expect(wrapper.vm.modelValue).toEqual(['two', {d: 1}, 'three'])
    await $inputs[0].trigger('click')
    expect(wrapper.vm.modelValue).toEqual(['one', 'two', {d: 1}, 'three'])
    await $inputs[2].trigger('click')
    expect(wrapper.vm.modelValue).toEqual(['one', 'two', 'three'])
    await $inputs[2].trigger('click')
    expect(wrapper.vm.modelValue).toEqual(['one', 'two', {d: 1}, 'three'])
    await $inputs[1].trigger('click')
    await $inputs[2].trigger('click')
    expect(wrapper.vm.modelValue).toEqual(['one', 'three'])
    await $inputs[1].trigger('click')
    await $inputs[2].trigger('click')
    expect(wrapper.vm.modelValue).toEqual(['one', 'two', {d: 1}, 'three'])
  })

  it('checkboxes reflect group checked v-model', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: ['one', 'two', 'three'],
        modelValue: ['two'],
      },
    })

    expect(wrapper.classes()).toBeDefined()

    const $inputs = wrapper.findAll('input[type=checkbox]')
    expect($inputs.length).toBe(3)
    expect(wrapper.vm.modelValue).toEqual(['two'])
    expect(($inputs[0].element as HTMLInputElement).checked).toBe(false)
    expect(($inputs[1].element as HTMLInputElement).checked).toBe(true)
    expect(($inputs[2].element as HTMLInputElement).checked).toBe(false)

    await wrapper.setProps({modelValue: ['three', 'one']})
    expect(wrapper.vm.modelValue).toEqual(['three', 'one'])
    expect(($inputs[0].element as HTMLInputElement).checked).toBe(true)
    expect(($inputs[1].element as HTMLInputElement).checked).toBe(false)
    expect(($inputs[2].element as HTMLInputElement).checked).toBe(true)
  })

  it('child checkboxes have is-valid classes when group state set to valid', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: ['one', 'two', 'three'],
        modelValue: [],
        state: true,
      },
    })

    expect(wrapper.classes()).toBeDefined()
    expect(wrapper.vm.modelValue).toEqual([])

    const $inputs = wrapper.findAll('input[type=checkbox]')
    expect($inputs.length).toBe(3)
    $inputs.forEach(($input) => {
      expect($input.classes()).toContain('is-valid')
    })
  })

  it('child checkboxes have is-invalid classes when group state set to invalid', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: ['one', 'two', 'three'],
        modelValue: [],
        state: false,
      },
    })

    expect(wrapper.vm.modelValue).toEqual([])

    const $inputs = wrapper.findAll('input[type=checkbox]')
    expect($inputs.length).toBe(3)
    $inputs.forEach(($input) => {
      expect($input.classes()).toContain('is-invalid')
    })
  })

  it('child checkboxes have disabled attribute when group disabled', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: ['one', 'two', 'three'],
        modelValue: [],
        disabled: true,
      },
    })

    expect(wrapper.vm.modelValue).toEqual([])

    const $inputs = wrapper.findAll('input[type=checkbox]')
    expect($inputs.length).toBe(3)
    $inputs.forEach(($input) => {
      expect($input.attributes('disabled')).toBeDefined()
    })
  })

  it('child checkboxes have required attribute when group required', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        name: 'group',
        options: ['one', 'two', 'three'],
        modelValue: [],
        required: true,
      },
    })

    expect(wrapper.vm.modelValue).toEqual([])

    const $inputs = wrapper.findAll('input[type=checkbox]')
    expect($inputs.length).toBe(3)
    $inputs.forEach(($input) => {
      expect($input.attributes('required')).toBeDefined()
      expect($input.attributes('aria-required')).toBe('true')
    })
  })

  it('child checkboxes have class form-check-inline when stacked=false', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        name: 'group',
        options: ['one', 'two', 'three'],
        modelValue: [],
        stacked: false,
      },
    })

    const $inputs = wrapper.findAll('div.form-check')
    expect($inputs.length).toBe(3)
    $inputs.forEach(($input) => {
      expect($input.classes()).toContain('form-check-inline')
    })
  })

  it('child checkboxes do not have class custom-control-inline when stacked=true', () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        name: 'group',
        options: ['one', 'two', 'three'],
        modelValue: [],
        stacked: true,
      },
    })

    const $inputs = wrapper.findAll('div.form-check')
    expect($inputs.length).toBe(3)
    $inputs.forEach(($input) => {
      expect($input.classes()).not.toContain('form-check-inline')
    })
  })
})
