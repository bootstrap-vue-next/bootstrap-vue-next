import {enableAutoUnmount, flushPromises, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {nextTick} from 'vue'
import {vBPopover} from './index'

describe('v-b-popover directive', () => {
  enableAutoUnmount(afterEach)

  it('removes title attribute and uses it as popover title when directive has string value', async () => {
    const wrapper = mount(
      {
        directives: {bPopover: vBPopover},
        template: '<button v-b-popover="\'Popover content\'" title="Popover Title">Button</button>',
      },
      {
        attachTo: document.body,
      }
    )

    await flushPromises()
    await nextTick()

    const button = wrapper.find('button')
    expect(button.attributes('title')).toBeUndefined()
    expect(button.attributes('data-original-title')).toBe('Popover Title')

    // Trigger the popover to show
    await button.trigger('pointerenter')
    await flushPromises()
    await nextTick()

    // Verify the popover uses the title attribute as its title
    const popover = document.querySelector('.popover')
    expect(popover).toBeTruthy()
    const popoverTitle = popover?.querySelector('.popover-header')
    expect(popoverTitle?.textContent).toBe('Popover Title')

    wrapper.unmount()
  })

  it('removes title attribute when directive is used with object value', async () => {
    const wrapper = mount(
      {
        directives: {bPopover: vBPopover},
        template:
          '<button v-b-popover="{title: \'Popover Title\', body: \'Popover content\'}" title="Native tooltip">Button</button>',
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

  it('uses title attribute as popover body when no directive value is provided', async () => {
    const wrapper = mount(
      {
        directives: {bPopover: vBPopover},
        template: '<button v-b-popover title="Native tooltip">Button</button>',
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

  it('removes title attribute when using modifiers', async () => {
    const wrapper = mount(
      {
        directives: {bPopover: vBPopover},
        template:
          '<button v-b-popover.hover.top="\'Popover content\'" title="Native tooltip">Button</button>',
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
        directives: {bPopover: vBPopover},
        template:
          '<button v-b-popover="\'Popover content\'" data-original-title="Original">Button</button>',
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
        directives: {bPopover: vBPopover},
        template: '<button v-b-popover="\'Popover content\'">Button</button>',
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

  describe('trigger modifiers', () => {
    it('respects .hover modifier for hover-only trigger', async () => {
      const wrapper = mount(
        {
          directives: {bPopover: vBPopover},
          template: '<button v-b-popover.hover="\'Hover content\'">Hover Me</button>',
        },
        {
          attachTo: document.body,
        }
      )

      await flushPromises()
      await nextTick()

      const button = wrapper.find('button')

      // Should show on hover
      await button.trigger('pointerenter')
      await flushPromises()
      await nextTick()

      let popover = document.querySelector('.popover')
      expect(popover).toBeTruthy()

      // Should hide when hover ends
      await button.trigger('pointerleave')
      await flushPromises()
      await nextTick()

      popover = document.querySelector('.popover')
      expect(popover?.classList.contains('show')).toBe(false)

      wrapper.unmount()
    })

    it('respects .focus modifier for focus-only trigger', async () => {
      const wrapper = mount(
        {
          directives: {bPopover: vBPopover},
          template: '<button v-b-popover.focus="\'Focus content\'">Focus Me</button>',
        },
        {
          attachTo: document.body,
        }
      )

      await flushPromises()
      await nextTick()

      const button = wrapper.find('button')

      // Should show on focus
      await button.trigger('focus')
      await flushPromises()
      await nextTick()

      let popover = document.querySelector('.popover')
      expect(popover).toBeTruthy()

      // Should hide when blur
      await button.trigger('blur')
      await flushPromises()
      await nextTick()

      popover = document.querySelector('.popover')
      expect(popover?.classList.contains('show')).toBe(false)

      wrapper.unmount()
    })

    it('respects .manual modifier with .show for manual control', async () => {
      const wrapper = mount(
        {
          directives: {bPopover: vBPopover},
          template: '<button v-b-popover.manual.show="\'Manual content\'">Manual</button>',
        },
        {
          attachTo: document.body,
        }
      )

      await flushPromises()
      await nextTick()

      // With .manual.show, popover should be shown immediately
      const popover = document.querySelector('.popover')
      expect(popover).toBeTruthy()

      wrapper.unmount()
    })

    it('respects .click modifier for click trigger', async () => {
      const wrapper = mount(
        {
          directives: {bPopover: vBPopover},
          template: '<button v-b-popover.click="\'Click content\'">Click Me</button>',
        },
        {
          attachTo: document.body,
        }
      )

      await flushPromises()
      await nextTick()

      const button = wrapper.find('button')

      // Should show on click
      await button.trigger('click')
      await flushPromises()
      await nextTick()

      let popover = document.querySelector('.popover')
      expect(popover).toBeTruthy()

      // Should toggle on second click
      await button.trigger('click')
      await flushPromises()
      await nextTick()

      popover = document.querySelector('.popover')
      expect(popover?.classList.contains('show')).toBe(false)

      wrapper.unmount()
    })

    it('combines multiple trigger modifiers correctly', async () => {
      const wrapper = mount(
        {
          directives: {bPopover: vBPopover},
          template:
            '<button v-b-popover.hover.focus="\'Multi-trigger content\'">Hover or Focus</button>',
        },
        {
          attachTo: document.body,
        }
      )

      await flushPromises()
      await nextTick()

      const button = wrapper.find('button')

      // Should show on hover
      await button.trigger('pointerenter')
      await flushPromises()
      await nextTick()

      let popover = document.querySelector('.popover')
      expect(popover).toBeTruthy()

      // Should hide when hover ends
      await button.trigger('pointerleave')
      await flushPromises()
      await nextTick()

      popover = document.querySelector('.popover')
      expect(popover?.classList.contains('show')).toBe(false)

      // Should also show on focus
      await button.trigger('focus')
      await flushPromises()
      await nextTick()

      popover = document.querySelector('.popover')
      expect(popover).toBeTruthy()

      wrapper.unmount()
    })
  })
})
