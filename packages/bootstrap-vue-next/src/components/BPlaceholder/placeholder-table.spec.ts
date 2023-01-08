import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BPlaceholderTable from './BPlaceholderTable.vue'
import BPlaceholder from './BPlaceholder.vue'
import BTableSimple from '../BTable//BTableSimple.vue'

describe('placeholder-table', () => {
  enableAutoUnmount(afterEach)

  it('has BTableSimple', () => {
    const wrapper = mount(BPlaceholderTable)
    const $tablesimple = wrapper.findComponent(BTableSimple)
    expect($tablesimple.exists()).toBe(true)
  })

  it('renders slot thead', () => {
    const wrapper = mount(BPlaceholderTable, {
      slots: {thead: 'foobar'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.text()).toBe('foobar')
  })

  it('table has child thead', () => {
    const wrapper = mount(BPlaceholderTable)
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.find('thead')
    expect($thead.exists()).toBe(true)
  })

  it('renders slot thead if not prop hideHeader', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {hideHeader: false},
      slots: {thead: 'foobar'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.text()).toBe('foobar')
  })

  it('does not render slot thead if prop hideHeader', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {hideHeader: true},
      slots: {thead: 'foobar'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.text()).toBe('')
  })

  it('child thead does not exist if prop hideHeader', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {hideHeader: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.find('thead')
    expect($thead.exists()).toBe(false)
  })

  it('child thead has child tr', () => {
    const wrapper = mount(BPlaceholderTable)
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.find('tr')
    expect($tr.exists()).toBe(true)
  })

  it('child thead child tr has child th when prop columns', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {columns: 1},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.find('th')
    expect($th.exists()).toBe(true)
  })

  it('child thead child tr has child th when prop headerColumns', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {headerColumns: 1},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.find('th')
    expect($th.exists()).toBe(true)
  })

  it('child thead child tr does not have child th when prop headerColumns 0', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {headerColumns: 0},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.find('th')
    expect($th.exists()).toBe(false)
  })

  it('child thead child tr does not have child th when prop columns 0', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {columns: 0},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.find('th')
    expect($th.exists()).toBe(false)
  })

  it('child thead child tr has child th has child BPlaceholder', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {headerColumns: 1},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.get('th')
    const $placeholder = $th.findComponent(BPlaceholder)
    expect($placeholder.exists()).toBe(true)
  })

  it('child thead child tr has child th child BPlaceholder has prop size to be prop headerSize', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {headerColumns: 1, headerSize: 'xs'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.get('th')
    const $placeholder = $th.getComponent(BPlaceholder)
    expect($placeholder.props('size')).toBe('xs')
  })

  it('child thead child tr has child th child BPlaceholder has prop size to be undefined by default', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {headerColumns: 1},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.get('th')
    const $placeholder = $th.getComponent(BPlaceholder)
    expect($placeholder.props('size')).toBeUndefined()
  })

  it('child thead child tr has child th child BPlaceholder has prop variant to be prop headerVariant', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {headerColumns: 1, headerVariant: 'danger'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.get('th')
    const $placeholder = $th.getComponent(BPlaceholder)
    expect($placeholder.props('variant')).toBe('danger')
  })

  it('child thead child tr has child th child BPlaceholder has prop variant to be undefined by default', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {headerColumns: 1},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.get('th')
    const $placeholder = $th.getComponent(BPlaceholder)
    expect($placeholder.props('variant')).toBeUndefined()
  })

  it('child thead child tr has child th child BPlaceholder has prop animation to be prop headerAnimation', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {headerColumns: 1, headerAnimation: 'glow'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.get('th')
    const $placeholder = $th.getComponent(BPlaceholder)
    expect($placeholder.props('animation')).toBe('glow')
  })

  it('child thead child tr has child th child BPlaceholder has prop animation to be undefined by default', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {headerColumns: 1},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.get('th')
    const $placeholder = $th.getComponent(BPlaceholder)
    expect($placeholder.props('animation')).toBeUndefined()
  })

  it('child thead child tr has child th child BPlaceholder has prop width to be prop headerCellWidth', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {headerColumns: 1, headerCellWidth: 1000},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.get('th')
    const $placeholder = $th.getComponent(BPlaceholder)
    expect($placeholder.props('width')).toBe(1000)
  })

  it('child thead child tr has child th child BPlaceholder has prop width to 100 by default', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {headerColumns: 1},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.get('tr')
    const $th = $tr.get('th')
    const $placeholder = $th.getComponent(BPlaceholder)
    expect($placeholder.props('width')).toBe(100)
  })

  it('child thead child tr children th length equal to the number of headerColumns when headerColumns is number', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {headerColumns: 3},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.get('tr')
    const [$first, $second, $third, $fourth] = $tr.findAll('th')
    expect($first.exists()).toBe(true)
    expect($second.exists()).toBe(true)
    expect($third.exists()).toBe(true)
    expect($fourth).toBeUndefined()
  })

  it('child thead child tr children th length equal to the number of headerColumns when headerColumns is string', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {headerColumns: '3'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.get('tr')
    const [$first, $second, $third, $fourth] = $tr.findAll('th')
    expect($first.exists()).toBe(true)
    expect($second.exists()).toBe(true)
    expect($third.exists()).toBe(true)
    expect($fourth).toBeUndefined()
  })

  it('child thead child tr children th length equal to the number of columns headerColumns is incorrect string', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {headerColumns: 'foo', columns: 1},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.get('tr')
    const [$first, $second] = $tr.findAll('th')
    expect($first.exists()).toBe(true)
    expect($second).toBeUndefined()
  })

  it('child thead child tr children th length equal to the number of columns when prop headerColumns undefined', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {columns: 3},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.get('tr')
    const [$first, $second, $third, $fourth] = $tr.findAll('th')
    expect($first.exists()).toBe(true)
    expect($second.exists()).toBe(true)
    expect($third.exists()).toBe(true)
    expect($fourth).toBeUndefined()
  })

  it('child thead child tr children th length equal to the number of prop headerColumns over prop columns', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {columns: 2, headerColumns: 1},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $thead = $tablesimple.get('thead')
    const $tr = $thead.get('tr')
    const [$first, $second] = $tr.findAll('th')
    expect($first.exists()).toBe(true)
    expect($second).toBeUndefined()
  })

  it('renders slot default', () => {
    const wrapper = mount(BPlaceholderTable, {
      slots: {default: 'foobar'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.text()).toBe('foobar')
  })

  it('has child tbody', () => {
    const wrapper = mount(BPlaceholderTable)
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tbody = $tablesimple.find('tbody')
    expect($tbody.exists()).toBe(true)
  })

  it('child tbody has child tr by default', () => {
    const wrapper = mount(BPlaceholderTable)
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tbody = $tablesimple.get('tbody')
    const $tr = $tbody.find('tr')
    expect($tr.exists()).toBe(true)
  })

  it('child tbody child tr has child td', () => {
    const wrapper = mount(BPlaceholderTable)
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tbody = $tablesimple.get('tbody')
    const $tr = $tbody.get('tr')
    const $th = $tr.find('td')
    expect($th.exists()).toBe(true)
  })

  it('child tbody child tr child td has child BPlaceholder', () => {
    const wrapper = mount(BPlaceholderTable)
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tbody = $tablesimple.get('tbody')
    const $tr = $tbody.get('tr')
    const $td = $tr.get('td')
    const $placeholder = $td.findComponent(BPlaceholder)
    expect($placeholder.exists()).toBe(true)
  })

  it('child tbody child tr child td child BPlaceholder has prop size to be undefined by default', () => {
    const wrapper = mount(BPlaceholderTable)
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tbody = $tablesimple.get('tbody')
    const $tr = $tbody.get('tr')
    const $td = $tr.get('td')
    const $placeholder = $td.getComponent(BPlaceholder)
    expect($placeholder.props('size')).toBeUndefined()
  })

  it('child tbody child tr child td child BPlaceholder has prop size to be prop size', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {size: 'xs'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tbody = $tablesimple.get('tbody')
    const $tr = $tbody.get('tr')
    const $td = $tr.get('td')
    const $placeholder = $td.getComponent(BPlaceholder)
    expect($placeholder.props('size')).toBe('xs')
  })

  it('child tbody child tr child td child BPlaceholder has prop variant to be undefined by default', () => {
    const wrapper = mount(BPlaceholderTable)
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tbody = $tablesimple.get('tbody')
    const $tr = $tbody.get('tr')
    const $td = $tr.get('td')
    const $placeholder = $td.getComponent(BPlaceholder)
    expect($placeholder.props('variant')).toBeUndefined()
  })

  it('child tbody child tr child td child BPlaceholder has prop variant to be prop variant', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {variant: 'danger'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tbody = $tablesimple.get('tbody')
    const $tr = $tbody.get('tr')
    const $td = $tr.get('td')
    const $placeholder = $td.getComponent(BPlaceholder)
    expect($placeholder.props('variant')).toBe('danger')
  })

  it('child tbody child tr child td child BPlaceholder has prop animation to be undefined by default', () => {
    const wrapper = mount(BPlaceholderTable)
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tbody = $tablesimple.get('tbody')
    const $tr = $tbody.get('tr')
    const $td = $tr.get('td')
    const $placeholder = $td.getComponent(BPlaceholder)
    expect($placeholder.props('animation')).toBeUndefined()
  })

  it('child tbody child tr child td child BPlaceholder has prop animation to be prop animation', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {animation: 'glow'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tbody = $tablesimple.get('tbody')
    const $tr = $tbody.get('tr')
    const $td = $tr.get('td')
    const $placeholder = $td.getComponent(BPlaceholder)
    expect($placeholder.props('animation')).toBe('glow')
  })

  it('child tbody child tr child td child BPlaceholder has prop width to be default 100', () => {
    const wrapper = mount(BPlaceholderTable)
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tbody = $tablesimple.get('tbody')
    const $tr = $tbody.get('tr')
    const $td = $tr.get('td')
    const $placeholder = $td.getComponent(BPlaceholder)
    expect($placeholder.props('width')).toBe(100)
  })

  it('child tbody child tr child td child BPlaceholder has prop width to be prop cellWidth', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {cellWidth: 1000},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tbody = $tablesimple.get('tbody')
    const $tr = $tbody.get('tr')
    const $td = $tr.get('td')
    const $placeholder = $td.getComponent(BPlaceholder)
    expect($placeholder.props('width')).toBe(1000)
  })

  it('child tbody child tr children td length equal to the number of prop columns when is number', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {columns: 2},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tbody = $tablesimple.get('tbody')
    const $tr = $tbody.get('tr')
    const [$first, $second, $third] = $tr.findAll('td')
    expect($first.exists()).toBe(true)
    expect($second.exists()).toBe(true)
    expect($third).toBeUndefined()
  })

  it('child tbody child tr children td length equal to the number of prop columns when is string', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {columns: '2'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tbody = $tablesimple.get('tbody')
    const $tr = $tbody.get('tr')
    const [$first, $second, $third] = $tr.findAll('td')
    expect($first.exists()).toBe(true)
    expect($second.exists()).toBe(true)
    expect($third).toBeUndefined()
  })

  it('child tbody child tr children td length equal to 5 when prop columns is incorrect string', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {columns: 'foo'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tbody = $tablesimple.get('tbody')
    const $tr = $tbody.get('tr')
    const [$first, $second, $third, $fourth, $fifth, $sixth] = $tr.findAll('td')
    expect($first.exists()).toBe(true)
    expect($second.exists()).toBe(true)
    expect($third.exists()).toBe(true)
    expect($fourth.exists()).toBe(true)
    expect($fifth.exists()).toBe(true)
    expect($sixth).toBeUndefined()
  })

  it('child tbody children tr length equal to the number of prop rows when is number', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {rows: 2},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tbody = $tablesimple.get('tbody')
    const [$first, $second, $third] = $tbody.findAll('tr')
    expect($first.exists()).toBe(true)
    expect($second.exists()).toBe(true)
    expect($third).toBeUndefined()
  })

  it('child tbody children tr length equal to the number of prop rows when is string', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {rows: '2'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tbody = $tablesimple.get('tbody')
    const [$first, $second, $third] = $tbody.findAll('tr')
    expect($first.exists()).toBe(true)
    expect($second.exists()).toBe(true)
    expect($third).toBeUndefined()
  })

  it('child tbody children tr length equal to 3 when prop rows is incorrect string', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {rows: 'foo'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tbody = $tablesimple.get('tbody')
    const [$first, $second, $third, $fourth] = $tbody.findAll('tr')
    expect($first.exists()).toBe(true)
    expect($second.exists()).toBe(true)
    expect($third.exists()).toBe(true)
    expect($fourth).toBeUndefined()
  })

  it('renders slot tfoot when prop showFooter', () => {
    const wrapper = mount(BPlaceholderTable, {
      slots: {tfoot: 'foobar'},
      props: {showFooter: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.text()).toBe('foobar')
  })

  it('does not render slot tfoot when not prop showFooter', () => {
    const wrapper = mount(BPlaceholderTable, {
      slots: {tfoot: 'foobar'},
      props: {showFooter: false},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.text()).toBe('')
  })

  it('does not have tfoot by default', () => {
    const wrapper = mount(BPlaceholderTable)
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tfoot = $tablesimple.find('tfoot')
    expect($tfoot.exists()).toBe(false)
  })

  it('has tfoot when prop showFooter', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {showFooter: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tfoot = $tablesimple.find('tfoot')
    expect($tfoot.exists()).toBe(true)
  })

  it('tfoot has child tr', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {showFooter: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tfoot = $tablesimple.get('tfoot')
    const $tr = $tfoot.find('tr')
    expect($tr.exists()).toBe(true)
  })

  it('child tfoot child tr has child th', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {showFooter: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tfoot = $tablesimple.get('tfoot')
    const $tr = $tfoot.get('tr')
    const $th = $tr.find('th')
    expect($th.exists()).toBe(true)
  })

  it('child tfoot child tr child th has child BPlaceholder', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {showFooter: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tfoot = $tablesimple.get('tfoot')
    const $tr = $tfoot.get('tr')
    const $th = $tr.get('th')
    const $placeholder = $th.findComponent(BPlaceholder)
    expect($placeholder.exists()).toBe(true)
  })

  it('child tfoot children tr length equal to the number of footerColumns when footerColumns is number', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {showFooter: true, footerColumns: 2},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tfoot = $tablesimple.get('tfoot')
    const $tr = $tfoot.get('tr')
    const [$first, $second, $third] = $tr.findAll('th')
    expect($first.exists()).toBe(true)
    expect($second.exists()).toBe(true)
    expect($third).toBeUndefined()
  })

  it('child tfoot children tr length equal to the number of footerColumns when footerColumns is string', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {showFooter: true, footerColumns: '2'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tfoot = $tablesimple.get('tfoot')
    const $tr = $tfoot.get('tr')
    const [$first, $second, $third] = $tr.findAll('th')
    expect($first.exists()).toBe(true)
    expect($second.exists()).toBe(true)
    expect($third).toBeUndefined()
  })

  it('child tfoot children tr length equal to the number of footerColumns when footerColumns is incorrect string', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {showFooter: true, footerColumns: 'foo', columns: 1},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tfoot = $tablesimple.get('tfoot')
    const $tr = $tfoot.get('tr')
    const [$first, $second] = $tr.findAll('th')
    expect($first.exists()).toBe(true)
    expect($second).toBeUndefined()
  })

  it('child tfoot children tr length equal to the number of columns when prop footerColumns undefined', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {showFooter: true, columns: 2},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tfoot = $tablesimple.get('tfoot')
    const $tr = $tfoot.get('tr')
    const [$first, $second, $third] = $tr.findAll('th')
    expect($first.exists()).toBe(true)
    expect($second.exists()).toBe(true)
    expect($third).toBeUndefined()
  })

  it('child tfoot children tr length equal to the number of prop footerColumns over prop columns', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {showFooter: true, columns: 3, footerColumns: 2},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tfoot = $tablesimple.get('tfoot')
    const $tr = $tfoot.get('tr')
    const [$first, $second, $third] = $tr.findAll('th')
    expect($first.exists()).toBe(true)
    expect($second.exists()).toBe(true)
    expect($third).toBeUndefined()
  })

  it('child tfoot child tr child th child BPlaceholder has prop size to be prop footerSize', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {showFooter: true, footerSize: 'xs'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tfoot = $tablesimple.get('tfoot')
    const $tr = $tfoot.get('tr')
    const $th = $tr.get('th')
    const $placeholder = $th.getComponent(BPlaceholder)
    expect($placeholder.props('size')).toBe('xs')
  })

  it('child tfoot child tr child th child BPlaceholder has prop size to be undefined by default', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {showFooter: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tfoot = $tablesimple.get('tfoot')
    const $tr = $tfoot.get('tr')
    const $th = $tr.get('th')
    const $placeholder = $th.getComponent(BPlaceholder)
    expect($placeholder.props('size')).toBeUndefined()
  })

  it('child tfoot child tr child th child BPlaceholder has prop variant to be prop footerVariant', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {showFooter: true, footerVariant: 'danger'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tfoot = $tablesimple.get('tfoot')
    const $tr = $tfoot.get('tr')
    const $th = $tr.get('th')
    const $placeholder = $th.getComponent(BPlaceholder)
    expect($placeholder.props('variant')).toBe('danger')
  })

  it('child tfoot child tr child th child BPlaceholder has prop variant to be undefined by default', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {showFooter: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tfoot = $tablesimple.get('tfoot')
    const $tr = $tfoot.get('tr')
    const $th = $tr.get('th')
    const $placeholder = $th.getComponent(BPlaceholder)
    expect($placeholder.props('variant')).toBeUndefined()
  })

  it('child tfoot child tr child th child BPlaceholder has prop animation to be prop footerAnimation', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {showFooter: true, footerAnimation: 'glow'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tfoot = $tablesimple.get('tfoot')
    const $tr = $tfoot.get('tr')
    const $th = $tr.get('th')
    const $placeholder = $th.getComponent(BPlaceholder)
    expect($placeholder.props('animation')).toBe('glow')
  })

  it('child tfoot child tr child th child BPlaceholder has prop animation to be undefined by default', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {showFooter: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tfoot = $tablesimple.get('tfoot')
    const $tr = $tfoot.get('tr')
    const $th = $tr.get('th')
    const $placeholder = $th.getComponent(BPlaceholder)
    expect($placeholder.props('animation')).toBeUndefined()
  })

  it('child tfoot child tr child th child BPlaceholder has prop width to be prop footerCellWidth', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {showFooter: true, footerCellWidth: 1000},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tfoot = $tablesimple.get('tfoot')
    const $tr = $tfoot.get('tr')
    const $th = $tr.get('th')
    const $placeholder = $th.getComponent(BPlaceholder)
    expect($placeholder.props('width')).toBe(1000)
  })

  it('child tfoot child tr child th child BPlaceholder has prop width to be 100 by default', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {showFooter: true},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    const $tfoot = $tablesimple.get('tfoot')
    const $tr = $tfoot.get('tr')
    const $th = $tr.get('th')
    const $placeholder = $th.getComponent(BPlaceholder)
    expect($placeholder.props('width')).toBe(100)
  })

  it('renders all in correct order', () => {
    const wrapper = mount(BPlaceholderTable, {
      props: {showFooter: true},
      slots: {default: 'default', thead: 'thead', tfoot: 'tfoot'},
    })
    const $tablesimple = wrapper.getComponent(BTableSimple)
    expect($tablesimple.text()).toBe('theaddefaulttfoot')
  })
})
