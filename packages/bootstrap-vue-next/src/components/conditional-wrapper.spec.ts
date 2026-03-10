import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import ConditionalWrapper from './ConditionalWrapper.vue'

describe('conditional-wrapper', () => {
  enableAutoUnmount(afterEach)

  it('has name ConditionalWrapper', () => {
    expect(ConditionalWrapper.name).toBe('ConditionalWrapper')
  })

  it('wraps content in a div by default when skip is false', () => {
    const wrapper = mount(ConditionalWrapper, {
      props: {skip: false},
      slots: {default: '<span class="inner">content</span>'},
    })
    expect(wrapper.element.tagName).toBe('DIV')
    const $span = wrapper.find('.inner')
    expect($span.exists()).toBe(true)
    expect($span.text()).toBe('content')
  })

  it('renders slot content without wrapper when skip is true', () => {
    const wrapper = mount(ConditionalWrapper, {
      props: {skip: true},
      slots: {default: '<span class="inner">content</span>'},
    })
    // When skip is true, only the slot content is rendered without a wrapping element
    // wrapper.html() should just contain the slot content directly
    expect(wrapper.html()).toContain('<span class="inner">content</span>')
    const $span = wrapper.find('.inner')
    expect($span.exists()).toBe(true)
    expect($span.text()).toBe('content')
  })

  it('uses custom tag when provided and skip is false', () => {
    const wrapper = mount(ConditionalWrapper, {
      props: {skip: false, tag: 'section'},
      slots: {default: 'content'},
    })
    expect(wrapper.element.tagName).toBe('SECTION')
  })

  it('tag reacts to prop changes', async () => {
    const wrapper = mount(ConditionalWrapper, {
      props: {skip: false, tag: 'div'},
      slots: {default: 'content'},
    })
    expect(wrapper.element.tagName).toBe('DIV')
    await wrapper.setProps({tag: 'span'})
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('ignores tag prop when skip is true', () => {
    const wrapper = mount(ConditionalWrapper, {
      props: {skip: true, tag: 'section'},
      slots: {default: '<p>content</p>'},
    })
    // When skip is true, the tag prop is irrelevant; content renders without wrapper
    // The html should be just the slot content, not wrapped in a section
    expect(wrapper.html()).not.toContain('<section')
    expect(wrapper.html()).toContain('<p>content</p>')
  })

  it('passes attrs to wrapper element when skip is false', () => {
    const wrapper = mount(ConditionalWrapper, {
      props: {skip: false},
      attrs: {'id': 'my-wrapper', 'data-testid': 'wrapper'},
      slots: {default: 'content'},
    })
    expect(wrapper.attributes('id')).toBe('my-wrapper')
    expect(wrapper.attributes('data-testid')).toBe('wrapper')
  })

  it('does not apply attrs when skip is true', () => {
    const wrapper = mount(ConditionalWrapper, {
      props: {skip: true},
      attrs: {id: 'my-wrapper'},
      slots: {default: '<span>content</span>'},
    })
    // When skip is true, wrapper attrs should not leak onto slot content
    expect(wrapper.html()).not.toContain('id="my-wrapper"')
  })

  it('passes class attr to wrapper element when skip is false', () => {
    const wrapper = mount(ConditionalWrapper, {
      props: {skip: false},
      attrs: {class: 'my-class'},
      slots: {default: 'content'},
    })
    expect(wrapper.classes()).toContain('my-class')
  })

  it('renders text slot content', () => {
    const wrapper = mount(ConditionalWrapper, {
      props: {skip: false},
      slots: {default: 'hello world'},
    })
    expect(wrapper.text()).toBe('hello world')
  })

  it('renders HTML slot content', () => {
    const wrapper = mount(ConditionalWrapper, {
      props: {skip: false},
      slots: {default: '<em class="styled">emphasis</em>'},
    })
    const $em = wrapper.find('.styled')
    expect($em.exists()).toBe(true)
    expect($em.text()).toBe('emphasis')
  })

  it('skip reacts to prop changes from false to true', async () => {
    const wrapper = mount(ConditionalWrapper, {
      props: {skip: false},
      slots: {default: '<span class="inner">content</span>'},
    })
    // With skip=false, root element is the wrapper div
    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.find('.inner').exists()).toBe(true)

    await wrapper.setProps({skip: true})
    // With skip=true, wrapper div is no longer wrapping the content
    expect(wrapper.find('.inner').exists()).toBe(true)
    expect(wrapper.html()).toContain('<span class="inner">content</span>')
  })

  it('renders empty wrapper when no slot content is provided and skip is false', () => {
    const wrapper = mount(ConditionalWrapper, {
      props: {skip: false},
    })
    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.text()).toBe('')
  })

  it('renders default tag as div', () => {
    const wrapper = mount(ConditionalWrapper, {
      props: {skip: false},
      slots: {default: 'content'},
    })
    expect(wrapper.element.tagName).toBe('DIV')
  })
})
