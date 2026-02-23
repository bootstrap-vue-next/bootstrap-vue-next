import {mount} from '@vue/test-utils'
import {describe, it, expect} from 'vitest'
import {nextTick} from 'vue'
import BTable from './BTable.vue'

describe('investigate busy rendering', () => {
  it('not busy - check if items render', () => {
    const wrapper = mount(BTable, {
      props: {
        items: [{name: 'Alice', age: 25}],
        fields: ['name', 'age'],
        busy: false,
      },
    })
    const tbody = wrapper.find('tbody')
    console.log('NOT BUSY tbody HTML:\n', tbody.html())
    console.log('NOT BUSY full text:', wrapper.text())
    expect(tbody.findAll('tr').length).toBeGreaterThan(0)
  })

  it('busy - check if items are hidden', async () => {
    const wrapper = mount(BTable, {
      props: {
        items: [{name: 'Alice', age: 25}],
        fields: ['name', 'age'],
        busy: true,
      },
    })
    await nextTick()
    const tbody = wrapper.find('tbody')
    console.log('BUSY tbody HTML:\n', tbody.html())
    console.log('BUSY full text:', wrapper.text())
    // Check if items are visible
    expect(wrapper.text()).toContain('Loading...')
    // Check if items are hidden (this is the regression)
    const hasAlice = wrapper.text().includes('Alice')
    console.log('Contains Alice:', hasAlice)
  })
})
