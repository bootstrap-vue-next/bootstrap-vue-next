import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCardBody from './BCardBody.vue'
import BCardTitle from './BCardTitle.vue'
import BCardSubtitle from './BCardSubtitle.vue'

describe('card-body', () => {
  enableAutoUnmount(afterEach)

  it('has static class card-body', () => {
    const wrapper = mount(BCardBody)
    expect(wrapper.classes()).toContain('card-body')
  })

  it('tag is div by default', () => {
    const wrapper = mount(BCardBody)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BCardBody, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('tag is reactive', async () => {
    const wrapper = mount(BCardBody, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
    await wrapper.setProps({tag: 'section'})
    expect(wrapper.element.tagName).toBe('SECTION')
  })

  it('renders empty by default', () => {
    const wrapper = mount(BCardBody)
    expect(wrapper.text()).toBe('')
  })

  it('has class text-bg-{type} when prop variant', async () => {
    const wrapper = mount(BCardBody, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('text-bg-primary')
    await wrapper.setProps({variant: 'danger'})
    expect(wrapper.classes()).toContain('text-bg-danger')
    expect(wrapper.classes()).not.toContain('text-bg-primary')
    await wrapper.setProps({variant: null})
    expect(wrapper.classes()).not.toContain('text-bg-danger')
  })

  it('has class text-{type} when prop textVariant', async () => {
    const wrapper = mount(BCardBody, {
      props: {textVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('text-primary')
    await wrapper.setProps({textVariant: 'danger'})
    expect(wrapper.classes()).toContain('text-danger')
    expect(wrapper.classes()).not.toContain('text-primary')
    await wrapper.setProps({textVariant: null})
    expect(wrapper.classes()).not.toContain('text-danger')
  })

  it('has class bg-{type} when prop bgVariant', async () => {
    const wrapper = mount(BCardBody, {
      props: {bgVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('bg-primary')
    await wrapper.setProps({bgVariant: 'danger'})
    expect(wrapper.classes()).toContain('bg-danger')
    expect(wrapper.classes()).not.toContain('bg-primary')
    await wrapper.setProps({bgVariant: null})
    expect(wrapper.classes()).not.toContain('bg-danger')
  })

  it('has class border-{type} when prop borderVariant', async () => {
    const wrapper = mount(BCardBody, {
      props: {borderVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('border-primary')
    await wrapper.setProps({borderVariant: 'danger'})
    expect(wrapper.classes()).toContain('border-danger')
    expect(wrapper.classes()).not.toContain('border-primary')
    await wrapper.setProps({borderVariant: null})
    expect(wrapper.classes()).not.toContain('border-danger')
  })

  it('card-body class persists when variant classes are applied', () => {
    const wrapper = mount(BCardBody, {
      props: {
        variant: 'primary',
        textVariant: 'white',
        bgVariant: 'dark',
        borderVariant: 'info',
      },
    })
    expect(wrapper.classes()).toContain('card-body')
    expect(wrapper.classes()).toContain('text-bg-primary')
    expect(wrapper.classes()).toContain('text-white')
    expect(wrapper.classes()).toContain('bg-dark')
    expect(wrapper.classes()).toContain('border-info')
  })

  it('has class card-img-overlay when prop overlay is true', () => {
    const wrapper = mount(BCardBody, {
      props: {overlay: true},
    })
    expect(wrapper.classes()).toContain('card-img-overlay')
    expect(wrapper.classes()).not.toContain('card-body')
  })

  it('overlay class is reactive', async () => {
    const wrapper = mount(BCardBody, {
      props: {overlay: false},
    })
    expect(wrapper.classes()).toContain('card-body')
    expect(wrapper.classes()).not.toContain('card-img-overlay')
    await wrapper.setProps({overlay: true})
    expect(wrapper.classes()).toContain('card-img-overlay')
    expect(wrapper.classes()).not.toContain('card-body')
    await wrapper.setProps({overlay: false})
    expect(wrapper.classes()).toContain('card-body')
    expect(wrapper.classes()).not.toContain('card-img-overlay')
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

  it('BCardTitle child has text from title slot', () => {
    const wrapper = mount(BCardBody, {
      slots: {title: 'foobar'},
    })
    const $bcardtitle = wrapper.getComponent(BCardTitle)
    expect($bcardtitle.text()).toBe('foobar')
  })

  it('BCardSubtitle child has text from subtitle slot', () => {
    const wrapper = mount(BCardBody, {
      slots: {subtitle: 'foobar'},
    })
    const $cardsubtitle = wrapper.getComponent(BCardSubtitle)
    expect($cardsubtitle.text()).toBe('foobar')
  })

  it('BCardTitle child has text from title prop', () => {
    const wrapper = mount(BCardBody, {
      props: {title: 'foobar'},
    })
    const $bcardtitle = wrapper.getComponent(BCardTitle)
    expect($bcardtitle.text()).toBe('foobar')
  })

  it('BCardSubtitle child has text from subtitle prop', () => {
    const wrapper = mount(BCardBody, {
      props: {subtitle: 'foobar'},
    })
    const $cardsubtitle = wrapper.getComponent(BCardSubtitle)
    expect($cardsubtitle.text()).toBe('foobar')
  })

  it('title slot takes precedence over title prop', () => {
    const wrapper = mount(BCardBody, {
      props: {title: 'proptext'},
      slots: {title: 'slottext'},
    })
    const $bcardtitle = wrapper.getComponent(BCardTitle)
    expect($bcardtitle.text()).toBe('slottext')
  })

  it('subtitle slot takes precedence over subtitle prop', () => {
    const wrapper = mount(BCardBody, {
      props: {subtitle: 'proptext'},
      slots: {subtitle: 'slottext'},
    })
    const $cardsubtitle = wrapper.getComponent(BCardSubtitle)
    expect($cardsubtitle.text()).toBe('slottext')
  })

  it('title slot renders HTML content', () => {
    const wrapper = mount(BCardBody, {
      slots: {title: '<em>emphasized</em>'},
    })
    const $bcardtitle = wrapper.getComponent(BCardTitle)
    expect($bcardtitle.find('em').exists()).toBe(true)
    expect($bcardtitle.find('em').text()).toBe('emphasized')
  })

  it('subtitle slot renders HTML content', () => {
    const wrapper = mount(BCardBody, {
      slots: {subtitle: '<strong>bold</strong>'},
    })
    const $cardsubtitle = wrapper.getComponent(BCardSubtitle)
    expect($cardsubtitle.find('strong').exists()).toBe(true)
    expect($cardsubtitle.find('strong').text()).toBe('bold')
  })

  it('default slot renders HTML content', () => {
    const wrapper = mount(BCardBody, {
      slots: {default: '<span class="custom">content</span>'},
    })
    expect(wrapper.find('span.custom').exists()).toBe(true)
    expect(wrapper.find('span.custom').text()).toBe('content')
  })

  it('title prop is reactive', async () => {
    const wrapper = mount(BCardBody, {
      props: {title: 'initial'},
    })
    const $bcardtitle = wrapper.getComponent(BCardTitle)
    expect($bcardtitle.text()).toBe('initial')
    await wrapper.setProps({title: 'updated'})
    expect(wrapper.getComponent(BCardTitle).text()).toBe('updated')
  })

  it('subtitle prop is reactive', async () => {
    const wrapper = mount(BCardBody, {
      props: {subtitle: 'initial'},
    })
    const $cardsubtitle = wrapper.getComponent(BCardSubtitle)
    expect($cardsubtitle.text()).toBe('initial')
    await wrapper.setProps({subtitle: 'updated'})
    expect(wrapper.getComponent(BCardSubtitle).text()).toBe('updated')
  })

  it('text prop is reactive', async () => {
    const wrapper = mount(BCardBody, {
      props: {text: 'initial'},
    })
    expect(wrapper.text()).toBe('initial')
    await wrapper.setProps({text: 'updated'})
    expect(wrapper.text()).toBe('updated')
  })

  it('BCardTitle has default tag h4 passed through', () => {
    const wrapper = mount(BCardBody, {
      props: {title: 'foobar'},
    })
    const $bcardtitle = wrapper.getComponent(BCardTitle)
    expect($bcardtitle.props('tag')).toBe('h4')
  })

  it('BCardSubtitle has default tag h4 passed through', () => {
    const wrapper = mount(BCardBody, {
      props: {subtitle: 'foobar'},
    })
    const $cardsubtitle = wrapper.getComponent(BCardSubtitle)
    expect($cardsubtitle.props('tag')).toBe('h4')
  })

  it('BCardTitle has prop tag as prop titleTag', () => {
    const wrapper = mount(BCardBody, {
      props: {title: 'foobar', titleTag: 'span'},
    })
    const $bcardtitle = wrapper.getComponent(BCardTitle)
    expect($bcardtitle.props('tag')).toBe('span')
  })

  it('BCardSubtitle has prop tag as prop subtitleTag', () => {
    const wrapper = mount(BCardBody, {
      props: {subtitle: 'foobar', subtitleTag: 'span'},
    })
    const $cardsubtitle = wrapper.getComponent(BCardSubtitle)
    expect($cardsubtitle.props('tag')).toBe('span')
  })

  it('titleTag is reactive', async () => {
    const wrapper = mount(BCardBody, {
      props: {title: 'foobar', titleTag: 'span'},
    })
    expect(wrapper.getComponent(BCardTitle).props('tag')).toBe('span')
    await wrapper.setProps({titleTag: 'h2'})
    expect(wrapper.getComponent(BCardTitle).props('tag')).toBe('h2')
  })

  it('subtitleTag is reactive', async () => {
    const wrapper = mount(BCardBody, {
      props: {subtitle: 'foobar', subtitleTag: 'span'},
    })
    expect(wrapper.getComponent(BCardSubtitle).props('tag')).toBe('span')
    await wrapper.setProps({subtitleTag: 'h3'})
    expect(wrapper.getComponent(BCardSubtitle).props('tag')).toBe('h3')
  })

  it('BCardSubtitle has prop textVariant as prop subtitleTextVariant', () => {
    const wrapper = mount(BCardBody, {
      props: {subtitle: 'foobar', subtitleTextVariant: 'primary'},
    })
    const $cardsubtitle = wrapper.getComponent(BCardSubtitle)
    expect($cardsubtitle.props('textVariant')).toBe('primary')
  })

  it('subtitleTextVariant is reactive', async () => {
    const wrapper = mount(BCardBody, {
      props: {subtitle: 'foobar', subtitleTextVariant: 'primary'},
    })
    expect(wrapper.getComponent(BCardSubtitle).props('textVariant')).toBe('primary')
    await wrapper.setProps({subtitleTextVariant: 'danger'})
    expect(wrapper.getComponent(BCardSubtitle).props('textVariant')).toBe('danger')
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

  it('renders content in order: title, subtitle, default', () => {
    const wrapper = mount(BCardBody, {
      slots: {subtitle: 'subtitle', title: 'title', default: 'default'},
    })
    expect(wrapper.text()).toBe('titlesubtitledefault')
  })

  it('BCardTitle appears before BCardSubtitle in DOM', () => {
    const wrapper = mount(BCardBody, {
      props: {title: 'title', subtitle: 'subtitle'},
    })
    const {children} = wrapper.element
    const titleIndex = Array.from(children).findIndex((el) => el.classList.contains('card-title'))
    const subtitleIndex = Array.from(children).findIndex((el) =>
      el.classList.contains('card-subtitle')
    )
    expect(titleIndex).toBeLessThan(subtitleIndex)
  })
})
