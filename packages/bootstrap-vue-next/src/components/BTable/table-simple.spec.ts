import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTableSimple from './BTableSimple.vue'

describe('BTableSimple', () => {
  enableAutoUnmount(afterEach)

  it('has expected structure when responsive truthy', async () => {
    const wrapper = mount(BTableSimple, {
      props: {responsive: true},
      slots: {default: 'foo'},
    })
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
    const $table = $div.find('table')
    expect($table.exists()).toBe(true)
    expect($table.text()).toBe('foo')
  })

  it('has expected structure when stickyheader truthy', async () => {
    const wrapper = mount(BTableSimple, {
      props: {stickyHeader: true},
      slots: {default: 'foo'},
    })
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
    const $table = $div.find('table')
    expect($table.exists()).toBe(true)
    expect($table.text()).toBe('foo')
  })

  it('has expected structure by default', () => {
    const wrapper = mount(BTableSimple, {
      slots: {default: 'foo'},
    })

    const $table = wrapper.find('table')
    expect($table.exists()).toBe(true)
    expect(wrapper.find('div').exists()).toBe(false)
    expect($table.text()).toBe('foo')
  })

  it('stickyHeader prop adds maxHeight style', async () => {
    const wrapper = mount(BTableSimple, {
      props: {stickyHeader: true, responsive: true},
    })
    expect(wrapper.get('div').attributes('style')).toBe('max-height: 300px;')
    await wrapper.setProps({stickyHeader: false})
    expect(wrapper.get('div').attributes('style')).toBeFalsy()
    await wrapper.setProps({stickyHeader: 200})
    expect(wrapper.get('div').attributes('style')).toBe('max-height: 200px;')
    await wrapper.setProps({stickyHeader: '400px'})
    expect(wrapper.get('div').attributes('style')).toBe('max-height: 400px;')
  })

  describe('table classes', () => {
    it('has class border when outlined prop set', async () => {
      const wrapper = mount(BTableSimple, {
        props: {outlined: true},
      })
      const table = wrapper.get('table')
      expect(table.classes()).toContain('border')
      await wrapper.setProps({outlined: false})
      expect(table.classes()).not.toContain('border')
    })

    it('has class table-bordered when bordered prop set', async () => {
      const wrapper = mount(BTableSimple, {
        props: {bordered: true},
      })
      const table = wrapper.get('table')
      expect(table.classes()).toContain('table-bordered')
      await wrapper.setProps({bordered: false})
      expect(table.classes()).not.toContain('table-bordered')
    })

    it('has class table-borderless when borderless prop set', async () => {
      const wrapper = mount(BTableSimple, {
        props: {borderless: true},
      })
      const table = wrapper.get('table')
      expect(table.classes()).toContain('table-borderless')
      await wrapper.setProps({borderless: false})
      expect(table.classes()).not.toContain('table-borderless')
    })

    it('has class caption-top when caption-top prop set', async () => {
      const wrapper = mount(BTableSimple, {
        props: {captionTop: true},
      })
      const table = wrapper.get('table')
      expect(table.classes()).toContain('caption-top')
      await wrapper.setProps({captionTop: false})
      expect(table.classes()).not.toContain('caption-top')
    })

    it('has class table-dark when dark prop set', async () => {
      const wrapper = mount(BTableSimple, {
        props: {dark: true},
      })
      const table = wrapper.get('table')
      expect(table.classes()).toContain('table-dark')
      await wrapper.setProps({dark: false})
      expect(table.classes()).not.toContain('table-dark')
    })

    it('has class table-hover when hover prop set', async () => {
      const wrapper = mount(BTableSimple, {
        props: {hover: true},
      })
      const table = wrapper.get('table')
      expect(table.classes()).toContain('table-hover')
      await wrapper.setProps({hover: false})
      expect(table.classes()).not.toContain('table-hover')
    })

    it('has class b-table-stacked when stacked prop set', async () => {
      const wrapper = mount(BTableSimple, {
        props: {stacked: true},
      })
      const table = wrapper.get('table')
      expect(table.classes()).toContain('b-table-stacked')
      await wrapper.setProps({stacked: 'lg'})
      expect(table.classes()).toContain('b-table-stacked-lg')
      await wrapper.setProps({stacked: false})
      expect(table.classes()).not.toContain('b-table-stacked')
      expect(table.classes()).not.toContain('b-table-stacked-lg')
    })

    it('has class table-striped when striped prop set', async () => {
      const wrapper = mount(BTableSimple, {
        props: {striped: true},
      })
      const table = wrapper.get('table')
      expect(table.classes()).toContain('table-striped')
      await wrapper.setProps({striped: false})
      expect(table.classes()).not.toContain('table-striped')
    })

    it('has class table-sm when small prop set', async () => {
      const wrapper = mount(BTableSimple, {
        props: {small: true},
      })
      const table = wrapper.get('table')
      expect(table.classes()).toContain('table-sm')
      await wrapper.setProps({small: false})
      expect(table.classes()).not.toContain('table-sm')
    })

    it('has class table-variant when variant prop set', async () => {
      const wrapper = mount(BTableSimple, {
        props: {variant: 'primary'},
      })
      const table = wrapper.get('table')
      expect(table.classes()).toContain('table-primary')
      await wrapper.setProps({variant: 'secondary'})
      expect(table.classes()).toContain('table-secondary')
    })

    it('has class table-striped-columns when striped-columns prop set', async () => {
      const wrapper = mount(BTableSimple, {
        props: {stripedColumns: true},
      })
      const table = wrapper.get('table')
      expect(table.classes()).toContain('table-striped-columns')
      await wrapper.setProps({stripedColumns: false})
      expect(table.classes()).not.toContain('table-striped-columns')
    })

    it('prop tableClass', () => {
      const wrapper = mount(BTableSimple, {
        props: {tableClass: 'foo'},
      })
      const table = wrapper.get('table')
      expect(table.classes()).toContain('foo')
    })

    describe('static classes', () => {
      it('table', () => {
        const wrapper = mount(BTableSimple)
        const table = wrapper.get('table')
        expect(table.classes()).toContain('table')
      })

      it('b-table', () => {
        const wrapper = mount(BTableSimple)
        const table = wrapper.get('table')
        expect(table.classes()).toContain('b-table')
      })
    })
  })
})
