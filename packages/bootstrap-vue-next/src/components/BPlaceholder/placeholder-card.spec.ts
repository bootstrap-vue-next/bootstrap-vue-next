import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BPlaceholderCard from './BPlaceholderCard.vue'
import BPlaceholder from './BPlaceholder.vue'
import BPlaceholderButton from './BPlaceholderButton.vue'
import BCard from '../BCard/BCard.vue'
import BCardImg from '../BCard/BCardImg.vue'

describe('placeholder-card', () => {
  enableAutoUnmount(afterEach)

  it('renders a BCard', () => {
    const wrapper = mount(BPlaceholderCard)
    const $card = wrapper.findComponent(BCard)
    expect($card.exists()).toBe(true)
  })

  it('BCard renders a BCardImg', () => {
    const wrapper = mount(BPlaceholderCard)
    const $card = wrapper.getComponent(BCard)
    const $cardimg = $card.findComponent(BCardImg)
    expect($cardimg.exists()).toBe(true)
  })

  it('BCardImg has prop blank to be true by default', () => {
    const wrapper = mount(BPlaceholderCard)
    const $card = wrapper.getComponent(BCard)
    const $cardimg = $card.getComponent(BCardImg)
    expect($cardimg.props('blank')).toBe(true)
  })

  it('BCardImg has prop blank to be false when prop imgSrc', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {imgSrc: 'foobar'},
    })
    const $card = wrapper.getComponent(BCard)
    const $cardimg = $card.getComponent(BCardImg)
    expect($cardimg.props('blank')).toBe(false)
  })

  it('BCardImg has prop blankColor to be #868e96 by default', () => {
    const wrapper = mount(BPlaceholderCard)
    const $card = wrapper.getComponent(BCard)
    const $cardimg = $card.getComponent(BCardImg)
    expect($cardimg.props('blankColor')).toBe('#868e96')
  })

  it('BCardImg has prop blankColor to be prop imgBlankColor', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {imgBlankColor: 'red'},
    })
    const $card = wrapper.getComponent(BCard)
    const $cardimg = $card.getComponent(BCardImg)
    expect($cardimg.props('blankColor')).toBe('red')
  })

  it('BCardImg has prop height to be 100 by default', () => {
    const wrapper = mount(BPlaceholderCard)
    const $card = wrapper.getComponent(BCard)
    const $cardimg = $card.getComponent(BCardImg)
    expect($cardimg.props('height')).toBe(100)
  })

  it('BCardImg has prop height to be prop imgBlankColor', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {imgHeight: 200},
    })
    const $card = wrapper.getComponent(BCard)
    const $cardimg = $card.getComponent(BCardImg)
    expect($cardimg.props('height')).toBe(200)
  })

  it('BCardImg has prop height to be undefined when imgSrc', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {imgHeight: 200, imgSrc: 'foobar'},
    })
    const $card = wrapper.getComponent(BCard)
    const $cardimg = $card.getComponent(BCardImg)
    expect($cardimg.props('height')).toBeUndefined()
  })

  it('BCardImg has prop src to be imgSrc', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {imgSrc: 'foobar'},
    })
    const $card = wrapper.getComponent(BCard)
    const $cardimg = $card.getComponent(BCardImg)
    expect($cardimg.props('src')).toBe('foobar')
  })

  it('BCardImg has prop top false when prop imgBottom', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {imgBottom: true},
    })
    const $card = wrapper.getComponent(BCard)
    const $cardimg = $card.getComponent(BCardImg)
    expect($cardimg.props('top')).toBe(false)
  })

  it('BCardImg has prop top true when not prop imgBottom', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {imgBottom: false},
    })
    const $card = wrapper.getComponent(BCard)
    const $cardimg = $card.getComponent(BCardImg)
    expect($cardimg.props('top')).toBe(true)
  })

  it('BCardImg has prop bottom true when prop imgBottom', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {imgBottom: true},
    })
    const $card = wrapper.getComponent(BCard)
    const $cardimg = $card.getComponent(BCardImg)
    expect($cardimg.props('bottom')).toBe(true)
  })

  it('BCardImg has prop bottom false when not prop imgBottom', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {imgBottom: false},
    })
    const $card = wrapper.getComponent(BCard)
    const $cardimg = $card.getComponent(BCardImg)
    expect($cardimg.props('bottom')).toBe(false)
  })

  it('does not have BCardImg when slot img', () => {
    const wrapper = mount(BPlaceholderCard, {
      slots: {img: 'foobar'},
    })
    const $card = wrapper.getComponent(BCard)
    const $cardimg = $card.findComponent(BCardImg)
    expect($cardimg.exists()).toBe(false)
  })

  it('renders slot img', () => {
    const wrapper = mount(BPlaceholderCard, {
      slots: {img: 'foobar'},
    })
    const $card = wrapper.getComponent(BCard)
    expect($card.text()).toBe('foobar')
  })

  it('does not render slot img when prop noImg', () => {
    const wrapper = mount(BPlaceholderCard, {
      slots: {img: 'foobar'},
      props: {noImg: true},
    })
    const $card = wrapper.getComponent(BCard)
    expect($card.text()).toBe('')
  })

  it('does not have BCardImg when prop noImg', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noImg: true},
    })
    const $card = wrapper.getComponent(BCard)
    const $cardimg = $card.findComponent(BCardImg)
    expect($cardimg.exists()).toBe(false)
  })

  it('renders slot header', () => {
    const wrapper = mount(BPlaceholderCard, {
      slots: {header: 'foobar'},
    })
    const $card = wrapper.getComponent(BCard)
    expect($card.text()).toBe('foobar')
  })

  it('has bplaceholder by default', () => {
    const wrapper = mount(BPlaceholderCard)
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.findComponent(BPlaceholder)
    expect($placeholder.exists()).toBe(true)
  })

  it('placeholder has prop width to be prop headerWidth', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {headerWidth: 1000},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.getComponent(BPlaceholder)
    expect($placeholder.props('width')).toBe(1000)
  })

  it('placeholder has prop width to be default 100', () => {
    const wrapper = mount(BPlaceholderCard)
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.getComponent(BPlaceholder)
    expect($placeholder.props('width')).toBe(100)
  })

  it('placeholder has prop variant to be prop headerWidth', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {headerVariant: 'danger'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.getComponent(BPlaceholder)
    expect($placeholder.props('variant')).toBe('danger')
  })

  it('placeholder has prop variant to be default undefined', () => {
    const wrapper = mount(BPlaceholderCard)
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.getComponent(BPlaceholder)
    expect($placeholder.props('variant')).toBeUndefined()
  })

  it('placeholder has prop animation to be prop headerWidth', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {headerAnimation: 'glow'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.getComponent(BPlaceholder)
    expect($placeholder.props('animation')).toBe('glow')
  })

  it('placeholder has prop animation to be default undefined', () => {
    const wrapper = mount(BPlaceholderCard)
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.getComponent(BPlaceholder)
    expect($placeholder.props('animation')).toBeUndefined()
  })

  it('placeholder has prop size to be prop headerWidth', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {headerSize: 'xs'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.getComponent(BPlaceholder)
    expect($placeholder.props('size')).toBe('xs')
  })

  it('placeholder has prop size to be default undefined', () => {
    const wrapper = mount(BPlaceholderCard)
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.getComponent(BPlaceholder)
    expect($placeholder.props('size')).toBeUndefined()
  })

  it('slot header does not render when prop noHeader true', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true},
      slots: {header: 'foobar'},
    })
    const $card = wrapper.getComponent(BCard)
    expect($card.text()).toBe('')
  })

  it('header placeholder does not render when prop noHeader true', async () => {
    const wrapper = mount(BPlaceholderCard)
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.findComponent(BPlaceholder)
    expect($placeholder.exists()).toBe(true)
    await wrapper.setProps({noHeader: true})
    expect($placeholder.exists()).toBe(false)
  })

  it('card renders exactly five placeholders when no others are enabled', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noFooter: true},
    })
    const $card = wrapper.getComponent(BCard)
    const [$first, $second, $third, $fourth, $fifth, $sixth] = $card.findAllComponents(BPlaceholder)
    expect($first.exists()).toBe(true)
    expect($second.exists()).toBe(true)
    expect($third.exists()).toBe(true)
    expect($fourth.exists()).toBe(true)
    expect($fifth.exists()).toBe(true)
    expect($sixth).toBeUndefined()
  })

  it('card first placeholder is given prop cols 7', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noFooter: true},
    })
    const $card = wrapper.getComponent(BCard)
    const [$first] = $card.findAllComponents(BPlaceholder)
    expect($first.props('cols')).toBe('7')
  })

  it('card second placeholder is given prop cols 7', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noFooter: true},
    })
    const $card = wrapper.getComponent(BCard)
    const [, $second] = $card.findAllComponents(BPlaceholder)
    expect($second.props('cols')).toBe('4')
  })

  it('card third placeholder is given prop cols 7', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noFooter: true},
    })
    const $card = wrapper.getComponent(BCard)
    const [, , $third] = $card.findAllComponents(BPlaceholder)
    expect($third.props('cols')).toBe('4')
  })

  it('card fourth placeholder is given prop cols 7', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noFooter: true},
    })
    const $card = wrapper.getComponent(BCard)
    const [, , , $fourth] = $card.findAllComponents(BPlaceholder)
    expect($fourth.props('cols')).toBe('6')
  })

  it('card fifth placeholder is given prop cols 7', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noFooter: true},
    })
    const $card = wrapper.getComponent(BCard)
    const [, , , , $fifth] = $card.findAllComponents(BPlaceholder)
    expect($fifth.props('cols')).toBe('8')
  })

  it('does not have any placeholders when slot overridden and props disallow', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noFooter: true},
      slots: {default: 'foobar'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.findComponent(BPlaceholder)
    expect($placeholder.exists()).toBe(false)
  })

  it('renders default slot', () => {
    const wrapper = mount(BPlaceholderCard, {
      slots: {default: 'foobar'},
    })
    const $card = wrapper.getComponent(BCard)
    expect($card.text()).toBe('foobar')
  })

  it('has BPlaceholderButton when prop noButton false', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noButton: false},
      slots: {default: 'foo'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.findComponent(BPlaceholderButton)
    expect($placeholder.exists()).toBe(true)
  })

  it('has BPlaceholder when prop noButton true', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noButton: true},
      slots: {default: 'foo'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.findComponent(BPlaceholder)
    expect($placeholder.exists()).toBe(true)
  })

  it('BPlaceholder is given prop width to be 100 by default', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noButton: true},
      slots: {default: 'foo'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.getComponent(BPlaceholder)
    expect($placeholder.props('width')).toBe(100)
  })

  it('BPlaceholder is given prop width to be prop footerWidth', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noButton: true, footerWidth: 1000},
      slots: {default: 'foo'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.getComponent(BPlaceholder)
    expect($placeholder.props('width')).toBe(1000)
  })

  it('BPlaceholder is given prop animation to be undefined by default', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noButton: true},
      slots: {default: 'foo'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.getComponent(BPlaceholder)
    expect($placeholder.props('animation')).toBeUndefined()
  })

  it('BPlaceholder is given prop animation to be prop footerAnimation', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noButton: true, footerAnimation: 'glow'},
      slots: {default: 'foo'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.getComponent(BPlaceholder)
    expect($placeholder.props('animation')).toBe('glow')
  })

  it('BPlaceholder is given prop size to be undefined by default', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noButton: true},
      slots: {default: 'foo'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.getComponent(BPlaceholder)
    expect($placeholder.props('size')).toBeUndefined()
  })

  it('BPlaceholder is given prop size to be prop footerSize', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noButton: true, footerSize: 'xs'},
      slots: {default: 'foo'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.getComponent(BPlaceholder)
    expect($placeholder.props('size')).toBe('xs')
  })

  it('BPlaceholder is given prop variant to be undefined by default', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noButton: true},
      slots: {default: 'foo'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.getComponent(BPlaceholder)
    expect($placeholder.props('variant')).toBeUndefined()
  })

  it('BPlaceholder is given prop variant to be prop footerVariant', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noButton: true, footerVariant: 'danger'},
      slots: {default: 'foo'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholder = $card.getComponent(BPlaceholder)
    expect($placeholder.props('variant')).toBe('danger')
  })

  it('BPlaceholderButton is given prop width to be 100 by default', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noButton: false},
      slots: {default: 'foo'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholderbutton = $card.getComponent(BPlaceholderButton)
    expect($placeholderbutton.props('width')).toBe(100)
  })

  it('BPlaceholderButton is given prop width to be prop footerWidth', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noButton: false, footerWidth: 1000},
      slots: {default: 'foo'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholderbutton = $card.getComponent(BPlaceholderButton)
    expect($placeholderbutton.props('width')).toBe(1000)
  })

  it('BPlaceholderButton is given prop animation to be undefined by default', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noButton: false},
      slots: {default: 'foo'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholderbutton = $card.getComponent(BPlaceholderButton)
    expect($placeholderbutton.props('animation')).toBeUndefined()
  })

  it('BPlaceholderButton is given prop animation to be prop footerAnimation', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noButton: false, footerAnimation: 'glow'},
      slots: {default: 'foo'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholderbutton = $card.getComponent(BPlaceholderButton)
    expect($placeholderbutton.props('animation')).toBe('glow')
  })

  it('BPlaceholderButton is given prop size to be undefined by default', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noButton: false},
      slots: {default: 'foo'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholderbutton = $card.getComponent(BPlaceholderButton)
    expect($placeholderbutton.props('size')).toBeUndefined()
  })

  it('BPlaceholderButton is not given prop size to be footerSize', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noButton: false, footerSize: 'xs'},
      slots: {default: 'foo'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholderbutton = $card.getComponent(BPlaceholderButton)
    expect($placeholderbutton.props('size')).toBeUndefined()
  })

  it('BPlaceholderButton is given prop variant to be primary by default', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noButton: false},
      slots: {default: 'foo'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholderbutton = $card.getComponent(BPlaceholderButton)
    expect($placeholderbutton.props('variant')).toBe('primary')
  })

  it('BPlaceholderButton is given prop variant to be prop footerVariant', () => {
    const wrapper = mount(BPlaceholderCard, {
      props: {noHeader: true, noButton: false, footerVariant: 'danger'},
      slots: {default: 'foo'},
    })
    const $card = wrapper.getComponent(BCard)
    const $placeholderbutton = $card.getComponent(BPlaceholderButton)
    expect($placeholderbutton.props('variant')).toBe('danger')
  })

  it('renders all in correct order', () => {
    const wrapper = mount(BPlaceholderCard, {
      slots: {default: 'default', footer: 'footer', header: 'header'},
    })
    const $card = wrapper.getComponent(BCard)
    expect($card.text()).toBe('headerdefaultfooter')
  })
})
