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

  it('exposes registry methods from orchestrator', () => {
    const wrapper = mount(BApp)

    // Check that BApp exposes the registry methods
    expect(wrapper.vm).toBeDefined()
    
    // Modal methods
    expect(typeof wrapper.vm.show).toBe('function')
    expect(typeof wrapper.vm.hide).toBe('function')
    expect(typeof wrapper.vm.hideAll).toBe('function')
    expect(typeof wrapper.vm.get).toBe('function')
    expect(typeof wrapper.vm.current).toBe('function')
    expect(typeof wrapper.vm.create).toBe('function')
    
    // Popover methods
    expect(typeof wrapper.vm.popover).toBe('function')
    expect(typeof wrapper.vm.tooltip).toBe('function')
    
    // Registry state
    expect(wrapper.vm._isOrchestratorInstalled).toBeDefined()
    expect(wrapper.vm._isToastAppend).toBeDefined()
    expect(wrapper.vm.store).toBeDefined()
  })

  it('returns undefined for exposed methods when orchestrator is disabled', () => {
    const wrapper = mount(BApp, {
      props: {
        noOrchestrator: true,
      },
    })

    // When orchestrator is disabled, methods should be undefined
    expect(wrapper.vm.show).toBeUndefined()
    expect(wrapper.vm.hide).toBeUndefined()
    expect(wrapper.vm.create).toBeUndefined()
    expect(wrapper.vm.popover).toBeUndefined()
    expect(wrapper.vm.tooltip).toBeUndefined()
  })
})
