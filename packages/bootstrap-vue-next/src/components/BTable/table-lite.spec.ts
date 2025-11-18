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

  it('Will properly display row details when toggleDetails is actived', async () => {
    const items = [
      [1, 2],
      [1, 2],
    ]
    const wrapper = mount(BTableLite, {
      props: {
        items,
      },
      slots: {
        'cell()': `<template #cell()="row"><button id="foobar" size="sm" @click="row.toggleDetails">{{ row.detailsShowing ? 'Hide' : 'Show' }} notes</button></template>`,
        'row-details': `<template #row-details="row">THE ROW!</template>`,
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
            '<template #cell(actions)="row"><button @click="row.toggleDetails"></button></template>',
          'row-details': 'foobar!',
        },
      })
      await wrapper.get('button').trigger('click')
      expect(wrapper.text()).toContain('foobar!')
      await wrapper.get('button').trigger('click')
      expect(wrapper.text()).not.toContain('foobar!')
    })

    it('works externally', async () => {
      const fields = [{key: 'actions', label: 'Actions', sortable: false}]
      const wrapper = mount(BTableLite, {
        props: {
          items: [
            {
              isActive: true,
              age: 40,
              name: {first: 'Dickerson', last: 'Macdonald'},
              _showDetails: true,
            },
          ],
          fields,
        },
        slots: {
          'cell(actions)':
            '<template #cell(actions)="row"><button @click="row.toggleDetails"></button></template>',
          'row-details': 'foobar!',
        },
      })
      expect(wrapper.text()).toContain('foobar!')
      await wrapper.setProps({
        items: [
          {
            isActive: true,
            age: 40,
            name: {first: 'Dickerson', last: 'Macdonald'},
            _showDetails: false,
          },
        ],
      })
      expect(wrapper.text()).not.toContain('foobar!')
      await wrapper.get('button').trigger('click')
      expect(wrapper.text()).toContain('foobar!')
      await wrapper.setProps({
        items: [
          {
            isActive: true,
            age: 40,
            name: {first: 'Dickerson', last: 'Macdonald'},
            _showDetails: false,
          },
        ],
      })
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
            '<template #cell(actions)="row"><button class="toggle-btn" @click="row.toggleDetails"></button></template>',
          'row-details': '<template #row-details="row">Details for {{ row.item.name }}</template>',
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
            '<template #cell(actions)="row"><button class="toggle-btn" @click="row.toggleDetails"></button></template>',
          'row-details': '<template #row-details="row">Details for {{ row.item.name }}</template>',
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
            '<template #cell(actions)="row"><button class="toggle-btn" @click="row.toggleDetails"></button></template>',
          'row-details': '<template #row-details="row">Details for {{ row.item.name }}</template>',
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
            '<template #cell(actions)="row"><button class="toggle-btn" @click="row.toggleDetails"></button></template>',
          'row-details': '<template #row-details="row">Details for {{ row.item.name }}</template>',
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
            '<template #cell(actions)="row"><button class="toggle-btn" @click="row.toggleDetails"></button></template>',
          'row-details': '<template #row-details="row">Details for {{ row.item.name }}</template>',
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
      expect(wrapper.emitted('row-clicked')?.[0]).toEqual([items[0], 0, expect.any(Object)])
    })

    it('emits row-dblclicked event when row is double clicked', async () => {
      const wrapper = mount(BTableLite, {
        props: {items, fields},
      })
      const rows = wrapper.findAll('tbody tr')
      await rows[1].trigger('dblclick')

      expect(wrapper.emitted('row-dblclicked')).toBeTruthy()
      expect(wrapper.emitted('row-dblclicked')?.[0]).toEqual([items[1], 1, expect.any(Object)])
    })

    it('emits row-contextmenu event when row is right-clicked', async () => {
      const wrapper = mount(BTableLite, {
        props: {items, fields},
      })
      const rows = wrapper.findAll('tbody tr')
      await rows[2].trigger('contextmenu')

      expect(wrapper.emitted('row-contextmenu')).toBeTruthy()
      expect(wrapper.emitted('row-contextmenu')?.[0]).toEqual([items[2], 2, expect.any(Object)])
    })

    it('emits row-hovered event when mouse enters row', async () => {
      const wrapper = mount(BTableLite, {
        props: {items, fields},
      })
      const rows = wrapper.findAll('tbody tr')
      await rows[0].trigger('mouseenter')

      expect(wrapper.emitted('row-hovered')).toBeTruthy()
      expect(wrapper.emitted('row-hovered')?.[0]).toEqual([items[0], 0, expect.any(Object)])
    })

    it('emits row-unhovered event when mouse leaves row', async () => {
      const wrapper = mount(BTableLite, {
        props: {items, fields},
      })
      const rows = wrapper.findAll('tbody tr')
      await rows[1].trigger('mouseleave')

      expect(wrapper.emitted('row-unhovered')).toBeTruthy()
      expect(wrapper.emitted('row-unhovered')?.[0]).toEqual([items[1], 1, expect.any(Object)])
    })

    it('emits row-middle-clicked event when middle mouse button is clicked', async () => {
      const wrapper = mount(BTableLite, {
        props: {items, fields},
      })
      const rows = wrapper.findAll('tbody tr')
      await rows[0].trigger('mousedown', {button: 1})

      expect(wrapper.emitted('row-middle-clicked')).toBeTruthy()
      expect(wrapper.emitted('row-middle-clicked')?.[0]).toEqual([items[0], 0, expect.any(Object)])
    })

    it('emits head-clicked event when header is clicked', async () => {
      const wrapper = mount(BTableLite, {
        props: {items, fields},
      })
      const headers = wrapper.findAll('thead th')
      await headers[0].trigger('click')

      expect(wrapper.emitted('head-clicked')).toBeTruthy()
      const emittedEvent = wrapper.emitted('head-clicked')?.[0]
      expect(emittedEvent?.[0]).toBe('name')
      expect(emittedEvent?.[1]).toMatchObject({key: 'name', label: 'Name', sortable: true})
      expect(emittedEvent?.[3]).toBe(false) // isFooter
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
})
