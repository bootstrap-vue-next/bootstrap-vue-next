import {enableAutoUnmount, flushPromises, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {ref} from 'vue'
import {TableField, TableItem} from '../../types'
import BTable from './BTable.vue'
import BTableSimple from './BTableSimple.vue'

const fields: Array<TableField> = [{key: 'name'}, {key: 'age'}]
const items: Array<TableItem> = [
  {name: 'hossam', age: 1},
  {name: 'devhus', age: 2},
]

describe('table', () => {
  enableAutoUnmount(afterEach)

  it('element is BTableSimple', () => {
    const wrapper = mount(BTable)
    const $tablesimple = wrapper.findComponent(BTableSimple)
    expect($tablesimple.exists()).toBe(true)
  })

  it('tablesimple is given prop bordered', async () => {
    const wrapper = mount(BTable, {
      props: {bordered: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.props('bordered')).toBe(true)
    await wrapper.setProps({bordered: false})
    expect($tablesimple.props('bordered')).toBe(false)
  })

  it('tablesimple is given prop borderless', async () => {
    const wrapper = mount(BTable, {
      props: {borderless: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.props('borderless')).toBe(true)
    await wrapper.setProps({borderless: false})
    expect($tablesimple.props('borderless')).toBe(false)
  })

  it('tablesimple is given prop borderVariant', async () => {
    const wrapper = mount(BTable, {
      props: {borderVariant: 'info'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.props('borderVariant')).toBe('info')
    await wrapper.setProps({borderVariant: undefined})
    expect($tablesimple.props('borderVariant')).toBeUndefined()
  })

  it('tablesimple is given prop captionTop', async () => {
    const wrapper = mount(BTable, {
      props: {captionTop: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.props('captionTop')).toBe(true)
    await wrapper.setProps({captionTop: false})
    expect($tablesimple.props('captionTop')).toBe(false)
  })

  it('tablesimple is given prop dark', async () => {
    const wrapper = mount(BTable, {
      props: {dark: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.props('dark')).toBe(true)
    await wrapper.setProps({dark: false})
    expect($tablesimple.props('dark')).toBe(false)
  })

  it('tablesimple is given prop hover', async () => {
    const wrapper = mount(BTable, {
      props: {hover: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.props('hover')).toBe(true)
    await wrapper.setProps({hover: false})
    expect($tablesimple.props('hover')).toBe(false)
  })

  it('tablesimple is given prop responsive', async () => {
    const wrapper = mount(BTable, {
      props: {responsive: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.props('responsive')).toBe(true)
    await wrapper.setProps({responsive: false})
    expect($tablesimple.props('responsive')).toBe(false)
  })

  it('tablesimple is given prop striped', async () => {
    const wrapper = mount(BTable, {
      props: {striped: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.props('striped')).toBe(true)
    await wrapper.setProps({striped: false})
    expect($tablesimple.props('striped')).toBe(false)
  })

  it('tablesimple is given prop small', async () => {
    const wrapper = mount(BTable, {
      props: {small: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.props('small')).toBe(true)
    await wrapper.setProps({small: false})
    expect($tablesimple.props('small')).toBe(false)
  })

  it('tablesimple is given prop tableVariant as prop variant', async () => {
    const wrapper = mount(BTable, {
      props: {variant: 'info'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.props('tableVariant')).toBe('info')
    await wrapper.setProps({variant: undefined})
    expect($tablesimple.props('tableVariant')).toBeUndefined()
  })

  it('tablesimple is given prop stickyHeader', async () => {
    const wrapper = mount(BTable, {
      props: {stickyHeader: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.props('stickyHeader')).toBe(true)
    await wrapper.setProps({stickyHeader: false})
    expect($tablesimple.props('stickyHeader')).toBe(false)
  })

  it('tablesimple is given prop responsive', async () => {
    const wrapper = mount(BTable, {
      props: {responsive: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.props('responsive')).toBe(true)
    await wrapper.setProps({responsive: false})
    expect($tablesimple.props('responsive')).toBe(false)
  })

  it('tablesimple is given prop tableClass', async () => {
    const wrapper = mount(BTable, {
      props: {tableClass: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.props('tableClass')).toBe(true)
    await wrapper.setProps({tableClass: false})
    expect($tablesimple.props('tableClass')).toBe(false)
  })

  it('has child thead', () => {
    const wrapper = mount(BTable)
    const $thead = wrapper.find('thead')
    expect($thead.exists()).toBe(true)
  })

  it('thead child has tr child', () => {
    const wrapper = mount(BTable)
    const $thead = wrapper.get('thead')
    const $tr = $thead.find('tr')
    expect($tr.exists()).toBe(true)
  })

  it('thead renders slot thead-top', () => {
    const wrapper = mount(BTable, {
      slots: {'thead-top': 'foobar'},
    })
    const $thead = wrapper.get('thead')
    expect($thead.text()).toBe('foobar')
  })

  it('thead renders slot select-head when prop selectable true', () => {
    const wrapper = mount(BTable, {
      slots: {'select-head': 'foobar'},
      props: {selectable: true},
    })
    const $thead = wrapper.get('thead')
    expect($thead.text()).toBe('foobar')
  })

  it('thead renders prop selectHead when prop selectable string', () => {
    const wrapper = mount(BTable, {
      props: {selectable: true, selectHead: 'foobar'},
    })
    const $thead = wrapper.get('thead')
    expect($thead.text()).toBe('foobar')
  })

  it('thead renders prop selectHead when prop selectable bool', () => {
    const wrapper = mount(BTable, {
      props: {selectable: true, selectHead: true},
    })
    const $thead = wrapper.get('thead')
    expect($thead.text()).toBe('Selected')
  })

  it('thead does not render prop selectHead when prop selectable false', () => {
    const wrapper = mount(BTable, {
      props: {selectable: true, selectHead: false},
    })
    const $thead = wrapper.get('thead')
    expect($thead.text()).toBe('')
  })

  it('thead renders slot select-head over prop selectHead', () => {
    const wrapper = mount(BTable, {
      props: {selectable: true, selectHead: 'props'},
      slots: {'select-head': 'slots'},
    })
    const $thead = wrapper.get('thead')
    expect($thead.text()).toBe('slots')
  })

  it('thead does not render slot selectHead or prop selectHead when selectable false', () => {
    const wrapper = mount(BTable, {
      props: {selectable: false, selectHead: 'props'},
      slots: {selectHead: 'slots'},
    })
    const $thead = wrapper.get('thead')
    expect($thead.text()).toBe('')
  })

  it('thead tr child does not have th child by default', () => {
    const wrapper = mount(BTable)
    const $thead = wrapper.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.find('th')
    expect($th.exists()).toBe(false)
  })

  it('thead tr child has th child when prop selectable', () => {
    const wrapper = mount(BTable, {
      props: {selectable: true},
    })
    const $thead = wrapper.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.find('th')
    expect($th.exists()).toBe(true)
  })

  it('thead tr child has th child when prop selectable and prop selectHead', () => {
    const wrapper = mount(BTable, {
      props: {selectable: true, selectHead: 'foobar'},
    })
    const $thead = wrapper.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.find('th')
    expect($th.exists()).toBe(true)
  })

  it('thead tr child has th child when prop selectable and slot selectHead', () => {
    const wrapper = mount(BTable, {
      props: {selectable: true},
      slots: {selectHead: 'foobar'},
    })
    const $thead = wrapper.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.find('th')
    expect($th.exists()).toBe(true)
  })

  it('thead tr child does not have th child when not prop selectable and prop selectHead', () => {
    const wrapper = mount(BTable, {
      props: {selectable: false, selectHead: 'foobar'},
    })
    const $thead = wrapper.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.find('th')
    expect($th.exists()).toBe(false)
  })

  it('thead tr child does not have th child when not prop selectable and slot selectHead', () => {
    const wrapper = mount(BTable, {
      props: {selectable: false},
      slots: {selectHead: 'foobar'},
    })
    const $thead = wrapper.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.find('th')
    expect($th.exists()).toBe(false)
  })

  it('thead tr child has th child has class b-table-selection-column', () => {
    const wrapper = mount(BTable, {
      props: {selectable: true},
      slots: {selectHead: 'foobar'},
    })
    const $thead = wrapper.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.get('th')
    expect($th.classes()).toContain('b-table-selection-column')
  })

  it('thead tr child has th child has class b-table-sticky-column when prop stickySelect', async () => {
    const wrapper = mount(BTable, {
      props: {selectable: true, stickySelect: true},
      slots: {selectHead: 'foobar'},
    })
    const $thead = wrapper.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.get('th')
    expect($th.classes()).toContain('b-table-sticky-column')
    await wrapper.setProps({stickySelect: false})
    expect($th.classes()).not.toContain('b-table-sticky-column')
  })

  it('has th when items and fields props', () => {
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const $th = wrapper.find('th')
    expect($th.exists()).toBe(true)
  })

  it('th has attr scope to be col', () => {
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const $th = wrapper.get('th')
    expect($th.attributes('scope')).toBe('col')
  })

  it('th has attr title to be headerTitle from TableField headerTitle', () => {
    const fields: Array<TableField> = [{key: 'abc', headerTitle: 'abcdef'}]
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const $th = wrapper.get('th')
    expect($th.attributes('title')).toBe('abcdef')
  })

  it('th has attr abbr to be headerAbbr from TableField in props fields', () => {
    const fields: Array<TableField> = [{key: 'abc', headerAbbr: 'abcdef'}]
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const $th = wrapper.get('th')
    expect($th.attributes('abbr')).toBe('abcdef')
  })

  it('th has attr style to be thStyle from TableField in props fields', () => {
    const fields: Array<TableField> = [{key: 'abc', thStyle: 'background-color:powderblue;'}]
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const $th = wrapper.get('th')
    expect($th.attributes('style')).toBe('background-color: powderblue;')
  })

  it('th classes from class field in TableField from prop fields', () => {
    const fields: Array<TableField> = [{key: 'abc', class: ['foo']}]
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const $th = wrapper.get('th')
    expect($th.classes()).toContain('foo')
  })

  it('th classes from thClass field in TableField from prop fields', () => {
    const fields: Array<TableField> = [{key: 'abc', thClass: ['foo']}]
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const $th = wrapper.get('th')
    expect($th.classes()).toContain('foo')
  })

  it('th has class table-{type} variant field in TableField from prop fields', () => {
    const fields: Array<TableField> = [{key: 'abc', variant: 'info'}]
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const $th = wrapper.get('th')
    expect($th.classes()).toContain('table-info')
  })

  it('th has class b-table-sticky-column from field stickyColumn in TableField from prop fields', () => {
    const fields: Array<TableField> = [{key: 'abc', stickyColumn: true}]
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const $th = wrapper.get('th')
    expect($th.classes()).toContain('b-table-sticky-column')
  })

  it('th has class b-table-sortable-column from field sortable in TableField from prop fields', () => {
    const fields: Array<TableField> = [{key: 'abc', sortable: true}]
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const $th = wrapper.get('th')
    expect($th.classes()).toContain('b-table-sortable-column')
  })

  it.skip('th does not have class b-table-sortable-column from field sortable in TableField from prop fields but field is not sortable', () => {
    // TODO I'm unsure how to make the isSortable value eval to false
    const fields: Array<TableField> = [{key: 'abc', sortable: true}]
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const $th = wrapper.get('th')
    expect($th.classes()).toContain('b-table-sortable-column')
  })

  it('emits headClicked event when head is clicked', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const $th = wrapper.get('th')
    await $th.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('headClicked')
  })

  it('first item in headClicked is name', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const $th = wrapper.get('th')
    await $th.trigger('click')
    const $emitted = wrapper.emitted('headClicked') ?? []
    expect($emitted[0][0]).toBe('name')
  })

  it("second item in headClicked is {key: 'name'}", async () => {
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const $th = wrapper.get('th')
    await $th.trigger('click')
    const $emitted = wrapper.emitted('headClicked') ?? []
    expect($emitted[0][1]).toEqual({key: 'name'})
  })

  it('third item is instanceOf MouseEvent', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const $th = wrapper.get('th')
    await $th.trigger('click')
    const $emitted = wrapper.emitted('headClicked') ?? []
    expect($emitted[0][2] instanceof MouseEvent).toBe(true)
  })

  it('fourth item is always false for this header', async () => {
    const wrapper = mount(BTable, {
      props: {items, fields},
    })
    const $th = wrapper.get('th')
    await $th.trigger('click')
    const $emitted = wrapper.emitted('headClicked') ?? []
    expect($emitted[0][3]).toBe(false)
  })

  // TODO the above trigger event may also cause a sorting event
  // That needs to be tested.
  // I'm unsure how to manipulate the isSortable value, like stated in an above todo

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
    expect($table.classes()).toContain('b-table-busy')
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
    expect($table.classes()).toContain('b-table-busy')
    expect($table.find('tr.b-table-busy-slot').exists()).toBe(true)
  })
})
