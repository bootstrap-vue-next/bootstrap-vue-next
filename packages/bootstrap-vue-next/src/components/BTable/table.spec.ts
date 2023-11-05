import {enableAutoUnmount, flushPromises, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {ref} from 'vue'
import type {TableField, TableItem} from '../../types'
import BTable from './BTable.vue'

const fields: TableField[] = [{key: 'name'}, {key: 'age'}]
const items: TableItem[] = [
  {name: 'hossam', age: 1},
  {name: 'devhus', age: 2},
]

describe('table', () => {
  enableAutoUnmount(afterEach)

  it('th has class b-table-sortable-column from field sortable in TableField from prop fields', () => {
    const fields: TableField[] = [{key: 'abc', sortable: true}]
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const $th = wrapper.get('th')
    expect($th.classes()).toContain('b-table-sortable-column')
  })

  it.skip('th does not have class b-table-sortable-column from field sortable in TableField from prop fields but field is not sortable', () => {
    // TODO I'm unsure how to make the isSortable value eval to false
    const fields: TableField[] = [{key: 'abc', sortable: true}]
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const $th = wrapper.get('th')
    expect($th.classes()).toContain('b-table-sortable-column')
  })

  it('has items when using a provider function', async () => {
    const myProvider = () => items

    const wrapper = mount(BTable, {
      props: {
        fields,
        provider: myProvider,
      },
    })

    await flushPromises()

    const $table = wrapper.get('table')
    const $firstRow = $table.get('tbody tr td')

    expect($firstRow.text()).toBe('hossam')
  })

  it('has items when using a provider promise', async () => {
    const myProvider = async () =>
      new Promise<TableItem[] | undefined>((resolve) => {
        resolve(items)
      })
    const busyRef = ref(false)
    const wrapper = mount(BTable, {
      props: {
        fields,
        busy: busyRef.value,
        provider: myProvider,
      },
    })

    await flushPromises()

    const $table = wrapper.get('table')
    const $firstRow = $table.get('tbody tr td')

    expect($firstRow.text()).toBe('hossam')
  })

  it('has items when using a provider callback', async () => {
    const busyRef = ref(false)
    const myProvider = async (ctx: any, callback: (items: any) => any) => {
      callback(items)
      return undefined
    }
    const wrapper = mount(BTable, {
      props: {
        fields,
        busy: busyRef.value,
        provider: myProvider,
      },
    })

    await flushPromises()

    const $table = wrapper.get('table')
    const $firstRow = $table.get('tbody tr td')

    expect($firstRow.text()).toBe('hossam')
  })

  it('has sorted items when sortBy prop is passed', () => {
    const wrapper = mount(BTable, {
      props: {
        fields,
        items,
        sortBy: 'age',
      },
    })
    const $table = wrapper.get('table')
    expect($table.get('tbody tr td:last-child').text()).toBe('1')
  })

  it('has desc sorted items when sortDesc prop is true', () => {
    const wrapper = mount(BTable, {
      props: {
        fields: fields.map((field) =>
          typeof field === 'string' ? field : {...field, sortable: true}
        ),
        items,
        sortBy: 'age',
        sortDesc: true,
      },
    })
    const $table = wrapper.get('table')
    expect($table.get('tbody tr:first-child td:last-child').text()).toBe('2')
  })
})
