import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTr from './BTr.vue'

describe('tr', () => {
  enableAutoUnmount(afterEach)

  it('renders default slot', () => {
    const wrapper = mount(BTr, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders class table-{type} when prop variant', async () => {
    const wrapper = mount(BTr, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('table-primary')
    await wrapper.setProps({variant: undefined})
    expect(wrapper.classes()).not.toContain('table-primary')
  })
})
