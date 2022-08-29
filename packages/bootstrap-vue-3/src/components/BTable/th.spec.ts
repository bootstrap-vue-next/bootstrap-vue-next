import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTh from './BTh.vue'

describe('th', () => {
  enableAutoUnmount(afterEach)

  it('has static attr role to be columnheader', () => {
    const wrapper = mount(BTh)
    expect(wrapper.attributes('role')).toBe('columnheader')
  })

  it('has colspan to be prop colspan', () => {
    const wrapper = mount(BTh, {
      props: {
        colspan: 6,
      },
    })
    expect(wrapper.attributes('colspan')).toBe('6')
  })

  it('has rowspan to be prop rowspan', () => {
    const wrapper = mount(BTh, {
      props: {
        rowspan: 6,
      },
    })
    expect(wrapper.attributes('rowspan')).toBe('6')
  })

  it('has data-label to be prop stackedHeading', () => {
    const wrapper = mount(BTh, {
      props: {
        stackedHeading: '5',
      },
    })
    expect(wrapper.attributes('data-label')).toBe('5')
  })

  it('has class table-{type} when prop variant', async () => {
    const wrapper = mount(BTh, {
      props: {
        variant: 'primary',
      },
    })
    expect(wrapper.classes()).toContain('table-primary')
    await wrapper.setProps({variant: undefined})
    expect(wrapper.classes()).not.toContain('table-primary')
  })

  it('has class b-table-sticky-column when prop stickyColumn', async () => {
    const wrapper = mount(BTh, {
      props: {
        stickyColumn: true,
      },
    })
    expect(wrapper.classes()).toContain('b-table-sticky-column')
    await wrapper.setProps({stickyColumn: false})
    expect(wrapper.classes()).not.toContain('b-table-sticky-column')
  })

  it('has class table-b-table-default when prop stickyColumn', async () => {
    const wrapper = mount(BTh, {
      props: {
        stickyColumn: true,
      },
    })
    expect(wrapper.classes()).toContain('table-b-table-default')
    await wrapper.setProps({stickyColumn: false})
    expect(wrapper.classes()).not.toContain('table-b-table-default')
  })

  it('does not have class table-b-table-default when prop stickyColumn but also props variant', () => {
    const wrapper = mount(BTh, {
      props: {
        stickyColumn: true,
        variant: 'secondary',
      },
    })
    expect(wrapper.classes()).not.toContain('table-b-table-default')
  })

  it('has attr scope to be colspan when prop colspan', () => {
    const wrapper = mount(BTh, {
      props: {
        colspan: '6',
      },
    })
    expect(wrapper.attributes('scope')).toBe('colspan')
  })

  it('has attr scope to be rowspan when prop rowspan', () => {
    const wrapper = mount(BTh, {
      props: {
        rowspan: '6',
      },
    })
    expect(wrapper.attributes('scope')).toBe('rowspan')
  })

  it('has attr scope to be col by default', () => {
    const wrapper = mount(BTh)
    expect(wrapper.attributes('scope')).toBe('col')
  })

  it('has scope colspan when both rowspan and colspan', () => {
    const wrapper = mount(BTh, {
      props: {colspan: 6, rowspan: 5},
    })
    expect(wrapper.attributes('scope')).toBe('colspan')
  })

  it('does not have a nested div by default when stackedHeading is undefined', () => {
    const wrapper = mount(BTh)
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(false)
  })

  it('has a nested div when stackedHeading is defined', () => {
    const wrapper = mount(BTh, {
      props: {stackedHeading: '5'},
    })
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
  })

  it('nested div when stackedHeading is defined contains default slot', () => {
    const wrapper = mount(BTh, {
      props: {stackedHeading: '5'},
      slots: {default: 'foobar'},
    })
    const $div = wrapper.get('div')
    expect($div.text()).toBe('foobar')
  })
})
