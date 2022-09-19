import {enableAutoUnmount, flushPromises, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {ref} from 'vue'
import {TableField, TableItem} from '../../types'
import BTable from './BTable.vue'
import BTableContainer from './BTableContainer.vue'

const fields: Array<TableField> = [{key: 'name'}, {key: 'age'}]
const items: Array<TableItem> = [
  {name: 'hossam', age: 1},
  {name: 'devhus', age: 2},
]

describe('b-table', () => {
  enableAutoUnmount(afterEach)

  it('element is BTableContainer', () => {
    const wrapper = mount(BTable)
    const $tablecontainer = wrapper.findComponent(BTableContainer)
    expect($tablecontainer.exists()).toBe(true)
  })

  it('tablecontainer is given prop responsive', async () => {
    const wrapper = mount(BTable, {
      props: {responsive: true},
    })
    const $tablecontainer = wrapper.getComponent(BTableContainer)
    expect($tablecontainer.props('responsive')).toBe(true)
    await wrapper.setProps({responsive: false})
    expect($tablecontainer.props('responsive')).toBe(false)
  })

  it('tablecontainer is given prop responsiveClass', async () => {
    const wrapper = mount(BTable, {
      props: {responsiveClass: true},
    })
    const $tablecontainer = wrapper.getComponent(BTableContainer)
    expect($tablecontainer.props('responsiveClass')).toBe(true)
    await wrapper.setProps({responsiveClass: false})
    expect($tablecontainer.props('responsiveClass')).toBe(false)
  })

  it('tablecontainer is given prop tableClass', async () => {
    const wrapper = mount(BTable, {
      props: {tableClass: true},
    })
    const $tablecontainer = wrapper.getComponent(BTableContainer)
    expect($tablecontainer.props('tableClass')).toBe(true)
    await wrapper.setProps({tableClass: false})
    expect($tablecontainer.props('tableClass')).toBe(false)
  })

  it('has a nested table when tag is div', () => {
    const wrapper = mount(BTable, {
      props: {responsive: true},
    })
    const $table = wrapper.find('table')
    expect($table.exists()).toBe(true)
  })

  it('has borderless class when passing borderless prop', () => {
    const wrapper = mount(BTable, {
      props: {borderless: true},
    })
    const $table = wrapper.get('table')
    expect($table.classes().includes('table-borderless')).toBe(true)
  })

  it('has bordered class when passing bordered prop', () => {
    const wrapper = mount(BTable, {
      props: {bordered: true},
    })
    const $table = wrapper.get('table')
    expect($table.classes().includes('table-bordered')).toBe(true)
  })

  it('has varianted border class when passing borderVariant prop', () => {
    const wrapper = mount(BTable, {
      props: {borderVariant: 'danger'},
    })
    const $table = wrapper.get('table')
    expect($table.classes().includes('border-danger')).toBe(true)
  })

  it('has dark theme class when passing dark prop', () => {
    const wrapper = mount(BTable, {
      props: {dark: true},
    })
    const $table = wrapper.get('table')
    expect($table.classes().includes('table-dark')).toBe(true)
  })

  it('has fields when fields prop is labeled', () => {
    const wrapper = mount(BTable, {
      props: {
        fields: [{key: 'name', label: 'Name'}],
      },
    })
    const $table = wrapper.get('table')
    expect($table.get('thead tr th').text()).toBe('Name')
  })

  it('has fields when fields prop not labeled', () => {
    const wrapper = mount(BTable, {
      props: {
        fields: [{key: 'name'}],
      },
    })
    const $table = wrapper.get('table')
    expect($table.get('thead tr th').text()).toBe('Name')
  })

  it('has fields when fields prop is array of strings', () => {
    const wrapper = mount(BTable, {
      props: {
        fields: ['name'],
      },
    })
    const $table = wrapper.get('table')
    expect($table.get('thead tr th').text()).toBe('Name')
  })

  it('has items when fields prop is array of strings', () => {
    const wrapper = mount(BTable, {
      props: {
        fields: ['name'],
        items,
      },
    })
    const $table = wrapper.get('table')
    expect($table.get('tbody tr td').text()).toBe('hossam')
  })

  it('has items when fields prop is an object', () => {
    const wrapper = mount(BTable, {
      props: {
        fields,
        items,
      },
    })
    const $table = wrapper.get('table')
    expect($table.get('tbody tr td').text()).toBe('hossam')
  })

  it('has items when using a provider function', async () => {
    const myProvider = (ctx: any, callback: (items: any) => any) => items

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
    const myProvider = async (ctx: any, callback: (items: any) => any) =>
      new Promise<Array<TableItem> | undefined>((resolve) => {
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

  it('has busy class & element when busy prop is true', () => {
    const wrapper = mount(BTable, {
      props: {
        fields: fields.map((field) =>
          typeof field === 'string' ? field : {...field, sortable: true}
        ),
        items,
        busy: true,
      },
    })
    const $table = wrapper.get('table')
    expect($table.classes().includes('b-table-busy')).toBe(true)
    expect($table.find('tr.b-table-busy-slot').exists()).toBe(true)
  })

  it('has busy class & element when busy prop is true', () => {
    const wrapper = mount(BTable, {
      props: {
        fields: fields.map((field) =>
          typeof field === 'string' ? field : {...field, sortable: true}
        ),
        items,
        busy: true,
      },
    })
    const $table = wrapper.get('table')
    expect($table.classes().includes('b-table-busy')).toBe(true)
    expect($table.find('tr.b-table-busy-slot').exists()).toBe(true)
  })
})
