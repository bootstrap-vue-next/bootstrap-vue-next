import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BSpinner from './BSpinner.vue'

describe('spinner', () => {
  it('tag is span by default', () => {
    const wrapper = mount(BSpinner)
    expect(wrapper.element.tagName).toBe('SPAN')

    wrapper.unmount()
  })

  it('tag is tag prop', () => {
    const wrapper = mount(BSpinner, {
      props: {tag: 'div'},
    })
    expect(wrapper.element.tagName).toBe('DIV')

    wrapper.unmount()
  })

  it('has class spinner-border when prop type is border', async () => {
    const wrapper = mount(BSpinner, {
      props: {type: 'border'},
    })
    expect(wrapper.classes()).toContain('spinner-border')
    await wrapper.setProps({type: 'grow'})
    expect(wrapper.classes()).not.toContain('spinner-border')

    wrapper.unmount()
  })

  it('has class spinner-border-sm when both prop type border and prop small', async () => {
    const wrapper = mount(BSpinner, {
      props: {type: 'border', small: true},
    })
    expect(wrapper.classes()).toContain('spinner-border-sm')
    await wrapper.setProps({type: 'grow'})
    expect(wrapper.classes()).not.toContain('spinner-border-sm')

    wrapper.unmount()
    // TODO bspinner has both spinner-border and spinner-border-sm , is this intentional?
  })

  it('has class spinner-grow when prop type is grow', async () => {
    const wrapper = mount(BSpinner, {
      props: {type: 'grow'},
    })
    expect(wrapper.classes()).toContain('spinner-grow')
    await wrapper.setProps({type: 'border'})
    expect(wrapper.classes()).not.toContain('spinner-grow')

    wrapper.unmount()
  })

  it('has class spinner-grow-sm when prop type is grow and prop small', async () => {
    const wrapper = mount(BSpinner, {
      props: {type: 'grow', small: true},
    })
    expect(wrapper.classes()).toContain('spinner-grow-sm')
    await wrapper.setProps({type: 'border'})
    expect(wrapper.classes()).not.toContain('spinner-grow-sm')

    wrapper.unmount()
  })

  it('has class spinner-grow when prop type is grow', async () => {
    const wrapper = mount(BSpinner, {
      props: {type: 'grow'},
    })
    expect(wrapper.classes()).toContain('spinner-grow')
    await wrapper.setProps({type: 'border'})
    expect(wrapper.classes()).not.toContain('spinner-grow')

    wrapper.unmount()
  })

  it('has class text-{type} when prop variant', async () => {
    const wrapper = mount(BSpinner, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('text-primary')
    await wrapper.setProps({variant: 'secondary'})
    expect(wrapper.classes()).toContain('text-secondary')
    expect(wrapper.classes()).not.toContain('text-primary')

    wrapper.unmount()
  })

  it('does not have role when prop role, but has no label', () => {
    const wrapper = mount(BSpinner, {
      props: {role: 'foobar'},
    })
    expect(wrapper.attributes('role')).toBeUndefined()

    wrapper.unmount()
  })

  it('has role when prop role but also has prop label', () => {
    const wrapper = mount(BSpinner, {
      props: {role: 'foobar', label: 'someLabel'},
    })
    expect(wrapper.attributes('role')).toBe('foobar')

    wrapper.unmount()
  })

  it('has role when prop role but also has slot label', () => {
    const wrapper = mount(BSpinner, {
      props: {role: 'foobar'},
      slots: {label: 'someLabel'},
    })
    expect(wrapper.attributes('role')).toBe('foobar')

    wrapper.unmount()
  })

  it('has role status by default when label exists', () => {
    const wrapper = mount(BSpinner, {
      slots: {label: 'foobar'},
    })
    expect(wrapper.attributes('role')).toBe('status')

    wrapper.unmount()
  })

  it('has aria-hidden undefined when prop label', () => {
    const wrapper = mount(BSpinner, {
      props: {label: 'foobar'},
    })
    expect(wrapper.attributes('aria-hidden')).toBeUndefined()

    wrapper.unmount()
  })

  it('has aria-hidden undefined when slot label', () => {
    const wrapper = mount(BSpinner, {
      slots: {label: 'foobar'},
    })
    expect(wrapper.attributes('aria-hidden')).toBeUndefined()

    wrapper.unmount()
  })

  it('has aria-hidden true when no label', () => {
    const wrapper = mount(BSpinner)
    expect(wrapper.attributes('aria-hidden')).toBe('true')

    wrapper.unmount()
  })

  it('does not have span child if no label', () => {
    const wrapper = mount(BSpinner, {
      props: {tag: 'div'},
    })
    const $span = wrapper.find('span')
    expect($span.exists()).toBe(false)

    wrapper.unmount()
  })

  it('has span child if prop label', () => {
    const wrapper = mount(BSpinner, {
      props: {tag: 'div', label: 'foobar'},
    })
    const $span = wrapper.find('span')
    expect($span.exists()).toBe(true)

    wrapper.unmount()
  })

  it('has span child if prop label', () => {
    const wrapper = mount(BSpinner, {
      props: {tag: 'div'},
      slots: {label: 'foobar'},
    })
    const $span = wrapper.find('span')
    expect($span.exists()).toBe(true)

    wrapper.unmount()
  })

  it('span child has text for slot label', () => {
    const wrapper = mount(BSpinner, {
      props: {tag: 'div'},
      slots: {label: 'foobar'},
    })
    const $span = wrapper.find('span')
    expect($span.text()).toBe('foobar')

    wrapper.unmount()
  })

  it('span child has text for prop label', () => {
    const wrapper = mount(BSpinner, {
      props: {tag: 'div', label: 'foobar'},
    })
    const $span = wrapper.find('span')
    expect($span.text()).toBe('foobar')

    wrapper.unmount()
  })

  it('prioritizes slot label over prop label if both exist', () => {
    const wrapper = mount(BSpinner, {
      props: {tag: 'div', label: 'propbar'},
      slots: {label: 'labelbar'},
    })
    const $span = wrapper.find('span')
    expect($span.text()).toBe('labelbar')

    wrapper.unmount()
  })

  it('span child when has label has static class visually-hidden', () => {
    const wrapper = mount(BSpinner, {
      props: {label: 'foobar', tag: 'div'},
    })
    const $span = wrapper.find('span')
    expect($span.classes()).toContain('visually-hidden')

    wrapper.unmount()
  })
})
