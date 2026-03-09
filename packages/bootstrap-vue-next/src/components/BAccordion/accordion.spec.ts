import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {nextTick} from 'vue'
import BAccordion from './BAccordion.vue'
import BAccordionItem from './BAccordionItem.vue'
import BCollapse from '../BCollapse/BCollapse.vue'

describe('accordion', () => {
  enableAutoUnmount(afterEach)

  it('has static class accordion', () => {
    const wrapper = mount(BAccordion)
    expect(wrapper.classes()).toContain('accordion')
  })

  it('root element is a div', () => {
    const wrapper = mount(BAccordion)
    expect(wrapper.element.tagName).toBe('DIV')
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

  it('does not have class accordion-flush by default', () => {
    const wrapper = mount(BAccordion)
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

  it('free prop defaults to false', () => {
    const wrapper = mount(BAccordion)
    expect(wrapper.props('free')).toBe(false)
  })

  it('flush prop defaults to false', () => {
    const wrapper = mount(BAccordion)
    expect(wrapper.props('flush')).toBe(false)
  })

  it('initialAnimation prop defaults to false', () => {
    const wrapper = mount(BAccordion)
    expect(wrapper.props('initialAnimation')).toBe(false)
  })

  it('lazy prop defaults to false', () => {
    const wrapper = mount(BAccordion)
    expect(wrapper.props('lazy')).toBe(false)
  })

  it('unmountLazy prop defaults to false', () => {
    const wrapper = mount(BAccordion)
    expect(wrapper.props('unmountLazy')).toBe(false)
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

  it('renders multiple accordion items', async () => {
    const wrapper = await mount(complexAccordion)
    const items = wrapper.findAllComponents({name: 'b-accordion-item'})
    expect(items).toHaveLength(2)
    expect(items[0].text()).toBe('1')
    expect(items[1].text()).toBe('2')
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

  it('non-free mode allows only one item open at a time via clicks', async () => {
    const wrapper = await mount(complexAccordion, {
      props: {free: false},
    })
    const buttons = wrapper.findAll('button')

    await buttons[0].trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.vm.modelValue).toEqual('1')
    expect(wrapper.vm.index).toEqual(0)

    await buttons[1].trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.vm.modelValue).toEqual('2')
    expect(wrapper.vm.index).toEqual(1)
  })

  it('non-free mode clicking same item toggles it closed', async () => {
    const wrapper = await mount(complexAccordion, {
      props: {free: false},
    })
    const buttons = wrapper.findAll('button')

    await buttons[0].trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.vm.modelValue).toEqual('1')
    expect(wrapper.vm.index).toEqual(0)

    await buttons[0].trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.vm.modelValue).toEqual(undefined)
    expect(wrapper.vm.index).toEqual(undefined)
  })

  it('non-free mode modelValue updates index when set', async () => {
    const wrapper = await mount(complexAccordion, {
      props: {free: false},
    })
    await wrapper.setData({modelValue: '2'})
    expect(wrapper.vm.index).toEqual(1)
    await wrapper.setData({modelValue: '1'})
    expect(wrapper.vm.index).toEqual(0)
  })

  it('non-free mode index updates modelValue when set', async () => {
    const wrapper = await mount(complexAccordion, {
      props: {free: false},
    })
    await wrapper.setData({index: 1})
    expect(wrapper.vm.modelValue).toEqual('2')
    await wrapper.setData({index: 0})
    expect(wrapper.vm.modelValue).toEqual('1')
  })

  it('non-free mode setting modelValue to unknown id resets to undefined', async () => {
    const wrapper = await mount(complexAccordion, {
      props: {free: false},
    })
    await wrapper.setData({modelValue: 'unknown'})
    await nextTick()
    await nextTick()
    expect(wrapper.vm.modelValue).toEqual(undefined)
  })

  it('non-free mode setting index out of bounds resets to undefined', async () => {
    const wrapper = await mount(complexAccordion, {
      props: {free: false},
    })
    await wrapper.setData({index: 99})
    await nextTick()
    await nextTick()
    expect(wrapper.vm.index).toEqual(undefined)
  })

  it('non-free mode array modelValue takes first element', async () => {
    const wrapper = await mount(complexAccordion, {
      props: {free: false},
    })
    await wrapper.setData({modelValue: ['1', '2']})
    expect(wrapper.vm.index).toEqual(0)
  })

  it('setting modelValue to undefined clears index', async () => {
    const wrapper = await mount(complexAccordion, {
      props: {free: true},
    })
    await wrapper.setData({modelValue: '1'})
    expect(wrapper.vm.index).toEqual(0)

    await wrapper.setData({modelValue: undefined})
    expect(wrapper.vm.index).toEqual(undefined)
  })

  it('setting index to undefined clears modelValue', async () => {
    const wrapper = await mount(complexAccordion, {
      props: {free: true},
    })
    await wrapper.setData({index: 0})
    expect(wrapper.vm.modelValue).toEqual('1')

    await wrapper.setData({index: undefined})
    expect(wrapper.vm.modelValue).toEqual(undefined)
  })

  const complexAccordionWithFreeToggle = {
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
        free: false,
      }
    },
    components: {
      BAccordion,
      BAccordionItem,
    },
  }

  it('switching free from true to false with array modelValue takes first element', async () => {
    const wrapper = await mount(complexAccordionWithFreeToggle)
    await wrapper.setData({free: true})
    await wrapper.setData({modelValue: ['1', '2']})
    await nextTick()
    expect(wrapper.vm.modelValue).toEqual(['1', '2'])

    await wrapper.setData({free: false})
    await nextTick()
    expect(wrapper.vm.modelValue).toEqual('1')
  })

  it('switching free from false to true with string modelValue converts to array', async () => {
    const wrapper = await mount(complexAccordionWithFreeToggle)
    await wrapper.setData({modelValue: '1'})
    await nextTick()
    expect(wrapper.vm.modelValue).toEqual('1')

    await wrapper.setData({free: true})
    await nextTick()
    expect(wrapper.vm.modelValue).toEqual(['1'])
  })

  it('switching free does not affect undefined modelValue', async () => {
    const wrapper = await mount(complexAccordionWithFreeToggle)
    expect(wrapper.vm.modelValue).toEqual(undefined)

    await wrapper.setData({free: true})
    await nextTick()
    expect(wrapper.vm.modelValue).toEqual(undefined)

    await wrapper.setData({free: false})
    await nextTick()
    expect(wrapper.vm.modelValue).toEqual(undefined)
  })

  it('provides lazy prop to accordion items', async () => {
    const wrapper = mount(BAccordion, {
      props: {lazy: true},
      slots: {
        default: {
          components: {BAccordionItem},
          template: '<BAccordionItem id="a1">content</BAccordionItem>',
        },
      },
    })
    const $collapse = wrapper.findComponent(BCollapse)
    expect($collapse.props('lazy')).toBe(true)
  })

  it('provides unmountLazy prop to accordion items', async () => {
    const wrapper = mount(BAccordion, {
      props: {unmountLazy: true},
      slots: {
        default: {
          components: {BAccordionItem},
          template: '<BAccordionItem id="a1">content</BAccordionItem>',
        },
      },
    })
    const $collapse = wrapper.findComponent(BCollapse)
    expect($collapse.props('unmountLazy')).toBe(true)
  })

  it('free mode with index as single number updates modelValue to single id', async () => {
    const wrapper = await mount(complexAccordion, {
      props: {free: true},
    })
    await wrapper.setData({index: 1})
    expect(wrapper.vm.modelValue).toEqual('2')
  })

  it('free mode setting index out of bounds resets to undefined', async () => {
    const wrapper = await mount(complexAccordion, {
      props: {free: true},
    })
    await wrapper.setData({index: 99})
    await nextTick()
    await nextTick()
    expect(wrapper.vm.index).toEqual(undefined)
  })

  it('free mode setting modelValue to unknown id resets to undefined', async () => {
    const wrapper = await mount(complexAccordion, {
      props: {free: true},
    })
    await wrapper.setData({modelValue: ['unknown']})
    await nextTick()
    await nextTick()
    expect(wrapper.vm.modelValue).toEqual(undefined)
  })

  const threeItemAccordion = {
    template: `
    <BAccordion v-model="modelValue" v-model:index="index" :free="free">
      <BAccordionItem id="a">A</BAccordionItem>
      <BAccordionItem id="b">B</BAccordionItem>
      <BAccordionItem id="c">C</BAccordionItem>
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

  it('renders three accordion items', async () => {
    const wrapper = await mount(threeItemAccordion)
    const items = wrapper.findAllComponents({name: 'b-accordion-item'})
    expect(items).toHaveLength(3)
  })

  it('non-free mode with three items only one is open at a time', async () => {
    const wrapper = await mount(threeItemAccordion, {
      props: {free: false},
    })
    const buttons = wrapper.findAll('button')

    await buttons[0].trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.vm.modelValue).toEqual('a')
    expect(wrapper.vm.index).toEqual(0)

    await buttons[2].trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.vm.modelValue).toEqual('c')
    expect(wrapper.vm.index).toEqual(2)

    await buttons[1].trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.vm.modelValue).toEqual('b')
    expect(wrapper.vm.index).toEqual(1)
  })

  it('free mode with three items allows multiple open', async () => {
    const wrapper = await mount(threeItemAccordion, {
      props: {free: true},
    })
    const buttons = wrapper.findAll('button')

    await buttons[0].trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.vm.modelValue).toEqual(['a'])

    await buttons[1].trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.vm.modelValue).toEqual(['a', 'b'])

    await buttons[2].trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.vm.modelValue).toEqual(['a', 'b', 'c'])
    expect(wrapper.vm.index).toEqual([0, 1, 2])
  })

  it('free mode closing middle item removes it from array', async () => {
    const wrapper = await mount(threeItemAccordion, {
      props: {free: true},
    })
    const buttons = wrapper.findAll('button')

    await buttons[0].trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    await buttons[1].trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    await buttons[2].trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.vm.modelValue).toEqual(['a', 'b', 'c'])

    await buttons[1].trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.vm.modelValue).toEqual(['a', 'c'])
    expect(wrapper.vm.index).toEqual([0, 2])
  })

  it('index as array in free mode updates modelValue correctly', async () => {
    const wrapper = await mount(threeItemAccordion, {
      props: {free: true},
    })
    await wrapper.setData({index: [0, 2]})
    expect(wrapper.vm.modelValue).toEqual(['a', 'c'])
  })

  const initialModelAccordion = {
    template: `
    <BAccordion v-model="modelValue" v-model:index="index">
      <BAccordionItem id="x">X</BAccordionItem>
      <BAccordionItem id="y">Y</BAccordionItem>
    </BAccordion>
    `,
    data() {
      return {
        index: undefined,
        modelValue: 'x',
      }
    },
    components: {
      BAccordion,
      BAccordionItem,
    },
  }

  it('initial modelValue sets the correct index', async () => {
    const wrapper = await mount(initialModelAccordion)
    await nextTick()
    expect(wrapper.vm.index).toEqual(0)
  })

  const initialIndexAccordion = {
    template: `
    <BAccordion v-model="modelValue" v-model:index="index">
      <BAccordionItem id="x">X</BAccordionItem>
      <BAccordionItem id="y">Y</BAccordionItem>
    </BAccordion>
    `,
    data() {
      return {
        index: 1,
        modelValue: undefined,
      }
    },
    components: {
      BAccordion,
      BAccordionItem,
    },
  }

  it('initial index sets the correct modelValue', async () => {
    const wrapper = await mount(initialIndexAccordion)
    await nextTick()
    expect(wrapper.vm.modelValue).toEqual('y')
  })
})
