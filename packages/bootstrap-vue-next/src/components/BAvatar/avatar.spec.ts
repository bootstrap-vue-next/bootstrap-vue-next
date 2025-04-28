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

  it('has class `b-avatar-sm` when prop size is `sm`', () => {
    const wrapper = mount(BAvatar, {props: {size: 'sm'}})
    expect(wrapper.attributes('style')).toBeUndefined()
    expect(wrapper.classes()).toContain('b-avatar-sm')
  })

  it('does not include default class `b-avatar-md` when prop size is `md`', () => {
    const wrapper = mount(BAvatar, {props: {size: 'md'}})
    expect(wrapper.attributes('style')).toBeUndefined()
    expect(wrapper.classes()).not.toContain('b-avatar-md')
  })

  it('has class `b-avatar-lg` when prop size is `lg`', () => {
    const wrapper = mount(BAvatar, {props: {size: 'lg'}})
    expect(wrapper.attributes('style')).toBeUndefined()
    expect(wrapper.classes()).toContain('b-avatar-lg')
  })

  it('converts to `px` when prop size is a numeric value', async () => {
    const wrapper1 = mount(BAvatar, {props: {size: 20}})
    expect(wrapper1.attributes('style')).toEqual('width: 20px; height: 20px;')
    await wrapper1.setProps({size: '24.5'})
    expect(wrapper1.attributes('style')).toEqual('width: 24.5px; height: 24.5px;')
  })

  it('applies correct styles when prop size ends in `px`, `em` or `rem`', async () => {
    const wrapper1 = mount(BAvatar, {props: {size: '5px'}})
    expect(wrapper1.attributes('style')).toEqual('width: 5px; height: 5px;')
    await wrapper1.setProps({size: '5em'})
    expect(wrapper1.attributes('style')).toEqual('width: 5em; height: 5em;')
    await wrapper1.setProps({size: '5rem'})
    expect(wrapper1.attributes('style')).toEqual('width: 5rem; height: 5rem;')
  })

  it('does not apply styles when prop size is a non-decimal numeric value', () => {
    const wrapper = mount(BAvatar, {props: {size: '0x123'}})
    expect(wrapper.attributes('style')).toBeUndefined()
  })

  it('style does not have width: lg etc when prop size is a literal Size value', () => {
    const wrapper = mount(BAvatar, {props: {size: 'lg'}})
    expect(wrapper.attributes('style')).toBeUndefined()
  })
})
