import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BAvatar from './BAvatar.vue'

describe('accordion', () => {
  it('has static b-avatar class', () => {
    const wrapper = mount(BAvatar)
    expect(wrapper.classes()).toContain('b-avatar')

    wrapper.unmount()
  })

  it('tag is default button when prop button is true', () => {
    const wrapper = mount(BAvatar, {
      props: {button: true},
    })
    expect(wrapper.element.tagName).toBe('BUTTON')

    wrapper.unmount()
  })

  it('tag is prop buttonType when prop button is true', () => {
    const wrapper = mount(BAvatar, {
      props: {button: true, buttonType: 'div'},
    })
    expect(wrapper.element.tagName).toBe('DIV')

    wrapper.unmount()
  })

  it('tag is default span', () => {
    const wrapper = mount(BAvatar)
    expect(wrapper.element.tagName).toBe('SPAN')

    wrapper.unmount()
  })

  // TODO not done
})
