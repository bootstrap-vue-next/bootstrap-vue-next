import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BAvatar from './BAvatar.vue'
import {avatarGroupInjectionKey} from '../../utils'

describe('avatar', () => {
  enableAutoUnmount(afterEach)

  it('has static b-avatar class', () => {
    const wrapper = mount(BAvatar, {
      global: {provide: {[avatarGroupInjectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.classes()).toContain('b-avatar')
  })

  it('tag is button when prop button is true', () => {
    const wrapper = mount(BAvatar, {
      props: {button: true},
      global: {provide: {[avatarGroupInjectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('has attr type when prop button to be default button', () => {
    const wrapper = mount(BAvatar, {
      props: {button: true},
      global: {provide: {[avatarGroupInjectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.attributes('type')).toBe('button')
  })

  it('has attr type when prop button to be prop buttonType', () => {
    const wrapper = mount(BAvatar, {
      props: {button: true, buttonType: 'submit'},
      global: {provide: {[avatarGroupInjectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('does not have attr type when prop buttonType but not prop button', () => {
    const wrapper = mount(BAvatar, {
      props: {button: false, buttonType: 'submit'},
      global: {provide: {[avatarGroupInjectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.attributes('type')).toBeUndefined()
  })

  it('tag is default span', () => {
    const wrapper = mount(BAvatar, {
      global: {provide: {[avatarGroupInjectionKey as unknown as symbol]: {}}},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  // TODO not done
})
