import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {defineComponent, h, inject, type Ref} from 'vue'
import BApp from './BApp.vue'
import {
  breadcrumbRegistryKey,
  defaultsKey,
  modalManagerKey,
  orchestratorRegistryKey,
  rtlRegistryKey,
  showHideRegistryKey,
} from '../../utils/keys'
import type {BvnComponentProps} from '../../types/BootstrapVueOptions'

// Helper child component that captures injected values for assertion
const createInjectionCapture = () => {
  const captured: Record<string, unknown> = {}

  const ChildComponent = defineComponent({
    name: 'InjectionCapture',
    setup() {
      captured.defaults = inject(defaultsKey, null)
      captured.rtl = inject(rtlRegistryKey, null)
      captured.modalManager = inject(modalManagerKey, null)
      captured.showHide = inject(showHideRegistryKey, null)
      captured.breadcrumb = inject(breadcrumbRegistryKey, null)
      captured.orchestrator = inject(orchestratorRegistryKey, null)
      return () => h('div', 'child')
    },
  })

  return {captured, ChildComponent}
}

describe('BApp', () => {
  enableAutoUnmount(afterEach)

  describe('rendering', () => {
    it('renders slot content', () => {
      const wrapper = mount(BApp, {
        slots: {default: '<span>Hello World</span>'},
      })
      expect(wrapper.find('span').exists()).toBe(true)
      expect(wrapper.text()).toContain('Hello World')
    })

    it('renders multiple slot children', () => {
      const wrapper = mount(BApp, {
        slots: {default: '<div>First</div><div>Second</div>'},
      })
      const divs = wrapper.findAll('div')
      const texts = divs.map((d) => d.text())
      expect(texts).toContain('First')
      expect(texts).toContain('Second')
    })

    it('renders empty when no slot content', () => {
      const wrapper = mount(BApp)
      // Should still have orchestrator container but no slot content
      expect(wrapper.findComponent({name: 'BOrchestrator'}).exists()).toBe(true)
    })

    it('binds $attrs to slot scope via inheritAttrs: false', () => {
      const ChildComponent = defineComponent({
        name: 'AttrsChild',
        props: {class: {type: String, default: undefined}},
        setup(props) {
          return () => h('div', {class: props.class}, 'child')
        },
      })
      const wrapper = mount(BApp, {
        attrs: {'data-custom': 'test-value'},
        slots: {
          default: (attrs: Record<string, unknown>) =>
            h(ChildComponent, {'data-received': attrs['data-custom']}),
        },
      })
      expect(wrapper.findComponent(ChildComponent).attributes('data-received')).toBe('test-value')
    })
  })

  describe('BOrchestrator', () => {
    it('includes BOrchestrator by default', () => {
      const wrapper = mount(BApp)
      expect(wrapper.findComponent({name: 'BOrchestrator'}).exists()).toBe(true)
    })

    it('excludes BOrchestrator when noOrchestrator is true', () => {
      const wrapper = mount(BApp, {
        props: {noOrchestrator: true},
      })
      expect(wrapper.findComponent({name: 'BOrchestrator'}).exists()).toBe(false)
    })

    it('passes appendToast prop to BOrchestrator', () => {
      const wrapper = mount(BApp, {
        props: {appendToast: true},
      })
      const orchestrator = wrapper.findComponent({name: 'BOrchestrator'})
      expect(orchestrator.props('appendToast')).toBe(true)
    })

    it('passes appendToast as false by default', () => {
      const wrapper = mount(BApp)
      const orchestrator = wrapper.findComponent({name: 'BOrchestrator'})
      expect(orchestrator.props('appendToast')).toBe(false)
    })

    it('passes teleportTo prop to BOrchestrator', () => {
      const wrapper = mount(BApp, {
        props: {teleportTo: 'body'},
      })
      const orchestrator = wrapper.findComponent({name: 'BOrchestrator'})
      expect(orchestrator.props('teleportTo')).toBe('body')
    })

    it('passes teleportTo as undefined by default', () => {
      const wrapper = mount(BApp)
      const orchestrator = wrapper.findComponent({name: 'BOrchestrator'})
      expect(orchestrator.props('teleportTo')).toBeUndefined()
    })

    it('BOrchestrator contains ConditionalTeleport', () => {
      const wrapper = mount(BApp, {
        props: {teleportTo: 'body'},
      })
      const teleport = wrapper.findComponent({name: 'ConditionalTeleport'})
      expect(teleport.exists()).toBe(true)
      expect(teleport.props('to')).toBe('body')
      expect(teleport.props('disabled')).toBe(false)
    })

    it('ConditionalTeleport is disabled when teleportTo is not set', () => {
      const wrapper = mount(BApp)
      const teleport = wrapper.findComponent({name: 'ConditionalTeleport'})
      expect(teleport.exists()).toBe(true)
      expect(teleport.props('disabled')).toBe(true)
    })
  })

  describe('useProvideDefaults', () => {
    it('provides defaults to child components via defaultsKey', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      mount(BApp, {
        props: {
          defaults: {
            BButton: {variant: 'primary' as const},
          },
        },
        slots: {default: () => h(ChildComponent)},
      })

      const defaults = captured.defaults as Ref<Partial<BvnComponentProps>> | null
      expect(defaults).not.toBeNull()
      expect(defaults!.value).toHaveProperty('BButton')
      expect((defaults!.value as Record<string, Record<string, unknown>>).BButton.variant).toBe(
        'primary'
      )
    })

    it('provides empty defaults when no defaults prop is given', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      mount(BApp, {
        slots: {default: () => h(ChildComponent)},
      })

      const defaults = captured.defaults as Ref<Partial<BvnComponentProps>> | null
      expect(defaults).not.toBeNull()
      expect(defaults!.value).toEqual({})
    })

    it('provides multiple component defaults', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      mount(BApp, {
        props: {
          defaults: {
            BButton: {variant: 'danger' as const},
            BAlert: {variant: 'warning' as const},
          },
        },
        slots: {default: () => h(ChildComponent)},
      })

      const defaults = captured.defaults as Ref<Partial<BvnComponentProps>> | null
      expect(defaults).not.toBeNull()
      const val = defaults!.value as Record<string, Record<string, unknown>>
      expect(val.BButton.variant).toBe('danger')
      expect(val.BAlert.variant).toBe('warning')
    })

    it('merges with parent defaults when mergeDefaults is true and nested', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      // Outer BApp provides base defaults
      mount(BApp, {
        props: {
          defaults: {
            BButton: {variant: 'primary' as const, size: 'lg' as const},
          },
        },
        slots: {
          default: () =>
            h(
              BApp,
              {
                defaults: {
                  BButton: {variant: 'danger' as const},
                },
                mergeDefaults: true,
                noOrchestrator: true,
              },
              {default: () => h(ChildComponent)}
            ),
        },
      })

      const defaults = captured.defaults as Ref<Partial<BvnComponentProps>> | null
      expect(defaults).not.toBeNull()
      const val = defaults!.value as Record<string, Record<string, unknown>>
      // Inner variant overrides parent
      expect(val.BButton.variant).toBe('danger')
      // Parent size is preserved via merge
      expect(val.BButton.size).toBe('lg')
    })

    it('replaces parent defaults when mergeDefaults is false and nested', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      mount(BApp, {
        props: {
          defaults: {
            BButton: {variant: 'primary' as const, size: 'lg' as const},
          },
        },
        slots: {
          default: () =>
            h(
              BApp,
              {
                defaults: {
                  BButton: {variant: 'danger' as const},
                },
                mergeDefaults: false,
                noOrchestrator: true,
              },
              {default: () => h(ChildComponent)}
            ),
        },
      })

      const defaults = captured.defaults as Ref<Partial<BvnComponentProps>> | null
      expect(defaults).not.toBeNull()
      const val = defaults!.value as Record<string, Record<string, unknown>>
      expect(val.BButton.variant).toBe('danger')
      // size should not be present since we replaced entirely
      expect(val.BButton.size).toBeUndefined()
    })

    it('supports custom merge function', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      const customMerge = (
        oldDefaults: Partial<BvnComponentProps>,
        newDefaults: Partial<BvnComponentProps>
      ) => ({...oldDefaults, ...newDefaults, customMerged: true}) as Partial<BvnComponentProps>

      mount(BApp, {
        props: {
          defaults: {BButton: {variant: 'primary' as const}},
        },
        slots: {
          default: () =>
            h(
              BApp,
              {
                defaults: {BAlert: {variant: 'info' as const}},
                mergeDefaults: customMerge,
                noOrchestrator: true,
              },
              {default: () => h(ChildComponent)}
            ),
        },
      })

      const defaults = captured.defaults as Ref<Partial<BvnComponentProps>> | null
      expect(defaults).not.toBeNull()
      const val = defaults!.value as Record<string, unknown>
      expect(val.customMerged).toBe(true)
    })
  })

  describe('useRegistry', () => {
    it('provides showHideRegistryKey to children', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      mount(BApp, {
        slots: {default: () => h(ChildComponent)},
      })

      const showHide = captured.showHide as {
        register: (...args: unknown[]) => unknown
        values: Ref
      } | null
      expect(showHide).not.toBeNull()
      expect(showHide).toHaveProperty('register')
      expect(showHide).toHaveProperty('values')
      expect(typeof showHide!.register).toBe('function')
    })

    it('provides modalManagerKey to children', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      mount(BApp, {
        slots: {default: () => h(ChildComponent)},
      })

      const modalManager = captured.modalManager as Record<string, unknown> | null
      expect(modalManager).not.toBeNull()
      expect(modalManager).toHaveProperty('stack')
      expect(modalManager).toHaveProperty('countStack')
      expect(modalManager).toHaveProperty('lastStack')
      expect(modalManager).toHaveProperty('pushStack')
      expect(modalManager).toHaveProperty('removeStack')
      expect(modalManager).toHaveProperty('registry')
      expect(modalManager).toHaveProperty('pushRegistry')
      expect(modalManager).toHaveProperty('removeRegistry')
    })

    it('provides breadcrumbRegistryKey to children', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      mount(BApp, {
        slots: {default: () => h(ChildComponent)},
      })

      const breadcrumb = captured.breadcrumb as {
        items: Ref
        reset: (...args: unknown[]) => void
      } | null
      expect(breadcrumb).not.toBeNull()
      expect(breadcrumb).toHaveProperty('items')
      expect(breadcrumb).toHaveProperty('reset')
      expect(typeof breadcrumb!.reset).toBe('function')
    })

    it('provides rtlRegistryKey to children', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      mount(BApp, {
        slots: {default: () => h(ChildComponent)},
      })

      const rtl = captured.rtl as {isRtl: Ref<boolean>; locale: Ref<string | undefined>} | null
      expect(rtl).not.toBeNull()
      expect(rtl).toHaveProperty('isRtl')
      expect(rtl).toHaveProperty('locale')
    })

    it('sets rtl to false by default', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      mount(BApp, {
        slots: {default: () => h(ChildComponent)},
      })

      const rtl = captured.rtl as {isRtl: Ref<boolean>; locale: Ref<string | undefined>}
      expect(rtl.isRtl.value).toBe(false)
      expect(rtl.locale.value).toBeUndefined()
    })

    it('configures rtl with boolean true', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      mount(BApp, {
        props: {rtl: true},
        slots: {default: () => h(ChildComponent)},
      })

      const rtl = captured.rtl as {isRtl: Ref<boolean>; locale: Ref<string | undefined>}
      // boolean true still defaults to rtlInitial: false (since useRegistry doesn't enable rtl for boolean true)
      expect(rtl.isRtl.value).toBe(false)
    })

    it('configures rtl with object containing rtlInitial', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      mount(BApp, {
        props: {rtl: {rtlInitial: true}},
        slots: {default: () => h(ChildComponent)},
      })

      const rtl = captured.rtl as {isRtl: Ref<boolean>; locale: Ref<string | undefined>}
      expect(rtl.isRtl.value).toBe(true)
    })

    it('configures rtl with object containing localeInitial', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      mount(BApp, {
        props: {rtl: {rtlInitial: true, localeInitial: 'ar'}},
        slots: {default: () => h(ChildComponent)},
      })

      const rtl = captured.rtl as {isRtl: Ref<boolean>; locale: Ref<string | undefined>}
      expect(rtl.isRtl.value).toBe(true)
      expect(rtl.locale.value).toBe('ar')
    })

    it('modal manager starts with empty stack', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      mount(BApp, {
        slots: {default: () => h(ChildComponent)},
      })

      const modalManager = captured.modalManager as {
        countStack: {value: number}
        stack: {value: readonly unknown[]}
        lastStack: {value: unknown}
      }
      expect(modalManager.countStack.value).toBe(0)
      expect(modalManager.stack.value).toHaveLength(0)
      expect(modalManager.lastStack.value).toBeUndefined()
    })

    it('does not re-provide registries when nested BApp already has them', () => {
      const outerCaptured = createInjectionCapture()
      const innerCaptured = createInjectionCapture()

      mount(BApp, {
        slots: {
          default: () => [
            h(outerCaptured.ChildComponent),
            h(BApp, {noOrchestrator: true}, {default: () => h(innerCaptured.ChildComponent)}),
          ],
        },
      })

      // Both inner and outer should have the same registry instances
      expect(outerCaptured.captured.showHide).toBe(innerCaptured.captured.showHide)
      expect(outerCaptured.captured.modalManager).toBe(innerCaptured.captured.modalManager)
      expect(outerCaptured.captured.breadcrumb).toBe(innerCaptured.captured.breadcrumb)
      expect(outerCaptured.captured.rtl).toBe(innerCaptured.captured.rtl)
    })
  })

  describe('useOrchestratorRegistry', () => {
    it('provides orchestratorRegistryKey to children', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      mount(BApp, {
        slots: {default: () => h(ChildComponent)},
      })

      const orchestrator = captured.orchestrator as Record<string, unknown> | null
      expect(orchestrator).not.toBeNull()
      expect(orchestrator).toHaveProperty('store')
      expect(orchestrator).toHaveProperty('_isOrchestratorInstalled')
      expect(orchestrator).toHaveProperty('_isToastAppend')
    })

    it('orchestrator store starts empty', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      mount(BApp, {
        slots: {default: () => h(ChildComponent)},
      })

      const orchestrator = captured.orchestrator as {store: Ref<unknown[]>}
      expect(orchestrator.store.value).toHaveLength(0)
    })

    it('does not provide orchestrator when noOrchestrator is true', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      mount(BApp, {
        props: {noOrchestrator: true},
        slots: {default: () => h(ChildComponent)},
      })

      // Orchestrator registry is NOT provided when noOrchestrator is true
      expect(captured.orchestrator).toBeNull()
    })

    it('marks orchestrator as installed when BOrchestrator mounts', () => {
      const {captured, ChildComponent} = createInjectionCapture()

      mount(BApp, {
        slots: {default: () => h(ChildComponent)},
      })

      const orchestrator = captured.orchestrator as {_isOrchestratorInstalled: Ref<boolean>}
      expect(orchestrator._isOrchestratorInstalled.value).toBe(true)
    })
  })

  describe('default prop values', () => {
    it('appendToast defaults to false', () => {
      const wrapper = mount(BApp)
      const orchestrator = wrapper.findComponent({name: 'BOrchestrator'})
      expect(orchestrator.props('appendToast')).toBe(false)
    })

    it('noOrchestrator defaults to false', () => {
      const wrapper = mount(BApp)
      expect(wrapper.findComponent({name: 'BOrchestrator'}).exists()).toBe(true)
    })

    it('teleportTo defaults to undefined', () => {
      const wrapper = mount(BApp)
      const orchestrator = wrapper.findComponent({name: 'BOrchestrator'})
      expect(orchestrator.props('teleportTo')).toBeUndefined()
    })
  })
})
