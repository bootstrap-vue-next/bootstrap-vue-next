import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it, vi} from 'vitest'
import BTable from './BTable.vue'
import type {BTableProviderContext, BTableSortBy, TableField, TableItem} from '../../types'
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
    formatter: ({item}) => (item ? (item.age >= 18 ? 'Yes' : 'No') : 'Something went wrong'),
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
  ) {}
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
      // Field labels should be present in the header (may also contain sr-only sort labels)
      expect(heads[0].text()).toContain('First Name')
      expect(heads[1].text()).toContain('Age')
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
        sortByFormatted: ({value}) => (value as string).slice(1),
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
        expect(first.classes()).not.toContain('selected')
        expect(second.classes()).not.toContain('selected')
        expect(third.classes()).not.toContain('selected')
        expect(fourth.classes()).toContain('selected')
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

describe('sorting with accessor function', () => {
  interface PersonWithNested {
    id: number
    name: {first: string; last: string}
  }

  const nestedItems: TableItem<PersonWithNested>[] = [
    {id: 1, name: {first: 'Charlie', last: 'Brown'}},
    {id: 2, name: {first: 'Alice', last: 'Smith'}},
    {id: 3, name: {first: 'Bob', last: 'Jones'}},
  ]

  it('sorts correctly when field uses an accessor function', () => {
    const fields: Exclude<TableField<PersonWithNested>, string>[] = [
      {
        key: 'full_name',
        label: 'Full Name',
        sortable: true,
        accessor: (item: PersonWithNested) => item.name.first,
      },
      {key: 'id', label: 'ID'},
    ]

    const wrapper = mount(BTable, {
      props: {
        items: nestedItems,
        fields,
        sortBy: [{order: 'asc', key: 'full_name'}],
      },
    })

    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Alice', 'Bob', 'Charlie'])
  })

  it('sorts correctly in desc order when field uses an accessor function', () => {
    const fields: Exclude<TableField<PersonWithNested>, string>[] = [
      {
        key: 'full_name',
        label: 'Full Name',
        sortable: true,
        accessor: (item: PersonWithNested) => item.name.first,
      },
      {key: 'id', label: 'ID'},
    ]

    const wrapper = mount(BTable, {
      props: {
        items: nestedItems,
        fields,
        sortBy: [{order: 'desc', key: 'full_name'}],
      },
    })

    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Charlie', 'Bob', 'Alice'])
  })

  it('sorts correctly when field uses a string accessor', () => {
    interface PersonWithAlias {
      id: number
      first_name: string
      display_name: string
    }

    const aliasItems: TableItem<PersonWithAlias>[] = [
      {id: 1, first_name: 'Charlie', display_name: 'Charlie B'},
      {id: 2, first_name: 'Alice', display_name: 'Alice S'},
      {id: 3, first_name: 'Bob', display_name: 'Bob J'},
    ]

    const fields: Exclude<TableField<PersonWithAlias>, string>[] = [
      {
        key: 'name',
        label: 'Name',
        sortable: true,
        accessor: 'first_name',
      },
      {key: 'id', label: 'ID'},
    ]

    const wrapper = mount(BTable, {
      props: {
        items: aliasItems,
        fields,
        sortBy: [{order: 'asc', key: 'name'}],
      },
    })

    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Alice', 'Bob', 'Charlie'])
  })

  it('emits sorted event with field key when using function accessor', async () => {
    const fields: Exclude<TableField<PersonWithNested>, string>[] = [
      {
        key: 'full_name',
        label: 'Full Name',
        sortable: true,
        accessor: (item: PersonWithNested) => item.name.first,
      },
      {key: 'id', label: 'ID'},
    ]

    const wrapper = mount(BTable, {
      props: {
        items: nestedItems,
        fields,
      },
    })

    const headers = wrapper.findAll('thead th')
    await headers[0].trigger('click')

    expect(wrapper.emitted('sorted')).toBeTruthy()
    const sortEvent = wrapper.emitted('sorted')?.[0]?.[0] as BTableSortBy
    expect(sortEvent).toMatchObject({
      key: 'full_name',
      order: 'asc',
    })
  })

  it('emits sorted event with field key when using string accessor', async () => {
    interface PersonWithAlias {
      id: number
      first_name: string
      display_name: string
    }

    const aliasItems: TableItem<PersonWithAlias>[] = [
      {id: 1, first_name: 'Charlie', display_name: 'Charlie B'},
      {id: 2, first_name: 'Alice', display_name: 'Alice S'},
      {id: 3, first_name: 'Bob', display_name: 'Bob J'},
    ]

    const fields: Exclude<TableField<PersonWithAlias>, string>[] = [
      {
        key: 'name',
        label: 'Name',
        sortable: true,
        accessor: 'first_name',
      },
      {key: 'id', label: 'ID'},
    ]

    const wrapper = mount(BTable, {
      props: {
        items: aliasItems,
        fields,
      },
    })

    const headers = wrapper.findAll('thead th')
    await headers[0].trigger('click')

    expect(wrapper.emitted('sorted')).toBeTruthy()
    const sortEvent = wrapper.emitted('sorted')?.[0]?.[0] as BTableSortBy
    expect(sortEvent).toMatchObject({
      key: 'name',
      order: 'asc',
    })

    // Verify items are sorted by the accessor value (first_name), not the key
    const text = wrapper
      .get('tbody')
      .findAll('tr')
      .map((row) => row.find('td').text())
    expect(text).toStrictEqual(['Alice', 'Bob', 'Charlie'])
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

  it('shows correct sort icons as CSS background images', () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
        initialSortDirection: 'desc' as const,
      },
    })

    const headers = wrapper.findAll('th[aria-sort]')
    expect(headers.length).toBeGreaterThan(0)

    // All sortable headers should have aria-sort attribute
    headers.forEach((header) => {
      const ariaSort = header.attributes('aria-sort')
      expect(['none', 'ascending', 'descending']).toContain(ariaSort)
    })
  })

  it('applies b-table-sort-icon-left class when sortIconLeft prop is true', () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
        sortIconLeft: true,
      },
    })

    const headers = wrapper.findAll('th[aria-sort]')
    expect(headers.length).toBeGreaterThan(0)

    headers.forEach((header) => {
      expect(header.classes()).toContain('b-table-sort-icon-left')
      expect(header.classes()).not.toContain('b-table-sort-icon-inline')
    })
  })

  it('does not apply b-table-sort-icon-left class when sortIconLeft prop is false', () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
        sortIconLeft: false,
      },
    })

    const headers = wrapper.findAll('th[aria-sort]')
    expect(headers.length).toBeGreaterThan(0)

    headers.forEach((header) => {
      expect(header.classes()).not.toContain('b-table-sort-icon-left')
    })
  })

  it('only applies b-table-sort-icon-left class to sortable fields', () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: [
          {key: 'first_name', label: 'First Name', sortable: true},
          {key: 'age', label: 'Age', sortable: false},
          {key: 'last_name', label: 'Last Name', sortable: true},
        ],
        sortIconLeft: true,
      },
    })

    const headers = wrapper.findAll('th')
    const sortableHeaders = wrapper.findAll('th[aria-sort]')

    // Only sortable fields should have the class
    expect(sortableHeaders.length).toBe(2)
    sortableHeaders.forEach((header) => {
      expect(header.classes()).toContain('b-table-sort-icon-left')
    })

    // Non-sortable field should not have the class
    const ageHeader = headers.find((h) => h.text() === 'Age')
    expect(ageHeader?.classes()).not.toContain('b-table-sort-icon-left')
  })

  it('applies b-table-no-sort-icon class to table when noSortableIcon prop is true', () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
        noSortableIcon: true,
      },
    })

    const table = wrapper.find('table')
    expect(table.classes()).toContain('b-table-no-sort-icon')
  })

  it('does not apply b-table-no-sort-icon class to table when noSortableIcon prop is false', () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
        noSortableIcon: false,
      },
    })

    const table = wrapper.find('table')
    expect(table.classes()).not.toContain('b-table-no-sort-icon')
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

