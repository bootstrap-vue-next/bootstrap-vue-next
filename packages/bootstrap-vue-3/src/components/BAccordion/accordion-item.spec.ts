import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BAccordionItem from './BAccordionItem.vue'
import BCollapse from '../BCollapse.vue'

describe('accordion-item', () => {
  it('has static class accordion-item', () => {
    const wrapper = mount(BAccordionItem)
    expect(wrapper.classes()).toContain('accordion-item')

    wrapper.unmount()
  })

  it('contains b-collapse', () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.exists()).toBe(true)

    wrapper.unmount()
  })

  it('b-collapse contains static class accordion-collapse', () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.classes()).toContain('accordion-collapse')

    wrapper.unmount()
  })

  it('b-collapse child div contains static class accordion-body', () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    const [, $div] = $bcollapse.findAll('div')
    expect($div.classes()).toContain('accordion-body')

    wrapper.unmount()
  })

  it('b-collapse child div contains default slot', () => {
    const wrapper = mount(BAccordionItem, {
      slots: {default: 'foobar'},
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    const [, $div] = $bcollapse.findAll('div')
    expect($div.text()).toBe('foobar')

    wrapper.unmount()
  })

  it('b-collapse has id attr has default id', () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.attributes('id')).toBeDefined()

    wrapper.unmount()
  })

  it('b-collapse has id attr has prop id', () => {
    const wrapper = mount(BAccordionItem, {
      props: {id: 'spam&eggs'},
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.attributes('id')).toBe('spam&eggs')

    wrapper.unmount()
  })

  it('b-collapse has prop visible', async () => {
    const wrapper = mount(BAccordionItem, {
      props: {visible: true},
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.props('visible')).toBe(true)
    await wrapper.setProps({visible: false})
    expect($bcollapse.props('visible')).toBe(false)

    wrapper.unmount()
  })

  it('b-collapse has aria-labelledby with prop id', () => {
    const wrapper = mount(BAccordionItem, {
      props: {id: 'foobar'},
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.attributes('aria-labelledby')).toBe('headingfoobar')

    wrapper.unmount()
  })

  it('h2 child has static class accordion-header', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.get('h2')
    expect($h2.classes()).toContain('accordion-header')

    wrapper.unmount()
  })

  it('h2 child has id attr has default id', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.get('h2')
    expect($h2.attributes('id')).toBeDefined()

    wrapper.unmount()
  })

  it('h2 child has id attr has prop id', () => {
    const wrapper = mount(BAccordionItem, {
      props: {id: 'foobar'},
    })
    const $h2 = wrapper.get('h2')
    expect($h2.attributes('id')).toBe('foobarheading')

    wrapper.unmount()
  })

  it('h2 child has button child', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.get('h2')
    const $button = $h2.find('button')
    expect($button.exists()).toBe(true)

    wrapper.unmount()
  })

  it('h2 child button child has static class accordion-button', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.get('h2')
    const $button = $h2.get('button')
    expect($button.classes()).toContain('accordion-button')

    wrapper.unmount()
  })

  it('h2 child button child has type attribute button', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.get('h2')
    const $button = $h2.get('button')
    expect($button.attributes('type')).toBe('button')

    wrapper.unmount()
  })

  it('h2 child button child has aria-expanded false by default', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.get('h2')
    const $button = $h2.get('button')
    expect($button.attributes('aria-expanded')).toBe('false')

    wrapper.unmount()
  })

  it('h2 child button child has aria-expanded true when visible true', () => {
    const wrapper = mount(BAccordionItem, {
      props: {visible: true},
    })
    const $h2 = wrapper.get('h2')
    const $button = $h2.get('button')
    expect($button.attributes('aria-expanded')).toBe('true')

    wrapper.unmount()
  })

  it('h2 child button child has aria-controls as id', () => {
    const wrapper = mount(BAccordionItem, {
      props: {id: 'foobar'},
    })
    const $h2 = wrapper.get('h2')
    const $button = $h2.get('button')
    expect($button.attributes('aria-controls')).toBe('foobar')

    wrapper.unmount()
  })

  it('h2 child button child class collapsed when visible false', async () => {
    const wrapper = mount(BAccordionItem, {
      props: {visible: false},
    })
    const $h2 = wrapper.get('h2')
    const $button = $h2.get('button')
    expect($button.classes()).toContain('collapsed')
    await wrapper.setProps({visible: true})
    expect($button.classes()).not.toContain('collapsed')

    wrapper.unmount()
  })
})
