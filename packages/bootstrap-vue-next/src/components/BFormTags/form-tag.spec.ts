import {enableAutoUnmount, mount} from '@vue/test-utils'
import BFormTag from './BFormTag.vue'
import {afterEach, describe, expect, it} from 'vitest'

describe('form-tag', () => {
  enableAutoUnmount(afterEach)

  it('has expected structure', () => {
    const wrapper = mount(BFormTag, {
      props: {
        title: 'foobar',
      },
    })

    expect(wrapper.element.tagName).toBe('SPAN')
    expect(wrapper.classes()).toContain('b-form-tag')
    expect(wrapper.classes()).toContain('badge')
    expect(wrapper.attributes('title')).toBe('foobar')
    expect(wrapper.text()).toContain('foobar')

    const $button = wrapper.find('button')
    expect($button.exists()).toBe(true)
    expect($button.classes()).toContain('b-form-tag-remove')
    expect($button.attributes('aria-label')).toBe('Remove tag')
  })

  it('renders custom root element', () => {
    const wrapper = mount(BFormTag, {
      props: {
        tag: 'li',
        title: 'foobar',
      },
    })

    expect(wrapper.element.tagName).toBe('LI')
    expect(wrapper.classes()).toContain('b-form-tag')
    expect(wrapper.classes()).toContain('badge')
    expect(wrapper.attributes('title')).toBe('foobar')
    expect(wrapper.text()).toContain('foobar')

    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('renders default slot', () => {
    const wrapper = mount(BFormTag, {
      props: {
        title: 'foo',
      },
      slots: {
        default: 'bar',
      },
    })

    expect(wrapper.element.tagName).toBe('SPAN')
    expect(wrapper.attributes('title')).toBe('bar')
    expect(wrapper.text()).toContain('bar')
    expect(wrapper.text()).not.toContain('foo')

    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('has pill styles when `pill` prop set', () => {
    const wrapper = mount(BFormTag, {
      props: {
        pill: true,
        title: 'foo',
      },
    })

    expect(wrapper.element.tagName).toBe('SPAN')
    expect(wrapper.classes()).toContain('b-form-tag')
    expect(wrapper.classes()).toContain('badge')
    expect(wrapper.classes()).toContain('rounded-pill')
    expect(wrapper.attributes('title')).toBe('foo')
    expect(wrapper.text()).toContain('foo')

    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('has custom variant when `variant` prop set', () => {
    const wrapper = mount(BFormTag, {
      props: {
        title: 'foo',
        variant: 'danger',
      },
    })

    expect(wrapper.element.tagName).toBe('SPAN')
    expect(wrapper.classes()).toContain('b-form-tag')
    expect(wrapper.classes()).toContain('badge')
    expect(wrapper.classes()).toContain('bg-danger')
    expect(wrapper.attributes('title')).toBe('foo')
    expect(wrapper.text()).toContain('foo')

    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('emits "remove" event when button clicked', async () => {
    const wrapper = mount(BFormTag, {
      props: {
        title: 'foobar',
      },
    })

    expect(wrapper.element.tagName).toBe('SPAN')
    expect(wrapper.attributes('title')).toBe('foobar')
    expect(wrapper.text()).toContain('foobar')

    const $button = wrapper.find('button')
    expect($button.exists()).toBe(true)

    expect(wrapper.emitted('remove')).toBeUndefined()

    await $button.trigger('click')
    expect(wrapper.emitted('remove')).toBeDefined()
    expect(wrapper.emitted('remove')?.length).toBe(1)
  })

  it('does not have remove button when `disabled` prop is set', () => {
    const wrapper = mount(BFormTag, {
      props: {
        disabled: true,
        title: 'foobar',
      },
    })

    expect(wrapper.element.tagName).toBe('SPAN')
    expect(wrapper.classes()).toContain('disabled')
    expect(wrapper.attributes('title')).toBe('foobar')
    expect(wrapper.text()).toContain('foobar')

    expect(wrapper.find('button').exists()).toBe(false)
  })

  it('does not have remove button when `no-remove` prop is set', () => {
    const wrapper = mount(BFormTag, {
      props: {
        noRemove: true,
        title: 'foobar',
      },
    })

    expect(wrapper.element.tagName).toBe('SPAN')
    expect(wrapper.attributes('title')).toBe('foobar')
    expect(wrapper.text()).toContain('foobar')

    expect(wrapper.find('button').exists()).toBe(false)
  })
})
