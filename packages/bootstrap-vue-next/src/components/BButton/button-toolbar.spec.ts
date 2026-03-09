import {enableAutoUnmount, mount} from '@vue/test-utils'
import type {DOMWrapper} from '@vue/test-utils'
import {nextTick} from 'vue'
import {afterEach, describe, expect, it, vi} from 'vitest'
import BButtonToolbar from './BButtonToolbar.vue'

/**
 * Spy on the `focus` method of each button element, set initial focus on the
 * button at `initialFocusIndex`, then clear the call histories so only
 * subsequent calls (e.g. from a keyboard event) are captured.
 */
const setupFocusSpies = (buttons: DOMWrapper<HTMLButtonElement>[], initialFocusIndex: number) => {
  const focusSpies = buttons.map((button) => vi.spyOn(button.element, 'focus'))
  buttons[initialFocusIndex].element.focus()
  focusSpies.forEach((spy) => spy.mockClear())
  return focusSpies
}

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

  it('has attr aria-label to be prop ariaLabel', async () => {
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
    it('does not move focus when keyNav is false (default)', async () => {
      const wrapper = mount(BButtonToolbar, {
        attachTo: document.body,
        slots: {
          default: `
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          `,
        },
      })

      const buttons = wrapper.findAll('button')
      const focusSpies = buttons.map((button) => vi.spyOn(button.element, 'focus'))

      await wrapper.trigger('keydown', {code: 'ArrowRight'})
      await nextTick()

      focusSpies.forEach((spy) => expect(spy).not.toHaveBeenCalled())
    })

    it('does not move focus on Home/End keys when keyNav is false', async () => {
      const wrapper = mount(BButtonToolbar, {
        attachTo: document.body,
        props: {keyNav: false},
        slots: {
          default: `
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          `,
        },
      })

      const buttons = wrapper.findAll('button')
      const focusSpies = buttons.map((button) => vi.spyOn(button.element, 'focus'))

      await wrapper.trigger('keydown', {code: 'Home'})
      await wrapper.trigger('keydown', {code: 'End'})
      await nextTick()

      focusSpies.forEach((spy) => expect(spy).not.toHaveBeenCalled())
    })

    it('focuses next button on ArrowRight when keyNav is true', async () => {
      const wrapper = mount(BButtonToolbar, {
        attachTo: document.body,
        props: {keyNav: true},
        slots: {
          default: `
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          `,
        },
      })

      const buttons = wrapper.findAll('button')
      const focusSpies = setupFocusSpies(buttons, 0)

      await wrapper.trigger('keydown', {code: 'ArrowRight'})
      await nextTick()

      expect(focusSpies[1]).toHaveBeenCalled()
      expect(focusSpies[0]).not.toHaveBeenCalled()
      expect(focusSpies[2]).not.toHaveBeenCalled()
    })

    it('focuses previous button on ArrowLeft when keyNav is true', async () => {
      const wrapper = mount(BButtonToolbar, {
        attachTo: document.body,
        props: {keyNav: true},
        slots: {
          default: `
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          `,
        },
      })

      const buttons = wrapper.findAll('button')
      const focusSpies = setupFocusSpies(buttons, 1)

      await wrapper.trigger('keydown', {code: 'ArrowLeft'})
      await nextTick()

      expect(focusSpies[0]).toHaveBeenCalled()
      expect(focusSpies[1]).not.toHaveBeenCalled()
      expect(focusSpies[2]).not.toHaveBeenCalled()
    })

    it('focuses last button on Shift+ArrowRight when keyNav is true', async () => {
      const wrapper = mount(BButtonToolbar, {
        attachTo: document.body,
        props: {keyNav: true},
        slots: {
          default: `
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          `,
        },
      })

      const buttons = wrapper.findAll('button')
      const focusSpies = setupFocusSpies(buttons, 0)

      await wrapper.trigger('keydown', {code: 'ArrowRight', shiftKey: true})
      await nextTick()

      expect(focusSpies[2]).toHaveBeenCalled()
      expect(focusSpies[0]).not.toHaveBeenCalled()
      expect(focusSpies[1]).not.toHaveBeenCalled()
    })

    it('focuses first button on Shift+ArrowLeft when keyNav is true', async () => {
      const wrapper = mount(BButtonToolbar, {
        attachTo: document.body,
        props: {keyNav: true},
        slots: {
          default: `
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          `,
        },
      })

      const buttons = wrapper.findAll('button')
      const focusSpies = setupFocusSpies(buttons, 2)

      await wrapper.trigger('keydown', {code: 'ArrowLeft', shiftKey: true})
      await nextTick()

      expect(focusSpies[0]).toHaveBeenCalled()
      expect(focusSpies[1]).not.toHaveBeenCalled()
      expect(focusSpies[2]).not.toHaveBeenCalled()
    })

    it('focuses next button on ArrowDown (same as ArrowRight) when keyNav is true', async () => {
      const wrapper = mount(BButtonToolbar, {
        attachTo: document.body,
        props: {keyNav: true},
        slots: {
          default: `
            <button>Button 1</button>
            <button>Button 2</button>
          `,
        },
      })

      const buttons = wrapper.findAll('button')
      const focusSpies = setupFocusSpies(buttons, 0)

      await wrapper.trigger('keydown', {code: 'ArrowDown'})
      await nextTick()

      expect(focusSpies[1]).toHaveBeenCalled()
      expect(focusSpies[0]).not.toHaveBeenCalled()
    })

    it('focuses previous button on ArrowUp (same as ArrowLeft) when keyNav is true', async () => {
      const wrapper = mount(BButtonToolbar, {
        attachTo: document.body,
        props: {keyNav: true},
        slots: {
          default: `
            <button>Button 1</button>
            <button>Button 2</button>
          `,
        },
      })

      const buttons = wrapper.findAll('button')
      const focusSpies = setupFocusSpies(buttons, 1)

      await wrapper.trigger('keydown', {code: 'ArrowUp'})
      await nextTick()

      expect(focusSpies[0]).toHaveBeenCalled()
      expect(focusSpies[1]).not.toHaveBeenCalled()
    })

    it('focuses first button on Home when keyNav is true', async () => {
      const wrapper = mount(BButtonToolbar, {
        attachTo: document.body,
        props: {keyNav: true},
        slots: {
          default: `
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          `,
        },
      })

      const buttons = wrapper.findAll('button')
      const focusSpies = setupFocusSpies(buttons, 2)

      await wrapper.trigger('keydown', {code: 'Home'})
      await nextTick()

      expect(focusSpies[0]).toHaveBeenCalled()
      expect(focusSpies[1]).not.toHaveBeenCalled()
      expect(focusSpies[2]).not.toHaveBeenCalled()
    })

    it('focuses last button on End when keyNav is true', async () => {
      const wrapper = mount(BButtonToolbar, {
        attachTo: document.body,
        props: {keyNav: true},
        slots: {
          default: `
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          `,
        },
      })

      const buttons = wrapper.findAll('button')
      const focusSpies = setupFocusSpies(buttons, 0)

      await wrapper.trigger('keydown', {code: 'End'})
      await nextTick()

      expect(focusSpies[2]).toHaveBeenCalled()
      expect(focusSpies[0]).not.toHaveBeenCalled()
      expect(focusSpies[1]).not.toHaveBeenCalled()
    })

    it('skips disabled buttons on ArrowRight when keyNav is true', async () => {
      const wrapper = mount(BButtonToolbar, {
        attachTo: document.body,
        props: {keyNav: true},
        slots: {
          default: `
            <button>Button 1</button>
            <button disabled>Button 2</button>
            <button>Button 3</button>
          `,
        },
      })

      const buttons = wrapper.findAll('button')
      const focusSpies = setupFocusSpies(buttons, 0)

      await wrapper.trigger('keydown', {code: 'ArrowRight'})
      await nextTick()

      expect(focusSpies[2]).toHaveBeenCalled()
      expect(focusSpies[0]).not.toHaveBeenCalled()
      expect(focusSpies[1]).not.toHaveBeenCalled()
    })

    it('skips disabled buttons on ArrowLeft when keyNav is true', async () => {
      const wrapper = mount(BButtonToolbar, {
        attachTo: document.body,
        props: {keyNav: true},
        slots: {
          default: `
            <button>Button 1</button>
            <button disabled>Button 2</button>
            <button>Button 3</button>
          `,
        },
      })

      const buttons = wrapper.findAll('button')
      const focusSpies = setupFocusSpies(buttons, 2)

      await wrapper.trigger('keydown', {code: 'ArrowLeft'})
      await nextTick()

      expect(focusSpies[0]).toHaveBeenCalled()
      expect(focusSpies[1]).not.toHaveBeenCalled()
      expect(focusSpies[2]).not.toHaveBeenCalled()
    })

    it('Home key focuses first enabled button, skipping disabled ones', async () => {
      const wrapper = mount(BButtonToolbar, {
        attachTo: document.body,
        props: {keyNav: true},
        slots: {
          default: `
            <button disabled>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          `,
        },
      })

      const buttons = wrapper.findAll('button')
      const focusSpies = setupFocusSpies(buttons, 2)

      await wrapper.trigger('keydown', {code: 'Home'})
      await nextTick()

      expect(focusSpies[1]).toHaveBeenCalled()
      expect(focusSpies[0]).not.toHaveBeenCalled()
      expect(focusSpies[2]).not.toHaveBeenCalled()
    })

    it('End key focuses last enabled button, skipping disabled ones', async () => {
      const wrapper = mount(BButtonToolbar, {
        attachTo: document.body,
        props: {keyNav: true},
        slots: {
          default: `
            <button>Button 1</button>
            <button>Button 2</button>
            <button disabled>Button 3</button>
          `,
        },
      })

      const buttons = wrapper.findAll('button')
      const focusSpies = setupFocusSpies(buttons, 0)

      await wrapper.trigger('keydown', {code: 'End'})
      await nextTick()

      expect(focusSpies[1]).toHaveBeenCalled()
      expect(focusSpies[0]).not.toHaveBeenCalled()
      expect(focusSpies[2]).not.toHaveBeenCalled()
    })

    it('does not move focus past last button on ArrowRight', async () => {
      const wrapper = mount(BButtonToolbar, {
        attachTo: document.body,
        props: {keyNav: true},
        slots: {
          default: `
            <button>Button 1</button>
            <button>Button 2</button>
          `,
        },
      })

      const buttons = wrapper.findAll('button')
      const focusSpies = setupFocusSpies(buttons, 1)

      await wrapper.trigger('keydown', {code: 'ArrowRight'})
      await nextTick()

      focusSpies.forEach((spy) => expect(spy).not.toHaveBeenCalled())
    })

    it('does not move focus past first button on ArrowLeft', async () => {
      const wrapper = mount(BButtonToolbar, {
        attachTo: document.body,
        props: {keyNav: true},
        slots: {
          default: `
            <button>Button 1</button>
            <button>Button 2</button>
          `,
        },
      })

      const buttons = wrapper.findAll('button')
      const focusSpies = setupFocusSpies(buttons, 0)

      await wrapper.trigger('keydown', {code: 'ArrowLeft'})
      await nextTick()

      focusSpies.forEach((spy) => expect(spy).not.toHaveBeenCalled())
    })
  })
})
