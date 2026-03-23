import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTableLite from './BTableLite.vue'

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

describe('btablelite', () => {
  enableAutoUnmount(afterEach)

  it('Can serialize an array of numbers', () => {
    const items = [1, 2, 3]
    const wrapper = mount(BTableLite, {
      props: {items},
    })
    const $trs = wrapper.get('tbody').findAll('tr')
    $trs.forEach(($tr, i) => {
      expect($tr.text()).toBe(items[i].toString())
    })
  })

  it('Can serialize an array of strings', () => {
    const items = ['a', 'b', 'c']
    const wrapper = mount(BTableLite, {
      props: {items},
    })
    const $trs = wrapper.get('tbody').findAll('tr')
    $trs.forEach(($tr, i) => {
      expect($tr.get('td').text()).toBe(items[i].toString())
    })
  })

  it('Array of numbers causes header to display none', () => {
    const wrapper = mount(BTableLite, {
      props: {items: [1, 2, 3]},
    })
    expect(wrapper.get('thead').attributes('style')).toContain('display: none')
  })

  it('Array of strings causes header to display none', () => {
    const wrapper = mount(BTableLite, {
      props: {items: ['a', 'b', 'c']},
    })
    expect(wrapper.get('thead').attributes('style')).toContain('display: none')
  })

  it('Array of objects does not cause header to display none', () => {
    const wrapper = mount(BTableLite, {
      props: {items: [{a: 1, b: 2}]},
    })
    // This is rather fickle since style attr could possibly be added. We simply want to say '.not.toContain', but the attribute doesn't exist now
    // It's expected now, but could change in the future
    expect(wrapper.get('thead').attributes('style')).toBeUndefined()
  })

  it('array of array of strings does not cause header to display none', () => {
    const wrapper = mount(BTableLite, {
      props: {items: [['a', 'b', 'c']]},
    })
    expect(wrapper.get('thead').attributes('style')).toBeUndefined()
  })

  it('Array of objects serializes headers properly', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [
          {'an idiot admires complexity, a genius admires simplicity': 1, 'b': 2},
          {a: 3, b: 4},
        ],
      },
    })
    const $thead = wrapper.get('thead')
    const $th = $thead.findAll('th')
    expect($th.length).toBe(2)
    // Capitalizes the first letter of the key
    expect($th[0].text()).toBe('An idiot admires complexity, a genius admires simplicity')
    expect($th[1].text()).toBe('B')
  })

  it('mismatched object keys will only display the first object in the arrays header', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [{a: 1}, {b: 4}],
      },
    })
    const $thead = wrapper.get('thead')
    const $th = $thead.findAll('th')
    expect($th.length).toBe(1)
    expect($th[0].text()).toBe('A')
  })

  it('mismatched object keys will only display items that are included in the appropriate headers', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [
          {a: 1, b: 2},
          {b: 3, c: 4},
        ], // "c" is not included in the headers
      },
    })
    const $table = wrapper.get('tbody')
    expect($table.text()).toBe('123')
  })

  it('mismatched object keys will have the correct structure, but does not have data for the missing key', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [
          {a: 1, b: 2},
          {b: 3, c: 4},
        ], // "c" is not included in the headers
      },
    })
    const [, $second] = wrapper.get('tbody').findAll('tr')
    const $td = $second.findAll('td')
    expect($td.length).toBe(2) // <-- still has the appropriate amount of columns
    expect($td[0].text()).toBe('') // <-- but doesn't have the data for the missing key
    expect($td[1].text()).toBe('3')
  })

  it('Array of objects serializes data properly', () => {
    const items = [
      {a: 1, b: 2},
      {a: 3, b: 4},
    ]
    const wrapper = mount(BTableLite, {
      props: {
        items,
      },
    })
    const $tbody = wrapper.get('tbody')
    const $tr = $tbody.findAll('tr')
    $tr.forEach((el, ind) => {
      const $tds = el.findAll('td')
      expect($tds.length).toBe(2)
      const text = $tds.map(($td) => $td.text())
      // This doesn't check the structure of the table. Only that it includes the data
      expect(text.join('')).toBe(Object.values(items[ind]).join('')) // '12' , '34'
    })
  })

  it('Array of arrays serializes headers properly', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [
          [1, 2],
          [3, 4],
        ],
      },
    })
    const $thead = wrapper.get('thead')
    const $th = $thead.findAll('th')
    expect($th.length).toBe(2)
    expect($th[0].text()).toBe('0')
    expect($th[1].text()).toBe('1')
  })

  it('Array of arrays serializes data properly', () => {
    const items = [
      [1, 2],
      [3, 4],
    ]
    const wrapper = mount(BTableLite, {
      props: {
        items,
      },
    })
    const $tbody = wrapper.get('tbody')
    const $tr = $tbody.findAll('tr')
    $tr.forEach((el, i) => {
      const $tds = el.findAll('td')
      expect($tds.length).toBe(2)
      $tds.forEach(($td, j) => {
        expect($td.text()).toBe(items[i][j].toString())
      })
    })
  })

  it('Will properly display row details when toggleExpansion is actived', async () => {
    const items = [
      [1, 2],
      [1, 2],
    ]
    const wrapper = mount(BTableLite, {
      props: {
        items,
      },
      slots: {
        'cell()': `<template #cell()="row"><button id="foobar" size="sm" @click="row.toggleExpansion">{{ row.expansionShowing ? 'Hide' : 'Show' }} notes</button></template>`,
        'row-expansion': `<template #row-expansion="row">THE ROW!</template>`,
      },
    })
    const [$first, , $third] = wrapper.findAll('#foobar')

    await $first.trigger('click')
    await $third.trigger('click')

    expect((wrapper.html().match(/THE ROW!/g) || []).length).toBe(2)
  })

  it('Passes the original object for scoped cell slot item', () => {
    const items = [new Person(1, 'John', 'Doe', 30), new Person(2, 'Jane', 'Smith', 25)]
    const wrapper = mount(BTableLite, {
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

  it('Sets the head variant correctly', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [{a: 1, b: 2}],
        headVariant: 'dark',
      },
    })
    const $thead = wrapper.get('thead')
    expect($thead.classes()).toContain('table-dark')
  })

  it('Sets the foot variant correctly', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [{a: 1, b: 2}],
        footVariant: 'primary',
        footClone: true,
      },
    })
    const $tfoot = wrapper.get('tfoot')
    expect($tfoot.classes()).toContain('table-primary')
  })

  it('Falls back to head variant in cloned footer', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [{a: 1, b: 2}],
        headVariant: 'primary',
        footClone: true,
      },
    })
    const $tfoot = wrapper.get('tfoot')
    expect($tfoot.classes()).toContain('table-primary')
  })

  it('Sets the head row variant correctly', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [{a: 1, b: 2}],
        headRowVariant: 'dark',
      },
    })
    const $tr = wrapper.get('thead tr')
    expect($tr.classes()).toContain('table-dark')
  })

  it('Sets the foot row variant correctly', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [{a: 1, b: 2}],
        footRowVariant: 'primary',
        footClone: true,
      },
    })
    const $tr = wrapper.get('tfoot tr')
    expect($tr.classes()).toContain('table-primary')
  })

  it('Falls back to head row variant in cloned footer', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [{a: 1, b: 2}],
        headRowVariant: 'primary',
        footClone: true,
      },
    })
    const $tr = wrapper.get('tfoot tr')
    expect($tr.classes()).toContain('table-primary')
  })

  it('Renders the #head() slot correctly', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [{a: 1, b: 2}],
      },
      slots: {
        'head()': `<template #head()>Custom Header</template>`,
      },
    })
    const $thead = wrapper.get('thead')
    const $th = $thead.findAll('th')
    expect($th.length).toBe(2)
    expect($th[0].text()).toBe('Custom Header')
    expect($th[1].text()).toBe('Custom Header')
  })

  it('Renders the #head(x) slot correctly', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [{a: 1, b: 2}],
      },
      slots: {
        'head()': `<template #head()>Custom Header</template>`,
        'head(a)': `<template #head()>A</template>`,
      },
    })
    const $thead = wrapper.get('thead')
    const $th = $thead.findAll('th')
    expect($th.length).toBe(2)
    expect($th[0].text()).toBe('A')
    expect($th[1].text()).toBe('Custom Header')
  })

  it('Renders the #foot() slot correctly', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [{a: 1, b: 2}],
        footClone: true,
      },
      slots: {
        'foot()': `<template #foot()>Custom Footer</template>`,
      },
    })
    const $tfoot = wrapper.get('tfoot')
    const $th = $tfoot.findAll('th')
    expect($th.length).toBe(2)
    expect($th[0].text()).toBe('Custom Footer')
    expect($th[1].text()).toBe('Custom Footer')
  })

  it('Renders the #foot(x) slot correctly', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [{a: 1, b: 2}],
        footClone: true,
      },
      slots: {
        'foot()': `<template #foot()>Custom Footer</template>`,
        'foot(a)': `<template #foot()>A</template>`,
      },
    })
    const $tfoot = wrapper.get('tfoot')
    const $th = $tfoot.findAll('th')
    expect($th.length).toBe(2)
    expect($th[0].text()).toBe('A')
    expect($th[1].text()).toBe('Custom Footer')
  })

  it('Renders the #foot() slot correctly falling back to #head() slot', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [{a: 1, b: 2}],
        footClone: true,
      },
      slots: {
        'head()': `<template #head()>Custom Header</template>`,
      },
    })
    const $tfoot = wrapper.get('tfoot')
    const $th = $tfoot.findAll('th')
    expect($th.length).toBe(2)
    expect($th[0].text()).toBe('Custom Header')
    expect($th[1].text()).toBe('Custom Header')
  })

  it('Renders the #foot(x) slot correctly falling back to #head(x) slot', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [{a: 1, b: 2}],
        footClone: true,
      },
      slots: {
        'head()': `<template #head()>Custom Header</template>`,
        'head(a)': `<template #head()>A</template>`,
      },
    })
    const $tfoot = wrapper.get('tfoot')
    const $th = $tfoot.findAll('th')
    expect($th.length).toBe(2)
    expect($th[0].text()).toBe('A')
    expect($th[1].text()).toBe('Custom Header')
  })

  it('Prefers the #foot() slot to the #head(x) slot when falling back from #foot(x)', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [{a: 1, b: 2}],
        footClone: true,
      },
      slots: {
        'head()': `<template #head()>Custom Header</template>`,
        'head(a)': `<template #head()>A</template>`,
        'foot()': `<template #head()>Custom Footer</template>`,
      },
    })
    const $tfoot = wrapper.get('tfoot')
    const $th = $tfoot.findAll('th')
    expect($th.length).toBe(2)
    expect($th[0].text()).toBe('Custom Footer')
    expect($th[1].text()).toBe('Custom Footer')
  })

  it('Passes the original objects for scoped cell slot items', () => {
    const items = [new Person(1, 'John', 'Doe', 30), new Person(2, 'Jane', 'Smith', 25)]
    const wrapper = mount(BTableLite, {
      props: {
        primaryKey: 'id',
        items,
      },
      slots: {
        'cell()': `<template #cell()="row">{{ row.items[0].constructor.name }}</template>`,
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

  it('Passes the original objects for scoped custom table body', () => {
    const items = [new Person(1, 'John', 'Doe', 30), new Person(2, 'Jane', 'Smith', 25)]
    const wrapper = mount(BTableLite, {
      props: {
        primaryKey: 'id',
        items,
      },
      slots: {
        'custom-body': `<template #custom-body="table">{{ table.items[0].constructor.name }}</template>`,
      },
    })
    const $tbody = wrapper.get('tbody')
    expect($tbody.text()).toBe('Person')
  })

  describe('toggle details', () => {
    it('works internally', async () => {
      const items = [{isActive: true, age: 40, name: {first: 'Dickerson', last: 'Macdonald'}}]
      const fields = [{key: 'actions', label: 'Actions', sortable: false}]
      const wrapper = mount(BTableLite, {
        props: {
          items,
          fields,
        },
        slots: {
          'cell(actions)':
            '<template #cell(actions)="row"><button @click="row.toggleExpansion"></button></template>',
          'row-expansion': 'foobar!',
        },
      })
      await wrapper.get('button').trigger('click')
      expect(wrapper.text()).toContain('foobar!')
      await wrapper.get('button').trigger('click')
      expect(wrapper.text()).not.toContain('foobar!')
    })

    it('works externally with v-model:expanded-items', async () => {
      const fields = [{key: 'actions', label: 'Actions', sortable: false}]
      const item = {
        isActive: true,
        age: 40,
        name: {first: 'Dickerson', last: 'Macdonald'},
      }
      const wrapper = mount(BTableLite, {
        props: {
          'items': [item],
          'expandedItems': [item],
          'onUpdate:expandedItems': (e: (typeof item)[]) => wrapper.setProps({expandedItems: e}),
          fields,
        },
        slots: {
          'cell(actions)':
            '<template #cell(actions)="row"><button @click="row.toggleExpansion"></button></template>',
          'row-expansion': 'foobar!',
        },
      })
      expect(wrapper.text()).toContain('foobar!')
      await wrapper.setProps({expandedItems: []})
      expect(wrapper.text()).not.toContain('foobar!')
      await wrapper.get('button').trigger('click')
      expect(wrapper.text()).toContain('foobar!')
      await wrapper.setProps({expandedItems: []})
      expect(wrapper.text()).not.toContain('foobar!')
    })

    it('persists details when items are replaced with new object references but same primary key', async () => {
      const fields = [{key: 'actions', label: 'Actions', sortable: false}]
      const wrapper = mount(BTableLite, {
        props: {
          primaryKey: 'id',
          items: [
            {id: 1, isActive: true, age: 40, name: 'John'},
            {id: 2, isActive: false, age: 30, name: 'Jane'},
          ],
          fields,
        },
        slots: {
          'cell(actions)':
            '<template #cell(actions)="row"><button class="toggle-btn" @click="row.toggleExpansion"></button></template>',
          'row-expansion':
            '<template #row-expansion="row">Details for {{ row.item.name }}</template>',
        },
      })

      // Open details for the first row
      const buttons = wrapper.findAll('.toggle-btn')
      await buttons[0].trigger('click')
      expect(wrapper.text()).toContain('Details for John')
      expect(wrapper.text()).not.toContain('Details for Jane')

      // Replace items with new object references but same IDs
      // This simulates the "Load more" scenario from the issue
      await wrapper.setProps({
        items: [
          {id: 1, isActive: true, age: 40, name: 'John'},
          {id: 2, isActive: false, age: 30, name: 'Jane'},
          {id: 3, isActive: true, age: 25, name: 'Bob'},
        ],
      })

      // Details for first row should still be visible
      expect(wrapper.text()).toContain('Details for John')
      expect(wrapper.text()).not.toContain('Details for Jane')
      expect(wrapper.text()).not.toContain('Details for Bob')
    })

    it('falls back to object reference when primaryKey is not provided', async () => {
      const fields = [{key: 'actions', label: 'Actions', sortable: false}]
      const wrapper = mount(BTableLite, {
        props: {
          items: [
            {isActive: true, age: 40, name: 'John'},
            {isActive: false, age: 30, name: 'Jane'},
          ],
          fields,
        },
        slots: {
          'cell(actions)':
            '<template #cell(actions)="row"><button class="toggle-btn" @click="row.toggleExpansion"></button></template>',
          'row-expansion':
            '<template #row-expansion="row">Details for {{ row.item.name }}</template>',
        },
      })

      // Open details for the first row
      const buttons = wrapper.findAll('.toggle-btn')
      await buttons[0].trigger('click')
      expect(wrapper.text()).toContain('Details for John')

      // Replace items with new object references
      await wrapper.setProps({
        items: [
          {isActive: true, age: 40, name: 'John'},
          {isActive: false, age: 30, name: 'Jane'},
          {isActive: true, age: 25, name: 'Bob'},
        ],
      })

      // Details should be closed since object references changed
      expect(wrapper.text()).not.toContain('Details for John')
      expect(wrapper.text()).not.toContain('Details for Jane')
      expect(wrapper.text()).not.toContain('Details for Bob')
    })

    it('clears details when primaryKey prop changes', async () => {
      const fields = [{key: 'actions', label: 'Actions', sortable: false}]
      const wrapper = mount(BTableLite, {
        props: {
          primaryKey: 'id',
          items: [
            {id: 1, altId: 'a', name: 'John'},
            {id: 2, altId: 'b', name: 'Jane'},
          ],
          fields,
        },
        slots: {
          'cell(actions)':
            '<template #cell(actions)="row"><button class="toggle-btn" @click="row.toggleExpansion"></button></template>',
          'row-expansion':
            '<template #row-expansion="row">Details for {{ row.item.name }}</template>',
        },
      })

      // Open details for the first row
      const buttons = wrapper.findAll('.toggle-btn')
      await buttons[0].trigger('click')
      expect(wrapper.text()).toContain('Details for John')

      // Change primaryKey to a different field
      await wrapper.setProps({
        primaryKey: 'altId',
      })

      // Details should be closed after primaryKey changes
      expect(wrapper.text()).not.toContain('Details for John')
      expect(wrapper.text()).not.toContain('Details for Jane')
    })

    it('clears details when primaryKey is removed', async () => {
      const fields = [{key: 'actions', label: 'Actions', sortable: false}]
      const wrapper = mount(BTableLite, {
        props: {
          primaryKey: 'id',
          items: [
            {id: 1, name: 'John'},
            {id: 2, name: 'Jane'},
          ],
          fields,
        },
        slots: {
          'cell(actions)':
            '<template #cell(actions)="row"><button class="toggle-btn" @click="row.toggleExpansion"></button></template>',
          'row-expansion':
            '<template #row-expansion="row">Details for {{ row.item.name }}</template>',
        },
      })

      // Open details for the first row
      const buttons = wrapper.findAll('.toggle-btn')
      await buttons[0].trigger('click')
      expect(wrapper.text()).toContain('Details for John')

      // Remove primaryKey
      await wrapper.setProps({
        primaryKey: undefined,
      })

      // Details should be closed after primaryKey is removed
      expect(wrapper.text()).not.toContain('Details for John')
      expect(wrapper.text()).not.toContain('Details for Jane')
    })

    it('clears details when primaryKey is changed and then changed back', async () => {
      const fields = [{key: 'actions', label: 'Actions', sortable: false}]
      const wrapper = mount(BTableLite, {
        props: {
          primaryKey: 'id',
          items: [
            {id: 1, altId: 'a', name: 'John'},
            {id: 2, altId: 'b', name: 'Jane'},
          ],
          fields,
        },
        slots: {
          'cell(actions)':
            '<template #cell(actions)="row"><button class="toggle-btn" @click="row.toggleExpansion"></button></template>',
          'row-expansion':
            '<template #row-expansion="row">Details for {{ row.item.name }}</template>',
        },
      })

      // Open details for the first row
      const buttons = wrapper.findAll('.toggle-btn')
      await buttons[0].trigger('click')
      expect(wrapper.text()).toContain('Details for John')

      // Change primaryKey to a different field
      await wrapper.setProps({
        primaryKey: 'altId',
      })

      // Details should be closed after primaryKey changes
      expect(wrapper.text()).not.toContain('Details for John')

      // Change primaryKey back to original
      await wrapper.setProps({
        primaryKey: 'id',
      })

      // Details should still be closed (map was cleared)
      expect(wrapper.text()).not.toContain('Details for John')
      expect(wrapper.text()).not.toContain('Details for Jane')
    })
  })
  describe('isRowHeader field property', () => {
    it('sets td/th appropriately based on isRowHeader is true, false, or undefined', async () => {
      const items = [{isActive: true, age: 40, name: {first: 'Dickerson', last: 'Macdonald'}}]
      const fields = [
        {key: 'name.first', label: 'Actions', isRowHeader: true, class: 'first-name'},
        {key: 'age', label: 'Age', isRowHeader: false, class: 'age'},
        {key: 'isActive', label: 'Active', isRowHeader: false, class: 'active'},
      ]
      const wrapper = mount(BTableLite, {
        props: {
          items,
          fields,
        },
      })
      const $tbody = wrapper.get('tbody')
      const $tr = $tbody.find('tr')
      expect($tr.find('th.first-name').exists()).toBe(true)
      expect($tr.find('td.age').exists()).toBe(true)
      expect($tr.find('td.active').exists()).toBe(true)
      await wrapper.setProps({
        fields: [
          {key: 'name.first', label: 'Actions', isRowHeader: false, class: 'first-name'},
          {key: 'age', label: 'Age', isRowHeader: false, class: 'age'},
          {key: 'isActive', label: 'Active', isRowHeader: false, class: 'active'},
        ],
      })
      expect($tr.find('th.first-name').exists()).toBe(false)
      expect($tr.find('td.age').exists()).toBe(true)
      expect($tr.find('td.active').exists()).toBe(true)
    })
  })

  describe('event emissions', () => {
    const items = [
      {id: 1, name: 'John', age: 30},
      {id: 2, name: 'Jane', age: 25},
      {id: 3, name: 'Bob', age: 35},
    ]
    const fields = [
      {key: 'name', label: 'Name', sortable: true},
      {key: 'age', label: 'Age', sortable: true},
    ]

    it('emits row-clicked event when row is clicked', async () => {
      const wrapper = mount(BTableLite, {
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

    it('emits row-dblclicked event when row is double clicked', async () => {
      const wrapper = mount(BTableLite, {
        props: {items, fields},
      })
      const rows = wrapper.findAll('tbody tr')
      await rows[1].trigger('dblclick')

      expect(wrapper.emitted('row-dblclicked')).toBeTruthy()
      expect(wrapper.emitted('row-dblclicked')?.[0][0]).toEqual({
        item: items[1],
        index: 1,
        event: expect.any(Object),
      })
    })

    it('emits row-contextmenu event when row is right-clicked', async () => {
      const wrapper = mount(BTableLite, {
        props: {items, fields},
      })
      const rows = wrapper.findAll('tbody tr')
      await rows[2].trigger('contextmenu')

      expect(wrapper.emitted('row-contextmenu')).toBeTruthy()
      expect(wrapper.emitted('row-contextmenu')?.[0][0]).toEqual({
        item: items[2],
        index: 2,
        event: expect.any(Object),
      })
    })

    it('emits row-hovered event when mouse enters row', async () => {
      const wrapper = mount(BTableLite, {
        props: {items, fields},
      })
      const rows = wrapper.findAll('tbody tr')
      await rows[0].trigger('mouseenter')

      expect(wrapper.emitted('row-hovered')).toBeTruthy()
      expect(wrapper.emitted('row-hovered')?.[0][0]).toEqual({
        item: items[0],
        index: 0,
        event: expect.any(Object),
      })
    })

    it('emits row-unhovered event when mouse leaves row', async () => {
      const wrapper = mount(BTableLite, {
        props: {items, fields},
      })
      const rows = wrapper.findAll('tbody tr')
      await rows[1].trigger('mouseleave')

      expect(wrapper.emitted('row-unhovered')).toBeTruthy()
      expect(wrapper.emitted('row-unhovered')?.[0][0]).toEqual({
        item: items[1],
        index: 1,
        event: expect.any(Object),
      })
    })

    it('emits row-middle-clicked event when middle mouse button is clicked', async () => {
      const wrapper = mount(BTableLite, {
        props: {items, fields},
      })
      const rows = wrapper.findAll('tbody tr')
      await rows[0].trigger('mousedown', {button: 1})

      expect(wrapper.emitted('row-middle-clicked')).toBeTruthy()
      expect(wrapper.emitted('row-middle-clicked')?.[0][0]).toEqual({
        item: items[0],
        index: 0,
        event: expect.any(Object),
      })
    })

    it('emits head-clicked event when header is clicked', async () => {
      const wrapper = mount(BTableLite, {
        props: {items, fields},
      })
      const headers = wrapper.findAll('thead th')
      await headers[0].trigger('click')

      expect(wrapper.emitted('head-clicked')).toBeTruthy()
      const emittedEvent = wrapper.emitted('head-clicked')?.[0]?.[0]
      expect(emittedEvent).toEqual({
        key: 'name',
        field: expect.objectContaining({key: 'name', label: 'Name', sortable: true}),
        event: expect.any(Object),
        isFooter: false,
      })
    })

    it('does not emit row events when event originates from a button or link', async () => {
      const wrapper = mount(BTableLite, {
        props: {items, fields},
        slots: {
          'cell(name)': '<button class="test-button">Click me</button>',
        },
      })
      const button = wrapper.find('.test-button')
      await button.trigger('click')

      // Should not emit row-clicked because the event originated from a button
      expect(wrapper.emitted('row-clicked')).toBeFalsy()
    })

    it('emits multiple row events for the same row', async () => {
      const wrapper = mount(BTableLite, {
        props: {items, fields},
      })
      const rows = wrapper.findAll('tbody tr')
      const [row] = rows

      await row.trigger('mouseenter')
      await row.trigger('click')
      await row.trigger('dblclick')
      await row.trigger('mouseleave')

      expect(wrapper.emitted('row-hovered')).toBeTruthy()
      expect(wrapper.emitted('row-clicked')).toBeTruthy()
      expect(wrapper.emitted('row-dblclicked')).toBeTruthy()
      expect(wrapper.emitted('row-unhovered')).toBeTruthy()
    })
  })

  describe('caption', () => {
    it('renders caption when caption prop is set', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], caption: 'My Table Caption'},
      })
      const $caption = wrapper.find('caption')
      expect($caption.exists()).toBe(true)
      expect($caption.text()).toBe('My Table Caption')
    })

    it('does not render caption when caption prop is not set', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}]},
      })
      expect(wrapper.find('caption').exists()).toBe(false)
    })

    it('renders table-caption slot over caption prop', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], caption: 'Prop Caption'},
        slots: {'table-caption': 'Slot Caption'},
      })
      const $caption = wrapper.find('caption')
      expect($caption.exists()).toBe(true)
      expect($caption.text()).toBe('Slot Caption')
    })

    it('renders table-caption slot without caption prop', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}]},
        slots: {'table-caption': 'Slot Caption'},
      })
      expect(wrapper.find('caption').text()).toBe('Slot Caption')
    })
  })

  describe('table structure', () => {
    it('contains BTableSimple, BThead, BTbody', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1, b: 2}]},
      })
      expect(wrapper.find('table').exists()).toBe(true)
      expect(wrapper.find('thead').exists()).toBe(true)
      expect(wrapper.find('tbody').exists()).toBe(true)
    })

    it('does not render tfoot by default', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}]},
      })
      expect(wrapper.find('tfoot').exists()).toBe(false)
    })

    it('renders tfoot when footClone is true', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], footClone: true},
      })
      expect(wrapper.find('tfoot').exists()).toBe(true)
    })

    it('tfoot contains same headers as thead when footClone is true', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1, b: 2}],
          footClone: true,
        },
      })
      const theadHeaders = wrapper.findAll('thead th').map((th) => th.text())
      const tfootHeaders = wrapper.findAll('tfoot th').map((th) => th.text())
      expect(tfootHeaders).toEqual(theadHeaders)
    })
  })

  describe('fields prop', () => {
    it('uses field objects to define columns', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{name: 'John', age: 30}],
          fields: [
            {key: 'name', label: 'Full Name'},
            {key: 'age', label: 'User Age'},
          ],
        },
      })
      const $th = wrapper.findAll('thead th')
      expect($th.length).toBe(2)
      expect($th[0].text()).toBe('Full Name')
      expect($th[1].text()).toBe('User Age')
    })

    it('uses string fields', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{name: 'John', age: 30}],
          fields: ['name', 'age'],
        },
      })
      const $th = wrapper.findAll('thead th')
      expect($th.length).toBe(2)
      expect($th[0].text()).toBe('Name')
      expect($th[1].text()).toBe('Age')
    })

    it('limits visible columns to those specified in fields', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{name: 'John', age: 30, email: 'john@test.com'}],
          fields: ['name', 'age'],
        },
      })
      const $td = wrapper.findAll('tbody td')
      expect($td.length).toBe(2)
      expect($td[0].text()).toBe('John')
      expect($td[1].text()).toBe('30')
    })
  })

  describe('tbodyClass prop', () => {
    it('applies tbodyClass to tbody element', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], tbodyClass: 'custom-tbody'},
      })
      expect(wrapper.get('tbody').classes()).toContain('custom-tbody')
    })
  })

  describe('theadClass prop', () => {
    it('applies theadClass to thead element', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], theadClass: 'custom-thead'},
      })
      expect(wrapper.get('thead').classes()).toContain('custom-thead')
    })
  })

  describe('theadTrClass prop', () => {
    it('applies theadTrClass to the tr in thead', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], theadTrClass: 'custom-tr'},
      })
      expect(wrapper.get('thead tr').classes()).toContain('custom-tr')
    })
  })

  describe('tfootClass prop', () => {
    it('applies tfootClass to tfoot element', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], footClone: true, tfootClass: 'custom-tfoot'},
      })
      expect(wrapper.get('tfoot').classes()).toContain('custom-tfoot')
    })

    it('falls back to theadClass for tfoot when tfootClass is not set', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], footClone: true, theadClass: 'thead-class'},
      })
      expect(wrapper.get('tfoot').classes()).toContain('thead-class')
    })
  })

  describe('tfootTrClass prop', () => {
    it('applies tfootTrClass to the tr in tfoot', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], footClone: true, tfootTrClass: 'custom-foot-tr'},
      })
      expect(wrapper.get('tfoot tr').classes()).toContain('custom-foot-tr')
    })

    it('falls back to theadTrClass when tfootTrClass is not set', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], footClone: true, theadTrClass: 'head-tr-class'},
      })
      expect(wrapper.get('tfoot tr').classes()).toContain('head-tr-class')
    })
  })

  describe('primaryKey prop', () => {
    it('generates row id based on primaryKey', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{id: 'abc', name: 'John'}],
          primaryKey: 'id',
          id: 'my-table',
        },
      })
      const $tr = wrapper.get('tbody tr')
      expect($tr.attributes('id')).toBe('my-table__row_abc')
    })

    it('does not generate row id without primaryKey', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{id: 'abc', name: 'John'}],
          id: 'my-table',
        },
      })
      const $tr = wrapper.get('tbody tr')
      expect($tr.attributes('id')).toBeUndefined()
    })
  })

  describe('_rowVariant', () => {
    it('applies row variant class from _rowVariant property', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1, _rowVariant: 'danger'}],
        },
      })
      const $tr = wrapper.get('tbody tr')
      expect($tr.classes()).toContain('table-danger')
    })
  })

  describe('_cellVariants', () => {
    it('applies cell variant class from _cellVariants property', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1, b: 2, _cellVariants: {a: 'success'}}],
        },
      })
      const $tds = wrapper.findAll('tbody td')
      expect($tds[0].classes()).toContain('table-success')
    })
  })

  describe('custom-body slot', () => {
    it('renders custom-body slot content', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}]},
        slots: {
          'custom-body': '<tr><td>Custom Body Content</td></tr>',
        },
      })
      expect(wrapper.text()).toContain('Custom Body Content')
    })

    it('custom-body slot replaces default body rendering', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1, b: 2}]},
        slots: {
          'custom-body': '<tr><td>Custom Only</td></tr>',
        },
      })
      const $tbody = wrapper.get('tbody')
      expect($tbody.text()).toBe('Custom Only')
    })
  })

  describe('thead-top slot', () => {
    it('renders thead-top slot content before the header row', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}]},
        slots: {
          'thead-top': '<tr><th colspan="1">Top Row</th></tr>',
        },
      })
      const $trs = wrapper.findAll('thead tr')
      expect($trs.length).toBe(2)
      expect($trs[0].text()).toBe('Top Row')
    })
  })

  describe('thead-sub slot', () => {
    it('renders thead-sub row when slot is provided', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1, b: 2}],
        },
        slots: {
          'thead-sub': '<template #thead-sub>Sub Header</template>',
        },
      })
      const $trs = wrapper.findAll('thead tr')
      expect($trs.length).toBe(2)
    })
  })

  describe('top-row and bottom-row slots', () => {
    it('renders top-row slot', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}]},
        slots: {
          'top-row': '<td>Top Row Content</td>',
        },
      })
      const $trs = wrapper.findAll('tbody tr')
      expect($trs.length).toBe(2)
      expect($trs[0].text()).toBe('Top Row Content')
    })

    it('renders bottom-row slot', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}]},
        slots: {
          'bottom-row': '<td>Bottom Row Content</td>',
        },
      })
      const $trs = wrapper.findAll('tbody tr')
      expect($trs.length).toBe(2)
      expect($trs[$trs.length - 1].text()).toBe('Bottom Row Content')
      expect($trs[$trs.length - 1].classes()).toContain('bottom-row')
    })

    it('does not render top-row when stacked is true', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], stacked: true},
        slots: {
          'top-row': '<td>Top Row Content</td>',
        },
      })
      expect(wrapper.text()).not.toContain('Top Row Content')
    })

    it('does not render bottom-row when stacked is true', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], stacked: true},
        slots: {
          'bottom-row': '<td>Bottom Row Content</td>',
        },
      })
      expect(wrapper.text()).not.toContain('Bottom Row Content')
    })
  })

  describe('custom-foot slot', () => {
    it('renders custom-foot slot when footClone is false', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}]},
        slots: {
          'custom-foot': '<tr><td>Custom Footer</td></tr>',
        },
      })
      expect(wrapper.find('tfoot').exists()).toBe(true)
      expect(wrapper.find('tfoot').text()).toBe('Custom Footer')
    })

    it('does not render custom-foot when footClone is true', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], footClone: true},
        slots: {
          'custom-foot': '<tr><td>Custom Footer</td></tr>',
        },
      })
      expect(wrapper.find('tfoot').text()).not.toBe('Custom Footer')
    })
  })

  describe('table-colgroup slot', () => {
    it('renders table-colgroup slot', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1, b: 2}]},
        slots: {
          'table-colgroup': '<col style="width: 50%"><col style="width: 50%">',
        },
      })
      expect(wrapper.find('colgroup').exists()).toBe(true)
      const $cols = wrapper.findAll('col')
      expect($cols.length).toBe(2)
    })

    it('does not render colgroup when slot is not provided', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}]},
      })
      expect(wrapper.find('colgroup').exists()).toBe(false)
    })
  })

  describe('tbodyTrClass prop', () => {
    it('applies static class to body rows', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1}, {a: 2}],
          tbodyTrClass: 'custom-row',
        },
      })
      const $trs = wrapper.findAll('tbody tr')
      $trs.forEach(($tr) => {
        expect($tr.classes()).toContain('custom-row')
      })
    })

    it('applies function-based class to body rows', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1}, {a: 2}],
          tbodyTrClass: (item: {a: number} | null, type: string) =>
            type === 'row' && item?.a === 1 ? 'highlight' : '',
        },
      })
      const $trs = wrapper.findAll('tbody tr')
      expect($trs[0].classes()).toContain('highlight')
      expect($trs[1].classes()).not.toContain('highlight')
    })
  })

  describe('tbodyTrAttrs prop', () => {
    it('applies static attributes to body rows', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1}],
          tbodyTrAttrs: {'data-custom': 'value'},
        },
      })
      expect(wrapper.get('tbody tr').attributes('data-custom')).toBe('value')
    })

    it('applies function-based attributes to body rows', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1}, {a: 2}],
          tbodyTrAttrs: (item: {a: number} | null) => ({
            'data-id': item?.a?.toString(),
          }),
        },
      })
      const $trs = wrapper.findAll('tbody tr')
      expect($trs[0].attributes('data-id')).toBe('1')
      expect($trs[1].attributes('data-id')).toBe('2')
    })

    it('adds --bs-table-bg transparent when style has background-color string', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1}],
          tbodyTrAttrs: {style: 'background-color: red'},
        },
      })
      const tr = wrapper.get('tbody tr')
      expect(tr.attributes('style')).toContain('background-color: red')
      expect(tr.attributes('style')).toContain('--bs-table-bg: transparent')
    })

    it('adds --bs-table-bg transparent when style has backgroundColor object', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1}],
          tbodyTrAttrs: {style: {backgroundColor: 'blue'}},
        },
      })
      const tr = wrapper.get('tbody tr')
      expect(tr.attributes('style')).toContain('background-color: blue')
      expect(tr.attributes('style')).toContain('--bs-table-bg: transparent')
    })

    it('adds --bs-table-bg transparent when function returns style with background-color', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1}, {a: 2}],
          tbodyTrAttrs: (item: {a: number} | null) =>
            item?.a === 1 ? {style: 'background-color: green'} : {},
        },
      })
      const $trs = wrapper.findAll('tbody tr')
      expect($trs[0].attributes('style')).toContain('background-color: green')
      expect($trs[0].attributes('style')).toContain('--bs-table-bg: transparent')
      expect($trs[1].attributes('style')).toBeUndefined()
    })

    it('does not add --bs-table-bg when style has no background', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1}],
          tbodyTrAttrs: {style: 'color: red'},
        },
      })
      const tr = wrapper.get('tbody tr')
      expect(tr.attributes('style')).toContain('color: red')
      expect(tr.attributes('style')).not.toContain('--bs-table-bg')
    })
  })

  describe('align prop', () => {
    it('applies align class to table', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], align: 'middle'},
      })
      expect(wrapper.get('table').classes()).toContain('align-middle')
    })

    it('does not apply align class when not set', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}]},
      })
      const classes = wrapper.get('table').classes().join(' ')
      expect(classes).not.toMatch(/align-/)
    })
  })

  describe('stacked and labelStacked', () => {
    it('renders stacked labels when both stacked and labelStacked are true', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{name: 'John', age: 30}],
          stacked: true,
          labelStacked: true,
        },
      })
      const labels = wrapper.findAll('.b-table-stacked-label')
      expect(labels.length).toBe(2)
      expect(labels[0].text()).toBe('Name')
      expect(labels[1].text()).toBe('Age')
    })

    it('does not render stacked labels when stacked is false', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{name: 'John'}],
          stacked: false,
          labelStacked: true,
        },
      })
      expect(wrapper.find('.b-table-stacked-label').exists()).toBe(false)
    })
  })

  describe('field formatter', () => {
    it('applies field formatter function to cell values', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{price: 100}],
          fields: [
            {
              key: 'price',
              label: 'Price',
              formatter: ({value}: {value: unknown}) => `$${value}`,
            },
          ],
        },
      })
      expect(wrapper.get('tbody td').text()).toBe('$100')
    })
  })

  describe('field thStyle', () => {
    it('applies thStyle to header cells', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1}],
          fields: [{key: 'a', label: 'A', thStyle: {width: '200px'}}],
        },
      })
      expect(wrapper.get('thead th').attributes('style')).toContain('width: 200px')
    })
  })

  describe('field headerTitle', () => {
    it('sets title attribute on header cells', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1}],
          fields: [{key: 'a', label: 'A', headerTitle: 'Column A'}],
        },
      })
      expect(wrapper.get('thead th').attributes('title')).toBe('Column A')
    })
  })

  describe('field headerAbbr', () => {
    it('sets abbr attribute on header cells', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1}],
          fields: [{key: 'a', label: 'A', headerAbbr: 'col-a'}],
        },
      })
      expect(wrapper.get('thead th').attributes('abbr')).toBe('col-a')
    })
  })

  describe('field stickyColumn', () => {
    it('applies b-table-sticky-column class to header and body cells', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1}],
          fields: [{key: 'a', label: 'A', stickyColumn: true}],
        },
      })
      expect(wrapper.get('thead th').classes()).toContain('b-table-sticky-column')
      expect(wrapper.get('tbody td').classes()).toContain('b-table-sticky-column')
    })
  })

  describe('field tdAttr', () => {
    it('applies static tdAttr to body cells', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1}],
          fields: [{key: 'a', label: 'A', tdAttr: {'data-test': 'hello'}}],
        },
      })
      expect(wrapper.get('tbody td').attributes('data-test')).toBe('hello')
    })

    it('applies function tdAttr to body cells', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 42}],
          fields: [
            {
              key: 'a',
              label: 'A',
              tdAttr: ({value}: {value: unknown}) => ({'data-value': String(value)}),
            },
          ],
        },
      })
      expect(wrapper.get('tbody td').attributes('data-value')).toBe('42')
    })
  })

  describe('field tdClass', () => {
    it('applies static tdClass to body cells', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1}],
          fields: [{key: 'a', label: 'A', tdClass: 'custom-td'}],
        },
      })
      expect(wrapper.get('tbody td').classes()).toContain('custom-td')
    })

    it('applies function tdClass to body cells', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 42}],
          fields: [
            {
              key: 'a',
              label: 'A',
              tdClass: (value: unknown) => (value === 42 ? 'is-42' : ''),
            },
          ],
        },
      })
      expect(wrapper.get('tbody td').classes()).toContain('is-42')
    })
  })

  describe('fieldColumnClass prop', () => {
    it('applies static fieldColumnClass to header cells', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1}],
          fieldColumnClass: 'col-class',
        },
      })
      expect(wrapper.get('thead th').classes()).toContain('col-class')
    })

    it('applies function fieldColumnClass to header cells', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1, b: 2}],
          fieldColumnClass: (field: {key: string}) => `col-${field.key}`,
        },
      })
      const $ths = wrapper.findAll('thead th')
      expect($ths[0].classes()).toContain('col-a')
      expect($ths[1].classes()).toContain('col-b')
    })
  })

  describe('nested object access', () => {
    it('supports accessor function for nested objects', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{name: {first: 'John', last: 'Doe'}, age: 30}],
          fields: [
            {
              key: 'name',
              label: 'First Name',
              accessor: (item: {name: {first: string}}) => item.name.first,
            },
            {key: 'age', label: 'Age'},
          ],
        },
      })
      const $tds = wrapper.findAll('tbody td')
      expect($tds[0].text()).toBe('John')
      expect($tds[1].text()).toBe('30')
    })
  })

  describe('empty items', () => {
    it('renders no body rows when items is empty', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [], fields: ['a', 'b']},
      })
      expect(wrapper.findAll('tbody tr').length).toBe(0)
    })
  })

  describe('BTableSimple props pass-through', () => {
    it('passes bordered prop to BTableSimple', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], bordered: true},
      })
      expect(wrapper.get('table').classes()).toContain('table-bordered')
    })

    it('passes striped prop to BTableSimple', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], striped: true},
      })
      expect(wrapper.get('table').classes()).toContain('table-striped')
    })

    it('passes hover prop to BTableSimple', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], hover: true},
      })
      expect(wrapper.get('table').classes()).toContain('table-hover')
    })

    it('passes dark prop to BTableSimple', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], dark: true},
      })
      expect(wrapper.get('table').classes()).toContain('table-dark')
    })

    it('passes small prop to BTableSimple', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], small: true},
      })
      expect(wrapper.get('table').classes()).toContain('table-sm')
    })

    it('passes responsive prop to BTableSimple', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], responsive: true},
      })
      expect(wrapper.find('.table-responsive').exists()).toBe(true)
    })

    it('passes fixed prop to BTableSimple', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], fixed: true},
      })
      expect(wrapper.get('table').classes()).toContain('b-table-fixed')
    })

    it('passes outlined prop to BTableSimple', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], outlined: true},
      })
      expect(wrapper.get('table').classes()).toContain('border')
    })

    it('passes borderless prop to BTableSimple', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], borderless: true},
      })
      expect(wrapper.get('table').classes()).toContain('table-borderless')
    })

    it('passes captionTop prop to BTableSimple', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}], captionTop: true, caption: 'Test'},
      })
      expect(wrapper.get('table').classes()).toContain('caption-top')
    })
  })

  describe('cell() scoped slot', () => {
    it('renders cell() slot for all cells', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1, b: 2}],
        },
        slots: {
          'cell()': '<template #cell()="data">val:{{ data.value }}</template>',
        },
      })
      const $tds = wrapper.findAll('tbody td')
      expect($tds[0].text()).toBe('val:1')
      expect($tds[1].text()).toBe('val:2')
    })

    it('cell(key) slot takes precedence over cell() slot', () => {
      const wrapper = mount(BTableLite, {
        props: {
          items: [{a: 1, b: 2}],
        },
        slots: {
          'cell()': '<template #cell()="data">generic:{{ data.value }}</template>',
          'cell(a)': '<template #cell(a)="data">specific:{{ data.value }}</template>',
        },
      })
      const $tds = wrapper.findAll('tbody td')
      expect($tds[0].text()).toBe('specific:1')
      expect($tds[1].text()).toBe('generic:2')
    })
  })

  describe('expose', () => {
    it('exposes expansion controller', () => {
      const wrapper = mount(BTableLite, {
        props: {items: [{a: 1}]},
      })
      expect(wrapper.vm.expansion).toBeDefined()
      expect(wrapper.vm.expansion.expandedItems).toBeDefined()
    })
  })
})
