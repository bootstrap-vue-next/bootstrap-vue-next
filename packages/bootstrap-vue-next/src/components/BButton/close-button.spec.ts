import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCloseButton from './BCloseButton.vue'

describe('close-button', () => {
  enableAutoUnmount(afterEach)

  it('has static class btn-close', () => {
    const wrapper = mount(BCloseButton)
    expect(wrapper.classes()).toContain('btn-close')
  })

  it('has attr type to be button by default', () => {
    const wrapper = mount(BCloseButton)
    expect(wrapper.attributes('type')).toBe('button')
  })

  it('has attr type to be prop type', async () => {
    const wrapper = mount(BCloseButton, {
      props: {type: 'submit'},
    })
    expect(wrapper.attributes('type')).toBe('submit')
    await wrapper.setProps({type: 'reset'})
    expect(wrapper.attributes('type')).toBe('reset')
  })

  it('has default attr aria-label of Close', () => {
    const wrapper = mount(BCloseButton)
    expect(wrapper.attributes('aria-label')).toBe('Close')
  })

  it('has attr aria-label when prop ariaLabel', async () => {
    const wrapper = mount(BCloseButton, {
      props: {ariaLabel: 'foobar'},
    })
    expect(wrapper.attributes('aria-label')).toBe('foobar')
    await wrapper.setProps({ariaLabel: undefined})
    expect(wrapper.attributes('aria-label')).toBe('Close')
  })

  it('has attr disabled when prop disabled', async () => {
    const wrapper = mount(BCloseButton, {
      props: {disabled: true},
    })
    expect(wrapper.attributes('disabled')).toBe('')
    await wrapper.setProps({disabled: false})
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('is tag button', () => {
    const wrapper = mount(BCloseButton)
    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('emits click when clicked', async () => {
    const wrapper = mount(BCloseButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('click emit value is MouseEvent', async () => {
    const wrapper = mount(BCloseButton)
    await wrapper.trigger('click')
    const $emitted = wrapper.emitted('click') ?? []
    expect($emitted[0][0] instanceof MouseEvent).toBe(true)
  })
})
