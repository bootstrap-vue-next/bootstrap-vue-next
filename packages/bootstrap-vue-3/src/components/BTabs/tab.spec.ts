import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTab from './BTab.vue'
// This exists, ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {injectionKey} from './BTabs.vue'

describe('tab', () => {
  enableAutoUnmount(afterEach)

  it('tag is default div', () => {
    const wrapper = mount(BTab)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BTab, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('id is prop id', () => {
    const wrapper = mount(BTab, {
      props: {id: 'foobar'},
    })
    expect(wrapper.attributes('id')).toBe('foobar')
  })

  it('has static class tab-pane', () => {
    const wrapper = mount(BTab)
    expect(wrapper.classes()).toContain('tab-pane')
  })

  it('has static role tabpanel', () => {
    const wrapper = mount(BTab)
    expect(wrapper.attributes('role')).toBe('tabpanel')
  })

  it('has static aria-abelledby profile-tab', () => {
    const wrapper = mount(BTab)
    expect(wrapper.attributes('aria-labelledby')).toBe('profile-tab')
  })

  it('has class active when prop active', async () => {
    const wrapper = mount(BTab, {
      props: {active: true},
    })
    expect(wrapper.classes()).toContain('active')
    await wrapper.setProps({active: false})
    expect(wrapper.classes()).not.toContain('active')
  })

  it('has class show when prop active', async () => {
    const wrapper = mount(BTab, {
      props: {active: true},
    })
    expect(wrapper.classes()).toContain('show')
    await wrapper.setProps({active: false})
    expect(wrapper.classes()).not.toContain('show')
  })

  it('has class card-body when parentData card and prop noBody false', () => {
    const wrapper = mount(BTab, {
      props: {noBody: false},
      global: {provide: {[injectionKey as unknown as symbol]: {card: true}}},
    })
    expect(wrapper.classes()).toContain('card-body')
  })

  it('does not have class card-body when parentData card but prop noBody true', () => {
    const wrapper = mount(BTab, {
      props: {noBody: true},
      global: {provide: {[injectionKey as unknown as symbol]: {card: true}}},
    })
    expect(wrapper.classes()).not.toContain('card-body')
  })

  it('does not have class card-body when parentData card false and prop noBody false', () => {
    const wrapper = mount(BTab, {
      props: {noBody: false},
      global: {provide: {[injectionKey as unknown as symbol]: {card: false}}},
    })
    expect(wrapper.classes()).not.toContain('card-body')
  })

  it('does not have class card-body when parentData card false and prop noBody true', () => {
    const wrapper = mount(BTab, {
      props: {noBody: true},
      global: {provide: {[injectionKey as unknown as symbol]: {card: false}}},
    })
    expect(wrapper.classes()).not.toContain('card-body')
  })

  it('renders default slot', () => {
    const wrapper = mount(BTab, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('does not render default slot if lazy true', () => {
    const wrapper = mount(BTab, {
      props: {lazy: true},
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('')
  })

  it('does not render default slot if parentData lazy true', () => {
    const wrapper = mount(BTab, {
      global: {provide: {[injectionKey as unknown as symbol]: {lazy: true}}},
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('')
  })

  it('does not render default slot parentData lazy and prop lazy true', () => {
    const wrapper = mount(BTab, {
      global: {provide: {[injectionKey as unknown as symbol]: {lazy: true}}},
      props: {lazy: true},
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('')
  })

  it('does not render default slot parentData lazy false and prop lazy true', () => {
    const wrapper = mount(BTab, {
      global: {provide: {[injectionKey as unknown as symbol]: {lazy: false}}},
      props: {lazy: true},
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('')
  })

  it('does not render default slot parentData lazy and prop lazy false', () => {
    const wrapper = mount(BTab, {
      global: {provide: {[injectionKey as unknown as symbol]: {lazy: true}}},
      props: {lazy: false},
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('')
  })

  it('renders slot if prop active', () => {
    const wrapper = mount(BTab, {
      props: {active: true},
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('does not render slot if not prop active but prop lazy true', () => {
    const wrapper = mount(BTab, {
      props: {active: false, lazy: true},
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('')
  })

  it('does not render slot if prop active but not prop disabled and prop lazy true', () => {
    const wrapper = mount(BTab, {
      props: {active: false, disabled: true, lazy: true},
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('')
  })

  it('does not render slot if prop active but not prop disabled and parentData lazy true', () => {
    const wrapper = mount(BTab, {
      props: {active: false, disabled: true},
      global: {provide: {[injectionKey as unknown as symbol]: {lazy: true}}},
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('')
  })

  it('renders if prop active and not prop boolean, but has lazyOnce true', () => {
    const wrapper = mount(BTab, {
      props: {active: true, disabled: false, lazyOnce: true, lazy: true},
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })
})
