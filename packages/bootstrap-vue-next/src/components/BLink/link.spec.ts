import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BLink from './BLink.vue'
import BButton from '../BButton/BButton.vue'
import BBadge from '../BBadge/BBadge.vue'
import {createRouter, createWebHistory} from 'vue-router'
import {defineComponent, h, markRaw, ref} from 'vue'
import {defaultsKey} from '../../utils/keys'

describe('link', () => {
  enableAutoUnmount(afterEach)

  const router = createRouter({
    history: createWebHistory(),
    routes: [],
  })

  it('has correct href when using just href', () => {
    const wrapper = mount(BLink, {
      props: {
        href: 'https://www.google.com',
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.attributes('href')).toBe('https://www.google.com')
  })

  it('has correct href when using just to', () => {
    const wrapper = mount(BLink, {
      props: {
        to: '/',
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.attributes('href')).toBe('/')
  })

  it('accepts custom component for routerComponentName', () => {
    // Create a mock router component
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
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.attributes('href')).toBe('/custom')
  })

  it('renders NuxtLink when routerComponentName is set to "NuxtLink"', () => {
    // Mock NuxtLink component
    const NuxtLink = defineComponent({
      name: 'NuxtLink',
      props: {
        to: {type: [String, Object], required: true},
      },
      setup(props, {slots}) {
        return () => h('a', {'href': String(props.to), 'data-nuxt-link': 'true'}, slots.default?.())
      },
    })

    // Register NuxtLink globally
    const wrapper = mount(BLink, {
      props: {
        to: '/nuxt-page',
        routerComponentName: 'NuxtLink',
      },
      global: {
        plugins: [router],
        components: {
          NuxtLink,
        },
      },
    })

    expect(wrapper.attributes('href')).toBe('/nuxt-page')
    expect(wrapper.attributes('data-nuxt-link')).toBe('true')
  })

  it('does not apply router active class to href-only link when router is present', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/external-page',
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.classes()).not.toContain('router-link-active')
    expect(wrapper.classes()).not.toContain('router-link-exact-active')
  })

  it('does not call router navigate on click for href-only link', async () => {
    const wrapper = mount(BLink, {
      props: {
        href: 'https://www.example.com',
      },
      global: {
        plugins: [router],
      },
    })
    // The link should render as a plain <a> tag with the href
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBe('https://www.example.com')
  })

  it('renders as an a tag', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.element.tagName).toBe('A')
  })

  it('renders default slot content', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
      },
      slots: {default: 'foobar'},
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(BLink, {
      props: {
        href: 'https://www.example.com',
      },
      global: {
        plugins: [router],
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('click event value is MouseEvent', async () => {
    const wrapper = mount(BLink, {
      props: {
        href: 'https://www.example.com',
      },
      global: {
        plugins: [router],
      },
    })
    await wrapper.trigger('click')
    const $emitted = wrapper.emitted('click') ?? []
    expect($emitted[0][0] instanceof MouseEvent).toBe(true)
  })

  it('has class active when prop active', async () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        active: true,
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.classes()).toContain('active')
    await wrapper.setProps({active: false})
    expect(wrapper.classes()).not.toContain('active')
  })

  it('has class stretched-link when prop stretched', async () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        stretched: true,
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.classes()).toContain('stretched-link')
    await wrapper.setProps({stretched: false})
    expect(wrapper.classes()).not.toContain('stretched-link')
  })

  it('has class disabled when prop disabled', async () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        disabled: true,
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.classes()).toContain('disabled')
    await wrapper.setProps({disabled: false})
    expect(wrapper.classes()).not.toContain('disabled')
  })

  it('has ariadisabled attribute when disabled', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        disabled: true,
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.attributes('ariadisabled')).toBe('true')
  })

  it('does not have ariadisabled attribute when not disabled', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        disabled: false,
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.attributes('ariadisabled')).toBeUndefined()
  })

  it('has tabindex -1 when disabled', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        disabled: true,
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.attributes('tabindex')).toBe('-1')
  })

  it('does not have tabindex when not disabled and no tabindex prop', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.attributes('tabindex')).toBeUndefined()
  })

  it('still emits click when disabled', async () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        disabled: true,
      },
      global: {
        plugins: [router],
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('renders as a tag for external link with http://', () => {
    const wrapper = mount(BLink, {
      props: {
        to: 'http://www.example.com',
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBe('http://www.example.com')
  })

  it('renders as a tag for external link with https://', () => {
    const wrapper = mount(BLink, {
      props: {
        to: 'https://www.example.com',
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBe('https://www.example.com')
  })

  it('renders as a tag for external link with //', () => {
    const wrapper = mount(BLink, {
      props: {
        to: '//www.example.com',
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBe('//www.example.com')
  })

  it('has rel noopener noreferrer for external link', () => {
    const wrapper = mount(BLink, {
      props: {
        href: 'https://www.example.com',
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.attributes('rel')).toBe('noopener noreferrer')
  })

  it('has rel noopener noreferrer when target is set', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        target: '_blank',
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.attributes('rel')).toBe('noopener noreferrer')
  })

  it('has custom rel when prop rel is set', () => {
    const wrapper = mount(BLink, {
      props: {
        href: 'https://www.example.com',
        rel: 'nofollow',
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.attributes('rel')).toBe('nofollow')
  })

  it('has no rel when prop noRel is true', () => {
    const wrapper = mount(BLink, {
      props: {
        href: 'https://www.example.com',
        noRel: true,
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.attributes('rel')).toBeUndefined()
  })

  it('has no rel for internal link without target', () => {
    const wrapper = mount(BLink, {
      props: {
        to: '/page',
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.attributes('rel')).toBeUndefined()
  })

  it('has target attribute when prop target is set', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        target: '_blank',
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.attributes('target')).toBe('_blank')
  })

  it('has class link-{variant} when prop variant is set', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        variant: 'primary',
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.classes()).toContain('link-primary')
  })

  it('does not have link-{variant} class when variant is null', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        variant: null,
      },
      global: {
        plugins: [router],
      },
    })
    const linkClasses = wrapper.classes().filter((c) => c.startsWith('link-'))
    expect(linkClasses).toHaveLength(0)
  })

  it('has class link-opacity-{opacity} when prop opacity is set', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        opacity: 75,
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.classes()).toContain('link-opacity-75')
  })

  it('has class link-opacity-{opacityHover}-hover when prop opacityHover is set', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        opacityHover: 50,
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.classes()).toContain('link-opacity-50-hover')
  })

  it('has class icon-link when prop icon is true', async () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        icon: true,
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.classes()).toContain('icon-link')
    await wrapper.setProps({icon: false})
    expect(wrapper.classes()).not.toContain('icon-link')
  })

  it('has class link-underline-{underlineVariant} when prop underlineVariant is set', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        underlineVariant: 'danger',
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.classes()).toContain('link-underline-danger')
  })

  it('has class link-offset-{underlineOffset} when prop underlineOffset is set', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        underlineOffset: 3,
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.classes()).toContain('link-offset-3')
  })

  it('has class link-offset-{underlineOffsetHover}-hover when prop underlineOffsetHover is set', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        underlineOffsetHover: 2,
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.classes()).toContain('link-offset-2-hover')
  })

  it('has class link-underline-opacity-{underlineOpacity} when prop underlineOpacity is set', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        underlineOpacity: 50,
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.classes()).toContain('link-underline-opacity-50')
    expect(wrapper.classes()).toContain('link-underline')
  })

  it('has class link-underline-opacity-{underlineOpacityHover}-hover when prop underlineOpacityHover is set', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        underlineOpacityHover: 75,
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.classes()).toContain('link-underline-opacity-75-hover')
    expect(wrapper.classes()).toContain('link-underline')
  })

  it('does not have link-underline class when underlineVariant is not null', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        underlineVariant: 'primary',
        underlineOpacity: 50,
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.classes()).not.toContain('link-underline')
    expect(wrapper.classes()).toContain('link-underline-primary')
    expect(wrapper.classes()).toContain('link-underline-opacity-50')
  })

  it('passes through non-class attributes', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
      },
      attrs: {
        'data-testid': 'my-link',
        'id': 'link-1',
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.attributes('data-testid')).toBe('my-link')
    expect(wrapper.attributes('id')).toBe('link-1')
  })

  it('renders as a tag when disabled even with to prop', () => {
    const wrapper = mount(BLink, {
      props: {
        to: '/page',
        disabled: true,
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.classes()).toContain('disabled')
    expect(wrapper.attributes('ariadisabled')).toBe('true')
  })

  it('renders slot content for router link', () => {
    const wrapper = mount(BLink, {
      props: {
        to: '/page',
      },
      slots: {default: 'router link text'},
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.text()).toBe('router link text')
  })

  it('emits click for router link', async () => {
    const wrapper = mount(BLink, {
      props: {
        to: '/page',
      },
      global: {
        plugins: [router],
      },
    })
    await wrapper.find('a').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('has rel noopener noreferrer for external to link with https://', () => {
    const wrapper = mount(BLink, {
      props: {
        to: 'https://www.example.com',
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.attributes('rel')).toBe('noopener noreferrer')
  })

  it('uses router-link when to prop is an internal path', () => {
    const wrapper = mount(BLink, {
      props: {
        to: '/internal-page',
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.attributes('href')).toBe('/internal-page')
  })

  it('renders with multiple styling classes combined', () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/page',
        variant: 'primary',
        opacity: 75,
        opacityHover: 100,
        active: true,
        stretched: true,
      },
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.classes()).toContain('link-primary')
    expect(wrapper.classes()).toContain('link-opacity-75')
    expect(wrapper.classes()).toContain('link-opacity-100-hover')
    expect(wrapper.classes()).toContain('active')
    expect(wrapper.classes()).toContain('stretched-link')
  })

  it('uses custom component routerComponentName passed through BButton', () => {
    const CustomRouterLink = markRaw(
      defineComponent({
        name: 'CustomRouterLink',
        props: {
          to: {type: [String, Object], default: ''},
          href: {type: String, default: undefined},
        },
        setup(props, {slots}) {
          return () =>
            h('a', {href: props.href || String(props.to), 'data-custom': 'true'}, slots.default?.())
        },
      })
    )

    const wrapper = mount(BButton, {
      props: {
        to: '/custom',
        routerComponentName: CustomRouterLink,
      },
      global: {
        plugins: [router],
      },
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('routerComponentName')).toBe(CustomRouterLink)
    const link = wrapper.find('[data-custom="true"]')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe('/custom')
  })

  it('uses custom component routerComponentName passed through BBadge', () => {
    const CustomRouterLink = markRaw(
      defineComponent({
        name: 'CustomRouterLink',
        props: {
          to: {type: [String, Object], default: ''},
          href: {type: String, default: undefined},
        },
        setup(props, {slots}) {
          return () =>
            h('a', {href: props.href || String(props.to), 'data-custom': 'true'}, slots.default?.())
        },
      })
    )

    const wrapper = mount(BBadge, {
      props: {
        to: '/custom',
        routerComponentName: CustomRouterLink,
      },
      global: {
        plugins: [router],
      },
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('routerComponentName')).toBe(CustomRouterLink)
    const link = wrapper.find('[data-custom="true"]')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe('/custom')
  })

  it('uses global default routerComponentName provided via defaults', () => {
    const CustomRouterLink = markRaw(
      defineComponent({
        name: 'CustomRouterLink',
        props: {
          to: {type: [String, Object], default: ''},
          href: {type: String, default: undefined},
        },
        setup(props, {slots}) {
          return () =>
            h('a', {href: props.href || String(props.to), 'data-custom': 'true'}, slots.default?.())
        },
      })
    )

    const wrapper = mount(BLink, {
      props: {
        to: '/custom',
      },
      global: {
        plugins: [router],
        provide: {
          [defaultsKey as symbol]: ref({
            global: {
              routerComponentName: CustomRouterLink,
            },
          }),
        },
      },
    })
    const link = wrapper.find('[data-custom="true"]')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe('/custom')
  })

  it('BButton uses global default routerComponentName provided via defaults', () => {
    const CustomRouterLink = markRaw(
      defineComponent({
        name: 'CustomRouterLink',
        props: {
          to: {type: [String, Object], default: ''},
          href: {type: String, default: undefined},
        },
        setup(props, {slots}) {
          return () =>
            h('a', {href: props.href || String(props.to), 'data-custom': 'true'}, slots.default?.())
        },
      })
    )

    const wrapper = mount(BButton, {
      props: {
        to: '/custom',
      },
      global: {
        plugins: [router],
        provide: {
          [defaultsKey as symbol]: ref({
            global: {
              routerComponentName: CustomRouterLink,
            },
          }),
        },
      },
    })
    const link = wrapper.find('[data-custom="true"]')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe('/custom')
  })
})
