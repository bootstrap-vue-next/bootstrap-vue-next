import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BOffcanvas from './BOffcanvas.vue'

describe('offcanvas', () => {
  it('has static class offcanvas', () => {
    const wrapper = mount(BOffcanvas)
    expect(wrapper.classes()).toContain('offcanvas')

    wrapper.unmount()
  })

  it('has tabindex -1', () => {
    const wrapper = mount(BOffcanvas)
    expect(wrapper.attributes('tabindex')).toBe('-1')

    wrapper.unmount()
  })

  it('has aria-labelledby offcanvasLabel', () => {
    const wrapper = mount(BOffcanvas)
    expect(wrapper.attributes('aria-labelledby')).toBe('offcanvasLabel')

    wrapper.unmount()
  })

  it('has offcanvas-{type} when prop placement', () => {
    const wrapper = mount(BOffcanvas)
    expect(wrapper.classes()).toContain('offcanvas-start')

    wrapper.unmount()
  })

  it('has offcanvas-{type} when prop placement not default', () => {
    const wrapper = mount(BOffcanvas, {
      props: {placement: 'abc'},
    })
    expect(wrapper.classes()).toContain('offcanvas-abc')

    wrapper.unmount()
  })

  it('has data-bs-backdrop', async () => {
    const wrapper = mount(BOffcanvas)
    expect(wrapper.attributes('data-bs-backdrop')).toBe('true')
    await wrapper.setProps({backdrop: false})
    expect(wrapper.attributes('data-bs-backdrop')).toBe('false')

    wrapper.unmount()
  })

  it('has data-bs-scroll', async () => {
    const wrapper = mount(BOffcanvas)
    expect(wrapper.attributes('data-bs-scroll')).toBe('false')
    await wrapper.setProps({bodyScrolling: true})
    expect(wrapper.attributes('data-bs-scroll')).toBe('true')

    wrapper.unmount()
  })

  it('first child div has static class offcanvas-header', () => {
    const wrapper = mount(BOffcanvas)
    const [, $div] = wrapper.findAll('div')
    expect($div.classes()).toContain('offcanvas-header')

    wrapper.unmount()
  })

  it('first child div has child h5 with static class offcanvas-title', () => {
    const wrapper = mount(BOffcanvas)
    const [, $div] = wrapper.findAll('div')
    const $h5 = $div.get('h5')
    expect($h5.classes()).toContain('offcanvas-title')

    wrapper.unmount()
  })

  it('first child div has child h5 has id offcanvasLabel', () => {
    const wrapper = mount(BOffcanvas)
    const [, $div] = wrapper.findAll('div')
    const $h5 = $div.get('h5')
    expect($h5.attributes('id')).toContain('offcanvasLabel')

    wrapper.unmount()
  })

  it('first child div has child h5 that has slot title', () => {
    const wrapper = mount(BOffcanvas, {
      slots: {title: 'foobar'},
    })
    const [, $div] = wrapper.findAll('div')
    const $h5 = $div.get('h5')
    expect($h5.text()).toBe('foobar')

    wrapper.unmount()
  })

  it('first child div has child h5 that has prop title', () => {
    const wrapper = mount(BOffcanvas, {
      props: {title: 'foobar'},
    })
    const [, $div] = wrapper.findAll('div')
    const $h5 = $div.get('h5')
    expect($h5.text()).toBe('foobar')

    wrapper.unmount()
  })

  it('first child div has child button has static type button', () => {
    const wrapper = mount(BOffcanvas)
    const [, $div] = wrapper.findAll('div')
    const $button = $div.get('button')
    expect($button.attributes('type')).toBe('button')

    wrapper.unmount()
  })

  it('first child div has child button has static class btn-close', () => {
    const wrapper = mount(BOffcanvas)
    const [, $div] = wrapper.findAll('div')
    const $button = $div.get('button')
    expect($button.classes()).toContain('btn-close')

    wrapper.unmount()
  })

  it('first child div has child button has aria-label close', () => {
    const wrapper = mount(BOffcanvas)
    const [, $div] = wrapper.findAll('div')
    const $button = $div.get('button')
    expect($button.attributes('aria-label')).toBe('Close')

    wrapper.unmount()
  })

  it('first child div has child button has static class text-reset', () => {
    const wrapper = mount(BOffcanvas)
    const [, $div] = wrapper.findAll('div')
    const $button = $div.get('button')
    expect($button.classes()).toContain('text-reset')

    wrapper.unmount()
  })

  it('second child div has static class offcanvas-body', () => {
    const wrapper = mount(BOffcanvas)
    const [, , $div] = wrapper.findAll('div')
    expect($div.classes()).toContain('offcanvas-body')

    wrapper.unmount()
  })

  it('second child div renders default slot', () => {
    const wrapper = mount(BOffcanvas, {
      slots: {default: 'foobar'},
    })
    const [, , $div] = wrapper.findAll('div')
    expect($div.text()).toBe('foobar')

    wrapper.unmount()
  })
})
