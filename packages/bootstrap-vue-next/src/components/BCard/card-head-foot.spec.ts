import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardHeadFoot from './BCardHeadFoot.vue'

describe('card-head-foot', () => {
  enableAutoUnmount(afterEach)

  it('tag is div by default', () => {
    const wrapper = mount(BCardHeadFoot)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BCardHeadFoot, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has class text-{type} when prop textVariant', async () => {
    const wrapper = mount(BCardHeadFoot, {
      props: {textVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('text-primary')
    await wrapper.setProps({textVariant: undefined})
    expect(wrapper.classes()).not.toContain('text-primary')
  })

  it('has class bg-{type} when prop bgVariant', async () => {
    const wrapper = mount(BCardHeadFoot, {
      props: {bgVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('bg-primary')
    await wrapper.setProps({bgVariant: undefined})
    expect(wrapper.classes()).not.toContain('bg-primary')
  })

  it('has class border-{type} when prop borderVariant', async () => {
    const wrapper = mount(BCardHeadFoot, {
      props: {borderVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('border-primary')
    await wrapper.setProps({borderVariant: undefined})
    expect(wrapper.classes()).not.toContain('border-primary')
  })

  it('has nested div that when prop html', () => {
    const wrapper = mount(BCardHeadFoot, {
      props: {html: '<span>foobar</span>'},
    })
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
  })

  it('nested div renders html when prop html', () => {
    const wrapper = mount(BCardHeadFoot, {
      props: {html: '<span>foobar</span>'},
    })
    const $div = wrapper.get('div')
    const $span = $div.find('span')
    expect($span.exists()).toBe(true)
    expect($span.text()).toBe('foobar')
  })

  it('renders default slot', () => {
    const wrapper = mount(BCardHeadFoot, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders prop text', () => {
    const wrapper = mount(BCardHeadFoot, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders default slot over prop text', () => {
    const wrapper = mount(BCardHeadFoot, {
      props: {text: 'props'},
      slots: {default: 'slots'},
    })
    expect(wrapper.text()).toBe('slots')
  })

  it('renders html over default slot', () => {
    const wrapper = mount(BCardHeadFoot, {
      slots: {default: 'slots'},
      props: {html: '<span>foobar</span>'},
    })
    expect(wrapper.text()).toBe('foobar')
  })
})
