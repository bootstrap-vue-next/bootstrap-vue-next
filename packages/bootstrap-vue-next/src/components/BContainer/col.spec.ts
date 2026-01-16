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

  it('has class align-self-{type} when prop order', async () => {
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

  it('renders default slot', () => {
    const wrapper = mount(BCol, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('breakpoint order classes are generated in ascending order', () => {
    const wrapper = mount(BCol, {
      props: {
        order: '1',
        orderSm: '2',
        orderMd: '3',
        orderLg: '4',
        orderXl: '5',
        orderXxl: '6',
      },
    })
    const classes = wrapper.classes()
    const orderClasses = classes.filter((c) => c.startsWith('order-'))

    // Verify all order classes are present
    expect(orderClasses).toContain('order-1')
    expect(orderClasses).toContain('order-sm-2')
    expect(orderClasses).toContain('order-md-3')
    expect(orderClasses).toContain('order-lg-4')
    expect(orderClasses).toContain('order-xl-5')
    expect(orderClasses).toContain('order-xxl-6')

    // Verify they appear in ascending breakpoint order
    const orderClassIndexes = [
      classes.indexOf('order-1'),
      classes.indexOf('order-sm-2'),
      classes.indexOf('order-md-3'),
      classes.indexOf('order-lg-4'),
      classes.indexOf('order-xl-5'),
      classes.indexOf('order-xxl-6'),
    ]

    // Each index should be less than the next (ascending order)
    for (let i = 0; i < orderClassIndexes.length - 1; i++) {
      expect(orderClassIndexes[i]).toBeLessThan(orderClassIndexes[i + 1])
    }
  })

  it('breakpoint offset classes are generated in ascending order', () => {
    const wrapper = mount(BCol, {
      props: {
        offset: '1',
        offsetSm: '2',
        offsetMd: '3',
        offsetLg: '4',
        offsetXl: '5',
        offsetXxl: '6',
      },
    })
    const classes = wrapper.classes()
    const offsetClasses = classes.filter((c) => c.startsWith('offset-'))

    // Verify all offset classes are present
    expect(offsetClasses).toContain('offset-1')
    expect(offsetClasses).toContain('offset-sm-2')
    expect(offsetClasses).toContain('offset-md-3')
    expect(offsetClasses).toContain('offset-lg-4')
    expect(offsetClasses).toContain('offset-xl-5')
    expect(offsetClasses).toContain('offset-xxl-6')

    // Verify they appear in ascending breakpoint order
    const offsetClassIndexes = [
      classes.indexOf('offset-1'),
      classes.indexOf('offset-sm-2'),
      classes.indexOf('offset-md-3'),
      classes.indexOf('offset-lg-4'),
      classes.indexOf('offset-xl-5'),
      classes.indexOf('offset-xxl-6'),
    ]

    // Each index should be less than the next (ascending order)
    for (let i = 0; i < offsetClassIndexes.length - 1; i++) {
      expect(offsetClassIndexes[i]).toBeLessThan(offsetClassIndexes[i + 1])
    }
  })
})
