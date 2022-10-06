import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTransition from './BTransition.vue'
import {Component, Transition} from 'vue'

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

  it('Transition has prop css true when prop transProps', () => {
    const wrapper = mount(BTransition, {
      props: {transProps: {enterActiveClass: 'foo'}},
    })
    const $transition = wrapper.getComponent(Transition as Component)
    expect($transition.props('css')).toBe(true)
  })

  it('Transition has mode undefined by default when prop transProps', () => {
    const wrapper = mount(BTransition, {
      props: {transProps: {enterActiveClass: 'foo'}},
    })
    const $transition = wrapper.getComponent(Transition as Component)
    expect($transition.props('mode')).toBeUndefined()
  })

  it('Transition has mode to be prop mode when prop transProps', () => {
    const wrapper = mount(BTransition, {
      props: {transProps: {enterActiveClass: 'foo', mode: 'in-out'}},
    })
    const $transition = wrapper.getComponent(Transition as Component)
    expect($transition.props('mode')).toBe('in-out')
  })

  it('Transition has props from transProps', () => {
    const wrapper = mount(BTransition, {
      props: {transProps: {enterActiveClass: 'foo'}},
    })
    const $transition = wrapper.getComponent(Transition as Component)
    expect($transition.props('enterActiveClass')).toBe('foo')
  })

  // TODO
  // Test for when appear is true but trans props is also true

  // Test for when appear is false but trans props is also true

  // Test for when appear is true

  // Test for when appear is false

  // Test for when appear is true but fade is also true

  // Test for when appear is true but fade is false
})
