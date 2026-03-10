import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardGroup from './BCardGroup.vue'

describe('card-group', () => {
  enableAutoUnmount(afterEach)

  it('is tag div by default', () => {
    const wrapper = mount(BCardGroup)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BCardGroup, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('tag prop changes element when updated', async () => {
    const wrapper = mount(BCardGroup, {
      props: {tag: 'div'},
    })
    expect(wrapper.element.tagName).toBe('DIV')
    await wrapper.setProps({tag: 'section'})
    expect(wrapper.element.tagName).toBe('SECTION')
  })

  it('renders default slot', () => {
    const wrapper = mount(BCardGroup, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders HTML content in default slot', () => {
    const wrapper = mount(BCardGroup, {
      slots: {default: '<div class="test-child">content</div>'},
    })
    expect(wrapper.find('.test-child').exists()).toBe(true)
    expect(wrapper.find('.test-child').text()).toBe('content')
  })

  it('renders multiple children in default slot', () => {
    const wrapper = mount(BCardGroup, {
      slots: {default: '<span>one</span><span>two</span><span>three</span>'},
    })
    const spans = wrapper.findAll('span')
    expect(spans).toHaveLength(3)
    expect(spans[0].text()).toBe('one')
    expect(spans[1].text()).toBe('two')
    expect(spans[2].text()).toBe('three')
  })

  it('renders with no slot content', () => {
    const wrapper = mount(BCardGroup)
    expect(wrapper.text()).toBe('')
    expect(wrapper.element.innerHTML).toBe('')
  })

  it('has static class card-group', () => {
    const wrapper = mount(BCardGroup)
    expect(wrapper.classes()).toContain('card-group')
  })

  it('has only card-group class by default', () => {
    const wrapper = mount(BCardGroup)
    expect(wrapper.classes()).toStrictEqual(['card-group'])
  })

  it('retains card-group class when tag changes', async () => {
    const wrapper = mount(BCardGroup, {
      props: {tag: 'div'},
    })
    expect(wrapper.classes()).toContain('card-group')
    await wrapper.setProps({tag: 'section'})
    expect(wrapper.classes()).toContain('card-group')
  })
})
