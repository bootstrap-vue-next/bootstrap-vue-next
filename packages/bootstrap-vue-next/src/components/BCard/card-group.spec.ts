import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardGroup from './BCardGroup.vue'

describe('card-group', () => {
  enableAutoUnmount(afterEach)

  it('is tag div by default', () => {
    const wrapper = mount(BCardGroup)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag prop tag', () => {
    const wrapper = mount(BCardGroup, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('renders default slot', () => {
    const wrapper = mount(BCardGroup, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('has class card-group', () => {
    const wrapper = mount(BCardGroup)
    expect(wrapper.classes()).toContain('card-group')
  })
})
