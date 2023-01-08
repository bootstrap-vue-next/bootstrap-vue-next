import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BInputGroupAddon from './BInputGroupAddon.vue'
import BInputGroupText from './BInputGroupText.vue'

describe('input-group-addon', () => {
  enableAutoUnmount(afterEach)

  it('is not wrapped in BInputGroupText when not prop isText', () => {
    const wrapper = mount(BInputGroupAddon, {
      props: {isText: false},
    })
    const $inputgrouptext = wrapper.findComponent(BInputGroupText)
    expect($inputgrouptext.exists()).toBe(false)
  })

  it('is wrapped in BInputGroupText when not isText', () => {
    const wrapper = mount(BInputGroupAddon, {
      props: {isText: true},
    })
    const $inputgrouptext = wrapper.findComponent(BInputGroupText)
    expect($inputgrouptext.exists()).toBe(true)
  })

  it('renders default slot when not prop isText', () => {
    const wrapper = mount(BInputGroupAddon, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders default slot in BInputGroupText when not prop isText', () => {
    const wrapper = mount(BInputGroupAddon, {
      slots: {default: 'foobar'},
      props: {isText: true},
    })
    const $inputgrouptext = wrapper.getComponent(BInputGroupText)
    expect($inputgrouptext.text()).toBe('foobar')
  })
})
