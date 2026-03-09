import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BBreadcrumb from './BBreadcrumb.vue'
import BBreadcrumbItem from './BBreadcrumbItem.vue'
import type {BreadcrumbItemRaw} from '../../types'
import {createBootstrap} from '../../plugins'

describe('breadcrumb', () => {
  enableAutoUnmount(afterEach)

  it('contains aria-label breadcrumb', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {
        plugins: [createBootstrap()],
      },
    })
    expect(wrapper.attributes('aria-label')).toBe('breadcrumb')
  })

  it('tag is nav', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {
        plugins: [createBootstrap()],
      },
    })
    expect(wrapper.element.tagName).toBe('NAV')
  })

  it('child tag is ol', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {
        plugins: [createBootstrap()],
      },
    })
    // It should be noted, this doesn't determine if it's a child,
    // Rather, only that it is deeply nested inside the component
    const $ol = wrapper.find('ol')
    expect($ol.exists()).toBe(true)
  })

  it('ol child has static class breadcrumb', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {
        plugins: [createBootstrap()],
      },
    })
    // It should be noted, this doesn't determine if it's a child,
    // Rather, only that it is deeply nested inside the component
    const $ol = wrapper.get('ol')
    expect($ol.classes()).toContain('breadcrumb')
  })

  it('ol child has olClass when prop is provided', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {olClass: 'foobar'},
      global: {
        plugins: [createBootstrap()],
      },
    })
    const $ol = wrapper.get('ol')
    expect($ol.classes()).toContain('breadcrumb')
    expect($ol.classes()).toContain('foobar')
  })

  it('ol child has olAttrs when prop is provided', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {olAttrs: {'data-foo': 'bar'}},
      global: {
        plugins: [createBootstrap()],
      },
    })
    const $ol = wrapper.get('ol')
    expect($ol.attributes('data-foo')).toBe('bar')
  })

  it('renders default slot', () => {
    const wrapper = mount(BBreadcrumb, {
      slots: {default: 'foobar'},
      global: {
        plugins: [createBootstrap()],
      },
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders prepend slot', () => {
    const wrapper = mount(BBreadcrumb, {
      slots: {prepend: 'foobar'},
      global: {
        plugins: [createBootstrap()],
      },
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders append slot', () => {
    const wrapper = mount(BBreadcrumb, {
      slots: {append: 'foobar'},
      global: {
        plugins: [createBootstrap()],
      },
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders all slots in correct order', () => {
    const wrapper = mount(BBreadcrumb, {
      slots: {prepend: 'prepend', default: 'default', append: 'append'},
      global: {
        plugins: [createBootstrap()],
      },
    })
    expect(wrapper.text()).toBe('prependdefaultappend')
  })

  it('has breadcrumbitem', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {items: [{text: 'foo'}] as readonly BreadcrumbItemRaw[]},
      global: {
        plugins: [createBootstrap()],
      },
    })
    const $bbreadcrumbitem = wrapper.findComponent(BBreadcrumbItem)
    expect($bbreadcrumbitem.exists()).toBe(true)
  })

  it('renders bbreadcrumbitem before default slot and after prepend slot', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {items: [{text: 'foo'}] as readonly BreadcrumbItemRaw[]},
      slots: {default: 'default', prepend: 'prepend'},
      global: {
        plugins: [createBootstrap()],
      },
    })
    expect(wrapper.text()).toBe('prependfoodefault')
  })

  it('bbreadcrumbitem exists when items array item is object', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {
        items: [
          {text: 'foo', active: true, disabled: true, href: 'href', to: 'to'},
        ] as readonly BreadcrumbItemRaw[],
      },
      slots: {default: 'default', prepend: 'prepend'},
      global: {
        plugins: [createBootstrap()],
      },
    })
    const $bbreadcrumbitem = wrapper.findComponent(BBreadcrumbItem)
    expect($bbreadcrumbitem.exists()).toBe(true)
  })

  it('bbreadcrumbitem contains items as props', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {
        items: [
          {text: 'foo', active: true, disabled: true, href: 'href', to: 'to'},
        ] as readonly BreadcrumbItemRaw[],
      },
      slots: {default: 'default', prepend: 'prepend'},
      global: {
        plugins: [createBootstrap()],
      },
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
      props: {items: ['foobar']},
      global: {
        plugins: [createBootstrap()],
      },
    })
    const $bbreadcrumbitem = wrapper.findComponent(BBreadcrumbItem)
    expect($bbreadcrumbitem.exists()).toBe(true)
  })

  it('breadcrumbitem has prop text to be string when prop items array item is string', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {items: ['foobar']},
      global: {
        plugins: [createBootstrap()],
      },
    })
    const $bbreadcrumbitem = wrapper.getComponent(BBreadcrumbItem)
    expect($bbreadcrumbitem.props('text')).toBe('foobar')
  })

  it('breadcrumbitem components have prop href to be # when their index is less than items length', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {items: ['foo', 'bar']},
      global: {
        plugins: [createBootstrap()],
      },
    })
    const [$bbreadcrumbitem] = wrapper.findAllComponents(BBreadcrumbItem)
    expect($bbreadcrumbitem.props('href')).toBe('#')
  })

  it('breadcrumbitem components dont have prop href to be # when their index is items length', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {items: ['foo', 'bar']},
      global: {
        plugins: [createBootstrap()],
      },
    })
    const [, $bbreadcrumbitem] = wrapper.findAllComponents(BBreadcrumbItem)
    expect($bbreadcrumbitem.props('href')).toBeUndefined()
  })

  it('nav has id attribute when id prop is provided', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {id: 'my-breadcrumb'},
      global: {
        plugins: [createBootstrap()],
      },
    })
    expect(wrapper.attributes('id')).toBe('my-breadcrumb')
  })

  it('nav does not have id attribute when id prop is not provided', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {
        plugins: [createBootstrap()],
      },
    })
    expect(wrapper.attributes('id')).toBeUndefined()
  })

  it('renders no BBreadcrumbItem when items is empty array', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {items: []},
      global: {
        plugins: [createBootstrap()],
      },
    })
    const items = wrapper.findAllComponents(BBreadcrumbItem)
    expect(items).toHaveLength(0)
  })

  it('renders no BBreadcrumbItem when items is not provided', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {
        plugins: [createBootstrap()],
      },
    })
    const items = wrapper.findAllComponents(BBreadcrumbItem)
    expect(items).toHaveLength(0)
  })

  it('renders correct number of BBreadcrumbItem for multiple object items', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {
        items: [
          {text: 'Home', href: '/'},
          {text: 'Library', href: '/library'},
          {text: 'Data'},
        ] as readonly BreadcrumbItemRaw[],
      },
      global: {
        plugins: [createBootstrap()],
      },
    })
    const items = wrapper.findAllComponents(BBreadcrumbItem)
    expect(items).toHaveLength(3)
  })

  it('renders correct number of BBreadcrumbItem for multiple string items', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {items: ['Home', 'Library', 'Data']},
      global: {
        plugins: [createBootstrap()],
      },
    })
    const items = wrapper.findAllComponents(BBreadcrumbItem)
    expect(items).toHaveLength(3)
  })

  it('auto-sets active on last item when no active explicitly defined for object items', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {
        items: [{text: 'Home', href: '/'}, {text: 'Library'}] as readonly BreadcrumbItemRaw[],
      },
      global: {
        plugins: [createBootstrap()],
      },
    })
    const items = wrapper.findAllComponents(BBreadcrumbItem)
    expect(items[0].props('active')).toBe(false)
    expect(items[1].props('active')).toBe(true)
  })

  it('auto-sets active on last item for string items', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {items: ['Home', 'Library']},
      global: {
        plugins: [createBootstrap()],
      },
    })
    const items = wrapper.findAllComponents(BBreadcrumbItem)
    expect(items[0].props('active')).toBe(false)
    expect(items[1].props('active')).toBe(true)
  })

  it('does not auto-set active on later items when an earlier item has active true', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {
        items: [
          {text: 'Home', active: true},
          {text: 'Library'},
          {text: 'Data'},
        ] as readonly BreadcrumbItemRaw[],
      },
      global: {
        plugins: [createBootstrap()],
      },
    })
    const items = wrapper.findAllComponents(BBreadcrumbItem)
    expect(items[0].props('active')).toBe(true)
    expect(items[1].props('active')).toBe(false)
    expect(items[2].props('active')).toBe(false)
  })

  it('renders text content for object items', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {
        items: [{text: 'Home'}, {text: 'Library'}] as readonly BreadcrumbItemRaw[],
      },
      global: {
        plugins: [createBootstrap()],
      },
    })
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('Library')
  })

  it('renders text content for string items', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {items: ['Home', 'Library']},
      global: {
        plugins: [createBootstrap()],
      },
    })
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('Library')
  })

  it('passes disabled prop to BBreadcrumbItem', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {
        items: [{text: 'Home', disabled: true}] as readonly BreadcrumbItemRaw[],
      },
      global: {
        plugins: [createBootstrap()],
      },
    })
    const $bbreadcrumbitem = wrapper.getComponent(BBreadcrumbItem)
    expect($bbreadcrumbitem.props('disabled')).toBe(true)
  })

  it('passes to prop to BBreadcrumbItem', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {
        items: [{text: 'Home', to: '/home'}] as readonly BreadcrumbItemRaw[],
      },
      global: {
        plugins: [createBootstrap()],
      },
    })
    const $bbreadcrumbitem = wrapper.getComponent(BBreadcrumbItem)
    expect($bbreadcrumbitem.props('to')).toBe('/home')
  })

  it('ol only has breadcrumb class when olClass is not provided', () => {
    const wrapper = mount(BBreadcrumb, {
      global: {
        plugins: [createBootstrap()],
      },
    })
    const $ol = wrapper.get('ol')
    expect($ol.classes()).toEqual(['breadcrumb'])
  })

  it('string items not at last position have href # and last item does not', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {items: ['Home', 'Library', 'Data']},
      global: {
        plugins: [createBootstrap()],
      },
    })
    const items = wrapper.findAllComponents(BBreadcrumbItem)
    expect(items[0].props('href')).toBe('#')
    expect(items[1].props('href')).toBe('#')
    expect(items[2].props('href')).toBeUndefined()
  })

  it('single string item has active true and no href', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {items: ['Home']},
      global: {
        plugins: [createBootstrap()],
      },
    })
    const $bbreadcrumbitem = wrapper.getComponent(BBreadcrumbItem)
    expect($bbreadcrumbitem.props('active')).toBe(true)
    expect($bbreadcrumbitem.props('href')).toBeUndefined()
  })

  it('single object item without active set gets active true', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {
        items: [{text: 'Home'}] as readonly BreadcrumbItemRaw[],
      },
      global: {
        plugins: [createBootstrap()],
      },
    })
    const $bbreadcrumbitem = wrapper.getComponent(BBreadcrumbItem)
    expect($bbreadcrumbitem.props('active')).toBe(true)
  })

  it('object item with explicit active false in middle position is not overridden', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {
        items: [
          {text: 'Home', active: false},
          {text: 'Library'},
        ] as readonly BreadcrumbItemRaw[],
      },
      global: {
        plugins: [createBootstrap()],
      },
    })
    const items = wrapper.findAllComponents(BBreadcrumbItem)
    expect(items[0].props('active')).toBe(false)
    expect(items[1].props('active')).toBe(true)
  })

  it('renders items with append slot in correct order', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {items: [{text: 'foo'}] as readonly BreadcrumbItemRaw[]},
      slots: {append: 'append'},
      global: {
        plugins: [createBootstrap()],
      },
    })
    expect(wrapper.text()).toBe('fooappend')
  })

  it('renders items with all slots in correct order', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {items: [{text: 'item'}] as readonly BreadcrumbItemRaw[]},
      slots: {prepend: 'prepend', default: 'default', append: 'append'},
      global: {
        plugins: [createBootstrap()],
      },
    })
    expect(wrapper.text()).toBe('prependitemdefaultappend')
  })

  it('object items with href preserve original href', () => {
    const wrapper = mount(BBreadcrumb, {
      props: {
        items: [
          {text: 'Home', href: '/home'},
          {text: 'Library', href: '/library'},
          {text: 'Data'},
        ] as readonly BreadcrumbItemRaw[],
      },
      global: {
        plugins: [createBootstrap()],
      },
    })
    const items = wrapper.findAllComponents(BBreadcrumbItem)
    expect(items[0].props('href')).toBe('/home')
    expect(items[1].props('href')).toBe('/library')
    expect(items[2].props('href')).toBeUndefined()
  })
})
