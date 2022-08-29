import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BNav from './BNav.vue'

describe('nav', () => {
  enableAutoUnmount(afterEach)

  it('contains static class nav', () => {
    const wrapper = mount(BNav)
    expect(wrapper.classes()).toContain('nav')
  })

  it('renders default slot', () => {
    const wrapper = mount(BNav, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('is tag ul by default', () => {
    const wrapper = mount(BNav)
    expect(wrapper.element.tagName).toBe('UL')
  })

  it('changes tag when prop tag is set', () => {
    const wrapper = mount(BNav, {
      props: {tag: 'div'},
    })
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has class nav-tabs when prop tabs is set', async () => {
    const wrapper = mount(BNav, {
      props: {tabs: true},
    })
    expect(wrapper.classes()).toContain('nav-tabs')
    await wrapper.setProps({tabs: false})
    expect(wrapper.classes()).not.toContain('nav-tabs')
  })

  it('has class nav-pills when prop tabs is set', async () => {
    const wrapper = mount(BNav, {
      props: {pills: true},
    })
    expect(wrapper.classes()).toContain('nav-pills')
    await wrapper.setProps({pills: false})
    expect(wrapper.classes()).not.toContain('nav-pills')
  })

  it('does not have class nav-pills when prop pills is set, but prop tabs is true', async () => {
    const wrapper = mount(BNav, {
      props: {tabs: false, pills: true},
    })
    expect(wrapper.classes()).toContain('nav-pills')
    await wrapper.setProps({tabs: true})
    expect(wrapper.classes()).not.toContain('nav-pills')
  })

  it('has class card-header-tabs when prop tabs is set and cardHeader is set', () => {
    const wrapper = mount(BNav, {
      props: {tabs: true, cardHeader: true},
    })
    expect(wrapper.classes()).toContain('card-header-tabs')
  })

  it('does not have class card-header-tabs when prop tabs is set and cardHeader is set, but prop vertical is set', async () => {
    const wrapper = mount(BNav, {
      props: {tabs: true, cardHeader: true, vertical: false},
    })
    expect(wrapper.classes()).toContain('card-header-tabs')
    await wrapper.setProps({vertical: true})
    expect(wrapper.classes()).not.toContain('card-header-tabs')
  })

  it('has class card-header-pills when prop pills is set and cardHeader is set', () => {
    const wrapper = mount(BNav, {
      props: {pills: true, cardHeader: true},
    })
    expect(wrapper.classes()).toContain('card-header-pills')
  })

  it('does not have class card-header-pills when prop pills is set and cardHeader is set, but prop vertical is set', async () => {
    const wrapper = mount(BNav, {
      props: {pills: true, cardHeader: true, vertical: false},
    })
    expect(wrapper.classes()).toContain('card-header-pills')
    await wrapper.setProps({vertical: true})
    expect(wrapper.classes()).not.toContain('card-header-pills')
  })

  it('does not have class card-header-pills when prop pills is set and cardHeader is set, but prop tabs is set', async () => {
    const wrapper = mount(BNav, {
      props: {pills: true, cardHeader: true, tabs: false},
    })
    expect(wrapper.classes()).toContain('card-header-pills')
    await wrapper.setProps({tabs: true})
    expect(wrapper.classes()).not.toContain('card-header-pills')
  })

  it('has class flex-column when prop vertical is set', async () => {
    const wrapper = mount(BNav, {
      props: {vertical: true},
    })
    expect(wrapper.classes()).toContain('flex-column')
    await wrapper.setProps({vertical: false})
    expect(wrapper.classes()).not.toContain('flex-column')
  })

  it('has class nav-fill when prop fill is set', async () => {
    const wrapper = mount(BNav, {
      props: {fill: true},
    })
    expect(wrapper.classes()).toContain('nav-fill')
    await wrapper.setProps({fill: false})
    expect(wrapper.classes()).not.toContain('nav-fill')
  })

  it('does not have nav-fill when prop fill is set, but prop vertical is also set', async () => {
    const wrapper = mount(BNav, {
      props: {fill: true, vertical: false},
    })
    expect(wrapper.classes()).toContain('nav-fill')
    await wrapper.setProps({vertical: true})
    expect(wrapper.classes()).not.toContain('nav-fill')
  })

  it('has class nav-justified when prop justified is set', async () => {
    const wrapper = mount(BNav, {
      props: {justified: true},
    })
    expect(wrapper.classes()).toContain('nav-justified')
    await wrapper.setProps({justified: false})
    expect(wrapper.classes()).not.toContain('nav-justified')
  })

  it('does not have nav-justified when prop justified is set, but prop vertical is also set', async () => {
    const wrapper = mount(BNav, {
      props: {justified: true, vertical: false},
    })
    expect(wrapper.classes()).toContain('nav-justified')
    await wrapper.setProps({vertical: true})
    expect(wrapper.classes()).not.toContain('nav-justified')
  })

  it('has class justify-content-{type} when prop align is set', async () => {
    const wrapper = mount(BNav, {
      props: {align: 'start'},
    })
    expect(wrapper.classes()).toContain('justify-content-start')
    await wrapper.setProps({align: undefined})
    expect(wrapper.classes()).not.toContain('justify-content-start')
  })

  it('does not have justify-content-{type} when prop align is set, but prop vertical is also set', async () => {
    const wrapper = mount(BNav, {
      props: {align: 'start', vertical: false},
    })
    expect(wrapper.classes()).toContain('justify-content-start')
    await wrapper.setProps({vertical: true})
    expect(wrapper.classes()).not.toContain('justify-content-start')
  })

  it('has class small when prop small is set', async () => {
    const wrapper = mount(BNav, {
      props: {small: true},
    })
    expect(wrapper.classes()).toContain('small')
    await wrapper.setProps({small: false})
    expect(wrapper.classes()).not.toContain('small')
  })
})
