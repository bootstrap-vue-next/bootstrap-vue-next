import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BLink from './BLink.vue'
import {createRouter, createWebHistory} from 'vue-router'
import {defineComponent, h, markRaw} from 'vue'

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

  it('renders NuxtLink in Nuxt environment with default routerComponentName', () => {
    // Mock NuxtLink component
    const NuxtLink = defineComponent({
      name: 'NuxtLink',
      props: {
        to: {type: [String, Object], required: true},
        href: {type: String, default: undefined},
      },
      setup(props, {slots}) {
        return () =>
          h('a', {'href': String(props.to), 'data-nuxt-link': 'true'}, slots.default?.())
      },
    })

    // Plugin to simulate Nuxt environment by setting $nuxt on app
    const nuxtMock = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      install(app: any) {
        app.$nuxt = {}
      },
    }

    // Use default routerComponentName ('router-link') — no explicit routerComponentName prop
    const wrapper = mount(BLink, {
      props: {
        to: '/nuxt-page',
      },
      global: {
        plugins: [router, nuxtMock],
        components: {
          NuxtLink,
        },
      },
    })

    // Should render using NuxtLink, not RouterLink
    expect(wrapper.attributes('data-nuxt-link')).toBe('true')
    expect(wrapper.attributes('href')).toBe('/nuxt-page')
  })

  it('does not pass href to NuxtLink when to is provided in Nuxt environment', () => {
    // Mock NuxtLink component that tracks received props
    const NuxtLink = defineComponent({
      name: 'NuxtLink',
      props: {
        to: {type: [String, Object], default: undefined},
        href: {type: String, default: undefined},
      },
      setup(props, {slots}) {
        return () =>
          h(
            'a',
            {
              'href': String(props.to),
              'data-nuxt-link': 'true',
              'data-has-href-prop': props.href !== undefined ? 'true' : 'false',
            },
            slots.default?.()
          )
      },
    })

    // Plugin to simulate Nuxt environment by setting $nuxt on app
    const nuxtMock = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      install(app: any) {
        app.$nuxt = {}
      },
    }

    const wrapper = mount(BLink, {
      props: {
        to: '/nuxt-page',
        routerComponentName: 'NuxtLink',
      },
      global: {
        plugins: [router, nuxtMock],
        components: {
          NuxtLink,
        },
      },
    })

    expect(wrapper.attributes('href')).toBe('/nuxt-page')
    expect(wrapper.attributes('data-nuxt-link')).toBe('true')
    // href should not be passed as a prop to NuxtLink when to is provided
    expect(wrapper.attributes('data-has-href-prop')).toBe('false')
  })
})
