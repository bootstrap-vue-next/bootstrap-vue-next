import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCollapse from './BCollapse.vue'

describe('collapse', () => {
  enableAutoUnmount(afterEach)

  it('has static class collapse', () => {
    const wrapper = mount(BCollapse)
    expect(wrapper.findAll('*')[0].classes()).toContain('collapse')
    // expect(wrapper.classes()).toContain('collapse')
  })

  it('has default tag div', () => {
    const wrapper = mount(BCollapse)
    expect(wrapper.findAll('*')[0].element.tagName).toBe('DIV')
  })

  it('is tag when prop tag', () => {
    const wrapper = mount(BCollapse, {
      props: {tag: 'span'},
    })
    expect(wrapper.findAll('*')[0].element.tagName).toBe('SPAN')
  })

  it('has default id', () => {
    const wrapper = mount(BCollapse)
    expect(wrapper.findAll('*')[0].attributes('id')).toBeDefined()
  })

  it('has id as prop id', () => {
    const wrapper = mount(BCollapse, {
      props: {id: 'foobar'},
    })
    expect(wrapper.findAll('*')[0].attributes?.('id')).toBe('foobar')
  })

  it('has attribute is-nav when prop is nav', async () => {
    const wrapper = mount(BCollapse, {
      props: {isNav: true},
    })
    expect(wrapper.findAll('*')[0].attributes('is-nav')).toBe('true')
    await wrapper.setProps({isNav: false})
    expect(wrapper.findAll('*')[0].attributes('is-nav')).toBe('false')
  })

  it('renders default slot', () => {
    const wrapper = mount(BCollapse, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.findAll('*')[0].text()).toBe('foobar')
  })

  it('renders all slot', () => {
    const wrapper = mount(BCollapse, {
      slots: {
        default: 'default',
        header: '<div>header</div>',
        footer: '<div>footer</div>',
      },
    })
    expect(wrapper.findAll('*')[0].text()).toBe('header')
    expect(wrapper.findAll('*')[1].text()).toBe('default')
    expect(wrapper.findAll('*')[2].text()).toBe('footer')
  })
})
