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

  it('has first button by default', () => {
    const wrapper = mount(BPagination, {props: {totalRows: 100, perPage: 1, modelValue: 5}})
    expect(wrapper.find('[aria-label="Go to first page"]').exists()).toBeTruthy()
  })

  it('has last button by default', () => {
    const wrapper = mount(BPagination, {props: {totalRows: 100, perPage: 1, modelValue: 5}})
    expect(wrapper.find('[aria-label="Go to last page"]').exists()).toBeTruthy()
  })

  it('has limit # of number buttons - 2 when in the middle', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 50, limit: 10},
    })
    expect(wrapper.findAll('[aria-posinset]').length).toBe(8)
  })

  it('does not have first button when hideGotoEndButtons="true"', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 5, hideGotoEndButtons: true},
    })
    expect(wrapper.find('[aria-label="Go to first page"]').exists()).toBeFalsy()
  })

  it('does not have last button when hideGotoEndButtons="true"', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 5, hideGotoEndButtons: true},
    })
    expect(wrapper.find('[aria-label="Go to last page"]').exists()).toBeFalsy()
  })

  it('does not have first button when firstNumber="true"', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 5, firstNumber: true},
    })
    expect(wrapper.find('[aria-label="Go to first page"]').exists()).toBeFalsy()
  })

  it('does not have last button when lastNumber="true"', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 5, lastNumber: true},
    })
    expect(wrapper.find('[aria-label="Go to last page"]').exists()).toBeFalsy()
  })

  it('has page 1 button when firstNumber="true"', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 5, firstNumber: true},
    })
    expect(wrapper.find('[aria-posinset="1"]').exists()).toBeTruthy()
  })

  it('has page 100 button when lastNumber="true"', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 5, lastNumber: true},
    })
    expect(wrapper.find('[aria-posinset="100"]').exists()).toBeTruthy()
  })

  it('has limit # of number buttons - 1 when in the middle and firstNumber="true', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 50, firstNumber: true, limit: 5},
    })
    expect(wrapper.findAll('[aria-posinset]').length).toBe(4)
  })

  it('has limit # of number buttons - 1 when in the middle and lastNumber="true"', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 50, lastNumber: true, limit: 5},
    })
    expect(wrapper.findAll('[aria-posinset]').length).toBe(4)
  })

  it('has limit # of number buttons when in the middle and first & lastNumber="true"', () => {
    const wrapper = mount(BPagination, {
      props: {
        totalRows: 100,
        perPage: 1,
        modelValue: 50,
        firstNumber: true,
        lastNumber: true,
      },
    })
    expect(wrapper.findAll('[aria-posinset]').length).toBe(5)
  })

  it('has 2 ellipses when in the middle', () => {
    const wrapper = mount(BPagination, {
      props: {
        totalRows: 100,
        perPage: 1,
        modelValue: 50,
      },
    })
    expect(wrapper.findAll('[role="separator"]').length).toBe(2)
  })

  it('has 1 ellipses when at the beginning', () => {
    const wrapper = mount(BPagination, {
      props: {
        totalRows: 100,
        perPage: 1,
        modelValue: 2,
      },
    })
    expect(wrapper.findAll('[role="separator"]').length).toBe(1)
  })

  it('has 1 ellipses when at the end', () => {
    const wrapper = mount(BPagination, {
      props: {
        totalRows: 100,
        perPage: 1,
        modelValue: 98,
      },
    })
    expect(wrapper.findAll('[role="separator"]').length).toBe(1)
  })

  it('does not have ellipses when in the middle and hideEllipsis="true"', () => {
    const wrapper = mount(BPagination, {
      props: {
        totalRows: 100,
        perPage: 1,
        modelValue: 50,
        hideEllipsis: true,
      },
    })
    expect(wrapper.find('[role="separator"]').exists()).toBeFalsy()
  })

  it('does not have ellipses when at the beginning', () => {
    const wrapper = mount(BPagination, {
      props: {
        totalRows: 100,
        perPage: 1,
        modelValue: 2,
        hideEllipsis: true,
      },
    })
    expect(wrapper.find('[role="separator"]').exists()).toBeFalsy()
  })

  it('does not have ellipses when at the end', () => {
    const wrapper = mount(BPagination, {
      props: {
        totalRows: 100,
        perPage: 1,
        modelValue: 98,
        hideEllipsis: true,
      },
    })
    expect(wrapper.find('[role="separator"]').exists()).toBeFalsy()
  })

  it('does not have ellipses when in the middle and limit # <= ELLIPSIS_THRESHOLD', () => {
    const wrapper = mount(BPagination, {
      props: {
        totalRows: 100,
        perPage: 1,
        modelValue: 50,
        limit: 3,
      },
    })
    expect(wrapper.find('[role="separator"]').exists()).toBeFalsy()
  })

  it('does not have ellipses when at the beginning and limit # <= ELLIPSIS_THRESHOLD', () => {
    const wrapper = mount(BPagination, {
      props: {
        totalRows: 100,
        perPage: 1,
        modelValue: 2,
        limit: 3,
      },
    })
    expect(wrapper.find('[role="separator"]').exists()).toBeFalsy()
  })

  it('does not have ellipses when at the end and limit # <= ELLIPSIS_THRESHOLD', () => {
    const wrapper = mount(BPagination, {
      props: {
        totalRows: 100,
        perPage: 1,
        modelValue: 98,
        limit: 3,
      },
    })
    expect(wrapper.find('[role="separator"]').exists()).toBeFalsy()
  })
})
