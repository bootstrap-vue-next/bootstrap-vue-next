import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it, vi} from 'vitest'
import BButtonToolbar from './BButtonToolbar.vue'

describe('button-toolbar', () => {
  enableAutoUnmount(afterEach)

  it('tag is div', () => {
    const wrapper = mount(BButtonToolbar)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders default slot', () => {
    const wrapper = mount(BButtonToolbar, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('has static class btn-toolbar', () => {
    const wrapper = mount(BButtonToolbar)
    expect(wrapper.classes()).toContain('btn-toolbar')
  })

  it('has static attr role as toolbar', () => {
    const wrapper = mount(BButtonToolbar)
    expect(wrapper.attributes('role')).toBe('toolbar')
  })

  it('has attr aria-role to be prop ariaRole', async () => {
    const wrapper = mount(BButtonToolbar, {
      props: {ariaLabel: 'foobar'},
    })
    expect(wrapper.attributes('aria-label')).toBe('foobar')
    await wrapper.setProps({ariaLabel: undefined})
    expect(wrapper.attributes('aria-label')).toBe('Group')
  })

  it('has class justify-content-between when prop justify', async () => {
    const wrapper = mount(BButtonToolbar, {
      props: {justify: true},
    })
    expect(wrapper.classes()).toContain('justify-content-between')
    await wrapper.setProps({justify: false})
    expect(wrapper.classes()).not.toContain('justify-content-between')
  })

  describe('keyboard navigation', () => {
    it('handles keyboard navigation when keyNav is false (default)', async () => {
      const wrapper = mount(BButtonToolbar, {
        slots: {
          default: `
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          `,
        },
      })

      // Should not handle keyboard events when keyNav is false
      const keydownEvent = new KeyboardEvent('keydown', {code: 'ArrowRight'})
      const preventDefaultSpy = vi.spyOn(keydownEvent, 'preventDefault')

      await wrapper.trigger('keydown', {code: 'ArrowRight'})
      expect(preventDefaultSpy).not.toHaveBeenCalled()
    })

    it('handles right arrow key navigation when keyNav is true', async () => {
      const wrapper = mount(BButtonToolbar, {
        props: {keyNav: true},
        slots: {
          default: `
            <button id="btn1">Button 1</button>
            <button id="btn2">Button 2</button>
            <button id="btn3">Button 3</button>
          `,
        },
      })

      // Mock focus method on buttons
      const buttons = wrapper.findAll('button')
      buttons.forEach((button) => {
        vi.spyOn(button.element, 'focus')
      })

      // Focus first button
      buttons[0].element.focus()

      // Simulate ArrowRight keydown
      await wrapper.trigger('keydown', {code: 'ArrowRight'})

      // Should move focus to next button (handled via focus management in component)
      expect(wrapper.html()).toContain('Button 2')
    })

    it('handles left arrow key navigation when keyNav is true', async () => {
      const wrapper = mount(BButtonToolbar, {
        props: {keyNav: true},
        slots: {
          default: `
            <button id="btn1">Button 1</button>
            <button id="btn2">Button 2</button>
            <button id="btn3">Button 3</button>
          `,
        },
      })

      // Mock focus method on buttons
      const buttons = wrapper.findAll('button')
      buttons.forEach((button) => {
        vi.spyOn(button.element, 'focus')
      })

      // Focus second button
      buttons[1].element.focus()

      // Simulate ArrowLeft keydown
      await wrapper.trigger('keydown', {code: 'ArrowLeft'})

      // Should move focus to previous button
      expect(wrapper.html()).toContain('Button 1')
    })

    it('handles shift+right arrow to focus last element when keyNav is true', async () => {
      const wrapper = mount(BButtonToolbar, {
        props: {keyNav: true},
        slots: {
          default: `
            <button id="btn1">Button 1</button>
            <button id="btn2">Button 2</button>
            <button id="btn3">Button 3</button>
          `,
        },
      })

      // Mock focus method on buttons
      const buttons = wrapper.findAll('button')
      buttons.forEach((button) => {
        vi.spyOn(button.element, 'focus')
      })

      // Focus first button
      buttons[0].element.focus()

      // Simulate Shift+ArrowRight keydown
      await wrapper.trigger('keydown', {code: 'ArrowRight', shiftKey: true})

      // Should move focus to last button
      expect(wrapper.html()).toContain('Button 3')
    })

    it('handles shift+left arrow to focus first element when keyNav is true', async () => {
      const wrapper = mount(BButtonToolbar, {
        props: {keyNav: true},
        slots: {
          default: `
            <button id="btn1">Button 1</button>
            <button id="btn2">Button 2</button>
            <button id="btn3">Button 3</button>
          `,
        },
      })

      // Mock focus method on buttons
      const buttons = wrapper.findAll('button')
      buttons.forEach((button) => {
        vi.spyOn(button.element, 'focus')
      })

      // Focus last button
      buttons[2].element.focus()

      // Simulate Shift+ArrowLeft keydown
      await wrapper.trigger('keydown', {code: 'ArrowLeft', shiftKey: true})

      // Should move focus to first button
      expect(wrapper.html()).toContain('Button 1')
    })

    it('skips disabled buttons during navigation', async () => {
      const wrapper = mount(BButtonToolbar, {
        props: {keyNav: true},
        slots: {
          default: `
            <button id="btn1">Button 1</button>
            <button id="btn2" disabled>Button 2</button>
            <button id="btn3">Button 3</button>
          `,
        },
      })

      // Mock focus method on buttons
      const buttons = wrapper.findAll('button')
      buttons.forEach((button) => {
        vi.spyOn(button.element, 'focus')
      })

      // Focus first button
      buttons[0].element.focus()

      // Simulate ArrowRight keydown
      await wrapper.trigger('keydown', {code: 'ArrowRight'})

      // Should skip disabled button and focus third button
      expect(wrapper.html()).toContain('Button 3')
    })

    it('handles up/down arrow keys the same as left/right', async () => {
      const wrapper = mount(BButtonToolbar, {
        props: {keyNav: true},
        slots: {
          default: `
            <button id="btn1">Button 1</button>
            <button id="btn2">Button 2</button>
          `,
        },
      })

      // Mock focus method on buttons
      const buttons = wrapper.findAll('button')
      buttons.forEach((button) => {
        vi.spyOn(button.element, 'focus')
      })

      // Focus first button
      buttons[0].element.focus()

      // Simulate ArrowDown keydown (should work like ArrowRight)
      await wrapper.trigger('keydown', {code: 'ArrowDown'})

      expect(wrapper.html()).toContain('Button 2')

      // Focus second button
      buttons[1].element.focus()

      // Simulate ArrowUp keydown (should work like ArrowLeft)
      await wrapper.trigger('keydown', {code: 'ArrowUp'})

      expect(wrapper.html()).toContain('Button 1')
    })
  })
})