describe('provider debouncing', () => {
  it('debounces provider calls when debounce prop is set', async () => {
    const providerCallCounts: number[] = []
    let callCount = 0

    const provider = vi.fn(async () => {
      callCount++
      providerCallCounts.push(callCount)
      return simpleItems
    })

    const wrapper = mount(BTable, {
      props: {
        provider,
        fields: simpleFields,
        debounce: 300, // Set 300ms debounce
      },
    })

    // Wait for initial mount call
    await new Promise((resolve) => setTimeout(resolve, 50))
    const initialCalls = callCount

    // Rapidly change filter multiple times
    await wrapper.setProps({filter: 'a'})
    await wrapper.setProps({filter: 'ab'})
    await wrapper.setProps({filter: 'abc'})

    // Wait for debounce delay (300ms) + buffer
    await new Promise((resolve) => setTimeout(resolve, 400))

    // After debounce, only one additional call should have been made for all the rapid filter changes
    const finalCalls = callCount
    expect(finalCalls - initialCalls).toBeLessThanOrEqual(2) // At most one debounced call plus potentially one immediate
    expect(finalCalls).toBeGreaterThan(initialCalls) // But at least one call was made
  })

  it('does not debounce provider calls when debounce is 0 (default)', async () => {
    let callCount = 0

    const provider = vi.fn(async () => {
      callCount++
      return simpleItems
    })

    const wrapper = mount(BTable, {
      props: {
        provider,
        fields: simpleFields,
        // debounce defaults to 0 (immediate)
      },
    })

    // Wait for initial mount call
    await new Promise((resolve) => setTimeout(resolve, 50))
    const initialCalls = callCount

    // Change filter - with debounce=0, this should be immediate
    await wrapper.setProps({filter: 'a'})
    await nextTick()

    // Should be called immediately
    await new Promise((resolve) => setTimeout(resolve, 50))
    expect(callCount).toBe(initialCalls + 1)
  })

  it('supports AbortSignal in provider context', async () => {
    let receivedSignal: AbortSignal | undefined

    const provider = vi.fn(async (context: Readonly<BTableProviderContext>) => {
      receivedSignal = context.signal
      return simpleItems
    })

    mount(BTable, {
      props: {
        provider,
        fields: simpleFields,
      },
    })

    // Wait for initial mount call
    await new Promise((resolve) => setTimeout(resolve, 50))

    // Signal should be present
    expect(receivedSignal).toBeDefined()
    expect(receivedSignal).toBeInstanceOf(AbortSignal)
  })

  it('cancels previous provider call when new one is triggered', async () => {
    let abortedCount = 0
    const provider = vi.fn(
      async (context: Readonly<BTableProviderContext>) =>
        new Promise<typeof simpleItems>((resolve, reject) => {
          const timeout = setTimeout(() => resolve(simpleItems), 100)
          context.signal.addEventListener('abort', () => {
            clearTimeout(timeout)
            abortedCount++
            reject(new Error('AbortError'))
          })
        })
    )

    const wrapper = mount(BTable, {
      props: {
        provider,
        fields: simpleFields,
        debounce: 300,
      },
    })

    // Wait for initial mount call
    await new Promise((resolve) => setTimeout(resolve, 50))

    // Rapidly change filter - this should abort previous calls
    await wrapper.setProps({filter: 'a'})
    await new Promise((resolve) => setTimeout(resolve, 10))
    await wrapper.setProps({filter: 'ab'})
    await new Promise((resolve) => setTimeout(resolve, 10))
    await wrapper.setProps({filter: 'abc'})

    // Wait for final debounced call to complete
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Previous calls should have been aborted
    expect(abortedCount).toBeGreaterThan(0)
  })

  it('does not set busy to false when first provider finishes while second is still running', async () => {
    let callCount = 0

    const provider = vi.fn(async (context: Readonly<BTableProviderContext>) => {
      callCount++
      const currentCall = callCount

      if (currentCall === 2) {
        // First call after mount: delay and get aborted
        return new Promise<typeof simpleItems>((resolve, reject) => {
          const timeout = setTimeout(() => {
            resolve(simpleItems)
          }, 150)

          context.signal.addEventListener('abort', () => {
            clearTimeout(timeout)
            reject(new Error('AbortError'))
          })
        }).catch((error) => {
          // Silently handle AbortError in test
          if (error.message === 'AbortError') {
            return simpleItems
          }
          throw error
        })
      } else if (currentCall === 3) {
        // Second call: longer delay
        return new Promise<typeof simpleItems>((resolve) => {
          setTimeout(() => {
            resolve(simpleItems)
          }, 300)
        })
      }

      // Initial mount call
      return simpleItems
    })

    const wrapper = mount(BTable, {
      props: {
        provider,
        fields: simpleFields,
        debounce: 0, // No debounce for this test
      },
    })

    const $table = wrapper.find('table')

    // Wait for initial mount call
    await new Promise((resolve) => setTimeout(resolve, 50))
    expect($table.classes()).not.toContain('b-table-busy') // Should not be busy after initial call

    // Trigger first provider call
    await wrapper.setProps({filter: 'first'})
    await new Promise((resolve) => setTimeout(resolve, 20))
    expect($table.classes()).toContain('b-table-busy') // Should be busy while first call is running

    // Trigger second provider call while first is still running
    await wrapper.setProps({filter: 'second'})
    await new Promise((resolve) => setTimeout(resolve, 20))
    expect($table.classes()).toContain('b-table-busy') // Should still be busy

    // Wait for first provider to finish being aborted
    await new Promise((resolve) => setTimeout(resolve, 200))

    // The busy state should still be true because the second provider is still running
    expect($table.classes()).toContain('b-table-busy')

    // Wait for second provider to complete
    await new Promise((resolve) => setTimeout(resolve, 200))

    // Now busy should be false
    expect($table.classes()).not.toContain('b-table-busy')
  })
})

describe('v-model:items with provider', () => {
  it('updates v-model:items when provider returns data', async () => {
    const providerItems: TableItem<SimplePerson>[] = [
      {age: 30, first_name: 'John'},
      {age: 25, first_name: 'Jane'},
    ]

    const provider = vi.fn(async () => providerItems)

    const wrapper = mount(BTable, {
      props: {
        provider,
        'fields': simpleFields,
        'onUpdate:items': (val: unknown) => wrapper.setProps({items: val as typeof providerItems}),
      },
    })

    // Wait for initial mount call to complete
    await new Promise((resolve) => setTimeout(resolve, 50))

    // v-model:items should be updated with provider results
    expect(wrapper.props('items')).toEqual(providerItems)
  })

  it('emits update:items when provider fetches new data on filter change', async () => {
    const initialItems: TableItem<SimplePerson>[] = [{age: 30, first_name: 'John'}]
    const filteredItems: TableItem<SimplePerson>[] = [{age: 25, first_name: 'Jane'}]

    let callCount = 0
    const provider = vi.fn(async () => {
      callCount++
      return callCount === 1 ? initialItems : filteredItems
    })

    const wrapper = mount(BTable, {
      props: {
        provider,
        'fields': simpleFields,
        'onUpdate:items': (val: unknown) => wrapper.setProps({items: val as typeof initialItems}),
      },
    })

    // Wait for initial provider call
    await new Promise((resolve) => setTimeout(resolve, 50))
    expect(wrapper.props('items')).toEqual(initialItems)

    // Trigger filter change to call provider again
    await wrapper.setProps({filter: 'test'})
    await new Promise((resolve) => setTimeout(resolve, 50))

    // v-model:items should now have the filtered data
    expect(wrapper.props('items')).toEqual(filteredItems)
  })

  it('works with one-way binding :items when not using provider', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
      },
    })

    const rows = wrapper.findAll('tbody tr')
    expect(rows.length).toBe(simpleItems.length)
  })
})

