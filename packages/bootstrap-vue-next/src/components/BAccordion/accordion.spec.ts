import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BAccordion from './BAccordion.vue'
import BAccordionItem from './BAccordionItem.vue'

describe('accordion', () => {
  enableAutoUnmount(afterEach)

  it('has static class accordion', () => {
    const wrapper = mount(BAccordion)
    expect(wrapper.classes()).toContain('accordion')
  })

  it('has computed id by default', () => {
    const wrapper = mount(BAccordion)
    expect(wrapper.attributes('id')).toBeDefined()
  })

  it('has id when prop id is set', () => {
    const wrapper = mount(BAccordion, {
      props: {id: 'abc'},
    })
    expect(wrapper.attributes('id')).toBe('abc')
  })

  it('has class accordion-flush when flush is true', async () => {
    const wrapper = mount(BAccordion, {
      props: {flush: true},
    })
    expect(wrapper.classes()).toContain('accordion-flush')
    await wrapper.setProps({flush: false})
    expect(wrapper.classes()).not.toContain('accordion-flush')
  })

  it('renders default slot', () => {
    const wrapper = mount(BAccordion, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('has free prop', () => {
    const wrapper = mount(BAccordion, {
      props: {free: true},
    })
    expect(wrapper.props('free')).toBe(true)
  })

  const complexAccordion = {
    template: `
    <BAccordion v-model="modelValue" v-model:index="index" :free="free">
      <BAccordionItem id="1">1</BAccordionItem>
      <BAccordionItem id="2">2</BAccordionItem>
    </BAccordion>
    `,
    data() {
      return {
        index: undefined,
        modelValue: undefined,
      }
    },
    props: {
      free: {
        type: Boolean,
        default: false,
      },
    },
    components: {
      BAccordion,
      BAccordionItem,
    },
  }

  it('renders in complex structure', async () => {
    const wrapper = await mount(complexAccordion)
    expect(wrapper.findComponent({name: 'b-accordion-item'}).text()).toBe('1')
  })

  it('has modelValue updates index when set', async () => {
    const wrapper = await mount(complexAccordion, {
      props: {free: true},
    })
    expect(wrapper.vm.modelValue).toEqual(undefined)
    await wrapper.setData({modelValue: '1'})
    expect(wrapper.vm.index).toEqual(0)
    await wrapper.setData({modelValue: ['1', '2']})
    expect(wrapper.vm.index).toEqual([0, 1])
    await wrapper.setData({modelValue: '2'})
    expect(wrapper.vm.index).toEqual(1)
    await wrapper.setData({modelValue: ['1', '2']})
    expect(wrapper.vm.index).toEqual([0, 1])
  })

  it('has index updates modelValue when set', async () => {
    const wrapper = await mount(complexAccordion, {
      props: {free: true},
    })
    expect(wrapper.vm.index).toEqual(undefined)
    await wrapper.setData({index: 0})
    expect(wrapper.vm.modelValue).toEqual('1')
    await wrapper.setData({index: [0, 1]})
    expect(wrapper.vm.modelValue).toEqual(['1', '2'])
  })

  it('has modelValue and index update as array when free is set to true', async () => {
    const wrapper = await mount(complexAccordion, {
      props: {free: true},
    })
    expect(wrapper.vm.modelValue).toEqual(undefined)
    expect(wrapper.vm.index).toEqual(undefined)
    const buttons = wrapper.findAll('button')
    await buttons[0].trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.modelValue).toEqual(['1'])
    expect(wrapper.vm.index).toEqual([0])

    await buttons[1].trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.vm.modelValue).toEqual(['1', '2'])
    expect(wrapper.vm.index).toEqual([0, 1])

    await buttons[0].trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.vm.modelValue).toEqual(['2'])
    expect(wrapper.vm.index).toEqual([1])

    await buttons[1].trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.vm.modelValue).toEqual(undefined)
    expect(wrapper.vm.index).toEqual(undefined)
  })
})
