import BFormSpinbutton from './BFormSpinButton.vue'
import {afterEach, describe, expect, it, vi} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
describe('form-spin-button', () => {
  enableAutoUnmount(afterEach)
  // --- Structure, class and attributes tests ---

  it('tag is div', () => {
    const wrapper = mount(BFormSpinbutton)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has static classes', () => {
    const wrapper = mount(BFormSpinbutton)
    expect(wrapper.classes()).toContain('b-form-spinbutton')
    expect(wrapper.classes()).toContain('form-control')
    expect(wrapper.classes()).toContain('d-flex')
    expect(wrapper.classes()).not.toContain('d-inline-flex')
    expect(wrapper.classes()).not.toContain('flex-column')
    expect(wrapper.classes()).toContain('align-items-stretch')
    // expect(wrapper.attributes('role')).toEqual('group')
    //   expect(wrapper.attributes('tabindex')).toEqual('-1')
  })
  // Should have 4 child elements (btn, hidden,output, btn) REVIEW
  it('button has four children', () => {
    const wrapper = mount(BFormSpinbutton)
    expect(wrapper.findAll('.b-form-spinbutton > *').length).toBe(4)
  })

  it('decrement button', () => {
    const wrapper = mount(BFormSpinbutton)
    const $decrement = wrapper.find('[aria-label="Decrement"]')
    expect($decrement.exists()).toBe(true)
    expect($decrement.element.tagName).toBe('BUTTON')
    expect($decrement.attributes('tabindex')).toEqual('-1')
    expect($decrement.attributes('aria-keyshortcuts')).toEqual('ArrowDown')
  })

  it('increment button', () => {
    const wrapper = mount(BFormSpinbutton)
    const $increment = wrapper.find('[aria-label="Increment"]')
    expect($increment.exists()).toBe(true)
    expect($increment.element.tagName).toBe('BUTTON')
    expect($increment.attributes('tabindex')).toEqual('-1')
    expect($increment.attributes('aria-keyshortcuts')).toEqual('ArrowUp')
  })

  it('output button', async () => {
    const wrapper = mount(BFormSpinbutton)
    const $output = wrapper.find('output')
    expect($output.exists()).toBe(true)
    expect($output.attributes('role')).toEqual('spinbutton')
    expect($output.attributes('tabindex')).toEqual('0')
    expect($output.attributes('aria-live')).toEqual('off')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    // These two attribute should not exist on the element
    expect($output.element.hasAttribute('aria-valuenow')).toBe(false)
    expect($output.element.hasAttribute('aria-valuetext')).toBe(false)
    expect($output.text()).toEqual('')

    await wrapper.setProps({
      placeholder: 'foobar',
    })

    expect($output.text()).toEqual('foobar')
  })

  it('has expected structure when value set', async () => {
    const wrapper = mount(BFormSpinbutton, {
      propsData: {
        min: 0,
        max: 10,
        modelValue: 5,
      },
    })
    expect(wrapper.vm).toBeDefined()
    expect(wrapper.classes()).toContain('b-form-spinbutton')
    expect(wrapper.classes()).toContain('form-control')
    expect(wrapper.classes()).toContain('d-flex')
    expect(wrapper.classes()).not.toContain('d-inline-flex')
    expect(wrapper.classes()).not.toContain('flex-column')
    expect(wrapper.classes()).toContain('align-items-stretch')
    expect(wrapper.attributes('role')).toEqual('group')
    expect(wrapper.attributes('tabindex')).toEqual('-1')

    // Should have 3 child elements (btn, output, btn)
    // expect(wrapper.findAll('.b-form-spinbutton > *').length).toBe(3)

    const $decrement = wrapper.find('[aria-label="Decrement"]')
    expect($decrement.exists()).toBe(true)
    expect($decrement.element.tagName).toBe('BUTTON')
    expect($decrement.attributes('tabindex')).toEqual('-1')
    expect($decrement.attributes('aria-keyshortcuts')).toEqual('ArrowDown')

    const $increment = wrapper.find('[aria-label="Increment"]')
    expect($increment.exists()).toBe(true)
    expect($increment.element.tagName).toBe('BUTTON')
    expect($increment.attributes('tabindex')).toEqual('-1')
    expect($increment.attributes('aria-keyshortcuts')).toEqual('ArrowUp')

    const $output = wrapper.find('output')
    expect($output.exists()).toBe(true)
    expect($output.attributes('role')).toEqual('spinbutton')
    expect($output.attributes('tabindex')).toEqual('0')
    expect($output.attributes('aria-live')).toEqual('off')
    expect($output.attributes('aria-valuemin')).toEqual('0')
    expect($output.attributes('aria-valuemax')).toEqual('10')
    expect($output.attributes('aria-valuenow')).toEqual('5')
    expect($output.attributes('aria-valuetext')).toEqual('5')

    await wrapper.setProps({
      modelValue: 8,
    })

    expect($output.attributes('aria-valuemin')).toEqual('0')
    expect($output.attributes('aria-valuemax')).toEqual('10')
    expect($output.attributes('aria-valuenow')).toEqual('8')
    expect($output.attributes('aria-valuetext')).toEqual('8')
  })

  it('has expected structure when prop inline set', async () => {
    const wrapper = mount(BFormSpinbutton, {
      propsData: {
        inline: true,
      },
    })
    expect(wrapper.vm).toBeDefined()

    expect(wrapper.classes()).toContain('b-form-spinbutton')
    expect(wrapper.classes()).toContain('form-control')
    expect(wrapper.classes()).toContain('d-inline-flex')
    expect(wrapper.classes()).not.toContain('d-flex')
    expect(wrapper.classes()).not.toContain('flex-column')
    expect(wrapper.classes()).toContain('align-items-stretch')
    expect(wrapper.attributes('role')).toEqual('group')
    expect(wrapper.attributes('tabindex')).toEqual('-1')

    // Should have 3 child elements (btn, output, btn)
    // expect(wrapper.findAll('.b-form-spinbutton > *').length).toBe(3)

    const $decrement = wrapper.find('[aria-label="Decrement"]')
    expect($decrement.exists()).toBe(true)
    expect($decrement.element.tagName).toBe('BUTTON')
    expect($decrement.attributes('tabindex')).toEqual('-1')
    expect($decrement.attributes('aria-keyshortcuts')).toEqual('ArrowDown')

    const $increment = wrapper.find('[aria-label="Increment"]')
    expect($increment.exists()).toBe(true)
    expect($increment.element.tagName).toBe('BUTTON')
    expect($increment.attributes('tabindex')).toEqual('-1')
    expect($increment.attributes('aria-keyshortcuts')).toEqual('ArrowUp')

    const $output = wrapper.find('output')
    expect($output.exists()).toBe(true)
    expect($output.attributes('role')).toEqual('spinbutton')
    expect($output.attributes('tabindex')).toEqual('0')
    expect($output.attributes('aria-live')).toEqual('off')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    // These two attribute should not exist on the element
    expect($output.element.hasAttribute('aria-valuenow')).toBe(false)
    expect($output.element.hasAttribute('aria-valuetext')).toBe(false)
  })

  it('has expected structure when prop vertical set', async () => {
    const wrapper = mount(BFormSpinbutton, {
      propsData: {
        vertical: true,
      },
    })

    expect(wrapper.vm).toBeDefined()

    expect(wrapper.classes()).toContain('b-form-spinbutton')
    expect(wrapper.classes()).toContain('form-control')
    expect(wrapper.classes()).toContain('d-inline-flex')
    expect(wrapper.classes()).not.toContain('d-flex')
    expect(wrapper.classes()).toContain('flex-column')
    expect(wrapper.classes()).not.toContain('align-items-stretch')
    expect(wrapper.attributes('role')).toEqual('group')
    expect(wrapper.attributes('tabindex')).toEqual('-1')

    // Should have 3 child elements (btn, output, btn)
    // expect(wrapper.findAll('.b-form-spinbutton > *').length).toBe(3)

    const $decrement = wrapper.find('[aria-label="Decrement"]')
    expect($decrement.exists()).toBe(true)
    expect($decrement.element.tagName).toBe('BUTTON')
    expect($decrement.attributes('tabindex')).toEqual('-1')
    expect($decrement.attributes('aria-keyshortcuts')).toEqual('ArrowDown')

    const $increment = wrapper.find('[aria-label="Increment"]')
    expect($increment.exists()).toBe(true)
    expect($increment.element.tagName).toBe('BUTTON')
    expect($increment.attributes('tabindex')).toEqual('-1')
    expect($increment.attributes('aria-keyshortcuts')).toEqual('ArrowUp')

    const $output = wrapper.find('output')
    expect($output.exists()).toBe(true)
    expect($output.attributes('role')).toEqual('spinbutton')
    expect($output.attributes('tabindex')).toEqual('0')
    expect($output.attributes('aria-live')).toEqual('off')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    // These two attribute should not exist on the element
    expect($output.element.hasAttribute('aria-valuenow')).toBe(false)
    expect($output.element.hasAttribute('aria-valuetext')).toBe(false)
  })

  it('renders hidden input when name set', async () => {
    const wrapper = mount(BFormSpinbutton, {
      propsData: {
        name: 'foobar',
        modelValue: null,
      },
    })
    expect(wrapper.vm).toBeDefined()

    expect(wrapper.classes()).toContain('form-control')
    expect(wrapper.classes()).toContain('b-form-spinbutton')

    const $hidden = wrapper.find('input[type="hidden"]')
    expect($hidden.exists()).toBe(true)
    expect($hidden.attributes('name')).toBe('foobar')
    // empty value fields '' will now be undefined
    expect($hidden.attributes('value')).toBeUndefined()

    await wrapper.setProps({
      modelValue: 50,
    })
    expect($hidden.attributes('name')).toBe('foobar')
    expect($hidden.attributes('value')).toBe('50')
  })

  it('basic +/- buttons click', async () => {
    const wrapper = mount(BFormSpinbutton, {
      attachTo: document.body,
    })
    expect(wrapper.vm).toBeDefined()

    const $output = wrapper.find('output')
    expect($output.exists()).toBe(true)
    expect($output.attributes('role')).toEqual('spinbutton')
    expect($output.attributes('tabindex')).toEqual('0')
    expect($output.attributes('aria-live')).toEqual('off')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    // These two attribute should not exist on the element
    expect($output.element.hasAttribute('aria-valuenow')).toBe(false)
    expect($output.element.hasAttribute('aria-valuetext')).toBe(false)

    const $increment = wrapper.find('[aria-label="Increment"]')
    expect($increment.exists()).toBe(true)
    const $decrement = wrapper.find('[aria-label="Decrement"]')
    expect($decrement.exists()).toBe(true)

    await $decrement.trigger('mousedown')
    await $decrement.trigger('mouseup')

    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    expect($output.attributes('aria-valuenow')).toEqual('1')
    // expect($output.attributes('aria-valuetext')).toEqual('1')
    await $increment.trigger('mousedown')
    await $increment.trigger('mouseup')

    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    expect($output.attributes('aria-valuenow')).toEqual('2')
    expect($output.attributes('aria-valuetext')).toEqual('2')

    await $increment.trigger('mousedown')
    await $increment.trigger('mouseup')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    expect($output.attributes('aria-valuenow')).toEqual('3')
    expect($output.attributes('aria-valuetext')).toEqual('3')

    await $decrement.trigger('mousedown')
    await $decrement.trigger('mouseup')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    expect($output.attributes('aria-valuenow')).toEqual('2')
    expect($output.attributes('aria-valuetext')).toEqual('2')

    await $decrement.trigger('mousedown')
    await $decrement.trigger('mouseup')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    expect($output.attributes('aria-valuenow')).toEqual('1')
    expect($output.attributes('aria-valuetext')).toEqual('1')

    await $decrement.trigger('mousedown')
    await $decrement.trigger('mouseup')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    // `wrap` is off so it should not change to `1`
    expect($output.attributes('aria-valuenow')).toEqual('1')
    expect($output.attributes('aria-valuetext')).toEqual('1')

    await wrapper.setProps({wrap: true})
    await $decrement.trigger('mousedown')
    await $decrement.trigger('mouseup')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    // wrap is on so it should change to 100
    expect($output.attributes('aria-valuenow')).toEqual('100')
    expect($output.attributes('aria-valuetext')).toEqual('100')

    await $increment.trigger('mousedown')
    await $increment.trigger('mouseup')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    // wrap is on so it should change to 1
    expect($output.attributes('aria-valuenow')).toEqual('1')
    expect($output.attributes('aria-valuetext')).toEqual('1')

    await wrapper.setProps({disabled: true})
    await $increment.trigger('mousedown')
    await $increment.trigger('mouseup')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    // Disabled so should not change
    expect($output.attributes('aria-valuenow')).toEqual('1')
    expect($output.attributes('aria-valuetext')).toEqual('1')

    await $decrement.trigger('mousedown')
    await $decrement.trigger('mouseup')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    // Disabled so should not change
    expect($output.attributes('aria-valuenow')).toEqual('1')
    expect($output.attributes('aria-valuetext')).toEqual('1')

    await wrapper.setProps({
      disabled: false,
      readonly: true,
    })
    await $increment.trigger('mousedown')
    await $increment.trigger('mouseup')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    // Readonly so should not change
    expect($output.attributes('aria-valuenow')).toEqual('1')
    expect($output.attributes('aria-valuetext')).toEqual('1')

    await $decrement.trigger('mousedown')
    await $decrement.trigger('mouseup')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    // Readonly so should not change
    expect($output.attributes('aria-valuenow')).toEqual('1')
    expect($output.attributes('aria-valuetext')).toEqual('1')

    await wrapper.setProps({
      disabled: false,
      readonly: false,
    })
    // // Touch events should work as well
    await $increment.trigger('touchstart')
    await $increment.trigger('touchend')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    expect($output.attributes('aria-valuenow')).toEqual('2')
    expect($output.attributes('aria-valuetext')).toEqual('2')

    await $decrement.trigger('touchstart')
    await $decrement.trigger('touchend')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    expect($output.attributes('aria-valuenow')).toEqual('1')
    expect($output.attributes('aria-valuetext')).toEqual('1')
  })
  it('basic keyboard control works', async () => {
    const wrapper = mount(BFormSpinbutton, {
      attachTo: document.body,
    })
    expect(wrapper.vm).toBeDefined()

    const $output = wrapper.find('output')
    expect($output.exists()).toBe(true)
    expect($output.attributes('role')).toEqual('spinbutton')
    expect($output.attributes('tabindex')).toEqual('0')
    expect($output.attributes('aria-live')).toEqual('off')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    // These two attribute should not exist on the element
    expect($output.element.hasAttribute('aria-valuenow')).toBe(false)
    expect($output.element.hasAttribute('aria-valuetext')).toBe(false)

    // We need to specify keyCode as using event string will default with
    // hex code
    await wrapper.trigger('keydown', {keyCode: 'ArrowDown'})
    await wrapper.trigger('keyup', {keyCode: 'ArrowDown'})

    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    expect($output.attributes('aria-valuenow')).toEqual('1')
    expect($output.attributes('aria-valuetext')).toEqual('1')

    await wrapper.trigger('keydown', {keyCode: 'ArrowDown'})
    await wrapper.trigger('keyup', {keyCode: 'ArrowDown'})
    await wrapper.trigger('keydown', {keyCode: 'ArrowUp'})
    await wrapper.trigger('keyup', {keyCode: 'ArrowUp'})

    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    expect($output.attributes('aria-valuenow')).toEqual('2')
    expect($output.attributes('aria-valuetext')).toEqual('2')

    await wrapper.trigger('keydown', {keyCode: 'End'})
    await wrapper.trigger('keyup', {keyCode: 'End'})
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    expect($output.attributes('aria-valuenow')).toEqual('100')
    expect($output.attributes('aria-valuetext')).toEqual('100')

    await wrapper.trigger('keydown', {keyCode: 'ArrowDown'})
    await wrapper.trigger('keyup', {keyCode: 'ArrowDown'})
    await wrapper.trigger('keydown', {keyCode: 'ArrowUp'})
    await wrapper.trigger('keyup', {keyCode: 'ArrowUp'})
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    // `wrap` is off so it should not change to `1`
    expect($output.attributes('aria-valuenow')).toEqual('100')
    expect($output.attributes('aria-valuetext')).toEqual('100')

    await wrapper.trigger('keydown', {keyCode: 'ArrowDown'})
    await wrapper.trigger('keyup', {keyCode: 'ArrowDown'})
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    expect($output.attributes('aria-valuenow')).toEqual('99')
    expect($output.attributes('aria-valuetext')).toEqual('99')

    await wrapper.trigger('keydown', {keyCode: 'ArrowDown'})
    await wrapper.trigger('keyup', {keyCode: 'ArrowDown'})
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    expect($output.attributes('aria-valuenow')).toEqual('98')
    expect($output.attributes('aria-valuetext')).toEqual('98')

    await wrapper.trigger('keydown', {keyCode: 'Home'})
    await wrapper.trigger('keyup', {keyCode: 'Home'})
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    expect($output.attributes('aria-valuenow')).toEqual('1')
    expect($output.attributes('aria-valuetext')).toEqual('1')

    await wrapper.trigger('keydown.down')
    await wrapper.trigger('keyup.down')
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    // `wrap` is off so it should not change to `1`
    expect($output.attributes('aria-valuenow')).toEqual('1')
    expect($output.attributes('aria-valuetext')).toEqual('1')

    await wrapper.trigger('keydown', {keyCode: 'PageUp'})
    await wrapper.trigger('keyup', {keyCode: 'PageUp'})
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    // Default jump is `4`
    expect($output.attributes('aria-valuenow')).toEqual('5')
    expect($output.attributes('aria-valuetext')).toEqual('5')

    await wrapper.trigger('keydown', {keyCode: 'PageUp'})
    await wrapper.trigger('keyup', {keyCode: 'PageUp'})
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    // Default jump is `4`
    expect($output.attributes('aria-valuenow')).toEqual('9')
    expect($output.attributes('aria-valuetext')).toEqual('9')

    await wrapper.trigger('keydown', {keyCode: 'PageDown'})
    await wrapper.trigger('keyup', {keyCode: 'PageDown'})
    expect($output.attributes('aria-valuemin')).toEqual('1')
    expect($output.attributes('aria-valuemax')).toEqual('100')
    // Default jump is `4`
    expect($output.attributes('aria-valuenow')).toEqual('5')
    expect($output.attributes('aria-valuetext')).toEqual('5')
  })

  it('auto repeat works', async () => {
    vi.useFakeTimers()

    const wrapper = mount(BFormSpinbutton, {
      attachTo: document.body,
      props: {
        min: 1,
        max: 100,
        step: 1,
        modelValue: 1,
      },
    })

    expect(wrapper.vm).toBeDefined()

    const $output = wrapper.find('output')

    // We need to specify keyCode as using event string will default with
    // hex code
    await wrapper.trigger('keydown', {keyCode: 'ArrowDown'})
    await wrapper.trigger('keyup', {keyCode: 'ArrowDown'})
    await wrapper.trigger('keydown', {keyCode: 'ArrowUp'})
    // await wrapper.trigger('keyup', {keyCode: 'ArrowUp'})

    //TODO this will need to catch the modelValue info....
    // expect($output.attributes('aria-valuemin')).toEqual('1')
    // expect($output.attributes('aria-valuemax')).toEqual('100')
    // expect($output.attributes('aria-valuenow')).toEqual('2')
    // expect($output.attributes('aria-valuetext')).toEqual('2')

    // const $output = wrapper.find('output')
    // expect($output.exists()).toBe(true)
    // expect($output.attributes('role')).toEqual('spinbutton')
    // expect($output.attributes('tabindex')).toEqual('0')
    // expect($output.attributes('aria-live')).toEqual('off')
    // expect($output.attributes('aria-valuemin')).toEqual('1')
    // expect($output.attributes('aria-valuemax')).toEqual('100')
    // expect($output.attributes('aria-valuenow')).toEqual('1')
    // expect($output.attributes('aria-valuetext')).toEqual('1')
    // expect(wrapper.emitted('input')).toBeUndefined()
    // expect(wrapper.emitted('change')).toBeUndefined()

    // await wrapper.trigger('keydown', {keyCode: 'ArrowDown'})
    // await wrapper.trigger('keyup', {keyCode: 'ArrowDown'})
    // await wrapper.trigger('keydown', {keyCode: 'ArrowUp'})
    // await wrapper.trigger('keyup', {keyCode: 'ArrowUp'})

    // expect($output.attributes('aria-valuenow')).toEqual('2')
    // expect($output.attributes('aria-valuetext')).toEqual('2')
    // expect(wrapper.emitted('input')).toBeDefined()
    // expect(wrapper.emitted('input').length).toBe(1)
    // expect(wrapper.emitted('change')).toBeUndefined()

    // // Advance past delay time
    // jest.runOnlyPendingTimers()
    // await waitNT(wrapper.vm)
    // await waitRAF()
    // // Now we have to wait for interval to happen
    // expect($output.attributes('aria-valuenow')).toEqual('2')
    // expect($output.attributes('aria-valuetext')).toEqual('2')
    // expect(wrapper.emitted('input').length).toBe(1)
    // expect(wrapper.emitted('change')).toBeUndefined()

    // // Advance past interval time
    // // Repeat #1
    // jest.runOnlyPendingTimers()
    // await waitNT(wrapper.vm)
    // await waitRAF()
    // expect($output.attributes('aria-valuenow')).toEqual('3')
    // expect($output.attributes('aria-valuetext')).toEqual('3')
    // expect(wrapper.emitted('input').length).toBe(2)
    // expect(wrapper.emitted('change')).toBeUndefined()

    // // Repeat #2
    // jest.runOnlyPendingTimers()
    // await waitNT(wrapper.vm)
    // await waitRAF()
    // expect($output.attributes('aria-valuenow')).toEqual('4')
    // expect($output.attributes('aria-valuetext')).toEqual('4')
    // expect(wrapper.emitted('input').length).toBe(3)
    // expect(wrapper.emitted('change')).toBeUndefined()

    // // Repeat #3
    // jest.runOnlyPendingTimers()
    // await waitNT(wrapper.vm)
    // await waitRAF()
    // expect($output.attributes('aria-valuenow')).toEqual('5')
    // expect($output.attributes('aria-valuetext')).toEqual('5')
    // expect(wrapper.emitted('input').length).toBe(4)
    // expect(wrapper.emitted('change')).toBeUndefined()

    // // Repeat #4
    // jest.runOnlyPendingTimers()
    // await waitNT(wrapper.vm)
    // await waitRAF()
    // expect($output.attributes('aria-valuenow')).toEqual('6')
    // expect($output.attributes('aria-valuetext')).toEqual('6')
    // expect(wrapper.emitted('input').length).toBe(5)
    // expect(wrapper.emitted('change')).toBeUndefined()

    // // Repeat #5
    // jest.runOnlyPendingTimers()
    // await waitNT(wrapper.vm)
    // await waitRAF()
    // expect($output.attributes('aria-valuenow')).toEqual('7')
    // expect($output.attributes('aria-valuetext')).toEqual('7')
    // expect(wrapper.emitted('input').length).toBe(6)
    // expect(wrapper.emitted('change')).toBeUndefined()

    // // Repeat #6
    // jest.runOnlyPendingTimers()
    // await waitNT(wrapper.vm)
    // await waitRAF()
    // expect($output.attributes('aria-valuenow')).toEqual('8')
    // expect($output.attributes('aria-valuetext')).toEqual('8')
    // expect(wrapper.emitted('input').length).toBe(7)
    // expect(wrapper.emitted('change')).toBeUndefined()

    // // Repeat #7
    // jest.runOnlyPendingTimers()
    // await waitNT(wrapper.vm)
    // await waitRAF()
    // expect($output.attributes('aria-valuenow')).toEqual('9')
    // expect($output.attributes('aria-valuetext')).toEqual('9')
    // expect(wrapper.emitted('input').length).toBe(8)
    // expect(wrapper.emitted('change')).toBeUndefined()

    // // Repeat #8
    // jest.runOnlyPendingTimers()
    // await waitNT(wrapper.vm)
    // await waitRAF()
    // expect($output.attributes('aria-valuenow')).toEqual('10')
    // expect($output.attributes('aria-valuetext')).toEqual('10')
    // expect(wrapper.emitted('input').length).toBe(9)
    // expect(wrapper.emitted('change')).toBeUndefined()

    // // Repeat #9
    // jest.runOnlyPendingTimers()
    // await waitNT(wrapper.vm)
    // await waitRAF()
    // expect($output.attributes('aria-valuenow')).toEqual('11')
    // expect($output.attributes('aria-valuetext')).toEqual('11')
    // expect(wrapper.emitted('input').length).toBe(10)
    // expect(wrapper.emitted('change')).toBeUndefined()

    // // Repeat #10
    // jest.runOnlyPendingTimers()
    // await waitNT(wrapper.vm)
    // await waitRAF()
    // expect($output.attributes('aria-valuenow')).toEqual('12')
    // expect($output.attributes('aria-valuetext')).toEqual('12')
    // expect(wrapper.emitted('input').length).toBe(11)
    // expect(wrapper.emitted('change')).toBeUndefined()

    // // Repeat #11 - Multiplier kicks in
    // jest.runOnlyPendingTimers()
    // await waitNT(wrapper.vm)
    // await waitRAF()
    // // Note even though step is `4`, it jumps to `17` (not `16`) as it rounds to the
    // // nearest multiple of step (relative to the min value, which is `1` in this test)
    // // If min was set to `0`, then this would have been `16`
    // expect($output.attributes('aria-valuenow')).toEqual('17')
    // expect($output.attributes('aria-valuetext')).toEqual('17')
    // expect(wrapper.emitted('input').length).toBe(12)
    // expect(wrapper.emitted('change')).toBeUndefined()

    // // Repeat #12
    // jest.runOnlyPendingTimers()
    // await waitNT(wrapper.vm)
    // await waitRAF()
    // expect($output.attributes('aria-valuenow')).toEqual('21')
    // expect($output.attributes('aria-valuetext')).toEqual('21')
    // expect(wrapper.emitted('input').length).toBe(13)
    // expect(wrapper.emitted('change')).toBeUndefined()

    // // Un-press key
    // await wrapper.trigger('keyup.up')
    // expect($output.attributes('aria-valuenow')).toEqual('21')
    // expect($output.attributes('aria-valuetext')).toEqual('21')
    // expect(wrapper.emitted('input').length).toBe(13)
    // expect(wrapper.emitted('change')).toBeDefined()
    // expect(wrapper.emitted('change').length).toBe(1)
  })
})
