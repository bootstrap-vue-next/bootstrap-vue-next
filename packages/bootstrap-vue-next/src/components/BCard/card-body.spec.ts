import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardBody from './BCardBody.vue'
import BCardTitle from './BCardTitle.vue'
import BCardSubtitle from './BCardSubtitle.vue'

describe('card-body', () => {
  enableAutoUnmount(afterEach)

  it('has static class card body', () => {
    const wrapper = mount(BCardBody)
    expect(wrapper.classes()).toContain('card-body')
  })

  it('tag is div by default', () => {
    const wrapper = mount(BCardBody)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop bodyTag', () => {
    const wrapper = mount(BCardBody, {
      props: {bodyTag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has class text-{type} when prop bodyTextVariant', async () => {
    const wrapper = mount(BCardBody, {
      props: {bodyTextVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('text-primary')
    await wrapper.setProps({bodyTextVariant: undefined})
    expect(wrapper.classes()).not.toContain('text-primary')
  })

  it('has class bg-{type} when prop bodyBgVariant', async () => {
    const wrapper = mount(BCardBody, {
      props: {bodyBgVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('bg-primary')
    await wrapper.setProps({bodyBgVariant: undefined})
    expect(wrapper.classes()).not.toContain('bg-primary')
  })

  it('does not have BCardTitle by default', () => {
    const wrapper = mount(BCardBody)
    const $bcardtitle = wrapper.findComponent(BCardTitle)
    expect($bcardtitle.exists()).toBe(false)
  })

  it('does not have BCardSubtitle by default', () => {
    const wrapper = mount(BCardBody)
    const $cardsubtitle = wrapper.findComponent(BCardSubtitle)
    expect($cardsubtitle.exists()).toBe(false)
  })

  it('has BCardTitle when prop title', () => {
    const wrapper = mount(BCardBody, {
      props: {title: 'foobar'},
    })
    const $bcardtitle = wrapper.findComponent(BCardTitle)
    expect($bcardtitle.exists()).toBe(true)
  })

  it('has BCardSubtitle when prop subtitle', () => {
    const wrapper = mount(BCardBody, {
      props: {subtitle: 'foobar'},
    })
    const $cardsubtitle = wrapper.findComponent(BCardSubtitle)
    expect($cardsubtitle.exists()).toBe(true)
  })

  it('has BCardTitle when slot title', () => {
    const wrapper = mount(BCardBody, {
      slots: {title: 'foobar'},
    })
    const $bcardtitle = wrapper.findComponent(BCardTitle)
    expect($bcardtitle.exists()).toBe(true)
  })

  it('has BCardSubtitle when slot subtitle', () => {
    const wrapper = mount(BCardBody, {
      slots: {subtitle: 'foobar'},
    })
    const $cardsubtitle = wrapper.findComponent(BCardSubtitle)
    expect($cardsubtitle.exists()).toBe(true)
  })

  it('BCardTitle child has text slot title', () => {
    const wrapper = mount(BCardBody, {
      slots: {title: 'foobar'},
    })
    const $bcardtitle = wrapper.getComponent(BCardTitle)
    expect($bcardtitle.text()).toBe('foobar')
  })

  it('BCardSubtitle child has text slot subtitle', () => {
    const wrapper = mount(BCardBody, {
      slots: {subtitle: 'foobar'},
    })
    const $cardsubtitle = wrapper.getComponent(BCardSubtitle)
    expect($cardsubtitle.text()).toBe('foobar')
  })

  it('BCardTitle child has text prop title', () => {
    const wrapper = mount(BCardBody, {
      props: {title: 'foobar'},
    })
    const $bcardtitle = wrapper.getComponent(BCardTitle)
    expect($bcardtitle.text()).toBe('foobar')
  })

  it('BCardSubtitle child has text prop subtitle', () => {
    const wrapper = mount(BCardBody, {
      props: {subtitle: 'foobar'},
    })
    const $cardsubtitle = wrapper.getComponent(BCardSubtitle)
    expect($cardsubtitle.text()).toBe('foobar')
  })

  it('BCardTitle has internal prop tag as prop titleTag', () => {
    const wrapper = mount(BCardBody, {
      props: {title: 'foobar', titleTag: 'span'},
    })
    const $bcardtitle = wrapper.getComponent(BCardTitle)
    expect($bcardtitle.props('tag')).toBe('span')
  })

  it('BCardSubtitle child has internal prop tag as prop subtitle', () => {
    const wrapper = mount(BCardBody, {
      props: {subtitle: 'foobar', subtitleTag: 'span'},
    })
    const $cardsubtitle = wrapper.getComponent(BCardSubtitle)
    expect($cardsubtitle.props('tag')).toBe('span')
  })

  it('BCardSubtitle child has internal prop textVariant as prop subtitleTextVariant', () => {
    const wrapper = mount(BCardBody, {
      props: {subtitle: 'foobar', subtitleTextVariant: 'primary'},
    })
    const $cardsubtitle = wrapper.getComponent(BCardSubtitle)
    expect($cardsubtitle.props('textVariant')).toBe('primary')
  })

  it('renders default slot', () => {
    const wrapper = mount(BCardBody, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders prop text', () => {
    const wrapper = mount(BCardBody, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders default slot over prop text', () => {
    const wrapper = mount(BCardBody, {
      props: {text: 'props'},
      slots: {default: 'slots'},
    })
    expect(wrapper.text()).toBe('slots')
  })

  it('has text in order', () => {
    const wrapper = mount(BCardBody, {
      slots: {subtitle: 'subtitle', title: 'title', default: 'default'},
    })
    expect(wrapper.text()).toBe('titlesubtitledefault')
  })

  it('has class card-img-overlay when prop overlay', async () => {
    const wrapper = mount(BCardBody, {
      props: {overlay: true},
    })
    expect(wrapper.classes()).toContain('card-img-overlay')
    await wrapper.setProps({overlay: false})
    expect(wrapper.classes()).not.toContain('card-img-overlay')
  })
})
