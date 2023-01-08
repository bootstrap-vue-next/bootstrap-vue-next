import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTbody from './BTbody.vue'

describe('tbody', () => {
  enableAutoUnmount(afterEach)

  it('has static attr role as rowgroup', () => {
    const wrapper = mount(BTbody)
    expect(wrapper.attributes('role')).toBe('rowgroup')
  })

  it('renders default slot', () => {
    const wrapper = mount(BTbody, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('has class thead-{type} when prop variant', async () => {
    const wrapper = mount(BTbody, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('thead-primary')
    await wrapper.setProps({variant: undefined})
    expect(wrapper.classes()).not.toContain('thead-primary')
  })
})
