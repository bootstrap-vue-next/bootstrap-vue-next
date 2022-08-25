import {mount} from '@vue/test-utils'
import BListGroup from './BListGroup.vue'
import {describe, expect, it} from 'vitest'

describe('list-group', () => {
  it('default should have tag div', () => {
    const wrapper = mount(BListGroup)

    expect(wrapper.element.tagName).toBe('DIV')

    wrapper.unmount()
  })

  it('default should contain only single class of list-group', () => {
    const wrapper = mount(BListGroup)

    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.classes()).toContain('list-group')
    expect(wrapper.classes()).not.toContain('list-group-flush')
    expect(wrapper.classes()).not.toContain('list-group-horizontal')

    wrapper.unmount()
  })

  it('should have tag ul then prop tag=ul', () => {
    const wrapper = mount(BListGroup, {
      props: {tag: 'ul'},
    })

    expect(wrapper.element.tagName).toBe('UL')

    wrapper.unmount()
  })

  it('should have tag ol then prop numbered=true', () => {
    const wrapper = mount(BListGroup, {
      props: {tag: 'div', numbered: true},
    })

    expect(wrapper.element.tagName).toBe('OL')

    wrapper.unmount()
  })

  it('should have class list-group-flush when prop flush=true', () => {
    const wrapper = mount(BListGroup, {
      props: {flush: true},
    })

    expect(wrapper.classes().length).toBe(2)
    expect(wrapper.classes()).toContain('list-group')
    expect(wrapper.classes()).toContain('list-group-flush')
    expect(wrapper.classes()).not.toContain('list-group-horizontal')

    wrapper.unmount()
  })

  it('should have class list-group-horizontal when prop horizontal=true', () => {
    const wrapper = mount(BListGroup, {
      props: {horizontal: true},
    })

    expect(wrapper.classes().length).toBe(2)
    expect(wrapper.classes()).not.toContain('list-group-flush')
    expect(wrapper.classes()).toContain('list-group')
    expect(wrapper.classes()).toContain('list-group-horizontal')

    wrapper.unmount()
  })

  it('should have class list-group-horizontal-md when prop horizontal=md', () => {
    const wrapper = mount(BListGroup, {
      props: {horizontal: 'md'},
    })

    expect(wrapper.classes().length).toBe(2)
    expect(wrapper.classes()).not.toContain('list-group-flush')
    expect(wrapper.classes()).not.toContain('list-group-horizontal')
    expect(wrapper.classes()).toContain('list-group')
    expect(wrapper.classes()).toContain('list-group-horizontal-md')

    wrapper.unmount()
  })

  it('should not have class list-group-horizontal when prop horizontal=true and flush=true', () => {
    const wrapper = mount(BListGroup, {
      props: {
        horizontal: true,
        flush: true,
      },
    })

    expect(wrapper.classes().length).toBe(2)
    expect(wrapper.classes()).not.toContain('list-group-horizontal')
    expect(wrapper.classes()).toContain('list-group')
    expect(wrapper.classes()).toContain('list-group-flush')

    wrapper.unmount()
  })

  it('should not have class list-group-horizontal-lg when prop horizontal=lg and flush=true', () => {
    const wrapper = mount(BListGroup, {
      props: {
        horizontal: 'lg',
        flush: true,
      },
    })

    expect(wrapper.classes().length).toBe(2)
    expect(wrapper.classes()).not.toContain('list-group-horizontal-lg')
    expect(wrapper.classes()).not.toContain('list-group-horizontal')
    expect(wrapper.classes()).toContain('list-group')
    expect(wrapper.classes()).toContain('list-group-flush')

    wrapper.unmount()
  })

  it('should accept custom classes', () => {
    const wrapper = mount(BListGroup, {
      attrs: {
        class: 'foobar',
      },
    })

    expect(wrapper.classes().length).toBe(2)
    expect(wrapper.classes()).toContain('list-group')
    expect(wrapper.classes()).toContain('foobar')

    wrapper.unmount()
  })
})
