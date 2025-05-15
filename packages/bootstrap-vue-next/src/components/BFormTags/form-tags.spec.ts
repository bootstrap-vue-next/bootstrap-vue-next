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
})
