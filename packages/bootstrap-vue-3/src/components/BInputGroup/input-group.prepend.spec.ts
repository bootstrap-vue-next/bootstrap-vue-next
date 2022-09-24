import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BInputGroupAddon from './BInputGroupAddon.vue'
import BInputGroupPrepend from './BInputGroupPrepend.vue'

describe('input-group-prepend', () => {
  enableAutoUnmount(afterEach)

  it('child is BInputGroupAddon', () => {
    const wrapper = mount(BInputGroupPrepend)
    const $inputgroupaddon = wrapper.findComponent(BInputGroupAddon)
    expect($inputgroupaddon.exists()).toBe(true)
  })

  it('BInputGroupAddon is given prop isText', async () => {
    const wrapper = mount(BInputGroupPrepend, {
      props: {isText: true},
    })
    const $inputgroupaddon = wrapper.getComponent(BInputGroupAddon)
    expect($inputgroupaddon.props('isText')).toBe(true)
    await wrapper.setProps({isText: false})
    expect($inputgroupaddon.props('isText')).toBe(false)
  })

  it('renders default slot', () => {
    const wrapper = mount(BInputGroupPrepend, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })
})
