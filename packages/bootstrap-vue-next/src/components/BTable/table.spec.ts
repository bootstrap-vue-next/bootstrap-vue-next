import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTable from './BTable.vue'
import type {BTableSortBy, TableField, TableItem} from '../../types'
import {nextTick} from 'vue'

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
    formatter: (_value: unknown, _key?: unknown, item?: SimplePerson) =>
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

describe('structure', () => {
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

  describe('dynamic slots', () => {
    it('foot()', () => {
      const wrapper = mount(BTable, {
        props: {
          fields: [{key: 'name'}, {key: 'count'}],
          items: [
            {
              name: 'John Smith',
              count: 3,
            },
          ],
          responsive: true,
          showEmpty: true,
          bordered: true,
          footClone: true,
        },
        slots: {
          'foot(name)': 'total',
          'foot()': 'a lot',
        },
      })
      const tfoot = wrapper.get('tfoot')
      expect(tfoot.text()).toBe('totala lot')
    })
    it('head()', () => {
      const wrapper = mount(BTable, {
        props: {
          fields: [{key: 'name'}, {key: 'count'}],
          items: [
            {
              name: 'John Smith',
              count: 3,
            },
          ],
          responsive: true,
          showEmpty: true,
          bordered: true,
          footClone: true,
        },
        slots: {
          'head(name)': 'total',
          'head()': 'a lot',
        },
      })
      const thead = wrapper.get('thead')
      expect(thead.text()).toBe('totala lot')
    })
    it('cell()', () => {
      const wrapper = mount(BTable, {
        props: {
          fields: [{key: 'name'}, {key: 'count'}],
          items: [
            {
              name: 'John Smith',
              count: 3,
            },
          ],
          responsive: true,
          showEmpty: true,
          bordered: true,
          footClone: true,
        },
        slots: {
          'cell(name)': 'total',
          'cell()': 'a lot',
        },
      })
      const tbody = wrapper.get('tbody')
      expect(tbody.text()).toBe('totala lot')
    })
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

  describe('selectedItems system', () => {
    it('gives the correct row a class when selected', async () => {
      const items = [new Person(1, 'John', 'Doe', 30), new Person(2, 'Jane', 'Smith', 25)]

      const wrapper = mount(BTable, {
        props: {
          'selectMode': 'multi' as const,
          'selectable': true,
          items,
          'selectedItems': [],
          'onUpdate:selectedItems': (value) => wrapper.setProps({selectedItems: value}),
        },
      })
      const $trs = wrapper.findAll('tr')
      await $trs[1].trigger('click')
      await $trs[2].trigger('click')
      expect($trs[1].classes()).toContain('selected')
      expect($trs[2].classes()).toContain('selected')
      await $trs[1].trigger('click')
      await $trs[2].trigger('click')
      expect($trs[1].classes()).not.toContain('selected')
      expect($trs[2].classes()).not.toContain('selected')
    })

    it('single mode', async () => {
      const items = [new Person(1, 'John', 'Doe', 30), new Person(2, 'Jane', 'Smith', 25)]

      const wrapper = mount(BTable, {
        props: {
          'selectMode': 'single' as const,
          'selectable': true,
          items,
          'selectedItems': [],
          'onUpdate:selectedItems': (value) => wrapper.setProps({selectedItems: value}),
        },
      })
      const $trs = wrapper.findAll('tr')
      await $trs[1].trigger('click')
      expect($trs[1].classes()).toContain('selected')
      await nextTick()
      await $trs[2].trigger('click')
      expect($trs[1].classes()).not.toContain('selected')
      expect($trs[2].classes()).toContain('selected')
    })

    it('multi mode', async () => {
      const items = [new Person(1, 'John', 'Doe', 30), new Person(2, 'Jane', 'Smith', 25)]
      const wrapper = mount(BTable, {
        props: {
          'selectMode': 'multi' as const,
          'selectable': true,
          items,
          'selectedItems': [],
          'onUpdate:selectedItems': (value) => wrapper.setProps({selectedItems: value}),
        },
      })
      const $trs = wrapper.findAll('tr')
      await $trs[1].trigger('click')
      await $trs[2].trigger('click')
      expect($trs[1].classes()).toContain('selected')
      expect($trs[2].classes()).toContain('selected')
    })

    describe('ranged mode', () => {
      it('no modifiers', async () => {
        const items = [
          new Person(1, 'John', 'Doe', 30),
          new Person(2, 'Jane', 'Smith', 25),
          new Person(3, 'John', 'Doe', 30),
          new Person(4, 'Jane', 'Smith', 25),
        ]

        const wrapper = mount(BTable, {
          props: {
            'selectMode': 'single' as const,
            'selectable': true,
            items,
            'selectedItems': [],
            'onUpdate:selectedItems': (value) => wrapper.setProps({selectedItems: value}),
          },
        })
        const $trs = wrapper.findAll('tr')
        await $trs[1].trigger('click')
        expect($trs[1].classes()).toContain('selected')
        await nextTick()
        await $trs[2].trigger('click')
        expect($trs[1].classes()).not.toContain('selected')
        expect($trs[2].classes()).toContain('selected')
      })
      it('ctrl click', async () => {
        const items = [
          new Person(1, 'John', 'Doe', 30),
          new Person(2, 'Jane', 'Smith', 25),
          new Person(3, 'John', 'Doe', 30),
          new Person(4, 'Jane', 'Smith', 25),
        ]

        const wrapper = mount(BTable, {
          props: {
            'selectMode': 'range' as const,
            'selectable': true,
            items,
            'selectedItems': [],
            'onUpdate:selectedItems': (value) => wrapper.setProps({selectedItems: value}),
          },
        })
        const $trs = wrapper.findAll('tr')
        await $trs[1].trigger('click')
        expect($trs[1].classes()).toContain('selected')
        const event = new MouseEvent('click', {ctrlKey: true})
        $trs[3].element.dispatchEvent(event)
        await nextTick()
        expect($trs[1].classes()).toContain('selected')
        expect($trs[3].classes()).toContain('selected')
      })
      it('shift click', async () => {
        const items = [
          new Person(1, 'John', 'Doe', 30),
          new Person(2, 'Jane', 'Smith', 25),
          new Person(3, 'John', 'Doe', 30),
          new Person(4, 'Jane', 'Smith', 25),
        ]

        const wrapper = mount(BTable, {
          props: {
            'selectMode': 'range' as const,
            'selectable': true,
            items,
            'selectedItems': [],
            'onUpdate:selectedItems': (value) => wrapper.setProps({selectedItems: value}),
          },
        })
        const $trs = wrapper.findAll('tr')
        await $trs[1].trigger('click')
        expect($trs[1].classes()).toContain('selected')
        const event = new MouseEvent('click', {shiftKey: true})
        $trs[3].element.dispatchEvent(event)
        await nextTick()
        expect($trs[1].classes()).toContain('selected')
        expect($trs[2].classes()).toContain('selected')
        expect($trs[3].classes()).toContain('selected')
      })
      it('shift click correct order', async () => {
        const wrapper = mount(BTable, {
          props: {
            'selectMode': 'range' as const,
            'selectable': true,
            'items': [
              {id: 1, text: 'C'},
              {id: 2, text: 'A'},
              {id: 3, text: 'B'},
              {id: 4, text: 'D'},
            ],
            'fields': [
              {key: 'id', sortable: true},
              {key: 'text', sortable: true},
            ],
            'selectedItems': [],
            'onUpdate:selectedItems': (value) => wrapper.setProps({selectedItems: value}),
            'sortBy': [{key: 'text', order: 'asc'}] as BTableSortBy[],
            'primaryKey': 'id',
          },
        })
        const [first, second, third, fourth] = wrapper.findAll('tr')
        await fourth.trigger('click')
        const event = new MouseEvent('click', {shiftKey: true})
        third.element.dispatchEvent(event)
        await nextTick()
        expect(first.classes()).not.toContain('selected')
        expect(second.classes()).not.toContain('selected')
        expect(third.classes()).toContain('selected')
        expect(fourth.classes()).toContain('selected')
      })
    })

    it('classes are applied correctly when using prop responsive and busy simultaneously', () => {
      const wrapper = mount(BTable, {
        props: {
          items: simpleItems,
          fields: simpleFields,
          responsive: true,
          busy: true,
        },
      })
      const $table = wrapper.get('table')
      expect($table.classes()).toContain('b-table-busy')
      expect($table.attributes('ariabusy')).toBe('true')
    })
  })

  describe('stacked mode', () => {
    it('stacked mode renders the correct label', () => {
      const fields = [
        {
          key: 'id',
          label: 'The ID',
        },
        {
          key: 'first_name',
          label: 'this is the first name',
        },
        {
          key: 'last_name',
          label: 'this is the last name',
        },
      ]
      const items = [
        {
          id: 1,
          first_name: 'Ringo',
          last_name: 'Starr',
        },
        {
          id: 2,
          first_name: 'John',
          last_name: 'Lennon',
        },
        {
          id: 3,
          first_name: 'Paul',
          last_name: 'McCartney',
        },
      ]

      const wrapper = mount(BTable, {
        props: {
          fields,
          items,
          stacked: true,
        },
      })

      const trs = wrapper.findAll('tr')
      trs.forEach((tr) => {
        const tds = tr.findAll('td')
        tds.forEach((td, colIndex) => {
          const field = fields[colIndex]
          expect(td.attributes('data-label')).toBe(field.label)
        })
      })
    })

    it('stacked mode breakpoint label', () => {
      const fields = [
        {
          key: 'id',
          label: 'The ID',
        },
        {
          key: 'first_name',
          label: 'this is the first name',
        },
        {
          key: 'last_name',
          label: 'this is the last name',
        },
      ]
      const items = [
        {
          id: 1,
          first_name: 'Ringo',
          last_name: 'Starr',
        },
        {
          id: 2,
          first_name: 'John',
          last_name: 'Lennon',
        },
        {
          id: 3,
          first_name: 'Paul',
          last_name: 'McCartney',
        },
      ]

      const wrapper = mount(BTable, {
        props: {
          fields,
          items,
          stacked: 'md',
        },
      })

      const trs = wrapper.findAll('tr')
      trs.forEach((tr) => {
        const tds = tr.findAll('td')
        tds.forEach((td, colIndex) => {
          const field = fields[colIndex]
          expect(td.attributes('data-label')).toBe(field.label)
        })
      })
    })

    it('does not have duplicate labels when both labelstacked and label', () => {
      const fields = [
        {
          key: 'id',
          label: 'The ID',
        },
        {
          key: 'first_name',
          label: 'this is the first name',
        },
        {
          key: 'last_name',
          label: 'this is the last name',
        },
      ]

      const items = [
        {
          id: 1,
          first_name: 'Ringo',
          last_name: 'Starr',
        },
        {
          id: 2,
          first_name: 'John',
          last_name: 'Lennon',
        },
        {
          id: 3,
          first_name: 'Paul',
          last_name: 'McCartney',
        },
      ]

      const wrapper = mount(BTable, {
        props: {
          fields,
          items,
          stacked: true,
          labelStacked: true,
        },
      })

      const labels = wrapper.findAll('label')
      expect(labels.length).toBe(9)
      const dataLabels = wrapper.findAll('[data-label]')
      expect(dataLabels.length).toBe(0)
    })
  })
})

describe('custom sort comparers', () => {
  const customSortItems: TableItem<SimplePerson>[] = [
    {age: 27, first_name: 'Alice'},
    {age: 9, first_name: 'Bob'},
    {age: 42, first_name: 'Charlie'},
    {age: 35, first_name: 'David'},
  ]

  it('uses table-level sortCompare prop (reverse alphabetical override)', () => {
    const reverseCompare = (a: unknown, b: unknown, key: string) => {
      // Simple reverse alphabetical comparison
      const aVal =
        typeof a === 'object' && a !== null
          ? String((a as SimplePerson)[key as keyof SimplePerson] ?? '')
          : ''
      const bVal =
        typeof b === 'object' && b !== null
          ? String((b as SimplePerson)[key as keyof SimplePerson] ?? '')
          : ''

      // Just reverse the normal comparison
      return bVal.localeCompare(aVal, undefined, {numeric: true})
    }

    const wrapper = mount(BTable, {
      props: {
        items: customSortItems,
        fields: simpleFields,
        sortBy: [{order: 'asc', key: 'first_name'}],
        sortCompare: reverseCompare,
      },
    })

    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    // Reverse alphabetical sort: should be opposite of default
    expect(text).toStrictEqual(['David', 'Charlie', 'Bob', 'Alice'])
  })

  it('uses field-level sortCompare over table-level', () => {
    const tableLevelCompare = () => 0 // Should never be called
    const fieldLevelCompare = (a: SimplePerson, b: SimplePerson, key: string) => {
      // Reverse comparison for first_name field
      if (key === 'first_name') {
        return b.first_name.localeCompare(a.first_name)
      }
      if (key === 'age') {
        return b.age - a.age
      }
      // Fallback for unknown keys
      const aVal = String(a[key as keyof SimplePerson] ?? '')
      const bVal = String(b[key as keyof SimplePerson] ?? '')
      return bVal.localeCompare(aVal)
    }

    const fieldsWithCustomSort: Exclude<TableField<SimplePerson>, string>[] = [
      {
        key: 'first_name',
        label: 'First Name',
        sortable: true,
        sortCompare: fieldLevelCompare,
      },
      {key: 'age', label: 'Age', sortable: true},
    ]

    const wrapper = mount(BTable, {
      props: {
        items: customSortItems,
        fields: fieldsWithCustomSort,
        sortBy: [{order: 'asc', key: 'first_name'}],
        sortCompare: tableLevelCompare,
      },
    })

    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['David', 'Charlie', 'Bob', 'Alice'])
  })

  it('falls back to default comparison when no custom comparer provided', () => {
    const wrapper = mount(BTable, {
      props: {
        items: customSortItems,
        fields: simpleFields,
        sortBy: [{order: 'asc', key: 'first_name'}],
      },
    })

    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    // Default comparison uses localeCompare with numeric: true, which is case-insensitive
    expect(text).toStrictEqual(['Alice', 'Bob', 'Charlie', 'David'])
  })
})

describe('combined sorting features', () => {
  it('uses custom comparer with custom initial sort direction', async () => {
    const reverseCompare = (a: SimplePerson, b: SimplePerson, key: string) => {
      const aVal = a[key as keyof SimplePerson] ?? ''
      const bVal = b[key as keyof SimplePerson] ?? ''
      return bVal.toString().localeCompare(aVal.toString())
    }

    const fieldsWithBoth: Exclude<TableField<SimplePerson>, string>[] = [
      {
        key: 'first_name',
        label: 'First Name',
        sortable: true,
        sortCompare: reverseCompare,
        initialSortDirection: 'desc',
      },
      {key: 'age', label: 'Age', sortable: true},
    ]

    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: fieldsWithBoth,
      },
    })

    const [nameHeader] = wrapper.get('table').findAll('th')
    await nameHeader.trigger('click')

    // Should start with desc (field-level override) and use reverse comparer
    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Cyndi', 'Havij', 'Robert'])
  })

  it('works correctly in multi-sort mode with mixed comparers', () => {
    const ageCompare = (a: SimplePerson, b: SimplePerson, key: string) => {
      if (key === 'age') {
        return b.age - a.age // Type-safe access for known field
      }
      // Generic fallback for unknown keys
      const aVal = a[key as keyof SimplePerson]
      const bVal = b[key as keyof SimplePerson]
      return typeof bVal === 'number' && typeof aVal === 'number'
        ? bVal - aVal
        : String(bVal ?? '').localeCompare(String(aVal ?? ''))
    }

    const fieldsWithMixedComparers: Exclude<TableField<SimplePerson>, string>[] = [
      {key: 'first_name', label: 'First Name', sortable: true}, // Uses default comparer
      {
        key: 'age',
        label: 'Age',
        sortable: true,
        sortCompare: ageCompare,
      },
    ]

    const wrapper = mount(BTable, {
      props: {
        multisort: true,
        items: multiSort,
        fields: fieldsWithMixedComparers,
        sortBy: [
          {key: 'first_name', order: 'asc'}, // Default comparer
          {key: 'age', order: 'asc'}, // Custom comparer (reversed)
        ],
      },
    })

    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.findAll('td')[1].text())
    // With custom age comparer (reversed), "asc" order should show highest ages first within each name group
    expect(text).toStrictEqual(['101', '9', '27', '42', '35'])
  })
})

