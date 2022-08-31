import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardBody from './BCardBody.vue'
import BCardTitle from './BCardTitle.vue'
import BCardSubTitle from './BCardSubTitle.vue'

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

  it('does not have BCardSubTitle by default', () => {
    const wrapper = mount(BCardBody)
    const $bcardsubtitle = wrapper.findComponent(BCardSubTitle)
    expect($bcardsubtitle.exists()).toBe(false)
  })

  it('has BCardTitle when prop title', () => {
    const wrapper = mount(BCardBody, {
      props: {title: 'foobar'},
    })
    const $bcardtitle = wrapper.findComponent(BCardTitle)
    expect($bcardtitle.exists()).toBe(true)
  })

  it('has BCardSubTitle when prop subTitle', () => {
    const wrapper = mount(BCardBody, {
      props: {subTitle: 'foobar'},
    })
    const $bcardsubtitle = wrapper.findComponent(BCardSubTitle)
    expect($bcardsubtitle.exists()).toBe(true)
  })

  it('has BCardTitle when slot title', () => {
    const wrapper = mount(BCardBody, {
      slots: {title: 'foobar'},
    })
    const $bcardtitle = wrapper.findComponent(BCardTitle)
    expect($bcardtitle.exists()).toBe(true)
  })

  it('has BCardSubTitle when slot subTitle', () => {
    const wrapper = mount(BCardBody, {
      slots: {subTitle: 'foobar'},
    })
    const $bcardsubtitle = wrapper.findComponent(BCardSubTitle)
    expect($bcardsubtitle.exists()).toBe(true)
  })

  it('BCardTitle child has text slot title', () => {
    const wrapper = mount(BCardBody, {
      slots: {title: 'foobar'},
    })
    const $bcardtitle = wrapper.getComponent(BCardTitle)
    expect($bcardtitle.text()).toBe('foobar')
  })

  it('BCardSubTitle child has text slot subTitle', () => {
    const wrapper = mount(BCardBody, {
      slots: {subTitle: 'foobar'},
    })
    const $bcardsubtitle = wrapper.getComponent(BCardSubTitle)
    expect($bcardsubtitle.text()).toBe('foobar')
  })

  it('BCardTitle child has text prop title', () => {
    const wrapper = mount(BCardBody, {
      props: {title: 'foobar'},
    })
    const $bcardtitle = wrapper.getComponent(BCardTitle)
    expect($bcardtitle.text()).toBe('foobar')
  })

  it('BCardSubTitle child has text prop subTitle', () => {
    const wrapper = mount(BCardBody, {
      props: {subTitle: 'foobar'},
    })
    const $bcardsubtitle = wrapper.getComponent(BCardSubTitle)
    expect($bcardsubtitle.text()).toBe('foobar')
  })

  it('BCardTitle has internal prop tag as prop titleTag', () => {
    const wrapper = mount(BCardBody, {
      props: {title: 'foobar', titleTag: 'span'},
    })
    const $bcardtitle = wrapper.getComponent(BCardTitle)
    expect($bcardtitle.props('tag')).toBe('span')
  })

  it('BCardSubTitle child has internal prop tag as prop subTitle', () => {
    const wrapper = mount(BCardBody, {
      props: {subTitle: 'foobar', subTitleTag: 'span'},
    })
    const $bcardsubtitle = wrapper.getComponent(BCardSubTitle)
    expect($bcardsubtitle.props('tag')).toBe('span')
  })

  it('BCardSubTitle child has internal prop textVariant as prop subTitleTextVariant', () => {
    const wrapper = mount(BCardBody, {
      props: {subTitle: 'foobar', subTitleTextVariant: 'primary'},
    })
    const $bcardsubtitle = wrapper.getComponent(BCardSubTitle)
    expect($bcardsubtitle.props('textVariant')).toBe('primary')
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
      slots: {subTitle: 'subtitle', title: 'title', default: 'default'},
    })
    expect(wrapper.text()).toBe('titlesubtitledefault')
  })
})
