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
    await wrapper.setProps({cols: null})
    expect(wrapper.classes()).not.toContain('col-6')
  })

  it('has class offset-{type} when prop offset', async () => {
    const wrapper = mount(BCol, {
      props: {offset: '6'},
    })
    expect(wrapper.classes()).toContain('offset-6')
    await wrapper.setProps({offset: null})
    expect(wrapper.classes()).not.toContain('offset-6')
  })

  it('has class order-{type} when prop order', async () => {
    const wrapper = mount(BCol, {
      props: {order: '6'},
    })
    expect(wrapper.classes()).toContain('order-6')
    await wrapper.setProps({order: null})
    expect(wrapper.classes()).not.toContain('order-6')
  })

  it('has class align-self-{type} when prop order', async () => {
    const wrapper = mount(BCol, {
      props: {alignSelf: 'baseline'},
    })
    expect(wrapper.classes()).toContain('align-self-baseline')
    await wrapper.setProps({alignSelf: null})
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
})
