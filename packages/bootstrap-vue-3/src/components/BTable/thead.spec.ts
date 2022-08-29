import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BThead from './BThead.vue'

describe('thead', () => {
  enableAutoUnmount(afterEach)

  it('has static attr role to be rowgroup', () => {
    const wrapper = mount(BThead)
    expect(wrapper.attributes('role')).toBe('rowgroup')
  })

  it('renders default slot', () => {
    const wrapper = mount(BThead, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders class table-{type} when prop variant', async () => {
    const wrapper = mount(BThead, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('table-primary')
    await wrapper.setProps({variant: undefined})
    expect(wrapper.classes()).not.toContain('table-primary')
  })
})