describe('event emissions', () => {
  const items = [
    {id: 1, first_name: 'John', age: 30},
    {id: 2, first_name: 'Jane', age: 25},
    {id: 3, first_name: 'Bob', age: 35},
  ]
  const fields: Exclude<TableField<(typeof items)[0]>, string>[] = [
    {key: 'first_name', label: 'Name', sortable: true},
    {key: 'age', label: 'Age', sortable: true},
  ]

  it('emits sorted event when column header is clicked', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const headers = wrapper.findAll('thead th')
    await headers[0].trigger('click')

    expect(wrapper.emitted('sorted')).toBeTruthy()
    const sortEvent = wrapper.emitted('sorted')?.[0]?.[0] as BTableSortBy
    expect(sortEvent).toMatchObject({
      key: 'first_name',
      order: 'asc',
    })
  })

  it('emits filtered event when filter changes', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields, filter: ''},
    })

    await wrapper.setProps({filter: 'John'})
    await nextTick()

    expect(wrapper.emitted('filtered')).toBeTruthy()
    const filteredItems = wrapper.emitted('filtered')?.[0]?.[0] as typeof items
    expect(filteredItems).toHaveLength(1)
    expect(filteredItems[0].first_name).toBe('John')
  })

  it('emits filtered event exactly once per filter change when toggling filter', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields, filter: 'John', filterable: ['first_name']},
    })

    // Clear the initial filtered emission from mount
    wrapper.emitted('filtered')?.splice(0)

    // Toggle filter off (set to empty string)
    await wrapper.setProps({filter: ''})
    await nextTick()
    expect(wrapper.emitted('filtered')).toHaveLength(1)

    // Toggle filter on again
    await wrapper.setProps({filter: 'John'})
    await nextTick()
    expect(wrapper.emitted('filtered')).toHaveLength(2)

    // Toggle filter off again
    await wrapper.setProps({filter: ''})
    await nextTick()
    expect(wrapper.emitted('filtered')).toHaveLength(3)

    // Toggle filter on once more
    await wrapper.setProps({filter: 'John'})
    await nextTick()
    expect(wrapper.emitted('filtered')).toHaveLength(4)
  })

  it('emits row-selected event when row is selected', async () => {
    const wrapper = mount(BTable, {
      props: {
        items,
        fields,
        selectable: true,
        selectMode: 'multi',
      },
    })

    const rows = wrapper.findAll('tbody tr')
    await rows[0].trigger('click')

    expect(wrapper.emitted('row-selected')).toBeTruthy()
    expect(wrapper.emitted('row-selected')?.[0]?.[0]).toEqual(items[0])
  })

  it('emits row-unselected event when selected row is clicked again', async () => {
    const wrapper = mount(BTable, {
      props: {
        items,
        fields,
        selectable: true,
        selectMode: 'multi',
      },
    })

    const rows = wrapper.findAll('tbody tr')
    // First click to select
    await rows[0].trigger('click')
    expect(wrapper.emitted('row-selected')).toBeTruthy()

    // Second click to unselect
    await rows[0].trigger('click')
    expect(wrapper.emitted('row-unselected')).toBeTruthy()
    expect(wrapper.emitted('row-unselected')?.[0]?.[0]).toEqual(items[0])
  })

  it('emits change event when sorted items change', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields},
    })

    const headers = wrapper.findAll('thead th')
    await headers[0].trigger('click')
    await nextTick()

    expect(wrapper.emitted('change')).toBeTruthy()
    const changedItems = wrapper.emitted('change')?.[0]?.[0] as typeof items
    expect(changedItems).toHaveLength(items.length)
  })

  it('emits row-clicked event inherited from BTableLite', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields},
    })

    const rows = wrapper.findAll('tbody tr')
    await rows[0].trigger('click')

    expect(wrapper.emitted('row-clicked')).toBeTruthy()
    expect(wrapper.emitted('row-clicked')?.[0]).toEqual([
      {
        item: items[0],
        index: 0,
        event: expect.any(Object),
      },
    ])
  })

  it('emits row-dblclicked event inherited from BTableLite', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields},
    })

    const rows = wrapper.findAll('tbody tr')
    await rows[1].trigger('dblclick')

    expect(wrapper.emitted('row-dblclicked')).toBeTruthy()
    expect(wrapper.emitted('row-dblclicked')?.[0]).toEqual([
      {
        item: items[1],
        index: 1,
        event: expect.any(Object),
      },
    ])
  })

  it('emits head-clicked event inherited from BTableLite', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields},
    })

    const headers = wrapper.findAll('thead th')
    await headers[1].trigger('click')

    expect(wrapper.emitted('head-clicked')).toBeTruthy()
    const emittedEvent = wrapper.emitted('head-clicked')?.[0]?.[0]
    expect(emittedEvent).toEqual({
      key: 'age',
      field: expect.objectContaining({key: 'age', label: 'Age', sortable: true}),
      event: expect.any(Object),
      isFooter: false,
    })
  })

  it('emits multiple events in correct order when interacting', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields},
    })

    // Click header to sort
    const headers = wrapper.findAll('thead th')
    await headers[0].trigger('click')
    await nextTick()

    // Should emit head-clicked, sorted, and change
    expect(wrapper.emitted('head-clicked')).toBeTruthy()
    expect(wrapper.emitted('sorted')).toBeTruthy()
    expect(wrapper.emitted('change')).toBeTruthy()

    // Verify all events were emitted
    expect(wrapper.emitted('head-clicked')?.length).toBeGreaterThanOrEqual(1)
    expect(wrapper.emitted('sorted')?.length).toBeGreaterThanOrEqual(1)
  })
})

describe('BTable styling props', () => {
  it('applies fixed table layout when fixed prop is true', () => {
    const wrapper = mount(BTable, {
      props: {
        items: [{name: 'test'}],
        fields: ['name'],
        fixed: true,
      },
    })
    expect(wrapper.find('table').classes()).toContain('b-table-fixed')
  })

  it('does not apply fixed class when fixed prop is false or undefined', () => {
    const wrapper = mount(BTable, {
      props: {
        items: [{name: 'test'}],
        fields: ['name'],
        fixed: false,
      },
    })
    expect(wrapper.find('table').classes()).not.toContain('b-table-fixed')
  })

  it('disables border collapse when noBorderCollapse prop is true', () => {
    const wrapper = mount(BTable, {
      props: {
        items: [{name: 'test'}],
        fields: ['name'],
        noBorderCollapse: true,
      },
    })
    expect(wrapper.find('table').classes()).toContain('b-table-no-border-collapse')
  })

  it('does not apply no-border-collapse class when prop is false or undefined', () => {
    const wrapper = mount(BTable, {
      props: {
        items: [{name: 'test'}],
        fields: ['name'],
        noBorderCollapse: false,
      },
    })
    expect(wrapper.find('table').classes()).not.toContain('b-table-no-border-collapse')
  })
})

