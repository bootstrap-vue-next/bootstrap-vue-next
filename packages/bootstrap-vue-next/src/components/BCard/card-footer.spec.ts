import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardFooter from './BCardFooter.vue'
import BCardHeadFoot from '../BCardHeadFoot.vue'

describe('card-footer', () => {
  enableAutoUnmount(afterEach)

  it('has static class card-footer', () => {
    const wrapper = mount(BCardFooter)
    expect(wrapper.classes()).toContain('card-footer')
  })

  it('has child of BCardHeadFoot', () => {
    const wrapper = mount(BCardFooter)
    const $headfoot = wrapper.findComponent(BCardHeadFoot)
    expect($headfoot.exists()).toBe(true)
  })

  it('tag is div by default', () => {
    const wrapper = mount(BCardFooter)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BCardFooter, {
      props: {tag: 'footer'},
    })
    expect(wrapper.element.tagName).toBe('FOOTER')
  })

  it('tag reacts to prop changes', async () => {
    const wrapper = mount(BCardFooter, {
      props: {tag: 'div'},
    })
    expect(wrapper.element.tagName).toBe('DIV')
    await wrapper.setProps({tag: 'section'})
    expect(wrapper.element.tagName).toBe('SECTION')
  })

  it('gives prop text to child', async () => {
    const wrapper = mount(BCardFooter, {
      props: {text: 'foobar'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('text')).toBe('foobar')
    await wrapper.setProps({text: 'baz'})
    expect($headfoot.props('text')).toBe('baz')
  })

  it('gives prop bgVariant to child', async () => {
    const wrapper = mount(BCardFooter, {
      props: {bgVariant: 'danger'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('bgVariant')).toBe('danger')
    await wrapper.setProps({bgVariant: 'success'})
    expect($headfoot.props('bgVariant')).toBe('success')
  })

  it('gives prop borderVariant to child', async () => {
    const wrapper = mount(BCardFooter, {
      props: {borderVariant: 'danger'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('borderVariant')).toBe('danger')
    await wrapper.setProps({borderVariant: 'warning'})
    expect($headfoot.props('borderVariant')).toBe('warning')
  })

  it('gives prop tag to child', async () => {
    const wrapper = mount(BCardFooter, {
      props: {tag: 'span'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('tag')).toBe('span')
    await wrapper.setProps({tag: 'footer'})
    expect($headfoot.props('tag')).toBe('footer')
  })

  it('gives prop textVariant to child', async () => {
    const wrapper = mount(BCardFooter, {
      props: {textVariant: 'danger'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('textVariant')).toBe('danger')
    await wrapper.setProps({textVariant: 'info'})
    expect($headfoot.props('textVariant')).toBe('info')
  })

  it('gives prop variant to child', async () => {
    const wrapper = mount(BCardFooter, {
      props: {variant: 'primary'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.props('variant')).toBe('primary')
    await wrapper.setProps({variant: 'secondary'})
    expect($headfoot.props('variant')).toBe('secondary')
  })

  it('has class text-bg-{type} when prop variant', async () => {
    const wrapper = mount(BCardFooter, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('text-bg-primary')
    await wrapper.setProps({variant: 'danger'})
    expect(wrapper.classes()).toContain('text-bg-danger')
    expect(wrapper.classes()).not.toContain('text-bg-primary')
    await wrapper.setProps({variant: undefined})
    expect(wrapper.classes()).not.toContain('text-bg-danger')
  })

  it('has class text-{type} when prop textVariant', async () => {
    const wrapper = mount(BCardFooter, {
      props: {textVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('text-primary')
    await wrapper.setProps({textVariant: 'danger'})
    expect(wrapper.classes()).toContain('text-danger')
    expect(wrapper.classes()).not.toContain('text-primary')
    await wrapper.setProps({textVariant: undefined})
    expect(wrapper.classes()).not.toContain('text-danger')
  })

  it('has class bg-{type} when prop bgVariant', async () => {
    const wrapper = mount(BCardFooter, {
      props: {bgVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('bg-primary')
    await wrapper.setProps({bgVariant: 'danger'})
    expect(wrapper.classes()).toContain('bg-danger')
    expect(wrapper.classes()).not.toContain('bg-primary')
    await wrapper.setProps({bgVariant: undefined})
    expect(wrapper.classes()).not.toContain('bg-danger')
  })

  it('has class border-{type} when prop borderVariant', async () => {
    const wrapper = mount(BCardFooter, {
      props: {borderVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('border-primary')
    await wrapper.setProps({borderVariant: 'danger'})
    expect(wrapper.classes()).toContain('border-danger')
    expect(wrapper.classes()).not.toContain('border-primary')
    await wrapper.setProps({borderVariant: undefined})
    expect(wrapper.classes()).not.toContain('border-danger')
  })

  it('card-footer class persists with variant classes', () => {
    const wrapper = mount(BCardFooter, {
      props: {
        variant: 'primary',
        textVariant: 'danger',
        bgVariant: 'success',
        borderVariant: 'warning',
      },
    })
    expect(wrapper.classes()).toContain('card-footer')
    expect(wrapper.classes()).toContain('text-bg-primary')
    expect(wrapper.classes()).toContain('text-danger')
    expect(wrapper.classes()).toContain('bg-success')
    expect(wrapper.classes()).toContain('border-warning')
  })

  it('renders prop text', () => {
    const wrapper = mount(BCardFooter, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders prop text reactively', async () => {
    const wrapper = mount(BCardFooter, {
      props: {text: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
    await wrapper.setProps({text: 'changed'})
    expect(wrapper.text()).toBe('changed')
  })

  it('renders empty when no text or slot', () => {
    const wrapper = mount(BCardFooter)
    expect(wrapper.text()).toBe('')
  })

  it('renders default slot', () => {
    const wrapper = mount(BCardFooter, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders default slot with HTML content', () => {
    const wrapper = mount(BCardFooter, {
      slots: {default: '<span class="custom">footer content</span>'},
    })
    const $span = wrapper.find('.custom')
    expect($span.exists()).toBe(true)
    expect($span.text()).toBe('footer content')
  })

  it('renders default slot over prop text', () => {
    const wrapper = mount(BCardFooter, {
      props: {text: 'props'},
      slots: {default: 'slots'},
    })
    expect(wrapper.text()).toBe('slots')
  })

  it('renders slot content in BCardHeadFoot child', () => {
    const wrapper = mount(BCardFooter, {
      slots: {default: 'foobar'},
    })
    const $headfoot = wrapper.getComponent(BCardHeadFoot)
    expect($headfoot.text()).toBe('foobar')
  })
})
