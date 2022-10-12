import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BPagination from './BPagination.vue'

describe('pagination', () => {
  enableAutoUnmount(afterEach)

  it('tag is ul', () => {
    const wrapper = mount(BPagination)
    expect(wrapper.element.tagName).toBe('UL')
  })

  it('has static class pagination', () => {
    const wrapper = mount(BPagination)
    expect(wrapper.classes()).toContain('pagination')
  })

  it('has static attr role menubar', () => {
    const wrapper = mount(BPagination)
    expect(wrapper.attributes('role')).toBe('menubar')
  })

  it('has attr aria-disabled when prop disabled', async () => {
    const wrapper = mount(BPagination, {
      props: {disabled: true},
    })
    expect(wrapper.attributes('aria-disabled')).toBe('true')
    await wrapper.setProps({disabled: false})
    expect(wrapper.attributes('aria-disabled')).toBe('false')
  })

  it('has attr aria-label when prop ariaLabel', () => {
    const wrapper = mount(BPagination, {
      props: {ariaLabel: 'foobar'},
    })
    expect(wrapper.attributes('aria-label')).toBe('foobar')
  })

  it('attr aria-label is default Pagination', () => {
    const wrapper = mount(BPagination)
    expect(wrapper.attributes('aria-label')).toBe('Pagination')
  })

  it('attr aria-label is undefined when empty string', () => {
    const wrapper = mount(BPagination, {
      props: {ariaLabel: ''},
    })
    expect(wrapper.attributes('aria-label')).toBeUndefined()
  })

  it('has class pagination-{type} when prop size', async () => {
    const wrapper = mount(BPagination, {
      props: {size: 'md'},
    })
    expect(wrapper.classes()).toContain('pagination-md')
    await wrapper.setProps({size: undefined})
    expect(wrapper.classes()).not.toContain('pagination-md')
  })

  it('has class b-pagination-pills when prop pills', async () => {
    const wrapper = mount(BPagination, {
      props: {pills: true},
    })
    expect(wrapper.classes()).toContain('b-pagination-pills')
    await wrapper.setProps({pills: false})
    expect(wrapper.classes()).not.toContain('b-pagination-pills')
  })

  it('has class justify-content-start', () => {
    const wrapper = mount(BPagination)
    expect(wrapper.classes()).toContain('justify-content-start')
  })

  it('has class justify-content-end when prop align is end', () => {
    const wrapper = mount(BPagination, {
      props: {align: 'end'},
    })
    expect(wrapper.classes()).toContain('justify-content-end')
  })

  it('has class justify-content-end when prop align is center', () => {
    const wrapper = mount(BPagination, {
      props: {align: 'center'},
    })
    expect(wrapper.classes()).toContain('justify-content-center')
  })

  it('has a li child', () => {
    const wrapper = mount(BPagination)
    const $li = wrapper.find('li')
    expect($li.exists()).toBe(true)
  })

  it('li child has static class page item', () => {
    const wrapper = mount(BPagination)
    const $li = wrapper.get('li')
    expect($li.classes()).toContain('page-item')
  })

  it('li child has static class page item', () => {
    const wrapper = mount(BPagination)
    const $li = wrapper.get('li')
    expect($li.classes()).toContain('page-item')
  })
})
