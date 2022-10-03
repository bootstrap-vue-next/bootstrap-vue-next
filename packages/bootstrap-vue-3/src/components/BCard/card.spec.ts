import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BCard from './BCard.vue'
import BCardImg from './BCardImg.vue'
import BCardHeader from './BCardHeader.vue'
import BCardBody from './BCardBody.vue'
import BCardFooter from './BCardFooter.vue'

describe('card', () => {
  enableAutoUnmount(afterEach)

  it('tag is div by default', () => {
    const wrapper = mount(BCard)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BCard, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has static class card', () => {
    const wrapper = mount(BCard)
    expect(wrapper.classes()).toContain('card')
  })

  it('has class text-{type} when prop align', async () => {
    const wrapper = mount(BCard, {
      props: {align: 'fill'},
    })
    expect(wrapper.classes()).toContain('text-fill')
    await wrapper.setProps({align: undefined})
    expect(wrapper.classes()).not.toContain('text-fill')
  })

  it('has class text-{type} when prop textVariant', async () => {
    const wrapper = mount(BCard, {
      props: {textVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('text-primary')
    await wrapper.setProps({textVariant: undefined})
    expect(wrapper.classes()).not.toContain('text-primary')
  })

  it('has class bg-{type} when prop bgVariant', async () => {
    const wrapper = mount(BCard, {
      props: {bgVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('bg-primary')
    await wrapper.setProps({bgVariant: undefined})
    expect(wrapper.classes()).not.toContain('bg-primary')
  })

  it('has class border-{type} when prop textVariant', async () => {
    const wrapper = mount(BCard, {
      props: {borderVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('border-primary')
    await wrapper.setProps({borderVariant: undefined})
    expect(wrapper.classes()).not.toContain('border-primary')
  })

  it('has class flex-row when prop imgLeft', async () => {
    const wrapper = mount(BCard, {
      props: {imgLeft: true},
    })
    expect(wrapper.classes()).toContain('flex-row')
    await wrapper.setProps({imgLeft: undefined})
    expect(wrapper.classes()).not.toContain('flex-row')
  })

  it('has class flex-row when prop imgStart', async () => {
    const wrapper = mount(BCard, {
      props: {imgStart: true},
    })
    expect(wrapper.classes()).toContain('flex-row')
    await wrapper.setProps({imgStart: undefined})
    expect(wrapper.classes()).not.toContain('flex-row')
  })

  it('has class flex-row-reverse when prop imgEnd', async () => {
    const wrapper = mount(BCard, {
      props: {imgEnd: true},
    })
    expect(wrapper.classes()).toContain('flex-row-reverse')
    await wrapper.setProps({imgEnd: undefined})
    expect(wrapper.classes()).not.toContain('flex-row-reverse')
  })

  it('has class flex-row-reverse when prop imgRight', async () => {
    const wrapper = mount(BCard, {
      props: {imgRight: true},
    })
    expect(wrapper.classes()).toContain('flex-row-reverse')
    await wrapper.setProps({imgRight: undefined})
    expect(wrapper.classes()).not.toContain('flex-row-reverse')
  })

  it('renders img slot', () => {
    const wrapper = mount(BCard, {
      slots: {img: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders img in correct order when not prop imgBottom', () => {
    const wrapper = mount(BCard, {
      props: {header: 'header', bodyText: 'bodyText', footer: 'footer', imgBottom: false},
      slots: {img: 'img'},
    })
    expect(wrapper.text()).toBe('imgheaderbodyTextfooter')
  })

  it('does not render b-card-img when slot img', () => {
    const wrapper = mount(BCard, {
      slots: {img: 'img'},
    })
    const $cardimg = wrapper.findComponent(BCardImg)
    expect($cardimg.exists()).toBe(false)
  })

  it('renders img in correct order when prop imgBottom', () => {
    const wrapper = mount(BCard, {
      props: {header: 'header', bodyText: 'bodyText', footer: 'footer', imgBottom: true},
      slots: {img: 'img'},
    })
    expect(wrapper.text()).toBe('headerbodyTextfooterimg')
  })

  it('does not have child BCardImg by default', () => {
    const wrapper = mount(BCard)
    const $img = wrapper.findComponent(BCardImg)
    expect($img.exists()).toBe(false)
  })

  it('has child BCardImg when prop imgSrc', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc'},
    })
    const $img = wrapper.findComponent(BCardImg)
    expect($img.exists()).toBe(true)
  })

  it('child BCardImg has its prop src as imgSrc', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc'},
    })
    const $img = wrapper.getComponent(BCardImg)
    expect($img.props('src')).toBe('/abc')
  })

  it('child BCardImg has its prop alt as imgAlt', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc', imgAlt: 'foobar'},
    })
    const $img = wrapper.getComponent(BCardImg)
    expect($img.props('alt')).toBe('foobar')
  })

  it('child BCardImg has its prop width as imgWidth', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc', imgWidth: 100},
    })
    const $img = wrapper.getComponent(BCardImg)
    expect($img.props('width')).toBe(100)
  })

  it('child BCardImg has its prop width as imgWidth string', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc', imgWidth: '100'},
    })
    const $img = wrapper.getComponent(BCardImg)
    expect($img.props('width')).toBe('100')
  })

  it('child BCardImg has its prop height as imgHeight', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc', imgHeight: 100},
    })
    const $img = wrapper.getComponent(BCardImg)
    expect($img.props('height')).toBe(100)
  })

  it('child BCardImg has its prop height as imgHeight string', () => {
    const wrapper = mount(BCard, {
      props: {imgSrc: '/abc', imgHeight: '100'},
    })
    const $img = wrapper.getComponent(BCardImg)
    expect($img.props('height')).toBe('100')
  })

  it('does not have child BCardHeader by default', () => {
    const wrapper = mount(BCard)
    const $header = wrapper.findComponent(BCardHeader)
    expect($header.exists()).toBe(false)
  })

  it('has child BCardHeader when prop header', () => {
    const wrapper = mount(BCard, {
      props: {header: 'foobar'},
    })
    const $header = wrapper.findComponent(BCardHeader)
    expect($header.exists()).toBe(true)
  })

  it('has child BCardHeader when slot header', () => {
    const wrapper = mount(BCard, {
      slots: {header: 'foobar'},
    })
    const $header = wrapper.findComponent(BCardHeader)
    expect($header.exists()).toBe(true)
  })

  it('has child BCardHeader when prop headerHtml', () => {
    const wrapper = mount(BCard, {
      props: {headerHtml: 'foobar'},
    })
    const $header = wrapper.findComponent(BCardHeader)
    expect($header.exists()).toBe(true)
  })

  it('child BCardHeader is given class of headerClass', () => {
    const wrapper = mount(BCard, {
      props: {header: 'foobar', headerClass: ['foobar']},
    })
    const $header = wrapper.getComponent(BCardHeader)
    expect($header.classes()).toContain('foobar')
  })

  it('child BCardHeader has internal prop bgVariant as prop headerBgVariant', () => {
    const wrapper = mount(BCard, {
      props: {header: 'foobar', headerBgVariant: 'danger'},
    })
    const $header = wrapper.getComponent(BCardHeader)
    expect($header.props('bgVariant')).toBe('danger')
  })

  it('child BCardHeader has internal prop borderVariant as prop headerBorderVariant', () => {
    const wrapper = mount(BCard, {
      props: {header: 'foobar', headerBorderVariant: 'danger'},
    })
    const $header = wrapper.getComponent(BCardHeader)
    expect($header.props('borderVariant')).toBe('danger')
  })

  it('child BCardHeader has internal prop html as prop headerHtml', () => {
    const wrapper = mount(BCard, {
      props: {header: 'foobar', headerHtml: '<h1>foobar</h1>'},
    })
    const $header = wrapper.getComponent(BCardHeader)
    expect($header.props('html')).toBe('<h1>foobar</h1>')
  })

  it('child BCardHeader has internal prop tag as prop headerTag', () => {
    const wrapper = mount(BCard, {
      props: {header: 'foobar', headerTag: 'span'},
    })
    const $header = wrapper.getComponent(BCardHeader)
    expect($header.props('tag')).toBe('span')
  })

  it('child BCardHeader has internal prop textVariant as prop headerTextVariant', () => {
    const wrapper = mount(BCard, {
      props: {header: 'foobar', headerTextVariant: 'danger'},
    })
    const $header = wrapper.getComponent(BCardHeader)
    expect($header.props('textVariant')).toBe('danger')
  })

  it('child BCardHeader text is prop header', () => {
    const wrapper = mount(BCard, {
      props: {header: 'foobar'},
    })
    const $header = wrapper.getComponent(BCardHeader)
    expect($header.text()).toBe('foobar')
  })

  it('child BCardHeader text is slot header', () => {
    const wrapper = mount(BCard, {
      slots: {header: 'foobar'},
    })
    const $header = wrapper.getComponent(BCardHeader)
    expect($header.text()).toBe('foobar')
  })

  it('child BCardHeader text prefers slot header over prop header', () => {
    const wrapper = mount(BCard, {
      slots: {header: 'slots'},
      props: {header: 'props'},
    })
    const $header = wrapper.getComponent(BCardHeader)
    expect($header.text()).toBe('slots')
  })

  it('has child BCardBody by default', () => {
    const wrapper = mount(BCard)
    const $body = wrapper.findComponent(BCardBody)
    expect($body.exists()).toBe(true)
  })

  it('does not have child BCardBody when prop noBdoy', () => {
    const wrapper = mount(BCard, {
      props: {noBody: true},
    })
    const $body = wrapper.findComponent(BCardBody)
    expect($body.exists()).toBe(false)
  })

  it('child BCardBody text is prop bodyText', () => {
    const wrapper = mount(BCard, {
      props: {bodyText: 'foobar'},
    })
    const $body = wrapper.getComponent(BCardBody)
    expect($body.text()).toBe('foobar')
  })

  it('child BCardBody text is slot default', () => {
    const wrapper = mount(BCard, {
      slots: {default: 'foobar'},
    })
    const $body = wrapper.getComponent(BCardBody)
    expect($body.text()).toBe('foobar')
  })

  it('child BCardBody text prefers slot default over prop bodyText', () => {
    const wrapper = mount(BCard, {
      slots: {default: 'slots'},
      props: {bodyText: 'props'},
    })
    const $body = wrapper.getComponent(BCardBody)
    expect($body.text()).toBe('slots')
  })

  it('renders default slot when prop noBody', () => {
    const wrapper = mount(BCard, {
      props: {noBody: true},
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders prop bodyText when prop noBody', () => {
    const wrapper = mount(BCard, {
      props: {noBody: true, bodyText: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders default slot over prop bodyText when prop noBody', () => {
    const wrapper = mount(BCard, {
      props: {noBody: true, bodyText: 'props'},
      slots: {default: 'slots'},
    })
    expect(wrapper.text()).toBe('slots')
  })

  it('child BCardBody is given prop bodyClass', () => {
    const wrapper = mount(BCard, {
      props: {bodyClass: ['foobar']},
    })
    const $body = wrapper.getComponent(BCardBody)
    expect($body.classes()).toContain('foobar')
  })

  it('child BCardHeader has internal prop overlay as prop overlay', () => {
    const wrapper = mount(BCard, {
      props: {overlay: true},
    })
    const $body = wrapper.getComponent(BCardBody)
    expect($body.props('overlay')).toBe(true)
  })

  it('child BCardHeader has internal prop bodyBgVariant as prop bodyBgVariant', () => {
    const wrapper = mount(BCard, {
      props: {bodyBgVariant: 'danger'},
    })
    const $body = wrapper.getComponent(BCardBody)
    expect($body.props('bodyBgVariant')).toBe('danger')
  })

  it('child BCardHeader has internal prop bodyTag as prop bodyTag', () => {
    const wrapper = mount(BCard, {
      props: {bodyTag: 'span'},
    })
    const $body = wrapper.getComponent(BCardBody)
    expect($body.props('bodyTag')).toBe('span')
  })

  it('child BCardHeader has internal prop bodyTextVariant as prop bodyTextVariant', () => {
    const wrapper = mount(BCard, {
      props: {bodyTextVariant: 'danger'},
    })
    const $body = wrapper.getComponent(BCardBody)
    expect($body.props('bodyTextVariant')).toBe('danger')
  })

  it('child BCardHeader has internal prop subtitle as prop subtitle', () => {
    const wrapper = mount(BCard, {
      props: {subtitle: 'foobar'},
    })
    const $body = wrapper.getComponent(BCardBody)
    expect($body.props('subtitle')).toBe('foobar')
  })

  it('child BCardHeader has internal prop subtitleTag as prop subtitleTag', () => {
    const wrapper = mount(BCard, {
      props: {subtitleTag: 'span'},
    })
    const $body = wrapper.getComponent(BCardBody)
    expect($body.props('subtitleTag')).toBe('span')
  })

  it('child BCardHeader has internal prop subtitleTextVariant as prop subtitleTextVariant', () => {
    const wrapper = mount(BCard, {
      props: {subtitleTextVariant: 'danger'},
    })
    const $body = wrapper.getComponent(BCardBody)
    expect($body.props('subtitleTextVariant')).toBe('danger')
  })

  it('child BCardHeader has internal prop title as prop title', () => {
    const wrapper = mount(BCard, {
      props: {title: 'foobar'},
    })
    const $body = wrapper.getComponent(BCardBody)
    expect($body.props('title')).toBe('foobar')
  })

  it('child BCardHeader has internal prop titleTag as prop titleTag', () => {
    const wrapper = mount(BCard, {
      props: {titleTag: 'span'},
    })
    const $body = wrapper.getComponent(BCardBody)
    expect($body.props('titleTag')).toBe('span')
  })

  it('does not have child BCardFooter by default', () => {
    const wrapper = mount(BCard)
    const $footer = wrapper.findComponent(BCardFooter)
    expect($footer.exists()).toBe(false)
  })

  it('has child BCardFooter when prop footer', () => {
    const wrapper = mount(BCard, {
      props: {footer: 'foobar'},
    })
    const $footer = wrapper.findComponent(BCardFooter)
    expect($footer.exists()).toBe(true)
  })

  it('has child BCardFooter when slot footer', () => {
    const wrapper = mount(BCard, {
      slots: {footer: 'foobar'},
    })
    const $footer = wrapper.findComponent(BCardFooter)
    expect($footer.exists()).toBe(true)
  })

  it('has child BCardFooter when prop footerHtml', () => {
    const wrapper = mount(BCard, {
      props: {footerHtml: '<h1>foobar</h1>'},
    })
    const $footer = wrapper.findComponent(BCardFooter)
    expect($footer.exists()).toBe(true)
  })

  it('child BCardFooter contains class prop footerClass', () => {
    const wrapper = mount(BCard, {
      props: {footer: 'foobar', footerClass: ['foobar']},
    })
    const $footer = wrapper.getComponent(BCardFooter)
    expect($footer.classes()).toContain('foobar')
  })

  it('child BCardFooter has internal prop bgVariant as prop footerBgVariant', () => {
    const wrapper = mount(BCard, {
      props: {footer: 'foobar', footerBgVariant: 'danger'},
    })
    const $footer = wrapper.getComponent(BCardFooter)
    expect($footer.props('bgVariant')).toBe('danger')
  })

  it('child BCardFooter has internal prop borderVariant as prop footerBorderVariant', () => {
    const wrapper = mount(BCard, {
      props: {footer: 'foobar', footerBorderVariant: 'danger'},
    })
    const $footer = wrapper.getComponent(BCardFooter)
    expect($footer.props('borderVariant')).toBe('danger')
  })

  it('child BCardFooter has internal prop html as prop footerHtml', () => {
    const wrapper = mount(BCard, {
      props: {footerHtml: '<h1>foobarr</h1>'},
    })
    const $footer = wrapper.getComponent(BCardFooter)
    expect($footer.props('html')).toBe('<h1>foobarr</h1>')
  })

  it('child BCardFooter has internal prop tag as prop footerTag', () => {
    const wrapper = mount(BCard, {
      props: {footer: 'foobar', footerTag: 'span'},
    })
    const $footer = wrapper.getComponent(BCardFooter)
    expect($footer.props('tag')).toBe('span')
  })

  it('child BCardFooter has internal prop textVariant as prop footerTextVariant', () => {
    const wrapper = mount(BCard, {
      props: {footer: 'foobar', footerTextVariant: 'danger'},
    })
    const $footer = wrapper.getComponent(BCardFooter)
    expect($footer.props('textVariant')).toBe('danger')
  })

  it('child BCardFooter has renders text as slot footer', () => {
    const wrapper = mount(BCard, {
      slots: {footer: 'foobar'},
    })
    const $footer = wrapper.getComponent(BCardFooter)
    expect($footer.text()).toBe('foobar')
  })

  it('child BCardFooter has renders text as prop footer', () => {
    const wrapper = mount(BCard, {
      props: {footer: 'foobar'},
    })
    const $footer = wrapper.getComponent(BCardFooter)
    expect($footer.text()).toBe('foobar')
  })

  it('child BCardFooter prefers to render slot footer over prop footer', () => {
    const wrapper = mount(BCard, {
      slots: {footer: 'slots'},
      props: {footer: 'props'},
    })
    const $footer = wrapper.getComponent(BCardFooter)
    expect($footer.text()).toBe('slots')
  })

  it('renders in correct order', () => {
    const wrapper = mount(BCard, {
      props: {header: 'header', bodyText: 'bodyText', footer: 'footer'},
    })
    expect(wrapper.text()).toBe('headerbodyTextfooter')
  })

  // Since it's a bit difficult to check what the order is without just checking html
  // Workaround to just make both items imgs, then test the order by checking which img has src attr
  it('renders img in correct order', () => {
    const wrapper = mount(BCard, {
      props: {header: 'header', headerTag: 'img', imgSrc: '/abc'},
    })
    const [$first, $second] = wrapper.findAll('img')
    expect($first.exists()).toBe(true)
    expect($second.exists()).toBe(true)
    expect($first.attributes('src')).toBe('/abc')
  })

  it('renders img in correct order when imgBottom', () => {
    const wrapper = mount(BCard, {
      props: {header: 'header', headerTag: 'img', imgSrc: '/abc', imgBottom: true},
    })
    const [$first, $second] = wrapper.findAll('img')
    expect($first.exists()).toBe(true)
    expect($second.exists()).toBe(true)
    expect($second.attributes('src')).toBe('/abc')
  })
})
