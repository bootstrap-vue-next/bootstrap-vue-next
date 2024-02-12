import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTable from './BTable.vue'

const simpleItems = [
  {age: 27, first_name: 'Havij'},
  {age: 9, first_name: 'Cyndi'},
  {age: 42, first_name: 'Robert'},
]

const simpleFields = [
  {key: 'first_name', label: 'First Name', sortable: true},
  {key: 'age', label: 'Age', sortable: true},
]

describe('tbody', () => {
  enableAutoUnmount(afterEach)

  it('has table class by default', () => {
    const wrapper = mount(BTable, {
      props: {items: simpleItems},
    })
    expect(wrapper.get('table').classes()).toContain('table')
  })

  it('has b-table class by default', () => {
    const wrapper = mount(BTable, {
      props: {items: simpleItems},
    })
    expect(wrapper.get('table').classes()).toContain('b-table')
  })

  it('creates #columns === #fields', () => {
    const wrapper = mount(BTable, {
      props: {items: simpleItems, fields: simpleFields},
    })
    const heads = wrapper.get('table').findAll('th')
    expect(heads.length).toBe(2)
  })

  it('uses label from fields', () => {
    const wrapper = mount(BTable, {
      props: {items: simpleItems, fields: simpleFields},
    })
    const heads = wrapper.get('table').findAll('th')
    expect(heads.length).toBe(2)
    expect(heads[0].text()).toBe('First Name')
    expect(heads[1].text()).toBe('Age')
  })

  it('shows sortable columns when sortalbe === true', () => {
    const wrapper = mount(BTable, {
      props: {items: simpleItems, fields: simpleFields},
    })
    const heads = wrapper.get('table').findAll('th')
    expect(heads[0].classes()).toContain('b-table-sortable-column')
    expect(heads[1].classes()).toContain('b-table-sortable-column')
  })

  it('does not show sortable columns when sortalbe undefined', () => {
    const wrapper = mount(BTable, {
      props: {items: simpleItems},
    })
    const heads = wrapper.get('table').findAll('th')
    expect(heads[0].classes()).not.toContain('b-table-sortable-column')
    expect(heads[1].classes()).not.toContain('b-table-sortable-column')
  })

  it('has aria-sort="none" by default', () => {
    const wrapper = mount(BTable, {
      props: {items: simpleItems, fields: simpleFields},
    })
    const heads = wrapper.get('table').findAll('th')
    expect(heads[0].attributes('aria-sort')).toBe('none')
  })

  it('has aria-sort="ascending" on first click', async () => {
    const wrapper = mount(BTable, {
      props: {items: simpleItems, fields: simpleFields},
    })
    const [names] = wrapper.get('table').findAll('th')
    await names.trigger('click')
    expect(names.attributes('aria-sort')).toBe('ascending')
  })

  it('has aria-sort="descending" on second click', async () => {
    const wrapper = mount(BTable, {
      props: {items: simpleItems, fields: simpleFields},
    })
    const [names] = wrapper.get('table').findAll('th')
    await names.trigger('click')
    await names.trigger('click')
    expect(names.attributes('aria-sort')).toBe('descending')
  })

  it('sorts text ascending', () => {
    const wrapper = mount(BTable, {
      props: {items: simpleItems, fields: simpleFields, sortBy: 'first_name'},
    })
    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Cyndi', 'Havij', 'Robert'])
  })

  it('sorts text descending', () => {
    const wrapper = mount(BTable, {
      props: {items: simpleItems, fields: simpleFields, sortBy: 'first_name', sortDesc: true},
    })
    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Robert', 'Havij', 'Cyndi'])
  })

  it('sorts numbers ascending', () => {
    const wrapper = mount(BTable, {
      props: {items: simpleItems, fields: simpleFields, sortBy: 'age'},
    })
    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.findAll('td')[1].text())
    expect(text).toStrictEqual(['9', '27', '42'])
  })

  it('sorts numbers descending', () => {
    const wrapper = mount(BTable, {
      props: {items: simpleItems, fields: simpleFields, sortBy: 'age', sortDesc: true},
    })
    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.findAll('td')[1].text())
    expect(text).toStrictEqual(['42', '27', '9'])
  })
})
