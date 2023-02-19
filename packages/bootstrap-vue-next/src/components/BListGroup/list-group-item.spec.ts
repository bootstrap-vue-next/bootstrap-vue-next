import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BListGroup from './BListGroup.vue'
import BListGroupItem from './BListGroupItem.vue'
import {listGroupInjectionKey} from '../../utils'

describe('list-group > list-group-item', () => {
  enableAutoUnmount(afterEach)

  it('default should have tag div', () => {
    const wrapper = mount(BListGroupItem, {
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('default should contain only single class of list-group-item', () => {
    const wrapper = mount(BListGroupItem, {
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.classes()).toContain('list-group-item')
  })

  it('default should not have class list-group-item-action', () => {
    const wrapper = mount(BListGroupItem, {
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.classes()).not.toContain('list-group-item-action')
  })

  it('default should not have class active', () => {
    const wrapper = mount(BListGroupItem, {
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.classes()).not.toContain('active')
  })

  it('default should not have class disabled', () => {
    const wrapper = mount(BListGroupItem, {
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.classes()).not.toContain('disabled')
  })

  it('default should not have type attribute', () => {
    const wrapper = mount(BListGroupItem, {
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.attributes('type')).toBeUndefined()
  })

  it('default should not have disabled attribute', () => {
    const wrapper = mount(BListGroupItem, {
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('should have disabled class when disabled=true', () => {
    const wrapper = mount(BListGroupItem, {
      props: {disabled: true},
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.classes()).toContain('disabled')
  })

  it('should have active class when active=true', () => {
    const wrapper = mount(BListGroupItem, {
      props: {active: true},
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.classes()).toContain('active')
  })

  it('should have variant class and base class when variant set', () => {
    const wrapper = mount(BListGroupItem, {
      props: {variant: 'danger'},
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.classes()).toContain('list-group-item')
    expect(wrapper.classes()).toContain('list-group-item-danger')
  })

  it('should have tag a when href is set', () => {
    const wrapper = mount(BListGroupItem, {
      props: {href: '/foobar'},
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.element.tagName).toBe('A')
  })

  it('should have class list-group-item-action when href is set', () => {
    const wrapper = mount(BListGroupItem, {
      props: {href: '/foobar'},
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.classes()).toContain('list-group-item-action')
  })

  it('should have class list-group-item-action when action=true', () => {
    const wrapper = mount(BListGroupItem, {
      props: {action: true},
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.classes()).toContain('list-group-item-action')
  })

  it('should have class list-group-item-action when tag=a', () => {
    const wrapper = mount(BListGroupItem, {
      props: {tag: 'a'},
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.classes()).toContain('list-group-item-action')
  })

  it('should have href attribute when href is set', () => {
    const wrapper = mount(BListGroupItem, {
      props: {href: '/foobar'},
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.attributes('href')).toBe('/foobar')
  })

  it('should have tag button when tag=button', () => {
    const wrapper = mount(BListGroupItem, {
      props: {tag: 'button'},
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('should have tag a when tag=a', () => {
    const wrapper = mount(BListGroupItem, {
      props: {tag: 'a'},
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.element.tagName).toBe('A')
  })

  it('should have tag button when button=true', () => {
    const wrapper = mount(BListGroupItem, {
      props: {button: true},
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('should have tag button when button=true and tag=foo', () => {
    const wrapper = mount(BListGroupItem, {
      props: {
        button: true,
        tag: 'foo',
      },
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('should not have href when button=true and href set', () => {
    const wrapper = mount(BListGroupItem, {
      props: {
        button: true,
        href: '/foobar',
      },
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.element.tagName).toBe('BUTTON')
    expect(wrapper.attributes('href')).toBeUndefined()
  })

  it('should have class list-group-item-action when button=true', () => {
    const wrapper = mount(BListGroupItem, {
      props: {button: true},
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.classes()).toContain('list-group-item-action')
  })

  it('should have type=button when button=true', () => {
    const wrapper = mount(BListGroupItem, {
      props: {button: true},
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.attributes('type')).toEqual('button')
  })

  it('should have type=submit when button=true and attr type=submit', () => {
    const wrapper = mount(BListGroupItem, {
      props: {button: true},
      attrs: {type: 'submit'},
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.attributes('type')).toEqual('submit')
  })

  it('should not have attribute disabled when button=true and disabled not set', () => {
    const wrapper = mount(BListGroupItem, {
      props: {button: true},
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('should have attribute disabled when button=true and disabled=true', () => {
    const wrapper = mount(BListGroupItem, {
      props: {
        button: true,
        disabled: true,
      },
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('should have tag li when used within b-list-group with mounted=true', () => {
    const wrapper = mount(BListGroup, {
      props: {numbered: true},
      slots: {default: BListGroupItem},
      global: {provide: {[listGroupInjectionKey as unknown as symbol]: {}}},
    })

    const $listItem = wrapper.findComponent(BListGroupItem)
    expect($listItem).toBeDefined()
    expect($listItem.element.tagName).toBe('LI')
  })
})
