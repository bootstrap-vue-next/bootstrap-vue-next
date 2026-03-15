import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTfoot from './BTfoot.vue'

describe('tfoot', () => {
  enableAutoUnmount(afterEach)

  it('renders a tfoot element', () => {
    const wrapper = mount(BTfoot)
    expect(wrapper.element.tagName).toBe('TFOOT')
  })

  it('renders default slot content', () => {
    const wrapper = mount(BTfoot, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders HTML slot content', () => {
    const wrapper = mount(BTfoot, {
      slots: {default: '<tr><td>Footer</td></tr>'},
    })
    expect(wrapper.find('tr').exists()).toBe(true)
    expect(wrapper.find('td').text()).toBe('Footer')
  })

  it('renders empty when no slot is provided', () => {
    const wrapper = mount(BTfoot)
    expect(wrapper.text()).toBe('')
  })

  it('has class table-{type} when prop variant is set', () => {
    const wrapper = mount(BTfoot, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('table-primary')
  })

  it('does not have variant class when variant is null', () => {
    const wrapper = mount(BTfoot, {
      props: {variant: null},
    })
    expect(wrapper.classes().join(' ')).not.toMatch(/table-/)
  })

  it('does not have variant class by default', () => {
    const wrapper = mount(BTfoot)
    expect(wrapper.classes().join(' ')).not.toMatch(/table-/)
  })

  it('variant class is reactive', async () => {
    const wrapper = mount(BTfoot, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('table-primary')
    await wrapper.setProps({variant: 'secondary'})
    expect(wrapper.classes()).not.toContain('table-primary')
    expect(wrapper.classes()).toContain('table-secondary')
  })

  it('variant class is removed when variant is set to undefined', async () => {
    const wrapper = mount(BTfoot, {
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
      const wrapper = mount(BTfoot, {
        props: {variant},
      })
      expect(wrapper.classes()).toContain(`table-${variant}`)
    })
  })
})
