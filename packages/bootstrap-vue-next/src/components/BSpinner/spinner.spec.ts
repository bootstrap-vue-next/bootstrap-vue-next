import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BSpinner from './BSpinner.vue'

describe('spinner', () => {
  enableAutoUnmount(afterEach)

  it('tag is span by default', () => {
    const wrapper = mount(BSpinner)
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('tag is tag prop', () => {
    const wrapper = mount(BSpinner, {
      props: {tag: 'div'},
    })
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has class spinner-border when prop type is border', async () => {
    const wrapper = mount(BSpinner, {
      props: {type: 'border'},
    })
    expect(wrapper.classes()).toContain('spinner-border')
    await wrapper.setProps({type: 'grow'})
    expect(wrapper.classes()).not.toContain('spinner-border')
  })

  it('has class spinner-border-sm when both prop type border and prop small', async () => {
    const wrapper = mount(BSpinner, {
      props: {type: 'border', small: true},
    })
    expect(wrapper.classes()).toContain('spinner-border-sm')
    await wrapper.setProps({type: 'grow'})
    expect(wrapper.classes()).not.toContain('spinner-border-sm')
  })

  it('has class spinner-grow when prop type is grow', async () => {
    const wrapper = mount(BSpinner, {
      props: {type: 'grow'},
    })
    expect(wrapper.classes()).toContain('spinner-grow')
    await wrapper.setProps({type: 'border'})
    expect(wrapper.classes()).not.toContain('spinner-grow')
  })

  it('has class spinner-grow-sm when prop type is grow and prop small', async () => {
    const wrapper = mount(BSpinner, {
      props: {type: 'grow', small: true},
    })
    expect(wrapper.classes()).toContain('spinner-grow-sm')
    await wrapper.setProps({type: 'border'})
    expect(wrapper.classes()).not.toContain('spinner-grow-sm')
  })

  it('has class spinner-grow when prop type is grow', async () => {
    const wrapper = mount(BSpinner, {
      props: {type: 'grow'},
    })
    expect(wrapper.classes()).toContain('spinner-grow')
    await wrapper.setProps({type: 'border'})
    expect(wrapper.classes()).not.toContain('spinner-grow')
  })

  it('has class text-{type} when prop variant', async () => {
    const wrapper = mount(BSpinner, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('text-primary')
    await wrapper.setProps({variant: 'secondary'})
    expect(wrapper.classes()).toContain('text-secondary')
    expect(wrapper.classes()).not.toContain('text-primary')
  })

  it('does not have role when prop role, but has no label', () => {
    const wrapper = mount(BSpinner, {
      props: {role: 'foobar'},
    })
    expect(wrapper.attributes('role')).toBeUndefined()
  })

  it('has role when prop role but also has prop label', () => {
    const wrapper = mount(BSpinner, {
      props: {role: 'foobar', label: 'someLabel'},
    })
    expect(wrapper.attributes('role')).toBe('foobar')
  })

  it('has role when prop role but also has slot label', () => {
    const wrapper = mount(BSpinner, {
      props: {role: 'foobar'},
      slots: {label: 'someLabel'},
    })
    expect(wrapper.attributes('role')).toBe('foobar')
  })

  it('has role status by default when label exists', () => {
    const wrapper = mount(BSpinner, {
      slots: {label: 'foobar'},
    })
    expect(wrapper.attributes('role')).toBe('status')
  })

  it('has aria-hidden undefined when prop label', () => {
    const wrapper = mount(BSpinner, {
      props: {label: 'foobar'},
    })
    expect(wrapper.attributes('aria-hidden')).toBeUndefined()
  })

  it('has aria-hidden undefined when slot label', () => {
    const wrapper = mount(BSpinner, {
      slots: {label: 'foobar'},
    })
    expect(wrapper.attributes('aria-hidden')).toBeUndefined()
  })

  it('has aria-hidden true when no label', () => {
    const wrapper = mount(BSpinner)
    expect(wrapper.attributes('aria-hidden')).toBe('true')
  })

  it('does not have span child if no label', () => {
    const wrapper = mount(BSpinner, {
      props: {tag: 'div'},
    })
    const $span = wrapper.find('span')
    expect($span.exists()).toBe(false)
  })

  it('has span child if prop label', () => {
    const wrapper = mount(BSpinner, {
      props: {tag: 'div', label: 'foobar'},
    })
    const $span = wrapper.find('span')
    expect($span.exists()).toBe(true)
  })

  it('has span child if prop label', () => {
    const wrapper = mount(BSpinner, {
      props: {tag: 'div'},
      slots: {label: 'foobar'},
    })
    const $span = wrapper.find('span')
    expect($span.exists()).toBe(true)
  })

  it('span child has text for slot label', () => {
    const wrapper = mount(BSpinner, {
      props: {tag: 'div'},
      slots: {label: 'foobar'},
    })
    const $span = wrapper.get('span')
    expect($span.text()).toBe('foobar')
  })

  it('span child has text for prop label', () => {
    const wrapper = mount(BSpinner, {
      props: {tag: 'div', label: 'foobar'},
    })
    const $span = wrapper.get('span')
    expect($span.text()).toBe('foobar')
  })

  it('prioritizes slot label over prop label if both exist', () => {
    const wrapper = mount(BSpinner, {
      props: {tag: 'div', label: 'propbar'},
      slots: {label: 'labelbar'},
    })
    const $span = wrapper.get('span')
    expect($span.text()).toBe('labelbar')
  })

  it('span child when has label has static class visually-hidden', () => {
    const wrapper = mount(BSpinner, {
      props: {label: 'foobar', tag: 'div'},
    })
    const $span = wrapper.get('span')
    expect($span.classes()).toContain('visually-hidden')
  })
})
