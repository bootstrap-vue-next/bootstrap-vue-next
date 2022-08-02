import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BNavbarBrand from './BNavbarBrand.vue'
import App from '../../App.vue'
import {createRouter, createWebHistory} from 'vue-router'

describe('navbar-brand', () => {
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
  it('contains target prop of _self by default', async () => {
    const wrapper = mount(BNavbarBrand, {
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
    console.log(wrapper.html())
    expect(wrapper.html()).toContain('target="_self"')
  }, 5000)
})
