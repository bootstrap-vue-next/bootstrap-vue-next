import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCol from './BCol.vue'

describe('col', () => {
  enableAutoUnmount(afterEach)

  it('tag is default div', () => {
    const wrapper = mount(BCol)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BCol, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has class col-{type} when prop cols', async () => {
    const wrapper = mount(BCol, {
      props: {cols: '6'},
    })
    expect(wrapper.classes()).toContain('col-6')
    await wrapper.setProps({cols: undefined})
    expect(wrapper.classes()).not.toContain('col-6')
  })

  it('has class col-auto when prop cols is auto', () => {
    const wrapper = mount(BCol, {
      props: {cols: 'auto'},
    })
    expect(wrapper.classes()).toContain('col-auto')
  })

  it('has class offset-{type} when prop offset', async () => {
    const wrapper = mount(BCol, {
      props: {offset: '6'},
    })
    expect(wrapper.classes()).toContain('offset-6')
    await wrapper.setProps({offset: undefined})
    expect(wrapper.classes()).not.toContain('offset-6')
  })

  it('has class order-{type} when prop order', async () => {
    const wrapper = mount(BCol, {
      props: {order: '6'},
    })
    expect(wrapper.classes()).toContain('order-6')
    await wrapper.setProps({order: undefined})
    expect(wrapper.classes()).not.toContain('order-6')
  })

  it('has class align-self-{type} when prop alignSelf', async () => {
    const wrapper = mount(BCol, {
      props: {alignSelf: 'baseline'},
    })
    expect(wrapper.classes()).toContain('align-self-baseline')
    await wrapper.setProps({alignSelf: undefined})
    expect(wrapper.classes()).not.toContain('align-self-baseline')
  })

  it('has class col when prop col', async () => {
    const wrapper = mount(BCol, {
      props: {col: true, cols: 'auto'},
    })
    expect(wrapper.classes()).toContain('col')
  })

  it('does not have class col when prop col false and prop cols Truthy', async () => {
    const wrapper = mount(BCol, {
      props: {col: false, cols: 'auto'},
    })
    expect(wrapper.classes()).not.toContain('col')
  })

  it('has default col class when no cols or breakpoint props are set', () => {
    const wrapper = mount(BCol)
    expect(wrapper.classes()).toContain('col')
  })

  it('does not have default col class when cols prop is set', () => {
    const wrapper = mount(BCol, {
      props: {cols: 6},
    })
    expect(wrapper.classes()).not.toContain('col')
    expect(wrapper.classes()).toContain('col-6')
  })

  it('renders default slot', () => {
    const wrapper = mount(BCol, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('has class col-sm when prop sm is true', async () => {
    const wrapper = mount(BCol, {
      props: {sm: true},
    })
    expect(wrapper.classes()).toContain('col-sm')
    await wrapper.setProps({sm: false})
    expect(wrapper.classes()).not.toContain('col-sm')
  })

  it('has class col-sm-{value} when prop sm is a number', () => {
    const wrapper = mount(BCol, {
      props: {sm: 6},
    })
    expect(wrapper.classes()).toContain('col-sm-6')
  })

  it('has class col-md when prop md is true', async () => {
    const wrapper = mount(BCol, {
      props: {md: true},
    })
    expect(wrapper.classes()).toContain('col-md')
    await wrapper.setProps({md: false})
    expect(wrapper.classes()).not.toContain('col-md')
  })

  it('has class col-md-{value} when prop md is a number', () => {
    const wrapper = mount(BCol, {
      props: {md: 6},
    })
    expect(wrapper.classes()).toContain('col-md-6')
  })

  it('has class col-lg when prop lg is true', async () => {
    const wrapper = mount(BCol, {
      props: {lg: true},
    })
    expect(wrapper.classes()).toContain('col-lg')
    await wrapper.setProps({lg: false})
    expect(wrapper.classes()).not.toContain('col-lg')
  })

  it('has class col-lg-{value} when prop lg is a number', () => {
    const wrapper = mount(BCol, {
      props: {lg: 6},
    })
    expect(wrapper.classes()).toContain('col-lg-6')
  })

  it('has class col-xl when prop xl is true', async () => {
    const wrapper = mount(BCol, {
      props: {xl: true},
    })
    expect(wrapper.classes()).toContain('col-xl')
    await wrapper.setProps({xl: false})
    expect(wrapper.classes()).not.toContain('col-xl')
  })

  it('has class col-xl-{value} when prop xl is a number', () => {
    const wrapper = mount(BCol, {
      props: {xl: 6},
    })
    expect(wrapper.classes()).toContain('col-xl-6')
  })

  it('has class col-xxl when prop xxl is true', async () => {
    const wrapper = mount(BCol, {
      props: {xxl: true},
    })
    expect(wrapper.classes()).toContain('col-xxl')
    await wrapper.setProps({xxl: false})
    expect(wrapper.classes()).not.toContain('col-xxl')
  })

  it('has class col-xxl-{value} when prop xxl is a number', () => {
    const wrapper = mount(BCol, {
      props: {xxl: 6},
    })
    expect(wrapper.classes()).toContain('col-xxl-6')
  })

  it('does not have default col class when a breakpoint prop is set', () => {
    const wrapper = mount(BCol, {
      props: {sm: true},
    })
    expect(wrapper.classes()).not.toContain('col')
    expect(wrapper.classes()).toContain('col-sm')
  })

  it('has class offset-sm-{value} when prop offsetSm', async () => {
    const wrapper = mount(BCol, {
      props: {offsetSm: 2},
    })
    expect(wrapper.classes()).toContain('offset-sm-2')
    await wrapper.setProps({offsetSm: undefined})
    expect(wrapper.classes()).not.toContain('offset-sm-2')
  })

  it('has class offset-md-{value} when prop offsetMd', () => {
    const wrapper = mount(BCol, {
      props: {offsetMd: 3},
    })
    expect(wrapper.classes()).toContain('offset-md-3')
  })

  it('has class offset-lg-{value} when prop offsetLg', () => {
    const wrapper = mount(BCol, {
      props: {offsetLg: 4},
    })
    expect(wrapper.classes()).toContain('offset-lg-4')
  })

  it('has class offset-xl-{value} when prop offsetXl', () => {
    const wrapper = mount(BCol, {
      props: {offsetXl: 5},
    })
    expect(wrapper.classes()).toContain('offset-xl-5')
  })

  it('has class offset-xxl-{value} when prop offsetXxl', () => {
    const wrapper = mount(BCol, {
      props: {offsetXxl: 6},
    })
    expect(wrapper.classes()).toContain('offset-xxl-6')
  })

  it('has class order-sm-{value} when prop orderSm', async () => {
    const wrapper = mount(BCol, {
      props: {orderSm: 1},
    })
    expect(wrapper.classes()).toContain('order-sm-1')
    await wrapper.setProps({orderSm: undefined})
    expect(wrapper.classes()).not.toContain('order-sm-1')
  })

  it('has class order-md-{value} when prop orderMd', () => {
    const wrapper = mount(BCol, {
      props: {orderMd: 2},
    })
    expect(wrapper.classes()).toContain('order-md-2')
  })

  it('has class order-lg-{value} when prop orderLg', () => {
    const wrapper = mount(BCol, {
      props: {orderLg: 3},
    })
    expect(wrapper.classes()).toContain('order-lg-3')
  })

  it('has class order-xl-{value} when prop orderXl', () => {
    const wrapper = mount(BCol, {
      props: {orderXl: 4},
    })
    expect(wrapper.classes()).toContain('order-xl-4')
  })

  it('has class order-xxl-{value} when prop orderXxl', () => {
    const wrapper = mount(BCol, {
      props: {orderXxl: 5},
    })
    expect(wrapper.classes()).toContain('order-xxl-5')
  })

  it('combines multiple responsive breakpoint classes', () => {
    const wrapper = mount(BCol, {
      props: {sm: 6, md: 4, lg: 3},
    })
    expect(wrapper.classes()).toContain('col-sm-6')
    expect(wrapper.classes()).toContain('col-md-4')
    expect(wrapper.classes()).toContain('col-lg-3')
  })

  it('combines responsive offset classes', () => {
    const wrapper = mount(BCol, {
      props: {offsetSm: 1, offsetMd: 2, offsetLg: 3, offsetXl: 4, offsetXxl: 5},
    })
    expect(wrapper.classes()).toContain('offset-sm-1')
    expect(wrapper.classes()).toContain('offset-md-2')
    expect(wrapper.classes()).toContain('offset-lg-3')
    expect(wrapper.classes()).toContain('offset-xl-4')
    expect(wrapper.classes()).toContain('offset-xxl-5')
  })

  it('combines responsive order classes', () => {
    const wrapper = mount(BCol, {
      props: {orderSm: 1, orderMd: 2, orderLg: 3, orderXl: 4, orderXxl: 5},
    })
    expect(wrapper.classes()).toContain('order-sm-1')
    expect(wrapper.classes()).toContain('order-md-2')
    expect(wrapper.classes()).toContain('order-lg-3')
    expect(wrapper.classes()).toContain('order-xl-4')
    expect(wrapper.classes()).toContain('order-xxl-5')
  })

  it('has col-sm-auto when prop sm is auto', () => {
    const wrapper = mount(BCol, {
      props: {sm: 'auto'},
    })
    expect(wrapper.classes()).toContain('col-sm-auto')
  })

  it('combines breakpoint, offset, and order props', () => {
    const wrapper = mount(BCol, {
      props: {md: 6, offsetMd: 3, orderMd: 2},
    })
    expect(wrapper.classes()).toContain('col-md-6')
    expect(wrapper.classes()).toContain('offset-md-3')
    expect(wrapper.classes()).toContain('order-md-2')
  })

  it('has align-self-start when prop alignSelf is start', () => {
    const wrapper = mount(BCol, {
      props: {alignSelf: 'start'},
    })
    expect(wrapper.classes()).toContain('align-self-start')
  })

  it('has align-self-end when prop alignSelf is end', () => {
    const wrapper = mount(BCol, {
      props: {alignSelf: 'end'},
    })
    expect(wrapper.classes()).toContain('align-self-end')
  })

  it('has align-self-center when prop alignSelf is center', () => {
    const wrapper = mount(BCol, {
      props: {alignSelf: 'center'},
    })
    expect(wrapper.classes()).toContain('align-self-center')
  })

  it('has align-self-stretch when prop alignSelf is stretch', () => {
    const wrapper = mount(BCol, {
      props: {alignSelf: 'stretch'},
    })
    expect(wrapper.classes()).toContain('align-self-stretch')
  })
})
