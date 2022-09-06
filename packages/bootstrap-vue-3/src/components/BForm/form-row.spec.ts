import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BFormRow from './BFormRow.vue'

describe('form-row', () => {
  enableAutoUnmount(afterEach)

  it('tag is div by default', () => {
    const wrapper = mount(BFormRow)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BFormRow, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has static class row', () => {
    const wrapper = mount(BFormRow)
    expect(wrapper.classes()).toContain('row')
  })

  it('has static class d-flex', () => {
    const wrapper = mount(BFormRow)
    expect(wrapper.classes()).toContain('d-flex')
  })

  it('has static class flex-wrap', () => {
    const wrapper = mount(BFormRow)
    expect(wrapper.classes()).toContain('flex-wrap')
  })

  it('renders default slot', () => {
    const wrapper = mount(BFormRow, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toContain('foobar')
  })
})
