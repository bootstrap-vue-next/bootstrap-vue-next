import {enableAutoUnmount, flushPromises, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it, vi} from 'vitest'
import {nextTick} from 'vue'
import VBToggle from './BToggle'

// Emitted control event for collapse (emitted to collapse)
const EVENT_TOGGLE = 'bv-toggle'

describe('toggle directive', () => {
  enableAutoUnmount(afterEach)

  it('works on buttons', async () => {
    const spy = vi.fn()
    const App = {
      directives: {
        bToggle: VBToggle,
      },
      mounted() {
        document.getElementById('test')?.addEventListener(EVENT_TOGGLE, spy)
      },
      destroy() {
        document.getElementById('test')?.removeEventListener(EVENT_TOGGLE, spy)
      },
      template: '<button v-b-toggle.test>button</button><div id="test"></div>',
    }

    const wrapper = mount(App, {attachTo: document.body})

    await flushPromises()
    await nextTick()

    expect(wrapper.vm).toBeDefined()
    expect(spy).not.toHaveBeenCalled()

    const $button = wrapper.find('button')
    expect($button.attributes('aria-controls')).toBe('test')
    expect($button.attributes('aria-expanded')).toBe('false')
    expect($button.attributes('tabindex')).toBeUndefined()
    expect($button.classes()).toContain('collapsed')
    expect($button.classes()).not.toContain('not-collapsed')

    await $button.trigger('click')
    expect(spy).toHaveBeenCalledTimes(1)

    // Since there is no target collapse to respond with the
    // current state, the classes and attrs remain the same
    expect($button.attributes('aria-controls')).toBe('test')
    expect($button.attributes('aria-expanded')).toBe('false')
    expect($button.attributes('tabindex')).toBeUndefined()
    expect($button.classes()).toContain('collapsed')
    expect($button.classes()).not.toContain('not-collapsed')
  })

  it('works on passing ID as directive value', async () => {
    const spy = vi.fn()
    const App = {
      directives: {
        bToggle: VBToggle,
      },
      mounted() {
        document.getElementById('test')?.addEventListener(EVENT_TOGGLE, spy)
      },
      destroy() {
        document.getElementById('test')?.removeEventListener(EVENT_TOGGLE, spy)
      },
      template: `<button v-b-toggle="'test'">button</button><div id="test"></div>`,
    }

    const wrapper = mount(App, {attachTo: document.body})

    await flushPromises()
    await nextTick()

    expect(wrapper.vm).toBeDefined()
    expect(spy).not.toHaveBeenCalled()

    const $button = wrapper.find('button')
    expect($button.attributes('aria-controls')).toBe('test')
    expect($button.attributes('aria-expanded')).toBe('false')
    expect($button.classes()).toContain('collapsed')
    expect($button.classes()).not.toContain('not-collapsed')

    await $button.trigger('click')
    expect(spy).toHaveBeenCalledTimes(1)

    // Since there is no target collapse to respond with the
    // current state, the classes and attrs remain the same
    expect($button.attributes('aria-controls')).toBe('test')
    expect($button.attributes('aria-expanded')).toBe('false')
    expect($button.classes()).toContain('collapsed')
    expect($button.classes()).not.toContain('not-collapsed')
  })

  it('works on passing ID as directive argument', async () => {
    const spy = vi.fn()
    const App = {
      directives: {
        bToggle: VBToggle,
      },
      mounted() {
        document.getElementById('test')?.addEventListener(EVENT_TOGGLE, spy)
      },
      destroy() {
        document.getElementById('test')?.removeEventListener(EVENT_TOGGLE, spy)
      },
      template: `<button v-b-toggle:test>button</button><div id="test"></div>`,
    }

    const wrapper = mount(App, {attachTo: document.body})

    await flushPromises()
    await nextTick()

    expect(wrapper.vm).toBeDefined()
    expect(spy).not.toHaveBeenCalled()

    const $button = wrapper.find('button')
    expect($button.attributes('aria-controls')).toBe('test')
    expect($button.attributes('aria-expanded')).toBe('false')
    expect($button.classes()).toContain('collapsed')
    expect($button.classes()).not.toContain('not-collapsed')

    await $button.trigger('click')
    expect(spy).toHaveBeenCalledTimes(1)

    // Since there is no target collapse to respond with the
    // current state, the classes and attrs remain the same
    expect($button.attributes('aria-controls')).toBe('test')
    expect($button.attributes('aria-expanded')).toBe('false')
    expect($button.classes()).toContain('collapsed')
    expect($button.classes()).not.toContain('not-collapsed')
  })

  it('works on passing ID as href value on links', async () => {
    const spy = vi.fn()
    const App = {
      directives: {
        bToggle: VBToggle,
      },
      mounted() {
        document.getElementById('test')?.addEventListener(EVENT_TOGGLE, spy)
      },
      destroy() {
        document.getElementById('test')?.removeEventListener(EVENT_TOGGLE, spy)
      },
      template: '<a href="#test" v-b-toggle>link</a><div id="test"></div>',
    }

    const wrapper = mount(App, {attachTo: document.body})

    await flushPromises()
    await nextTick()

    expect(wrapper.vm).toBeDefined()
    expect(spy).not.toHaveBeenCalled()

    const $link = wrapper.find('a')
    expect($link.attributes('aria-controls')).toBe('test')
    expect($link.attributes('aria-expanded')).toBe('false')
    expect($link.attributes('tabindex')).toBeUndefined()
    expect($link.classes()).toContain('collapsed')
    expect($link.classes()).not.toContain('not-collapsed')

    await $link.trigger('click')
    expect(spy).toHaveBeenCalledTimes(1)

    // Since there is no target collapse to respond with the
    // current state, the classes and attrs remain the same
    expect($link.attributes('aria-controls')).toBe('test')
    expect($link.attributes('aria-expanded')).toBe('false')
    expect($link.attributes('tabindex')).toBeUndefined()
    expect($link.classes()).toContain('collapsed')
    expect($link.classes()).not.toContain('not-collapsed')
  })

  // Does not currently support dynamic updates to target list (bootstrap-vue does)
  it.skip('works with multiple targets, and updates when targets change', async () => {
    const spy1 = vi.fn()
    const spy2 = vi.fn()
    const App = {
      directives: {
        bToggle: VBToggle,
      },
      props: {
        target: {
          type: [String, Array],
          default: null,
        },
      },
      mounted() {
        document.getElementById('test')?.addEventListener(EVENT_TOGGLE, spy1)
        document.getElementById('test')?.addEventListener(EVENT_TOGGLE, spy2)
      },
      destroy() {
        document.getElementById('test')?.removeEventListener(EVENT_TOGGLE, spy1)
        document.getElementById('test')?.removeEventListener(EVENT_TOGGLE, spy2)
      },
      template: `<button v-b-toggle="target">button</button><div id="test1"></div><div id="test2"></div>`,
    }

    const wrapper = mount(App, {
      attachTo: document.body,
      props: {
        target: 'test1',
      },
    })

    await flushPromises()
    await nextTick()

    expect(wrapper.vm).toBeDefined()
    expect(spy1).not.toHaveBeenCalled()
    expect(spy2).not.toHaveBeenCalled()

    const $button = wrapper.find('button')
    expect($button.attributes('aria-controls')).toBe('test1')
    expect($button.attributes('aria-expanded')).toBe('false')
    expect($button.classes()).toContain('collapsed')
    expect($button.classes()).not.toContain('not-collapsed')

    await wrapper.setProps({target: ['test1', 'test2']})
    expect($button.attributes('aria-controls')).toBe('test1 test2')
    expect($button.attributes('aria-expanded')).toBe('false')
    expect($button.classes()).toContain('collapsed')
    expect($button.classes()).not.toContain('not-collapsed')
    expect(spy1).not.toHaveBeenCalled()
    expect(spy2).not.toHaveBeenCalled()

    await $button.trigger('click')
    expect(spy1).toHaveBeenCalledTimes(1)
    expect(spy2).toHaveBeenCalledTimes(1)

    // Since there is no target collapse to respond with the
    // current state, the classes and attrs remain the same
    expect($button.attributes('aria-controls')).toBe('test1 test2')
    expect($button.attributes('aria-expanded')).toBe('false')
    expect($button.classes()).toContain('collapsed')
    expect($button.classes()).not.toContain('not-collapsed')

    await wrapper.setProps({target: ['test2']})
    expect($button.attributes('aria-controls')).toBe('test2')
    expect($button.attributes('aria-expanded')).toBe('false')
    expect($button.classes()).toContain('collapsed')
    expect($button.classes()).not.toContain('not-collapsed')
    expect(spy1).toHaveBeenCalledTimes(1)
    expect(spy2).toHaveBeenCalledTimes(1)

    await $button.trigger('click')
    expect(spy1).toHaveBeenCalledTimes(1)
    expect(spy2).toHaveBeenCalledTimes(2)

    // Since there is no target collapse to respond with the
    // current state, the classes and attrs remain the same
    expect($button.attributes('aria-controls')).toBe('test2')
    expect($button.attributes('aria-expanded')).toBe('false')
    expect($button.classes()).toContain('collapsed')
    expect($button.classes()).not.toContain('not-collapsed')
  })

  it('works on non-buttons', async () => {
    const spy = vi.fn()
    const App = {
      directives: {
        bToggle: VBToggle,
      },
      data() {
        return {
          text: 'span',
        }
      },
      mounted() {
        document.getElementById('test')?.addEventListener(EVENT_TOGGLE, spy)
      },
      destroy() {
        document.getElementById('test')?.removeEventListener(EVENT_TOGGLE, spy)
      },
      template:
        '<span v-b-toggle.test role="button" tabindex="0">{{ text }}</span><div id="test"></div>',
    }

    const wrapper = mount(App, {attachTo: document.body})

    await flushPromises()
    await nextTick()

    expect(wrapper.vm).toBeDefined()
    expect(spy).not.toHaveBeenCalled()

    const $span = wrapper.find('span')
    expect($span.attributes('role')).toBe('button')
    expect($span.attributes('tabindex')).toBe('0')
    expect($span.attributes('aria-controls')).toBe('test')
    expect($span.attributes('aria-expanded')).toBe('false')
    expect($span.classes()).toContain('collapsed')
    expect($span.classes()).not.toContain('not-collapsed')
    expect($span.text()).toBe('span')

    await $span.trigger('click')
    expect(spy).toHaveBeenCalledTimes(1)
    expect($span.attributes('role')).toBe('button')
    expect($span.attributes('tabindex')).toBe('0')

    // Since there is no target collapse to respond with the
    // current state, the classes and attrs remain the same
    expect($span.attributes('aria-controls')).toBe('test')
    expect($span.attributes('aria-expanded')).toBe('false')
    expect($span.classes()).toContain('collapsed')
    expect($span.classes()).not.toContain('not-collapsed')

    // Test updating component, should maintain role attribute
    await wrapper.setData({text: 'foobar'})
    expect($span.text()).toBe('foobar')
    expect($span.attributes('role')).toBe('button')
    expect($span.attributes('tabindex')).toBe('0')

    // Since there is no target collapse to respond with the
    // current state, the classes and attrs remain the same
    expect($span.attributes('aria-controls')).toBe('test')
    expect($span.attributes('aria-expanded')).toBe('false')
    expect($span.classes()).toContain('collapsed')
    expect($span.classes()).not.toContain('not-collapsed')
  })
})
