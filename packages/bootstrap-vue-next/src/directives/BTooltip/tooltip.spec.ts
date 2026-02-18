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
})
