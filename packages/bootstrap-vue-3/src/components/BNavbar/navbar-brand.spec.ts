import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BNavbarBrand from './BNavbarBrand.vue'
import BLink from '../BLink/BLink.vue'

describe('navbar-brand', () => {
  it('contains blink when is link', () => {
    const wrapper = mount(BNavbarBrand, {
      props: {
        to: '/abc',
      },
    })
    const $blink = wrapper.getComponent(BLink)
    console.log($blink)
    expect($blink).toBeDefined()
  })
})
