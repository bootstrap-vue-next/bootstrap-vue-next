import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BBadge from './BBadge.vue'
import BLink from '../BLink/BLink.vue'

describe('badge', () => {
  enableAutoUnmount(afterEach)

  it('has static class badge', () => {
    const wrapper = mount(BBadge)
    expect(wrapper.classes()).toContain('badge')
  })

  it('tag is span by default', () => {
    const wrapper = mount(BBadge)
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('contains BLink if to prop', () => {
    const wrapper = mount(BBadge, {
      props: {to: '/abc'},
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(true)
  })

  it('contains BLink if href prop', () => {
    const wrapper = mount(BBadge, {
      props: {href: '/abc'},
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(true)
  })

  it('does not contain BLink by default', () => {
    const wrapper = mount(BBadge)
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(false)
  })

  it('is still blink even if prop tag exists, but is also link', () => {
    const wrapper = mount(BBadge, {
      props: {href: '/abc', tag: 'span'},
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(true)
    expect(wrapper.element.tagName).toBe('A')
  })

  it('is prop tag when is not link', () => {
    const wrapper = mount(BBadge, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('contains class bg-{type} when prop varaint', async () => {
    const wrapper = mount(BBadge, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('bg-primary')
    await wrapper.setProps({variant: 'secondary'})
    expect(wrapper.classes()).toContain('bg-secondary')
    expect(wrapper.classes()).not.toContain('bg-primary')
  })

  it('contains class active when prop active', async () => {
    const wrapper = mount(BBadge, {
      props: {active: true},
    })
    expect(wrapper.classes()).toContain('active')
    await wrapper.setProps({active: false})
    expect(wrapper.classes()).not.toContain('active')
  })

  it('contains class disabled when prop disabled', async () => {
    const wrapper = mount(BBadge, {
      props: {disabled: true},
    })
    expect(wrapper.classes()).toContain('disabled')
    await wrapper.setProps({disabled: false})
    expect(wrapper.classes()).not.toContain('disabled')
  })

  it('contains class text-dark when prop variant is warning|info|light', async () => {
    const wrapper = mount(BBadge, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).not.toContain('text-dark')
    await wrapper.setProps({variant: 'warning'})
    expect(wrapper.classes()).toContain('text-dark')
    await wrapper.setProps({variant: 'info'})
    expect(wrapper.classes()).toContain('text-dark')
    await wrapper.setProps({variant: 'light'})
    expect(wrapper.classes()).toContain('text-dark')
    await wrapper.setProps({variant: 'primary'})
    expect(wrapper.classes()).not.toContain('text-dark')
  })

  it('contains class rounded-pill when prop pill', async () => {
    const wrapper = mount(BBadge, {
      props: {pill: true},
    })
    expect(wrapper.classes()).toContain('rounded-pill')
    await wrapper.setProps({pill: false})
    expect(wrapper.classes()).not.toContain('rounded-pill')
  })

  it('contains class text-decoration-none when prop to', async () => {
    const wrapper = mount(BBadge, {
      props: {to: '/abc'},
    })
    expect(wrapper.classes()).toContain('text-decoration-none')
    await wrapper.setProps({to: undefined})
    expect(wrapper.classes()).not.toContain('text-decoration-none')
  })

  it('contains class text-decoration-none when prop href', async () => {
    const wrapper = mount(BBadge, {
      props: {href: '/abc'},
    })
    expect(wrapper.classes()).toContain('text-decoration-none')
    await wrapper.setProps({href: undefined})
    expect(wrapper.classes()).not.toContain('text-decoration-none')
  })

  it('contains p-2 border border-light rounded-circle when prop dotIndicator', async () => {
    const wrapper = mount(BBadge, {
      props: {dotIndicator: true},
    })
    expect(wrapper.classes()).toContain('p-2')
    expect(wrapper.classes()).toContain('border')
    expect(wrapper.classes()).toContain('border-light')
    expect(wrapper.classes()).toContain('rounded-circle')
    await wrapper.setProps({dotIndicator: false})
    expect(wrapper.classes()).not.toContain('p-2')
    expect(wrapper.classes()).not.toContain('border')
    expect(wrapper.classes()).not.toContain('border-light')
    expect(wrapper.classes()).not.toContain('rounded-circle')
  })

  it('contains position-absolute top-0 start-100 translate-middle when prop dotIndicator', async () => {
    const wrapper = mount(BBadge, {
      props: {dotIndicator: true},
    })
    expect(wrapper.classes()).toContain('position-absolute')
    expect(wrapper.classes()).toContain('top-0')
    expect(wrapper.classes()).toContain('start-100')
    expect(wrapper.classes()).toContain('translate-middle')
    await wrapper.setProps({dotIndicator: false})
    expect(wrapper.classes()).not.toContain('position-absolute')
    expect(wrapper.classes()).not.toContain('top-0')
    expect(wrapper.classes()).not.toContain('start-100')
    expect(wrapper.classes()).not.toContain('translate-middle')
  })

  it('contains position-absolute top-0 start-100 translate-middle when prop textIndicator', async () => {
    const wrapper = mount(BBadge, {
      props: {textIndicator: true},
    })
    expect(wrapper.classes()).toContain('position-absolute')
    expect(wrapper.classes()).toContain('top-0')
    expect(wrapper.classes()).toContain('start-100')
    expect(wrapper.classes()).toContain('translate-middle')
    await wrapper.setProps({textIndicator: false})
    expect(wrapper.classes()).not.toContain('position-absolute')
    expect(wrapper.classes()).not.toContain('top-0')
    expect(wrapper.classes()).not.toContain('start-100')
    expect(wrapper.classes()).not.toContain('translate-middle')
  })
})
