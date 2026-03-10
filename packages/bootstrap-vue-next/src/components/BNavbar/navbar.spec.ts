import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {defineComponent, h, inject, ref} from 'vue'
import BNavbar from './BNavbar.vue'
import {navbarInjectionKey} from '../../utils/keys'

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

  it('tag is changed when tag prop is set', async () => {
    const wrapper = mount(BNavbar, {
      props: {tag: 'div'},
    })
    expect(wrapper.element.tagName).toBe('DIV')
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

  it('has navbar-expand-{breakpoint} class for each breakpoint', async () => {
    const wrapper = mount(BNavbar, {props: {toggleable: 'sm'}})
    expect(wrapper.classes()).toContain('navbar-expand-sm')
    await wrapper.setProps({toggleable: 'md'})
    expect(wrapper.classes()).toContain('navbar-expand-md')
    await wrapper.setProps({toggleable: 'lg'})
    expect(wrapper.classes()).toContain('navbar-expand-lg')
    await wrapper.setProps({toggleable: 'xl'})
    expect(wrapper.classes()).toContain('navbar-expand-xl')
    await wrapper.setProps({toggleable: 'xxl'})
    expect(wrapper.classes()).toContain('navbar-expand-xxl')
  })

  it('contains role navigation when is not tag nav', () => {
    const wrapper = mount(BNavbar, {
      props: {
        tag: 'div',
      },
    })
    expect(wrapper.attributes('role')).toBe('navigation')
  })

  it('does not contain role attribute when tag is nav', () => {
    const wrapper = mount(BNavbar, {
      props: {tag: 'nav'},
    })
    expect(wrapper.attributes('role')).toBeUndefined()
  })

  it('contains class d-print when prop print', async () => {
    const wrapper = mount(BNavbar, {
      props: {print: true},
    })
    expect(wrapper.classes()).toContain('d-print')
    await wrapper.setProps({print: false})
    expect(wrapper.classes()).not.toContain('d-print')
  })

  it('contains class sticky when prop sticky is set', async () => {
    const wrapper = mount(BNavbar, {
      props: {sticky: 'top'},
    })
    expect(wrapper.classes()).toContain('sticky-top')
    await wrapper.setProps({sticky: 'bottom'})
    expect(wrapper.classes()).toContain('sticky-bottom')
    expect(wrapper.classes()).not.toContain('sticky-top')
    await wrapper.setProps({sticky: undefined})
    expect(wrapper.classes()).not.toContain('sticky-bottom')
  })

  it('contains class bg when prop variant is set', async () => {
    const wrapper = mount(BNavbar, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('bg-primary')
    await wrapper.setProps({variant: 'danger'})
    expect(wrapper.classes()).toContain('bg-danger')
    expect(wrapper.classes()).not.toContain('bg-primary')
    await wrapper.setProps({variant: undefined})
    expect(wrapper.classes()).not.toContain('bg-danger')
  })

  it('contains class fixed when prop fixed is set', async () => {
    const wrapper = mount(BNavbar, {
      props: {fixed: 'top'},
    })
    expect(wrapper.classes()).toContain('fixed-top')
    await wrapper.setProps({fixed: 'bottom'})
    expect(wrapper.classes()).toContain('fixed-bottom')
    expect(wrapper.classes()).not.toContain('fixed-top')
    await wrapper.setProps({fixed: undefined})
    expect(wrapper.classes()).not.toContain('fixed-bottom')
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

  it('contains container-{breakpoint} class when container prop is a breakpoint', async () => {
    const wrapper = mount(BNavbar, {props: {container: 'sm'}})
    expect(wrapper.get('div').classes()).toContain('container-sm')
    await wrapper.setProps({container: 'md'})
    expect(wrapper.get('div').classes()).toContain('container-md')
    await wrapper.setProps({container: 'lg'})
    expect(wrapper.get('div').classes()).toContain('container-lg')
    await wrapper.setProps({container: 'xl'})
    expect(wrapper.get('div').classes()).toContain('container-xl')
    await wrapper.setProps({container: 'xxl'})
    expect(wrapper.get('div').classes()).toContain('container-xxl')
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

  it('provides navbarInjectionKey to children', () => {
    const captured: {tag?: unknown; noAutoClose?: unknown} = {}

    const ChildComponent = defineComponent({
      setup() {
        const navbar = inject(navbarInjectionKey, null)
        captured.tag = navbar?.tag?.value
        captured.noAutoClose = navbar?.noAutoClose?.value
        return () => h('span')
      },
    })

    mount(BNavbar, {
      slots: {default: () => h(ChildComponent)},
    })

    expect(captured.tag).toBe('nav')
    expect(captured.noAutoClose).toBe(false)
  })

  it('provides updated tag value via navbarInjectionKey', () => {
    const captured: {tag?: unknown} = {}

    const ChildComponent = defineComponent({
      setup() {
        const navbar = inject(navbarInjectionKey, null)
        captured.tag = navbar?.tag?.value
        return () => h('span')
      },
    })

    mount(BNavbar, {
      props: {tag: 'div'},
      slots: {default: () => h(ChildComponent)},
    })

    expect(captured.tag).toBe('div')
  })

  it('provides noAutoClose true via navbarInjectionKey when prop is set', () => {
    const captured: {noAutoClose?: unknown} = {}

    const ChildComponent = defineComponent({
      setup() {
        const navbar = inject(navbarInjectionKey, null)
        captured.noAutoClose = navbar?.noAutoClose?.value
        return () => h('span')
      },
    })

    mount(BNavbar, {
      props: {noAutoClose: true},
      slots: {default: () => h(ChildComponent)},
    })

    expect(captured.noAutoClose).toBe(true)
  })
})
