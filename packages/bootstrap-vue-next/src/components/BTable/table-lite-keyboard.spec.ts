import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTableLite from './BTableLite.vue'

interface TestPerson {
  id: number
  name: string
  age: number
}

const testItems: TestPerson[] = [
  {id: 1, name: 'John Doe', age: 30},
  {id: 2, name: 'Jane Smith', age: 25},
]

const testFields = [
  {key: 'name', label: 'Name'},
  {key: 'age', label: 'Age'},
]

describe('BTableLite keyboard accessibility', () => {
  enableAutoUnmount(afterEach)

  it('adds tabindex to headers when head-clicked listener is registered', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: testItems,
        fields: testFields,
        onHeadClicked: () => {},
      },
    })

    const headers = wrapper.findAll('thead th')
    expect(headers[0].attributes('tabindex')).toBe('0')
    expect(headers[1].attributes('tabindex')).toBe('0')
  })

  it('adds tabindex to rows when row-clicked listener is registered', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: testItems,
        fields: testFields,
        onRowClicked: () => {},
      },
    })

    const rows = wrapper.findAll('tbody tr')
    expect(rows[0].attributes('tabindex')).toBe('0')
    expect(rows[1].attributes('tabindex')).toBe('0')
  })

  it('supports row arrow navigation when row-clicked listener is registered', async () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: testItems,
        fields: testFields,
        onRowClicked: () => {},
      },
      attachTo: document.body,
    })

    const rows = wrapper.findAll<HTMLTableRowElement>('tbody tr')
    rows[0].element.focus()
    await rows[0].trigger('keydown', {code: 'ArrowDown'})
    expect(document.activeElement).toBe(rows[1].element)

    await rows[1].trigger('keydown', {code: 'ArrowUp'})
    expect(document.activeElement).toBe(rows[0].element)
  })

  it('uses row scope for row-header cells in tbody', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: testItems,
        fields: [{key: 'name', label: 'Name', isRowHeader: true}],
      },
    })

    const rowHeaderCell = wrapper.find('tbody th')
    expect(rowHeaderCell.attributes('scope')).toBe('row')
  })
})
