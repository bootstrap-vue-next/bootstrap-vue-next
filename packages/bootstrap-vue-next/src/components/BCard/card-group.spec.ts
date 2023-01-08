import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardGroup from './BCardGroup.vue'

describe('card-group', () => {
  enableAutoUnmount(afterEach)

  it('is tag div by default', () => {
    const wrapper = mount(BCardGroup)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag prop tag', () => {
    const wrapper = mount(BCardGroup, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('renders default slot', () => {
    const wrapper = mount(BCardGroup, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('has class card-deck when prop deck', async () => {
    const wrapper = mount(BCardGroup, {
      props: {deck: true},
    })
    expect(wrapper.classes()).toContain('card-deck')
    await wrapper.setProps({deck: undefined})
    expect(wrapper.classes()).not.toContain('card-deck')
  })

  it('has class card-columns when prop columns', async () => {
    const wrapper = mount(BCardGroup, {
      props: {columns: true},
    })
    expect(wrapper.classes()).toContain('card-columns')
    await wrapper.setProps({columns: undefined})
    expect(wrapper.classes()).not.toContain('card-columns')
  })

  it('has class card-group by default', () => {
    const wrapper = mount(BCardGroup)
    expect(wrapper.classes()).toContain('card-group')
  })

  it('class card-deck takes priority over card-columns', () => {
    const wrapper = mount(BCardGroup, {
      props: {columns: true, deck: true},
    })
    expect(wrapper.classes()).toContain('card-deck')
    expect(wrapper.classes()).not.toContain('card-columns')
  })

  it('class card-columns takes priority over card-group', () => {
    const wrapper = mount(BCardGroup, {
      props: {columns: true},
    })
    expect(wrapper.classes()).toContain('card-columns')
    expect(wrapper.classes()).not.toContain('card-group')
  })
})
