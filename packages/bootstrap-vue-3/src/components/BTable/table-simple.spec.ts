import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BTableSimple from './BTableSimple.vue'

describe('table-simple', () => {
  it('tag is div when prop responsive', () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true},
    })
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is table by default', () => {
    const wrapper = mount(BTableSimple)
    expect(wrapper.element.tagName).toBe('TABLE')
  })

  it('when tag is table, has static attr role as table', () => {
    const wrapper = mount(BTableSimple)
    expect(wrapper.attributes('role')).toBe('table')
  })

  it('renders default slot when tag is table', () => {
    const wrapper = mount(BTableSimple, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('has a nested table when tag is div', () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true},
    })
    const $table = wrapper.find('table')
    expect($table.exists()).toBe(true)
  })

  it('has static attr role as table on nested table when tag is div', () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true},
    })
    const $table = wrapper.get('table')
    expect($table.attributes('role')).toBe('table')
  })

  it('renders default slot in table when tag is div', () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true},
      slots: {default: 'foobar'},
    })
    const $table = wrapper.get('table')
    expect($table.text()).toBe('foobar')
  })
})
