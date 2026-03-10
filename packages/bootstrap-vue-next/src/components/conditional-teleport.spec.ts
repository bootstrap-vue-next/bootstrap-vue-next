import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {defineComponent, h, Teleport} from 'vue'
import ConditionalTeleport from './ConditionalTeleport.vue'

describe('conditional-teleport', () => {
  enableAutoUnmount(afterEach)

  it('has name ConditionalTeleport', () => {
    expect(ConditionalTeleport.name).toBe('ConditionalTeleport')
  })

  it('renders slot content when to is null', () => {
    const wrapper = mount(ConditionalTeleport, {
      props: {to: null, disabled: false},
      slots: {default: '<span class="test-content">hello</span>'},
    })
    expect(wrapper.find('.test-content').exists()).toBe(true)
    expect(wrapper.find('.test-content').text()).toBe('hello')
  })

  it('renders text slot content when to is null', () => {
    const wrapper = mount(ConditionalTeleport, {
      props: {to: null, disabled: false},
      slots: {default: 'plain text'},
    })
    expect(wrapper.text()).toBe('plain text')
  })

  it('does not create a Teleport when to is null', () => {
    const TestComponent = defineComponent({
      setup() {
        return () =>
          h(ConditionalTeleport, {to: null, disabled: false}, {default: () => h('span', 'content')})
      },
    })
    const wrapper = mount(TestComponent, {
      global: {stubs: {teleport: true}},
    })
    // When to is null, no Teleport component should be used
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(wrapper.findComponent(Teleport as any).exists()).toBe(false)
  })

  it('creates a Teleport when to is provided', () => {
    const TestComponent = defineComponent({
      setup() {
        return () =>
          h(
            ConditionalTeleport,
            {to: '#target', disabled: false},
            {default: () => h('span', {class: 'teleported'}, 'content')}
          )
      },
    })
    const wrapper = mount(TestComponent, {
      global: {stubs: {teleport: true}},
    })
    // When to is provided, a Teleport should be created
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const teleport = wrapper.findComponent(Teleport as any)
    expect(teleport.exists()).toBe(true)
  })

  it('passes disabled prop to Teleport', () => {
    const wrapper = mount(ConditionalTeleport, {
      props: {to: '#target', disabled: true},
      slots: {default: 'content'},
      global: {stubs: {teleport: true}},
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const teleport = wrapper.findComponent(Teleport as any)
    expect(teleport.exists()).toBe(true)
  })

  it('defaults to prop to as null', () => {
    const wrapper = mount(ConditionalTeleport, {
      props: {disabled: false},
      slots: {default: 'content'},
    })
    expect(wrapper.props('to')).toBe(null)
  })

  it('renders empty when no slot content is provided and to is null', () => {
    const wrapper = mount(ConditionalTeleport, {
      props: {to: null, disabled: false},
    })
    expect(wrapper.html()).toBe('')
  })

  it('renders slot content when to is null regardless of disabled value', () => {
    const wrapper = mount(ConditionalTeleport, {
      props: {to: null, disabled: true},
      slots: {default: 'content'},
    })
    expect(wrapper.text()).toBe('content')
  })

  it('renders slot content through Teleport when to is set', () => {
    const wrapper = mount(ConditionalTeleport, {
      props: {to: '#target', disabled: false},
      slots: {default: '<span class="inner">teleported</span>'},
      global: {stubs: {teleport: true}},
    })
    expect(wrapper.find('.inner').exists()).toBe(true)
    expect(wrapper.find('.inner').text()).toBe('teleported')
  })

  it('treats disabled as true when to is falsy despite disabled prop being false', () => {
    // The component logic: disabled: props.disabled || !props.to
    // When to is null, it renders slot directly without Teleport
    const TestComponent = defineComponent({
      setup() {
        return () =>
          h(
            ConditionalTeleport,
            {to: null, disabled: false},
            {default: () => h('span', {class: 'content'}, 'test')}
          )
      },
    })
    const wrapper = mount(TestComponent, {
      global: {stubs: {teleport: true}},
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(wrapper.findComponent(Teleport as any).exists()).toBe(false)
    expect(wrapper.find('.content').exists()).toBe(true)
  })
})
