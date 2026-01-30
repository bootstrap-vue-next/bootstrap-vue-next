import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BApp from './BApp.vue'

describe('BApp', () => {
  enableAutoUnmount(afterEach)

  it('renders correctly', () => {
    const wrapper = mount(BApp, {
      slots: {
        default: '<div>Test content</div>',
      },
    })

    expect(wrapper.find('div').exists()).toBe(true)
    expect(wrapper.text()).toContain('Test content')
  })

  it('includes orchestrator by default', () => {
    const wrapper = mount(BApp)

    expect(wrapper.findComponent({name: 'BOrchestrator'}).exists()).toBe(true)
  })

  it('can disable orchestrator', () => {
    const wrapper = mount(BApp, {
      props: {
        noOrchestrator: true,
      },
    })
    // console.log(wrapper.html())

    expect(wrapper.findComponent({name: 'BOrchestrator'}).exists()).toBe(false)
  })

  it('provides defaults to child components', () => {
    const defaults = {
      BButton: {
        variant: 'primary' as const,
        size: 'sm' as const,
      },
    }

    const wrapper = mount(BApp, {
      props: {
        defaults,
      },
      slots: {
        default: '<div>Test content</div>',
      },
    })

    // The component should provide the defaults via Vue's provide/inject
    expect(wrapper.vm).toBeDefined()
  })

  it('supports teleporting orchestrator', () => {
    const wrapper = mount(BApp, {
      props: {
        teleportTo: 'body',
      },
    })

    const teleport = wrapper.findComponent({name: 'ConditionalTeleport'})
    expect(teleport.exists()).toBe(true)
    expect(teleport.props('to')).toBe('body')
    expect(teleport.props('disabled')).toBe(false)
  })

  it('supports RTL configuration', () => {
    const rtlConfig = {
      rtlInitial: true,
      localeInitial: 'ar',
    }

    const wrapper = mount(BApp, {
      props: {
        rtl: rtlConfig,
      },
      slots: {
        default: '<div>Test content</div>',
      },
    })

    expect(wrapper.vm).toBeDefined()
  })

  it('supports defaults merging', () => {
    const defaults = {
      BButton: {
        variant: 'primary' as const,
      },
    }

    const wrapper = mount(BApp, {
      props: {
        defaults,
        mergeDefaults: true,
        deepMerge: true,
      },
      slots: {
        default: '<div>Test content</div>',
      },
    })

    expect(wrapper.vm).toBeDefined()
  })

  it('supports append toast configuration', () => {
    const wrapper = mount(BApp, {
      props: {
        appendToast: true,
      },
    })

    const orchestrator = wrapper.findComponent({name: 'BOrchestrator'})
    expect(orchestrator.exists()).toBe(true)
    expect(orchestrator.props('appendToast')).toBe(true)
  })

  it('exposes toast composable via defineExpose', async () => {
    const wrapper = mount(BApp)
    
    expect(wrapper.vm.toast).toBeDefined()
    expect(wrapper.vm.toast.create).toBeTypeOf('function')
  })

  it('exposes modal composable via defineExpose', async () => {
    const wrapper = mount(BApp)
    
    expect(wrapper.vm.modal).toBeDefined()
    expect(wrapper.vm.modal.create).toBeTypeOf('function')
    expect(wrapper.vm.modal.show).toBeTypeOf('function')
    expect(wrapper.vm.modal.hide).toBeTypeOf('function')
  })

  it('exposes popover composable via defineExpose', async () => {
    const wrapper = mount(BApp)
    
    expect(wrapper.vm.popover).toBeDefined()
    expect(wrapper.vm.popover.create).toBeTypeOf('function')
  })

  it('exposes breadcrumb composable via defineExpose', async () => {
    const wrapper = mount(BApp)
    
    expect(wrapper.vm.breadcrumb).toBeDefined()
    expect(wrapper.vm.breadcrumb.items).toBeDefined()
    expect(wrapper.vm.breadcrumb.reset).toBeTypeOf('function')
  })

  it('exposes rtl registry via defineExpose', async () => {
    const wrapper = mount(BApp, {
      props: {
        rtl: {
          rtlInitial: true,
          localeInitial: 'ar',
        },
      },
    })
    
    expect(wrapper.vm.rtl).toBeDefined()
    expect(wrapper.vm.rtl?.isRtl).toBeDefined()
    expect(wrapper.vm.rtl?.locale).toBeDefined()
  })

  it('does not expose orchestrator composables when noOrchestrator is true', async () => {
    const wrapper = mount(BApp, {
      props: {
        noOrchestrator: true,
      },
    })
    
    expect(wrapper.vm.toast).toBeUndefined()
    expect(wrapper.vm.modal).toBeUndefined()
    expect(wrapper.vm.popover).toBeUndefined()
    // breadcrumb and rtl should still be available
    expect(wrapper.vm.breadcrumb).toBeDefined()
    expect(wrapper.vm.rtl).toBeDefined()
  })
})
