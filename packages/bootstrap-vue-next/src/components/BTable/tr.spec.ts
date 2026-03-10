import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTr from './BTr.vue'

describe('tr', () => {
  enableAutoUnmount(afterEach)

  it('renders a tr element', () => {
    const wrapper = mount(BTr)
    expect(wrapper.element.tagName).toBe('TR')
  })

  it('renders default slot content', () => {
    const wrapper = mount(BTr, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders HTML slot content', () => {
    const wrapper = mount(BTr, {
      slots: {default: '<td>cell content</td>'},
    })
    expect(wrapper.find('td').exists()).toBe(true)
    expect(wrapper.find('td').text()).toBe('cell content')
  })

  it('renders empty when no slot is provided', () => {
    const wrapper = mount(BTr)
    expect(wrapper.text()).toBe('')
  })

  it('has class table-{type} when prop variant is set', () => {
    const wrapper = mount(BTr, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('table-primary')
  })

  it('does not have variant class when variant is null', () => {
    const wrapper = mount(BTr, {
      props: {variant: null},
    })
    expect(wrapper.classes().join(' ')).not.toMatch(/table-/)
  })

  it('does not have variant class by default', () => {
    const wrapper = mount(BTr)
    expect(wrapper.classes().join(' ')).not.toMatch(/table-/)
  })

  it('variant class is reactive', async () => {
    const wrapper = mount(BTr, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('table-primary')
    await wrapper.setProps({variant: 'secondary'})
    expect(wrapper.classes()).not.toContain('table-primary')
    expect(wrapper.classes()).toContain('table-secondary')
  })

  it('variant class is removed when variant is set to undefined', async () => {
    const wrapper = mount(BTr, {
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
      const wrapper = mount(BTr, {
        props: {variant},
      })
      expect(wrapper.classes()).toContain(`table-${variant}`)
    })
  })
})
