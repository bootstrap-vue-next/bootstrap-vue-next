import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BAccordionItem from './BAccordionItem.vue'
import BCollapse from '../BCollapse.vue'

describe('accordion-item', () => {
  enableAutoUnmount(afterEach)

  it('has static class accordion-item', () => {
    const wrapper = mount(BAccordionItem)
    expect(wrapper.classes()).toContain('accordion-item')
  })

  it('root is div', () => {
    const wrapper = mount(BAccordionItem)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('contains b-collapse', () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.exists()).toBe(true)
  })

  it('b-collapse contains static class accordion-collapse', () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.classes()).toContain('accordion-collapse')
  })

  it('b-collapse has child div', () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    const [, $div] = $bcollapse.findAll('div')
    expect($div.exists()).toBe(true)
  })

  it('b-collapse child div contains static class accordion-body', () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    const [, $div] = $bcollapse.findAll('div')
    expect($div.classes()).toContain('accordion-body')
  })

  it('b-collapse child div contains default slot', () => {
    const wrapper = mount(BAccordionItem, {
      slots: {default: 'foobar'},
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    const [, $div] = $bcollapse.findAll('div')
    expect($div.text()).toBe('foobar')
  })

  it('b-collapse has id attr has default id', () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.attributes('id')).toBeDefined()
  })

  it('b-collapse has id attr has prop id', () => {
    const wrapper = mount(BAccordionItem, {
      props: {id: 'spam&eggs'},
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.attributes('id')).toBe('spam&eggs')
  })

  it('b-collapse has prop visible', async () => {
    const wrapper = mount(BAccordionItem, {
      props: {visible: true},
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.props('visible')).toBe(true)
    await wrapper.setProps({visible: false})
    expect($bcollapse.props('visible')).toBe(false)
  })

  it('b-collapse has aria-labelledby with prop id', () => {
    const wrapper = mount(BAccordionItem, {
      props: {id: 'foobar'},
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.attributes('aria-labelledby')).toBe('headingfoobar')
  })

  it('h2 child has static class accordion-header', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.get('h2')
    expect($h2.classes()).toContain('accordion-header')
  })

  it('h2 child has id attr has default id', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.get('h2')
    expect($h2.attributes('id')).toBeDefined()
  })

  it('h2 child has id attr has prop id', () => {
    const wrapper = mount(BAccordionItem, {
      props: {id: 'foobar'},
    })
    const $h2 = wrapper.get('h2')
    expect($h2.attributes('id')).toBe('foobarheading')
  })

  it('h2 child has button child', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.get('h2')
    const $button = $h2.find('button')
    expect($button.exists()).toBe(true)
  })

  it('h2 child button child has static class accordion-button', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.get('h2')
    const $button = $h2.get('button')
    expect($button.classes()).toContain('accordion-button')
  })

  it('h2 child button child has type attribute button', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.get('h2')
    const $button = $h2.get('button')
    expect($button.attributes('type')).toBe('button')
  })

  it('h2 child button child has aria-expanded false by default', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.get('h2')
    const $button = $h2.get('button')
    expect($button.attributes('aria-expanded')).toBe('false')
  })

  it('h2 child button child has aria-expanded true when visible true', () => {
    const wrapper = mount(BAccordionItem, {
      props: {visible: true},
    })
    const $h2 = wrapper.get('h2')
    const $button = $h2.get('button')
    expect($button.attributes('aria-expanded')).toBe('true')
  })

  it('h2 child button child has aria-controls as id', () => {
    const wrapper = mount(BAccordionItem, {
      props: {id: 'foobar'},
    })
    const $h2 = wrapper.get('h2')
    const $button = $h2.get('button')
    expect($button.attributes('aria-controls')).toBe('foobar')
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
  })
})
