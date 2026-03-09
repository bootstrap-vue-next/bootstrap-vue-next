import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BBadge from './BBadge.vue'
import BLink from '../BLink/BLink.vue'

describe('badge', () => {
  enableAutoUnmount(afterEach)

  describe('rendering', () => {
    it('has static class badge', () => {
      const wrapper = mount(BBadge)
      expect(wrapper.classes()).toContain('badge')
    })

    it('renders default slot content', () => {
      const wrapper = mount(BBadge, {
        slots: {default: 'badge text'},
      })
      expect(wrapper.text()).toBe('badge text')
    })

    it('renders HTML content in default slot', () => {
      const wrapper = mount(BBadge, {
        slots: {default: '<strong>bold</strong>'},
      })
      expect(wrapper.find('strong').exists()).toBe(true)
      expect(wrapper.find('strong').text()).toBe('bold')
    })

    it('renders empty when no slot content', () => {
      const wrapper = mount(BBadge)
      expect(wrapper.text()).toBe('')
    })
  })

  describe('tag', () => {
    it('is span by default', () => {
      const wrapper = mount(BBadge)
      expect(wrapper.element.tagName).toBe('SPAN')
    })

    it('renders custom tag from prop', () => {
      const wrapper = mount(BBadge, {
        props: {tag: 'div'},
      })
      expect(wrapper.element.tagName).toBe('DIV')
    })

    it('tag prop is reactive', async () => {
      const wrapper = mount(BBadge, {
        props: {tag: 'div'},
      })
      expect(wrapper.element.tagName).toBe('DIV')
      await wrapper.setProps({tag: 'h1'})
      expect(wrapper.element.tagName).toBe('H1')
    })

    it('retains badge class when tag changes', async () => {
      const wrapper = mount(BBadge, {
        props: {tag: 'div'},
      })
      expect(wrapper.classes()).toContain('badge')
      await wrapper.setProps({tag: 'h1'})
      expect(wrapper.classes()).toContain('badge')
    })
  })

  describe('link behavior', () => {
    it('renders as BLink when prop to is set', () => {
      const wrapper = mount(BBadge, {
        props: {to: '/abc'},
      })
      const $blink = wrapper.findComponent(BLink)
      expect($blink.exists()).toBe(true)
    })

    it('renders as BLink when prop href is set', () => {
      const wrapper = mount(BBadge, {
        props: {href: '/abc'},
      })
      const $blink = wrapper.findComponent(BLink)
      expect($blink.exists()).toBe(true)
    })

    it('does not render as BLink by default', () => {
      const wrapper = mount(BBadge)
      const $blink = wrapper.findComponent(BLink)
      expect($blink.exists()).toBe(false)
    })

    it('renders as BLink even when tag prop is also set', () => {
      const wrapper = mount(BBadge, {
        props: {href: '/abc', tag: 'div'},
      })
      const $blink = wrapper.findComponent(BLink)
      expect($blink.exists()).toBe(true)
      expect(wrapper.element.tagName).toBe('A')
    })

    it('renders as a element when href is set', () => {
      const wrapper = mount(BBadge, {
        props: {href: '/abc'},
      })
      expect(wrapper.element.tagName).toBe('A')
    })

    it('has class text-decoration-none when prop to is set', async () => {
      const wrapper = mount(BBadge, {
        props: {to: '/abc'},
      })
      expect(wrapper.classes()).toContain('text-decoration-none')
      await wrapper.setProps({to: undefined})
      expect(wrapper.classes()).not.toContain('text-decoration-none')
    })

    it('has class text-decoration-none when prop href is set', async () => {
      const wrapper = mount(BBadge, {
        props: {href: '/abc'},
      })
      expect(wrapper.classes()).toContain('text-decoration-none')
      await wrapper.setProps({href: undefined})
      expect(wrapper.classes()).not.toContain('text-decoration-none')
    })

    it('does not have class text-decoration-none when not a link', () => {
      const wrapper = mount(BBadge)
      expect(wrapper.classes()).not.toContain('text-decoration-none')
    })

    it('passes href prop to BLink', () => {
      const wrapper = mount(BBadge, {
        props: {href: '/test'},
      })
      const $blink = wrapper.findComponent(BLink)
      expect($blink.props('href')).toBe('/test')
    })

    it('passes to prop to BLink', () => {
      const wrapper = mount(BBadge, {
        props: {to: '/test'},
      })
      const $blink = wrapper.findComponent(BLink)
      expect($blink.props('to')).toBe('/test')
    })

    it('passes rel prop to BLink', () => {
      const wrapper = mount(BBadge, {
        props: {href: '/abc', rel: 'noopener'},
      })
      const $blink = wrapper.findComponent(BLink)
      expect($blink.props('rel')).toBe('noopener')
    })

    it('passes target prop to BLink', () => {
      const wrapper = mount(BBadge, {
        props: {href: '/abc', target: '_blank'},
      })
      const $blink = wrapper.findComponent(BLink)
      expect($blink.props('target')).toBe('_blank')
    })

    it('passes active prop to BLink', () => {
      const wrapper = mount(BBadge, {
        props: {href: '/abc', active: true},
      })
      const $blink = wrapper.findComponent(BLink)
      expect($blink.props('active')).toBe(true)
    })

    it('passes disabled prop to BLink', () => {
      const wrapper = mount(BBadge, {
        props: {href: '/abc', disabled: true},
      })
      const $blink = wrapper.findComponent(BLink)
      expect($blink.props('disabled')).toBe(true)
    })

    it('passes replace prop to BLink', () => {
      const wrapper = mount(BBadge, {
        props: {to: '/abc', replace: true},
      })
      const $blink = wrapper.findComponent(BLink)
      expect($blink.props('replace')).toBe(true)
    })

    it('passes stretched prop to BLink', () => {
      const wrapper = mount(BBadge, {
        props: {href: '/abc', stretched: true},
      })
      const $blink = wrapper.findComponent(BLink)
      expect($blink.props('stretched')).toBe(true)
    })

    it('passes opacity prop to BLink', () => {
      const wrapper = mount(BBadge, {
        props: {href: '/abc', opacity: '75'},
      })
      const $blink = wrapper.findComponent(BLink)
      expect($blink.props('opacity')).toBe('75')
    })

    it('passes opacityHover prop to BLink', () => {
      const wrapper = mount(BBadge, {
        props: {href: '/abc', opacityHover: '100'},
      })
      const $blink = wrapper.findComponent(BLink)
      expect($blink.props('opacityHover')).toBe('100')
    })
  })

  describe('variant classes', () => {
    it('has class text-bg-secondary by default', () => {
      const wrapper = mount(BBadge)
      expect(wrapper.classes()).toContain('text-bg-secondary')
    })

    it('has class text-bg-{type} when prop variant is set', async () => {
      const wrapper = mount(BBadge, {
        props: {variant: 'primary'},
      })
      expect(wrapper.classes()).toContain('text-bg-primary')
      await wrapper.setProps({variant: 'danger'})
      expect(wrapper.classes()).toContain('text-bg-danger')
      expect(wrapper.classes()).not.toContain('text-bg-primary')
    })

    it('does not have text-bg-{type} class when variant is null', () => {
      const wrapper = mount(BBadge, {
        props: {variant: null},
      })
      expect(wrapper.classes().some((c) => c.startsWith('text-bg-'))).toBe(false)
    })

    it('has class text-{type} when prop textVariant is set', async () => {
      const wrapper = mount(BBadge, {
        props: {textVariant: 'white'},
      })
      expect(wrapper.classes()).toContain('text-white')
      await wrapper.setProps({textVariant: 'dark'})
      expect(wrapper.classes()).toContain('text-dark')
      expect(wrapper.classes()).not.toContain('text-white')
    })

    it('does not have text-{type} class when textVariant is null', () => {
      const wrapper = mount(BBadge)
      expect(
        wrapper.classes().filter((c) => c.startsWith('text-') && !c.startsWith('text-bg-'))
      ).toEqual([])
    })

    it('has class bg-{type} when prop bgVariant is set', async () => {
      const wrapper = mount(BBadge, {
        props: {bgVariant: 'primary'},
      })
      expect(wrapper.classes()).toContain('bg-primary')
      await wrapper.setProps({bgVariant: 'warning'})
      expect(wrapper.classes()).toContain('bg-warning')
      expect(wrapper.classes()).not.toContain('bg-primary')
    })

    it('does not have bg-{type} class when bgVariant is null', () => {
      const wrapper = mount(BBadge)
      expect(wrapper.classes().some((c) => c.startsWith('bg-'))).toBe(false)
    })

    it('can combine variant with textVariant and bgVariant', () => {
      const wrapper = mount(BBadge, {
        props: {variant: 'primary', textVariant: 'white', bgVariant: 'dark'},
      })
      expect(wrapper.classes()).toContain('text-bg-primary')
      expect(wrapper.classes()).toContain('text-white')
      expect(wrapper.classes()).toContain('bg-dark')
    })

    it('retains badge class with all variant combinations', () => {
      const wrapper = mount(BBadge, {
        props: {variant: 'primary', textVariant: 'white', bgVariant: 'dark'},
      })
      expect(wrapper.classes()).toContain('badge')
    })
  })

  describe('active and disabled', () => {
    it('has class active when prop active is true', async () => {
      const wrapper = mount(BBadge, {
        props: {active: true},
      })
      expect(wrapper.classes()).toContain('active')
      await wrapper.setProps({active: false})
      expect(wrapper.classes()).not.toContain('active')
    })

    it('does not have class active by default', () => {
      const wrapper = mount(BBadge)
      expect(wrapper.classes()).not.toContain('active')
    })

    it('has class disabled when prop disabled is true', async () => {
      const wrapper = mount(BBadge, {
        props: {disabled: true},
      })
      expect(wrapper.classes()).toContain('disabled')
      await wrapper.setProps({disabled: false})
      expect(wrapper.classes()).not.toContain('disabled')
    })

    it('does not have class disabled by default', () => {
      const wrapper = mount(BBadge)
      expect(wrapper.classes()).not.toContain('disabled')
    })
  })

  describe('pill', () => {
    it('has class rounded-pill when prop pill is true', async () => {
      const wrapper = mount(BBadge, {
        props: {pill: true},
      })
      expect(wrapper.classes()).toContain('rounded-pill')
      await wrapper.setProps({pill: false})
      expect(wrapper.classes()).not.toContain('rounded-pill')
    })

    it('does not have class rounded-pill by default', () => {
      const wrapper = mount(BBadge)
      expect(wrapper.classes()).not.toContain('rounded-pill')
    })
  })

  describe('dotIndicator', () => {
    it('has dot indicator classes when dotIndicator is true', () => {
      const wrapper = mount(BBadge, {
        props: {dotIndicator: true},
      })
      expect(wrapper.classes()).toContain('p-2')
      expect(wrapper.classes()).toContain('border')
      expect(wrapper.classes()).toContain('border-light')
      expect(wrapper.classes()).toContain('rounded-circle')
    })

    it('removes dot indicator classes when dotIndicator becomes false', async () => {
      const wrapper = mount(BBadge, {
        props: {dotIndicator: true},
      })
      expect(wrapper.classes()).toContain('p-2')
      await wrapper.setProps({dotIndicator: false})
      expect(wrapper.classes()).not.toContain('p-2')
      expect(wrapper.classes()).not.toContain('border')
      expect(wrapper.classes()).not.toContain('border-light')
      expect(wrapper.classes()).not.toContain('rounded-circle')
    })

    it('does not have dot indicator classes by default', () => {
      const wrapper = mount(BBadge)
      expect(wrapper.classes()).not.toContain('p-2')
      expect(wrapper.classes()).not.toContain('rounded-circle')
    })

    it('has position classes when dotIndicator is true', () => {
      const wrapper = mount(BBadge, {
        props: {dotIndicator: true},
      })
      expect(wrapper.classes()).toContain('position-absolute')
      expect(wrapper.classes()).toContain('translate-middle')
    })

    it('defaults to top-end placement when dotIndicator is true without placement', () => {
      const wrapper = mount(BBadge, {
        props: {dotIndicator: true},
      })
      expect(wrapper.classes()).toContain('start-100')
      expect(wrapper.classes()).toContain('top-0')
    })

    it('removes position classes when dotIndicator becomes false', async () => {
      const wrapper = mount(BBadge, {
        props: {dotIndicator: true},
      })
      expect(wrapper.classes()).toContain('position-absolute')
      await wrapper.setProps({dotIndicator: false})
      expect(wrapper.classes()).not.toContain('position-absolute')
      expect(wrapper.classes()).not.toContain('translate-middle')
    })

    it('wraps slot content in span with visually-hidden class', () => {
      const wrapper = mount(BBadge, {
        props: {dotIndicator: true},
        slots: {default: 'hidden text'},
      })
      const span = wrapper.find('span.visually-hidden')
      expect(span.exists()).toBe(true)
      expect(span.text()).toBe('hidden text')
    })

    it('does not wrap slot content when dotIndicator is false', () => {
      const wrapper = mount(BBadge, {
        slots: {default: 'visible text'},
      })
      const span = wrapper.find('span.visually-hidden')
      expect(span.exists()).toBe(false)
      expect(wrapper.text()).toBe('visible text')
    })

    it('uses explicit placement when both dotIndicator and placement are set', () => {
      const wrapper = mount(BBadge, {
        props: {dotIndicator: true, placement: 'bottom-start'},
      })
      expect(wrapper.classes()).toContain('start-0')
      expect(wrapper.classes()).toContain('top-100')
      expect(wrapper.classes()).not.toContain('start-100')
    })
  })

  describe('placement', () => {
    it('does not have position classes by default', () => {
      const wrapper = mount(BBadge)
      expect(wrapper.classes()).not.toContain('position-absolute')
      expect(wrapper.classes()).not.toContain('translate-middle')
    })

    it('has position-absolute and translate-middle when placement is set', () => {
      const wrapper = mount(BBadge, {
        props: {placement: 'top-end'},
      })
      expect(wrapper.classes()).toContain('position-absolute')
      expect(wrapper.classes()).toContain('translate-middle')
    })

    it('has correct classes for placement top-start', () => {
      const wrapper = mount(BBadge, {
        props: {placement: 'top-start'},
      })
      expect(wrapper.classes()).toContain('start-0')
      expect(wrapper.classes()).toContain('top-0')
    })

    it('has correct classes for placement start', () => {
      const wrapper = mount(BBadge, {
        props: {placement: 'start'},
      })
      expect(wrapper.classes()).toContain('start-0')
      expect(wrapper.classes()).toContain('top-50')
    })

    it('has correct classes for placement bottom-start', () => {
      const wrapper = mount(BBadge, {
        props: {placement: 'bottom-start'},
      })
      expect(wrapper.classes()).toContain('start-0')
      expect(wrapper.classes()).toContain('top-100')
    })

    it('has correct classes for placement top', () => {
      const wrapper = mount(BBadge, {
        props: {placement: 'top'},
      })
      expect(wrapper.classes()).toContain('start-50')
      expect(wrapper.classes()).toContain('top-0')
    })

    it('has correct classes for placement bottom', () => {
      const wrapper = mount(BBadge, {
        props: {placement: 'bottom'},
      })
      expect(wrapper.classes()).toContain('start-50')
      expect(wrapper.classes()).toContain('top-100')
    })

    it('has correct classes for placement top-end', () => {
      const wrapper = mount(BBadge, {
        props: {placement: 'top-end'},
      })
      expect(wrapper.classes()).toContain('start-100')
      expect(wrapper.classes()).toContain('top-0')
    })

    it('has correct classes for placement end', () => {
      const wrapper = mount(BBadge, {
        props: {placement: 'end'},
      })
      expect(wrapper.classes()).toContain('start-100')
      expect(wrapper.classes()).toContain('top-50')
    })

    it('has correct classes for placement bottom-end', () => {
      const wrapper = mount(BBadge, {
        props: {placement: 'bottom-end'},
      })
      expect(wrapper.classes()).toContain('start-100')
      expect(wrapper.classes()).toContain('top-100')
    })

    it('placement is reactive', async () => {
      const wrapper = mount(BBadge, {
        props: {placement: 'top-start'},
      })
      expect(wrapper.classes()).toContain('start-0')
      expect(wrapper.classes()).toContain('top-0')
      await wrapper.setProps({placement: 'bottom-end'})
      expect(wrapper.classes()).toContain('start-100')
      expect(wrapper.classes()).toContain('top-100')
      expect(wrapper.classes()).not.toContain('start-0')
    })

    it('retains badge class with placement', () => {
      const wrapper = mount(BBadge, {
        props: {placement: 'top-end'},
      })
      expect(wrapper.classes()).toContain('badge')
    })
  })

  describe('combined props', () => {
    it('supports pill and variant together', () => {
      const wrapper = mount(BBadge, {
        props: {pill: true, variant: 'danger'},
      })
      expect(wrapper.classes()).toContain('rounded-pill')
      expect(wrapper.classes()).toContain('text-bg-danger')
      expect(wrapper.classes()).toContain('badge')
    })

    it('supports dotIndicator with variant', () => {
      const wrapper = mount(BBadge, {
        props: {dotIndicator: true, variant: 'danger'},
      })
      expect(wrapper.classes()).toContain('p-2')
      expect(wrapper.classes()).toContain('rounded-circle')
      expect(wrapper.classes()).toContain('text-bg-danger')
      expect(wrapper.classes()).toContain('position-absolute')
    })

    it('supports link with pill and variant', () => {
      const wrapper = mount(BBadge, {
        props: {href: '/abc', pill: true, variant: 'info'},
      })
      expect(wrapper.classes()).toContain('rounded-pill')
      expect(wrapper.classes()).toContain('text-bg-info')
      expect(wrapper.classes()).toContain('text-decoration-none')
      expect(wrapper.classes()).toContain('badge')
      const $blink = wrapper.findComponent(BLink)
      expect($blink.exists()).toBe(true)
    })

    it('supports placement with variant and pill', () => {
      const wrapper = mount(BBadge, {
        props: {placement: 'top-end', variant: 'primary', pill: true},
      })
      expect(wrapper.classes()).toContain('position-absolute')
      expect(wrapper.classes()).toContain('translate-middle')
      expect(wrapper.classes()).toContain('start-100')
      expect(wrapper.classes()).toContain('top-0')
      expect(wrapper.classes()).toContain('text-bg-primary')
      expect(wrapper.classes()).toContain('rounded-pill')
      expect(wrapper.classes()).toContain('badge')
    })
  })
})
