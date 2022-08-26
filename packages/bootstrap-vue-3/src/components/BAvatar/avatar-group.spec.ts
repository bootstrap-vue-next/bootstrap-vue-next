import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BAvatarGroup from './BAvatarGroup.vue'

describe('avatar-group', () => {
  it('has static class b-avatar-group', () => {
    const wrapper = mount(BAvatarGroup)
    expect(wrapper.classes()).toContain('b-avatar-group')

    wrapper.unmount()
  })

  it('has role group attribute', () => {
    const wrapper = mount(BAvatarGroup)
    expect(wrapper.attributes('role')).toBe('group')

    wrapper.unmount()
  })

  it('tag is div by default', () => {
    const wrapper = mount(BAvatarGroup)
    expect(wrapper.element.tagName).toBe('DIV')

    wrapper.unmount()
  })

  it('tag changes with prop tag', () => {
    const wrapper = mount(BAvatarGroup, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')

    wrapper.unmount()
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

    wrapper.unmount()
  })

  it('renders default slot', () => {
    const wrapper = mount(BAvatarGroup, {
      slots: {default: 'foobar'},
    })
    const [, $div] = wrapper.findAll('div')
    expect($div.text()).toBe('foobar')

    wrapper.unmount()
  })

  it.skip('div child has style attribute when size prop', () => {
    // TODO it doesn't seem that the computeSize function in BAvatar returns anything when string
    const wrapper = mount(BAvatarGroup, {
      props: {size: '128'},
    })
    const [, $div] = wrapper.findAll('div')
    expect($div.html()).toBe('false')

    wrapper.unmount()
  })
})
