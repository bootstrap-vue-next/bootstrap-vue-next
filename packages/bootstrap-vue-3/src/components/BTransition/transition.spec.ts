import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BTransition from './BTransition.vue'

describe('transition', () => {
  it('renders default slot', () => {
    const wrapper = mount(BTransition, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })
})
