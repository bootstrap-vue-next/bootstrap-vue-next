import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTabs from './BTabs.vue'

describe('tabs', () => {
  enableAutoUnmount(afterEach)

  it('tag is default div', () => {
    const wrapper = mount(BTabs)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('attr id is undefined by default', () => {
    const wrapper = mount(BTabs)
    expect(wrapper.attributes('id')).toBeUndefined()
  })

  it('attr id is prop id', () => {
    const wrapper = mount(BTabs, {
      props: {id: 'foobar'},
    })
    expect(wrapper.attributes('id')).toBe('foobar')
  })

  it('has static class tabs', () => {
    const wrapper = mount(BTabs)
    expect(wrapper.classes()).toContain('tabs')
  })

  it('has class d-flex if prop vertical', async () => {
    const wrapper = mount(BTabs, {
      props: {vertical: true},
    })
    expect(wrapper.classes()).toContain('d-flex')
    await wrapper.setProps({vertical: false})
    expect(wrapper.classes()).not.toContain('d-flex')
  })

  it('has class align-items-start if prop vertical', async () => {
    const wrapper = mount(BTabs, {
      props: {vertical: true},
    })
    expect(wrapper.classes()).toContain('align-items-start')
    await wrapper.setProps({vertical: false})
    expect(wrapper.classes()).not.toContain('align-items-start')
  })
})
