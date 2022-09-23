import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTransition from './BTransition.vue'
import {Transition} from 'vue'

describe('transition', () => {
  enableAutoUnmount(afterEach)

  it('renders default slot', () => {
    const wrapper = mount(BTransition, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders nothing when no slot', () => {
    const wrapper = mount(BTransition)
    expect(wrapper.text()).toBe('')
  })

  it('is component transition', () => {
    const wrapper = mount(BTransition)
    const $transition = wrapper.findComponent(Transition)
    expect($transition.exists()).toBe(true)
  })
})
