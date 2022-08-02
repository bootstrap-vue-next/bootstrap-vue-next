import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BNavItem from './BNavItem.vue'
import App from '../../App.vue'
import {createRouter, createWebHistory} from 'vue-router'

describe('nav-item', () => {
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: App,
    },
    {
      path: '/test-route',
      name: 'TestRoute',
      component: App,
    },
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  it("generates a router-link tag when the 'to' prop is passed", async () => {
    const wrapper = mount(BNavItem, {
      slots: {
        default: 'test link',
      },
      props: {
        to: {name: 'TestRoute'},
      },
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.html()).toContain('href="/test-route"')
  }, 5000)
})