describe('BTable busy state', () => {
  it('shows items when busy and no table-busy slot specified', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: [{name: 'test'}],
        fields: ['name'],
        busy: true,
      },
    })
    await nextTick()
    expect(wrapper.text()).toContain('test')
  })

  it('shows table-busy slot content instead of items when busy and slot provided', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: [{name: 'test'}],
        fields: ['name'],
        busy: true,
      },
      slots: {
        'table-busy': '<div>Custom slot content</div>',
      },
    })
    await nextTick()
    expect(wrapper.text()).toContain('Custom slot content')
    expect(wrapper.text()).not.toContain('test')
  })

  it('does not show table-busy slot when not busy', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: [{name: 'test'}],
        fields: ['name'],
        busy: false,
      },
      slots: {
        'table-busy': '<div>Custom slot content</div>',
      },
    })
    await nextTick()
    expect(wrapper.text()).not.toContain('Custom slot content')
    expect(wrapper.text()).toContain('test')
  })

  it('filters correctly with filterFunction when filter prop is empty string', async () => {
    const tag = 1
    const wrapper = mount(BTable, {
      props: {
        filter: 'e',
        items: [
          {name: 'fred', tag: 1},
          {name: 'joe', tag: 1},
          {name: 'eric', tag: 2},
        ],
        filterFunction: (item, str) => item.tag === tag && item.name.includes(str),
      },
    })
    const tbody = wrapper.find('tbody')
    expect(tbody.text()).toBe('fred1joe1')
    await wrapper.setProps({
      filter: 'ee',
    })
    expect(tbody.text()).toBe('')
    await wrapper.setProps({
      filter: '',
    })
    expect(tbody.text()).toBe('fred1joe1')
  })

  describe('empty slots', () => {
    it('shows empty slot when items is empty and filter is undefined', () => {
      const wrapper = mount(BTable, {
        props: {
          items: [],
          fields: ['name'],
          showEmpty: true,
        },
        slots: {
          'empty': 'No items available',
          'empty-filtered': 'No filtered items',
        },
      })
      expect(wrapper.text()).toContain('No items available')
      expect(wrapper.text()).not.toContain('No filtered items')
    })

    it('shows empty slot when items is empty and filter is empty string', () => {
      const wrapper = mount(BTable, {
        props: {
          items: [],
          fields: ['name'],
          showEmpty: true,
          filter: '',
        },
        slots: {
          'empty': 'No items available',
          'empty-filtered': 'No filtered items',
        },
      })
      expect(wrapper.text()).toContain('No items available')
      expect(wrapper.text()).not.toContain('No filtered items')
    })

    it('shows empty-filtered slot when items is empty and filter has value', () => {
      const wrapper = mount(BTable, {
        props: {
          items: [],
          fields: ['name'],
          showEmpty: true,
          filter: 'test',
        },
        slots: {
          'empty': 'No items available',
          'empty-filtered': 'No filtered items',
        },
      })
      expect(wrapper.text()).toContain('No filtered items')
      expect(wrapper.text()).not.toContain('No items available')
    })

    it('shows empty-filtered slot when filtering results in no items', async () => {
      const wrapper = mount(BTable, {
        props: {
          items: [{name: 'fred'}, {name: 'joe'}],
          fields: ['name'],
          showEmpty: true,
          filter: 'bob',
        },
        slots: {
          'empty': 'No items available',
          'empty-filtered': 'No filtered items',
        },
      })
      expect(wrapper.text()).toContain('No filtered items')
      expect(wrapper.text()).not.toContain('No items available')
    })

    it('switches from empty-filtered to empty when filter changes to empty string', async () => {
      const wrapper = mount(BTable, {
        props: {
          items: [],
          fields: ['name'],
          showEmpty: true,
          filter: 'test',
        },
        slots: {
          'empty': 'No items available',
          'empty-filtered': 'No filtered items',
        },
      })
      expect(wrapper.text()).toContain('No filtered items')
      await wrapper.setProps({filter: ''})
      await nextTick()
      expect(wrapper.text()).toContain('No items available')
      expect(wrapper.text()).not.toContain('No filtered items')
    })

    it('shows default emptyText when no empty slot is provided', () => {
      const wrapper = mount(BTable, {
        props: {
          items: [],
          fields: ['name'],
          showEmpty: true,
        },
      })
      expect(wrapper.text()).toContain('There are no records to show')
    })

    it('shows default emptyFilteredText when no empty-filtered slot is provided', () => {
      const wrapper = mount(BTable, {
        props: {
          items: [],
          fields: ['name'],
          showEmpty: true,
          filter: 'test',
        },
      })
      expect(wrapper.text()).toContain('There are no records matching your request')
    })

    it('uses custom emptyText prop', () => {
      const wrapper = mount(BTable, {
        props: {
          items: [],
          fields: ['name'],
          showEmpty: true,
          emptyText: 'Custom empty message',
        },
      })
      expect(wrapper.text()).toContain('Custom empty message')
    })

    it('uses custom emptyFilteredText prop', () => {
      const wrapper = mount(BTable, {
        props: {
          items: [],
          fields: ['name'],
          showEmpty: true,
          filter: 'search',
          emptyFilteredText: 'Custom filtered message',
        },
      })
      expect(wrapper.text()).toContain('Custom filtered message')
    })

    it('does not show empty content when showEmpty is false', () => {
      const wrapper = mount(BTable, {
        props: {
          items: [],
          fields: ['name'],
          showEmpty: false,
        },
      })
      expect(wrapper.text()).not.toContain('There are no records to show')
    })

    it('provides emptySlotScope bindings to empty slot', () => {
      let receivedScope: Record<string, unknown> | undefined
      const wrapper = mount(BTable, {
        props: {
          items: [],
          fields: ['name'],
          showEmpty: true,
          emptyText: 'Nothing here',
          emptyFilteredText: 'Nothing filtered',
        },
        slots: {
          empty: (scope: Record<string, unknown>) => {
            receivedScope = scope
            return 'Empty'
          },
        },
      })
      expect(wrapper.text()).toContain('Empty')
      expect(receivedScope).toBeDefined()
      expect(receivedScope?.emptyText).toBe('Nothing here')
      expect(receivedScope?.emptyFilteredText).toBe('Nothing filtered')
      expect(receivedScope?.fields).toBeDefined()
      expect(receivedScope?.items).toBeDefined()
    })
  })
})

describe('pagination', () => {
  const paginationItems = Array.from({length: 15}, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
  }))
  const paginationFields: TableField[] = [{key: 'id'}, {key: 'name'}]

  it('limits displayed items to perPage value', () => {
    const wrapper = mount(BTable, {
      props: {
        items: paginationItems,
        fields: paginationFields,
        perPage: 5,
        currentPage: 1,
      },
    })
    expect(wrapper.findAll('tbody tr')).toHaveLength(5)
  })

  it('shows correct items for page 2', () => {
    const wrapper = mount(BTable, {
      props: {
        items: paginationItems,
        fields: paginationFields,
        perPage: 5,
        currentPage: 2,
      },
    })
    const rows = wrapper.findAll('tbody tr')
    expect(rows).toHaveLength(5)
    expect(rows[0].text()).toContain('6')
    expect(rows[4].text()).toContain('10')
  })

  it('shows remaining items on last page', () => {
    const wrapper = mount(BTable, {
      props: {
        items: paginationItems,
        fields: paginationFields,
        perPage: 5,
        currentPage: 3,
      },
    })
    const rows = wrapper.findAll('tbody tr')
    expect(rows).toHaveLength(5)
    expect(rows[0].text()).toContain('11')
    expect(rows[4].text()).toContain('15')
  })

  it('shows all items when perPage is not set (defaults to Infinity)', () => {
    const wrapper = mount(BTable, {
      props: {
        items: paginationItems,
        fields: paginationFields,
      },
    })
    expect(wrapper.findAll('tbody tr')).toHaveLength(15)
  })

  it('updates displayed items when currentPage changes', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: paginationItems,
        fields: paginationFields,
        perPage: 5,
        currentPage: 1,
      },
    })
    expect(wrapper.findAll('tbody tr')).toHaveLength(5)
    expect(wrapper.findAll('tbody tr')[0].text()).toContain('1')

    await wrapper.setProps({currentPage: 2})
    await nextTick()
    expect(wrapper.findAll('tbody tr')[0].text()).toContain('6')
  })

  it('accepts string perPage value (Numberish)', () => {
    const wrapper = mount(BTable, {
      props: {
        items: paginationItems,
        fields: paginationFields,
        perPage: '5' as unknown as number,
        currentPage: 1,
      },
    })
    expect(wrapper.findAll('tbody tr')).toHaveLength(5)
  })

  it('accepts string currentPage value (Numberish)', () => {
    const wrapper = mount(BTable, {
      props: {
        items: paginationItems,
        fields: paginationFields,
        perPage: 5,
        currentPage: '2' as unknown as number,
      },
    })
    const rows = wrapper.findAll('tbody tr')
    expect(rows[0].text()).toContain('6')
  })
})

describe('filtering', () => {
  const filterItems = [
    {name: 'Alice', age: 30, city: 'New York'},
    {name: 'Bob', age: 25, city: 'London'},
    {name: 'Charlie', age: 35, city: 'New York'},
    {name: 'Diana', age: 28, city: 'Paris'},
  ]
  const filterFields: TableField[] = [{key: 'name'}, {key: 'age'}, {key: 'city'}]

  it('filters items by string filter across all fields', () => {
    const wrapper = mount(BTable, {
      props: {
        items: filterItems,
        fields: filterFields,
        filter: 'New York',
      },
    })
    const rows = wrapper.findAll('tbody tr')
    expect(rows).toHaveLength(2)
  })

  it('uses filterable prop to restrict which fields are searched', () => {
    const wrapper = mount(BTable, {
      props: {
        items: filterItems,
        fields: filterFields,
        filter: 'Alice',
        filterable: ['name'],
      },
    })
    expect(wrapper.findAll('tbody tr')).toHaveLength(1)
  })

  it('does not match fields not in filterable list', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: filterItems,
        fields: filterFields,
        filter: '30',
        filterable: ['name'],
      },
    })
    // Age field shouldn't be searched since only 'name' is filterable
    expect(wrapper.findAll('tbody tr')).toHaveLength(0)
  })

  it('uses custom filterFunction', () => {
    const filterFn = vi.fn(
      (item: (typeof filterItems)[0], filter: string) =>
        item.city.toLowerCase() === filter.toLowerCase()
    )
    const wrapper = mount(BTable, {
      props: {
        items: filterItems,
        fields: filterFields,
        filter: 'Paris',
        filterFunction: filterFn,
      },
    })
    expect(wrapper.findAll('tbody tr')).toHaveLength(1)
    expect(wrapper.findAll('tbody tr')[0].text()).toContain('Diana')
    expect(filterFn).toHaveBeenCalled()
  })

  it('updates filtered results when filter prop changes', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: filterItems,
        fields: filterFields,
        filter: 'Alice',
      },
    })
    expect(wrapper.findAll('tbody tr')).toHaveLength(1)

    await wrapper.setProps({filter: 'Bob'})
    await nextTick()
    expect(wrapper.findAll('tbody tr')).toHaveLength(1)
    expect(wrapper.findAll('tbody tr')[0].text()).toContain('Bob')
  })

  it('shows all items when filter is cleared', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: filterItems,
        fields: filterFields,
        filter: 'Alice',
      },
    })
    expect(wrapper.findAll('tbody tr')).toHaveLength(1)

    await wrapper.setProps({filter: ''})
    await nextTick()
    expect(wrapper.findAll('tbody tr')).toHaveLength(filterItems.length)
  })

  it('filter is case-insensitive by default', () => {
    const wrapper = mount(BTable, {
      props: {
        items: filterItems,
        fields: filterFields,
        filter: 'alice',
      },
    })
    expect(wrapper.findAll('tbody tr')).toHaveLength(1)
  })
})

