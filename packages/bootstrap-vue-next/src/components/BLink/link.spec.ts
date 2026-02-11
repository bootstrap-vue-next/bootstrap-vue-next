import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BLink from './BLink.vue'
import {createRouter, createWebHistory, type RouterLink} from 'vue-router'
import {defineComponent, h} from 'vue'

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
        routerComponentName: CustomRouterLink,
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
        return () => h('a', {href: String(props.to), 'data-nuxt-link': 'true'}, slots.default?.())
      },
    }) as typeof RouterLink

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
})
