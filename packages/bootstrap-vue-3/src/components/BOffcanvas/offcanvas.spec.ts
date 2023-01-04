import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BOffcanvas from './BOffcanvas.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import BOverlay from '../BOverlay/BOverlay.vue'
describe('offcanvas', () => {
  enableAutoUnmount(afterEach)

  let wrapper: any

  const mountComponent = () => {
    wrapper = mount(BOffcanvas, {
      props: {
        modelValue: true,
      },
      global: {
        stubs: ['b-overlay'],
      },
    })
  }

  it('has static class offcanvas', () => {
    mountComponent()
    const offcanvas = wrapper.get('.offcanvas')
    expect(offcanvas.exists()).toBe(true)
  })

  it('has tabindex -1', () => {
    const wrapper = mount(BOffcanvas)
    const offcanvas = wrapper.get('.offcanvas')
    expect(offcanvas.attributes('tabindex')).toBe('-1')
  })

  it('has aria-labelledby offcanvasLabel', () => {
    const wrapper = mount(BOffcanvas)
    const offcanvas = wrapper.get('.offcanvas')
    expect(offcanvas.attributes('aria-labelledby')).toBe('offcanvasLabel')
  })

  it('has offcanvas-{type} when prop placement', () => {
    const wrapper = mount(BOffcanvas)
    const offcanvas = wrapper.get('.offcanvas')
    expect(offcanvas.classes()).toContain('offcanvas-start')
  })

  it('has offcanvas-{type} when prop placement not default', () => {
    const wrapper = mount(BOffcanvas, {
      props: {placement: 'abc'},
    })
    const offcanvas = wrapper.get('.offcanvas')
    expect(offcanvas.classes()).toContain('offcanvas-abc')
  })

  it('backdrop component exists', async () => {
    const wrapper = mount(BOffcanvas, {
      props: {
        modelValue: true,
        backdrop: false,
      },
    })

    const $overlay = wrapper.findComponent(BOverlay)
    expect($overlay.exists()).toBe(true)
  })

  it('has backdrop', async () => {
    const wrapper = mount(BOffcanvas, {
      props: {
        modelValue: true,
        backdrop: false,
      },
    })

    const $overlay = wrapper.getComponent(BOverlay)

    let $div = $overlay.find('div.b-overlay')

    expect($div.exists()).toBe(false)

    await wrapper.setProps({backdrop: true})

    $div = $overlay.find('div.b-overlay')

    expect($div.exists()).toBe(true)
  })

  it(' offcanvas-header exists', () => {
    const wrapper = mount(BOffcanvas)
    const offcanvas = wrapper.get('.offcanvas')
    const $header = offcanvas.find('.offcanvas-header')
    expect($header.exists()).toBe(true)
  })

  it('first child div has child h5 with static class offcanvas-title', () => {
    const wrapper = mount(BOffcanvas)
    const [, $div] = wrapper.findAll('div')
    const $h5 = $div.get('h5')
    expect($h5.classes()).toContain('offcanvas-title')
  })

  it('first child div has child h5 has id offcanvasLabel', () => {
    const wrapper = mount(BOffcanvas)
    const [, $div] = wrapper.findAll('div')
    const $h5 = $div.get('h5')
    expect($h5.attributes('id')).toContain('offcanvasLabel')
  })

  it('first child div has child h5 that has slot title', () => {
    const wrapper = mount(BOffcanvas, {
      slots: {title: 'foobar'},
    })
    const [, $div] = wrapper.findAll('div')
    const $h5 = $div.get('h5')
    expect($h5.text()).toBe('foobar')
  })

  it('first child div has child h5 that has prop title', () => {
    const wrapper = mount(BOffcanvas, {
      props: {title: 'foobar'},
    })
    const [, $div] = wrapper.findAll('div')
    const $h5 = $div.get('h5')
    expect($h5.text()).toBe('foobar')
  })

  it('first child div has child BCloseButton', () => {
    const wrapper = mount(BOffcanvas)
    const [, $div] = wrapper.findAll('div')
    const $closebutton = $div.findComponent(BCloseButton)
    expect($closebutton.exists()).toBe(true)
  })

  it('first child div child BCloseButton has prop type to be button', () => {
    const wrapper = mount(BOffcanvas)
    const [, $div] = wrapper.findAll('div')
    const $closebutton = $div.getComponent(BCloseButton)
    expect($closebutton.props('type')).toBe('button')
  })

  it('first child div child BCloseButton has prop ariaLabel to be default close', () => {
    const wrapper = mount(BOffcanvas)
    const [, $div] = wrapper.findAll('div')
    const $closebutton = $div.getComponent(BCloseButton)
    expect($closebutton.props('ariaLabel')).toBe('Close')
  })

  it('first child div child BCloseButton has prop ariaLabel to be prop dismissLabel', () => {
    const wrapper = mount(BOffcanvas, {
      props: {dismissLabel: 'foobar'},
    })
    const [, $div] = wrapper.findAll('div')
    const $closebutton = $div.getComponent(BCloseButton)
    expect($closebutton.props('ariaLabel')).toBe('foobar')
  })

  it('first child div child BCloseButton has static class text-reset', () => {
    const wrapper = mount(BOffcanvas)
    const [, $div] = wrapper.findAll('div')
    const $closebutton = $div.getComponent(BCloseButton)
    expect($closebutton.classes()).toContain('text-reset')
  })

  it('second child div has static class offcanvas-body', () => {
    const wrapper = mount(BOffcanvas)
    const offcanvas = wrapper.find('.offcanvas')
    const [, $body] = offcanvas.findAll('div')
    expect($body.classes()).toContain('offcanvas-body')
  })

  it('second child div renders default slot', () => {
    const wrapper = mount(BOffcanvas, {
      slots: {default: 'foobar'},
    })
    const offcanvas = wrapper.find('.offcanvas')
    const [, $body] = offcanvas.findAll('div')
    expect($body.text()).toBe('foobar')
  })
})
