import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BOverlay from './BOverlay.vue'
import {Transition as BTransition, nextTick} from 'vue'
import BSpinner from '../BSpinner/BSpinner.vue'

describe('overlay', () => {
  enableAutoUnmount(afterEach)

  it('tag is default div', () => {
    const wrapper = mount(BOverlay)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop wrapTag', () => {
    const wrapper = mount(BOverlay, {
      props: {wrapTag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has static class b-overlay-wrap', () => {
    const wrapper = mount(BOverlay)
    expect(wrapper.classes()).toContain('b-overlay-wrap')
  })

  it('has static class position-relative', () => {
    const wrapper = mount(BOverlay)
    expect(wrapper.classes()).toContain('position-relative')
  })

  it('has attr aria-busy when prop show', async () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    expect(wrapper.attributes('aria-busy')).toBe('true')
    await wrapper.setProps({show: false})
    expect(wrapper.attributes('aria-busy')).toBeUndefined()
  })

  it('renders default slot', () => {
    const wrapper = mount(BOverlay, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('has child BTransition', () => {
    const wrapper = mount(BOverlay)
    const $transition = wrapper.findComponent(BTransition)
    expect($transition.exists()).toBe(true)
  })

  it('child BTransition has child div when prop show true', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.find('div')
    expect($div.exists()).toBe(true)
  })

  it('child BTransition does not have child div when prop show false', () => {
    const wrapper = mount(BOverlay, {
      props: {show: false},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.find('div')
    expect($div.exists()).toBe(false)
  })

  it('child BTransition child is tag overlayTag', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, overlayTag: 'small'},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $small = $transition.find('small')
    expect($small.exists()).toBe(true)
  })

  it('child BTransition child is tag overlayTag has static class b-overlay', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, overlayTag: 'small'},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $small = $transition.get('small')
    expect($small.classes()).toContain('b-overlay')
  })

  it('child BTransition child div has static class b-overlay', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.classes()).toContain('b-overlay')
  })

  it('child BTransition child div has class position-fixed when prop noWrap true and prop fixed true', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, noWrap: true, fixed: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.classes()).toContain('position-fixed')
  })

  it('child BTransition child div does not have class position-fixed when prop noWrap false and prop fixed true', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, noWrap: false, fixed: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.classes()).not.toContain('position-fixed')
  })

  it('child BTransition child div does not have class position-fixed when prop noWrap true and prop fixed false', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, noWrap: true, fixed: false},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.classes()).not.toContain('position-fixed')
  })

  it('child BTransition child div does not have class position-fixed when prop noWrap false and prop fixed false', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, noWrap: false, fixed: false},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.classes()).not.toContain('position-fixed')
  })

  it('child BTransition child div has class position-absolute when prop noWrap false', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, noWrap: false},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.classes()).toContain('position-absolute')
  })

  it('child BTransition child div has class position-absolute when prop fixed false', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, fixed: false},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.classes()).toContain('position-absolute')
  })

  it('child BTransition child div has class position-absolute when prop fixed true and prop noWrap false', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, noWrap: false, fixed: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.classes()).toContain('position-absolute')
  })

  it('child BTransition child div has class position-absolute when prop fixed false and prop noWrap true', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, noWrap: true, fixed: false},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.classes()).toContain('position-absolute')
  })

  it('child BTransition child div does not have class position-absolute when prop noWrap true and prop fixed true', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, noWrap: true, fixed: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.classes()).not.toContain('position-absolute')
  })

  it('child BTransition child div has style z-index: 10; by default', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.attributes('style')).toContain('z-index: 10;')
  })

  it('child BTransition child div has style z-index: 5; when prop zIndex is 5', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, zIndex: 5},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.attributes('style')).toContain('z-index: 5;')
  })

  it('child BTransition child div has style z-index: 5; when prop zIndex is string 5', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, zIndex: '5'},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.attributes('style')).toContain('z-index: 5;')
  })

  it('child BTransition child div has style z-index: 10; when prop zIndex is 0', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, zIndex: 0},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.attributes('style')).toContain('z-index: 10;')
  })

  it('child BTransition child div has static style top: 0px;', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.attributes('style')).toContain('top: 0px;')
  })

  it('child BTransition child div has static style bottom: 0px;', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.attributes('style')).toContain('bottom: 0px;')
  })

  it('child BTransition child div has static style left: 0px;', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.attributes('style')).toContain('left: 0px;')
  })

  it('child BTransition child div has static style right: 0px;', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    expect($div.attributes('style')).toContain('right: 0px;')
  })

  it('emits click when BTransition child div is clicked', async () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    await $div.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('click event value is instanceof MouseEvent when BTransition child div', async () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    await $div.trigger('click')
    const emitted = wrapper.emitted('click') ?? []
    expect(emitted[0][0] instanceof MouseEvent).toBe(true)
  })

  it('child BTransition child div has further child div', async () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.find('div')
    expect($second.exists()).toBe(true)
  })

  it('child BTransition child div first child div has class position-absolute', async () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.classes()).toContain('position-absolute')
  })

  it('child BTransition child div first child div has class rounded when prop rounded true', async () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, rounded: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.classes()).toContain('rounded')
  })

  it('child BTransition child div first child div does not have any rounded* class when prop rounded false', async () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, rounded: false},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.classes().find((str) => str.startsWith('rounded'))).toBeUndefined()
  })

  it('child BTransition child div first child div has class bg-{variant} when prop variant', async () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, variant: 'info'},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.classes()).toContain('bg-info')
  })

  it('child BTransition child div first child div has class bg-light by default', async () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.classes()).toContain('bg-light')
  })

  it('child BTransition child div first child div has class bg-light when bgColor empty string', async () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, bgColor: ''},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.classes()).toContain('bg-light')
  })

  it('child BTransition child div first child div does not have class bg-{variant} when prop variant but also prop bgColor', async () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, variant: 'info', bgColor: 'red'},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.classes()).not.toContain('bg-info')
  })

  //
  it('child BTransition child div first child div has static style top: 0px;', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.attributes('style')).toContain('top: 0px;')
  })

  it('child BTransition child div first child div has static style bottom: 0px;', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.attributes('style')).toContain('bottom: 0px;')
  })

  it('child BTransition child div first child div has static style left: 0px;', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.attributes('style')).toContain('left: 0px;')
  })

  it('child BTransition child div first child div has static style right: 0px;', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.attributes('style')).toContain('right: 0px;')
  })

  it('child BTransition child div first child div has style opacity: 0.85; by defaault', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.attributes('style')).toContain('opacity: 0.85;')
  })

  it('child BTransition child div first child div has style opacity: {num}; when prop opacity', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, opacity: 0.5},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.attributes('style')).toContain('opacity: 0.5;')
  })

  it('child BTransition child div first child div has style background-color: {type}; prop bgColor', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, bgColor: 'red'},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.attributes('style')).toContain('background-color: red;')
  })

  it('child BTransition child div first child div does not have style background-color when prop bgColor is empty string', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, bgColor: ''},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.attributes('style')).not.toContain('background-color')
  })

  it('child BTransition child div first child div does not have style background-color by default', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.attributes('style')).not.toContain('background-color')
  })

  // Does not work?
  it.skip('child BTransition child div first child div has style backdrop-filter: blur(2px); by default', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.attributes('style')).toContain('backdrop-filter: blur(2px);')
  })

  it('child BTransition child div first child div does not have style backdrop-filter when blur is empty string', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, blur: ''},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.attributes('style')).not.toBe('backdrop-filter')
  })

  it('child BTransition child div has second child div', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const [, $third] = $div.findAll('div')
    expect($third.exists()).toBe(true)
  })

  it('child BTransition child div second child div has static class position-absolute', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const [, $third] = $div.findAll('div')
    expect($third.classes()).toContain('position-absolute')
  })

  it('child BTransition child div second child div has position styles when prop noCenter', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, noCenter: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const [, $third] = $div.findAll('div')
    expect($third.attributes('style')).toContain('top: 0px;')
    expect($third.attributes('style')).toContain('bottom: 0px;')
    expect($third.attributes('style')).toContain('left: 0px;')
    expect($third.attributes('style')).toContain('right: 0px;')
  })

  it('child BTransition child div second child div has custom position styles when prop noCenter false', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, noCenter: false},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const [, $third] = $div.findAll('div')
    expect($third.attributes('style')).toContain('top: 50%;')
    expect($third.attributes('style')).toContain('left: 50%;')
    expect($third.attributes('style')).toContain('transform: translateX(-50%) translateY(-50%);')
  })

  it('child BTransition child div second child div renders slot overlay', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
      slots: {overlay: 'foobar'},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const [, $third] = $div.findAll('div')
    expect($third.text()).toBe('foobar')
  })

  it('renders both slot overlay and slot foobar correctly', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
      slots: {overlay: 'overlay', default: 'default'},
    })
    expect(wrapper.text()).toBe('defaultoverlay')
  })

  it('child BTransition child div second child div renders a BSpinner by default', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const [, $third] = $div.findAll('div')
    const $spinner = $third.findComponent(BSpinner)
    expect($spinner.exists()).toBe(true)
  })

  it('child BTransition child div second child div BSpinner is given prop type to be prop spinnerType', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, spinnerType: 'grow'},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const [, $third] = $div.findAll('div')
    const $spinner = $third.getComponent(BSpinner)
    expect($spinner.props('type')).toBe('grow')
  })

  it('child BTransition child div second child div BSpinner is given prop variant', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, spinnerVariant: 'danger'},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const [, $third] = $div.findAll('div')
    const $spinner = $third.getComponent(BSpinner)
    expect($spinner.props('variant')).toBe('danger')
  })

  it('child BTransition child div second child div BSpinner is given prop small', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, spinnerSmall: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const [, $third] = $div.findAll('div')
    const $spinner = $third.getComponent(BSpinner)
    expect($spinner.props('small')).toBe(true)
  })

  it('child BTransition child div second child div does not render BSpinner when prop noSpinner', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, noSpinner: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const [, $third] = $div.findAll('div')
    const $spinner = $third.findComponent(BSpinner)
    expect($spinner.exists()).toBe(false)
  })

  it('child BTransition child div second child div renders BSpinner when noSpinner is false', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, noSpinner: false},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const [, $third] = $div.findAll('div')
    const $spinner = $third.findComponent(BSpinner)
    expect($spinner.exists()).toBe(true)
  })

  it('does not have class b-overlay-wrap when prop noWrap is true', () => {
    const wrapper = mount(BOverlay, {
      props: {noWrap: true},
    })
    expect(wrapper.classes()).not.toContain('b-overlay-wrap')
  })

  it('has class b-overlay-wrap when prop noWrap is false', () => {
    const wrapper = mount(BOverlay, {
      props: {noWrap: false},
    })
    expect(wrapper.classes()).toContain('b-overlay-wrap')
  })

  it('child BTransition child div first child div has class rounded-top when prop roundedTop is true', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, roundedTop: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.classes()).toContain('rounded-top')
  })

  it('child BTransition child div first child div has class rounded-bottom when prop roundedBottom is true', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, roundedBottom: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.classes()).toContain('rounded-bottom')
  })

  it('child BTransition child div first child div has class rounded-start when prop roundedStart is true', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, roundedStart: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.classes()).toContain('rounded-start')
  })

  it('child BTransition child div first child div has class rounded-end when prop roundedEnd is true', () => {
    const wrapper = mount(BOverlay, {
      props: {show: true, roundedEnd: true},
    })
    const $transition = wrapper.getComponent(BTransition)
    const $div = $transition.get('div')
    const $second = $div.get('div')
    expect($second.classes()).toContain('rounded-end')
  })

  it('emits shown after overlay enters', async () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $t = wrapper.getComponent(BTransition)
    // Transition after-enter hooks are not triggered in the test environment without CSS animations,
    // so we invoke the onAfterEnter prop directly via the internal vnode to simulate transition completion
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onAfterEnter = ($t.vm as any).$.vnode?.props?.onAfterEnter as (() => void) | undefined
    onAfterEnter?.()
    await nextTick()
    expect(wrapper.emitted('shown')).toHaveLength(1)
  })

  it('emits hidden after overlay leaves', async () => {
    const wrapper = mount(BOverlay, {
      props: {show: true},
    })
    const $t = wrapper.getComponent(BTransition)
    // Transition after-leave hooks are not triggered in the test environment without CSS animations,
    // so we invoke the onAfterLeave prop directly via the internal vnode to simulate transition completion
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onAfterLeave = ($t.vm as any).$.vnode?.props?.onAfterLeave as (() => void) | undefined
    onAfterLeave?.()
    await nextTick()
    expect(wrapper.emitted('hidden')).toHaveLength(1)
  })
})
