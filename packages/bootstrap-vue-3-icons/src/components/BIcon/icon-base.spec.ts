import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BIconBase from './BIconBase.vue'

describe('icon-base', () => {
  enableAutoUnmount(afterEach)

  it('renders an svg', () => {
    const wrapper = mount(BIconBase)
    expect(wrapper.element.tagName).toBe('SVG')
  })

  it('has static class bootstrap-icon', () => {
    const wrapper = mount(BIconBase)
    expect(wrapper.classes()).toContain('bootstrap-icon')
  })

  it('has class from prop class', () => {
    const wrapper = mount(BIconBase, {
      props: {class: ['foo']},
    })
    expect(wrapper.classes()).toContain('foo')
  })

  it('has class bootstrap-icon--variant-{type} when prop variant', async () => {
    const wrapper = mount(BIconBase, {
      props: {variant: 'danger'},
    })
    expect(wrapper.classes()).toContain('bootstrap-icon--variant-danger')
    await wrapper.setProps({variant: undefined})
    expect(wrapper.classes()).not.toContain('bootstrap-icon--variant-danger')
  })

  it('has class bootstrap-icon--size-{type} when prop variant', async () => {
    const wrapper = mount(BIconBase, {
      props: {size: 'lg'},
    })
    expect(wrapper.classes()).toContain('bootstrap-icon--size-lg')
    await wrapper.setProps({size: undefined})
    expect(wrapper.classes()).not.toContain('bootstrap-icon--size-lg')
  })

  it('has class bootstrap-icon--animation-{type} when prop animation', async () => {
    const wrapper = mount(BIconBase, {
      props: {animation: 'cylon'},
    })
    expect(wrapper.classes()).toContain('bootstrap-icon--animation-cylon')
    await wrapper.setProps({animation: undefined})
    expect(wrapper.classes()).not.toContain('bootstrap-icon--animation-cylon')
  })

  it('does not have attr style when not prop stacked', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: false},
    })
    expect(wrapper.attributes('style')).toBeUndefined()
  })

  it('does not have attr style when not prop stacked but does not have fontScale', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: true},
    })
    expect(wrapper.attributes('style')).toBeUndefined()
  })

  it('does not have attr style when not prop stacked but has fontScale to be 1', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: true, fontScale: 1},
    })
    expect(wrapper.attributes('style')).toBeUndefined()
  })

  it('does not have attr style when not prop stacked but has fontScale to be 0', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: true, fontScale: 0},
    })
    expect(wrapper.attributes('style')).toBeUndefined()
  })

  it('does not have attr style when not prop stacked and also proper fontScale', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: true, fontScale: '0.85'},
    })
    expect(wrapper.attributes('style')).toBe('font-size: 85%;')
  })

  it('has attr viewBox to be 0 0 16 16 by default', () => {
    const wrapper = mount(BIconBase)
    expect(wrapper.attributes('viewBox')).toBe('0 0 16 16')
  })

  it('does not have attr width when prop stacked true', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: true},
    })
    expect(wrapper.attributes('width')).toBeUndefined()
  })

  it('does not have attr height when prop stacked true', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: true},
    })
    expect(wrapper.attributes('height')).toBeUndefined()
  })

  it('does not have attr focusable when prop stacked true', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: true},
    })
    expect(wrapper.attributes('focusable')).toBeUndefined()
  })

  it('does not have attr role when prop stacked true', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: true},
    })
    expect(wrapper.attributes('role')).toBeUndefined()
  })

  it('does not have attr aria-label when prop stacked true', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: true},
    })
    expect(wrapper.attributes('aria-label')).toBeUndefined()
  })

  it('does not have attr xmlns when prop stacked true', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: true},
    })
    expect(wrapper.attributes('xmlns')).toBeUndefined()
  })

  it('does not have attr width when prop stacked false', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: false},
    })
    expect(wrapper.attributes('width')).toBe('1em')
  })

  it('does not have attr height when prop stacked false', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: false},
    })
    expect(wrapper.attributes('height')).toBe('1em')
  })

  it('does not have attr focusable when prop stacked false', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: false},
    })
    expect(wrapper.attributes('focusable')).toBe('false')
  })

  it('does not have attr role when prop stacked false', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: false},
    })
    expect(wrapper.attributes('role')).toBe('img')
  })

  it('does not have attr aria-label when prop stacked false', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: false},
    })
    expect(wrapper.attributes('aria-label')).toBe('icon')
  })

  it('does not have attr xmlns when prop stacked false', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: false},
    })
    expect(wrapper.attributes('xmlns')).toBe('http://www.w3.org/2000/svg')
  })

  it('has element title when prop title', () => {
    const wrapper = mount(BIconBase, {
      props: {title: 'foobar'},
    })
    const $title = wrapper.find('title')
    expect($title.exists()).toBe(true)
  })

  it('does not have element title by default', () => {
    const wrapper = mount(BIconBase)
    const $title = wrapper.find('title')
    expect($title.exists()).toBe(false)
  })

  it('element title renders prop title', () => {
    const wrapper = mount(BIconBase, {
      props: {title: 'foobar'},
    })
    const $title = wrapper.get('title')
    expect($title.text()).toBe('foobar')
  })

  it('has element g by default', () => {
    const wrapper = mount(BIconBase)
    const $g = wrapper.find('g')
    expect($g.exists()).toBe(true)
  })

  it('g has attr transform to be undefined by default', () => {
    const wrapper = mount(BIconBase)
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toBeUndefined()
  })

  it('g has attr transform to contain rotate() when prop rotate', () => {
    const wrapper = mount(BIconBase, {
      props: {rotate: 1},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toContain('rotate(1)')
  })

  it('g has attr transform to contain translate(8 8) when prop rotate', () => {
    const wrapper = mount(BIconBase, {
      props: {rotate: 1},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toContain('translate(8 8)')
  })

  it('g has attr transform to contain translate(-8 -8) when prop rotate', () => {
    const wrapper = mount(BIconBase, {
      props: {rotate: 1},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toContain('translate(-8 -8)')
  })

  it('g has attr transform to be undefined when prop rotate 0', () => {
    const wrapper = mount(BIconBase, {
      props: {rotate: 0},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toBeUndefined()
  })

  it('g has attr transform to contain translate(8 8) when prop flipH', () => {
    const wrapper = mount(BIconBase, {
      props: {flipH: true},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toContain('translate(8 8)')
  })

  it('g has attr transform to contain translate(-8 -8) when prop flipH', () => {
    const wrapper = mount(BIconBase, {
      props: {flipH: true},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toContain('translate(-8 -8)')
  })

  it('g has attr transform to contain translate(-8 -8) when not prop flipH', () => {
    const wrapper = mount(BIconBase, {
      props: {flipH: false},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toBeUndefined()
  })

  it('g has attr transform to contain translate(8 8) when prop flipV', () => {
    const wrapper = mount(BIconBase, {
      props: {flipV: true},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toContain('translate(8 8)')
  })

  it('g has attr transform to contain translate(-8 -8) when prop flipV', () => {
    const wrapper = mount(BIconBase, {
      props: {flipV: true},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toContain('translate(-8 -8)')
  })

  it('g has attr transform to contain translate(-8 -8) when not prop flipV', () => {
    const wrapper = mount(BIconBase, {
      props: {flipV: false},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toBeUndefined()
  })

  it('g has attr transform to contain translate(8 8) when prop scale is above 0', () => {
    const wrapper = mount(BIconBase, {
      props: {scale: 50},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toContain('translate(8 8)')
  })

  it('g has attr transform to contain translate(-8 -8) when prop scale is above 0', () => {
    const wrapper = mount(BIconBase, {
      props: {scale: 50},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toContain('translate(-8 -8)')
  })

  it('g has attr transform to be undefined when prop scale is below 0', () => {
    const wrapper = mount(BIconBase, {
      props: {scale: -50},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toBeUndefined()
  })

  it('g has attr transform to be undefined when prop scale is 0', () => {
    const wrapper = mount(BIconBase, {
      props: {scale: 0},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toBeUndefined()
  })

  it('g has attr transform to be undefined when prop scale is 1', () => {
    const wrapper = mount(BIconBase, {
      props: {scale: 1},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toBeUndefined()
  })

  it('g has attr transform to contain scale when prop flipH', () => {
    const wrapper = mount(BIconBase, {
      props: {flipH: true},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toContain('scale(-1 1)')
  })

  it('g has attr transform to contain scale when prop flipV', () => {
    const wrapper = mount(BIconBase, {
      props: {flipV: true},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toContain('scale(1 -1)')
  })

  it('g has attr transform to contain scale({scale} {scale}) when prop scale', () => {
    const wrapper = mount(BIconBase, {
      props: {scale: 50},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toContain('scale(50 50)')
  })

  it('g has attr transform to contain scale(-{scale} {scale}) when prop scale and prop flipH', () => {
    const wrapper = mount(BIconBase, {
      props: {scale: 50, flipH: true},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toContain('scale(-50 50)')
  })

  it('g has attr transform to contain scale({scale} -{scale}) when prop scale and prop flipV', () => {
    const wrapper = mount(BIconBase, {
      props: {scale: 50, flipV: true},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toContain('scale(50 -50)')
  })

  it('g renders slot default', () => {
    const wrapper = mount(BIconBase, {
      slots: {default: 'foo'},
    })
    const $g = wrapper.get('g')
    expect($g.text()).toBe('foo')
  })

  it('g does not have child g by default', () => {
    const wrapper = mount(BIconBase)
    const $g = wrapper.get('g')
    const $g2 = $g.find('g')
    expect($g2.exists()).toBe(false)
  })

  it('wraps another g around inital g when prop stacked', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: true},
    })
    const $g = wrapper.get('g')
    const $g2 = $g.find('g')
    expect($g2.exists()).toBe(true)
  })

  it('wraps another g around initial g when prop shiftH', () => {
    const wrapper = mount(BIconBase, {
      props: {shiftH: 50},
    })
    const $g = wrapper.get('g')
    const $g2 = $g.find('g')
    expect($g2.exists()).toBe(true)
  })

  it('wraps another g around initial g when prop shiftV', () => {
    const wrapper = mount(BIconBase, {
      props: {shiftV: 50},
    })
    const $g = wrapper.get('g')
    const $g2 = $g.find('g')
    expect($g2.exists()).toBe(true)
  })

  it('does not have wrapper g around initial when shiftH is 0', () => {
    const wrapper = mount(BIconBase, {
      props: {shiftH: 0},
    })
    const $g = wrapper.get('g')
    const $g2 = $g.find('g')
    expect($g2.exists()).toBe(false)
  })

  it('does not have wrapper g around initial when shiftV is 0', () => {
    const wrapper = mount(BIconBase, {
      props: {shiftV: 0},
    })
    const $g = wrapper.get('g')
    const $g2 = $g.find('g')
    expect($g2.exists()).toBe(false)
  })

  it('first g has attr transform to be translate({shiftH} 0)', () => {
    const wrapper = mount(BIconBase, {
      props: {shiftH: 50},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toBe('translate(50 0)')
  })

  it('first g has attr transform to be translate(0 {shiftV})', () => {
    const wrapper = mount(BIconBase, {
      props: {shiftV: 50},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toBe('translate(0 -50)')
  })

  it('first g has attr transform to be translate({shiftH} {shiftV})', () => {
    const wrapper = mount(BIconBase, {
      props: {shiftV: 50, shiftH: 50},
    })
    const $g = wrapper.get('g')
    expect($g.attributes('transform')).toBe('translate(50 -50)')
  })

  it('second g renders slot default', () => {
    const wrapper = mount(BIconBase, {
      props: {shiftV: 50, shiftH: 50},
      slots: {default: 'foo'},
    })
    const $g = wrapper.get('g')
    const $g2 = $g.get('g')
    expect($g2.text()).toBe('foo')
  })

  it('g gets wrapped in another g and another g when both prop shiftH and prop stacked', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: true, shiftH: 50},
    })
    const $g = wrapper.get('g')
    const $g2 = $g.get('g')
    const $g3 = $g2.find('g')
    expect($g3.exists()).toBe(true)
  })

  it('g gets wrapped in another g and another g when both prop shiftV and prop stacked', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: true, shiftV: 50},
    })
    const $g = wrapper.get('g')
    const $g2 = $g.get('g')
    const $g3 = $g2.find('g')
    expect($g3.exists()).toBe(true)
  })

  it('g gets wrapped in another g does not have a third g when no reason with stacked', () => {
    const wrapper = mount(BIconBase, {
      props: {stacked: true},
    })
    const $g = wrapper.get('g')
    const $g2 = $g.get('g')
    const $g3 = $g2.find('g')
    expect($g3.exists()).toBe(false)
  })

  it('g gets wrapped in another g does not have a third g when no reason with shiftH', () => {
    const wrapper = mount(BIconBase, {
      props: {shiftH: 50},
    })
    const $g = wrapper.get('g')
    const $g2 = $g.get('g')
    const $g3 = $g2.find('g')
    expect($g3.exists()).toBe(false)
  })

  it('g gets wrapped in another g does not have a third g when no reason with shiftV', () => {
    const wrapper = mount(BIconBase, {
      props: {shiftV: 50},
    })
    const $g = wrapper.get('g')
    const $g2 = $g.get('g')
    const $g3 = $g2.find('g')
    expect($g3.exists()).toBe(false)
  })

  it("all three g's are in correct order", () => {
    const wrapper = mount(BIconBase, {
      props: {shiftV: 50, stacked: true, rotate: 25},
    })
    const $g = wrapper.get('g')
    const $g2 = $g.get('g')
    const $g3 = $g2.get('g')
    expect($g.attributes('transform')).toBeUndefined()
    expect($g2.attributes('transform')).toBe('translate(0 -50)')
    expect($g3.attributes('transform')).toBe('translate(8 8) translate(-8 -8) rotate(25)')
  })

  it('renders title and content in correct order', () => {
    const wrapper = mount(BIconBase, {
      props: {title: 'title'},
      slots: {default: 'default'},
    })
    expect(wrapper.text()).toBe('titledefault')
  })
})
