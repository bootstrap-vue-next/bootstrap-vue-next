import {DOMWrapper, enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, beforeEach, describe, expect, it} from 'vitest'
import {nextTick} from 'vue'
import {BvTriggerableEvent} from '../../utils'
import BButton from '../BButton/BButton.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import BModal from './BModal.vue'
import {createBootstrap} from '../../plugins'

describe('modal', () => {
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

  it('has body teleports element set by to property', () => {
    const wrapper = mount(BModal, {
      props: {
        teleportTo: '#body-teleports',
      },
      global: {plugins: [createBootstrap()]},
    })
    expect(wrapper.exists()).toBe(true)
    expect(document.getElementById('body-teleports')?.querySelector('.modal')).not.toBe(null)
  })

  // Having issues getting the 'body' from the VDOM
  it('has body element', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
    })
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
  })

  it('div has class modal', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('modal')
  })

  it('div has attr id to be prop id', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {id: 'foo'},
    })
    const $div = wrapper.get('div')
    expect($div.attributes('id')).toBe('foo')
  })

  it('div has attr id is defined by default', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
    })
    const $div = wrapper.get('div')
    expect($div.attributes('id')).toBeDefined()
  })

  it('div has attr tabindex to be -1', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
    })
    const $div = wrapper.get('div')
    expect($div.attributes('tabindex')).toBe('-1')
  })

  it('div has class from prop modalClass', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {modalClass: ['foo']},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('foo')
  })

  it('div has class fade when not prop noFade', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {noFade: false},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('fade')
  })

  it('div has class fade when prop noFade', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {noFade: true},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).not.toContain('fade')
  })

  it('div has attrs from attrs', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      attrs: {role: 'foo'},
    })
    const $div = wrapper.get('div')
    expect($div.attributes('role')).toBe('foo')
  })

  it('div has child div', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.find('div')
    expect($div2.exists()).toBe(true)
  })

  it('div child div has static class modal-dialog', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).toContain('modal-dialog')
  })

  it('div child div has class modal-fullscreen when prop fullscreen', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {fullscreen: true},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).toContain('modal-fullscreen')
  })

  it('div child div does not have class modal-fullscreen when not prop fullscreen', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {fullscreen: false},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).not.toContain('modal-fullscreen')
  })

  it('div child div has class modal-fullscreen-{type}-down when prop fullscreen is string', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {fullscreen: 'xl'},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).toContain('modal-fullscreen-xl-down')
  })

  it('div child div has class modal-{type} when prop size', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {size: 'sm'},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).toContain('modal-sm')
  })

  it('div child div has class modal-dialog-centered when prop centered', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {centered: true},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).toContain('modal-dialog-centered')
  })

  it('div child div does not have class modal-dialog-centered when not prop centered', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {centered: false},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).not.toContain('modal-dialog-centered')
  })

  it('div child div has class modal-dialog-scrollable when prop scrollable', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {scrollable: true},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).toContain('modal-dialog-scrollable')
  })

  it('div child div does not have class modal-dialog-scrollable when not prop scrollable', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {scrollable: false},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).not.toContain('modal-dialog-scrollable')
  })

  it('second div has another div by default', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    const $div3 = $div2.find('div')
    expect($div3.exists()).toBe(true)
  })

  it('third nested div has static class modal-content', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    const $div3 = $div2.get('div')
    expect($div3.classes()).toContain('modal-content')
  })

  it('third nested div has class from prop contentClass', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {contentClass: ['foo']},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    const $div3 = $div2.get('div')
    expect($div3.classes()).toContain('foo')
  })

  it('second div has nested div when not prop lazy', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {lazy: false},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    const $div3 = $div2.find('div')
    expect($div3.exists()).toBe(true)
  })

  it('third nested div has another div', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    const $div3 = $div2.find('div')
    expect($div3.exists()).toBe(true)
  })

  it('nested div BCloseButton has class when prop headerCloseClass', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {headerCloseClass: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bclosebutton = $div.getComponent(BCloseButton)
    expect($bclosebutton.classes()).toContain('foobar')
  })

  it('nested div BCloseButton has no variant class when headerCloseVariant', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {headerCloseVariant: 'warning'},
    })
    const $div = wrapper.get('div')
    const $bclosebutton = $div.getComponent(BCloseButton)
    expect($bclosebutton.classes()).not.toContain('btn-warning')
  })

  it('nested div BCloseButton has aria-label to be Close by default', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
    })
    const $div = wrapper.get('div')
    const $bclosebutton = $div.getComponent(BCloseButton)
    expect($bclosebutton.attributes('aria-label')).toBe('Close')
  })

  it('nested div BCloseButton has aria-label to be prop headerCloseLabel', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {headerCloseLabel: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bclosebutton = $div.getComponent(BCloseButton)
    expect($bclosebutton.attributes('aria-label')).toBe('foobar')
  })

  it('nested div BButton has class when prop headerCloseClass', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {headerCloseClass: 'foobar'},
      slots: {'header-close': 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bbutton = $div.getComponent(BButton)
    expect($bbutton.classes()).toContain('foobar')
  })

  it('nested div BButton has variant class when headerCloseVariant', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {headerCloseVariant: 'warning'},
      slots: {'header-close': 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bbutton = $div.getComponent(BButton)
    expect($bbutton.classes()).toContain('btn-warning')
  })

  it('setting modelValue to true shows modal', async () => {
    const wrapper = mount(BModal, {
      attachTo: document.body,
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {
        id: 'test',
      },
    })

    expect(wrapper.vm).toBeDefined()

    const $modal = wrapper.find('div.modal')
    expect($modal.exists()).toBe(true)

    expect($modal.isVisible()).toBe(false)

    await wrapper.setProps({modelValue: true})

    expect($modal.isVisible()).toBe(true)

    wrapper.unmount()
  })

  it('body scrolling is unlocked after modal is closed', async () => {
    const wrapper = mount(BModal, {
      attachTo: document.body,
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {
        id: 'test',
      },
    })

    await nextTick()

    // initial closed state
    let $modal = wrapper.find('div.modal')
    expect($modal.isVisible()).toBe(false)
    expect(document.body.attributes.getNamedItem('style')?.textContent ?? '').not.toContain(
      'overflow: hidden;'
    )

    // open stated
    await wrapper.setProps({modelValue: true})
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect($modal.isVisible()).toBe(true)
    expect(document.body.attributes.getNamedItem('style')?.textContent).toContain(
      'overflow: hidden;'
    )

    // closed state
    $modal = wrapper.find('div.modal')
    await $modal.trigger('keydown.Escape')
    await new Promise((resolve) => setTimeout(resolve, 30))
    $modal = wrapper.find('div.modal')
    expect($modal.isVisible()).toBe(false)
    expect(document.body.attributes.getNamedItem('style')?.textContent ?? '').not.toContain(
      'overflow: hidden;'
    )

    wrapper.unmount()
  })

  it('fallback element is added when no focusable elements are present', async () => {
    const wrapper = mount(BModal, {
      attachTo: document.body,
      global: {
        stubs: {teleport: true, transition: false},
      },
      props: {
        noHeader: true,
        noFooter: true,
      },
    })
    await nextTick()

    expect(wrapper.find('div.modal div.modal-fallback-focus').exists()).toBe(true)

    wrapper.unmount()
  })

  it('fallback element is not added when a focusable element is present', async () => {
    const wrapper = mount(BModal, {
      attachTo: document.body,
      global: {
        stubs: {teleport: true},
      },
      props: {
        noHeader: false,
        noFooter: false,
      },
    })
    await nextTick()

    expect(wrapper.find('div.modal div.modal-fallback-focus').exists()).toBe(false)

    wrapper.unmount()
  })

  it('focus trap deactivation does not throw error when no tabbable elements exist', async () => {
    // This test simulates the issue where a modal with disabled buttons
    // would throw an error on focus trap deactivation
    const wrapper = mount(BModal, {
      attachTo: document.body,
      global: {
        stubs: {teleport: true, transition: false},
      },
      props: {
        modelValue: true,
        noHeader: true,
        noFooter: true,
        // Create a modal with no focusable elements
      },
      slots: {
        default: '<p>No focusable elements here</p>',
      },
    })
    await nextTick()

    // Verify the modal is shown
    expect(wrapper.find('div.modal').exists()).toBe(true)
    expect(wrapper.find('div.modal-fallback-focus').exists()).toBe(true)

    // Simulate closing the modal - this should not throw an error
    await wrapper.setProps({modelValue: false})
    await nextTick()

    // The test passes if no error is thrown during deactivation
    expect(true).toBe(true)

    wrapper.unmount()
  })

  it('keeps focus on an input focused from the shown event', async () => {
    const wrapper = mount(BModal, {
      attachTo: document.body,
      global: {
        stubs: {teleport: true, transition: false},
      },
      props: {
        modelValue: true,
        noHeader: true,
        noFooter: true,
      },
      attrs: {
        onShown: () => {
          ;(document.getElementById('shown-focus-input') as HTMLInputElement | null)?.focus()
        },
      },
      slots: {
        default: '<input id="shown-focus-input" />',
      },
    })

    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 10))

    expect((document.activeElement as HTMLElement | null)?.id).toBe('shown-focus-input')

    wrapper.unmount()
  })

  describe('button and event functionality', () => {
    it('header close button triggers modal close and is preventable', async () => {
      let cancelHide = true
      const wrapper = mount(BModal, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {
          id: 'test',
          modelValue: true,
        },
        attrs: {
          onClose: (bvEvent: BvTriggerableEvent) => {
            if (cancelHide) {
              bvEvent.preventDefault()
            }
          },
        },
      })
      await nextTick()
      expect(wrapper.vm).toBeDefined()

      let $modal = wrapper.find('div.modal')
      expect($modal.exists()).toBe(true)
      expect($modal.isVisible()).toBe(true)

      const $buttons = wrapper.findAll('.modal-header button')
      expect($buttons.length).toBe(1)

      // Close button
      const $close = $buttons.at(0) as DOMWrapper<HTMLButtonElement>
      expect($close.attributes('type')).toBe('button')
      expect($close.attributes('aria-label')).toBe('Close')
      expect($close.classes()).toContain('btn-close')

      expect(wrapper.emitted('hide')).toBeUndefined()

      // Try and close modal (but we prevent it)
      await $close.trigger('click')
      let closeEvent = wrapper.emitted<BvTriggerableEvent[]>('close')
      expect(closeEvent).toHaveLength(1)
      expect(closeEvent?.[0][0]).toBeInstanceOf(BvTriggerableEvent)

      // Modal should still be open
      $modal = wrapper.find('div.modal')
      expect($modal.isVisible()).toBe(true)

      // Try and close modal (and not prevent it)
      cancelHide = false
      await $close.trigger('click')
      closeEvent = wrapper.emitted<BvTriggerableEvent[]>('close')
      expect(closeEvent).toHaveLength(2)
      expect(closeEvent?.[1][0]).toBeInstanceOf(BvTriggerableEvent)

      await new Promise((resolve) => setTimeout(resolve, 30))
      // Modal should now be closed
      $modal = wrapper.find('div.modal')
      expect($modal.isVisible()).toBe(false)

      wrapper.unmount()
    })

    it('header close button triggers modal close and is preventable ?', async () => {
      let cancelHide = true
      const wrapper = mount(BModal, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {
          id: 'test',
          modelValue: true,
        },
        attrs: {
          onClose: (bvEvent: BvTriggerableEvent) => {
            if (cancelHide) {
              bvEvent.preventDefault()
            }
          },
        },
      })
      await nextTick()
      expect(wrapper.vm).toBeDefined()

      let $modal = wrapper.find('div.modal')
      expect($modal.exists()).toBe(true)
      expect($modal.isVisible()).toBe(true)

      const $buttons = wrapper.findAll('.modal-header button')
      expect($buttons.length).toBe(1)

      // Close button
      const $close = $buttons.at(0) as DOMWrapper<HTMLButtonElement>
      expect($close.attributes('type')).toBe('button')
      expect($close.attributes('aria-label')).toBe('Close')
      expect($close.classes()).toContain('btn-close')

      expect(wrapper.emitted('hide')).toBeUndefined()

      // Try and close modal (but we prevent it)
      await $close.trigger('click')
      let closeEvent = wrapper.emitted<BvTriggerableEvent[]>('close')
      expect(closeEvent).toHaveLength(1)
      expect(closeEvent?.[0][0]).toBeInstanceOf(BvTriggerableEvent)

      // Modal should still be open
      expect($modal.isVisible()).toBe(true)

      // Try and close modal (and not prevent it)
      cancelHide = false
      await $close.trigger('click')
      closeEvent = wrapper.emitted<BvTriggerableEvent[]>('close')
      expect(closeEvent).toHaveLength(2)
      expect(closeEvent?.[1][0]).toBeInstanceOf(BvTriggerableEvent)

      // Modal should now be closed
      await new Promise((resolve) => setTimeout(resolve, 30))
      $modal = wrapper.find('div.modal')
      expect($modal.isVisible()).toBe(false)

      wrapper.unmount()
    })
  })

  it('modal body div is given prop bodyClass', () => {
    const wrapper = mount(BModal, {
      attachTo: document.body,
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {
        bodyClass: 'foobar',
      },
    })

    expect(wrapper.vm).toBeDefined()

    const $modal = wrapper.find('div.modal')
    expect($modal.exists()).toBe(true)

    const $modalBody = $modal.element.querySelector('.modal-body')
    expect($modalBody?.classList).toContain('foobar')
  })

  it('modal body div is given prop bodyAttrs', () => {
    const wrapper = mount(BModal, {
      attachTo: document.body,
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {
        bodyAttrs: {
          role: 'foo',
        },
      },
    })

    expect(wrapper.vm).toBeDefined()

    const $modal = wrapper.find('div.modal')
    expect($modal.exists()).toBe(true)

    const $modalBody = $modal.element.querySelector('.modal-body')
    expect($modalBody?.hasAttribute('role')).toBeTruthy()
    expect($modalBody?.getAttribute('role')).toBe('foo')
  })

  it('handles quick show/hide sequence without animation', async () => {
    const wrapper = mount(BModal, {
      attachTo: document.body,
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {
        id: 'test',
        noFade: true,
      },
    })

    expect(wrapper.vm).toBeDefined()

    // Call show() and hide() immediately
    wrapper.vm.show()
    wrapper.vm.hide()

    // Wait for any pending animations
    await new Promise((resolve) => setTimeout(resolve, 50))

    // Modal should be hidden
    const $modal = wrapper.find('div.modal')
    expect($modal.isVisible()).toBe(false)

    wrapper.unmount()
  })

  it('handles quick show/hide sequence with animation', async () => {
    const wrapper = mount(BModal, {
      attachTo: document.body,
      global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      props: {
        id: 'test',
        noFade: false,
      },
    })

    expect(wrapper.vm).toBeDefined()

    // Call show() and hide() immediately
    wrapper.vm.show()
    wrapper.vm.hide()

    // Wait for any pending animations
    await new Promise((resolve) => setTimeout(resolve, 350))

    // Modal should be hidden
    const $modal = wrapper.find('div.modal')
    expect($modal.isVisible()).toBe(false)

    wrapper.unmount()
  })

  describe('title', () => {
    it('renders title from prop', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {title: 'My Title'},
      })
      const $title = wrapper.find('.modal-title')
      expect($title.exists()).toBe(true)
      expect($title.text()).toBe('My Title')
    })

    it('renders title from slot', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        slots: {title: 'Slot Title'},
      })
      const $title = wrapper.find('.modal-title')
      expect($title.exists()).toBe(true)
      expect($title.text()).toBe('Slot Title')
    })

    it('title slot takes precedence over prop', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {title: 'Prop Title'},
        slots: {title: 'Slot Title'},
      })
      const $title = wrapper.find('.modal-title')
      expect($title.text()).toBe('Slot Title')
    })

    it('title tag defaults to h5', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {title: 'Test'},
      })
      const $title = wrapper.find('.modal-title')
      expect($title.element.tagName).toBe('H5')
    })

    it('title tag can be changed with titleTag prop', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {title: 'Test', titleTag: 'h3'},
      })
      const $title = wrapper.find('.modal-title')
      expect($title.element.tagName).toBe('H3')
    })

    it('applies titleClass to title element', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {title: 'Test', titleClass: 'my-title-class'},
      })
      const $title = wrapper.find('.modal-title')
      expect($title.classes()).toContain('my-title-class')
    })

    it('adds visually-hidden class when titleVisuallyHidden is true', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {title: 'Test', titleVisuallyHidden: true},
      })
      const $title = wrapper.find('.modal-title')
      expect($title.classes()).toContain('visually-hidden')
    })

    it('does not add visually-hidden class when titleVisuallyHidden is false', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {title: 'Test', titleVisuallyHidden: false},
      })
      const $title = wrapper.find('.modal-title')
      expect($title.classes()).not.toContain('visually-hidden')
    })

    it('title element has correct id', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {id: 'test-modal', title: 'Test'},
      })
      const $title = wrapper.find('.modal-title')
      expect($title.attributes('id')).toBe('test-modal-label')
    })
  })

  describe('header', () => {
    it('renders header by default', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      expect(wrapper.find('.modal-header').exists()).toBe(true)
    })

    it('does not render header when noHeader is true', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {noHeader: true},
      })
      expect(wrapper.find('.modal-header').exists()).toBe(false)
    })

    it('applies headerClass to header element', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {headerClass: 'custom-header'},
      })
      const $header = wrapper.find('.modal-header')
      expect($header.classes()).toContain('custom-header')
    })

    it('applies headerBgVariant class', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {headerBgVariant: 'danger'},
      })
      const $header = wrapper.find('.modal-header')
      expect($header.classes()).toContain('bg-danger')
    })

    it('applies headerTextVariant class', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {headerTextVariant: 'light'},
      })
      const $header = wrapper.find('.modal-header')
      expect($header.classes()).toContain('text-light')
    })

    it('applies headerVariant class', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {headerVariant: 'success'},
      })
      const $header = wrapper.find('.modal-header')
      expect($header.classes()).toContain('text-bg-success')
    })

    it('applies headerBorderVariant class', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {headerBorderVariant: 'primary'},
      })
      const $header = wrapper.find('.modal-header')
      expect($header.classes()).toContain('border-primary')
    })

    it('does not render close button when noHeaderClose is true', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {noHeaderClose: true},
      })
      const $header = wrapper.find('.modal-header')
      expect($header.find('button').exists()).toBe(false)
    })

    it('renders close button by default', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $header = wrapper.find('.modal-header')
      expect($header.find('button').exists()).toBe(true)
    })

    it('header slot replaces default header content', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        slots: {header: '<span class="custom-header-content">Custom</span>'},
      })
      const $header = wrapper.find('.modal-header')
      expect($header.find('.custom-header-content').exists()).toBe(true)
      expect($header.find('.modal-title').exists()).toBe(false)
    })
  })

  describe('footer', () => {
    it('renders footer by default', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      expect(wrapper.find('.modal-footer').exists()).toBe(true)
    })

    it('does not render footer when noFooter is true', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {noFooter: true},
      })
      expect(wrapper.find('.modal-footer').exists()).toBe(false)
    })

    it('applies footerClass to footer element', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {footerClass: 'custom-footer'},
      })
      const $footer = wrapper.find('.modal-footer')
      expect($footer.classes()).toContain('custom-footer')
    })

    it('applies footerBgVariant class', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {footerBgVariant: 'info'},
      })
      const $footer = wrapper.find('.modal-footer')
      expect($footer.classes()).toContain('bg-info')
    })

    it('applies footerTextVariant class', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {footerTextVariant: 'dark'},
      })
      const $footer = wrapper.find('.modal-footer')
      expect($footer.classes()).toContain('text-dark')
    })

    it('applies footerVariant class', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {footerVariant: 'warning'},
      })
      const $footer = wrapper.find('.modal-footer')
      expect($footer.classes()).toContain('text-bg-warning')
    })

    it('applies footerBorderVariant class', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {footerBorderVariant: 'danger'},
      })
      const $footer = wrapper.find('.modal-footer')
      expect($footer.classes()).toContain('border-danger')
    })

    it('footer slot replaces default footer content', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        slots: {footer: '<span class="custom-footer-content">Custom</span>'},
      })
      const $footer = wrapper.find('.modal-footer')
      expect($footer.find('.custom-footer-content').exists()).toBe(true)
      expect($footer.findAll('button').length).toBe(0)
    })
  })

  describe('body', () => {
    it('renders body text from body prop', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {body: 'Body text'},
      })
      const $body = wrapper.find('.modal-body')
      expect($body.text()).toBe('Body text')
    })

    it('renders body content from default slot', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        slots: {default: '<p>Slot content</p>'},
      })
      const $body = wrapper.find('.modal-body')
      expect($body.find('p').text()).toBe('Slot content')
    })

    it('default slot takes precedence over body prop', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {body: 'Body text'},
        slots: {default: 'Slot content'},
      })
      const $body = wrapper.find('.modal-body')
      expect($body.text()).toBe('Slot content')
    })

    it('body has correct id', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {id: 'test-modal'},
      })
      const $body = wrapper.find('.modal-body')
      expect($body.attributes('id')).toBe('test-modal-body')
    })

    it('applies bodyBgVariant class', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {bodyBgVariant: 'dark'},
      })
      const $body = wrapper.find('.modal-body')
      expect($body.classes()).toContain('bg-dark')
    })

    it('applies bodyTextVariant class', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {bodyTextVariant: 'white'},
      })
      const $body = wrapper.find('.modal-body')
      expect($body.classes()).toContain('text-white')
    })

    it('applies bodyVariant class', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {bodyVariant: 'primary'},
      })
      const $body = wrapper.find('.modal-body')
      expect($body.classes()).toContain('text-bg-primary')
    })
  })

  describe('ok button', () => {
    it('renders ok button with default text', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      const $okButton = $buttons[$buttons.length - 1]
      expect($okButton.text()).toBe('OK')
    })

    it('ok button text from okTitle prop', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {okTitle: 'Submit'},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      const $okButton = $buttons[$buttons.length - 1]
      expect($okButton.text()).toBe('Submit')
    })

    it('ok button has default variant primary', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      const $okButton = $buttons[$buttons.length - 1]
      expect($okButton.classes()).toContain('btn-primary')
    })

    it('ok button variant from okVariant prop', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {okVariant: 'success'},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      const $okButton = $buttons[$buttons.length - 1]
      expect($okButton.classes()).toContain('btn-success')
    })

    it('ok button applies okClass', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {okClass: 'custom-ok'},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      const $okButton = $buttons[$buttons.length - 1]
      expect($okButton.classes()).toContain('custom-ok')
    })

    it('ok button is disabled when okDisabled is true', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {okDisabled: true},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      const $okButton = $buttons[$buttons.length - 1]
      expect($okButton.attributes('disabled')).toBeDefined()
    })

    it('ok button is not disabled by default', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      const $okButton = $buttons[$buttons.length - 1]
      expect($okButton.attributes('disabled')).toBeUndefined()
    })

    it('ok button click emits ok event', async () => {
      const wrapper = mount(BModal, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {modelValue: true},
      })
      await nextTick()
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      const $okButton = $buttons[$buttons.length - 1]
      await $okButton.trigger('click')
      const okEvents = wrapper.emitted<BvTriggerableEvent[]>('ok')
      expect(okEvents).toHaveLength(1)
      expect(okEvents?.[0][0]).toBeInstanceOf(BvTriggerableEvent)
      wrapper.unmount()
    })

    it('ok slot replaces ok button', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        slots: {ok: '<span class="custom-ok">Custom OK</span>'},
      })
      const $footer = wrapper.find('.modal-footer')
      expect($footer.find('.custom-ok').exists()).toBe(true)
    })
  })

  describe('cancel button', () => {
    it('renders cancel button with default text', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      expect($buttons[0].text()).toBe('Cancel')
    })

    it('cancel button text from cancelTitle prop', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {cancelTitle: 'Dismiss'},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      expect($buttons[0].text()).toBe('Dismiss')
    })

    it('cancel button has default variant secondary', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      expect($buttons[0].classes()).toContain('btn-secondary')
    })

    it('cancel button variant from cancelVariant prop', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {cancelVariant: 'danger'},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      expect($buttons[0].classes()).toContain('btn-danger')
    })

    it('cancel button applies cancelClass', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {cancelClass: 'custom-cancel'},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      expect($buttons[0].classes()).toContain('custom-cancel')
    })

    it('cancel button is disabled when cancelDisabled is true', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {cancelDisabled: true},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      expect($buttons[0].attributes('disabled')).toBeDefined()
    })

    it('cancel button is not disabled by default', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      expect($buttons[0].attributes('disabled')).toBeUndefined()
    })

    it('cancel button is hidden when okOnly is true', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {okOnly: true},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      expect($buttons.length).toBe(1)
      expect($buttons[0].text()).toBe('OK')
    })

    it('cancel button click emits cancel event', async () => {
      const wrapper = mount(BModal, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {modelValue: true},
      })
      await nextTick()
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      await $buttons[0].trigger('click')
      const cancelEvents = wrapper.emitted<BvTriggerableEvent[]>('cancel')
      expect(cancelEvents).toHaveLength(1)
      expect(cancelEvents?.[0][0]).toBeInstanceOf(BvTriggerableEvent)
      wrapper.unmount()
    })

    it('cancel slot replaces cancel button', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        slots: {cancel: '<span class="custom-cancel">Custom Cancel</span>'},
      })
      const $footer = wrapper.find('.modal-footer')
      expect($footer.find('.custom-cancel').exists()).toBe(true)
    })
  })

  describe('button size', () => {
    it('applies buttonSize to ok and cancel buttons', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {buttonSize: 'sm'},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      expect($buttons[0].classes()).toContain('btn-sm')
      expect($buttons[1].classes()).toContain('btn-sm')
    })
  })

  describe('busy state', () => {
    it('busy disables ok button', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {busy: true},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      const $okButton = $buttons[$buttons.length - 1]
      expect($okButton.attributes('disabled')).toBeDefined()
    })

    it('busy disables cancel button', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {busy: true},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      expect($buttons[0].attributes('disabled')).toBeDefined()
    })

    it('buttons are not disabled when busy is false', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {busy: false},
      })
      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      expect($buttons[0].attributes('disabled')).toBeUndefined()
      expect($buttons[1].attributes('disabled')).toBeUndefined()
    })
  })

  describe('dialog class', () => {
    it('applies dialogClass to modal-dialog element', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {dialogClass: 'custom-dialog'},
      })
      const $dialog = wrapper.find('.modal-dialog')
      expect($dialog.classes()).toContain('custom-dialog')
    })
  })

  describe('backdrop', () => {
    it('renders backdrop when modal is shown', async () => {
      const wrapper = mount(BModal, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {modelValue: true},
      })
      await nextTick()
      expect(wrapper.find('.modal-backdrop').exists()).toBe(true)
      wrapper.unmount()
    })

    it('does not render backdrop when noBackdrop is true', async () => {
      const wrapper = mount(BModal, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {noBackdrop: true, modelValue: true},
      })
      await nextTick()
      expect(wrapper.find('.modal-backdrop').exists()).toBe(false)
      wrapper.unmount()
    })

    it('backdrop slot replaces default backdrop', async () => {
      const wrapper = mount(BModal, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {modelValue: true},
        slots: {backdrop: '<div class="custom-backdrop"></div>'},
      })
      await nextTick()
      expect(wrapper.find('.custom-backdrop').exists()).toBe(true)
      wrapper.unmount()
    })
  })

  describe('ARIA attributes', () => {
    it('aria-labelledby references title element id', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {id: 'aria-modal'},
      })
      const $modal = wrapper.find('.modal')
      expect($modal.attributes('aria-labelledby')).toBe('aria-modal-label')
    })

    it('aria-labelledby is undefined when noHeader is true', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {id: 'aria-modal', noHeader: true},
      })
      const $modal = wrapper.find('.modal')
      expect($modal.attributes('aria-labelledby')).toBeUndefined()
    })

    it('aria-describedby references body element id', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {id: 'aria-modal'},
      })
      const $modal = wrapper.find('.modal')
      expect($modal.attributes('aria-describedby')).toBe('aria-modal-body')
    })

    it('modal has role dialog', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $modal = wrapper.find('.modal')
      expect($modal.attributes('role')).toBe('dialog')
    })
  })

  describe('size', () => {
    it('does not add size class for default md', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      const $dialog = wrapper.find('.modal-dialog')
      expect($dialog.classes()).not.toContain('modal-md')
    })

    it('adds modal-sm class for size sm', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {size: 'sm'},
      })
      const $dialog = wrapper.find('.modal-dialog')
      expect($dialog.classes()).toContain('modal-sm')
    })

    it('adds modal-lg class for size lg', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {size: 'lg'},
      })
      const $dialog = wrapper.find('.modal-dialog')
      expect($dialog.classes()).toContain('modal-lg')
    })

    it('adds modal-xl class for size xl', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {size: 'xl'},
      })
      const $dialog = wrapper.find('.modal-dialog')
      expect($dialog.classes()).toContain('modal-xl')
    })
  })

  describe('exposed methods', () => {
    it('exposes show method', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      expect(typeof wrapper.vm.show).toBe('function')
    })

    it('exposes hide method', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      expect(typeof wrapper.vm.hide).toBe('function')
    })

    it('exposes toggle method', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      expect(typeof wrapper.vm.toggle).toBe('function')
    })

    it('exposes id', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {id: 'exposed-id'},
      })
      expect(wrapper.vm.id).toBe('exposed-id')
    })

    it('exposes visible ref', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
      })
      expect(wrapper.vm.visible).toBeDefined()
    })

    it('show method opens modal', async () => {
      const wrapper = mount(BModal, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {id: 'test'},
      })
      expect(wrapper.find('div.modal').isVisible()).toBe(false)
      wrapper.vm.show()
      await new Promise((resolve) => setTimeout(resolve, 30))
      expect(wrapper.find('div.modal').isVisible()).toBe(true)
      wrapper.unmount()
    })

    it('hide method closes modal', async () => {
      const wrapper = mount(BModal, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {modelValue: true, id: 'test'},
      })
      await nextTick()
      expect(wrapper.find('div.modal').isVisible()).toBe(true)
      wrapper.vm.hide()
      await new Promise((resolve) => setTimeout(resolve, 30))
      expect(wrapper.find('div.modal').isVisible()).toBe(false)
      wrapper.unmount()
    })

    it('toggle method toggles modal visibility', async () => {
      const wrapper = mount(BModal, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {id: 'test'},
      })
      expect(wrapper.find('div.modal').isVisible()).toBe(false)
      wrapper.vm.toggle()
      await new Promise((resolve) => setTimeout(resolve, 30))
      expect(wrapper.find('div.modal').isVisible()).toBe(true)
      wrapper.vm.toggle()
      await new Promise((resolve) => setTimeout(resolve, 30))
      expect(wrapper.find('div.modal').isVisible()).toBe(false)
      wrapper.unmount()
    })
  })

  describe('modal events', () => {
    it('cancel button event is preventable', async () => {
      let preventCancel = true
      const wrapper = mount(BModal, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {modelValue: true, id: 'test'},
        attrs: {
          onCancel: (bvEvent: BvTriggerableEvent) => {
            if (preventCancel) bvEvent.preventDefault()
          },
        },
      })
      await nextTick()

      const $footer = wrapper.find('.modal-footer')
      const [$cancelBtn] = $footer.findAll('button')
      await $cancelBtn.trigger('click')

      const cancelEvents = wrapper.emitted<BvTriggerableEvent[]>('cancel')
      expect(cancelEvents).toHaveLength(1)
      expect(wrapper.find('div.modal').isVisible()).toBe(true)

      preventCancel = false
      await $cancelBtn.trigger('click')
      await new Promise((resolve) => setTimeout(resolve, 30))
      expect(wrapper.find('div.modal').isVisible()).toBe(false)

      wrapper.unmount()
    })

    it('ok button event is preventable', async () => {
      let preventOk = true
      const wrapper = mount(BModal, {
        attachTo: document.body,
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {modelValue: true, id: 'test'},
        attrs: {
          onOk: (bvEvent: BvTriggerableEvent) => {
            if (preventOk) bvEvent.preventDefault()
          },
        },
      })
      await nextTick()

      const $footer = wrapper.find('.modal-footer')
      const $buttons = $footer.findAll('button')
      const $okBtn = $buttons[$buttons.length - 1]
      await $okBtn.trigger('click')

      const okEvents = wrapper.emitted<BvTriggerableEvent[]>('ok')
      expect(okEvents).toHaveLength(1)
      expect(wrapper.find('div.modal').isVisible()).toBe(true)

      preventOk = false
      await $okBtn.trigger('click')
      await new Promise((resolve) => setTimeout(resolve, 30))
      expect(wrapper.find('div.modal').isVisible()).toBe(false)

      wrapper.unmount()
    })
  })

  describe('content class', () => {
    it('applies contentClass to modal-content element', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        props: {contentClass: 'custom-content'},
      })
      const $content = wrapper.find('.modal-content')
      expect($content.classes()).toContain('custom-content')
    })
  })

  describe('inheritAttrs', () => {
    it('does not apply attrs to component root', () => {
      const wrapper = mount(BModal, {
        global: {stubs: {teleport: true}, plugins: [createBootstrap()]},
        attrs: {'data-testid': 'my-modal'},
      })
      const $modal = wrapper.find('.modal')
      expect($modal.attributes('data-testid')).toBe('my-modal')
    })
  })
})
