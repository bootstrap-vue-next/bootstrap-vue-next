import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {defineComponent, h, nextTick, ref} from 'vue'
import BAccordion from './BAccordion.vue'
import BAccordionItem from './BAccordionItem.vue'

describe('accordion', () => {
  enableAutoUnmount(afterEach)

  const makeAccordion = (options: {independent?: boolean; initial?: string | string[]} = {}) =>
    defineComponent({
      components: {BAccordion, BAccordionItem},
      setup() {
        const modelValue = ref<string | string[] | undefined>(options.initial)
        return {modelValue}
      },
      template: `
        <BAccordion v-model="modelValue" :independent="${options.independent ?? false}" name="test-group">
          <BAccordionItem id="first" title="First">First body</BAccordionItem>
          <BAccordionItem id="second" title="Second">Second body</BAccordionItem>
        </BAccordion>
      `,
    })

  const toggleDetails = async (element: HTMLDetailsElement, open: boolean) => {
    element.open = open
    await element.dispatchEvent(new Event('toggle'))
    await nextTick()
  }

  it('renders the Bootstrap wrapper and forwards its id', () => {
    const wrapper = mount(BAccordion, {props: {id: 'questions'}})
    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.classes()).toContain('accordion')
    expect(wrapper.attributes('id')).toBe('questions')
  })

  it('generates an id for the wrapper when omitted', () => {
    expect(mount(BAccordion).attributes('id')).toBeDefined()
  })

  it('applies the flush, gap, small, and theme classes', () => {
    const wrapper = mount(BAccordion, {
      props: {flush: true, gap: true, size: 'sm', theme: 'primary'},
    })
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(['accordion-flush', 'accordion-gap', 'accordion-sm', 'theme-primary'])
    )
  })

  it('generates a distinct group name for exclusive accordions', () => {
    const wrapper = mount(
      defineComponent({
        components: {BAccordion, BAccordionItem},
        template: `
        <div>
          <BAccordion><BAccordionItem id="first-group" /></BAccordion>
          <BAccordion><BAccordionItem id="second-group" /></BAccordion>
        </div>
      `,
      })
    )
    const [first, second] = wrapper.findAll('details')
    expect(first.attributes('name')).toBeDefined()
    expect(second.attributes('name')).toBeDefined()
    expect(first.attributes('name')).not.toBe(second.attributes('name'))
    expect(wrapper.findAll('.accordion')[0].attributes('id')).not.toBe(first.attributes('name'))
  })

  it('renders native details items sharing the configured group name', () => {
    const wrapper = mount(makeAccordion())
    const items = wrapper.findAll('details.accordion-item')
    expect(items).toHaveLength(2)
    expect(items.map((item) => item.attributes('name'))).toEqual(['test-group', 'test-group'])
    expect(items[0].find('summary.accordion-header').text()).toBe('First')
    expect(items[0].find('.accordion-body').text()).toBe('First body')
  })

  it('omits the native group name when independent', () => {
    const wrapper = mount(makeAccordion({independent: true}))
    expect(wrapper.findAll('details').every((item) => !item.attributes('name'))).toBe(true)
  })

  it('normalizes an empty independent model to undefined', async () => {
    const wrapper = mount(makeAccordion({independent: true, initial: []}))
    await nextTick()
    expect(wrapper.vm.modelValue).toBeUndefined()
  })

  it('synchronizes native toggles to an exclusive root model', async () => {
    const wrapper = mount(makeAccordion())
    const [first, second] = wrapper.findAll('details')

    await toggleDetails(first.element as HTMLDetailsElement, true)
    expect(wrapper.vm.modelValue).toBe('first')
    expect(first.attributes('open')).toBeDefined()

    await toggleDetails(second.element as HTMLDetailsElement, true)
    expect(wrapper.vm.modelValue).toBe('second')
    expect(first.attributes('open')).toBeUndefined()
    expect(second.attributes('open')).toBeDefined()

    await toggleDetails(second.element as HTMLDetailsElement, false)
    expect(wrapper.vm.modelValue).toBeUndefined()
  })

  it('synchronizes native toggles to an independent array model', async () => {
    const wrapper = mount(makeAccordion({independent: true}))
    const [first, second] = wrapper.findAll('details')

    await toggleDetails(first.element as HTMLDetailsElement, true)
    await toggleDetails(second.element as HTMLDetailsElement, true)
    expect(wrapper.vm.modelValue).toEqual(['first', 'second'])

    await toggleDetails(first.element as HTMLDetailsElement, false)
    expect(wrapper.vm.modelValue).toEqual(['second'])
  })

  it('keeps separate accordion models and groups isolated', async () => {
    const wrapper = mount(
      defineComponent({
        components: {BAccordion, BAccordionItem},
        setup() {
          const firstModel = ref<string | undefined>()
          const secondModel = ref<string | undefined>()
          return {firstModel, secondModel}
        },
        template: `
          <div>
            <BAccordion v-model="firstModel">
              <BAccordionItem id="item" title="First group" />
            </BAccordion>
            <BAccordion v-model="secondModel">
              <BAccordionItem id="item" title="Second group" />
            </BAccordion>
          </div>
        `,
      })
    )
    const [first, second] = wrapper.findAll('details')
    expect(first.attributes('name')).not.toBe(second.attributes('name'))

    await toggleDetails(first.element as HTMLDetailsElement, true)
    expect(wrapper.vm.firstModel).toBe('item')
    expect(wrapper.vm.secondModel).toBeUndefined()
    expect(second.attributes('open')).toBeUndefined()
  })

  it('reflects controlled model updates in native open attributes', async () => {
    const wrapper = mount(makeAccordion({initial: 'second'}))
    const [first, second] = wrapper.findAll('details')
    expect(first.attributes('open')).toBeUndefined()
    expect(second.attributes('open')).toBeDefined()

    wrapper.vm.modelValue = 'first'
    await nextTick()
    expect(first.attributes('open')).toBeDefined()
    expect(second.attributes('open')).toBeUndefined()
  })

  it('normalizes model shape when switching between exclusive and independent modes', async () => {
    const wrapper = mount(
      defineComponent({
        components: {BAccordion, BAccordionItem},
        setup() {
          const modelValue = ref<string | string[] | undefined>('first')
          const independent = ref(false)
          return {modelValue, independent}
        },
        template: `
          <BAccordion v-model="modelValue" :independent="independent">
            <BAccordionItem id="first" title="First" />
          </BAccordion>
        `,
      })
    )

    wrapper.vm.independent = true
    await nextTick()
    expect(wrapper.vm.modelValue).toEqual(['first'])
    wrapper.vm.independent = false
    await nextTick()
    expect(wrapper.vm.modelValue).toBe('first')
  })

  it('keeps nested and separate accordion groups isolated by generated names', () => {
    const wrapper = mount(
      defineComponent({
        components: {BAccordion, BAccordionItem},
        render: () =>
          h(BAccordion, null, {
            default: () => [
              h(
                BAccordionItem,
                {id: 'outer', title: 'Outer'},
                {
                  default: () =>
                    h(BAccordion, null, {
                      default: () => h(BAccordionItem, {id: 'inner', title: 'Inner'}),
                    }),
                }
              ),
              h(BAccordion),
            ],
          }),
      })
    )

    const names = wrapper.findAll('details').map((item) => item.attributes('name'))
    expect(names).toHaveLength(2)
    expect(names[0]).toBeDefined()
    expect(names[1]).toBeDefined()
    expect(names[0]).not.toBe(names[1])
  })
})
