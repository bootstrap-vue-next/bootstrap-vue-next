import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BBreadcrumb from './BBreadcrumb.vue'
import BBreadcrumbItem from './BBreadcrumbItem.vue'
import type {BreadcrumbItem} from '../../types'
import {BREADCRUMB_SYMBOL} from '../../composables/useBreadcrumb'

describe('breadcrumb', () => {
  enableAutoUnmount(afterEach)

  it('contains aria-label breadcrumb', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {provide: {[BREADCRUMB_SYMBOL as unknown as symbol]: {}}},
    })
    expect(wrapper.attributes('aria-label')).toBe('breadcrumb')
  })

  it('tag is nav', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {provide: {[BREADCRUMB_SYMBOL as unknown as symbol]: {}}},
    })
    expect(wrapper.element.tagName).toBe('NAV')
  })

  it('child tag is ol', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {provide: {[BREADCRUMB_SYMBOL as unknown as symbol]: {}}},
    })
    // It should be noted, this doesn't determine if it's a child,
    // Rather, only that it is deeply nested inside the component
    const $ol = wrapper.find('ol')
    expect($ol.exists()).toBe(true)
  })

  it('ol child has static class breadcrumb', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {provide: {[BREADCRUMB_SYMBOL as unknown as symbol]: {}}},
    })
    // It should be noted, this doesn't determine if it's a child,
    // Rather, only that it is deeply nested inside the component
    const $ol = wrapper.get('ol')
    expect($ol.classes()).toContain('breadcrumb')
  })

  it('renders default slot', () => {
    const wrapper = mount(BBreadcrumb, {
      slots: {default: 'foobar'},
      global: {provide: {[BREADCRUMB_SYMBOL as unknown as symbol]: {}}},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders prepend slot', () => {
    const wrapper = mount(BBreadcrumb, {
      slots: {prepend: 'foobar'},
      global: {provide: {[BREADCRUMB_SYMBOL as unknown as symbol]: {}}},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders append slot', () => {
    const wrapper = mount(BBreadcrumb, {
      slots: {append: 'foobar'},
      global: {provide: {[BREADCRUMB_SYMBOL as unknown as symbol]: {}}},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders all slots in correct order', () => {
    const wrapper = mount(BBreadcrumb, {
      slots: {prepend: 'prepend', default: 'default', append: 'append'},
      global: {provide: {[BREADCRUMB_SYMBOL as unknown as symbol]: {}}},
    })
    expect(wrapper.text()).toBe('prependdefaultappend')
  })

  it('has breadcrumbitem', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {provide: {[BREADCRUMB_SYMBOL as unknown as symbol]: {}}},
      props: {items: [{text: 'foo'}] as Array<BreadcrumbItem>},
    })
    const $bbreadcrumbitem = wrapper.findComponent(BBreadcrumbItem)
    expect($bbreadcrumbitem.exists()).toBe(true)
  })

  it('renders bbreadcrumbitem before default slot and after prepend slot', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {provide: {[BREADCRUMB_SYMBOL as unknown as symbol]: {}}},
      props: {items: [{text: 'foo'}] as Array<BreadcrumbItem>},
      slots: {default: 'default', prepend: 'prepend'},
    })
    expect(wrapper.text()).toBe('prependfoodefault')
  })

  it('bbreadcrumbitem exists when items array item is object', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {provide: {[BREADCRUMB_SYMBOL as unknown as symbol]: {}}},
      props: {
        items: [
          {text: 'foo', active: true, disabled: true, href: 'href', to: 'to'},
        ] as Array<BreadcrumbItem>,
      },
      slots: {default: 'default', prepend: 'prepend'},
    })
    const $bbreadcrumbitem = wrapper.findComponent(BBreadcrumbItem)
    expect($bbreadcrumbitem.exists()).toBe(true)
  })

  it('bbreadcrumbitem contains items as props', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {provide: {[BREADCRUMB_SYMBOL as unknown as symbol]: {}}},
      props: {
        items: [
          {text: 'foo', active: true, disabled: true, href: 'href', to: 'to'},
        ] as Array<BreadcrumbItem>,
      },
      slots: {default: 'default', prepend: 'prepend'},
    })
    const $bbreadcrumbitem = wrapper.getComponent(BBreadcrumbItem)
    expect($bbreadcrumbitem.props('text')).toBe('foo')
    expect($bbreadcrumbitem.props('active')).toBe(true)
    expect($bbreadcrumbitem.props('disabled')).toBe(true)
    expect($bbreadcrumbitem.props('href')).toBe('href')
    expect($bbreadcrumbitem.props('to')).toBe('to')
  })

  it('breadcrumbitem exists when items array item is string', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {provide: {[BREADCRUMB_SYMBOL as unknown as symbol]: {}}},
      props: {items: ['foobar']},
    })
    const $bbreadcrumbitem = wrapper.findComponent(BBreadcrumbItem)
    expect($bbreadcrumbitem.exists()).toBe(true)
  })

  it('breadcrumbitem has prop text to be string when prop items array item is string', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {provide: {[BREADCRUMB_SYMBOL as unknown as symbol]: {}}},
      props: {items: ['foobar']},
    })
    const $bbreadcrumbitem = wrapper.getComponent(BBreadcrumbItem)
    expect($bbreadcrumbitem.props('text')).toBe('foobar')
  })

  it('breadcrumbitem components have prop href to be # when their index is less than items length', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {provide: {[BREADCRUMB_SYMBOL as unknown as symbol]: {}}},
      props: {items: ['foo', 'bar']},
    })
    const [$bbreadcrumbitem] = wrapper.findAllComponents(BBreadcrumbItem)
    expect($bbreadcrumbitem.props('href')).toBe('#')
  })

  it('breadcrumbitem components dont have prop href to be # when their index is items length', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {provide: {[BREADCRUMB_SYMBOL as unknown as symbol]: {}}},
      props: {items: ['foo', 'bar']},
    })
    const [, $bbreadcrumbitem] = wrapper.findAllComponents(BBreadcrumbItem)
    expect($bbreadcrumbitem.props('href')).toBeUndefined()
  })
})
