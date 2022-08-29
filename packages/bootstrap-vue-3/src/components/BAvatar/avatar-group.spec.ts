import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BAvatarGroup from './BAvatarGroup.vue'

describe('avatar-group', () => {
  enableAutoUnmount(afterEach)

  it('has static class b-avatar-group', () => {
    const wrapper = mount(BAvatarGroup)
    expect(wrapper.classes()).toContain('b-avatar-group')
  })

  it('has role group attribute', () => {
    const wrapper = mount(BAvatarGroup)
    expect(wrapper.attributes('role')).toBe('group')
  })

  it('tag is div by default', () => {
    const wrapper = mount(BAvatarGroup)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag changes with prop tag', () => {
    const wrapper = mount(BAvatarGroup, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has second child div', () => {
    const wrapper = mount(BAvatarGroup)
    const [, $div] = wrapper.findAll('div')
    expect($div.exists()).toBe(true)
  })

  it('div child has static class b-avatar-group-inner', () => {
    const wrapper = mount(BAvatarGroup)
    const [, $div] = wrapper.findAll('div')
    expect($div.classes()).toContain('b-avatar-group-inner')
  })

  it('renders default slot', () => {
    const wrapper = mount(BAvatarGroup, {
      slots: {default: 'foobar'},
    })
    const [, $div] = wrapper.findAll('div')
    expect($div.text()).toBe('foobar')
  })

  it.skip('div child has style attribute when size prop', () => {
    // TODO it doesn't seem that the computeSize function in BAvatar returns anything when string
    const wrapper = mount(BAvatarGroup, {
      props: {size: '128'},
    })
    const [, $div] = wrapper.findAll('div')
    expect($div.html()).toBe('false')
  })
})
