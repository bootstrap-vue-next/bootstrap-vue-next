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
  // Did not test has rowColClasses existing or getClasses existing
  // Is that up to a unit test? Or a component test? Or Both?
})
