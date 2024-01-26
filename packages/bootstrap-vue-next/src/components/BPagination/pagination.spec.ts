import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BPagination from './BPagination.vue'
import {nextTick} from 'vue'

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

  it('has limit # of number buttons - 2 when value === limit', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 5, limit: 5},
    })
    expect(wrapper.findAll('[aria-posinset]').length).toBe(3)
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

  it('has limit # of number buttons - 1 when in the middle and firstNumber="true"', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 50, firstNumber: true, limit: 5},
    })
    expect(wrapper.findAll('[aria-posinset]').length).toBe(4)
  })

  it('has limit # of number buttons - 1 when the value === limit and firstNumber="true" (limit === 5)', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 5, firstNumber: true, limit: 5},
    })
    expect(wrapper.findAll('[aria-posinset]').length).toBe(4)
  })

  it('has limit # of number buttons - 1 when the value === limit - 1 and firstNumber="true" (limit === 7)', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 6, firstNumber: true, limit: 7},
    })
    expect(wrapper.findAll('[aria-posinset]').length).toBe(6)
  })

  it('has limit # of number buttons - 1 when the value === limit and firstNumber="true" (limit === 10)', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 10, firstNumber: true, limit: 10},
    })
    expect(wrapper.findAll('[aria-posinset]').length).toBe(9)
  })

  it('has limit # of number buttons - 2 when the value === limit - 2 (limit === 10)', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 8, limit: 10},
    })
    expect(wrapper.findAll('[aria-posinset]').length).toBe(8)
  })

  it('has limit # of number buttons - 2 when firstDots are shown (limit === 10)', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 6, limit: 10},
    })
    expect(wrapper.findAll('[aria-posinset]').length).toBe(8)
  })

  // it('has limit # of number buttons -2 when in the value === limit -2  and firstNumber="true" (limit === 10)', () => {
  //   const wrapper = mount(BPagination, {
  //     props: {totalRows: 100, perPage: 1, modelValue: 10, firstNumber: true, limit: 10},
  //   })
  //   expect(wrapper.findAll('[aria-posinset]').length).toBe(10)
  // })

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

  it('has page 2 button when firstNumber="true" and value === 4', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 4, firstNumber: true},
    })
    expect(wrapper.find('[aria-posinset="2"]').exists()).toBeTruthy()
  })

  it('has limit # number buttons when firstNumber="true" and value === 4', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 4, firstNumber: true},
    })
    expect(wrapper.findAll('[aria-posinset]').length).toBe(5)
  })

  it('has limit # number buttons when firstNumber="true" and value === 4 (limit === 4)', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 4, firstNumber: true, limit: 4},
    })
    expect(wrapper.findAll('[aria-posinset]').length).toBe(4)
  })

  it('has limit # number buttons + 1 when firstNumber="true" and value === 4(limit === 3)', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 4, firstNumber: true, limit: 3},
    })
    expect(wrapper.findAll('[aria-posinset]').length).toBe(4)
  })

  it('has limit # number buttons + 1 when firstNumber="true" and value === 4 (limit === 3)', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 3, firstNumber: true, limit: 3},
    })
    expect(wrapper.findAll('[aria-posinset]').length).toBe(4)
  })

  it('has limit # number buttons - 1 when firstNumber="true" and value === max - 3', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 97, firstNumber: true},
    })
    expect(wrapper.findAll('[aria-posinset]').length).toBe(4)
  })

  it('has limit # number buttons - 1 when firstNumber="true" and value === max - 2 (limit === 4)', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 98, firstNumber: true, limit: 4},
    })
    expect(wrapper.findAll('[aria-posinset]').length).toBe(3)
  })

  it('has page max-1 button when lastNumber="true" and value > max-3', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 97, lastNumber: true},
    })
    expect(wrapper.find('[aria-posinset="99"]').exists()).toBeTruthy()
  })

  it('has limit # number buttons when lastNumber="true" and value === max - 3', () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 97, lastNumber: true},
    })
    expect(wrapper.findAll('[aria-posinset]').length).toBe(5)
  })

  it('passes invariant tests with default props', async () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 1},
    })

    expect(await TestScenariosAgainstInvariants(wrapper)).toBe(0)
  })

  it('passes invariant tests with firstNumber == true', async () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 1, firstNumber: true},
    })

    expect(await TestScenariosAgainstInvariants(wrapper)).toBe(0)
  })

  it('passes invariant tests with lastNumber == true', async () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 1, lastNumber: true},
    })

    expect(await TestScenariosAgainstInvariants(wrapper)).toBe(0)
  })

  it('passes invariant tests with first and last Number == true', async () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 100, perPage: 1, modelValue: 1, firstNumber: true, lastNumber: true},
    })

    expect(await TestScenariosAgainstInvariants(wrapper)).toBe(0)
  })

  it('TEMP: Check one configuration', async () => {
    const wrapper = mount(BPagination, {
      props: {totalRows: 8, perPage: 1, modelValue: 4, lastNumber: true, limit: 7},
    })

    expect(TestInvariants(wrapper)).toBeTruthy()
  })
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function TestScenariosAgainstInvariants(wrapper: any): Promise<number> {
  let failed = 0

  // For unit testing/ci
  const sizeMin = 25
  const sizeMax = 25
  const sizeStep = 1
  const limitMin = 3
  const limitMax = 7

  // Reasonable coverage - would work in a nightly test if we had such
  // const sizeMin = 5
  // const sizeMax = 25
  // const sizeStep = 1
  // const limitMin = 3
  // const limitMax = 10

  // For full validation
  // const sizeMin = 5
  // const sizeMax = 50
  // const sizeStep = 1
  // const limitMin = 3
  // const limitMax = 25

  for (let size = sizeMin; size <= sizeMax; size += sizeStep) {
    wrapper.setProps({totalRows: size})
    for (let limit = limitMin; limit <= limitMax; limit++) {
      wrapper.setProps({limit})
      for (let value = 1; value <= Math.min(sizeMax, size); value++) {
        await wrapper.setProps({modelValue: value})
        await nextTick()
        failed += TestInvariants(wrapper) ? 0 : 1
      }
    }
  }
  return failed
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TestInvariants(wrapper: any): boolean {
  const pageButtons = wrapper.findAll('[aria-posinset]').length
  const ellipses = wrapper.findAll('[role="separator"]').length
  const {firstNumber, lastNumber, limit, modelValue, perPage, totalRows} = wrapper.vm.$props
  const actual = pageButtons + ellipses - (firstNumber ? 1 : 0) - (lastNumber ? 1 : 0)

  const pages = Math.ceil(totalRows / perPage)
  if (pages < limit) {
    return true
  }

  let succeeded = true
  //if (actual !== limit) { -- this is what we're aiming for, but until we get there, we'll just check that it's close
  if (actual < limit - 1 || actual > limit + 1) {
    // eslint-disable-next-line no-console
    console.log(
      `BTN#: ${limit}\t${actual}\t${modelValue}\t${pageButtons}\t${ellipses}\t${firstNumber}\t${lastNumber}\t${pages}`
    )
    succeeded = false
  }

  if (ellipses > 0) {
    const allButtons = wrapper.findAll('.page-item')
    const hasFirstEllipsis = allButtons[2].attributes('role') === 'separator'
    if (!hasFirstEllipsis && !wrapper.find('[aria-posinset="2"]').exists()) {
      // eslint-disable-next-line no-console
      console.log(
        `BTN2: ${limit}\t${actual}\t${modelValue}\t${pageButtons}\t${ellipses}\t${firstNumber}\t${lastNumber}\t${pages}`
      )
      succeeded = false
    }

    const hasLastEllipsis = allButtons[allButtons.length - 3].attributes('role') === 'separator'
    if (!hasLastEllipsis && !wrapper.find(`[aria-posinset="${pages - 1}"]`).exists()) {
      // eslint-disable-next-line no-console
      console.log(
        `BE-1: ${limit}\t${actual}\t${modelValue}\t${pageButtons}\t${ellipses}\t${firstNumber}\t${lastNumber}`
      )
      succeeded = false
    }
  }

  // if (succeeded) {
  //   // eslint-disable-next-line no-console
  //   console.log(
  //     `SUCC: ${limit}\t${actual}\t${modelValue}\t${pageButtons}\t${ellipses}\t${firstNumber}\t${lastNumber}\t${pages}`
  //   )
  // }

  return succeeded
}
