import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BBreadcrumbItem from './BBreadcrumbItem.vue'
import BLink from '../BLink/BLink.vue'

describe('breadcrumb-item', () => {
  enableAutoUnmount(afterEach)

  it('has static class breadcrumb-item', () => {
    const wrapper = mount(BBreadcrumbItem)
    expect(wrapper.classes()).toContain('breadcrumb-item')
  })

  it('has class active when prop active', async () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true},
    })
    expect(wrapper.classes()).toContain('active')
    await wrapper.setProps({active: false})
    expect(wrapper.classes()).not.toContain('active')
  })

  it('contains a span child when prop active', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true},
    })
    const $span = wrapper.find('span')
    expect($span.exists()).toBe(true)
  })

  it('contains a blink child by default', () => {
    const wrapper = mount(BBreadcrumbItem)
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(true)
  })

  it('child contains attr aria-current when prop active', async () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true, ariaCurrent: 'foobar'},
    })
    const $span = wrapper.get('span')
    expect($span.attributes('aria-current')).toBe('foobar')
    await wrapper.setProps({active: false})
    const $blink = wrapper.getComponent(BLink)
    expect($blink.attributes('aria-current')).toBeUndefined()
  })

  it('emits click event', async () => {
    const wrapper = mount(BBreadcrumbItem)
    const $blink = wrapper.getComponent(BLink)
    await $blink.trigger('click')
    expect($blink.emitted()).toHaveProperty('click')
  })

  it('does not emit click event when prop disabled and blink clicked', async () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {disabled: true},
    })
    const $blink = wrapper.getComponent(BLink)
    await $blink.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('does not emit click event when prop active and span clicked', async () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true},
    })
    const $span = wrapper.get('span')
    await $span.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('emits a MouseEvent when clicked', async () => {
    const wrapper = mount(BBreadcrumbItem)
    const $blink = wrapper.getComponent(BLink)
    await $blink.trigger('click')
    const $emitted = $blink.emitted('click') ?? []
    expect($emitted[0][0] instanceof MouseEvent).toBe(true)
  })

  it('renders default slot in child when child is span', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true},
      slots: {default: 'foobar'},
    })
    const $span = wrapper.get('span')
    expect($span.text()).toBe('foobar')
  })

  it('renders prop text in child when child is span', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true, text: 'foobar'},
    })
    const $span = wrapper.get('span')
    expect($span.text()).toBe('foobar')
  })

  it('renders prop text in child when child is span', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true, text: 'props'},
      slots: {default: 'slots'},
    })
    const $span = wrapper.get('span')
    expect($span.text()).toBe('slots')
  })

  it('does not give prop active to child', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true},
    })
    const $span = wrapper.get('span')
    expect($span.attributes('active')).toBeUndefined()
  })

  it('does not give prop ariaCurrent to child', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true, ariaCurrent: 'foobar'},
    })
    const $span = wrapper.get('span')
    expect($span.attributes('ariaCurrent')).toBeUndefined()
  })

  it('does not give prop disabled to child', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true, disabled: true},
    })
    const $span = wrapper.get('span')
    expect($span.attributes('disabled')).toBeUndefined()
  })

  it('does not give prop text to child', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true, text: 'foobar'},
    })
    const $span = wrapper.get('span')
    expect($span.attributes('text')).toBeUndefined()
  })

  it('gives prop active to child when blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: false},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('active')).toBe(false)
  })

  it('does not give prop ariaCurrent to child when blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: false, ariaCurrent: 'foobar'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('ariaCurrent')).toBeUndefined()
  })

  it('gives prop disabled to child when blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: false, disabled: true},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('disabled')).toBe(true)
  })

  it('does not give prop text to child when blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: false, text: 'foobar'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('text')).toBeUndefined()
  })

  it('gives prop activeClass to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {activeClass: 'foobar'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('activeClass')).toBe('foobar')
  })
})
