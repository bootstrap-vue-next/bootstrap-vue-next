import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it, vi} from 'vitest'
import BLink from './BLink.vue'
import {createRouter, createWebHistory} from 'vue-router'
import {defineComponent, h, markRaw, ref} from 'vue'
import {collapseInjectionKey, navbarInjectionKey} from '../../utils/keys'

describe('link', () => {
  enableAutoUnmount(afterEach)

  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {path: '/', component: {template: '<div>Home</div>'}},
      {path: '/about', component: {template: '<div>About</div>'}},
    ],
  })

  // --- Rendering ---

  it('renders an anchor tag by default', () => {
    const wrapper = mount(BLink, {
      global: {plugins: [router]},
    })
    expect(wrapper.element.tagName).toBe('A')
  })

  it('renders default slot content', () => {
    const wrapper = mount(BLink, {
      slots: {default: 'Click me'},
      global: {plugins: [router]},
    })
    expect(wrapper.text()).toBe('Click me')
  })

  it('renders default slot with html content', () => {
    const wrapper = mount(BLink, {
      slots: {default: '<span class="inner">Link text</span>'},
      global: {plugins: [router]},
    })
    const inner = wrapper.find('.inner')
    expect(inner.exists()).toBe(true)
    expect(inner.text()).toBe('Link text')
  })

  // --- href prop ---

  it('has correct href when using just href', () => {
    const wrapper = mount(BLink, {
      props: {href: 'https://www.google.com'},
      global: {plugins: [router]},
    })
    expect(wrapper.attributes('href')).toBe('https://www.google.com')
  })

  it('defaults href to # when no href or to', () => {
    const wrapper = mount(BLink, {
      global: {plugins: [router]},
    })
    expect(wrapper.attributes('href')).toBe('#')
  })

  it('updates href reactively', async () => {
    const wrapper = mount(BLink, {
      props: {href: '/page1'},
      global: {plugins: [router]},
    })
    expect(wrapper.attributes('href')).toBe('/page1')
    await wrapper.setProps({href: '/page2'})
    expect(wrapper.attributes('href')).toBe('/page2')
  })

  // --- to prop ---

  it('has correct href when using just to', () => {
    const wrapper = mount(BLink, {
      props: {to: '/'},
      global: {plugins: [router]},
    })
    expect(wrapper.attributes('href')).toBe('/')
  })

  it('renders as an anchor when disabled even with to prop', () => {
    const wrapper = mount(BLink, {
      props: {to: '/', disabled: true},
      global: {plugins: [router]},
    })
    expect(wrapper.element.tagName).toBe('A')
  })

  // --- disabled state ---

  it('has class disabled when disabled prop is true', () => {
    const wrapper = mount(BLink, {
      props: {disabled: true},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).toContain('disabled')
  })

  it('does not have class disabled when disabled prop is false', () => {
    const wrapper = mount(BLink, {
      props: {disabled: false},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).not.toContain('disabled')
  })

  it('has aria-disabled true when disabled', () => {
    const wrapper = mount(BLink, {
      props: {disabled: true},
      global: {plugins: [router]},
    })
    expect(wrapper.attributes('aria-disabled')).toBe('true')
  })

  it('does not have aria-disabled when not disabled', () => {
    const wrapper = mount(BLink, {
      props: {disabled: false},
      global: {plugins: [router]},
    })
    expect(wrapper.attributes('aria-disabled')).toBeUndefined()
  })

  it('has tabindex -1 when disabled', () => {
    const wrapper = mount(BLink, {
      props: {disabled: true},
      global: {plugins: [router]},
    })
    expect(wrapper.attributes('tabindex')).toBe('-1')
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(BLink, {
      props: {disabled: true},
      global: {plugins: [router]},
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('toggles disabled state reactively', async () => {
    const wrapper = mount(BLink, {
      props: {disabled: false},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).not.toContain('disabled')
    expect(wrapper.attributes('aria-disabled')).toBeUndefined()
    await wrapper.setProps({disabled: true})
    expect(wrapper.classes()).toContain('disabled')
    expect(wrapper.attributes('aria-disabled')).toBe('true')
  })

  // --- active state ---

  it('has class active when active prop is true', () => {
    const wrapper = mount(BLink, {
      props: {active: true},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).toContain('active')
  })

  it('does not have class active when active prop is false', () => {
    const wrapper = mount(BLink, {
      props: {active: false},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).not.toContain('active')
  })

  it('toggles active class reactively', async () => {
    const wrapper = mount(BLink, {
      props: {active: false},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).not.toContain('active')
    await wrapper.setProps({active: true})
    expect(wrapper.classes()).toContain('active')
  })

  // --- stretched-link ---

  it('has class stretched-link when stretched prop is true', () => {
    const wrapper = mount(BLink, {
      props: {stretched: true},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).toContain('stretched-link')
  })

  it('does not have class stretched-link when stretched prop is false', () => {
    const wrapper = mount(BLink, {
      props: {stretched: false},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).not.toContain('stretched-link')
  })

  it('toggles stretched-link class reactively', async () => {
    const wrapper = mount(BLink, {
      props: {stretched: false},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).not.toContain('stretched-link')
    await wrapper.setProps({stretched: true})
    expect(wrapper.classes()).toContain('stretched-link')
  })

  // --- variant ---

  it('has class link-{variant} when variant prop is set', () => {
    const wrapper = mount(BLink, {
      props: {variant: 'primary'},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).toContain('link-primary')
  })

  it('does not have link-{variant} class when variant is null', () => {
    const wrapper = mount(BLink, {
      props: {variant: null},
      global: {plugins: [router]},
    })
    expect(wrapper.classes().some((c) => c.startsWith('link-'))).toBe(false)
  })

  it('changes variant class reactively', async () => {
    const wrapper = mount(BLink, {
      props: {variant: 'primary'},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).toContain('link-primary')
    await wrapper.setProps({variant: 'danger'})
    expect(wrapper.classes()).toContain('link-danger')
    expect(wrapper.classes()).not.toContain('link-primary')
  })

  // --- opacity ---

  it('has class link-opacity-{value} when opacity is set', () => {
    const wrapper = mount(BLink, {
      props: {opacity: 75 as const},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).toContain('link-opacity-75')
  })

  it('has class link-opacity-{value}-hover when opacityHover is set', () => {
    const wrapper = mount(BLink, {
      props: {opacityHover: 100 as const},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).toContain('link-opacity-100-hover')
  })

  // --- underline classes ---

  it('has class link-underline-{variant} when underlineVariant is set', () => {
    const wrapper = mount(BLink, {
      props: {underlineVariant: 'primary'},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).toContain('link-underline-primary')
  })

  it('has class link-offset-{value} when underlineOffset is set', () => {
    const wrapper = mount(BLink, {
      props: {underlineOffset: 3 as const},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).toContain('link-offset-3')
  })

  it('has class link-offset-{value}-hover when underlineOffsetHover is set', () => {
    const wrapper = mount(BLink, {
      props: {underlineOffsetHover: 2 as const},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).toContain('link-offset-2-hover')
  })

  it('has class link-underline-opacity-{value} when underlineOpacity is set', () => {
    const wrapper = mount(BLink, {
      props: {underlineOpacity: 50 as const},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).toContain('link-underline-opacity-50')
    expect(wrapper.classes()).toContain('link-underline')
  })

  it('has class link-underline-opacity-{value}-hover when underlineOpacityHover is set', () => {
    const wrapper = mount(BLink, {
      props: {underlineOpacityHover: 75 as const},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).toContain('link-underline-opacity-75-hover')
    expect(wrapper.classes()).toContain('link-underline')
  })

  it('has link-underline class when underlineOpacity is set without underlineVariant', () => {
    const wrapper = mount(BLink, {
      props: {underlineOpacity: 25 as const, underlineVariant: null},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).toContain('link-underline')
  })

  it('does not have link-underline class when underlineVariant is set', () => {
    const wrapper = mount(BLink, {
      props: {underlineVariant: 'primary'},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).not.toContain('link-underline')
  })

  // --- icon ---

  it('has class icon-link when icon prop is true', () => {
    const wrapper = mount(BLink, {
      props: {icon: true},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).toContain('icon-link')
  })

  it('does not have class icon-link when icon prop is false', () => {
    const wrapper = mount(BLink, {
      props: {icon: false},
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).not.toContain('icon-link')
  })

  // --- rel ---

  it('does not set rel when target is not _blank', () => {
    const wrapper = mount(BLink, {
      props: {href: '/foo', target: '_self'},
      global: {plugins: [router]},
    })
    expect(wrapper.attributes('rel')).toBeUndefined()
  })

  it('does not set rel when target is _blank and noRel is false and no rel prop', () => {
    const wrapper = mount(BLink, {
      props: {href: '/foo', target: '_blank'},
      global: {plugins: [router]},
    })
    expect(wrapper.attributes('rel')).toBeUndefined()
  })

  it('uses rel prop value when target is _blank and rel is provided', () => {
    const wrapper = mount(BLink, {
      props: {href: '/foo', target: '_blank', rel: 'nofollow'},
      global: {plugins: [router]},
    })
    expect(wrapper.attributes('rel')).toBe('nofollow')
  })

  it('sets rel to noopener when target is _blank and noRel is true and no rel provided', () => {
    const wrapper = mount(BLink, {
      props: {href: '/foo', target: '_blank', noRel: true},
      global: {plugins: [router]},
    })
    expect(wrapper.attributes('rel')).toBe('noopener')
  })

  // --- target ---

  it('renders target attribute when target prop is set', () => {
    const wrapper = mount(BLink, {
      props: {href: '/foo', target: '_blank'},
      global: {plugins: [router]},
    })
    expect(wrapper.attributes('target')).toBe('_blank')
  })

  it('does not render target attribute when not set', () => {
    const wrapper = mount(BLink, {
      props: {href: '/foo'},
      global: {plugins: [router]},
    })
    expect(wrapper.attributes('target')).toBeUndefined()
  })

  // --- tabindex ---

  it('does not render tabindex by default', () => {
    const wrapper = mount(BLink, {
      global: {plugins: [router]},
    })
    expect(wrapper.attributes('tabindex')).toBeUndefined()
  })

  it('passes through tabindex attribute', () => {
    const wrapper = mount(BLink, {
      attrs: {tabindex: '0'},
      global: {plugins: [router]},
    })
    expect(wrapper.attributes('tabindex')).toBe('0')
  })

  it('has tabindex -1 when disabled regardless of explicit tabindex', () => {
    const wrapper = mount(BLink, {
      props: {disabled: true},
      global: {plugins: [router]},
    })
    expect(wrapper.attributes('tabindex')).toBe('-1')
  })

  // --- click events ---

  it('emits click event when clicked', async () => {
    const wrapper = mount(BLink, {
      props: {href: '/foo'},
      global: {plugins: [router]},
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeDefined()
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('click event payload is a MouseEvent', async () => {
    const wrapper = mount(BLink, {
      props: {href: '/foo'},
      global: {plugins: [router]},
    })
    await wrapper.trigger('click')
    const emitted = wrapper.emitted('click')!
    expect(emitted[0][0]).toBeInstanceOf(MouseEvent)
  })

  it('emits multiple click events', async () => {
    const wrapper = mount(BLink, {
      props: {href: '/foo'},
      global: {plugins: [router]},
    })
    await wrapper.trigger('click')
    await wrapper.trigger('click')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(3)
  })

  // --- collapse/navbar injection ---

  it('calls collapse hide when inside a nav collapse without navbar', async () => {
    const hideFn = vi.fn()
    const wrapper = mount(BLink, {
      props: {href: '/foo'},
      global: {
        plugins: [router],
        provide: {
          [collapseInjectionKey as unknown as symbol]: {
            isNav: ref(true),
            hide: hideFn,
          },
        },
      },
    })
    await wrapper.trigger('click')
    expect(hideFn).toHaveBeenCalledOnce()
  })

  it('does not call collapse hide when not in a nav collapse', async () => {
    const hideFn = vi.fn()
    const wrapper = mount(BLink, {
      props: {href: '/foo'},
      global: {
        plugins: [router],
        provide: {
          [collapseInjectionKey as unknown as symbol]: {
            isNav: ref(false),
            hide: hideFn,
          },
        },
      },
    })
    await wrapper.trigger('click')
    expect(hideFn).not.toHaveBeenCalled()
  })

  it('calls collapse hide when inside navbar with noAutoClose false', async () => {
    const hideFn = vi.fn()
    const wrapper = mount(BLink, {
      props: {href: '/foo'},
      global: {
        plugins: [router],
        provide: {
          [collapseInjectionKey as unknown as symbol]: {
            isNav: ref(true),
            hide: hideFn,
          },
          [navbarInjectionKey as unknown as symbol]: {
            noAutoClose: ref(false),
          },
        },
      },
    })
    await wrapper.trigger('click')
    expect(hideFn).toHaveBeenCalledOnce()
  })

  it('does not call collapse hide when inside navbar with noAutoClose true', async () => {
    const hideFn = vi.fn()
    const wrapper = mount(BLink, {
      props: {href: '/foo'},
      global: {
        plugins: [router],
        provide: {
          [collapseInjectionKey as unknown as symbol]: {
            isNav: ref(true),
            hide: hideFn,
          },
          [navbarInjectionKey as unknown as symbol]: {
            noAutoClose: ref(true),
          },
        },
      },
    })
    await wrapper.trigger('click')
    expect(hideFn).not.toHaveBeenCalled()
  })

  it('does not call collapse hide when disabled', async () => {
    const hideFn = vi.fn()
    const wrapper = mount(BLink, {
      props: {href: '/foo', disabled: true},
      global: {
        plugins: [router],
        provide: {
          [collapseInjectionKey as unknown as symbol]: {
            isNav: ref(true),
            hide: hideFn,
          },
        },
      },
    })
    await wrapper.trigger('click')
    expect(hideFn).not.toHaveBeenCalled()
  })

  // --- router component resolution ---

  it('accepts custom component for routerComponentName', () => {
    const CustomRouterLink = defineComponent({
      name: 'CustomRouterLink',
      props: {
        to: {type: [String, Object], required: true},
      },
      setup(props, {slots}) {
        return () => h('a', {href: String(props.to)}, slots.default?.())
      },
    })

    const wrapper = mount(BLink, {
      props: {
        to: '/custom',
        routerComponentName: markRaw(CustomRouterLink),
      },
      global: {plugins: [router]},
    })

    expect(wrapper.attributes('href')).toBe('/custom')
  })

  it('renders NuxtLink when routerComponentName is set to "NuxtLink"', () => {
    const NuxtLink = defineComponent({
      name: 'NuxtLink',
      props: {
        to: {type: [String, Object], required: true},
      },
      setup(props, {slots}) {
        return () => h('a', {'href': String(props.to), 'data-nuxt-link': 'true'}, slots.default?.())
      },
    })

    const wrapper = mount(BLink, {
      props: {
        to: '/nuxt-page',
        routerComponentName: 'NuxtLink',
      },
      global: {
        plugins: [router],
        components: {NuxtLink},
      },
    })

    expect(wrapper.attributes('href')).toBe('/nuxt-page')
    expect(wrapper.attributes('data-nuxt-link')).toBe('true')
  })

  it('falls back to anchor tag when routerComponentName resolves to unknown string', () => {
    const wrapper = mount(BLink, {
      props: {
        to: '/unknown',
        routerComponentName: 'NonExistentComponent',
      },
      global: {plugins: [router]},
    })
    expect(wrapper.element.tagName).toBe('A')
  })

  // --- activeClass / exactActiveClass ---

  it('has default activeClass of router-link-active', () => {
    const wrapper = mount(BLink, {
      props: {to: '/'},
      global: {plugins: [router]},
    })
    // The activeClass prop defaults to 'router-link-active'
    // It will be applied as a class only when the route is active
    expect(wrapper.props('activeClass')).toBe('router-link-active')
  })

  it('has default exactActiveClass of router-link-exact-active', () => {
    const wrapper = mount(BLink, {
      props: {to: '/'},
      global: {plugins: [router]},
    })
    expect(wrapper.props('exactActiveClass')).toBe('router-link-exact-active')
  })

  // --- combined class scenarios ---

  it('applies multiple classes together correctly', () => {
    const wrapper = mount(BLink, {
      props: {
        active: true,
        disabled: true,
        stretched: true,
        variant: 'primary',
        icon: true,
      },
      global: {plugins: [router]},
    })
    expect(wrapper.classes()).toContain('active')
    expect(wrapper.classes()).toContain('disabled')
    expect(wrapper.classes()).toContain('stretched-link')
    expect(wrapper.classes()).toContain('link-primary')
    expect(wrapper.classes()).toContain('icon-link')
  })

  // --- replace prop ---

  it('accepts replace prop without error', () => {
    const wrapper = mount(BLink, {
      props: {to: '/', replace: true},
      global: {plugins: [router]},
    })
    expect(wrapper.exists()).toBe(true)
  })
})
