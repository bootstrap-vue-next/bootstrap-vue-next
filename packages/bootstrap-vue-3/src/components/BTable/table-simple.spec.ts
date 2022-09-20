import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTableSimple from './BTableSimple.vue'

describe('table-simple', () => {
  enableAutoUnmount(afterEach)

  it('tag is table by default', () => {
    const wrapper = mount(BTableSimple)
    expect(wrapper.element.tagName).toBe('TABLE')
  })

  it('has element table by default', () => {
    const wrapper = mount(BTableSimple)
    const $table = wrapper.find('table')
    expect($table.exists()).toBe(true)
  })

  it('table renders default slot', () => {
    const wrapper = mount(BTableSimple, {
      slots: {default: 'foobar'},
    })
    const $table = wrapper.get('table')
    expect($table.text()).toBe('foobar')
  })

  it('table has static attr role to be table', () => {
    const wrapper = mount(BTableSimple)
    const $table = wrapper.get('table')
    expect($table.attributes('role')).toBe('table')
  })

  // classes

  it('table has static class table', () => {
    const wrapper = mount(BTableSimple)
    const $table = wrapper.get('table')
    expect($table.classes()).toContain('table')
  })

  it('table has static class b-table', () => {
    const wrapper = mount(BTableSimple)
    const $table = wrapper.get('table')
    expect($table.classes()).toContain('b-table')
  })

  it('table has class prop tableClass', () => {
    const wrapper = mount(BTableSimple, {
      props: {tableClass: ['foo']},
    })
    const $table = wrapper.get('table')
    expect($table.classes()).toContain('foo')
  })

  it('table has class table-bordered when prop bordered', async () => {
    const wrapper = mount(BTableSimple, {
      props: {bordered: true},
    })
    const $table = wrapper.get('table')
    expect($table.classes()).toContain('table-bordered')
    await wrapper.setProps({bordered: false})
    expect($table.classes()).not.toContain('table-bordered')
  })

  it('table has class table-borderless when prop borderless', async () => {
    const wrapper = mount(BTableSimple, {
      props: {borderless: true},
    })
    const $table = wrapper.get('table')
    expect($table.classes()).toContain('table-borderless')
    await wrapper.setProps({borderless: false})
    expect($table.classes()).not.toContain('table-borderless')
  })

  it('table has class border-{type} when prop borderVariant', async () => {
    const wrapper = mount(BTableSimple, {
      props: {borderVariant: 'info'},
    })
    const $table = wrapper.get('table')
    expect($table.classes()).toContain('border-info')
    await wrapper.setProps({borderVariant: undefined})
    expect($table.classes()).not.toContain('border-info')
  })

  it('table has class caption-top when prop captionTop', async () => {
    const wrapper = mount(BTableSimple, {
      props: {captionTop: true},
    })
    const $table = wrapper.get('table')
    expect($table.classes()).toContain('caption-top')
    await wrapper.setProps({captionTop: false})
    expect($table.classes()).not.toContain('caption-top')
  })

  it('table has class table-dark when prop dark', async () => {
    const wrapper = mount(BTableSimple, {
      props: {dark: true},
    })
    const $table = wrapper.get('table')
    expect($table.classes()).toContain('table-dark')
    await wrapper.setProps({dark: false})
    expect($table.classes()).not.toContain('table-dark')
  })

  it('table has class table-hover when prop hover', async () => {
    const wrapper = mount(BTableSimple, {
      props: {hover: true},
    })
    const $table = wrapper.get('table')
    expect($table.classes()).toContain('table-hover')
    await wrapper.setProps({hover: false})
    expect($table.classes()).not.toContain('table-hover')
  })

  it('table has class b-table-stacked when prop stacked is boolean', async () => {
    const wrapper = mount(BTableSimple, {
      props: {stacked: true},
    })
    const $table = wrapper.get('table')
    expect($table.classes()).toContain('b-table-stacked')
    await wrapper.setProps({stacked: false})
    expect($table.classes()).not.toContain('b-table-stacked')
  })

  it('table has class b-table-stacked-{type} when prop stacked is string', async () => {
    const wrapper = mount(BTableSimple, {
      props: {stacked: 'md'},
    })
    const $table = wrapper.get('table')
    expect($table.classes()).toContain('b-table-stacked-md')
    await wrapper.setProps({stacked: 'sm'})
    expect($table.classes()).toContain('b-table-stacked-sm')
  })

  it('table has class table-striped when prop striped', async () => {
    const wrapper = mount(BTableSimple, {
      props: {striped: true},
    })
    const $table = wrapper.get('table')
    expect($table.classes()).toContain('table-striped')
    await wrapper.setProps({striped: false})
    expect($table.classes()).not.toContain('table-striped')
  })

  it('table has class table-sm when prop small', async () => {
    const wrapper = mount(BTableSimple, {
      props: {small: true},
    })
    const $table = wrapper.get('table')
    expect($table.classes()).toContain('table-sm')
    await wrapper.setProps({small: false})
    expect($table.classes()).not.toContain('table-sm')
  })

  it('table has class table-{type} when prop tableVariant', async () => {
    const wrapper = mount(BTableSimple, {
      props: {tableVariant: 'info'},
    })
    const $table = wrapper.get('table')
    expect($table.classes()).toContain('table-info')
    await wrapper.setProps({tableVariant: undefined})
    expect($table.classes()).not.toContain('table-info')
  })

  // end classes

  it('tag is div when prop responsive', () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true},
    })
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has element div when prop responsive', () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true},
    })
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
  })

  it('div has class table-responsive when prop responsive is true', () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('table-responsive')
  })

  it('div has class table-responsive-{type} when prop responsive is string', () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: 'xxl'},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('table-responsive-xxl')
  })

  it('div has class b-table-sticky-header when prop stickyHeader', async () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true, stickyHeader: true},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('b-table-sticky-header')
    await wrapper.setProps({stickyHeader: false})
    expect($div.classes()).not.toContain('b-table-sticky-header')
  })

  it('div has child table', () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true},
    })
    const $div = wrapper.get('div')
    const $table = $div.find('table')
    expect($table.exists()).toBe(true)
  })

  it('table renders default slot when prop responsive', () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true},
      slots: {default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $table = $div.get('table')
    expect($table.text()).toBe('foobar')
  })

  it('table has static attr role to be table when prop responsive', () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true},
    })
    const $div = wrapper.get('div')
    const $table = $div.get('table')
    expect($table.attributes('role')).toBe('table')
  })

  it('when prop responsive table has static class table', () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true},
    })
    const $div = wrapper.get('div')
    const $table = $div.get('table')
    expect($table.classes()).toContain('table')
  })

  it('when prop responsive table has static class b-table', () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true},
    })
    const $div = wrapper.get('div')
    const $table = $div.get('table')
    expect($table.classes()).toContain('b-table')
  })

  it('when prop responsive table has class prop tableClass', () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true, tableClass: ['foo']},
    })
    const $div = wrapper.get('div')
    const $table = $div.get('table')
    expect($table.classes()).toContain('foo')
  })

  it('when prop responsive table has class table-bordered when prop bordered', async () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true, bordered: true},
    })
    const $div = wrapper.get('div')
    const $table = $div.get('table')
    expect($table.classes()).toContain('table-bordered')
    await wrapper.setProps({bordered: false})
    expect($table.classes()).not.toContain('table-bordered')
  })

  it('when prop responsive table has class table-borderless when prop borderless', async () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true, borderless: true},
    })
    const $div = wrapper.get('div')
    const $table = $div.get('table')
    expect($table.classes()).toContain('table-borderless')
    await wrapper.setProps({borderless: false})
    expect($table.classes()).not.toContain('table-borderless')
  })

  it('when prop responsive table has class border-{type} when prop borderVariant', async () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true, borderVariant: 'info'},
    })
    const $div = wrapper.get('div')
    const $table = $div.get('table')
    expect($table.classes()).toContain('border-info')
    await wrapper.setProps({borderVariant: undefined})
    expect($table.classes()).not.toContain('border-info')
  })

  it('when prop responsive table has class caption-top when prop captionTop', async () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true, captionTop: true},
    })
    const $div = wrapper.get('div')
    const $table = $div.get('table')
    expect($table.classes()).toContain('caption-top')
    await wrapper.setProps({captionTop: false})
    expect($table.classes()).not.toContain('caption-top')
  })

  it('when prop responsive table has class table-dark when prop dark', async () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true, dark: true},
    })
    const $div = wrapper.get('div')
    const $table = $div.get('table')
    expect($table.classes()).toContain('table-dark')
    await wrapper.setProps({dark: false})
    expect($table.classes()).not.toContain('table-dark')
  })

  it('when prop responsive table has class table-hover when prop hover', async () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true, hover: true},
    })
    const $div = wrapper.get('div')
    const $table = $div.get('table')
    expect($table.classes()).toContain('table-hover')
    await wrapper.setProps({hover: false})
    expect($table.classes()).not.toContain('table-hover')
  })

  it('when prop responsive table has class b-table-stacked when prop stacked is boolean', async () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true, stacked: true},
    })
    const $div = wrapper.get('div')
    const $table = $div.get('table')
    expect($table.classes()).toContain('b-table-stacked')
    await wrapper.setProps({stacked: false})
    expect($table.classes()).not.toContain('b-table-stacked')
  })

  it('when prop responsive table has class b-table-stacked-{type} when prop stacked is string', async () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true, stacked: 'md'},
    })
    const $div = wrapper.get('div')
    const $table = $div.get('table')
    expect($table.classes()).toContain('b-table-stacked-md')
    await wrapper.setProps({stacked: 'sm'})
    expect($table.classes()).toContain('b-table-stacked-sm')
  })

  it('when prop responsive table has class table-striped when prop striped', async () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true, striped: true},
    })
    const $div = wrapper.get('div')
    const $table = $div.get('table')
    expect($table.classes()).toContain('table-striped')
    await wrapper.setProps({striped: false})
    expect($table.classes()).not.toContain('table-striped')
  })

  it('when prop responsive table has class table-sm when prop small', async () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true, small: true},
    })
    const $div = wrapper.get('div')
    const $table = $div.get('table')
    expect($table.classes()).toContain('table-sm')
    await wrapper.setProps({small: false})
    expect($table.classes()).not.toContain('table-sm')
  })

  it('when prop responsive table has class table-{type} when prop tableVariant', async () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true, tableVariant: 'info'},
    })
    const $div = wrapper.get('div')
    const $table = $div.get('table')
    expect($table.classes()).toContain('table-info')
    await wrapper.setProps({tableVariant: undefined})
    expect($table.classes()).not.toContain('table-info')
  })

  it('does not have div when by default', () => {
    const wrapper = mount(BTableSimple)
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(false)
  })
})
