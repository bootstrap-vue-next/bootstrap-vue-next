import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BForm from './BForm.vue'

describe('form', () => {
  enableAutoUnmount(afterEach)

  it('tag is form', () => {
    const wrapper = mount(BForm)
    expect(wrapper.element.tagName).toBe('FORM')
  })

  it('has attr id to be prop id', async () => {
    const wrapper = mount(BForm, {
      props: {id: 'foobar'},
    })
    expect(wrapper.attributes('id')).toBe('foobar')
    await wrapper.setProps({id: undefined})
    expect(wrapper.attributes('id')).toBeUndefined()
  })

  it('has attr id to be prop novalidate', async () => {
    const wrapper = mount(BForm, {
      props: {novalidate: true},
    })
    expect(wrapper.attributes('novalidate')).toBe('')
    await wrapper.setProps({novalidate: false})
    expect(wrapper.attributes('novalidate')).toBeUndefined()
  })

  it('has class form-floating when prop floating', async () => {
    const wrapper = mount(BForm, {
      props: {floating: true},
    })
    expect(wrapper.classes()).toContain('form-floating')
    await wrapper.setProps({floating: false})
    expect(wrapper.classes()).not.toContain('form-floating')
  })

  it('has class was-validated when prop validated', async () => {
    const wrapper = mount(BForm, {
      props: {validated: true},
    })
    expect(wrapper.classes()).toContain('was-validated')
    await wrapper.setProps({validated: false})
    expect(wrapper.classes()).not.toContain('was-validated')
  })

  it('emits submit when event submit', async () => {
    const wrapper = mount(BForm)
    await wrapper.trigger('submit')
    expect(wrapper.emitted()).toHaveProperty('submit')
  })

  it('submit event is instanceOf Event', async () => {
    const wrapper = mount(BForm)
    await wrapper.trigger('submit')
    const $emitted = wrapper.emitted('submit') ?? []
    expect($emitted[0][0] instanceof Event).toBe(true)
  })
})
