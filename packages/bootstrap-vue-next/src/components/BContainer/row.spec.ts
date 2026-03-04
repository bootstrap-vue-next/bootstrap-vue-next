import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BRow from './BRow.vue'

describe('row', () => {
  enableAutoUnmount(afterEach)

  it('has static class row', () => {
    const wrapper = mount(BRow)
    expect(wrapper.classes()).toContain('row')
  })

  it('tag is div by default', () => {
    const wrapper = mount(BRow)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BRow, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has class gx-{type} when prop gutterX', () => {
    const wrapper = mount(BRow, {
      props: {gutterX: '120'},
    })
    expect(wrapper.classes()).toContain('gx-120')
  })

  it('has class gx-{type} when prop gutterY', () => {
    const wrapper = mount(BRow, {
      props: {gutterY: '120'},
    })
    expect(wrapper.classes()).toContain('gy-120')
  })

  it('has class align-items-{type} when prop alignV', async () => {
    const wrapper = mount(BRow, {
      props: {alignV: 'baseline'},
    })
    expect(wrapper.classes()).toContain('align-items-baseline')
    await wrapper.setProps({alignV: undefined})
    expect(wrapper.classes()).not.toContain('align-items-baseline')
  })

  it('has class justify-content-{type} when prop alignH', async () => {
    const wrapper = mount(BRow, {
      props: {alignH: 'between'},
    })
    expect(wrapper.classes()).toContain('justify-content-between')
    await wrapper.setProps({alignH: undefined})
    expect(wrapper.classes()).not.toContain('justify-content-between')
  })

  it('has class align-content-{type} when prop alignContent', async () => {
    const wrapper = mount(BRow, {
      props: {alignContent: 'between'},
    })
    expect(wrapper.classes()).toContain('align-content-between')
    await wrapper.setProps({alignContent: undefined})
    expect(wrapper.classes()).not.toContain('align-content-between')
  })

  it('has class g-0 when prop noGutters', async () => {
    const wrapper = mount(BRow, {
      props: {noGutters: true},
    })
    expect(wrapper.classes()).toContain('g-0')
    await wrapper.setProps({noGutters: false})
    expect(wrapper.classes()).not.toContain('g-0')
  })

  it('cols classes', () => {
    const wrapper = mount(BRow, {
      props: {cols: 1, colsSm: 2, colsMd: 3, colsLg: 4, colsXl: 5, colsXxl: 6},
    })
    expect(wrapper.classes()).toContain('row-cols-1')
    expect(wrapper.classes()).toContain('row-cols-sm-2')
    expect(wrapper.classes()).toContain('row-cols-md-3')
    expect(wrapper.classes()).toContain('row-cols-lg-4')
    expect(wrapper.classes()).toContain('row-cols-xl-5')
    expect(wrapper.classes()).toContain('row-cols-xxl-6')
  })

  it('breakpoint cols classes are generated in ascending order', () => {
    const wrapper = mount(BRow, {
      props: {cols: 1, colsSm: 2, colsMd: 3, colsLg: 4, colsXl: 5, colsXxl: 6},
    })
    const classes = wrapper.classes()
    const colsClasses = classes.filter((c) => c.startsWith('row-cols-'))

    // Verify all cols classes are present
    expect(colsClasses).toContain('row-cols-1')
    expect(colsClasses).toContain('row-cols-sm-2')
    expect(colsClasses).toContain('row-cols-md-3')
    expect(colsClasses).toContain('row-cols-lg-4')
    expect(colsClasses).toContain('row-cols-xl-5')
    expect(colsClasses).toContain('row-cols-xxl-6')

    // Verify they appear in ascending breakpoint order
    const colsClassIndexes = [
      classes.indexOf('row-cols-1'),
      classes.indexOf('row-cols-sm-2'),
      classes.indexOf('row-cols-md-3'),
      classes.indexOf('row-cols-lg-4'),
      classes.indexOf('row-cols-xl-5'),
      classes.indexOf('row-cols-xxl-6'),
    ]

    // Each index should be less than the next (ascending order)
    for (let i = 0; i < colsClassIndexes.length - 1; i++) {
      expect(colsClassIndexes[i]).toBeLessThan(colsClassIndexes[i + 1])
    }
  })
})
