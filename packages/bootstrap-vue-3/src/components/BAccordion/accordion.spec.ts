import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BAccordion from './BAccordion.vue'

describe('accordion', () => {
  it('has static class accordion', () => {
    const wrapper = mount(BAccordion)
    expect(wrapper.classes()).toContain('accordion')

    wrapper.unmount()
  })

  it('has computed id by default', () => {
    const wrapper = mount(BAccordion)
    expect(wrapper.attributes('id')).toBeDefined()

    wrapper.unmount()
  })

  it('has id when prop id is set', () => {
    const wrapper = mount(BAccordion, {
      props: {id: 'abc'},
    })
    expect(wrapper.attributes('id')).toBe('abc')

    wrapper.unmount()
  })

  it('has class accordion-flush when flush is true', async () => {
    const wrapper = mount(BAccordion, {
      props: {flush: true},
    })
    expect(wrapper.classes()).toContain('accordion-flush')
    await wrapper.setProps({flush: false})
    expect(wrapper.classes()).not.toContain('accordion-flush')

    wrapper.unmount()
  })

  it('renders default slot', () => {
    const wrapper = mount(BAccordion, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')

    wrapper.unmount()
  })
})
