import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BNavbar from './BNavbar.vue'

describe('navbar', () => {
  enableAutoUnmount(afterEach)

  it('contains static class navbar', () => {
    const wrapper = mount(BNavbar)
    expect(wrapper.classes()).toContain('navbar')
  })

  it('tag is nav by default', () => {
    const wrapper = mount(BNavbar)
    expect(wrapper.element.tagName).toBe('NAV')
  })

  it('does not contain role attribute on default', () => {
    const wrapper = mount(BNavbar)
    expect(wrapper.attributes('navigation')).toBeUndefined()
  })

  it('has class navbar-expand by default', () => {
    const wrapper = mount(BNavbar)
    expect(wrapper.classes()).toContain('navbar-expand')
  })

  it('has class navbar-expand on prop toggleable changes', async () => {
    const wrapper = mount(BNavbar, {
      props: {
        toggleable: 'sm',
      },
    })
    expect(wrapper.classes()).toContain('navbar-expand-sm')
    await wrapper.setProps({toggleable: false})
    expect(wrapper.classes()).toContain('navbar-expand')
    await wrapper.setProps({toggleable: undefined})
    expect(wrapper.classes()).toContain('navbar-expand')
    await wrapper.setProps({toggleable: true})
    expect(wrapper.classes()).not.toContain('navbar-expand')
  })

  it('contains role navigation when is not tag nav', () => {
    const wrapper = mount(BNavbar, {
      props: {
        tag: 'div',
      },
    })
    expect(wrapper.attributes('role')).toBe('navigation')
  })

  it('contains class d-print when prop print', async () => {
    const wrapper = mount(BNavbar, {
      props: {print: true},
    })
    expect(wrapper.classes()).toContain('d-print')
    await wrapper.setProps({print: false})
    expect(wrapper.classes()).not.toContain('d-print')
  })

  it('contains class navbar-dark when prop dark', async () => {
    const wrapper = mount(BNavbar, {
      props: {dark: true},
    })
    expect(wrapper.classes()).toContain('navbar-dark')
    await wrapper.setProps({dark: false})
    expect(wrapper.classes()).not.toContain('navbar-dark')
  })

  it('contains class sticky when prop sticky is set', async () => {
    const wrapper = mount(BNavbar, {
      props: {sticky: 'top'},
    })
    expect(wrapper.classes()).toContain('sticky-top')
    await wrapper.setProps({sticky: undefined})
    expect(wrapper.classes()).not.toContain('sticky-top')
  })

  it('contains class bg when prop variant is set', async () => {
    const wrapper = mount(BNavbar, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('bg-primary')
    await wrapper.setProps({variant: undefined})
    expect(wrapper.classes()).not.toContain('bg-primary')
  })

  it('contains class fixed when prop fixed is set', async () => {
    const wrapper = mount(BNavbar, {
      props: {fixed: 'top'},
    })
    expect(wrapper.classes()).toContain('fixed-top')
    await wrapper.setProps({fixed: undefined})
    expect(wrapper.classes()).not.toContain('fixed-top')
  })

  it('contains a container-fluid on div child by default', () => {
    const wrapper = mount(BNavbar)
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('container-fluid')
  })

  it('contains a container on div child when container prop is true', () => {
    const wrapper = mount(BNavbar, {
      props: {container: true},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('container')
  })

  it('does not have div child when container prop is false', () => {
    const wrapper = mount(BNavbar, {
      props: {container: false},
    })
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(false)
  })

  it('renders default slot content when container prop is false', () => {
    const wrapper = mount(BNavbar, {
      props: {container: false},
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders default slot content in container child when container prop is Truthy', () => {
    const wrapper = mount(BNavbar, {
      props: {container: true},
      slots: {default: 'foobar'},
    })
    const $div = wrapper.get('div')
    expect($div.text()).toBe('foobar')
  })

  it('renders default slot content in container child', () => {
    const wrapper = mount(BNavbar, {
      slots: {default: 'foobar'},
    })
    const $div = wrapper.get('div')
    expect($div.text()).toBe('foobar')
  })
})
