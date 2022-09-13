import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BNavText from './BNavText.vue'

describe('nav-text', () => {
  enableAutoUnmount(afterEach)

  it('has class navbar-text', () => {
    const wrapper = mount(BNavText)
    expect(wrapper.classes()).toContain('navbar-text')
  })

  it('is tag li', () => {
    const wrapper = mount(BNavText)
    expect(wrapper.element.tagName).toBe('LI')
  })

  it('renders content from default slot', () => {
    const wrapper = mount(BNavText, {
      slots: {
        default: 'foobar',
      },
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders content from prop text', () => {
    const wrapper = mount(BNavText, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('prefers to render default slot over prop text', () => {
    const wrapper = mount(BNavText, {
      props: {text: 'props'},
      slots: {default: 'slots'},
    })
    expect(wrapper.text()).toBe('slots')
  })
})
