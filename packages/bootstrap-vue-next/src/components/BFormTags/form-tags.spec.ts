import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BFormTags from './BFormTags.vue'

// Add unit testing only for limitTag
describe('form-tags', () => {
  enableAutoUnmount(afterEach)

  describe('BFormTags attributes', () => {
    it('tag is div', () => {
      const wrapper = mount(BFormTags)
      expect(wrapper.element.tagName).toBe('DIV')
    })

    it('should show limitTagsText when it´s defined', () => {
      const wrapper = mount(BFormTags, {
        props: {
          limit: 2,
          limitTagsText: 'Foo',
          modelValue: ['apple', 'orange'],
        },
      })

      const $smallElement = wrapper.get('small')
      expect($smallElement.text()).toBe('Foo')
    })
  })

  describe('feedbackAriaLive behavior', () => {
    it('sets aria-live to assertive by default', () => {
      const wrapper = mount(BFormTags)
      const feedbackDiv = wrapper.find('.b-form-tags > div[aria-atomic="true"]:last-child')
      expect(feedbackDiv.exists()).toBe(true)
      expect(feedbackDiv.attributes('aria-live')).toBe('assertive')
    })

    it('sets aria-live to polite when feedbackAriaLive is polite', () => {
      const wrapper = mount(BFormTags, {
        props: {feedbackAriaLive: 'polite'},
      })
      const feedbackDiv = wrapper.find('.b-form-tags > div[aria-atomic="true"]:last-child')
      expect(feedbackDiv.exists()).toBe(true)
      expect(feedbackDiv.attributes('aria-live')).toBe('polite')
    })

    it('sets aria-live to off when feedbackAriaLive is off', () => {
      const wrapper = mount(BFormTags, {
        props: {feedbackAriaLive: 'off'},
      })
      const feedbackDiv = wrapper.find('.b-form-tags > div[aria-atomic="true"]:last-child')
      expect(feedbackDiv.exists()).toBe(true)
      expect(feedbackDiv.attributes('aria-live')).toBe('off')
    })
  })

  describe('ignoreInputFocusSelector behavior', () => {
    it('focuses the input when clicking on the wrapper area', async () => {
      const wrapper = mount(BFormTags, {
        props: {ignoreInputFocusSelector: []},
        attachTo: document.body,
      })
      const rootDiv = wrapper.find('.b-form-tags')
      await rootDiv.trigger('click')
      const input = wrapper.find('.b-form-tags-input')
      expect(input.element).toBe(document.activeElement)
    })

    it('does not focus the input when clicking on an element matching the default ignore selector', async () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['tag1']},
        attachTo: document.body,
      })
      const button = wrapper.find('button')
      await button.trigger('click')
      const input = wrapper.find('.b-form-tags-input')
      expect(input.element).not.toBe(document.activeElement)
    })

    it('accepts a string selector', async () => {
      const wrapper = mount(BFormTags, {
        props: {ignoreInputFocusSelector: '.custom-ignore'},
        attachTo: document.body,
      })
      // Click on the root - no element matches '.custom-ignore'
      const rootDiv = wrapper.find('.b-form-tags')
      await rootDiv.trigger('click')
      const input = wrapper.find('.b-form-tags-input')
      expect(input.element).toBe(document.activeElement)
    })

    it('does not focus input when disabled', async () => {
      const wrapper = mount(BFormTags, {
        props: {disabled: true, ignoreInputFocusSelector: []},
        attachTo: document.body,
      })
      const rootDiv = wrapper.find('.b-form-tags')
      await rootDiv.trigger('click')
      const input = wrapper.find('.b-form-tags-input')
      expect(input.element).not.toBe(document.activeElement)
    })

    it('does not focus input when noOuterFocus is true', async () => {
      const wrapper = mount(BFormTags, {
        props: {noOuterFocus: true, ignoreInputFocusSelector: []},
        attachTo: document.body,
      })
      const rootDiv = wrapper.find('.b-form-tags')
      await rootDiv.trigger('click')
      const input = wrapper.find('.b-form-tags-input')
      expect(input.element).not.toBe(document.activeElement)
    })
  })
})