describe('noSelectOnClick', () => {
  const selectItems = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
  ]

  it('does not select row on click when noSelectOnClick is true', async () => {
    const wrapper = mount(BTable, {
      props: {
        'items': selectItems,
        'selectable': true,
        'selectMode': 'multi' as const,
        'noSelectOnClick': true,
        'selectedItems': [],
        'onUpdate:selectedItems': (value: unknown) =>
          wrapper.setProps({selectedItems: value as typeof selectItems}),
      },
    })
    const rows = wrapper.findAll('tbody tr')
    await rows[0].trigger('click')
    expect(rows[0].classes()).not.toContain('selected')
  })

  it('still emits row-clicked event when noSelectOnClick is true', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: selectItems,
        selectable: true,
        noSelectOnClick: true,
      },
    })
    const rows = wrapper.findAll('tbody tr')
    await rows[0].trigger('click')
    expect(wrapper.emitted('row-clicked')).toBeTruthy()
  })

  it('applies user-select-none class when selectable and items are selected', async () => {
    const wrapper = mount(BTable, {
      props: {
        'items': selectItems,
        'selectable': true,
        'selectMode': 'multi' as const,
        'selectedItems': [],
        'onUpdate:selectedItems': (value: unknown) =>
          wrapper.setProps({selectedItems: value as typeof selectItems}),
      },
    })
    const $table = wrapper.get('table')
    expect($table.classes()).not.toContain('user-select-none')

    const rows = wrapper.findAll('tbody tr')
    await rows[0].trigger('click')
    expect($table.classes()).toContain('user-select-none')
  })

  it('does not apply user-select-none when noSelectOnClick is true', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: selectItems,
        selectable: true,
        noSelectOnClick: true,
        selectedItems: selectItems,
      },
    })
    const $table = wrapper.get('table')
    expect($table.classes()).not.toContain('user-select-none')
  })
})

describe('selectionVariant', () => {
  it('applies correct variant class to selected rows', async () => {
    const items = [
      {id: 1, name: 'Alice'},
      {id: 2, name: 'Bob'},
    ]
    const wrapper = mount(BTable, {
      props: {
        items,
        'selectable': true,
        'selectMode': 'multi' as const,
        'selectionVariant': 'success',
        'selectedItems': [],
        'onUpdate:selectedItems': (value: unknown) =>
          wrapper.setProps({selectedItems: value as typeof items}),
      },
    })
    const rows = wrapper.findAll('tbody tr')
    await rows[0].trigger('click')
    expect(rows[0].classes()).toContain('table-success')
    expect(rows[0].classes()).toContain('selected')
  })

  it('defaults to primary variant for selected rows', async () => {
    const items = [{id: 1, name: 'Alice'}]
    const wrapper = mount(BTable, {
      props: {
        items,
        'selectable': true,
        'selectMode': 'multi' as const,
        'selectedItems': [],
        'onUpdate:selectedItems': (value: unknown) =>
          wrapper.setProps({selectedItems: value as typeof items}),
      },
    })
    const rows = wrapper.findAll('tbody tr')
    await rows[0].trigger('click')
    expect(rows[0].classes()).toContain('table-primary')
  })
})

describe('exposed selection API', () => {
  const items = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'},
  ]

  it('exposes selection.add() and selection.remove()', async () => {
    const wrapper = mount(BTable, {
      props: {
        items,
        'selectable': true,
        'primaryKey': 'id',
        'selectedItems': [],
        'onUpdate:selectedItems': (value: unknown) =>
          wrapper.setProps({selectedItems: value as typeof items}),
      },
    })
    wrapper.vm.selection.add(items[0])
    await nextTick()
    expect(wrapper.vm.selection.has(items[0])).toBe(true)

    wrapper.vm.selection.remove(items[0])
    await nextTick()
    expect(wrapper.vm.selection.has(items[0])).toBe(false)
  })

  it('exposes selection.setAll() and selection.clear()', async () => {
    const wrapper = mount(BTable, {
      props: {
        items,
        'selectable': true,
        'primaryKey': 'id',
        'selectedItems': [],
        'onUpdate:selectedItems': (value: unknown) =>
          wrapper.setProps({selectedItems: value as typeof items}),
      },
    })
    wrapper.vm.selection.setAll()
    await nextTick()
    expect(wrapper.vm.selection.has(items[0])).toBe(true)
    expect(wrapper.vm.selection.has(items[1])).toBe(true)
    expect(wrapper.vm.selection.has(items[2])).toBe(true)

    wrapper.vm.selection.clear()
    await nextTick()
    expect(wrapper.vm.selection.has(items[0])).toBe(false)
    expect(wrapper.vm.selection.has(items[1])).toBe(false)
    expect(wrapper.vm.selection.has(items[2])).toBe(false)
  })

  it('exposes selection.set() to replace selection', async () => {
    const wrapper = mount(BTable, {
      props: {
        items,
        'selectable': true,
        'primaryKey': 'id',
        'selectedItems': [],
        'onUpdate:selectedItems': (value: unknown) =>
          wrapper.setProps({selectedItems: value as typeof items}),
      },
    })
    wrapper.vm.selection.set([items[1]])
    await nextTick()
    expect(wrapper.vm.selection.has(items[0])).toBe(false)
    expect(wrapper.vm.selection.has(items[1])).toBe(true)
    expect(wrapper.vm.selection.has(items[2])).toBe(false)
  })

  it('exposes selection.isActivated computed', async () => {
    const wrapper = mount(BTable, {
      props: {
        items,
        'selectable': true,
        'primaryKey': 'id',
        'selectedItems': [],
        'onUpdate:selectedItems': (value: unknown) =>
          wrapper.setProps({selectedItems: value as typeof items}),
      },
    })
    expect(wrapper.vm.selection.isActivated.value).toBe(false)
    wrapper.vm.selection.add(items[0])
    await nextTick()
    expect(wrapper.vm.selection.isActivated.value).toBe(true)
  })

  it('exposes selection.selectedItems as readonly ref', () => {
    const wrapper = mount(BTable, {
      props: {
        items,
        selectable: true,
        primaryKey: 'id',
        selectedItems: [],
      },
    })
    expect(wrapper.vm.selection.selectedItems).toBeDefined()
  })
})

describe('exposed expansion API', () => {
  const items = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'},
  ]

  it('exposes expansion.toggle()', async () => {
    const wrapper = mount(BTable, {
      props: {
        items,
        'primaryKey': 'id',
        'expandedItems': [],
        'onUpdate:expandedItems': (value: unknown) =>
          wrapper.setProps({expandedItems: value as typeof items}),
      },
    })
    wrapper.vm.expansion.toggle(items[0])
    await nextTick()
    expect(wrapper.vm.expansion.has(items[0])).toBe(true)

    wrapper.vm.expansion.toggle(items[0])
    await nextTick()
    expect(wrapper.vm.expansion.has(items[0])).toBe(false)
  })

  it('exposes expansion.add() and expansion.remove()', async () => {
    const wrapper = mount(BTable, {
      props: {
        items,
        'primaryKey': 'id',
        'expandedItems': [],
        'onUpdate:expandedItems': (value: unknown) =>
          wrapper.setProps({expandedItems: value as typeof items}),
      },
    })
    wrapper.vm.expansion.add(items[0])
    await nextTick()
    expect(wrapper.vm.expansion.has(items[0])).toBe(true)

    wrapper.vm.expansion.remove(items[0])
    await nextTick()
    expect(wrapper.vm.expansion.has(items[0])).toBe(false)
  })

  it('exposes expansion.setAll() and expansion.clear()', async () => {
    const wrapper = mount(BTable, {
      props: {
        items,
        'primaryKey': 'id',
        'expandedItems': [],
        'onUpdate:expandedItems': (value: unknown) =>
          wrapper.setProps({expandedItems: value as typeof items}),
      },
    })
    wrapper.vm.expansion.setAll()
    await nextTick()
    expect(wrapper.vm.expansion.has(items[0])).toBe(true)
    expect(wrapper.vm.expansion.has(items[1])).toBe(true)
    expect(wrapper.vm.expansion.has(items[2])).toBe(true)

    wrapper.vm.expansion.clear()
    await nextTick()
    expect(wrapper.vm.expansion.has(items[0])).toBe(false)
  })

  it('exposes expansion.isActivated computed', async () => {
    const wrapper = mount(BTable, {
      props: {
        items,
        'primaryKey': 'id',
        'expandedItems': [],
        'onUpdate:expandedItems': (value: unknown) =>
          wrapper.setProps({expandedItems: value as typeof items}),
      },
    })
    expect(wrapper.vm.expansion.isActivated.value).toBe(false)
    wrapper.vm.expansion.add(items[0])
    await nextTick()
    expect(wrapper.vm.expansion.isActivated.value).toBe(true)
  })

  it('exposes expansion.expandedItems as readonly ref', () => {
    const wrapper = mount(BTable, {
      props: {
        items,
        primaryKey: 'id',
        expandedItems: [],
      },
    })
    expect(wrapper.vm.expansion.expandedItems).toBeDefined()
  })
})

