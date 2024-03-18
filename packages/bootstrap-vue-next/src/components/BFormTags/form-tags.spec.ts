import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe} from 'node:test'
import {expect, it} from 'vitest'
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
})
