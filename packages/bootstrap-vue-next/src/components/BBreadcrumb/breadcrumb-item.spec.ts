import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it, vi} from 'vitest'
import BBreadcrumbItem from './BBreadcrumbItem.vue'
import BLink from '../BLink/BLink.vue'

describe('breadcrumb-item', () => {
  enableAutoUnmount(afterEach)

  it('has static class breadcrumb-item', () => {
    const wrapper = mount(BBreadcrumbItem)
    expect(wrapper.classes()).toContain('breadcrumb-item')
  })

  it('root element is a li element', () => {
    const wrapper = mount(BBreadcrumbItem)
    expect(wrapper.element.tagName).toBe('LI')
  })

  it('has class active when prop active', async () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true},
    })
    expect(wrapper.classes()).toContain('active')
    await wrapper.setProps({active: false})
    expect(wrapper.classes()).not.toContain('active')
  })

  it('does not have class active by default', () => {
    const wrapper = mount(BBreadcrumbItem)
    expect(wrapper.classes()).not.toContain('active')
  })

  it('contains a span child when prop active', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true},
    })
    const $span = wrapper.find('span')
    expect($span.exists()).toBe(true)
  })

  it('does not contain a span child when not active', () => {
    const wrapper = mount(BBreadcrumbItem)
    const $span = wrapper.find('span')
    expect($span.exists()).toBe(false)
  })

  it('contains a blink child by default', () => {
    const wrapper = mount(BBreadcrumbItem)
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(true)
  })

  it('does not contain a blink child when active', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true},
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(false)
  })

  it('switches from blink to span when active changes to true', async () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: false},
    })
    expect(wrapper.findComponent(BLink).exists()).toBe(true)
    expect(wrapper.find('span').exists()).toBe(false)
    await wrapper.setProps({active: true})
    expect(wrapper.findComponent(BLink).exists()).toBe(false)
    expect(wrapper.find('span').exists()).toBe(true)
  })

  it('switches from span to blink when active changes to false', async () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true},
    })
    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.findComponent(BLink).exists()).toBe(false)
    await wrapper.setProps({active: false})
    expect(wrapper.find('span').exists()).toBe(false)
    expect(wrapper.findComponent(BLink).exists()).toBe(true)
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

  it('has default aria-current of location when active', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true},
    })
    const $span = wrapper.get('span')
    expect($span.attributes('aria-current')).toBe('location')
  })

  it('does not have aria-current when not active', () => {
    const wrapper = mount(BBreadcrumbItem)
    const $blink = wrapper.getComponent(BLink)
    expect($blink.attributes('aria-current')).toBeUndefined()
  })

  it('supports aria-current value page', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true, ariaCurrent: 'page'},
    })
    const $span = wrapper.get('span')
    expect($span.attributes('aria-current')).toBe('page')
  })

  it('supports aria-current value true', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true, ariaCurrent: 'true'},
    })
    const $span = wrapper.get('span')
    expect($span.attributes('aria-current')).toBe('true')
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

  it('does not emit click when both active and disabled', async () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true, disabled: true},
    })
    const $span = wrapper.get('span')
    await $span.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('calls preventDefault when disabled', async () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {disabled: true},
    })
    const $blink = wrapper.getComponent(BLink)
    const event = new MouseEvent('click')
    const spy = vi.spyOn(event, 'preventDefault')
    await $blink.element.dispatchEvent(event)
    expect(spy).toHaveBeenCalled()
  })

  it('calls stopImmediatePropagation when disabled', async () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {disabled: true},
    })
    const $blink = wrapper.getComponent(BLink)
    const event = new MouseEvent('click')
    const spy = vi.spyOn(event, 'stopImmediatePropagation')
    await $blink.element.dispatchEvent(event)
    expect(spy).toHaveBeenCalled()
  })

  it('calls preventDefault when active', async () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true},
    })
    const $span = wrapper.get('span')
    const event = new MouseEvent('click')
    const spy = vi.spyOn(event, 'preventDefault')
    await $span.element.dispatchEvent(event)
    expect(spy).toHaveBeenCalled()
  })

  it('calls stopImmediatePropagation when active', async () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true},
    })
    const $span = wrapper.get('span')
    const event = new MouseEvent('click')
    const spy = vi.spyOn(event, 'stopImmediatePropagation')
    await $span.element.dispatchEvent(event)
    expect(spy).toHaveBeenCalled()
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

  it('renders slot over prop when child is span', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true, text: 'props'},
      slots: {default: 'slots'},
    })
    const $span = wrapper.get('span')
    expect($span.text()).toBe('slots')
  })

  it('renders default slot in child when child is blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      slots: {default: 'foobar'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.text()).toBe('foobar')
  })

  it('renders prop text in child when child is blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {text: 'foobar'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.text()).toBe('foobar')
  })

  it('renders slot over prop when child is blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {text: 'props'},
      slots: {default: 'slots'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.text()).toBe('slots')
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

  it('does not give prop href to span when active', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true, href: '/foo'},
    })
    const $span = wrapper.get('span')
    expect($span.attributes('href')).toBeUndefined()
  })

  it('does not give prop to to span when active', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: true, to: '/foo'},
    })
    const $span = wrapper.get('span')
    expect($span.attributes('to')).toBeUndefined()
  })

  it('gives prop active to child when blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: false},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('active')).toBe(false)
  })

  it('gives prop disabled to child when blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {active: false, disabled: true},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('disabled')).toBe(true)
  })

  it('gives prop activeClass to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {activeClass: 'foobar'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('activeClass')).toBe('foobar')
  })

  it('gives prop href to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {href: '/foo'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('href')).toBe('/foo')
  })

  it('gives prop to to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {to: '/foo'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('to')).toBe('/foo')
  })

  it('gives prop target to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {target: '_blank'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('target')).toBe('_blank')
  })

  it('gives prop rel to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {rel: 'noopener'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('rel')).toBe('noopener')
  })

  it('gives prop exactActiveClass to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {exactActiveClass: 'exact-active'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('exactActiveClass')).toBe('exact-active')
  })

  it('gives prop stretched to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {stretched: true},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('stretched')).toBe(true)
  })

  it('gives prop variant to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {variant: 'primary'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('variant')).toBe('primary')
  })

  it('gives prop opacity to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {opacity: 75},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('opacity')).toBe(75)
  })

  it('gives prop opacityHover to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {opacityHover: 100},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('opacityHover')).toBe(100)
  })

  it('gives prop icon to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {icon: true},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('icon')).toBe(true)
  })

  it('gives prop replace to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {replace: true},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('replace')).toBe(true)
  })

  it('gives prop routerComponentName to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {routerComponentName: 'NuxtLink'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('routerComponentName')).toBe('NuxtLink')
  })

  it('gives prop underlineOffset to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {underlineOffset: 3},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('underlineOffset')).toBe(3)
  })

  it('gives prop underlineOffsetHover to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {underlineOffsetHover: 3},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('underlineOffsetHover')).toBe(3)
  })

  it('gives prop underlineOpacity to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {underlineOpacity: 50},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('underlineOpacity')).toBe(50)
  })

  it('gives prop underlineOpacityHover to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {underlineOpacityHover: 100},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('underlineOpacityHover')).toBe(100)
  })

  it('gives prop underlineVariant to blink', () => {
    const wrapper = mount(BBreadcrumbItem, {
      props: {underlineVariant: 'primary'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('underlineVariant')).toBe('primary')
  })
})
