import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTbody from './BTbody.vue'

describe('tbody', () => {
  enableAutoUnmount(afterEach)

  it('renders a tbody element', () => {
    const wrapper = mount(BTbody)
    expect(wrapper.element.tagName).toBe('TBODY')
  })

  it('renders default slot content', () => {
    const wrapper = mount(BTbody, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders HTML slot content', () => {
    const wrapper = mount(BTbody, {
      slots: {default: '<tr><td>Content</td></tr>'},
    })
    expect(wrapper.find('tr').exists()).toBe(true)
    expect(wrapper.find('td').text()).toBe('Content')
  })

  it('renders empty when no slot is provided', () => {
    const wrapper = mount(BTbody)
    expect(wrapper.text()).toBe('')
  })

  it('has class thead-{type} when prop variant is set', () => {
    const wrapper = mount(BTbody, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('thead-primary')
  })

  it('does not have variant class when variant is null', () => {
    const wrapper = mount(BTbody, {
      props: {variant: null},
    })
    expect(wrapper.classes().join(' ')).not.toMatch(/thead-/)
  })

  it('does not have variant class by default', () => {
    const wrapper = mount(BTbody)
    expect(wrapper.classes().join(' ')).not.toMatch(/thead-/)
  })

  it('variant class is reactive', async () => {
    const wrapper = mount(BTbody, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('thead-primary')
    await wrapper.setProps({variant: 'secondary'})
    expect(wrapper.classes()).not.toContain('thead-primary')
    expect(wrapper.classes()).toContain('thead-secondary')
  })

  it('variant class is removed when variant is set to undefined', async () => {
    const wrapper = mount(BTbody, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('thead-primary')
    await wrapper.setProps({variant: undefined})
    expect(wrapper.classes()).not.toContain('thead-primary')
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
      const wrapper = mount(BTbody, {
        props: {variant},
      })
      expect(wrapper.classes()).toContain(`thead-${variant}`)
    })
  })
})