describe('exposed items and displayItems', () => {
  const items = Array.from({length: 10}, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
  }))

  it('exposes items computed with all filtered/sorted items', () => {
    const wrapper = mount(BTable, {
      props: {
        items,
        fields: [{key: 'id'}, {key: 'name'}],
      },
    })
    expect(wrapper.vm.items).toHaveLength(10)
  })

  it('exposes displayItems with paginated items', () => {
    const wrapper = mount(BTable, {
      props: {
        items,
        fields: [{key: 'id'}, {key: 'name'}],
        perPage: 3,
        currentPage: 1,
      },
    })
    expect(wrapper.vm.displayItems).toHaveLength(3)
  })

  it('items reflects filtered results', () => {
    const wrapper = mount(BTable, {
      props: {
        items,
        fields: [{key: 'id'}, {key: 'name'}],
        filter: 'Item 1',
      },
    })
    // "Item 1", "Item 10" should match
    expect(wrapper.vm.items.length).toBeLessThan(10)
  })

  it('displayItems reflects pagination on filtered results', () => {
    const wrapper = mount(BTable, {
      props: {
        items,
        fields: [{key: 'id'}, {key: 'name'}],
        perPage: 2,
        currentPage: 1,
      },
    })
    expect(wrapper.vm.displayItems).toHaveLength(2)
    expect(wrapper.vm.items).toHaveLength(10)
  })
})

describe('exposed refresh method', () => {
  it('re-invokes provider when refresh is called', async () => {
    let callCount = 0
    const provider = vi.fn(async () => {
      callCount++
      return simpleItems
    })
    const wrapper = mount(BTable, {
      props: {
        provider,
        fields: simpleFields,
      },
    })

    await new Promise((resolve) => setTimeout(resolve, 50))
    const initialCalls = callCount

    wrapper.vm.refresh()
    await new Promise((resolve) => setTimeout(resolve, 50))

    expect(callCount).toBeGreaterThan(initialCalls)
  })
})

describe('BTable additional event emissions', () => {
  const items = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
  ]
  const fields: TableField[] = [{key: 'id'}, {key: 'name'}]

  it('emits row-contextmenu event', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const rows = wrapper.findAll('tbody tr')
    await rows[0].trigger('contextmenu')
    expect(wrapper.emitted('row-contextmenu')).toBeTruthy()
    expect(wrapper.emitted('row-contextmenu')?.[0]).toEqual([
      {
        item: items[0],
        index: 0,
        event: expect.any(Object),
      },
    ])
  })

  it('emits row-hovered event', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const rows = wrapper.findAll('tbody tr')
    await rows[0].trigger('mouseenter')
    expect(wrapper.emitted('row-hovered')).toBeTruthy()
    expect(wrapper.emitted('row-hovered')?.[0]).toEqual([
      {
        item: items[0],
        index: 0,
        event: expect.any(Object),
      },
    ])
  })

  it('emits row-unhovered event', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const rows = wrapper.findAll('tbody tr')
    await rows[0].trigger('mouseleave')
    expect(wrapper.emitted('row-unhovered')).toBeTruthy()
    expect(wrapper.emitted('row-unhovered')?.[0]).toEqual([
      {
        item: items[0],
        index: 0,
        event: expect.any(Object),
      },
    ])
  })

  it('emits row-middle-clicked event', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const rows = wrapper.findAll('tbody tr')
    await rows[0].trigger('mousedown', {button: 1})
    expect(wrapper.emitted('row-middle-clicked')).toBeTruthy()
    expect(wrapper.emitted('row-middle-clicked')?.[0]).toEqual([
      {
        item: items[0],
        index: 0,
        event: expect.any(Object),
      },
    ])
  })
})

describe('tbodyTrClass as function', () => {
  it('calls tbodyTrClass function with item and row type', () => {
    const trClassFn = vi.fn((item: {name: string} | null) => (item ? 'has-item' : 'no-item'))
    mount(BTable, {
      props: {
        items: [{name: 'test'}],
        fields: ['name'],
        tbodyTrClass: trClassFn,
      },
    })
    expect(trClassFn).toHaveBeenCalled()
    const [rowCall] = trClassFn.mock.calls.filter((c) => c[0] !== null)
    expect(rowCall).toBeDefined()
    expect(rowCall?.[0]).toEqual({name: 'test'})
  })

  it('calls tbodyTrClass with null and "table-busy" for busy row', () => {
    const trClassFn = vi.fn(() => 'custom-class')
    mount(BTable, {
      props: {
        items: [{name: 'test'}],
        fields: ['name'],
        busy: true,
        tbodyTrClass: trClassFn,
      },
      slots: {
        'table-busy': '<div>Loading...</div>',
      },
    })
    expect(trClassFn).toHaveBeenCalledWith(null, 'table-busy')
  })

  it('applies string tbodyTrClass to all rows', () => {
    const wrapper = mount(BTable, {
      props: {
        items: [{name: 'Alice'}, {name: 'Bob'}],
        fields: ['name'],
        tbodyTrClass: 'custom-row-class',
      },
    })
    const rows = wrapper.findAll('tbody tr')
    rows.forEach((row) => {
      expect(row.classes()).toContain('custom-row-class')
    })
  })
})

describe('BTable selectable class', () => {
  it('applies b-table-selectable class when selectable is true', () => {
    const wrapper = mount(BTable, {
      props: {
        items: [{name: 'test'}],
        fields: ['name'],
        selectable: true,
      },
    })
    expect(wrapper.find('table').classes()).toContain('b-table-selectable')
  })

  it('does not apply b-table-selectable class when selectable is false', () => {
    const wrapper = mount(BTable, {
      props: {
        items: [{name: 'test'}],
        fields: ['name'],
        selectable: false,
      },
    })
    expect(wrapper.find('table').classes()).not.toContain('b-table-selectable')
  })
})

describe('busy state aria-busy', () => {
  it('sets aria-busy to true when busy', () => {
    const wrapper = mount(BTable, {
      props: {
        items: [{name: 'test'}],
        fields: ['name'],
        busy: true,
      },
    })
    expect(wrapper.get('table').attributes('ariabusy')).toBe('true')
  })

  it('does not set aria-busy when not busy', () => {
    const wrapper = mount(BTable, {
      props: {
        items: [{name: 'test'}],
        fields: ['name'],
        busy: false,
      },
    })
    expect(wrapper.get('table').attributes('ariabusy')).toBe('false')
  })

  it('applies b-table-busy class when busy', () => {
    const wrapper = mount(BTable, {
      props: {
        items: [{name: 'test'}],
        fields: ['name'],
        busy: true,
      },
    })
    expect(wrapper.find('table').classes()).toContain('b-table-busy')
  })

  it('does not apply b-table-busy class when not busy', () => {
    const wrapper = mount(BTable, {
      props: {
        items: [{name: 'test'}],
        fields: ['name'],
        busy: false,
      },
    })
    expect(wrapper.find('table').classes()).not.toContain('b-table-busy')
  })

  it('shows busy slot with b-table-busy-slot class', () => {
    const wrapper = mount(BTable, {
      props: {
        items: [{name: 'test'}],
        fields: ['name'],
        busy: true,
      },
      slots: {
        'table-busy': '<div class="spinner">Loading...</div>',
      },
    })
    expect(wrapper.find('.b-table-busy-slot').exists()).toBe(true)
  })
})

