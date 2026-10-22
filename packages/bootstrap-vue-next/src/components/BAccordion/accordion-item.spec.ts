import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {defineComponent, nextTick, ref} from 'vue'
import BAccordion from './BAccordion.vue'
import BAccordionItem from './BAccordionItem.vue'

describe('accordion item', () => {
  enableAutoUnmount(afterEach)

  it('renders native details, summary, and body markup', () => {
    const wrapper = mount(BAccordionItem, {
      props: {id: 'shipping', title: 'Shipping'},
      slots: {default: 'Body content'},
    })

    expect(wrapper.element.tagName).toBe('DETAILS')
    expect(wrapper.classes()).toContain('accordion-item')
    expect(wrapper.attributes('id')).toBe('shipping')
    expect(wrapper.find('summary.accordion-header').text()).toContain('Shipping')
    expect(wrapper.find('.accordion-body').text()).toBe('Body content')
  })

  it('generates an id for the details element when omitted', () => {
    expect(mount(BAccordionItem).attributes('id')).toBeDefined()
  })

  it('uses the native open state and synchronizes v-model:open', async () => {
    const open = ref(false)
    const wrapper = mount(
      defineComponent({
        components: {BAccordionItem},
        setup: () => ({open}),
        template: '<BAccordionItem v-model:open="open" title="Details" />',
      })
    )
    const details = wrapper.get('details')

    expect(details.attributes('open')).toBeUndefined()
    ;(details.element as HTMLDetailsElement).open = true
    await details.trigger('toggle')
    expect(open.value).toBe(true)
    expect(wrapper.findComponent(BAccordionItem).emitted('toggle')).toBeDefined()

    open.value = false
    await nextTick()
    expect(details.attributes('open')).toBeUndefined()
  })

  it('starts open when the open prop is true', () => {
    const wrapper = mount(BAccordionItem, {props: {open: true}})
    expect(wrapper.attributes('open')).toBeDefined()
  })

  it('uses the generated native group name unless an item overrides it', () => {
    const wrapper = mount(
      defineComponent({
        components: {BAccordion, BAccordionItem},
        template: `
          <BAccordion>
            <BAccordionItem id="default-name" />
            <BAccordionItem id="custom-name" name="custom" />
          </BAccordion>
        `,
      })
    )
    const items = wrapper.findAll('details')

    expect(items[0].attributes('name')).toBeDefined()
    expect(items[1].attributes('name')).toBe('custom')
  })

  it('supports custom summary and body attributes and classes', () => {
    const wrapper = mount(BAccordionItem, {
      props: {
        summaryAttrs: {'data-testid': 'summary'},
        summaryClass: 'custom-summary',
        bodyAttrs: {'data-testid': 'body'},
        bodyClass: 'custom-body',
      },
    })

    expect(wrapper.get('summary').attributes('data-testid')).toBe('summary')
    expect(wrapper.get('summary').classes()).toContain('custom-summary')
    expect(wrapper.get('.accordion-body').attributes('data-testid')).toBe('body')
    expect(wrapper.get('.accordion-body').classes()).toContain('custom-body')
  })

  it('renders the default icon and allows replacing it with the icon slot', () => {
    const wrapper = mount(BAccordionItem, {
      slots: {icon: '<span class="custom-icon">Icon</span>'},
    })
    expect(wrapper.find('.accordion-icon').exists()).toBe(false)
    expect(wrapper.find('.custom-icon').text()).toBe('Icon')
  })

  it('forwards unspecified attributes to the details element', () => {
    const wrapper = mount(BAccordionItem, {
      attrs: {'data-testid': 'details'},
    })
    expect(wrapper.attributes('data-testid')).toBe('details')
  })
})
