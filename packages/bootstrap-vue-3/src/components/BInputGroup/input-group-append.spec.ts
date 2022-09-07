import {enableAutoUnmount, mount} from '@vue/test-utils'
import BInputGroupAppend from './BInputGroupAppend.vue'
import BInputGroupAddon from './BInputGroupAddon.vue'
import {afterEach, describe, expect, it} from 'vitest'

describe('input-group-append', () => {
  enableAutoUnmount(afterEach)

  it('child is BInputGroupAddon', () => {
    const wrapper = mount(BInputGroupAppend)
    const $inputgroupaddon = wrapper.findComponent(BInputGroupAddon)
    expect($inputgroupaddon.exists()).toBe(true)
  })

  it('BInputGroupAddon is given prop id', async () => {
    const wrapper = mount(BInputGroupAppend, {
      props: {id: 'foobar'},
    })
    const $inputgroupaddon = wrapper.getComponent(BInputGroupAddon)
    expect($inputgroupaddon.props('id')).toBe('foobar')
    await wrapper.setProps({id: 'foo'})
    expect($inputgroupaddon.props('id')).toBe('foo')
  })

  it('BInputGroupAddon is given prop isText', async () => {
    const wrapper = mount(BInputGroupAppend, {
      props: {isText: true},
    })
    const $inputgroupaddon = wrapper.getComponent(BInputGroupAddon)
    expect($inputgroupaddon.props('isText')).toBe(true)
    await wrapper.setProps({isText: false})
    expect($inputgroupaddon.props('isText')).toBe(false)
  })

  it('BInputGroupAddon is given prop tag', async () => {
    const wrapper = mount(BInputGroupAppend, {
      props: {tag: 'span'},
    })
    const $inputgroupaddon = wrapper.getComponent(BInputGroupAddon)
    expect($inputgroupaddon.props('tag')).toBe('span')
    await wrapper.setProps({tag: 'div'})
    expect($inputgroupaddon.props('tag')).toBe('div')
  })

  it('BInputGroupAddon is given prop append to be true', () => {
    const wrapper = mount(BInputGroupAppend)
    const $inputgroupaddon = wrapper.getComponent(BInputGroupAddon)
    expect($inputgroupaddon.props('append')).toBe(true)
  })
})