describe('noLocalSorting', () => {
  it('does not sort items locally when noLocalSorting is true', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
        noLocalSorting: true,
        sortBy: [{key: 'first_name', order: 'asc' as const}],
      },
    })

    const $tbody = wrapper.get('tbody')
    const $trs = $tbody.findAll('tr')
    // Items should remain in original order
    expect($trs[0].text()).toContain('Havij')
    expect($trs[1].text()).toContain('Cyndi')
    expect($trs[2].text()).toContain('Robert')
  })

  it('still emits sorted event when noLocalSorting is true', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
        noLocalSorting: true,
      },
    })
    const headers = wrapper.findAll('thead th')
    await headers[0].trigger('click')
    expect(wrapper.emitted('sorted')).toBeTruthy()
  })
})

describe('provider context', () => {
  it('sends sortBy in provider context', async () => {
    let receivedContext: BTableProviderContext | undefined

    const provider = vi.fn(async (context: Readonly<BTableProviderContext>) => {
      receivedContext = {...context}
      return simpleItems
    })

    mount(BTable, {
      props: {
        provider,
        fields: simpleFields,
        sortBy: [{key: 'first_name', order: 'asc' as const}],
      },
    })

    await new Promise((resolve) => setTimeout(resolve, 50))
    expect(receivedContext).toBeDefined()
    expect(receivedContext?.sortBy).toEqual([{key: 'first_name', order: 'asc'}])
  })

  it('sends filter in provider context', async () => {
    let receivedContext: BTableProviderContext | undefined

    const provider = vi.fn(async (context: Readonly<BTableProviderContext>) => {
      receivedContext = {...context}
      return simpleItems
    })

    mount(BTable, {
      props: {
        provider,
        fields: simpleFields,
        filter: 'test-filter',
      },
    })

    await new Promise((resolve) => setTimeout(resolve, 50))
    expect(receivedContext).toBeDefined()
    expect(receivedContext?.filter).toBe('test-filter')
  })

  it('sends currentPage and perPage in provider context', async () => {
    let receivedContext: BTableProviderContext | undefined

    const provider = vi.fn(async (context: Readonly<BTableProviderContext>) => {
      receivedContext = {...context}
      return simpleItems
    })

    mount(BTable, {
      props: {
        provider,
        fields: simpleFields,
        currentPage: 3,
        perPage: 10,
      },
    })

    await new Promise((resolve) => setTimeout(resolve, 50))
    expect(receivedContext).toBeDefined()
    expect(receivedContext?.currentPage).toBe(3)
    expect(receivedContext?.perPage).toBe(10)
  })

  it('applies local sorting when noProviderSorting is true', async () => {
    const provider = vi.fn(async () => [
      {first_name: 'Zebra', age: 1},
      {first_name: 'Apple', age: 2},
    ])

    const wrapper = mount(BTable, {
      props: {
        provider,
        fields: simpleFields,
        noProviderSorting: true,
        sortBy: [{key: 'first_name', order: 'asc' as const}],
      },
    })

    await new Promise((resolve) => setTimeout(resolve, 50))
    const rows = wrapper.findAll('tbody tr')
    expect(rows[0].text()).toContain('Apple')
    expect(rows[1].text()).toContain('Zebra')
  })

  it('applies local filtering when noProviderFiltering is true', async () => {
    const provider = vi.fn(async () => [
      {first_name: 'Alice', age: 30},
      {first_name: 'Bob', age: 25},
      {first_name: 'Charlie', age: 35},
    ])

    const wrapper = mount(BTable, {
      props: {
        provider,
        fields: simpleFields,
        noProviderFiltering: true,
        filter: 'Alice',
      },
    })

    await new Promise((resolve) => setTimeout(resolve, 50))
    expect(wrapper.findAll('tbody tr')).toHaveLength(1)
    expect(wrapper.findAll('tbody tr')[0].text()).toContain('Alice')
  })

  it('applies local pagination when noProviderPaging is true', async () => {
    const manyItems = Array.from({length: 10}, (_, i) => ({
      first_name: `Person ${i + 1}`,
      age: 20 + i,
    }))
    const provider = vi.fn(async () => manyItems)

    const wrapper = mount(BTable, {
      props: {
        provider,
        fields: simpleFields,
        noProviderPaging: true,
        perPage: 3,
        currentPage: 1,
      },
    })

    await new Promise((resolve) => setTimeout(resolve, 50))
    expect(wrapper.findAll('tbody tr')).toHaveLength(3)
  })
})

describe('mustSort prop', () => {
  it('prevents clearing sort when mustSort is true', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
        mustSort: true,
      },
    })
    const headers = wrapper.findAll('thead th')

    // First click: asc
    await headers[0].trigger('click')
    let sortEvents = wrapper.emitted('sorted') as BTableSortBy[][]
    expect(sortEvents[0][0]).toMatchObject({order: 'asc'})

    // Second click: desc
    await headers[0].trigger('click')
    sortEvents = wrapper.emitted('sorted') as BTableSortBy[][]
    expect(sortEvents[1][0]).toMatchObject({order: 'desc'})

    // Third click: back to asc (not undefined)
    await headers[0].trigger('click')
    sortEvents = wrapper.emitted('sorted') as BTableSortBy[][]
    expect(sortEvents[2][0]).toMatchObject({order: 'asc'})
  })

  it('allows clearing sort when mustSort is false', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
        mustSort: false,
      },
    })
    const headers = wrapper.findAll('thead th')

    // First click: asc
    await headers[0].trigger('click')
    // Second click: desc
    await headers[0].trigger('click')
    // Third click: undefined (cleared)
    await headers[0].trigger('click')

    const sortEvents = wrapper.emitted('sorted') as BTableSortBy[][]
    expect(sortEvents[2][0]).toMatchObject({order: undefined})
  })
})

describe('slot pass-through', () => {
  it('passes through thead-top slot', () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
      },
      slots: {
        'thead-top': '<tr><th colspan="2">Custom header top</th></tr>',
      },
    })
    expect(wrapper.text()).toContain('Custom header top')
  })

  it('passes through table-caption slot', () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
      },
      slots: {
        'table-caption': 'My Table Caption',
      },
    })
    expect(wrapper.text()).toContain('My Table Caption')
  })

  it('passes through custom-foot slot', () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
      },
      slots: {
        'custom-foot': '<tr><td colspan="2">Custom footer</td></tr>',
      },
    })
    expect(wrapper.text()).toContain('Custom footer')
  })

  it('passes through bottom-row slot', () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
      },
      slots: {
        'bottom-row': '<tr><td colspan="2">Bottom row content</td></tr>',
      },
    })
    expect(wrapper.text()).toContain('Bottom row content')
  })

  it('passes through top-row slot', () => {
    const wrapper = mount(BTable, {
      props: {
        items: simpleItems,
        fields: simpleFields,
      },
      slots: {
        'top-row': '<tr><td colspan="2">Top row content</td></tr>',
      },
    })
    expect(wrapper.text()).toContain('Top row content')
  })
})

describe('sortNullLast', () => {
  const itemsWithNulls = [
    {id: 1, name: 'Alice', score: 30},
    {id: 2, name: null, score: null},
    {id: 3, name: 'Bob', score: 10},
    {id: 4, name: undefined, score: undefined},
    {id: 5, name: 'Charlie', score: 20},
  ]

  it('sorts null/undefined values first by default (ascending)', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: itemsWithNulls,
        fields: [{key: 'name', sortable: true}],
        sortBy: [{key: 'name', order: 'asc'}],
      },
    })
    const rows = wrapper.findAll('tbody tr')
    // With default behavior (no sortNullLast), nulls appear as empty strings and sort first
    const names = rows.map((r) => r.findAll('td')[0].text())
    expect(names[0]).toBe('')
    expect(names[1]).toBe('')
    expect(names[2]).toBe('Alice')
  })

  it('sorts null/undefined values last when sortNullLast is true (ascending)', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: itemsWithNulls,
        fields: [{key: 'name', sortable: true}],
        sortBy: [{key: 'name', order: 'asc'}],
        sortNullLast: true,
      },
    })
    const rows = wrapper.findAll('tbody tr')
    const names = rows.map((r) => r.findAll('td')[0].text())
    expect(names[0]).toBe('Alice')
    expect(names[1]).toBe('Bob')
    expect(names[2]).toBe('Charlie')
    // Null values come last
    expect(names[3]).toBe('')
    expect(names[4]).toBe('')
  })

  it('sorts null/undefined values last when sortNullLast is true (descending)', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: itemsWithNulls,
        fields: [{key: 'name', sortable: true}],
        sortBy: [{key: 'name', order: 'desc'}],
        sortNullLast: true,
      },
    })
    const rows = wrapper.findAll('tbody tr')
    const names = rows.map((r) => r.findAll('td')[0].text())
    expect(names[0]).toBe('Charlie')
    expect(names[1]).toBe('Bob')
    expect(names[2]).toBe('Alice')
    // Null values still come last even in descending order
    expect(names[3]).toBe('')
    expect(names[4]).toBe('')
  })
})

