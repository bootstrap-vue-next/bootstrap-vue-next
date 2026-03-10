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

  it('tag is reactive', async () => {
    const wrapper = mount(BSpinner, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
    await wrapper.setProps({tag: 'div'})
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has class spinner-border by default', () => {
    const wrapper = mount(BSpinner)
    expect(wrapper.classes()).toContain('spinner-border')
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

  it('does not have small class when small is false', () => {
    const wrapper = mount(BSpinner, {
      props: {type: 'border', small: false},
    })
    expect(wrapper.classes()).not.toContain('spinner-border-sm')
  })

  it('small prop is reactive', async () => {
    const wrapper = mount(BSpinner, {
      props: {type: 'border', small: false},
    })
    expect(wrapper.classes()).not.toContain('spinner-border-sm')
    await wrapper.setProps({small: true})
    expect(wrapper.classes()).toContain('spinner-border-sm')
    await wrapper.setProps({small: false})
    expect(wrapper.classes()).not.toContain('spinner-border-sm')
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

  it('does not have text-* variant class when variant is null', () => {
    const wrapper = mount(BSpinner)
    const classes = wrapper.classes()
    expect(classes.some((c) => c.startsWith('text-'))).toBe(false)
  })

  it('variant can be removed', async () => {
    const wrapper = mount(BSpinner, {
      props: {variant: 'danger'},
    })
    expect(wrapper.classes()).toContain('text-danger')
    await wrapper.setProps({variant: null})
    expect(wrapper.classes()).not.toContain('text-danger')
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

  it('has role status by default when label prop exists', () => {
    const wrapper = mount(BSpinner, {
      props: {label: 'foobar'},
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

  it('has span child if slot label', () => {
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

  it('label prop is reactive', async () => {
    const wrapper = mount(BSpinner, {
      props: {tag: 'div', label: 'loading'},
    })
    const $span = wrapper.get('span')
    expect($span.text()).toBe('loading')
    await wrapper.setProps({label: 'processing'})
    expect($span.text()).toBe('processing')
  })

  it('label slot renders HTML content', () => {
    const wrapper = mount(BSpinner, {
      props: {tag: 'div'},
      slots: {label: '<em>loading</em>'},
    })
    const $span = wrapper.get('span')
    const $em = $span.find('em')
    expect($em.exists()).toBe(true)
    expect($em.text()).toBe('loading')
  })

  it('removing label hides span and sets aria-hidden', async () => {
    const wrapper = mount(BSpinner, {
      props: {tag: 'div', label: 'loading'},
    })
    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.attributes('aria-hidden')).toBeUndefined()
    await wrapper.setProps({label: undefined})
    expect(wrapper.find('span').exists()).toBe(false)
    expect(wrapper.attributes('aria-hidden')).toBe('true')
  })

  it('supports grow type with small', () => {
    const wrapper = mount(BSpinner, {
      props: {type: 'grow', small: true},
    })
    expect(wrapper.classes()).toContain('spinner-grow')
    expect(wrapper.classes()).toContain('spinner-grow-sm')
  })

  it('type prop is reactive for small class', async () => {
    const wrapper = mount(BSpinner, {
      props: {type: 'border', small: true},
    })
    expect(wrapper.classes()).toContain('spinner-border-sm')
    expect(wrapper.classes()).not.toContain('spinner-grow-sm')
    await wrapper.setProps({type: 'grow'})
    expect(wrapper.classes()).toContain('spinner-grow-sm')
    expect(wrapper.classes()).not.toContain('spinner-border-sm')
  })

  it('multiple variants - all classes correct', () => {
    const wrapper = mount(BSpinner, {
      props: {variant: 'warning', type: 'grow', small: true},
    })
    expect(wrapper.classes()).toContain('spinner-grow')
    expect(wrapper.classes()).toContain('spinner-grow-sm')
    expect(wrapper.classes()).toContain('text-warning')
  })
})
