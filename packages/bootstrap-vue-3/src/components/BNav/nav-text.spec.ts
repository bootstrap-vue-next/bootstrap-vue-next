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
    expect(wrapper.text()).toEqual('foobar')
  })
})
