import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BThead from './BThead.vue'

describe('thead', () => {
  enableAutoUnmount(afterEach)

  it('renders a thead element', () => {
    const wrapper = mount(BThead)
    expect(wrapper.element.tagName).toBe('THEAD')
  })

  it('renders default slot content', () => {
    const wrapper = mount(BThead, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders HTML slot content', () => {
    const wrapper = mount(BThead, {
      slots: {default: '<tr><th>Header</th></tr>'},
    })
    expect(wrapper.find('tr').exists()).toBe(true)
    expect(wrapper.find('th').text()).toBe('Header')
  })

  it('renders empty when no slot is provided', () => {
    const wrapper = mount(BThead)
    expect(wrapper.text()).toBe('')
  })

  it('has class table-{type} when prop variant is set', () => {
    const wrapper = mount(BThead, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('table-primary')
  })

  it('does not have variant class when variant is null', () => {
    const wrapper = mount(BThead, {
      props: {variant: null},
    })
    expect(wrapper.classes().join(' ')).not.toMatch(/table-/)
  })

  it('does not have variant class by default', () => {
    const wrapper = mount(BThead)
    expect(wrapper.classes().join(' ')).not.toMatch(/table-/)
  })

  it('variant class is reactive', async () => {
    const wrapper = mount(BThead, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('table-primary')
    await wrapper.setProps({variant: 'secondary'})
    expect(wrapper.classes()).not.toContain('table-primary')
    expect(wrapper.classes()).toContain('table-secondary')
  })

  it('variant class is removed when variant is set to undefined', async () => {
    const wrapper = mount(BThead, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('table-primary')
    await wrapper.setProps({variant: undefined})
    expect(wrapper.classes()).not.toContain('table-primary')
  })

  it('supports different variant values', () => {
    const variants = [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ] as const
    variants.forEach((variant) => {
      const wrapper = mount(BThead, {
        props: {variant},
      })
      expect(wrapper.classes()).toContain(`table-${variant}`)
    })
  })
})
