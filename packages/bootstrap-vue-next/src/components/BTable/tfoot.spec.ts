import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTfoot from './BTfoot.vue'

describe('tfoot', () => {
  enableAutoUnmount(afterEach)

  it('has static attr role to be rowgroup', () => {
    const wrapper = mount(BTfoot)
    expect(wrapper.attributes('role')).toBe('rowgroup')
  })

  it('renders default slot', () => {
    const wrapper = mount(BTfoot, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('has class table-{type} when prop variant', async () => {
    const wrapper = mount(BTfoot, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('table-primary')
    await wrapper.setProps({variant: undefined})
    expect(wrapper.classes()).not.toContain('table-primary')
  })
})
