import {enableAutoUnmount, flushPromises, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {nextTick} from 'vue'
import {vBTooltip} from './index'

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

  it('removes its container span when the element is removed', async () => {
    const wrapper = mount(
      {
        directives: {bTooltip: vBTooltip},
        data: () => ({shown: true}),
        template:
          '<div><button v-if="shown" v-b-tooltip="\'Tooltip content\'">Button</button></div>',
      },
      {
        attachTo: document.body,
      }
    )

    await flushPromises()
    await nextTick()
    expect(wrapper.element.querySelectorAll(':scope > span').length).toBe(1)

    for (let i = 0; i < 5; i++) {
      await wrapper.setData({shown: !wrapper.vm.shown})
      await flushPromises()
      await nextTick()
    }

    // hidden after an odd number of toggles: no span may be left behind
    expect(wrapper.find('button').exists()).toBe(false)
    expect(wrapper.element.querySelectorAll(':scope > span').length).toBe(0)

    wrapper.unmount()
  })

  it('removes its container span when the directive value is cleared', async () => {
    const wrapper = mount(
      {
        directives: {bTooltip: vBTooltip},
        data: () => ({text: 'Tooltip content' as string | undefined}),
        template: '<div><button v-b-tooltip="text">Button</button></div>',
      },
      {
        attachTo: document.body,
      }
    )

    await flushPromises()
    await nextTick()
    expect(wrapper.element.querySelectorAll(':scope > span').length).toBe(1)

    await wrapper.setData({text: undefined})
    await flushPromises()
    await nextTick()

    expect(wrapper.element.querySelectorAll(':scope > span').length).toBe(0)

    wrapper.unmount()
  })
})