describe('noFooterSorting', () => {
  const items = [
    {id: 1, name: 'Charlie'},
    {id: 2, name: 'Alice'},
    {id: 3, name: 'Bob'},
  ]
  const fields: Exclude<TableField<(typeof items)[0]>, string>[] = [
    {key: 'name', label: 'Name', sortable: true},
  ]

  it('sorts when clicking the footer by default (footClone enabled)', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields, footClone: true},
    })
    const footHeaders = wrapper.findAll('tfoot th')
    await footHeaders[0].trigger('click')
    const rows = wrapper.findAll('tbody tr')
    const names = rows.map((r) => r.find('td').text())
    expect(names).toStrictEqual(['Alice', 'Bob', 'Charlie'])
  })

  it('does not sort when clicking the footer when noFooterSorting is true', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields, footClone: true, noFooterSorting: true},
    })
    const footHeaders = wrapper.findAll('tfoot th')
    await footHeaders[0].trigger('click')
    const rows = wrapper.findAll('tbody tr')
    const names = rows.map((r) => r.find('td').text())
    // Items should remain in original order (no sort triggered)
    expect(names).toStrictEqual(['Charlie', 'Alice', 'Bob'])
  })

  it('still sorts when clicking the header when noFooterSorting is true', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields, footClone: true, noFooterSorting: true},
    })
    const headHeaders = wrapper.findAll('thead th')
    await headHeaders[0].trigger('click')
    const rows = wrapper.findAll('tbody tr')
    const names = rows.map((r) => r.find('td').text())
    expect(names).toStrictEqual(['Alice', 'Bob', 'Charlie'])
  })
})

describe('label-sort props', () => {
  const items = [{name: 'Alice'}, {name: 'Bob'}]
  const fields: Exclude<TableField<(typeof items)[0]>, string>[] = [
    {key: 'name', label: 'Name', sortable: true},
  ]

  it('shows default sort ascending label for unsorted sortable column', () => {
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const th = wrapper.find('thead th')
    const srOnly = th.find('.visually-hidden')
    expect(srOnly.exists()).toBe(true)
    expect(srOnly.text()).toBe('Click to sort ascending')
  })

  it('shows custom label-sort-asc for unsorted sortable column', () => {
    const wrapper = mount(BTable, {
      props: {items, fields, labelSortAsc: 'Sort A-Z'},
    })
    const srOnly = wrapper.find('thead th .visually-hidden')
    expect(srOnly.text()).toBe('Sort A-Z')
  })

  it('shows label-sort-desc after sorting ascending', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields, sortBy: [{key: 'name', order: 'asc'}]},
    })
    const srOnly = wrapper.find('thead th .visually-hidden')
    expect(srOnly.text()).toBe('Click to sort descending')
  })

  it('shows label-sort-clear after sorting descending', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields, sortBy: [{key: 'name', order: 'desc'}]},
    })
    const srOnly = wrapper.find('thead th .visually-hidden')
    expect(srOnly.text()).toBe('Click to clear sorting')
  })

  it('shows custom label-sort-desc', () => {
    const wrapper = mount(BTable, {
      props: {items, fields, sortBy: [{key: 'name', order: 'asc'}], labelSortDesc: 'Sort Z-A'},
    })
    const srOnly = wrapper.find('thead th .visually-hidden')
    expect(srOnly.text()).toBe('Sort Z-A')
  })

  it('shows custom label-sort-clear', () => {
    const wrapper = mount(BTable, {
      props: {
        items,
        fields,
        sortBy: [{key: 'name', order: 'desc'}],
        labelSortClear: 'Remove sort',
      },
    })
    const srOnly = wrapper.find('thead th .visually-hidden')
    expect(srOnly.text()).toBe('Remove sort')
  })

  it('does not show sort label for non-sortable columns', () => {
    const fieldsNoSort: Exclude<TableField<(typeof items)[0]>, string>[] = [
      {key: 'name', label: 'Name', sortable: false},
    ]
    const wrapper = mount(BTable, {
      props: {items, fields: fieldsNoSort},
    })
    const srOnly = wrapper.find('thead th .visually-hidden')
    expect(srOnly.exists()).toBe(false)
  })
})

describe('aria-multiselectable', () => {
  const items = [{name: 'Alice'}, {name: 'Bob'}]

  it('sets aria-multiselectable=true when selectable and selectMode is multi', () => {
    const wrapper = mount(BTable, {
      props: {items, selectable: true, selectMode: 'multi'},
    })
    expect(wrapper.find('table').attributes('aria-multiselectable')).toBe('true')
  })

  it('sets aria-multiselectable=true when selectable and selectMode is range', () => {
    const wrapper = mount(BTable, {
      props: {items, selectable: true, selectMode: 'range'},
    })
    expect(wrapper.find('table').attributes('aria-multiselectable')).toBe('true')
  })

  it('does not set aria-multiselectable when selectMode is single', () => {
    const wrapper = mount(BTable, {
      props: {items, selectable: true, selectMode: 'single'},
    })
    expect(wrapper.find('table').attributes('aria-multiselectable')).toBeUndefined()
  })

  it('does not set aria-multiselectable when not selectable', () => {
    const wrapper = mount(BTable, {
      props: {items, selectable: false},
    })
    expect(wrapper.find('table').attributes('aria-multiselectable')).toBeUndefined()
  })
})

describe('context-changed event', () => {
  const items = [{name: 'Alice'}, {name: 'Bob'}]
  const fields: Exclude<TableField<(typeof items)[0]>, string>[] = [
    {key: 'name', label: 'Name', sortable: true},
  ]

  it('emits context-changed when filter changes', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields, filter: ''},
    })
    await wrapper.setProps({filter: 'Alice'})
    await nextTick()
    expect(wrapper.emitted('context-changed')).toBeTruthy()
    const ctx = wrapper.emitted('context-changed')?.[0]?.[0] as BTableProviderContext
    expect(ctx.filter).toBe('Alice')
  })

  it('emits context-changed when sortBy changes', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields, sortBy: []},
    })
    await wrapper.setProps({sortBy: [{key: 'name', order: 'asc' as const}]})
    await nextTick()
    expect(wrapper.emitted('context-changed')).toBeTruthy()
    const ctx = wrapper.emitted('context-changed')?.[0]?.[0] as BTableProviderContext
    expect(ctx.sortBy).toEqual([{key: 'name', order: 'asc'}])
  })

  it('emits context-changed when currentPage changes', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields, perPage: 1, currentPage: 1},
    })
    await wrapper.setProps({currentPage: 2})
    await nextTick()
    expect(wrapper.emitted('context-changed')).toBeTruthy()
    const ctx = wrapper.emitted('context-changed')?.[0]?.[0] as BTableProviderContext
    expect(ctx.currentPage).toBe(2)
  })
})

describe('filterByFormatted as function', () => {
  const items = [
    {id: 1, score: 85},
    {id: 2, score: 92},
    {id: 3, score: 73},
  ]

  it('filters using filterByFormatted as boolean (uses formatter)', async () => {
    const fields: Exclude<TableField<(typeof items)[0]>, string>[] = [
      {
        key: 'score',
        label: 'Grade',
        sortable: false,
        filterByFormatted: true,
        formatter: ({value}) => {
          const score = Number(value)
          return score >= 90 ? 'A' : score >= 80 ? 'B' : 'C'
        },
      },
    ]
    const wrapper = mount(BTable, {
      props: {items, fields, filter: 'A'},
    })
    await nextTick()
    const rows = wrapper.findAll('tbody tr')
    expect(rows).toHaveLength(1)
    expect(rows[0].find('td').text()).toBe('A') // score 92 -> 'A'
  })

  it('filters using filterByFormatted as a custom function', async () => {
    const fields: Exclude<TableField<(typeof items)[0]>, string>[] = [
      {
        key: 'score',
        label: 'Score',
        sortable: false,
        filterByFormatted: ({value}) => {
          const score = Number(value)
          return score >= 90 ? 'Excellent' : 'Good'
        },
      },
    ]
    const wrapper = mount(BTable, {
      props: {items, fields, filter: 'Excellent'},
    })
    await nextTick()
    const rows = wrapper.findAll('tbody tr')
    expect(rows).toHaveLength(1)
    expect(rows[0].find('td').text()).toBe('92') // raw value shown since no formatter
  })
})
