import {enableAutoUnmount, flushPromises, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {defineComponent, h, inject, nextTick} from 'vue'
import {vBTooltip} from './index'
import {createBootstrap} from '../../plugins'
import {orchestratorRegistryKey, showHideRegistryKey} from '../../utils/keys'
import BApp from '../../components/BApp/BApp.vue'

describe('v-b-tooltip directive', () => {
  enableAutoUnmount(afterEach)

  it('removes title attribute when directive is used with string value', async () => {
    const wrapper = mount(
      {
        directives: {bTooltip: vBTooltip},
        template:
          '<button v-b-tooltip="\'Tooltip content\'" title="Native tooltip">Button</button>',
      },
      {
        attachTo: document.body,
      }
    )

    await flushPromises()
    await nextTick()

    const button = wrapper.find('button')
    expect(button.attributes('title')).toBeUndefined()
    expect(button.attributes('data-original-title')).toBe('Native tooltip')

    wrapper.unmount()
  })

  it('removes title attribute when directive is used with object value', async () => {
    const wrapper = mount(
      {
        directives: {bTooltip: vBTooltip},
        template:
          '<button v-b-tooltip="{title: \'Tooltip Title\', body: \'Tooltip content\'}" title="Native tooltip">Button</button>',
      },
      {
        attachTo: document.body,
      }
    )

    await flushPromises()
    await nextTick()

    const button = wrapper.find('button')
    expect(button.attributes('title')).toBeUndefined()
    expect(button.attributes('data-original-title')).toBe('Native tooltip')

    wrapper.unmount()
  })

  it('removes title attribute and uses it as tooltip title when directive has string value', async () => {
    const wrapper = mount(
      {
        directives: {bTooltip: vBTooltip},
        template: '<button v-b-tooltip="\'Tooltip content\'" title="Tooltip Title">Button</button>',
      },
      {
        attachTo: document.body,
      }
    )

    await flushPromises()
    await nextTick()

    const button = wrapper.find('button')
    expect(button.attributes('title')).toBeUndefined()
    expect(button.attributes('data-original-title')).toBe('Tooltip Title')

    // Trigger the tooltip to show
    await button.trigger('pointerenter')
    await flushPromises()
    await nextTick()

    // Verify the tooltip uses the title attribute as its title
    const tooltip = document.querySelector('.tooltip')
    expect(tooltip).toBeTruthy()
    const tooltipTitle = tooltip?.querySelector('.tooltip-inner')
    expect(tooltipTitle?.textContent).toBe('Tooltip Title')

    wrapper.unmount()
  })

  it('removes title attribute when using modifiers', async () => {
    const wrapper = mount(
      {
        directives: {bTooltip: vBTooltip},
        template:
          '<button v-b-tooltip.hover.top="\'Tooltip content\'" title="Native tooltip">Button</button>',
      },
      {
        attachTo: document.body,
      }
    )

    await flushPromises()
    await nextTick()

    const button = wrapper.find('button')
    expect(button.attributes('title')).toBeUndefined()
    expect(button.attributes('data-original-title')).toBe('Native tooltip')

    wrapper.unmount()
  })

  it('preserves data-original-title if it already exists', async () => {
    const wrapper = mount(
      {
        directives: {bTooltip: vBTooltip},
        template:
          '<button v-b-tooltip="\'Tooltip content\'" data-original-title="Original">Button</button>',
      },
      {
        attachTo: document.body,
      }
    )

    await flushPromises()
    await nextTick()

    const button = wrapper.find('button')
    expect(button.attributes('title')).toBeUndefined()
    expect(button.attributes('data-original-title')).toBe('Original')

    wrapper.unmount()
  })

  it('keeps tooltip visible when reactive content updates while shown', async () => {
    const wrapper = mount(
      {
        directives: {bTooltip: vBTooltip},
        template: '<button v-b-tooltip="tooltipText">Button</button>',
        data() {
          return {tooltipText: 'Initial tooltip'}
        },
      },
      {
        attachTo: document.body,
      }
    )

    await flushPromises()
    await nextTick()

    const button = wrapper.find('button')

    // Show the tooltip
    await button.trigger('pointerenter')
    await flushPromises()
    await nextTick()

    // Tooltip component should be in the DOM
    let tooltip = document.querySelector('.tooltip')
    expect(tooltip).toBeTruthy()

    // Capture the element reference to verify it is not replaced
    const originalElement = wrapper.element.nextElementSibling

    // Update the reactive content
    await wrapper.setData({tooltipText: 'Updated tooltip'})
    await flushPromises()
    await nextTick()

    // The tooltip container should be the same element (not destroyed and recreated)
    tooltip = document.querySelector('.tooltip')
    expect(tooltip).toBeTruthy()
    expect(wrapper.element.nextElementSibling).toBe(originalElement)

    wrapper.unmount()
  })

  it('handles elements without title attribute', async () => {
    const wrapper = mount(
      {
        directives: {bTooltip: vBTooltip},
        template: '<button v-b-tooltip="\'Tooltip content\'">Button</button>',
      },
      {
        attachTo: document.body,
      }
    )

    await flushPromises()
    await nextTick()

    const button = wrapper.find('button')
    expect(button.attributes('title')).toBeUndefined()
    expect(button.attributes('data-original-title')).toBeUndefined()

    wrapper.unmount()
  })

  it('registers with showHide registry when app context is available', async () => {
    let capturedRegistry: ReturnType<typeof inject<typeof showHideRegistryKey>> | null = null

    const RegistryCapture = defineComponent({
      setup() {
        capturedRegistry = inject(showHideRegistryKey, null)
        return () => h('span')
      },
    })

    const wrapper = mount(
      {
        directives: {bTooltip: vBTooltip},
        components: {RegistryCapture},
        template: `<div><button v-b-tooltip="'Tooltip content'">Button</button><RegistryCapture /></div>`,
      },
      {
        attachTo: document.body,
        global: {
          plugins: [createBootstrap()],
        },
      }
    )

    await flushPromises()
    await nextTick()

    expect(capturedRegistry).not.toBeNull()
    expect(capturedRegistry!.values.value.size).toBeGreaterThan(0)

    wrapper.unmount()
  })

  it('uses orchestrator store when BOrchestrator is installed (inside BApp)', async () => {
    let capturedStore: ReturnType<typeof inject<typeof orchestratorRegistryKey>> | null = null

    const StoreCapture = defineComponent({
      setup() {
        capturedStore = inject(orchestratorRegistryKey, null)
        return () => h('span')
      },
    })

    const TooltipApp = defineComponent({
      components: {BApp, StoreCapture},
      directives: {bTooltip: vBTooltip},
      template: `<BApp><button v-b-tooltip="'Tooltip content'">Button</button><StoreCapture /></BApp>`,
    })

    const wrapper = mount(TooltipApp, {
      attachTo: document.body,
      global: {
        plugins: [createBootstrap()],
      },
    })

    await flushPromises()
    await nextTick()

    expect(capturedStore).not.toBeNull()
    expect(capturedStore!.store.value.some((e) => e.type === 'tooltip')).toBe(true)

    wrapper.unmount()
  })
})
