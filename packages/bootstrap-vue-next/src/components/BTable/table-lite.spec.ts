import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTableLite from './BTableLite.vue'

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
})
