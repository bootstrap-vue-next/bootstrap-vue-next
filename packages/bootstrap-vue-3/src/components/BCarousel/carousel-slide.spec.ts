// @vitest-environment jsdom
import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCarouselSlide from './BCarouselSlide.vue'
// This exists, ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {injectionKey} from './BCarousel.vue'
import BImg from '../BImg.vue'

describe('carousel-slide', () => {
  enableAutoUnmount(afterEach)

  it('tag is div', () => {
    const wrapper = mount(BCarouselSlide)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has static class carousel-item', () => {
    const wrapper = mount(BCarouselSlide)
    expect(wrapper.classes()).toContain('carousel-item')
  })

  it('has class active when prop active', async () => {
    const wrapper = mount(BCarouselSlide, {
      props: {active: true},
    })
    expect(wrapper.classes()).toContain('active')
    await wrapper.setProps({active: false})
    expect(wrapper.classes()).not.toContain('active')
  })

  it('has attr data-bs-interval undefined by default', () => {
    const wrapper = mount(BCarouselSlide)
    expect(wrapper.attributes('data-bs-interval')).toBeUndefined()
  })

  it('has attr data-bs-interval as prop interval', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {interval: 1000},
    })
    expect(wrapper.attributes('data-bs-interval')).toBe('1000')
  })

  it('has attr data-bs-interval as prop interval when string', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {interval: '1000'},
    })
    expect(wrapper.attributes('data-bs-interval')).toBe('1000')
  })

  it('has style background by default', () => {
    const wrapper = mount(BCarouselSlide)
    expect(wrapper.attributes('style')).toContain('background: ')
  })

  it('has style background to include prop background', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {background: 'black'},
      global: {provide: {[injectionKey as unknown as symbol]: {background: ''}}},
    })
    expect(wrapper.attributes('style')).toContain('background: black')
  })

  it('has style background to include parentData background', () => {
    const wrapper = mount(BCarouselSlide, {
      global: {provide: {[injectionKey as unknown as symbol]: {background: 'black'}}},
    })
    expect(wrapper.attributes('style')).toContain('background: black')
  })

  it('contains a BImg in slot img', () => {
    const wrapper = mount(BCarouselSlide)
    const $img = wrapper.findComponent(BImg)
    expect($img.exists()).toBe(true)
  })

  it('does not contain BImg when slot img', () => {
    const wrapper = mount(BCarouselSlide, {
      slots: {img: 'foobar'},
    })
    const $img = wrapper.findComponent(BImg)
    expect($img.exists()).toBe(false)
  })

  it('BImg child has static class d-block', () => {
    const wrapper = mount(BCarouselSlide)
    const $img = wrapper.getComponent(BImg)
    expect($img.classes()).toContain('d-block')
  })

  it('BImg child has static class w-100', () => {
    const wrapper = mount(BCarouselSlide)
    const $img = wrapper.getComponent(BImg)
    expect($img.classes()).toContain('w-100')
  })

  it('BImg child is given prop alt to be prop imgAlt', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {imgAlt: 'foobar'},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('alt')).toBe('foobar')
  })

  it('BImg child is given prop src to be prop imgSrc', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {imgSrc: '/abc'},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('src')).toBe('/abc')
  })

  it('BImg child prop width to be prop imgWidth', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {imgWidth: 100},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('width')).toBe(100)
  })

  it('BImg child prop width to be parentWidth', () => {
    const wrapper = mount(BCarouselSlide, {
      global: {provide: {[injectionKey as unknown as symbol]: {width: 100}}},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('width')).toBe(100)
  })

  it('BImg child prop height is given prop width over parentWidth', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {imgWidth: 500},
      global: {provide: {[injectionKey as unknown as symbol]: {width: 100}}},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('width')).toBe(500)
  })

  it('BImg child prop height to be prop imgHeight', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {imgHeight: 100},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('height')).toBe(100)
  })

  it('BImg child prop height to be parentWidth', () => {
    const wrapper = mount(BCarouselSlide, {
      global: {provide: {[injectionKey as unknown as symbol]: {height: 100}}},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('height')).toBe(100)
  })

  it('BImg child prop height is given prop imgHeight over parentWidth', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {imgHeight: 500},
      global: {provide: {[injectionKey as unknown as symbol]: {height: 100}}},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('height')).toBe(500)
  })

  it('BImg child prop blank is given imgBlank prop', async () => {
    const wrapper = mount(BCarouselSlide, {
      props: {imgBlank: true},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('blank')).toBe(true)
    await wrapper.setProps({imgBlank: false})
    expect($img.props('blank')).toBe(false)
  })

  it('BImg child prop blankColor is given imgBlankColor prop', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {imgBlankColor: 'foobar'},
    })
    const $img = wrapper.getComponent(BImg)
    expect($img.props('blankColor')).toBe('foobar')
  })

  it('does not have dynamic component by default', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1'},
    })
    const $h1 = wrapper.find('h1')
    expect($h1.exists()).toBe(false)
  })

  it('has dynamic component when prop caption', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1', caption: 'foobar'},
    })
    const $h1 = wrapper.find('h1')
    expect($h1.exists()).toBe(true)
  })

  it('has dynamic component when prop captionHtml', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1', captionHtml: '<span>foobar</span>'},
    })
    const $h1 = wrapper.find('h1')
    expect($h1.exists()).toBe(true)
  })

  it('has dynamic component when prop textHtml', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1', textHtml: '<span>foobar</span>'},
    })
    const $h1 = wrapper.find('h1')
    expect($h1.exists()).toBe(true)
  })

  it('has dynamic component when slot default', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1'},
      slots: {default: 'foobar'},
    })
    const $h1 = wrapper.find('h1')
    expect($h1.exists()).toBe(true)
  })

  it('dynamic component child has static class caarousel-caption', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1'},
      slots: {default: 'foobar'},
    })
    const $h1 = wrapper.get('h1')
    expect($h1.classes()).toContain('carousel-caption')
  })

  it('dynamic component child has class d-none when prop contentVisibleUp', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1', contentVisibleUp: 'foo'},
      slots: {default: 'foobar'},
    })
    const $h1 = wrapper.get('h1')
    expect($h1.classes()).toContain('d-none')
  })

  it('dynamic component child has class d-{type}-block when prop contentVisibleUp', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1', contentVisibleUp: 'foo'},
      slots: {default: 'foobar'},
    })
    const $h1 = wrapper.get('h1')
    expect($h1.classes()).toContain('d-foo-block')
  })

  it('dynamic component child does not have child dynamic component h3 child by default', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1'},
      slots: {default: 'foobar'},
    })
    const $h1 = wrapper.get('h1')
    const $h3 = $h1.find('h3')
    expect($h3.exists()).toBe(false)
  })

  it('dynamic component child has child dynamic component h3 child when prop caption', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1', caption: 'foo'},
      slots: {default: 'foobar'},
    })
    const $h1 = wrapper.get('h1')
    const $h3 = $h1.find('h3')
    expect($h3.exists()).toBe(true)
  })

  it('dynamic component child has child dynamic component h3 child when prop captionHtml', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1', captionHtml: '<span>foo</span>'},
      slots: {default: 'foobar'},
    })
    const $h1 = wrapper.get('h1')
    const $h3 = $h1.find('h3')
    expect($h3.exists()).toBe(true)
  })

  it('dynamic component child captionTag is dynamic child', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1', captionTag: 'h5', caption: 'foo'},
      slots: {default: 'foobar'},
    })
    const $h1 = wrapper.get('h1')
    const $h5 = $h1.find('h5')
    expect($h5.exists()).toBe(true)
  })

  it('dynamic component child caption child has span child', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1', captionTag: 'h5', captionHtml: '<h2>foo</h2>'},
      slots: {default: 'foobar'},
    })
    const $h1 = wrapper.get('h1')
    const $h5 = $h1.get('h5')
    const $span = $h5.find('span')
    expect($span.exists()).toBe(true)
  })

  it('dynamic component child caption child span child renders html when prop captionHtml', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1', captionTag: 'h5', captionHtml: '<h2>foo</h2>'},
      slots: {default: 'foobar'},
    })
    const $h1 = wrapper.get('h1')
    const $h5 = $h1.get('h5')
    const $span = $h5.get('span')
    const $h2 = $span.find('h2')
    expect($h2.exists()).toBe(true)
    expect($h2.text()).toBe('foo')
  })

  it('dynamic component child caption child span child has text when prop caption', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1', captionTag: 'h5', caption: 'foo'},
      slots: {default: 'foobar'},
    })
    const $h1 = wrapper.get('h1')
    const $h5 = $h1.get('h5')
    const $span = $h5.get('span')
    expect($span.text()).toBe('foo')
  })

  it('dynamic component child caption child span child prefers prop captionHtml over prop caption', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1', captionTag: 'h5', caption: 'foo', captionHtml: '<h2>bar</h2>'},
      slots: {default: 'foobar'},
    })
    const $h1 = wrapper.get('h1')
    const $h5 = $h1.get('h5')
    const $span = $h5.get('span')
    expect($span.text()).toBe('bar')
  })

  it('dynamic component child text when prop text', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1', textTag: 'h5', text: 'foo'},
      slots: {default: 'foobar'},
    })
    const $h1 = wrapper.get('h1')
    const $h5 = $h1.find('h5')
    expect($h5.exists()).toBe(true)
  })

  it('dynamic component child text has span tag', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1', textTag: 'h5', text: 'foo'},
      slots: {default: 'foobar'},
    })
    const $h1 = wrapper.get('h1')
    const $h5 = $h1.get('h5')
    const $span = $h5.find('span')
    expect($span.exists()).toBe(true)
  })

  it('dynamic component child text span tag renders prop text', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1', textTag: 'h5', text: 'foo'},
      slots: {default: 'foobar'},
    })
    const $h1 = wrapper.get('h1')
    const $h5 = $h1.get('h5')
    const $span = $h5.get('span')
    expect($span.text()).toBe('foo')
  })

  it('dynamic component child text has span tag when textHtml', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1', textTag: 'h5', textHtml: '<h2>foo</h2>'},
      slots: {default: 'foobar'},
    })
    const $h1 = wrapper.get('h1')
    const $h5 = $h1.get('h5')
    const $span = $h5.get('span')
    const $h2 = $span.find('h2')
    expect($h2.exists()).toBe(true)
    expect($h2.text()).toBe('foo')
  })

  it('dynamic component child text has span tag prefers prop text over prop textHtml', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1', textTag: 'h5', textHtml: 'foo', text: 'bar'},
      slots: {default: 'foobar'},
    })
    const $h1 = wrapper.get('h1')
    const $h5 = $h1.get('h5')
    const $span = $h5.get('span')
    expect($span.text()).toBe('foo')
  })

  it('dynamic component child renders default slot', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1'},
      slots: {default: 'foobar'},
    })
    const $h1 = wrapper.get('h1')
    expect($h1.text()).toBe('foobar')
  })

  it('renders everything in the correct order', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {contentTag: 'h1', text: 'text', caption: 'caption'},
      slots: {default: 'slot', img: 'img'},
    })
    expect(wrapper.text()).toBe('imgcaptiontextslot')
  })
})
