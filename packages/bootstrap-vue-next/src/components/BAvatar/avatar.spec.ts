import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BAvatar from './BAvatar.vue'

describe('avatar', () => {
  enableAutoUnmount(afterEach)

  it('has static b-avatar class', () => {
    const wrapper = mount(BAvatar)
    expect(wrapper.classes()).toContain('b-avatar')
  })

  it('tag is button when prop button is true', () => {
    const wrapper = mount(BAvatar, {
      props: {button: true},
    })
    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('has attr type when prop button to be default button', () => {
    const wrapper = mount(BAvatar, {
      props: {button: true},
    })
    expect(wrapper.attributes('type')).toBe('button')
  })

  it('has attr type when prop button to be prop buttonType', () => {
    const wrapper = mount(BAvatar, {
      props: {button: true, buttonType: 'submit'},
    })
    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('does not have attr type when prop buttonType but not prop button', () => {
    const wrapper = mount(BAvatar, {
      props: {button: false, buttonType: 'submit'},
    })
    expect(wrapper.attributes('type')).toBeUndefined()
  })

  it('tag is default span', () => {
    const wrapper = mount(BAvatar)
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('`size` prop should work as expected', () => {
    const wrapper1 = mount(BAvatar)
    expect(wrapper1.attributes('style')).toEqual(undefined)

    const wrapper2 = mount(BAvatar, {props: {size: 'sm'}})
    expect(wrapper2.attributes('style')).toEqual('')
    expect(wrapper2.classes()).toContain('b-avatar-sm')

    const wrapper3 = mount(BAvatar, {props: {size: 'md'}})
    expect(wrapper3.attributes('style')).toEqual('')
    expect(wrapper3.classes()).not.toContain('b-avatar-md')

    const wrapper4 = mount(BAvatar, {props: {size: 'lg'}})
    expect(wrapper4.attributes('style')).toEqual('')
    expect(wrapper4.classes()).toContain('b-avatar-lg')

    const wrapper5 = mount(BAvatar, {props: {size: 20}})
    expect(wrapper5.attributes('style')).toEqual('width: 20px; height: 20px;')

    const wrapper6 = mount(BAvatar, {props: {size: '24.5'}})
    expect(wrapper6.attributes('style')).toEqual('width: 24.5px; height: 24.5px;')

    const wrapper7 = mount(BAvatar, {props: {size: '5em'}})
    expect(wrapper7.attributes('style')).toEqual('width: 5em; height: 5em;')

    const wrapper8 = mount(BAvatar, {props: {size: '36px'}})
    expect(wrapper8.attributes('style')).toEqual('width: 36px; height: 36px;')

    const wrapper9 = mount(BAvatar, {props: {size: '0x123'}})
    expect(wrapper9.attributes('style')).toEqual('')
  })

  // TODO not done
})
