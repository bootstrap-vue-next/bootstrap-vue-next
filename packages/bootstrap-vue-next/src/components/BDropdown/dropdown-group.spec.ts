import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BDropdownGroup from './BDropdownGroup.vue'

describe('dropdown-group', () => {
  enableAutoUnmount(afterEach)

  it('is tag li', () => {
    const wrapper = mount(BDropdownGroup)
    expect(wrapper.element.tagName).toBe('LI')
  })

  it('has static attr role to be presentation', () => {
    const wrapper = mount(BDropdownGroup)
    expect(wrapper.attributes('role')).toBe('presentation')
  })

  it('has ul child', () => {
    const wrapper = mount(BDropdownGroup)
    const $ul = wrapper.find('ul')
    expect($ul.exists()).toBe(true)
  })

  it('ul child has static attr role to be group', () => {
    const wrapper = mount(BDropdownGroup)
    const $ul = wrapper.get('ul')
    expect($ul.attributes('role')).toBe('group')
  })

  it('ul child has static class list-unstyled', () => {
    const wrapper = mount(BDropdownGroup)
    const $ul = wrapper.get('ul')
    expect($ul.classes()).toContain('list-unstyled')
  })

  it('ul child has id when prop id', async () => {
    const wrapper = mount(BDropdownGroup, {
      props: {id: 'foobar'},
    })
    const $ul = wrapper.get('ul')
    expect($ul.attributes('id')).toBe('foobar')
    await wrapper.setProps({id: undefined})
    expect($ul.attributes('id')).toBeUndefined()
  })

  it('ul child has attr aria-describedby to be prop ariaDescribedby', async () => {
    const wrapper = mount(BDropdownGroup, {
      props: {ariaDescribedby: 'foobar'},
    })
    const $ul = wrapper.get('ul')
    expect($ul.attributes('aria-describedby')).toBe('foobar')
    await wrapper.setProps({ariaDescribedby: undefined})
    expect($ul.attributes('aria-describedby')).toBeUndefined()
  })

  it('ul child has attr aria-describedby to be prop id when not ariaDescribedby', async () => {
    const wrapper = mount(BDropdownGroup, {
      props: {id: 'foobar'},
    })
    const $ul = wrapper.get('ul')
    expect($ul.attributes('aria-describedby')).toBe('foobar_group_dd_header')
    await wrapper.setProps({id: undefined})
    expect($ul.attributes('aria-describedby')).toBeUndefined()
  })

  it('ul child has attr aria-describedby to prefer ariaDescribedby instead of id', () => {
    const wrapper = mount(BDropdownGroup, {
      props: {id: 'id', ariaDescribedby: 'aria'},
    })
    const $ul = wrapper.get('ul')
    expect($ul.attributes('aria-describedby')).toBe('aria')
  })

  it('ul child renders default slot', () => {
    const wrapper = mount(BDropdownGroup, {
      slots: {default: 'foobar'},
    })
    const $ul = wrapper.get('ul')
    expect($ul.text()).toBe('foobar')
  })

  it('has dynamic component whos tag is default header', () => {
    const wrapper = mount(BDropdownGroup)
    const $header = wrapper.find('header')
    expect($header.exists()).toBe(true)
  })

  it('has dynamic component is prop headerTag', () => {
    const wrapper = mount(BDropdownGroup, {
      props: {headerTag: 'h1'},
    })
    const $header = wrapper.find('header')
    const $h1 = wrapper.find('h1')
    expect($header.exists()).toBe(false)
    expect($h1.exists()).toBe(true)
  })

  it('dynamic header tag has attr id to be prop id', async () => {
    const wrapper = mount(BDropdownGroup, {
      props: {id: 'foobar'},
    })
    const $header = wrapper.get('header')
    expect($header.attributes('id')).toBe('foobar_group_dd_header')
    await wrapper.setProps({id: undefined})
    expect($header.attributes('id')).toBeUndefined()
  })

  it('dynamic header tag has static class dropdown-header', () => {
    const wrapper = mount(BDropdownGroup)
    const $header = wrapper.get('header')
    expect($header.classes()).toContain('dropdown-header')
  })

  it('dynamic header tag has class to include prop headerClass', () => {
    const wrapper = mount(BDropdownGroup, {
      props: {headerClass: ['foo']},
    })
    const $header = wrapper.get('header')
    expect($header.classes()).toContain('foo')
  })

  it('dynamic header tag has class text-{type} when prop headerVariant', async () => {
    const wrapper = mount(BDropdownGroup, {
      props: {headerVariant: 'danger'},
    })
    const $header = wrapper.get('header')
    expect($header.classes()).toContain('text-danger')
    await wrapper.setProps({headerVariant: undefined})
    expect($header.classes()).not.toContain('text-danger')
  })

  it('dynamic header tag has role to be undefined when tag is header', () => {
    const wrapper = mount(BDropdownGroup)
    const $header = wrapper.get('header')
    expect($header.attributes('role')).toBeUndefined()
  })

  it('dynamic header tag has role to be heading when tag is not header', () => {
    const wrapper = mount(BDropdownGroup, {
      props: {headerTag: 'h1'},
    })
    const $h1 = wrapper.get('h1')
    expect($h1.attributes('role')).toBe('heading')
  })

  it('dynamic header tag renders slot header', () => {
    const wrapper = mount(BDropdownGroup, {
      slots: {header: 'foobar'},
    })
    const $header = wrapper.get('header')
    expect($header.text()).toBe('foobar')
  })

  it('dynamic header tag renders prop header', () => {
    const wrapper = mount(BDropdownGroup, {
      props: {header: 'foobar'},
    })
    const $header = wrapper.get('header')
    expect($header.text()).toBe('foobar')
  })

  it('dynamic header tag renders slot header over prop header', () => {
    const wrapper = mount(BDropdownGroup, {
      slots: {header: 'slots'},
      props: {header: 'props'},
    })
    const $header = wrapper.get('header')
    expect($header.text()).toBe('slots')
  })
})
