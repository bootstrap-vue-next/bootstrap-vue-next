import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BNavText from './BNavText.vue'

describe('nav-text', () => {
  it('has class navbar-text', () => {
    const wrapper = mount(BNavText)
    expect(wrapper.classes()).toContain('navbar-text')

    wrapper.unmount()
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

    wrapper.unmount()
  })
})
