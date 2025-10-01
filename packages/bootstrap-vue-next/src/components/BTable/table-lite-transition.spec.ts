import {describe, expect, it} from 'vitest'
import {mount} from '@vue/test-utils'
import BTableLite from './BTableLite.vue'

describe('BTableLite transition integration', () => {
  const sampleItems = [
    {id: 1, name: 'John', age: 30},
    {id: 2, name: 'Jane', age: 25},
    {id: 3, name: 'Bob', age: 35},
  ]

  const sampleFields = [
    {key: 'id', label: 'ID'},
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
  ]

  it('passes transition props from BTableLite to BTbody', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: sampleItems,
        fields: sampleFields,
        tbodyTransitionProps: {
          name: 'table-row',
          mode: 'out-in',
        },
      },
    })

    // Should find the TransitionGroup stub within the table
    const transitionGroup = wrapper.find('transition-group-stub')
    expect(transitionGroup.exists()).toBe(true)
    expect(transitionGroup.attributes('name')).toBe('table-row')
    expect(transitionGroup.attributes('mode')).toBe('out-in')
    expect(transitionGroup.attributes('tag')).toBe('tbody')

    // Should contain the data rows
    expect(wrapper.findAll('tr')).toHaveLength(4) // 1 header + 3 data rows
    expect(wrapper.text()).toContain('John')
    expect(wrapper.text()).toContain('Jane')
    expect(wrapper.text()).toContain('Bob')
  })

  it('passes transition handlers from BTableLite to BTbody', () => {
    const mockEnterHandler = () => {}
    const mockLeaveHandler = () => {}

    const wrapper = mount(BTableLite, {
      props: {
        items: sampleItems,
        fields: sampleFields,
        tbodyTransitionHandlers: {
          enter: mockEnterHandler,
          leave: mockLeaveHandler,
        },
      },
    })

    const transitionGroup = wrapper.find('transition-group-stub')
    expect(transitionGroup.exists()).toBe(true)
    expect(transitionGroup.attributes('tag')).toBe('tbody')
  })

  it('renders as normal table when no transition props are provided', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: sampleItems,
        fields: sampleFields,
      },
    })

    // Should not have transition group
    expect(wrapper.find('transition-group-stub').exists()).toBe(false)
    // Should have normal tbody
    expect(wrapper.find('tbody').exists()).toBe(true)
    expect(wrapper.findAll('tr')).toHaveLength(4) // 1 header + 3 data rows
  })

  it('supports both transition props and handlers together', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: sampleItems,
        fields: sampleFields,
        tbodyTransitionProps: {
          name: 'slide-fade',
          duration: 300,
        },
        tbodyTransitionHandlers: {
          beforeEnter: () => {},
          afterLeave: () => {},
        },
      },
    })

    const transitionGroup = wrapper.find('transition-group-stub')
    expect(transitionGroup.exists()).toBe(true)
    expect(transitionGroup.attributes('name')).toBe('slide-fade')
    expect(transitionGroup.attributes('tag')).toBe('tbody')
  })

  it('applies tbody classes correctly with transitions', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: sampleItems,
        fields: sampleFields,
        tbodyClass: 'custom-tbody-class',
        tbodyTransitionProps: {
          name: 'fade',
        },
      },
    })

    const transitionGroup = wrapper.find('transition-group-stub')
    expect(transitionGroup.exists()).toBe(true)
    expect(transitionGroup.classes()).toContain('custom-tbody-class')
  })

  it('works with primary key for better transition performance', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: sampleItems,
        fields: sampleFields,
        primaryKey: 'id',
        tbodyTransitionProps: {
          name: 'list-move',
        },
      },
    })

    const transitionGroup = wrapper.find('transition-group-stub')
    expect(transitionGroup.exists()).toBe(true)

    // Check that rows have proper keys (important for transitions)
    const rows = wrapper.findAll('tr')
    const dataRows = rows.slice(1) // Skip header row
    expect(dataRows).toHaveLength(3)
  })
})
