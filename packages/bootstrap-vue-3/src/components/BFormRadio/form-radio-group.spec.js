// @vitest-environment jsdom
import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import {createContainer} from '../../../tests/utils'
import {nextTick} from 'vue'
import BFormRadioGroup from './BFormRadioGroup.vue'
import BFormRadio from './BFormRadio.vue'

const global = {components: {BFormRadio}}

describe('form-radio-group', () => {
  enableAutoUnmount(afterEach)
  // --- Structure, class and attributes tests ---

  it('default has structure <div></div>', () => {
    const wrapper = mount(BFormRadioGroup, {global})

    expect(wrapper).toBeDefined()
    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.element.children.length).toEqual(0)
  })

  it('default has no classes on wrapper other than focus ring', () => {
    const wrapper = mount(BFormRadioGroup, {global})

    expect(wrapper.classes().length).toEqual(1)
    expect(wrapper.classes()).toContain('bv-no-focus-ring')
  })

  it('default has auto Id set', async () => {
    const wrapper = mount(BFormRadioGroup, {
      attachTo: createContainer(),
      global,
    })

    await nextTick()

    expect(wrapper.attributes('id')).toBeDefined()
  })

  it('default has tabindex set to -1', () => {
    const wrapper = mount(BFormRadioGroup, {global})

    expect(wrapper.attributes('tabindex')).toBeDefined()
    expect(wrapper.attributes('tabindex')).toBe('-1')
  })

  it('default does not have aria-required set', () => {
    const wrapper = mount(BFormRadioGroup, {global})

    expect(wrapper.attributes('aria-required')).toBeUndefined()
  })

  it('default does not have aria-invalid set', () => {
    const wrapper = mount(BFormRadioGroup, {global})

    expect(wrapper.attributes('aria-invalid')).toBeUndefined()
  })

  it('default has attribute role=radiogroup', () => {
    const wrapper = mount(BFormRadioGroup, {global})

    expect(wrapper.attributes('role')).toBeDefined()
    expect(wrapper.attributes('role')).toBe('radiogroup')
  })

  it('default has user provided Id', () => {
    const wrapper = mount(BFormRadioGroup, {
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
    const wrapper = mount(BFormRadioGroup, {
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
    const wrapper = mount(BFormRadioGroup, {
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
    const wrapper = mount(BFormRadioGroup, {
      attachTo: createContainer(),
      global,
      props: {
        state: true,
      },
    })

    expect(wrapper.attributes('aria-invalid')).toBeUndefined()
  })

  it('default does not have attribute aria-invalid when state=undefined', () => {
    const wrapper = mount(BFormRadioGroup, {
      attachTo: createContainer(),
      global,
      props: {
        state: undefined,
      },
    })

    expect(wrapper.attributes('aria-invalid')).toBeUndefined()
  })

  it('default has attribute aria-invalid=true when aria-invalid=true', () => {
    const wrapper = mount(BFormRadioGroup, {
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
    const wrapper = mount(BFormRadioGroup, {
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
    const wrapper = mount(BFormRadioGroup, {
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
    const wrapper = mount(BFormRadioGroup, {
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
    const wrapper = mount(BFormRadioGroup, {
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
    const wrapper = mount(BFormRadioGroup, {
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
    const wrapper = mount(BFormRadioGroup, {
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
    const wrapper = mount(BFormRadioGroup, {
      attachTo: createContainer(),
      global,
      props: {
        modelValue: '',
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

    // Find all the labels with .btn class
    const $buttons = wrapper.findAll('label.btn')
    expect($buttons).toBeDefined()
    expect($buttons.length).toBe(3)
    // Expect them to have the correct variant classes
    expect($buttons[0].classes()).toContain('btn-primary')
    expect($buttons[1].classes()).toContain('btn-primary')
    expect($buttons[2].classes()).toContain('btn-danger')
  })

  // --- Functionality testing ---

  it('has radios via options array', () => {
    const wrapper = mount(BFormRadioGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: ['one', 'two', 'three'],
        modelValue: '',
      },
    })

    expect(wrapper.vm.modelValue).toEqual('')
    expect(wrapper.findAll('input[type=radio]').length).toBe(3)
  })

  it('has radios via options array which respect disabled', () => {
    const wrapper = mount(BFormRadioGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: [{text: 'one'}, {text: 'two'}, {text: 'three', disabled: true}],
        modelValue: '',
      },
    })

    expect(wrapper.vm.modelValue).toEqual('')
    expect(wrapper.classes()).toBeDefined()

    const $radios = wrapper.findAll('input[type=radio]')
    expect($radios.length).toBe(3)
    expect($radios[0].attributes('disabled')).toBeUndefined()
    expect($radios[1].attributes('disabled')).toBeUndefined()
    expect($radios[2].attributes('disabled')).toBeDefined()
  })

  it('has radios with attribute required when prop required set', async () => {
    const wrapper = mount(BFormRadioGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: ['one', 'two', 'three'],
        modelValue: '',
        required: true,
      },
    })

    // We need `$nextTick()` here since auto generated name is
    // computed in a `$nextTick()` on mount
    await nextTick()

    expect(wrapper.vm.modelValue).toEqual('')
    expect(wrapper.classes()).toBeDefined()

    const $radios = wrapper.findAll('input[type=radio]')
    expect($radios.length).toBe(3)
    $radios.forEach(($radio) => {
      expect($radio.attributes('required')).toBeDefined()
      expect($radio.attributes('aria-required')).toBe('true')
    })
  })

  it('emits change event when radio clicked', async () => {
    const wrapper = mount(BFormRadioGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: ['one', 'two', 'three'],
        modelValue: '',
      },
      attrs: {
        'onUpdate:modelValue': (modelValue) => wrapper.setProps({modelValue}),
      },
    })

    expect(wrapper.vm.modelValue).toEqual('')
    expect(wrapper.classes()).toBeDefined()

    const $radios = wrapper.findAll('input[type=radio]')
    expect($radios.length).toBe(3)

    await $radios[0].trigger('click')
    expect(wrapper.vm.modelValue).toEqual('one')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(1)
    expect(wrapper.emitted('change')[0][0]).toEqual('one')
    expect(wrapper.emitted('update:modelValue')).toBeDefined()
    expect(wrapper.emitted('update:modelValue').length).toBe(1)
    expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('one')

    await $radios[2].trigger('click')
    expect(wrapper.vm.modelValue).toEqual('three')
    expect(wrapper.emitted('change').length).toBe(2)
    expect(wrapper.emitted('change')[1][0]).toEqual('three')
    expect(wrapper.emitted('update:modelValue').length).toBe(2)
    expect(wrapper.emitted('update:modelValue')[1][0]).toEqual('three')

    await $radios[0].trigger('click')
    expect(wrapper.vm.modelValue).toEqual('one')
    expect(wrapper.emitted('change').length).toBe(3)
    expect(wrapper.emitted('change')[2][0]).toEqual('one')
    expect(wrapper.emitted('update:modelValue').length).toBe(3)
    expect(wrapper.emitted('update:modelValue')[2][0]).toEqual('one')
  })

  it('radios reflect group checked v-model', async () => {
    const wrapper = mount(BFormRadioGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: ['one', 'two', 'three'],
        modelValue: 'two',
      },
      attrs: {
        'onUpdate:modelValue': (modelValue) => wrapper.setProps({modelValue}),
      },
    })

    expect(wrapper.vm.modelValue).toEqual('two')
    expect(wrapper.classes()).toBeDefined()

    const $radios = wrapper.findAll('input[type=radio]')
    expect($radios.length).toBe(3)

    expect($radios[0].element.checked).toBe(false)
    expect($radios[1].element.checked).toBe(true)
    expect($radios[2].element.checked).toBe(false)

    await wrapper.setProps({modelValue: 'three'})
    await nextTick()
    await nextTick()

    expect(wrapper.vm.modelValue).toEqual('three')
    expect($radios[0].element.checked).toBe(false)
    expect($radios[1].element.checked).toBe(false)
    expect($radios[2].element.checked).toBe(true)
  })
})
