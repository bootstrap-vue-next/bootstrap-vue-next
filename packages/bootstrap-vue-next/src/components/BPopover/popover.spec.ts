import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BPopover from './BPopover.vue'

describe('popover', () => {
  enableAutoUnmount(afterEach)

  it('has div.popover', () => {
    const wrapper = mount(BPopover, {props: {modelValue: true}})
    const $div = wrapper.find('div.popover')
    expect($div.exists()).toBe(true)
  })

  it('has static class popover', () => {
    const wrapper = mount(BPopover, {props: {modelValue: true}})
    const $div = wrapper.get('div.popover')

    expect($div.classes()).toContain('popover')
  })

  it('has static class b-popover', () => {
    const wrapper = mount(BPopover, {
      props: {modelValue: true},
    })
    const $div = wrapper.get('div.popover')

    expect($div.classes()).toContain('b-popover')
  })

  it('has role tooltip', () => {
    const wrapper = mount(BPopover, {props: {modelValue: true}})
    const $div = wrapper.get('div.popover')
    expect($div.attributes('role')).toBe('tooltip')
  })

  it('has tabindex -1', () => {
    const wrapper = mount(BPopover, {props: {modelValue: true}})
    const $div = wrapper.get('div.popover')

    expect($div.attributes('tabindex')).toBe('-1')
  })

  it('is tag div', () => {
    const wrapper = mount(BPopover)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has prop id', async () => {
    const wrapper = mount(BPopover, {props: {id: 'abc', modelValue: true}})
    const $div = wrapper.get('div.popover')

    expect($div.attributes('id')).toBe('abc')
    await wrapper.setProps({id: undefined})
    expect($div.attributes('id')).toBeDefined()
  })

  it('first child contains slot title', () => {
    const wrapper = mount(BPopover, {
      props: {modelValue: true},
      slots: {title: 'foobar'},
    })
    const $div = wrapper.get('div.popover-header')
    expect($div.text()).toBe('foobar')
  })

  it('first child contains prop title', () => {
    const wrapper = mount(BPopover, {
      props: {title: 'foobar', modelValue: true},
    })
    const $div = wrapper.get('div.popover-header')
    expect($div.text()).toBe('foobar')
  })

  it('first child contains slot title if both slot and prop exists', () => {
    const wrapper = mount(BPopover, {
      props: {title: 'propbar', modelValue: true},
      slots: {title: 'slotbar'},
    })
    const $div = wrapper.get('div.popover-header')
    expect($div.text()).toBe('slotbar')
  })

  it('contains slot default', () => {
    const wrapper = mount(BPopover, {
      props: {modelValue: true},
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toContain('foobar')
  })

  it('second child contains prop content', () => {
    const wrapper = mount(BPopover, {
      props: {body: 'foobar', modelValue: true},
    })
    const $div = wrapper.get('div.popover-body')
    expect($div.text()).toBe('foobar')
  })

  it('contains slot default if both slot and prop exists', () => {
    const wrapper = mount(BPopover, {
      props: {body: 'propbar', modelValue: true},
      slots: {default: '<div class="trigger">slotbar</div>'},
    })
    const $div = wrapper.get('div.trigger')
    expect($div.text()).toBe('slotbar')
  })

  // Test new trigger props
  it('defaults to hover and focus triggers', async () => {
    const wrapper = mount(BPopover, {
      props: {body: 'test'},
      slots: {target: '<button>Test</button>'},
      attachTo: document.body,
    })

    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)

    // Test hover trigger
    await button.trigger('pointerenter')
    expect(wrapper.emitted('show')).toBeTruthy()

    // Test focus trigger
    await button.trigger('focus')
    expect((wrapper.emitted('show')?.length || 0) >= 2).toBeTruthy()

    wrapper.unmount()
  })

  it('respects click prop for backward compatibility', async () => {
    const wrapper = mount(BPopover, {
      props: {click: true, body: 'test'},
      slots: {target: '<button>Test</button>'},
      attachTo: document.body,
    })

    const button = wrapper.find('button')

    // Click should trigger show
    await button.trigger('click')
    expect(wrapper.emitted('show')).toBeTruthy()

    // Hover should not trigger (since click=true overrides defaults)
    const showEvents = wrapper.emitted('show')?.length || 0
    await button.trigger('pointerenter')
    expect((wrapper.emitted('show')?.length || 0) - showEvents).toBe(0)

    wrapper.unmount()
  })

  it('respects hover=false to disable hover trigger', async () => {
    const wrapper = mount(BPopover, {
      props: {hover: false, focus: true, body: 'test'},
      slots: {target: '<button>Test</button>'},
      attachTo: document.body,
    })

    const button = wrapper.find('button')

    // Hover should not trigger
    await button.trigger('pointerenter')
    expect(wrapper.emitted('show')).toBeFalsy()

    // Focus should trigger
    await button.trigger('focus')
    expect(wrapper.emitted('show')).toBeTruthy()

    wrapper.unmount()
  })

  it('respects focus=false to disable focus trigger', async () => {
    const wrapper = mount(BPopover, {
      props: {focus: false, hover: true, body: 'test'},
      slots: {target: '<button>Test</button>'},
      attachTo: document.body,
    })

    const button = wrapper.find('button')

    // Focus should not trigger
    await button.trigger('focus')
    expect(wrapper.emitted('show')).toBeFalsy()

    // Hover should trigger
    await button.trigger('pointerenter')
    expect(wrapper.emitted('show')).toBeTruthy()

    wrapper.unmount()
  })

  it('allows combining click with hover/focus', async () => {
    const wrapper = mount(BPopover, {
      props: {click: true, hover: true, focus: true, body: 'test'},
      slots: {target: '<button>Test</button>'},
      attachTo: document.body,
    })

    const button = wrapper.find('button')

    // All triggers should work
    await button.trigger('click')
    expect(wrapper.emitted('show')).toBeTruthy()

    await button.trigger('pointerenter')
    expect((wrapper.emitted('show')?.length || 0) >= 2).toBeTruthy()

    await button.trigger('focus')
    expect((wrapper.emitted('show')?.length || 0) >= 3).toBeTruthy()

    wrapper.unmount()
  })

  it('respects manual prop to disable all automatic triggers', async () => {
    const wrapper = mount(BPopover, {
      props: {manual: true, body: 'test'},
      slots: {target: '<button>Test</button>'},
      attachTo: document.body,
    })

    const button = wrapper.find('button')

    // No triggers should work
    await button.trigger('click')
    await button.trigger('pointerenter')
    await button.trigger('focus')

    expect(wrapper.emitted('show')).toBeFalsy()

    wrapper.unmount()
  })

  it('content div has class b-floating-size', () => {
    const wrapper = mount(BPopover, {
      props: {modelValue: true},
    })
    const $div = wrapper.find('.b-floating-size')
    expect($div.exists()).toBe(true)
    expect($div.classes()).toContain('overflow-auto')
  })

  describe('tooltip mode', () => {
    it('has tooltip class instead of popover when tooltip prop is true', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, tooltip: true},
      })
      const $div = wrapper.find('div.tooltip')
      expect($div.exists()).toBe(true)
      expect($div.classes()).not.toContain('popover')
    })

    it('has b-tooltip class instead of b-popover when tooltip prop is true', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, tooltip: true},
      })
      const $div = wrapper.get('div.tooltip')
      expect($div.classes()).toContain('b-tooltip')
      expect($div.classes()).not.toContain('b-popover')
    })

    it('arrow has tooltip-arrow class when tooltip prop is true', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, tooltip: true},
      })
      const $arrow = wrapper.find('.tooltip-arrow')
      expect($arrow.exists()).toBe(true)
      expect(wrapper.find('.popover-arrow').exists()).toBe(false)
    })

    it('arrow has popover-arrow class by default', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true},
      })
      const $arrow = wrapper.find('.popover-arrow')
      expect($arrow.exists()).toBe(true)
      expect(wrapper.find('.tooltip-arrow').exists()).toBe(false)
    })

    it('title uses tooltip-inner class when tooltip prop is true', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, tooltip: true, title: 'test'},
      })
      const $header = wrapper.find('.tooltip-inner')
      expect($header.exists()).toBe(true)
      expect(wrapper.find('.popover-header').exists()).toBe(false)
    })

    it('body uses tooltip-inner class when tooltip prop is true', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, tooltip: true, body: 'test body'},
      })
      const $body = wrapper.find('.tooltip-inner')
      expect($body.exists()).toBe(true)
      expect(wrapper.find('.popover-body').exists()).toBe(false)
    })

    it('only renders body when no title in tooltip mode', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, tooltip: true, body: 'body content'},
      })
      const $inner = wrapper.findAll('.tooltip-inner')
      expect($inner.length).toBe(1)
      expect($inner[0].text()).toBe('body content')
    })

    it('only renders title when title is provided in tooltip mode', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, tooltip: true, title: 'title content'},
      })
      // In tooltip mode with title, body is not rendered
      const $inner = wrapper.findAll('.tooltip-inner')
      expect($inner.length).toBe(1)
      expect($inner[0].text()).toBe('title content')
    })
  })

  describe('classes and styling', () => {
    it('does not have fade class when noFade is true', () => {
      const wrapper = mount(BPopover, {props: {modelValue: true, noFade: true}})
      const $div = wrapper.get('div.popover')
      expect($div.classes()).not.toContain('fade')
    })

    it('does not have fade class on initial mount with modelValue true', () => {
      // When modelValue is true on mount and initialAnimation is false (default),
      // animation is skipped for the initial render
      const wrapper = mount(BPopover, {props: {modelValue: true}})
      const $div = wrapper.get('div.popover')
      expect($div.classes()).not.toContain('fade')
    })

    it('has fade class when initialAnimation is true', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, initialAnimation: true},
      })
      const $div = wrapper.get('div.popover')
      expect($div.classes()).toContain('fade')
    })

    it('applies bodyClass to popover-body div', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, body: 'test', bodyClass: 'custom-body'},
      })
      const $body = wrapper.get('div.popover-body')
      expect($body.classes()).toContain('custom-body')
    })

    it('applies titleClass to popover-header div', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, title: 'test', titleClass: 'custom-title'},
      })
      const $header = wrapper.get('div.popover-header')
      expect($header.classes()).toContain('custom-title')
    })

    it('applies bodyClass array to popover-body div', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, body: 'test', bodyClass: ['class-a', 'class-b']},
      })
      const $body = wrapper.get('div.popover-body')
      expect($body.classes()).toContain('class-a')
      expect($body.classes()).toContain('class-b')
    })

    it('applies titleClass array to popover-header div', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, title: 'test', titleClass: ['class-a', 'class-b']},
      })
      const $header = wrapper.get('div.popover-header')
      expect($header.classes()).toContain('class-a')
      expect($header.classes()).toContain('class-b')
    })
  })

  describe('arrow element', () => {
    it('has data-popper-arrow attribute', () => {
      const wrapper = mount(BPopover, {props: {modelValue: true}})
      const $arrow = wrapper.find('[data-popper-arrow]')
      expect($arrow.exists()).toBe(true)
    })
  })

  describe('placeholder', () => {
    it('renders a hidden placeholder span', () => {
      const wrapper = mount(BPopover, {props: {modelValue: true, id: 'test-id'}})
      const $placeholder = wrapper.find('span[style="display: none;"]')
      expect($placeholder.exists()).toBe(true)
    })

    it('placeholder id is computedId + _placeholder', () => {
      const wrapper = mount(BPopover, {props: {modelValue: true, id: 'test-id'}})
      const $placeholder = wrapper.find('span[style="display: none;"]')
      expect($placeholder.attributes('id')).toBe('test-id_placeholder')
    })
  })

  describe('target slot', () => {
    it('renders target slot content', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true},
        slots: {target: '<button class="target-btn">Click me</button>'},
      })
      const $btn = wrapper.find('.target-btn')
      expect($btn.exists()).toBe(true)
      expect($btn.text()).toBe('Click me')
    })

    it('target slot receives scoped props', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, id: 'test-popover'},
        slots: {
          target: `<template #target="scope"><span class="target-scope">{{ scope.id }}</span></template>`,
        },
      })
      const $scope = wrapper.find('.target-scope')
      expect($scope.exists()).toBe(true)
      expect($scope.text()).toBe('test-popover')
    })
  })

  describe('content rendering', () => {
    it('popover-header has position-sticky and top-0 classes', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, title: 'test'},
      })
      const $header = wrapper.get('div.popover-header')
      expect($header.classes()).toContain('position-sticky')
      expect($header.classes()).toContain('top-0')
    })

    it('does not render popover-header when no title prop or slot', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, body: 'just body'},
      })
      const $header = wrapper.find('.popover-header')
      expect($header.exists()).toBe(false)
    })

    it('renders both popover-header and popover-body when both title and body are set', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, title: 'my title', body: 'my body'},
      })
      expect(wrapper.find('.popover-header').exists()).toBe(true)
      expect(wrapper.find('.popover-body').exists()).toBe(true)
      expect(wrapper.get('.popover-header').text()).toBe('my title')
      expect(wrapper.get('.popover-body').text()).toBe('my body')
    })

    it('renders title slot with HTML content', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true},
        slots: {title: '<strong>Bold Title</strong>'},
      })
      const $header = wrapper.get('.popover-header')
      expect($header.find('strong').exists()).toBe(true)
      expect($header.text()).toBe('Bold Title')
    })

    it('renders default slot with HTML content', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true},
        slots: {default: '<em>Italic body</em>'},
      })
      expect(wrapper.find('em').exists()).toBe(true)
      expect(wrapper.find('em').text()).toBe('Italic body')
    })

    it('title slot provides scoped data', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, id: 'scoped-test'},
        slots: {
          title: `<template #title="scope"><span class="scoped">{{ scope.id }}</span></template>`,
        },
      })
      const $scoped = wrapper.find('.scoped')
      expect($scoped.exists()).toBe(true)
      expect($scoped.text()).toBe('scoped-test')
    })

    it('default slot provides scoped data', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, id: 'scoped-body'},
        slots: {
          default: `<template #default="scope"><span class="scoped">{{ scope.id }}</span></template>`,
        },
      })
      const $scoped = wrapper.find('.scoped')
      expect($scoped.exists()).toBe(true)
      expect($scoped.text()).toBe('scoped-body')
    })
  })

  describe('noSize prop', () => {
    it('b-floating-size class is always present on content div regardless of noSize', () => {
      const wrapper = mount(BPopover, {
        props: {modelValue: true, noSize: true},
      })
      // b-floating-size is a static class on the content div;
      // noSize controls whether the sizeMiddleware is included, not this class
      const $div = wrapper.find('.b-floating-size')
      expect($div.exists()).toBe(true)
    })
  })

  describe('expose', () => {
    it('exposes hide method', () => {
      const wrapper = mount(BPopover, {props: {modelValue: true}})
      expect(typeof wrapper.vm.hide).toBe('function')
    })

    it('exposes show method', () => {
      const wrapper = mount(BPopover, {props: {modelValue: true}})
      expect(typeof wrapper.vm.show).toBe('function')
    })

    it('exposes toggle method', () => {
      const wrapper = mount(BPopover, {props: {modelValue: true}})
      expect(typeof wrapper.vm.toggle).toBe('function')
    })
  })

  describe('id generation', () => {
    it('generates an id when id prop is not provided', () => {
      const wrapper = mount(BPopover, {props: {modelValue: true}})
      const $div = wrapper.get('div.popover')
      expect($div.attributes('id')).toBeDefined()
      expect($div.attributes('id')).not.toBe('')
    })

    it('uses provided id prop', () => {
      const wrapper = mount(BPopover, {props: {modelValue: true, id: 'custom-id'}})
      const $div = wrapper.get('div.popover')
      expect($div.attributes('id')).toBe('custom-id')
    })

    it('id is reactive', async () => {
      const wrapper = mount(BPopover, {props: {modelValue: true, id: 'first-id'}})
      const $div = wrapper.get('div.popover')
      expect($div.attributes('id')).toBe('first-id')
      await wrapper.setProps({id: 'second-id'})
      expect($div.attributes('id')).toBe('second-id')
    })
  })
})
