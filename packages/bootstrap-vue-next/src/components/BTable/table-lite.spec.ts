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
  })
})
