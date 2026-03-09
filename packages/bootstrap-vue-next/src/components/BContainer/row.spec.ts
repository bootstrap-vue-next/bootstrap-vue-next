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

  it('has class gx-{type} when prop gutterX', async () => {
    const wrapper = mount(BRow, {
      props: {gutterX: '3'},
    })
    expect(wrapper.classes()).toContain('gx-3')
    await wrapper.setProps({gutterX: undefined})
    expect(wrapper.classes()).not.toContain('gx-3')
  })

  it('has class gy-{type} when prop gutterY', async () => {
    const wrapper = mount(BRow, {
      props: {gutterY: '3'},
    })
    expect(wrapper.classes()).toContain('gy-3')
    await wrapper.setProps({gutterY: undefined})
    expect(wrapper.classes()).not.toContain('gy-3')
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

  it('renders default slot', () => {
    const wrapper = mount(BRow, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders slot content with HTML', () => {
    const wrapper = mount(BRow, {
      slots: {default: '<div class="test-col">column content</div>'},
    })
    expect(wrapper.find('.test-col').exists()).toBe(true)
    expect(wrapper.find('.test-col').text()).toBe('column content')
  })

  it('has class row-cols-{value} when only cols is set', async () => {
    const wrapper = mount(BRow, {
      props: {cols: 3},
    })
    expect(wrapper.classes()).toContain('row-cols-3')
    await wrapper.setProps({cols: undefined})
    expect(wrapper.classes()).not.toContain('row-cols-3')
  })

  it('has class row-cols-sm-{value} when prop colsSm', async () => {
    const wrapper = mount(BRow, {
      props: {colsSm: 2},
    })
    expect(wrapper.classes()).toContain('row-cols-sm-2')
    await wrapper.setProps({colsSm: undefined})
    expect(wrapper.classes()).not.toContain('row-cols-sm-2')
  })

  it('has class row-cols-md-{value} when prop colsMd', async () => {
    const wrapper = mount(BRow, {
      props: {colsMd: 4},
    })
    expect(wrapper.classes()).toContain('row-cols-md-4')
    await wrapper.setProps({colsMd: undefined})
    expect(wrapper.classes()).not.toContain('row-cols-md-4')
  })

  it('has class row-cols-lg-{value} when prop colsLg', async () => {
    const wrapper = mount(BRow, {
      props: {colsLg: 3},
    })
    expect(wrapper.classes()).toContain('row-cols-lg-3')
    await wrapper.setProps({colsLg: undefined})
    expect(wrapper.classes()).not.toContain('row-cols-lg-3')
  })

  it('has class row-cols-xl-{value} when prop colsXl', async () => {
    const wrapper = mount(BRow, {
      props: {colsXl: 5},
    })
    expect(wrapper.classes()).toContain('row-cols-xl-5')
    await wrapper.setProps({colsXl: undefined})
    expect(wrapper.classes()).not.toContain('row-cols-xl-5')
  })

  it('has class row-cols-xxl-{value} when prop colsXxl', async () => {
    const wrapper = mount(BRow, {
      props: {colsXxl: 6},
    })
    expect(wrapper.classes()).toContain('row-cols-xxl-6')
    await wrapper.setProps({colsXxl: undefined})
    expect(wrapper.classes()).not.toContain('row-cols-xxl-6')
  })

  it('has class align-items-start when prop alignV is start', () => {
    const wrapper = mount(BRow, {
      props: {alignV: 'start'},
    })
    expect(wrapper.classes()).toContain('align-items-start')
  })

  it('has class align-items-center when prop alignV is center', () => {
    const wrapper = mount(BRow, {
      props: {alignV: 'center'},
    })
    expect(wrapper.classes()).toContain('align-items-center')
  })

  it('has class align-items-end when prop alignV is end', () => {
    const wrapper = mount(BRow, {
      props: {alignV: 'end'},
    })
    expect(wrapper.classes()).toContain('align-items-end')
  })

  it('has class align-items-stretch when prop alignV is stretch', () => {
    const wrapper = mount(BRow, {
      props: {alignV: 'stretch'},
    })
    expect(wrapper.classes()).toContain('align-items-stretch')
  })

  it('has class justify-content-start when prop alignH is start', () => {
    const wrapper = mount(BRow, {
      props: {alignH: 'start'},
    })
    expect(wrapper.classes()).toContain('justify-content-start')
  })

  it('has class justify-content-center when prop alignH is center', () => {
    const wrapper = mount(BRow, {
      props: {alignH: 'center'},
    })
    expect(wrapper.classes()).toContain('justify-content-center')
  })

  it('has class justify-content-end when prop alignH is end', () => {
    const wrapper = mount(BRow, {
      props: {alignH: 'end'},
    })
    expect(wrapper.classes()).toContain('justify-content-end')
  })

  it('has class justify-content-around when prop alignH is around', () => {
    const wrapper = mount(BRow, {
      props: {alignH: 'around'},
    })
    expect(wrapper.classes()).toContain('justify-content-around')
  })

  it('has class justify-content-evenly when prop alignH is evenly', () => {
    const wrapper = mount(BRow, {
      props: {alignH: 'evenly'},
    })
    expect(wrapper.classes()).toContain('justify-content-evenly')
  })

  it('has class align-content-start when prop alignContent is start', () => {
    const wrapper = mount(BRow, {
      props: {alignContent: 'start'},
    })
    expect(wrapper.classes()).toContain('align-content-start')
  })

  it('has class align-content-center when prop alignContent is center', () => {
    const wrapper = mount(BRow, {
      props: {alignContent: 'center'},
    })
    expect(wrapper.classes()).toContain('align-content-center')
  })

  it('has class align-content-end when prop alignContent is end', () => {
    const wrapper = mount(BRow, {
      props: {alignContent: 'end'},
    })
    expect(wrapper.classes()).toContain('align-content-end')
  })

  it('has class align-content-stretch when prop alignContent is stretch', () => {
    const wrapper = mount(BRow, {
      props: {alignContent: 'stretch'},
    })
    expect(wrapper.classes()).toContain('align-content-stretch')
  })

  it('has class align-content-around when prop alignContent is around', () => {
    const wrapper = mount(BRow, {
      props: {alignContent: 'around'},
    })
    expect(wrapper.classes()).toContain('align-content-around')
  })

  it('combines gutterX and gutterY classes', () => {
    const wrapper = mount(BRow, {
      props: {gutterX: '2', gutterY: '4'},
    })
    expect(wrapper.classes()).toContain('gx-2')
    expect(wrapper.classes()).toContain('gy-4')
  })

  it('combines alignment and cols classes', () => {
    const wrapper = mount(BRow, {
      props: {alignH: 'center', alignV: 'end', cols: 4},
    })
    expect(wrapper.classes()).toContain('justify-content-center')
    expect(wrapper.classes()).toContain('align-items-end')
    expect(wrapper.classes()).toContain('row-cols-4')
  })

  it('always has row class even with other props', () => {
    const wrapper = mount(BRow, {
      props: {noGutters: true, alignH: 'center', cols: 2},
    })
    expect(wrapper.classes()).toContain('row')
  })
})
