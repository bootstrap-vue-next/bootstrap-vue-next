import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTableSimple from './BTableSimple.vue'

describe('BTableSimple', () => {
  enableAutoUnmount(afterEach)

  it('has expected structure when responsive truthy', async () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true},
      slots: {default: 'foo'},
    })
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
    const $table = $div.find('table')
    expect($table.exists()).toBe(true)
    expect($table.text()).toBe('foo')
  })

  it('has expected structure when stickyheader truthy', async () => {
    const wrapper = mount(BTableSimple, {
      props: {stickyHeader: true},
      slots: {default: 'foo'},
    })
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
    const $table = $div.find('table')
    expect($table.exists()).toBe(true)
    expect($table.text()).toBe('foo')
  })

  it('has expected structure by default', () => {
    const wrapper = mount(BTableSimple, {
      slots: {default: 'foo'},
    })

    const $table = wrapper.find('table')
    expect($table.exists()).toBe(true)
    expect(wrapper.find('div').exists()).toBe(false)
    expect($table.text()).toBe('foo')
  })

  it('stickyHeader prop adds maxHeight style', async () => {
    const wrapper = mount(BTableSimple, {
      props: {stickyHeader: true, responsive: true},
    })
    expect(wrapper.get('div').attributes('style')).toBe('max-height: 300px;')
    await wrapper.setProps({stickyHeader: false})
    expect(wrapper.get('div').attributes('style')).toBeUndefined()
    await wrapper.setProps({stickyHeader: 200})
    expect(wrapper.get('div').attributes('style')).toBe('max-height: 200px;')
    await wrapper.setProps({stickyHeader: '400px'})
    expect(wrapper.get('div').attributes('style')).toBe('max-height: 400px;')
  })

  // TODO assert classes and attributes on elements
  // didn't test tableAttrs or responsiveClasses
})
