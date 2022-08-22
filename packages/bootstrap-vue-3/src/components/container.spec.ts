import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BContainer from './BContainer.vue'

describe('container', () => {
  it('renders default slot', () => {
    const wrapper = mount(BContainer, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })
})
