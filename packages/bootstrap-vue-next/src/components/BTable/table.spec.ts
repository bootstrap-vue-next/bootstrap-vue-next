import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTable from './BTable.vue'
import type {LiteralUnion, TableField, TableItem} from '../../types'

interface SimplePerson {
  first_name: string
  age: number
}

const simpleItems: TableItem<SimplePerson>[] = [
  {age: 27, first_name: 'Havij'},
  {age: 9, first_name: 'Cyndi'},
  {age: 42, first_name: 'Robert'},
]

const multiSort: TableItem<SimplePerson>[] = [
  {age: 27, first_name: 'Havij'},
  {age: 9, first_name: 'Cyndi'},
  {age: 42, first_name: 'Robert'},
  {age: 35, first_name: 'Robert'},
  {age: 101, first_name: 'Cyndi'},
]

const simpleFields: Exclude<TableField<SimplePerson>, string>[] = [
  {key: 'first_name', label: 'First Name', sortable: true},
  {key: 'age', label: 'Age', sortable: true},
]

const formattedFields: Exclude<TableField<SimplePerson>, string>[] = [
  {
    key: 'is_adult',
    label: 'Adult?',
    sortable: true,
    sortByFormatted: true,
    formatter: (_value: unknown, _key?: LiteralUnion<keyof SimplePerson>, item?: SimplePerson) =>
      item ? (item.age >= 18 ? 'Yes' : 'No') : 'Something went wrong',
  },
  {key: 'first_name', label: 'First Name', sortable: true},
  {key: 'age', label: 'Age', sortable: true},
]

class Person {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public age: number
  ) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
}

const nestableItemsTest = {
  items: [
    {yoo1: 123, yoo2: 321},
    {yoo1: 789, yoo2: 987},
  ] satisfies TableItem[],
  fields: [
    {key: 'yoo1', label: 'YOO1'},
    {key: 'yoo2', label: 'YOO2'},
  ] satisfies TableField[],
}

enableAutoUnmount(afterEach)

describe('tbody', () => {
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
      props: {items: simpleItems, fields: formattedFields},
    })
    const heads = wrapper.get('table').findAll('th')
    expect(heads.length).toBe(3)
  })

  it('uses label from fields', () => {
    const wrapper = mount(BTable, {
      props: {items: simpleItems, fields: simpleFields},
    })
    const heads = wrapper.get('table').findAll('th')
    expect(heads[0].text()).toBe('First Name')
    expect(heads[1].text()).toBe('Age')
  })

  it('shows sortable columns when sortable === true', () => {
    const wrapper = mount(BTable, {
      props: {items: simpleItems, fields: simpleFields},
    })
    const heads = wrapper.get('table').findAll('th')
    expect(heads[0].classes()).toContain('b-table-sortable-column')
    expect(heads[1].classes()).toContain('b-table-sortable-column')
  })
})

describe('single-sort', () => {
  it('does not show sortable columns when sortable undefined', () => {
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
      props: {
        items: simpleItems,
        fields: simpleFields,
        sortBy: [{order: 'asc', key: 'first_name'}],
      },
    })
    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Cyndi', 'Havij', 'Robert'])
  })

  it('sorts text descending', () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
        sortBy: [{order: 'desc', key: 'first_name'}],
      },
    })
    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Robert', 'Havij', 'Cyndi'])
  })

  it('sorts numbers ascending', () => {
    const wrapper = mount(BTable, {
      props: {items: simpleItems, fields: simpleFields, sortBy: [{order: 'asc', key: 'age'}]},
    })
    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.findAll('td')[1].text())
    expect(text).toStrictEqual(['9', '27', '42'])
  })

  it('sorts numbers descending', () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
        sortBy: [{order: 'desc', key: 'age'}],
      },
    })
    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.findAll('td')[1].text())
    expect(text).toStrictEqual(['42', '27', '9'])
  })

  it('sorts by formatted when sortByFormatted === true && formatter exists', () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: formattedFields,
        sortBy: [{order: 'asc', key: 'is_adult'}],
      },
    })
    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['No', 'Yes', 'Yes'])
  })

  it('sorts by formatted when sortByFormatted === true && formatter exists and respects sorDesc', () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: formattedFields,
        sortBy: [{order: 'desc', key: 'is_adult'}],
      },
    })
    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Yes', 'Yes', 'No'])
  })

  it('sorts by custom formatter when sortByFormatted === function', () => {
    const customFormatterFields: Exclude<TableField<SimplePerson>, string>[] = [
      {
        key: 'first_name',
        label: 'First Name',
        sortable: true,
        sortByFormatted: (value: unknown) => (value as string).slice(1),
      },
      {key: 'age', label: 'Age', sortable: true},
    ]

    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: customFormatterFields,
        sortBy: [{order: 'asc', key: 'first_name'}],
      },
    })
    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Havij', 'Robert', 'Cyndi'])
  })
})

describe('multi-sort', () => {
  it('has aria-sort labels reflecting sortBy prop', () => {
    const wrapper = mount(BTable, {
      props: {
        multisort: true,
        items: multiSort,
        fields: simpleFields,
        sortBy: [
          {key: 'age', order: 'asc'},
          {key: 'first_name', order: 'desc'},
        ],
      },
    })
    const heads = wrapper.get('table').findAll('th')
    expect(heads[0].attributes('aria-sort')).toBe('descending')
    expect(heads[1].attributes('aria-sort')).toBe('ascending')
  })

  it('correctly sorts on two columns', () => {
    const wrapper = mount(BTable, {
      props: {
        multisort: true,
        items: multiSort,
        fields: simpleFields,
        sortBy: [
          {key: 'first_name', order: 'desc'},
          {key: 'age', order: 'asc'},
        ],
      },
    })
    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.findAll('td')[1].text())
    expect(text).toStrictEqual(['35', '42', '27', '9', '101'])
  })
})

it('will display data when using a inferred nested object [item: { "yoo.1": 123, "yoo.2": 321 }]', () => {
  const wrapper = mount(BTable, {
    props: nestableItemsTest,
  })
  const text = wrapper
    .get('tbody')
    .findAll('tr')
    .map((row) => row.findAll('td').map((td) => td.text()))
  expect(text).toStrictEqual([
    ['123', '321'],
    ['789', '987'],
  ])
})

describe('object-persistence', () => {
  it('Passes the original object for scoped cell slot item', () => {
    const items = [new Person(1, 'John', 'Doe', 30), new Person(2, 'Jane', 'Smith', 25)]
    const wrapper = mount(BTable, {
      props: {
        primaryKey: 'id',
        items,
      },
      slots: {
        'cell()': `<template #cell()="row">{{ row.item.constructor.name }}</template>`,
      },
    })
    const $tbody = wrapper.get('tbody')
    const $tr = $tbody.findAll('tr')
    $tr.forEach((el) => {
      const $tds = el.findAll('td')
      expect($tds.length).toBe(4)
      $tds.forEach(($td) => {
        expect($td.text()).toBe('Person')
      })
    })
  })
})
