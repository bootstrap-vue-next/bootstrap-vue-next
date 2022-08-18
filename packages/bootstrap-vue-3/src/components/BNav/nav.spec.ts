import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BNav from './BNav.vue'

describe('nav', () => {
  it('contains static class nav', () => {
    const wrapper = mount(BNav)
    expect(wrapper.classes()).toContain('nav')

    wrapper.unmount()
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

    wrapper.unmount()
  })

  it('changes tag when prop tag is set', () => {
    const wrapper = mount(BNav, {
      props: {tag: 'div'},
    })
    expect(wrapper.element.tagName).toBe('DIV')

    wrapper.unmount()
  })

  it('has class nav-tabs when prop tabs is set', async () => {
    const wrapper = mount(BNav, {
      props: {tabs: true},
    })
    expect(wrapper.classes()).toContain('nav-tabs')
    await wrapper.setProps({tabs: false})
    expect(wrapper.classes()).not.toContain('nav-tabs')

    wrapper.unmount()
  })

  it('has class nav-pills when prop tabs is set', async () => {
    const wrapper = mount(BNav, {
      props: {pills: true},
    })
    expect(wrapper.classes()).toContain('nav-pills')
    await wrapper.setProps({pills: false})
    expect(wrapper.classes()).not.toContain('nav-pills')

    wrapper.unmount()
  })

  it('does not have class nav-pills when prop pills is set, but prop tabs is true', async () => {
    const wrapper = mount(BNav, {
      props: {tabs: false, pills: true},
    })
    expect(wrapper.classes()).toContain('nav-pills')
    await wrapper.setProps({tabs: true})
    expect(wrapper.classes()).not.toContain('nav-pills')

    wrapper.unmount()
  })

  it('has class card-header-tabs when prop tabs is set and cardHeader is set', () => {
    const wrapper = mount(BNav, {
      props: {tabs: true, cardHeader: true},
    })
    expect(wrapper.classes()).toContain('card-header-tabs')

    wrapper.unmount()
  })

  it('does not have class card-header-tabs when prop tabs is set and cardHeader is set, but prop vertical is set', async () => {
    const wrapper = mount(BNav, {
      props: {tabs: true, cardHeader: true, vertical: false},
    })
    expect(wrapper.classes()).toContain('card-header-tabs')
    await wrapper.setProps({vertical: true})
    expect(wrapper.classes()).not.toContain('card-header-tabs')

    wrapper.unmount()
  })

  it('has class card-header-pills when prop pills is set and cardHeader is set', () => {
    const wrapper = mount(BNav, {
      props: {pills: true, cardHeader: true},
    })
    expect(wrapper.classes()).toContain('card-header-pills')

    wrapper.unmount()
  })

  it('does not have class card-header-pills when prop pills is set and cardHeader is set, but prop vertical is set', async () => {
    const wrapper = mount(BNav, {
      props: {pills: true, cardHeader: true, vertical: false},
    })
    expect(wrapper.classes()).toContain('card-header-pills')
    await wrapper.setProps({vertical: true})
    expect(wrapper.classes()).not.toContain('card-header-pills')

    wrapper.unmount()
  })

  it('does not have class card-header-pills when prop pills is set and cardHeader is set, but prop tabs is set', async () => {
    const wrapper = mount(BNav, {
      props: {pills: true, cardHeader: true, tabs: false},
    })
    expect(wrapper.classes()).toContain('card-header-pills')
    await wrapper.setProps({tabs: true})
    expect(wrapper.classes()).not.toContain('card-header-pills')

    wrapper.unmount()
  })

  it('has class flex-column when prop vertical is set', async () => {
    const wrapper = mount(BNav, {
      props: {vertical: true},
    })
    expect(wrapper.classes()).toContain('flex-column')
    await wrapper.setProps({vertical: false})
    expect(wrapper.classes()).not.toContain('flex-column')

    wrapper.unmount()
  })

  it('has class nav-fill when prop fill is set', async () => {
    const wrapper = mount(BNav, {
      props: {fill: true},
    })
    expect(wrapper.classes()).toContain('nav-fill')
    await wrapper.setProps({fill: false})
    expect(wrapper.classes()).not.toContain('nav-fill')

    wrapper.unmount()
  })

  it('does not have nav-fill when prop fill is set, but prop vertical is also set', async () => {
    const wrapper = mount(BNav, {
      props: {fill: true, vertical: false},
    })
    expect(wrapper.classes()).toContain('nav-fill')
    await wrapper.setProps({vertical: true})
    expect(wrapper.classes()).not.toContain('nav-fill')

    wrapper.unmount()
  })

  it('has class nav-justified when prop justified is set', async () => {
    const wrapper = mount(BNav, {
      props: {justified: true},
    })
    expect(wrapper.classes()).toContain('nav-justified')
    await wrapper.setProps({justified: false})
    expect(wrapper.classes()).not.toContain('nav-justified')

    wrapper.unmount()
  })

  it('does not have nav-justified when prop justified is set, but prop vertical is also set', async () => {
    const wrapper = mount(BNav, {
      props: {justified: true, vertical: false},
    })
    expect(wrapper.classes()).toContain('nav-justified')
    await wrapper.setProps({vertical: true})
    expect(wrapper.classes()).not.toContain('nav-justified')

    wrapper.unmount()
  })

  it('has class justify-content-{type} when prop align is set', async () => {
    const wrapper = mount(BNav, {
      props: {align: 'a'},
    })
    expect(wrapper.classes()).toContain('justify-content-a')
    await wrapper.setProps({align: undefined})
    expect(wrapper.classes()).not.toContain('justify-content-a')

    wrapper.unmount()
  })

  it('does not have justify-content-{type} when prop align is set, but prop vertical is also set', async () => {
    const wrapper = mount(BNav, {
      props: {align: 'a', vertical: false},
    })
    expect(wrapper.classes()).toContain('justify-content-a')
    await wrapper.setProps({vertical: true})
    expect(wrapper.classes()).not.toContain('justify-content-a')

    wrapper.unmount()
  })

  it('has class small when prop small is set', async () => {
    const wrapper = mount(BNav, {
      props: {small: true},
    })
    expect(wrapper.classes()).toContain('small')
    await wrapper.setProps({small: false})
    expect(wrapper.classes()).not.toContain('small')

    wrapper.unmount()
  })
})
