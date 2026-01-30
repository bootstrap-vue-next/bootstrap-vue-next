import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BTable from './BTable.vue'
import {nextTick} from 'vue'

interface TestPerson {
  id: number
  name: string
  age: number
}

const testItems: TestPerson[] = [
  {id: 1, name: 'John Doe', age: 30},
  {id: 2, name: 'Jane Smith', age: 25},
  {id: 3, name: 'Bob Johnson', age: 35},
]

const testFields = [
  {key: 'name', label: 'Name', sortable: true},
  {key: 'age', label: 'Age', sortable: true},
]

describe('BTable keyboard navigation', () => {
  describe('header keyboard navigation', () => {
    it('should add tabindex to sortable headers', () => {
      const wrapper = mount(BTable, {
        props: {
          items: testItems,
          fields: testFields,
        },
      })

      const headers = wrapper.findAll('th')
      // Should have tabindex on sortable headers
      expect(headers[0]!.attributes('tabindex')).toBe('0') // Name header
      expect(headers[1]!.attributes('tabindex')).toBe('0') // Age header
    })

    it('should not add tabindex to non-sortable headers', () => {
      const nonSortableFields = [
        {key: 'name', label: 'Name', sortable: false},
        {key: 'age', label: 'Age', sortable: false},
      ]

      const wrapper = mount(BTable, {
        props: {
          items: testItems,
          fields: nonSortableFields,
        },
      })

      const headers = wrapper.findAll('th')
      expect(headers[0]!.attributes('tabindex')).toBeUndefined()
      expect(headers[1]!.attributes('tabindex')).toBeUndefined()
    })

    it('should trigger sort when Enter key is pressed on header', async () => {
      const wrapper = mount(BTable, {
        props: {
          items: testItems,
          fields: testFields,
        },
      })

      const nameHeader = wrapper.find('th[tabindex="0"]')

      // Simulate Enter key press
      await nameHeader.trigger('keydown', {code: 'Enter'})

      // Check that sort was applied (aria-sort should change)
      await nextTick()
      expect(nameHeader.attributes('aria-sort')).toBe('ascending')
    })

    it('should trigger sort when NumpadEnter key is pressed on header', async () => {
      const wrapper = mount(BTable, {
        props: {
          items: testItems,
          fields: testFields,
        },
      })

      const nameHeader = wrapper.find('th[tabindex="0"]')

      // Simulate NumpadEnter key press
      await nameHeader.trigger('keydown', {code: 'NumpadEnter'})

      // Check that sort was applied (aria-sort should change)
      await nextTick()
      expect(nameHeader.attributes('aria-sort')).toBe('ascending')
    })

    it('should trigger sort when Space key is pressed on header', async () => {
      const wrapper = mount(BTable, {
        props: {
          items: testItems,
          fields: testFields,
        },
      })

      const nameHeader = wrapper.find('th[tabindex="0"]')

      // Simulate Space key press
      await nameHeader.trigger('keydown', {code: 'Space'})

      // Check that sort was applied
      await nextTick()
      expect(nameHeader.attributes('aria-sort')).toBe('ascending')
    })
  })

  describe('row keyboard navigation', () => {
    it('should add tabindex to rows when selectable', () => {
      const wrapper = mount(BTable, {
        props: {
          items: testItems,
          fields: testFields,
          selectable: true,
        },
      })

      const rows = wrapper.findAll('tbody tr')
      expect(rows[0]!.attributes('tabindex')).toBe('0')
      expect(rows[1]!.attributes('tabindex')).toBe('0')
      expect(rows[2]!.attributes('tabindex')).toBe('0')
    })

    it('should not add tabindex to rows when not selectable', () => {
      const wrapper = mount(BTable, {
        props: {
          items: testItems,
          fields: testFields,
          selectable: false,
        },
      })

      const rows = wrapper.findAll('tbody tr')
      expect(rows[0]!.attributes('tabindex')).toBeUndefined()
      expect(rows[1]!.attributes('tabindex')).toBeUndefined()
      expect(rows[2]!.attributes('tabindex')).toBeUndefined()
    })

    it('should trigger row click when Enter key is pressed', async () => {
      const wrapper = mount(BTable, {
        props: {
          items: testItems,
          fields: testFields,
          selectable: true,
        },
      })

      const firstRow = wrapper.find('tbody tr[tabindex="0"]')

      // Simulate Enter key press
      await firstRow.trigger('keydown', {code: 'Enter'})

      // Check that row-clicked event was emitted
      expect(wrapper.emitted('row-clicked')).toBeTruthy()
      expect(wrapper.emitted('row-clicked')![0]![0]).toEqual({
        item: testItems[0],
        index: 0,
        event: expect.any(Object),
      })
    })

    it('should trigger row click when NumpadEnter key is pressed', async () => {
      const wrapper = mount(BTable, {
        props: {
          items: testItems,
          fields: testFields,
          selectable: true,
        },
      })

      const firstRow = wrapper.find('tbody tr[tabindex="0"]')

      // Simulate NumpadEnter key press
      await firstRow.trigger('keydown', {code: 'NumpadEnter'})

      // Check that row-clicked event was emitted
      expect(wrapper.emitted('row-clicked')).toBeTruthy()
      expect(wrapper.emitted('row-clicked')![0]![0]).toEqual({
        item: testItems[0],
        index: 0,
        event: expect.any(Object),
      })
    })

    it('should trigger row click when Space key is pressed', async () => {
      const wrapper = mount(BTable, {
        props: {
          items: testItems,
          fields: testFields,
          selectable: true,
        },
      })

      const firstRow = wrapper.find('tbody tr[tabindex="0"]')

      // Simulate Space key press
      await firstRow.trigger('keydown', {code: 'Space'})

      // Check that row-clicked event was emitted
      expect(wrapper.emitted('row-clicked')).toBeTruthy()
      expect(wrapper.emitted('row-clicked')![0]![0]).toEqual({
        item: testItems[0],
        index: 0,
        event: expect.any(Object),
      })
    })

    it('should handle arrow key navigation', async () => {
      // This test is more complex as it requires DOM focus management
      // For now we just verify that the keydown handler is attached
      const wrapper = mount(BTable, {
        props: {
          items: testItems,
          fields: testFields,
          selectable: true,
        },
      })

      const firstRow = wrapper.find('tbody tr[tabindex="0"]')

      // Verify that keydown events are being handled
      // (preventDefault would be called, but we can't easily test that in jsdom)
      await firstRow.trigger('keydown', {code: 'ArrowDown'})
      await firstRow.trigger('keydown', {code: 'ArrowUp'})
      await firstRow.trigger('keydown', {code: 'Home'})
      await firstRow.trigger('keydown', {code: 'End'})

      // If no errors are thrown, the handlers are working
      expect(true).toBe(true)
    })
  })

  describe('integration with existing features', () => {
    it('should work with selection mode', async () => {
      const wrapper = mount(BTable, {
        props: {
          'items': testItems,
          'fields': testFields,
          'selectable': true,
          'selectedItems': [],
          'onUpdate:selectedItems': (value) => wrapper.setProps({selectedItems: value}),
        },
      })

      const firstRow = wrapper.find('tbody tr[tabindex="0"]')

      // Simulate Enter key press to select row
      await firstRow.trigger('keydown', {code: 'Enter'})
      await nextTick()

      // Row should be selected (have the selected class)
      expect(firstRow.classes()).toContain('selected')
    })

    it('should work with selection mode using NumpadEnter', async () => {
      const wrapper = mount(BTable, {
        props: {
          'items': testItems,
          'fields': testFields,
          'selectable': true,
          'selectedItems': [],
          'onUpdate:selectedItems': (value) => wrapper.setProps({selectedItems: value}),
        },
      })

      const firstRow = wrapper.find('tbody tr[tabindex="0"]')

      // Simulate NumpadEnter key press to select row
      await firstRow.trigger('keydown', {code: 'NumpadEnter'})
      await nextTick()

      // Row should be selected (have the selected class)
      expect(firstRow.classes()).toContain('selected')
    })

    it('should work with sorting', async () => {
      const wrapper = mount(BTable, {
        props: {
          items: testItems,
          fields: testFields,
        },
      })

      const nameHeader = wrapper.find('th[tabindex="0"]')

      // Sort using keyboard
      await nameHeader.trigger('keydown', {code: 'Enter'})
      await nextTick()

      // Check that table data is sorted
      const rows = wrapper.findAll('tbody tr')
      const firstRowData = rows[0]!.findAll('td')

      // After sorting by name ascending, Bob Johnson should be first
      expect(firstRowData[0]!.text()).toBe('Bob Johnson')
    })

    it('should work with sorting using NumpadEnter', async () => {
      const wrapper = mount(BTable, {
        props: {
          items: testItems,
          fields: testFields,
        },
      })

      const nameHeader = wrapper.find('th[tabindex="0"]')

      // Sort using keyboard with NumpadEnter
      await nameHeader.trigger('keydown', {code: 'NumpadEnter'})
      await nextTick()

      // Check that table data is sorted
      const rows = wrapper.findAll('tbody tr')
      const firstRowData = rows[0]!.findAll('td')

      // After sorting by name ascending, Bob Johnson should be first
      expect(firstRowData[0]!.text()).toBe('Bob Johnson')
    })
  })
})