describe('initial sort direction', () => {
  it('uses table-level initialSortDirection prop (desc)', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
        initialSortDirection: 'desc' as const,
      },
    })

    const [nameHeader] = wrapper.get('table').findAll('th')
    await nameHeader.trigger('click')

    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Robert', 'Havij', 'Cyndi'])
  })

  it('uses field-level initialSortDirection over table-level', async () => {
    const fieldsWithCustomInitialSort: Exclude<TableField<SimplePerson>, string>[] = [
      {
        key: 'first_name',
        label: 'First Name',
        sortable: true,
        initialSortDirection: 'desc',
      },
      {
        key: 'age',
        label: 'Age',
        sortable: true,
        initialSortDirection: 'asc',
      },
    ]

    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: fieldsWithCustomInitialSort,
        initialSortDirection: 'asc' as const, // Table default should be overridden
      },
    })

    // Test first field (desc override)
    const [nameHeader, ageHeader] = wrapper.get('table').findAll('th')
    await nameHeader.trigger('click')

    let text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Robert', 'Havij', 'Cyndi'])

    // Test second field (asc override)
    await ageHeader.trigger('click')
    text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.findAll('td')[1].text())
    expect(text).toStrictEqual(['9', '27', '42'])
  })

  it('handles initialSortDirection "last" at table level', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
        initialSortDirection: 'last' as const,
        sortBy: [{order: 'desc', key: 'age'}], // Start with age desc
      },
    })

    // Click on name field - should use the last sort direction from 'age' (asc), not itself (desc)
    const [nameHeader] = wrapper.get('table').findAll('th')
    await nameHeader.trigger('click')

    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Robert', 'Havij', 'Cyndi'])
  })

  it('handles initialSortDirection "last" at field level', async () => {
    const fieldsWithLastSort: Exclude<TableField<SimplePerson>, string>[] = [
      {
        key: 'first_name',
        label: 'First Name',
        sortable: true,
        initialSortDirection: 'last',
      },
      {key: 'age', label: 'Age', sortable: true},
    ]

    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: fieldsWithLastSort,
        sortBy: [{order: 'desc', key: 'age'}], // Start with age desc
      },
    })

    // Click on name field - should use the last sort direction from 'age' (asc), not itself (desc)
    const [nameHeader] = wrapper.get('table').findAll('th')
    await nameHeader.trigger('click')

    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Robert', 'Havij', 'Cyndi'])
  })

  it('defaults to "asc" when "last" is used but no previous sort exists', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
        initialSortDirection: 'last' as const,
      },
    })

    const [nameHeader] = wrapper.get('table').findAll('th')
    await nameHeader.trigger('click')

    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Cyndi', 'Havij', 'Robert'])
  })

  it('shows correct sort icon opacity for unsorted columns based on initialSortDirection', () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
        initialSortDirection: 'desc' as const,
      },
    })

    const sortIcons = wrapper.findAll('svg')
    expect(sortIcons.length).toBeGreaterThan(0)

    // The icons should have opacity 0.4 for unsorted columns
    sortIcons.forEach((icon) => {
      const style = icon.attributes('style')
      if (style?.includes('opacity')) {
        expect(style).toContain('opacity: 0.4')
      }
    })
  })

  it('excludes current column from getLastSortDirection when using initialSortDirection "last"', async () => {
    // Start with two columns sorted: first_name (desc), age (asc)
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: [
          {key: 'first_name', label: 'First Name', sortable: true, initialSortDirection: 'last'},
          {key: 'age', label: 'Age', sortable: true, initialSortDirection: 'last'},
        ],
        sortBy: [
          {key: 'first_name', order: 'desc'},
          {key: 'age', order: 'asc'},
        ],
        multisort: true,
      },
    })

    const [nameHeader, ageHeader] = wrapper.get('table').findAll('th')

    // Click on 'first_name' header: should use the last sort direction from 'age' (asc), not itself (desc)
    await nameHeader.trigger('click')
    let text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    // Should sort by first_name asc (since last sort direction excluding itself is 'asc')
    expect(text).toStrictEqual(['Cyndi', 'Havij', 'Robert'])

    // Click on 'age' header: should use the last sort direction from 'first_name' (desc), not itself (asc)
    await ageHeader.trigger('click')
    text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.findAll('td')[1].text())
    // Should sort by age desc (since last sort direction excluding itself is 'desc')
    expect(text).toStrictEqual(['42', '27', '9'])
  })

  it('cycles desc <-> asc when initialSortDirection is desc and mustSort is true', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: [
          {key: 'first_name', label: 'First Name', sortable: true},
          {key: 'age', label: 'Age', sortable: true},
        ],
        initialSortDirection: 'desc',
        mustSort: true,
      },
    })

    const [nameHeader] = wrapper.get('table').findAll('th')

    // First click: should be desc
    await nameHeader.trigger('click')
    let text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Robert', 'Havij', 'Cyndi'])
    expect(nameHeader.attributes('aria-sort')).toBe('descending')

    // Second click: should be asc
    await nameHeader.trigger('click')
    text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Cyndi', 'Havij', 'Robert'])
    expect(nameHeader.attributes('aria-sort')).toBe('ascending')

    // Third click: should cycle back to desc (never undefined)
    await nameHeader.trigger('click')
    text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Robert', 'Havij', 'Cyndi'])
    expect(nameHeader.attributes('aria-sort')).toBe('descending')
  })

  it('cycles desc -> asc -> undefined when initialSortDirection is desc and mustSort is not set', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: [
          {key: 'first_name', label: 'First Name', sortable: true},
          {key: 'age', label: 'Age', sortable: true},
        ],
        initialSortDirection: 'desc',
        // mustSort is not set
      },
    })

    const [nameHeader] = wrapper.get('table').findAll('th')

    // First click: should be desc
    await nameHeader.trigger('click')
    let text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Robert', 'Havij', 'Cyndi'])
    expect(nameHeader.attributes('aria-sort')).toBe('descending')

    // Second click: should be asc
    await nameHeader.trigger('click')
    text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Cyndi', 'Havij', 'Robert'])
    expect(nameHeader.attributes('aria-sort')).toBe('ascending')

    // Third click: should be undefined (no aria-sort)
    await nameHeader.trigger('click')
    // The header should not have aria-sort attribute or should be 'none'
    expect(
      nameHeader.attributes('aria-sort') === undefined ||
        nameHeader.attributes('aria-sort') === 'none'
    ).toBe(true)
    // The table should revert to original order (unsorted)
    text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Havij', 'Cyndi', 'Robert'])
  })
})
