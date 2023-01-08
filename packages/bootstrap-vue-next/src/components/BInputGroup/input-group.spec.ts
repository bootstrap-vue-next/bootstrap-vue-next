import {enableAutoUnmount, mount} from '@vue/test-utils'
import BInputGroup from './BInputGroup.vue'
import {afterEach, describe, expect, it} from 'vitest'

describe('input-group', () => {
  enableAutoUnmount(afterEach)

  it('tag is div by default', () => {
    const wrapper = mount(BInputGroup)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BInputGroup, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has static class input-group', () => {
    const wrapper = mount(BInputGroup)
    expect(wrapper.classes()).toContain('input-group')
  })

  it('has static attr role to be group', () => {
    const wrapper = mount(BInputGroup)
    expect(wrapper.attributes('role')).toBe('group')
  })

  it('has attr id to be prop id', async () => {
    const wrapper = mount(BInputGroup, {
      props: {id: 'foobar'},
    })
    expect(wrapper.attributes('id')).toBe('foobar')
    await wrapper.setProps({id: 'foo'})
    expect(wrapper.attributes('id')).toBe('foo')
  })

  it('has class input-group-sm when prop size is sm', () => {
    const wrapper = mount(BInputGroup, {
      props: {size: 'sm'},
    })
    expect(wrapper.classes()).toContain('input-group-sm')
  })

  it('has class input-group-lg when prop size is lg', () => {
    const wrapper = mount(BInputGroup, {
      props: {size: 'lg'},
    })
    expect(wrapper.classes()).toContain('input-group-lg')
  })

  it('renders slot prepend', () => {
    const wrapper = mount(BInputGroup, {
      slots: {prepend: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders slot append', () => {
    const wrapper = mount(BInputGroup, {
      slots: {append: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders default', () => {
    const wrapper = mount(BInputGroup, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders in correct order', () => {
    const wrapper = mount(BInputGroup, {
      slots: {prepend: 'prepend', default: 'default', append: 'append'},
    })
    expect(wrapper.text()).toBe('prependdefaultappend')
  })

  it('has child span if prop prepend', () => {
    const wrapper = mount(BInputGroup, {
      props: {prepend: 'foobar'},
    })
    const $span = wrapper.find('span')
    expect($span.exists()).toBe(true)
  })

  it('child span has static class input-group-text', () => {
    const wrapper = mount(BInputGroup, {
      props: {prepend: 'foobar'},
    })
    const $span = wrapper.get('span')
    expect($span.classes()).toContain('input-group-text')
  })

  it('child span has an additional span element', () => {
    const wrapper = mount(BInputGroup, {
      props: {prepend: 'foobar'},
    })
    const $span = wrapper.get('span')
    const $nested = $span.find('span')
    expect($nested.exists()).toBe(true)
  })

  it('child span further child span element renders prop prepend', () => {
    const wrapper = mount(BInputGroup, {
      props: {prepend: 'foobar'},
    })
    const $span = wrapper.get('span')
    const $nested = $span.get('span')
    expect($nested.text()).toBe('foobar')
  })

  it('has child span element when prop prependHtml', () => {
    const wrapper = mount(BInputGroup, {
      props: {prependHtml: '<h1>foobar</h1>'},
    })
    const $span = wrapper.find('span')
    expect($span.exists()).toBe(true)
  })

  it('has child span has further child span when prop prependHtml', () => {
    const wrapper = mount(BInputGroup, {
      props: {prependHtml: '<h1>foobar</h1>'},
    })
    const $span = wrapper.get('span')
    const $nested = $span.find('span')
    expect($nested.exists()).toBe(true)
  })

  it('has child span has further child renders html', () => {
    const wrapper = mount(BInputGroup, {
      props: {prependHtml: '<h1>foobar</h1>'},
    })
    const $span = wrapper.get('span')
    const $nested = $span.get('span')
    const $h1 = $nested.find('h1')
    expect($h1.exists()).toBe(true)
  })

  it('has child span has further child renders html text', () => {
    const wrapper = mount(BInputGroup, {
      props: {prependHtml: '<h1>foobar</h1>'},
    })
    const $span = wrapper.get('span')
    const $nested = $span.get('span')
    const $h1 = $nested.get('h1')
    expect($h1.text()).toBe('foobar')
  })

  it('child span prefers to render prop prependHtml over prepend', () => {
    const wrapper = mount(BInputGroup, {
      props: {prependHtml: '<h1>html</h1>', prepend: 'foobar'},
    })
    const $span = wrapper.get('span')
    const $nested = $span.get('span')
    expect($nested.text()).toBe('html')
  })

  it('does not have child span if prop prepend, but also slot prepend', () => {
    // May break if a span element is ever non v-if on the element
    const wrapper = mount(BInputGroup, {
      props: {prepend: 'foobar'},
      slots: {prepend: 'foobar'},
    })
    const $span = wrapper.find('span')
    expect($span.exists()).toBe(false)
  })

  it('does not have child span if prop append, but also slot append', () => {
    // May break if a span element is ever non v-if on the element
    const wrapper = mount(BInputGroup, {
      props: {append: 'foobar'},
      slots: {append: 'foobar'},
    })
    const $span = wrapper.find('span')
    expect($span.exists()).toBe(false)
  })

  it('has child span if prop append', () => {
    const wrapper = mount(BInputGroup, {
      props: {append: 'foobar'},
    })
    const $span = wrapper.find('span')
    expect($span.exists()).toBe(true)
  })

  it('child span has static class input-group-text', () => {
    const wrapper = mount(BInputGroup, {
      props: {append: 'foobar'},
    })
    const $span = wrapper.get('span')
    expect($span.classes()).toContain('input-group-text')
  })

  it('child span has an additional span element', () => {
    const wrapper = mount(BInputGroup, {
      props: {append: 'foobar'},
    })
    const $span = wrapper.get('span')
    const $nested = $span.find('span')
    expect($nested.exists()).toBe(true)
  })

  it('child span further child span element renders prop append', () => {
    const wrapper = mount(BInputGroup, {
      props: {append: 'foobar'},
    })
    const $span = wrapper.get('span')
    const $nested = $span.get('span')
    expect($nested.text()).toBe('foobar')
  })

  it('has child span element when prop appendHtml', () => {
    const wrapper = mount(BInputGroup, {
      props: {appendHtml: '<h1>foobar</h1>'},
    })
    const $span = wrapper.find('span')
    expect($span.exists()).toBe(true)
  })

  it('has child span has further child span when prop appendHtml', () => {
    const wrapper = mount(BInputGroup, {
      props: {appendHtml: '<h1>foobar</h1>'},
    })
    const $span = wrapper.get('span')
    const $nested = $span.find('span')
    expect($nested.exists()).toBe(true)
  })

  it('has child span has further child renders html', () => {
    const wrapper = mount(BInputGroup, {
      props: {appendHtml: '<h1>foobar</h1>'},
    })
    const $span = wrapper.get('span')
    const $nested = $span.get('span')
    const $h1 = $nested.find('h1')
    expect($h1.exists()).toBe(true)
  })

  it('has child span has further child renders html text', () => {
    const wrapper = mount(BInputGroup, {
      props: {appendHtml: '<h1>foobar</h1>'},
    })
    const $span = wrapper.get('span')
    const $nested = $span.get('span')
    const $h1 = $nested.get('h1')
    expect($h1.text()).toBe('foobar')
  })

  it('child span prefers to render prop appendHtml over append', () => {
    const wrapper = mount(BInputGroup, {
      props: {appendHtml: '<h1>html</h1>', append: 'foobar'},
    })
    const $span = wrapper.get('span')
    const $nested = $span.get('span')
    expect($nested.text()).toBe('html')
  })

  it('prop prepend prop append and slot default render in correct order', () => {
    const wrapper = mount(BInputGroup, {
      props: {prepend: 'prepend', append: 'append'},
      slots: {default: 'default'},
    })
    expect(wrapper.text()).toBe('prependdefaultappend')
  })

  it('prop prependHtml prop appendHtml and slot default render in correct order', () => {
    const wrapper = mount(BInputGroup, {
      props: {prependHtml: 'prepend', appendHtml: 'append'},
      slots: {default: 'default'},
    })
    expect(wrapper.text()).toBe('prependdefaultappend')
  })

  // TODO root component is finished, do internals
})
