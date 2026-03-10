import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BTooltip from './BTooltip.vue'
import BPopover from '../BPopover/BPopover.vue'

describe('tooltip', () => {
  enableAutoUnmount(afterEach)

  it('renders BPopover child component', () => {
    const wrapper = mount(BTooltip, {props: {modelValue: true}})
    expect(wrapper.findComponent(BPopover).exists()).toBe(true)
  })

  it('passes tooltip prop to BPopover', () => {
    const wrapper = mount(BTooltip, {props: {modelValue: true}})
    const popover = wrapper.findComponent(BPopover)
    expect(popover.props('tooltip')).toBe(true)
  })

  it('has tooltip class', () => {
    const wrapper = mount(BTooltip, {props: {modelValue: true}})
    const $div = wrapper.find('div.tooltip')
    expect($div.exists()).toBe(true)
  })

  it('has b-tooltip class', () => {
    const wrapper = mount(BTooltip, {props: {modelValue: true}})
    const $div = wrapper.get('div.tooltip')
    expect($div.classes()).toContain('b-tooltip')
  })

  it('does not have popover class', () => {
    const wrapper = mount(BTooltip, {props: {modelValue: true}})
    const $div = wrapper.get('div.tooltip')
    expect($div.classes()).not.toContain('popover')
    expect($div.classes()).not.toContain('b-popover')
  })

  it('has role tooltip', () => {
    const wrapper = mount(BTooltip, {props: {modelValue: true}})
    const $div = wrapper.get('div.tooltip')
    expect($div.attributes('role')).toBe('tooltip')
  })

  it('has tabindex -1', () => {
    const wrapper = mount(BTooltip, {props: {modelValue: true}})
    const $div = wrapper.get('div.tooltip')
    expect($div.attributes('tabindex')).toBe('-1')
  })

  describe('title rendering', () => {
    it('renders title from title prop', () => {
      const wrapper = mount(BTooltip, {
        props: {modelValue: true, title: 'my tooltip'},
      })
      const $inner = wrapper.find('.tooltip-inner')
      expect($inner.exists()).toBe(true)
      expect($inner.text()).toBe('my tooltip')
    })

    it('renders title from title slot', () => {
      const wrapper = mount(BTooltip, {
        props: {modelValue: true},
        slots: {title: 'slot tooltip'},
      })
      const $inner = wrapper.find('.tooltip-inner')
      expect($inner.exists()).toBe(true)
      expect($inner.text()).toBe('slot tooltip')
    })

    it('title slot takes precedence over title prop', () => {
      const wrapper = mount(BTooltip, {
        props: {modelValue: true, title: 'prop title'},
        slots: {title: 'slot title'},
      })
      const $inner = wrapper.find('.tooltip-inner')
      expect($inner.text()).toBe('slot title')
    })

    it('renders title slot with HTML content', () => {
      const wrapper = mount(BTooltip, {
        props: {modelValue: true},
        slots: {title: '<strong>Bold</strong>'},
      })
      const $inner = wrapper.find('.tooltip-inner')
      expect($inner.find('strong').exists()).toBe(true)
      expect($inner.text()).toBe('Bold')
    })
  })

  describe('default slot', () => {
    it('renders content from default slot', () => {
      const wrapper = mount(BTooltip, {
        props: {modelValue: true},
        slots: {default: 'tooltip body'},
      })
      expect(wrapper.text()).toContain('tooltip body')
    })

    it('renders default slot with HTML content', () => {
      const wrapper = mount(BTooltip, {
        props: {modelValue: true},
        slots: {default: '<em>italic content</em>'},
      })
      expect(wrapper.find('em').exists()).toBe(true)
      expect(wrapper.find('em').text()).toBe('italic content')
    })
  })

  describe('target slot', () => {
    it('renders target slot content', () => {
      const wrapper = mount(BTooltip, {
        props: {modelValue: true},
        slots: {target: '<button class="target-btn">Hover me</button>'},
      })
      const $btn = wrapper.find('.target-btn')
      expect($btn.exists()).toBe(true)
      expect($btn.text()).toBe('Hover me')
    })
  })

  describe('arrow element', () => {
    it('has tooltip-arrow class', () => {
      const wrapper = mount(BTooltip, {props: {modelValue: true}})
      const $arrow = wrapper.find('.tooltip-arrow')
      expect($arrow.exists()).toBe(true)
    })

    it('does not have popover-arrow class', () => {
      const wrapper = mount(BTooltip, {props: {modelValue: true}})
      expect(wrapper.find('.popover-arrow').exists()).toBe(false)
    })

    it('has data-popper-arrow attribute', () => {
      const wrapper = mount(BTooltip, {props: {modelValue: true}})
      const $arrow = wrapper.find('[data-popper-arrow]')
      expect($arrow.exists()).toBe(true)
    })
  })

  describe('interactive and noninteractive props', () => {
    it('defaults to noninteractive=true on BPopover', () => {
      const wrapper = mount(BTooltip, {props: {modelValue: true}})
      const popover = wrapper.findComponent(BPopover)
      expect(popover.props('noninteractive')).toBe(true)
    })

    it('sets noninteractive=false when interactive=true', () => {
      const wrapper = mount(BTooltip, {
        props: {modelValue: true, interactive: true},
      })
      const popover = wrapper.findComponent(BPopover)
      expect(popover.props('noninteractive')).toBe(false)
    })

    it('sets noninteractive=true when interactive=false', () => {
      const wrapper = mount(BTooltip, {
        props: {modelValue: true, interactive: false},
      })
      const popover = wrapper.findComponent(BPopover)
      expect(popover.props('noninteractive')).toBe(true)
    })

    it('noninteractive prop takes precedence over interactive', () => {
      const wrapper = mount(BTooltip, {
        props: {modelValue: true, interactive: true, noninteractive: true},
      })
      const popover = wrapper.findComponent(BPopover)
      expect(popover.props('noninteractive')).toBe(true)
    })
  })

  describe('id', () => {
    it('generates an id when id prop is not provided', () => {
      const wrapper = mount(BTooltip, {props: {modelValue: true}})
      const $div = wrapper.get('div.tooltip')
      expect($div.attributes('id')).toBeDefined()
      expect($div.attributes('id')).not.toBe('')
    })

    it('uses provided id prop', () => {
      const wrapper = mount(BTooltip, {props: {modelValue: true, id: 'custom-id'}})
      const $div = wrapper.get('div.tooltip')
      expect($div.attributes('id')).toBe('custom-id')
    })
  })

  describe('expose', () => {
    it('exposes hide method', () => {
      const wrapper = mount(BTooltip, {props: {modelValue: true}})
      expect(typeof wrapper.vm.hide).toBe('function')
    })

    it('exposes show method', () => {
      const wrapper = mount(BTooltip, {props: {modelValue: true}})
      expect(typeof wrapper.vm.show).toBe('function')
    })

    it('exposes toggle method', () => {
      const wrapper = mount(BTooltip, {props: {modelValue: true}})
      expect(typeof wrapper.vm.toggle).toBe('function')
    })
  })

  describe('events', () => {
    it('forwards show event', async () => {
      const wrapper = mount(BTooltip, {
        props: {body: 'test'},
        slots: {target: '<button>Test</button>'},
        attachTo: document.body,
      })

      const button = wrapper.find('button')
      await button.trigger('pointerenter')
      expect(wrapper.emitted('show')).toBeTruthy()

      wrapper.unmount()
    })

    it('forwards show event on focus trigger', async () => {
      const wrapper = mount(BTooltip, {
        props: {body: 'test'},
        slots: {target: '<button>Test</button>'},
        attachTo: document.body,
      })

      const button = wrapper.find('button')
      await button.trigger('focus')
      expect(wrapper.emitted('show')).toBeTruthy()

      wrapper.unmount()
    })
  })

  describe('triggers', () => {
    it('defaults to hover and focus triggers', async () => {
      const wrapper = mount(BTooltip, {
        props: {body: 'test'},
        slots: {target: '<button>Test</button>'},
        attachTo: document.body,
      })

      const button = wrapper.find('button')

      await button.trigger('pointerenter')
      expect(wrapper.emitted('show')).toBeTruthy()

      await button.trigger('focus')
      expect((wrapper.emitted('show')?.length || 0) >= 2).toBeTruthy()

      wrapper.unmount()
    })

    it('respects click prop', async () => {
      const wrapper = mount(BTooltip, {
        props: {click: true, body: 'test'},
        slots: {target: '<button>Test</button>'},
        attachTo: document.body,
      })

      const button = wrapper.find('button')
      await button.trigger('click')
      expect(wrapper.emitted('show')).toBeTruthy()

      wrapper.unmount()
    })

    it('respects manual prop to disable all triggers', async () => {
      const wrapper = mount(BTooltip, {
        props: {manual: true, body: 'test'},
        slots: {target: '<button>Test</button>'},
        attachTo: document.body,
      })

      const button = wrapper.find('button')
      await button.trigger('click')
      await button.trigger('pointerenter')
      await button.trigger('focus')
      expect(wrapper.emitted('show')).toBeFalsy()

      wrapper.unmount()
    })
  })

  describe('classes', () => {
    it('does not have fade class when noFade is true', () => {
      const wrapper = mount(BTooltip, {props: {modelValue: true, noFade: true}})
      const $div = wrapper.get('div.tooltip')
      expect($div.classes()).not.toContain('fade')
    })

    it('does not have fade class on initial mount with modelValue true', () => {
      // When modelValue is true on mount and initialAnimation is false (default),
      // animation is skipped for the initial render
      const wrapper = mount(BTooltip, {props: {modelValue: true}})
      const $div = wrapper.get('div.tooltip')
      expect($div.classes()).not.toContain('fade')
    })

    it('has fade class when initialAnimation is true', () => {
      const wrapper = mount(BTooltip, {
        props: {modelValue: true, initialAnimation: true},
      })
      const $div = wrapper.get('div.tooltip')
      expect($div.classes()).toContain('fade')
    })
  })

  describe('content div', () => {
    it('has b-floating-size class', () => {
      const wrapper = mount(BTooltip, {props: {modelValue: true}})
      const $div = wrapper.find('.b-floating-size')
      expect($div.exists()).toBe(true)
    })

    it('has overflow-auto class', () => {
      const wrapper = mount(BTooltip, {props: {modelValue: true}})
      const $div = wrapper.find('.b-floating-size')
      expect($div.classes()).toContain('overflow-auto')
    })
  })

  describe('prop pass-through', () => {
    it('passes placement prop to BPopover', () => {
      const wrapper = mount(BTooltip, {
        props: {modelValue: true, placement: 'bottom'},
      })
      const popover = wrapper.findComponent(BPopover)
      expect(popover.props('placement')).toBe('bottom')
    })

    it('passes noFlip prop to BPopover', () => {
      const wrapper = mount(BTooltip, {
        props: {modelValue: true, noFlip: true},
      })
      const popover = wrapper.findComponent(BPopover)
      expect(popover.props('noFlip')).toBe(true)
    })

    it('passes noShift prop to BPopover', () => {
      const wrapper = mount(BTooltip, {
        props: {modelValue: true, noShift: true},
      })
      const popover = wrapper.findComponent(BPopover)
      expect(popover.props('noShift')).toBe(true)
    })

    it('passes title prop to BPopover', () => {
      const wrapper = mount(BTooltip, {
        props: {modelValue: true, title: 'test title'},
      })
      const popover = wrapper.findComponent(BPopover)
      expect(popover.props('title')).toBe('test title')
    })
  })
})
