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

  it('has attr type to be prop type', () => {
    const wrapper = mount(BCloseButton, {
      props: {type: 'submit'},
    })
    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('has attr aria-label when prop ariaLabel', async () => {
    const wrapper = mount(BCloseButton, {
      props: {ariaLabel: 'foobar'},
    })
    expect(wrapper.attributes('aria-label')).toBe('foobar')
    await wrapper.setProps({ariaLabel: undefined})
    expect(wrapper.attributes('aria-label')).toBe('Close')
  })

  it('has class btn-close-white when prop white', () => {
    const wrapper = mount(BCloseButton, {
      props: {white: true},
    })
    expect(wrapper.classes()).toContain('btn-close-white')
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
})
