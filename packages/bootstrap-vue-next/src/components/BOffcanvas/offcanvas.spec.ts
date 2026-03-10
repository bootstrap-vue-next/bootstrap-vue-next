import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, beforeEach, describe, expect, it} from 'vitest'
import {nextTick} from 'vue'
import {BvTriggerableEvent} from '../../utils'
import BButton from '../BButton/BButton.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import BOffcanvas from './BOffcanvas.vue'
import {createBootstrap} from '../../plugins'

describe('offcanvas', () => {
  enableAutoUnmount(afterEach)

  beforeEach(() => {
    const el = document.createElement('div')
    el.id = 'body-teleports'
    document.body.appendChild(el)
  })

  afterEach(() => {
    const el = document.getElementById('body-teleports')
    if (el) document.body.removeChild(el)
    document.body.style.overflow = ''
  })

  describe('teleport', () => {
    it('teleports content to #body-teleports when teleportTo is set', () => {
      mount(BOffcanvas, {
        props: {
          modelValue: true,
          teleportTo: '#body-teleports',
        },
        global: {plugins: [createBootstrap()]},
      })
      expect(document.getElementById('body-teleports')?.querySelector('.offcanvas')).not.toBe(null)
    })

    it('does not teleport when teleportDisabled is true', () => {
      const wrapper = mount(BOffcanvas, {
        props: {
          modelValue: true,
          teleportDisabled: true,
        },
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      expect(wrapper.find('.offcanvas').exists()).toBe(true)
    })
  })

  describe('DOM structure', () => {
    it('has element with static class offcanvas', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.exists()).toBe(true)
    })

    it('has role dialog', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.attributes('role')).toBe('dialog')
    })

    it('has aria-modal true', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.attributes('aria-modal')).toBe('true')
    })

    it('has tabindex -1', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.attributes('tabindex')).toBe('-1')
    })

    it('has data-bs-backdrop false', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.attributes('data-bs-backdrop')).toBe('false')
    })

    it('has generated id', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.attributes('id')).toBeDefined()
      expect($offcanvas.attributes('id')).toContain('offcanvas')
    })

    it('has custom id when prop id is set', () => {
      const wrapper = mount(BOffcanvas, {
        props: {id: 'my-offcanvas'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.attributes('id')).toBe('my-offcanvas')
    })

    it('has aria-labelledby referencing the title id', () => {
      const wrapper = mount(BOffcanvas, {
        props: {id: 'test-oc'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.attributes('aria-labelledby')).toBe('test-oc-offcanvas-label')
    })

    it('passes $attrs to the offcanvas element via inheritAttrs false', () => {
      const wrapper = mount(BOffcanvas, {
        attrs: {'data-testid': 'my-offcanvas'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.attributes('data-testid')).toBe('my-offcanvas')
    })
  })

  describe('placement', () => {
    it('has offcanvas-start class by default', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.classes()).toContain('offcanvas-start')
    })

    it('has offcanvas-end class when placement is end', () => {
      const wrapper = mount(BOffcanvas, {
        props: {placement: 'end'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.classes()).toContain('offcanvas-end')
    })

    it('has offcanvas-top class when placement is top', () => {
      const wrapper = mount(BOffcanvas, {
        props: {placement: 'top'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.classes()).toContain('offcanvas-top')
    })

    it('has offcanvas-bottom class when placement is bottom', () => {
      const wrapper = mount(BOffcanvas, {
        props: {placement: 'bottom'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.classes()).toContain('offcanvas-bottom')
    })

    it('placement class is reactive', async () => {
      const wrapper = mount(BOffcanvas, {
        props: {placement: 'start'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      expect(wrapper.find('.offcanvas').classes()).toContain('offcanvas-start')

      await wrapper.setProps({placement: 'end'})
      await nextTick()
      const $offcanvas = wrapper.find('[role="dialog"]')
      expect($offcanvas.classes()).toContain('offcanvas-end')
      expect($offcanvas.classes()).not.toContain('offcanvas-start')
    })
  })

  describe('header', () => {
    it('renders offcanvas-header element', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $header = wrapper.find('.offcanvas-header')
      expect($header.exists()).toBe(true)
    })

    it('contains h5 with class offcanvas-title', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $h5 = wrapper.find('h5.offcanvas-title')
      expect($h5.exists()).toBe(true)
    })

    it('h5 has correct id based on computedId', () => {
      const wrapper = mount(BOffcanvas, {
        props: {id: 'test-oc'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $h5 = wrapper.find('h5.offcanvas-title')
      expect($h5.attributes('id')).toBe('test-oc-offcanvas-label')
    })

    it('renders title from prop', () => {
      const wrapper = mount(BOffcanvas, {
        props: {title: 'My Title'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $h5 = wrapper.find('h5.offcanvas-title')
      expect($h5.text()).toBe('My Title')
    })

    it('renders title from slot', () => {
      const wrapper = mount(BOffcanvas, {
        slots: {title: 'Slot Title'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $h5 = wrapper.find('h5.offcanvas-title')
      expect($h5.text()).toBe('Slot Title')
    })

    it('title slot takes precedence over prop', () => {
      const wrapper = mount(BOffcanvas, {
        props: {title: 'Prop Title'},
        slots: {title: 'Slot Title'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $h5 = wrapper.find('h5.offcanvas-title')
      expect($h5.text()).toBe('Slot Title')
    })

    it('does not render header when noHeader is true', () => {
      const wrapper = mount(BOffcanvas, {
        props: {noHeader: true},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $header = wrapper.find('.offcanvas-header')
      expect($header.exists()).toBe(false)
    })

    it('applies headerClass to header element', () => {
      const wrapper = mount(BOffcanvas, {
        props: {headerClass: 'custom-header'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $header = wrapper.find('.offcanvas-header')
      expect($header.classes()).toContain('custom-header')
    })

    it('applies headerAttrs to header element', () => {
      const wrapper = mount(BOffcanvas, {
        props: {
          headerAttrs: {'data-bs-theme': 'dark'},
        },
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $header = wrapper.find('.offcanvas-header')
      expect($header.attributes('data-bs-theme')).toBe('dark')
    })

    it('renders header slot content', () => {
      const wrapper = mount(BOffcanvas, {
        slots: {header: '<span class="custom-header-content">Custom Header</span>'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $header = wrapper.find('.offcanvas-header')
      expect($header.find('.custom-header-content').exists()).toBe(true)
      expect($header.find('.custom-header-content').text()).toBe('Custom Header')
    })

    it('header slot replaces default title and close button', () => {
      const wrapper = mount(BOffcanvas, {
        slots: {header: '<span>Custom</span>'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      expect(wrapper.find('h5.offcanvas-title').exists()).toBe(false)
      expect(wrapper.findComponent(BCloseButton).exists()).toBe(false)
    })
  })

  describe('close button', () => {
    it('renders BCloseButton by default', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $close = wrapper.findComponent(BCloseButton)
      expect($close.exists()).toBe(true)
    })

    it('BCloseButton has type button', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $close = wrapper.findComponent(BCloseButton)
      expect($close.props('type')).toBe('button')
    })

    it('BCloseButton has text-reset class', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $close = wrapper.findComponent(BCloseButton)
      expect($close.classes()).toContain('text-reset')
    })

    it('BCloseButton has default aria-label Close', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $close = wrapper.findComponent(BCloseButton)
      expect($close.attributes('aria-label')).toBe('Close')
    })

    it('BCloseButton has custom aria-label from headerCloseLabel prop', () => {
      const wrapper = mount(BOffcanvas, {
        props: {headerCloseLabel: 'Dismiss'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $close = wrapper.findComponent(BCloseButton)
      expect($close.attributes('aria-label')).toBe('Dismiss')
    })

    it('BCloseButton has headerCloseClass', () => {
      const wrapper = mount(BOffcanvas, {
        props: {headerCloseClass: 'custom-close'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $close = wrapper.findComponent(BCloseButton)
      expect($close.classes()).toContain('custom-close')
    })

    it('does not render close button when noHeaderClose is true', () => {
      const wrapper = mount(BOffcanvas, {
        props: {noHeaderClose: true},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $close = wrapper.findComponent(BCloseButton)
      expect($close.exists()).toBe(false)
    })

    it('does not render close button when noHeader is true', () => {
      const wrapper = mount(BOffcanvas, {
        props: {noHeader: true},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $close = wrapper.findComponent(BCloseButton)
      expect($close.exists()).toBe(false)
    })

    it('renders BButton when header-close slot is provided', () => {
      const wrapper = mount(BOffcanvas, {
        slots: {'header-close': 'X'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      expect(wrapper.findComponent(BCloseButton).exists()).toBe(false)
      const $button = wrapper.findComponent(BButton)
      expect($button.exists()).toBe(true)
      expect($button.text()).toBe('X')
    })

    it('BButton from header-close slot has headerCloseClass', () => {
      const wrapper = mount(BOffcanvas, {
        props: {headerCloseClass: 'custom-close'},
        slots: {'header-close': 'X'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $button = wrapper.findComponent(BButton)
      expect($button.classes()).toContain('custom-close')
    })

    it('BButton from header-close slot has headerCloseVariant', () => {
      const wrapper = mount(BOffcanvas, {
        props: {headerCloseVariant: 'warning'},
        slots: {'header-close': 'X'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $button = wrapper.findComponent(BButton)
      expect($button.classes()).toContain('btn-warning')
    })

    it('BCloseButton does not have variant class when headerCloseVariant is set', () => {
      const wrapper = mount(BOffcanvas, {
        props: {headerCloseVariant: 'warning'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $close = wrapper.findComponent(BCloseButton)
      expect($close.classes()).not.toContain('btn-warning')
    })
  })

  describe('body', () => {
    it('has element with class offcanvas-body', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $body = wrapper.find('.offcanvas-body')
      expect($body.exists()).toBe(true)
    })

    it('renders default slot content in body', () => {
      const wrapper = mount(BOffcanvas, {
        slots: {default: 'Body content'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $body = wrapper.find('.offcanvas-body')
      expect($body.text()).toBe('Body content')
    })

    it('applies bodyClass to body element', () => {
      const wrapper = mount(BOffcanvas, {
        props: {bodyClass: 'custom-body'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $body = wrapper.find('.offcanvas-body')
      expect($body.classes()).toContain('custom-body')
    })

    it('applies bodyAttrs to body element', () => {
      const wrapper = mount(BOffcanvas, {
        props: {
          bodyAttrs: {role: 'region'},
        },
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $body = wrapper.find('.offcanvas-body')
      expect($body.attributes('role')).toBe('region')
    })
  })

  describe('footer', () => {
    it('does not render footer when no footer slot is provided', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      const children = $offcanvas.findAll(':scope > div')
      // Should have header and body only (no footer)
      expect(children.length).toBe(2)
    })

    it('renders footer when footer slot is provided', () => {
      const wrapper = mount(BOffcanvas, {
        slots: {footer: 'Footer content'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      const children = $offcanvas.findAll(':scope > div')
      // Header, body, footer
      expect(children.length).toBe(3)
      expect(children[2].text()).toBe('Footer content')
    })

    it('applies footerClass to footer element', () => {
      const wrapper = mount(BOffcanvas, {
        props: {footerClass: 'custom-footer'},
        slots: {footer: 'Footer'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      const children = $offcanvas.findAll(':scope > div')
      expect(children[2].classes()).toContain('custom-footer')
    })
  })

  describe('backdrop', () => {
    it('renders backdrop by default when shown', async () => {
      const wrapper = mount(BOffcanvas, {
        attachTo: document.body,
        props: {
          modelValue: true,
        },
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      await new Promise((resolve) => setTimeout(resolve, 30))
      const $backdrop = wrapper.find('.offcanvas-backdrop')
      expect($backdrop.exists()).toBe(true)

      wrapper.unmount()
    })

    it('does not render backdrop when noBackdrop is true', async () => {
      const wrapper = mount(BOffcanvas, {
        attachTo: document.body,
        props: {
          modelValue: true,
          noBackdrop: true,
        },
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      await new Promise((resolve) => setTimeout(resolve, 30))
      const $backdrop = wrapper.find('.offcanvas-backdrop')
      expect($backdrop.exists()).toBe(false)

      wrapper.unmount()
    })
  })

  describe('shadow', () => {
    it('does not have shadow class by default', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.classes().some((c) => c.startsWith('shadow'))).toBe(false)
    })

    it('has shadow-true class when shadow is true', () => {
      const wrapper = mount(BOffcanvas, {
        props: {shadow: true},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.classes()).toContain('shadow-true')
    })

    it('has shadow-sm class when shadow is sm', () => {
      const wrapper = mount(BOffcanvas, {
        props: {shadow: 'sm'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.classes()).toContain('shadow-sm')
    })

    it('has shadow-lg class when shadow is lg', () => {
      const wrapper = mount(BOffcanvas, {
        props: {shadow: 'lg'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.classes()).toContain('shadow-lg')
    })
  })

  describe('width', () => {
    it('does not have width in style by default', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.attributes('style') ?? '').not.toContain('width')
    })

    it('has inline width style when width prop is set', () => {
      const wrapper = mount(BOffcanvas, {
        props: {width: '400px'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.attributes('style')).toContain('width: 400px')
    })
  })

  describe('responsive', () => {
    it('has offcanvas class by default (no responsive prop)', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $div = wrapper.find('[role="dialog"]')
      expect($div.classes()).toContain('offcanvas')
    })

    it('has offcanvas-lg class when responsive is lg', () => {
      const wrapper = mount(BOffcanvas, {
        props: {responsive: 'lg'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $div = wrapper.find('[role="dialog"]')
      expect($div.classes()).toContain('offcanvas-lg')
      expect($div.classes()).not.toContain('offcanvas')
    })

    it('has offcanvas-md class when responsive is md', () => {
      const wrapper = mount(BOffcanvas, {
        props: {responsive: 'md'},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $div = wrapper.find('[role="dialog"]')
      expect($div.classes()).toContain('offcanvas-md')
    })
  })

  describe('animation', () => {
    it('has no-transition class when noAnimation is true', () => {
      const wrapper = mount(BOffcanvas, {
        props: {noAnimation: true},
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.classes()).toContain('no-transition')
    })
  })

  describe('show/hide behavior', () => {
    it('offcanvas is not visible by default', () => {
      const wrapper = mount(BOffcanvas, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.exists()).toBe(true)
      expect($offcanvas.isVisible()).toBe(false)

      wrapper.unmount()
    })

    it('setting modelValue to true shows offcanvas', async () => {
      const wrapper = mount(BOffcanvas, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {
          id: 'test',
        },
      })

      let $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.isVisible()).toBe(false)

      await wrapper.setProps({modelValue: true})
      await new Promise((resolve) => setTimeout(resolve, 30))
      $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.isVisible()).toBe(true)

      wrapper.unmount()
    })

    it('exposed show() makes offcanvas visible', async () => {
      const wrapper = mount(BOffcanvas, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {
          id: 'test',
        },
      })

      let $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.isVisible()).toBe(false)

      wrapper.vm.show()
      await nextTick()
      await new Promise((resolve) => setTimeout(resolve, 30))
      $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.isVisible()).toBe(true)

      wrapper.unmount()
    })

    it('exposed hide() emits update:modelValue with false', async () => {
      const wrapper = mount(BOffcanvas, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {
          id: 'test',
          modelValue: true,
        },
      })

      await nextTick()
      let $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.isVisible()).toBe(true)

      wrapper.vm.hide()
      await new Promise((resolve) => setTimeout(resolve, 30))

      expect(wrapper.emitted('hide')).toBeDefined()

      // Simulate parent responding to update:modelValue
      await wrapper.setProps({modelValue: false})
      await new Promise((resolve) => setTimeout(resolve, 30))
      $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.isVisible()).toBe(false)

      wrapper.unmount()
    })

    it('exposed toggle() toggles offcanvas visibility', async () => {
      const wrapper = mount(BOffcanvas, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {
          id: 'test',
        },
      })

      let $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.isVisible()).toBe(false)

      // Toggle on
      wrapper.vm.toggle()
      await nextTick()
      await new Promise((resolve) => setTimeout(resolve, 30))
      $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.isVisible()).toBe(true)

      // Toggle off: call toggle again then simulate parent responding
      wrapper.vm.toggle()
      await new Promise((resolve) => setTimeout(resolve, 30))
      // Verify toggle emitted events
      expect(wrapper.emitted('toggle')).toBeDefined()
      expect(wrapper.emitted('hide')).toBeDefined()

      wrapper.unmount()
    })

    it('body scrolling is locked when offcanvas is shown', async () => {
      const wrapper = mount(BOffcanvas, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {
          id: 'test',
        },
      })

      await nextTick()
      expect(document.body.attributes.getNamedItem('style')?.textContent ?? '').not.toContain(
        'overflow: hidden;'
      )

      await wrapper.setProps({modelValue: true})
      await new Promise((resolve) => setTimeout(resolve, 50))

      expect(document.body.attributes.getNamedItem('style')?.textContent).toContain(
        'overflow: hidden;'
      )

      wrapper.unmount()
    })

    it('body scrolling is not locked when bodyScrolling is true', async () => {
      const wrapper = mount(BOffcanvas, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {
          id: 'test',
          bodyScrolling: true,
        },
      })

      await wrapper.setProps({modelValue: true})
      await new Promise((resolve) => setTimeout(resolve, 50))

      expect(document.body.attributes.getNamedItem('style')?.textContent ?? '').not.toContain(
        'overflow: hidden;'
      )

      wrapper.unmount()
    })

    it('handles quick show/hide sequence without animation', async () => {
      const wrapper = mount(BOffcanvas, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {
          id: 'test',
          noFade: true,
        },
      })

      wrapper.vm.show()
      wrapper.vm.hide()

      await new Promise((resolve) => setTimeout(resolve, 50))

      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.isVisible()).toBe(false)

      wrapper.unmount()
    })

    it('handles quick show/hide sequence with animation', async () => {
      const wrapper = mount(BOffcanvas, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {
          id: 'test',
          noFade: false,
        },
      })

      wrapper.vm.show()
      wrapper.vm.hide()

      await new Promise((resolve) => setTimeout(resolve, 350))

      const $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.isVisible()).toBe(false)

      wrapper.unmount()
    })
  })

  describe('close events', () => {
    it('close button triggers close event and hides offcanvas', async () => {
      const wrapper = mount(BOffcanvas, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {
          id: 'test',
          modelValue: true,
        },
      })
      await nextTick()

      let $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.isVisible()).toBe(true)

      const $closeBtn = wrapper.find('.offcanvas-header button')
      expect($closeBtn.exists()).toBe(true)
      await $closeBtn.trigger('click')

      const closeEvent = wrapper.emitted<BvTriggerableEvent[]>('close')
      expect(closeEvent).toHaveLength(1)
      expect(closeEvent?.[0][0]).toBeInstanceOf(BvTriggerableEvent)

      // Simulate parent responding to update:modelValue
      await wrapper.setProps({modelValue: false})
      await new Promise((resolve) => setTimeout(resolve, 30))
      $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.isVisible()).toBe(false)

      wrapper.unmount()
    })

    it('close event is preventable', async () => {
      let cancelClose = true
      const wrapper = mount(BOffcanvas, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {
          id: 'test',
          modelValue: true,
        },
        attrs: {
          onClose: (bvEvent: BvTriggerableEvent) => {
            if (cancelClose) {
              bvEvent.preventDefault()
            }
          },
        },
      })
      await nextTick()

      let $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.isVisible()).toBe(true)

      const $closeBtn = wrapper.find('.offcanvas-header button')

      // Try to close (prevented)
      await $closeBtn.trigger('click')
      let closeEvent = wrapper.emitted<BvTriggerableEvent[]>('close')
      expect(closeEvent).toHaveLength(1)
      $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.isVisible()).toBe(true)

      // Try to close (not prevented)
      cancelClose = false
      await $closeBtn.trigger('click')
      closeEvent = wrapper.emitted<BvTriggerableEvent[]>('close')
      expect(closeEvent).toHaveLength(2)

      // Simulate parent responding to update:modelValue
      await wrapper.setProps({modelValue: false})
      await new Promise((resolve) => setTimeout(resolve, 30))
      $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.isVisible()).toBe(false)

      wrapper.unmount()
    })

    it('backdrop click triggers backdrop event and hides offcanvas', async () => {
      const wrapper = mount(BOffcanvas, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {
          id: 'test',
          modelValue: true,
        },
      })
      await nextTick()
      await new Promise((resolve) => setTimeout(resolve, 30))

      const $backdrop = wrapper.find('.offcanvas-backdrop')
      expect($backdrop.exists()).toBe(true)
      await $backdrop.trigger('click')

      const backdropEvent = wrapper.emitted<BvTriggerableEvent[]>('backdrop')
      expect(backdropEvent).toHaveLength(1)
      expect(backdropEvent?.[0][0]).toBeInstanceOf(BvTriggerableEvent)

      wrapper.unmount()
    })

    it('backdrop click does not hide when noCloseOnBackdrop is true', async () => {
      const wrapper = mount(BOffcanvas, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {
          id: 'test',
          modelValue: true,
          noCloseOnBackdrop: true,
        },
      })
      await nextTick()
      await new Promise((resolve) => setTimeout(resolve, 30))

      let $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.isVisible()).toBe(true)

      const $backdrop = wrapper.find('.offcanvas-backdrop')
      expect($backdrop.exists()).toBe(true)
      await $backdrop.trigger('click')

      await new Promise((resolve) => setTimeout(resolve, 30))
      $offcanvas = wrapper.find('.offcanvas')
      expect($offcanvas.isVisible()).toBe(true)

      wrapper.unmount()
    })
  })

  describe('fallback focus element', () => {
    it('fallback element is added when no focusable elements are present', async () => {
      const wrapper = mount(BOffcanvas, {
        attachTo: document.body,
        global: {stubs: {teleport: true, transition: false}, plugins: [createBootstrap()]},
        props: {
          noHeader: true,
        },
      })
      await nextTick()

      expect(wrapper.find('.offcanvas-fallback-focus').exists()).toBe(true)

      wrapper.unmount()
    })

    it('fallback element is not added when focusable elements are present', async () => {
      const wrapper = mount(BOffcanvas, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {
          noHeader: false,
        },
      })
      await nextTick()

      expect(wrapper.find('.offcanvas-fallback-focus').exists()).toBe(false)

      wrapper.unmount()
    })
  })

  describe('slot data', () => {
    it('default slot receives shared data', () => {
      const wrapper = mount(BOffcanvas, {
        props: {id: 'test-oc', placement: 'end'},
        slots: {
          default: `<template #default="slotData">
            <span class="slot-id">{{ slotData.id }}</span>
            <span class="slot-placement">{{ slotData.placement }}</span>
          </template>`,
        },
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      expect(wrapper.find('.slot-id').text()).toBe('test-oc')
      expect(wrapper.find('.slot-placement').text()).toBe('end')
    })

    it('footer slot receives shared data', () => {
      const wrapper = mount(BOffcanvas, {
        props: {id: 'test-oc', placement: 'start'},
        slots: {
          footer: `<template #footer="slotData">
            <span class="slot-id">{{ slotData.id }}</span>
            <span class="slot-placement">{{ slotData.placement }}</span>
          </template>`,
        },
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      expect(wrapper.find('.slot-id').text()).toBe('test-oc')
      expect(wrapper.find('.slot-placement').text()).toBe('start')
    })

    it('title slot receives shared data', () => {
      const wrapper = mount(BOffcanvas, {
        props: {id: 'test-oc'},
        slots: {
          title: `<template #title="slotData">
            <span class="slot-id">{{ slotData.id }}</span>
          </template>`,
        },
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      expect(wrapper.find('.slot-id').text()).toBe('test-oc')
    })
  })

  describe('expose', () => {
    it('exposes hide method', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      expect(wrapper.vm.hide).toBeDefined()
      expect(typeof wrapper.vm.hide).toBe('function')
    })

    it('exposes show method', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      expect(wrapper.vm.show).toBeDefined()
      expect(typeof wrapper.vm.show).toBe('function')
    })

    it('exposes toggle method', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      expect(wrapper.vm.toggle).toBeDefined()
      expect(typeof wrapper.vm.toggle).toBe('function')
    })

    it('exposes isOpenByBreakpoint ref', () => {
      const wrapper = mount(BOffcanvas, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      expect(wrapper.vm.isOpenByBreakpoint).toBeDefined()
    })
  })
})
