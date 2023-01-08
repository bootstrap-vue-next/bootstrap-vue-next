import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BNavbarNav from './BNavbarNav.vue'

describe('navbar-nav', () => {
  enableAutoUnmount(afterEach)

  it('has static class navbar-nav', () => {
    const wrapper = mount(BNavbarNav)
    expect(wrapper.classes()).toContain('navbar-nav')
  })

  it('is tag ul', () => {
    const wrapper = mount(BNavbarNav)
    expect(wrapper.element.tagName).toBe('UL')
  })

  it('renders default slot', () => {
    const wrapper = mount(BNavbarNav, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('contains class nav-fill when prop fill set', async () => {
    const wrapper = mount(BNavbarNav, {
      props: {fill: true},
    })
    expect(wrapper.classes()).toContain('nav-fill')
    await wrapper.setProps({fill: false})
    expect(wrapper.classes()).not.toContain('nav-fill')
  })

  it('contains class nav-justified when prop justified set', async () => {
    const wrapper = mount(BNavbarNav, {
      props: {justified: true},
    })
    expect(wrapper.classes()).toContain('nav-justified')
    await wrapper.setProps({justified: false})
    expect(wrapper.classes()).not.toContain('nav-justified')
  })

  it('contains class small when prop small set', async () => {
    const wrapper = mount(BNavbarNav, {
      props: {small: true},
    })
    expect(wrapper.classes()).toContain('small')
    await wrapper.setProps({small: false})
    expect(wrapper.classes()).not.toContain('small')
  })

  it('contains class justify-content-{type} when prop align set', async () => {
    const wrapper = mount(BNavbarNav, {
      props: {align: 'start'},
    })
    expect(wrapper.classes()).toContain('justify-content-start')
    await wrapper.setProps({align: undefined})
    expect(wrapper.classes()).not.toContain('justify-content-start')
  })
})
