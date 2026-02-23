import {mount} from '@vue/test-utils'
import {describe, it, expect} from 'vitest'
import {nextTick, h} from 'vue'
import BTable from './BTable.vue'
import BTableLite from './BTableLite.vue'

describe('investigate custom-body rendering', () => {
  it('BTableLite with custom-body slot - items should NOT render', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [{name: 'Alice', age: 25}],
        fields: ['name', 'age'],
      },
      slots: {
        'custom-body': '<tr><td colspan="2">Custom Body</td></tr>',
      },
    })
    const tbody = wrapper.find('tbody')
    console.log('LITE WITH CUSTOM-BODY HTML:\n', tbody.html())
    // Items should NOT render when custom-body is provided
    expect(wrapper.text()).toContain('Custom Body')
    expect(wrapper.text()).not.toContain('Alice')
  })

  it('BTableLite without custom-body slot - items should render', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [{name: 'Alice', age: 25}],
        fields: ['name', 'age'],
      },
    })
    const tbody = wrapper.find('tbody')
    console.log('LITE WITHOUT CUSTOM-BODY HTML:\n', tbody.html())
    expect(wrapper.text()).toContain('Alice')
  })

  it('BTableLite with empty custom-body slot - what happens?', () => {
    const wrapper = mount(BTableLite, {
      props: {
        items: [{name: 'Alice', age: 25}],
        fields: ['name', 'age'],
      },
      slots: {
        'custom-body': '<!-- empty -->',
      },
    })
    const tbody = wrapper.find('tbody')
    console.log('LITE WITH EMPTY CUSTOM-BODY HTML:\n', tbody.html())
    const hasAlice = wrapper.text().includes('Alice')
    console.log('Contains Alice:', hasAlice)
  })
})
