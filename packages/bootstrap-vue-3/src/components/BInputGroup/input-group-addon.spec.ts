import {enableAutoUnmount, mount} from '@vue/test-utils'
import BInputGroupAddon from './BInputGroupAddon.vue'
import BInputGroupText from './BInputGroupText.vue'
import {afterEach, describe, expect, it} from 'vitest'

describe('input-group-addon', () => {
  enableAutoUnmount(afterEach)

  it('tag is div by default', () => {
    const wrapper = mount(BInputGroupAddon)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BInputGroupAddon, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has attr id when prop id', async () => {
    const wrapper = mount(BInputGroupAddon, {
      props: {id: 'foobar'},
    })
    expect(wrapper.attributes('id')).toBe('foobar')
    await wrapper.setProps({id: 'bar'})
    expect(wrapper.attributes('id')).toBe('bar')
  })

  it('has static class d-flex', () => {
    const wrapper = mount(BInputGroupAddon)
    expect(wrapper.classes()).toContain('d-flex')
  })

  it('has class input-group-append when prop append', () => {
    const wrapper = mount(BInputGroupAddon, {
      props: {append: true},
    })
    expect(wrapper.classes()).toContain('input-group-append')
  })

  it('has class input-group-prepend when prop append is false', () => {
    const wrapper = mount(BInputGroupAddon, {
      props: {append: false},
    })
    expect(wrapper.classes()).toContain('input-group-prepend')
  })

  it('has BInputGroupText when prop isText', () => {
    const wrapper = mount(BInputGroupAddon, {
      props: {isText: true},
    })
    const $inputgrouptext = wrapper.findComponent(BInputGroupText)
    expect($inputgrouptext.exists()).toBe(true)
  })

  it('does not have BInputGroupText when prop not isText', () => {
    const wrapper = mount(BInputGroupAddon, {
      props: {isText: false},
    })
    const $inputgrouptext = wrapper.findComponent(BInputGroupText)
    expect($inputgrouptext.exists()).toBe(false)
  })

  it('BInputGroupText renders default slot', () => {
    const wrapper = mount(BInputGroupAddon, {
      props: {isText: true},
      slots: {default: 'foobar'},
    })
    const $inputgrouptext = wrapper.getComponent(BInputGroupText)
    expect($inputgrouptext.text()).toBe('foobar')
  })

  it('renders default slot', () => {
    const wrapper = mount(BInputGroupAddon, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })
})
