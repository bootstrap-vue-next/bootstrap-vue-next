import {enableAutoUnmount, mount} from '@vue/test-utils'
import {h, nextTick} from 'vue'
import {afterEach, describe, expect, it} from 'vitest'
import BFormTags from './BFormTags.vue'
import BFormTag from './BFormTag.vue'

describe('form-tags', () => {
  enableAutoUnmount(afterEach)

  describe('rendering', () => {
    it('tag is div', () => {
      const wrapper = mount(BFormTags)
      expect(wrapper.element.tagName).toBe('DIV')
    })

    it('has static class b-form-tags', () => {
      const wrapper = mount(BFormTags)
      expect(wrapper.classes()).toContain('b-form-tags')
    })

    it('has static class form-control', () => {
      const wrapper = mount(BFormTags)
      expect(wrapper.classes()).toContain('form-control')
    })

    it('has static class h-auto', () => {
      const wrapper = mount(BFormTags)
      expect(wrapper.classes()).toContain('h-auto')
    })

    it('has role group', () => {
      const wrapper = mount(BFormTags)
      expect(wrapper.attributes('role')).toBe('group')
    })

    it('has tabindex -1', () => {
      const wrapper = mount(BFormTags)
      expect(wrapper.attributes('tabindex')).toBe('-1')
    })

    it('generates an id', () => {
      const wrapper = mount(BFormTags)
      expect(wrapper.attributes('id')).toBeDefined()
    })

    it('renders the tags list ul', () => {
      const wrapper = mount(BFormTags)
      const ul = wrapper.find('.b-form-tags-list')
      expect(ul.exists()).toBe(true)
      expect(ul.element.tagName).toBe('UL')
    })

    it('renders the input element', () => {
      const wrapper = mount(BFormTags)
      const input = wrapper.find('.b-form-tags-input')
      expect(input.exists()).toBe(true)
      expect(input.element.tagName).toBe('INPUT')
    })
  })

  describe('modelValue prop', () => {
    it('renders tags from modelValue', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple', 'orange']},
      })
      const tags = wrapper.findAllComponents(BFormTag)
      expect(tags.length).toBe(2)
    })

    it('renders tag text from modelValue', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple', 'orange']},
      })
      const tags = wrapper.findAllComponents(BFormTag)
      expect(tags[0].text()).toContain('apple')
      expect(tags[1].text()).toContain('orange')
    })

    it('renders no tags when modelValue is empty', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: []},
      })
      const tags = wrapper.findAllComponents(BFormTag)
      expect(tags.length).toBe(0)
    })

    it('syncs tags when modelValue changes', async () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple']},
      })
      expect(wrapper.findAllComponents(BFormTag).length).toBe(1)
      await wrapper.setProps({modelValue: ['apple', 'orange']})
      expect(wrapper.findAllComponents(BFormTag).length).toBe(2)
    })
  })

  describe('size prop', () => {
    it('does not have size class when size is md (default)', () => {
      const wrapper = mount(BFormTags)
      expect(wrapper.classes()).not.toContain('form-control-md')
    })

    it('has form-control-sm class when size is sm', () => {
      const wrapper = mount(BFormTags, {
        props: {size: 'sm'},
      })
      expect(wrapper.classes()).toContain('form-control-sm')
    })

    it('has form-control-lg class when size is lg', () => {
      const wrapper = mount(BFormTags, {
        props: {size: 'lg'},
      })
      expect(wrapper.classes()).toContain('form-control-lg')
    })
  })

  describe('state prop', () => {
    it('has no state class by default', () => {
      const wrapper = mount(BFormTags)
      expect(wrapper.classes()).not.toContain('is-valid')
      expect(wrapper.classes()).not.toContain('is-invalid')
    })

    it('has is-valid class when state is true', () => {
      const wrapper = mount(BFormTags, {
        props: {state: true},
      })
      expect(wrapper.classes()).toContain('is-valid')
    })

    it('has is-invalid class when state is false', () => {
      const wrapper = mount(BFormTags, {
        props: {state: false},
      })
      expect(wrapper.classes()).toContain('is-invalid')
    })

    it('is reactive', async () => {
      const wrapper = mount(BFormTags, {
        props: {state: true},
      })
      expect(wrapper.classes()).toContain('is-valid')
      await wrapper.setProps({state: false})
      expect(wrapper.classes()).toContain('is-invalid')
      expect(wrapper.classes()).not.toContain('is-valid')
    })
  })

  describe('disabled prop', () => {
    it('does not have disabled class by default', () => {
      const wrapper = mount(BFormTags)
      expect(wrapper.classes()).not.toContain('disabled')
    })

    it('has disabled class when disabled is true', () => {
      const wrapper = mount(BFormTags, {
        props: {disabled: true},
      })
      expect(wrapper.classes()).toContain('disabled')
    })

    it('sets input disabled attribute when disabled', () => {
      const wrapper = mount(BFormTags, {
        props: {disabled: true},
      })
      const input = wrapper.find('.b-form-tags-input')
      expect(input.attributes('disabled')).toBeDefined()
    })

    it('passes disabled to BFormTag children', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple'], disabled: true},
      })
      const tag = wrapper.findComponent(BFormTag)
      expect(tag.props('disabled')).toBe(true)
    })
  })

  describe('placeholder prop', () => {
    it('has default placeholder', () => {
      const wrapper = mount(BFormTags)
      const input = wrapper.find('.b-form-tags-input')
      expect(input.attributes('placeholder')).toBe('Add tag...')
    })

    it('uses custom placeholder', () => {
      const wrapper = mount(BFormTags, {
        props: {placeholder: 'Enter tags'},
      })
      const input = wrapper.find('.b-form-tags-input')
      expect(input.attributes('placeholder')).toBe('Enter tags')
    })
  })

  describe('inputType prop', () => {
    it('has default input type text', () => {
      const wrapper = mount(BFormTags)
      const input = wrapper.find('.b-form-tags-input')
      expect(input.attributes('type')).toBe('text')
    })

    it('uses custom input type', () => {
      const wrapper = mount(BFormTags, {
        props: {inputType: 'email'},
      })
      const input = wrapper.find('.b-form-tags-input')
      expect(input.attributes('type')).toBe('email')
    })
  })

  describe('inputId prop', () => {
    it('generates an input id when not provided', () => {
      const wrapper = mount(BFormTags)
      const input = wrapper.find('.b-form-tags-input')
      expect(input.attributes('id')).toBeDefined()
      expect(input.attributes('id')).toContain('input__')
    })

    it('uses custom inputId when provided', () => {
      const wrapper = mount(BFormTags, {
        props: {inputId: 'my-input'},
      })
      const input = wrapper.find('.b-form-tags-input')
      expect(input.attributes('id')).toBe('my-input')
    })
  })

  describe('form prop', () => {
    it('does not set form attribute on input by default', () => {
      const wrapper = mount(BFormTags)
      const input = wrapper.find('.b-form-tags-input')
      expect(input.attributes('form')).toBeUndefined()
    })

    it('sets form attribute on input when provided', () => {
      const wrapper = mount(BFormTags, {
        props: {form: 'my-form'},
      })
      const input = wrapper.find('.b-form-tags-input')
      expect(input.attributes('form')).toBe('my-form')
    })
  })

  describe('required prop', () => {
    it('does not set required on input by default', () => {
      const wrapper = mount(BFormTags)
      const input = wrapper.find('.b-form-tags-input')
      expect(input.attributes('required')).toBeUndefined()
    })

    it('sets required on input when true', () => {
      const wrapper = mount(BFormTags, {
        props: {required: true},
      })
      const input = wrapper.find('.b-form-tags-input')
      expect(input.attributes('required')).toBeDefined()
    })

    it('sets aria-required on input when true', () => {
      const wrapper = mount(BFormTags, {
        props: {required: true},
      })
      const input = wrapper.find('.b-form-tags-input')
      expect(input.attributes('aria-required')).toBe('true')
    })
  })

  describe('name prop', () => {
    it('does not render hidden inputs when name is not set', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple', 'orange']},
      })
      const hiddenInputs = wrapper.findAll('input[type="hidden"]')
      expect(hiddenInputs.length).toBe(0)
    })

    it('renders hidden inputs for each tag when name is set', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple', 'orange'], name: 'fruits'},
      })
      const hiddenInputs = wrapper.findAll('input[type="hidden"]')
      expect(hiddenInputs.length).toBe(2)
    })

    it('hidden inputs have correct name and values', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple', 'orange'], name: 'fruits'},
      })
      const hiddenInputs = wrapper.findAll('input[type="hidden"]')
      expect(hiddenInputs[0].attributes('name')).toBe('fruits')
      expect(hiddenInputs[0].attributes('value')).toBe('apple')
      expect(hiddenInputs[1].attributes('name')).toBe('fruits')
      expect(hiddenInputs[1].attributes('value')).toBe('orange')
    })
  })

  describe('tagVariant prop', () => {
    it('passes tagVariant to BFormTag children', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple'], tagVariant: 'primary'},
      })
      const tag = wrapper.findComponent(BFormTag)
      expect(tag.props('variant')).toBe('primary')
    })

    it('defaults to secondary variant', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple']},
      })
      const tag = wrapper.findComponent(BFormTag)
      expect(tag.props('variant')).toBe('secondary')
    })
  })

  describe('tagPills prop', () => {
    it('passes tagPills to BFormTag as pill', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple'], tagPills: true},
      })
      const tag = wrapper.findComponent(BFormTag)
      expect(tag.props('pill')).toBe(true)
    })

    it('defaults to false', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple']},
      })
      const tag = wrapper.findComponent(BFormTag)
      expect(tag.props('pill')).toBe(false)
    })
  })

  describe('tagClass prop', () => {
    it('applies tagClass to BFormTag components', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple'], tagClass: 'custom-tag'},
      })
      const tag = wrapper.findComponent(BFormTag)
      expect(tag.classes()).toContain('custom-tag')
    })
  })

  describe('limit behavior', () => {
    it('should show limitTagsText when limit is reached', () => {
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

    it('does not show limitTagsText when limit is not reached', () => {
      const wrapper = mount(BFormTags, {
        props: {
          limit: 5,
          limitTagsText: 'Foo',
          modelValue: ['apple', 'orange'],
        },
      })

      const small = wrapper.find('small')
      expect(small.exists()).toBe(false)
    })

    it('uses default limitTagsText', () => {
      const wrapper = mount(BFormTags, {
        props: {
          limit: 1,
          modelValue: ['apple'],
        },
      })

      const $smallElement = wrapper.get('small')
      expect($smallElement.text()).toBe('Tag limit reached')
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

  describe('noTagRemove behavior', () => {
    it('renders remove buttons on tags by default', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple', 'orange']},
      })
      const removeButtons = wrapper.findAll('.b-form-tag-remove')
      expect(removeButtons.length).toBe(2)
    })

    it('hides remove buttons on tags when noTagRemove is true', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple', 'orange'], noTagRemove: true},
      })
      const removeButtons = wrapper.findAll('.b-form-tag-remove')
      expect(removeButtons.length).toBe(0)
    })

    it('hides remove buttons on tags when disabled is true', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple', 'orange'], disabled: true},
      })
      const removeButtons = wrapper.findAll('.b-form-tag-remove')
      expect(removeButtons.length).toBe(0)
    })

    it('passes noTagRemove to BFormTag as noRemove', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple'], noTagRemove: true},
      })
      const tag = wrapper.findComponent(BFormTag)
      expect(tag.props('noRemove')).toBe(true)
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

  describe('adding tags', () => {
    it('adds a tag when input change event fires with addOnChange', async () => {
      const wrapper = mount(BFormTags, {
        props: {addOnChange: true},
      })
      const input = wrapper.find('.b-form-tags-input')
      const inputEl = input.element as HTMLInputElement

      // Simulate typing a value
      inputEl.value = 'newtag'
      await input.trigger('change')
      await nextTick()

      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')![0][0]).toEqual(['newtag'])
    })

    it('does not add empty tags', async () => {
      const wrapper = mount(BFormTags)
      const input = wrapper.find('.b-form-tags-input')
      const inputEl = input.element as HTMLInputElement

      inputEl.value = ''
      await input.trigger('input')
      await input.trigger('keydown', {key: 'Enter'})
      await nextTick()

      // addTag always emits update:modelValue, but empty tags are filtered out
      const emitted = wrapper.emitted('update:modelValue')
      expect(emitted).toBeDefined()
      expect(emitted![emitted!.length - 1][0]).toEqual([])
    })

    it('does not add duplicate tags', async () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple']},
      })
      const input = wrapper.find('.b-form-tags-input')
      const inputEl = input.element as HTMLInputElement

      inputEl.value = 'apple'
      await input.trigger('input')
      await input.trigger('keydown', {key: 'Enter'})
      await nextTick()

      // addTag always emits update:modelValue, but duplicate tags are filtered out
      const emitted = wrapper.emitted('update:modelValue')
      expect(emitted).toBeDefined()
      expect(emitted![emitted!.length - 1][0]).toEqual(['apple'])
    })

    it('does not add tag on enter when noAddOnEnter is true', async () => {
      const wrapper = mount(BFormTags, {
        props: {noAddOnEnter: true},
      })
      const input = wrapper.find('.b-form-tags-input')
      const inputEl = input.element as HTMLInputElement

      inputEl.value = 'newtag'
      await input.trigger('input')
      await input.trigger('keydown', {key: 'Enter'})
      await nextTick()

      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    it('emits tag-added event with newly added tag', async () => {
      const wrapper = mount(BFormTags)
      const input = wrapper.find('.b-form-tags-input')
      const inputEl = input.element as HTMLInputElement

      inputEl.value = 'newtag'
      await input.trigger('input')
      await input.trigger('keydown', {key: 'Enter'})
      await nextTick()

      expect(wrapper.emitted('tag-added')).toBeDefined()
      expect(wrapper.emitted('tag-added')![0][0]).toEqual(['newtag'])
    })

    it('does not emit tag-added event when tag is empty', async () => {
      const wrapper = mount(BFormTags)
      const input = wrapper.find('.b-form-tags-input')
      const inputEl = input.element as HTMLInputElement

      inputEl.value = ''
      await input.trigger('input')
      await input.trigger('keydown', {key: 'Enter'})
      await nextTick()

      expect(wrapper.emitted('tag-added')).toBeUndefined()
    })

    it('does not emit tag-added event when tag is duplicate', async () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple']},
      })
      const input = wrapper.find('.b-form-tags-input')
      const inputEl = input.element as HTMLInputElement

      inputEl.value = 'apple'
      await input.trigger('input')
      await input.trigger('keydown', {key: 'Enter'})
      await nextTick()

      expect(wrapper.emitted('tag-added')).toBeUndefined()
    })

    it('emits tag-added event with multiple tags when separator is used', async () => {
      const wrapper = mount(BFormTags, {
        props: {separator: ','},
      })
      const input = wrapper.find('.b-form-tags-input')
      const inputEl = input.element as HTMLInputElement

      inputEl.value = 'tag1,tag2,tag3'
      await input.trigger('input')
      await input.trigger('keydown', {key: 'Enter'})
      await nextTick()

      expect(wrapper.emitted('tag-added')).toBeDefined()
      expect(wrapper.emitted('tag-added')![0][0]).toEqual(['tag1', 'tag2', 'tag3'])
    })
  })

  describe('removing tags', () => {
    it('removes a tag when BFormTag emits remove', async () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple', 'orange']},
      })

      const [firstTag] = wrapper.findAllComponents(BFormTag)
      firstTag.vm.$emit('remove', 'apple')
      await nextTick()

      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')![0][0]).toEqual(['orange'])
    })

    it('updates lastRemovedTag on removal', async () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple', 'orange']},
      })

      const removedTagsDiv = wrapper.find('.visually-hidden[role="status"]')

      const [firstTag] = wrapper.findAllComponents(BFormTag)
      firstTag.vm.$emit('remove', 'apple')
      await nextTick()

      expect(removedTagsDiv.text()).toContain('apple')
    })

    it('does not remove non-existent tag', async () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple']},
      })

      // Try to remove a tag that doesn't exist
      const tag = wrapper.findComponent(BFormTag)
      tag.vm.$emit('remove', 'banana')
      await nextTick()

      // modelValue should not change
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })
  })

  describe('separator prop', () => {
    it('splits tags on separator character', async () => {
      const wrapper = mount(BFormTags, {
        props: {separator: ','},
      })
      const input = wrapper.find('.b-form-tags-input')
      const inputEl = input.element as HTMLInputElement

      inputEl.value = 'apple,'
      await input.trigger('input')
      await nextTick()

      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')![0][0]).toEqual(['apple'])
    })

    it('supports array of separators', async () => {
      const wrapper = mount(BFormTags, {
        props: {separator: [',', ' ']},
      })
      const input = wrapper.find('.b-form-tags-input')
      const inputEl = input.element as HTMLInputElement

      inputEl.value = 'apple,'
      await input.trigger('input')
      await nextTick()

      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')![0][0]).toEqual(['apple'])
    })
  })

  describe('tag validation', () => {
    it('shows invalid tag text when tagValidator returns false', async () => {
      const wrapper = mount(BFormTags, {
        props: {
          tagValidator: (tag: string) => tag.length > 3,
          invalidTagText: 'Too short',
        },
      })
      const input = wrapper.find('.b-form-tags-input')
      const inputEl = input.element as HTMLInputElement

      inputEl.value = 'ab'
      await input.trigger('input')
      await nextTick()

      const invalidFeedback = wrapper.find('.invalid-feedback')
      expect(invalidFeedback.exists()).toBe(true)
      expect(invalidFeedback.text()).toContain('Too short')
    })

    it('does not add invalid tags', async () => {
      const wrapper = mount(BFormTags, {
        props: {
          tagValidator: (tag: string) => tag.length > 3,
        },
      })
      const input = wrapper.find('.b-form-tags-input')
      const inputEl = input.element as HTMLInputElement

      inputEl.value = 'ab'
      await input.trigger('input')
      await input.trigger('keydown', {key: 'Enter'})
      await nextTick()

      // addTag always emits update:modelValue, but invalid tags are filtered out
      const emitted = wrapper.emitted('update:modelValue')
      expect(emitted).toBeDefined()
      expect(emitted![emitted!.length - 1][0]).toEqual([])
    })

    it('emits tag-state event on input', async () => {
      const wrapper = mount(BFormTags, {
        props: {
          tagValidator: (tag: string) => tag.length > 2,
        },
      })
      const input = wrapper.find('.b-form-tags-input')
      const inputEl = input.element as HTMLInputElement

      inputEl.value = 'abc'
      await input.trigger('input')
      await nextTick()

      expect(wrapper.emitted('tag-state')).toBeDefined()
    })
  })

  describe('duplicate tag detection', () => {
    it('shows duplicate tag text when typing a duplicate', async () => {
      const wrapper = mount(BFormTags, {
        props: {
          modelValue: ['apple'],
          duplicateTagText: 'Already exists',
        },
      })
      const input = wrapper.find('.b-form-tags-input')
      const inputEl = input.element as HTMLInputElement

      inputEl.value = 'apple'
      await input.trigger('input')
      await nextTick()

      const duplicateText = wrapper.find('small.form-text')
      expect(duplicateText.exists()).toBe(true)
      expect(duplicateText.text()).toContain('Already exists')
    })
  })

  describe('removeOnDelete behavior', () => {
    it('does not remove tag on Backspace by default', async () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple']},
      })
      const input = wrapper.find('.b-form-tags-input')

      await input.trigger('keydown', {key: 'Backspace'})
      await nextTick()

      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })
  })

  describe('accessibility', () => {
    it('renders output element for screen readers', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple', 'orange']},
      })
      const output = wrapper.find('output')
      expect(output.exists()).toBe(true)
      expect(output.classes()).toContain('visually-hidden')
      expect(output.text()).toBe('apple, orange')
    })

    it('renders removed tags status div', () => {
      const wrapper = mount(BFormTags)
      const statusDiv = wrapper.find('[role="status"]')
      expect(statusDiv.exists()).toBe(true)
      expect(statusDiv.classes()).toContain('visually-hidden')
    })

    it('output aria-live is off when not focused', () => {
      const wrapper = mount(BFormTags)
      const output = wrapper.find('output')
      expect(output.attributes('aria-live')).toBe('off')
    })

    it('output has aria-atomic true', () => {
      const wrapper = mount(BFormTags)
      const output = wrapper.find('output')
      expect(output.attributes('aria-atomic')).toBe('true')
    })

    it('output has aria-relevant additions text', () => {
      const wrapper = mount(BFormTags)
      const output = wrapper.find('output')
      expect(output.attributes('aria-relevant')).toBe('additions text')
    })

    it('removed tags div has aria-atomic true', () => {
      const wrapper = mount(BFormTags)
      const statusDiv = wrapper.find('[role="status"]')
      expect(statusDiv.attributes('aria-atomic')).toBe('true')
    })

    it('displays tagRemovedLabel in status area', () => {
      const wrapper = mount(BFormTags, {
        props: {tagRemovedLabel: 'Removed'},
      })
      const statusDiv = wrapper.find('[role="status"]')
      expect(statusDiv.text()).toContain('Removed')
    })
  })

  describe('BFormTag rendering within BFormTags', () => {
    it('renders BFormTag with tag li', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple']},
      })
      const tag = wrapper.findComponent(BFormTag)
      expect(tag.props('tag')).toBe('li')
    })
  })

  describe('focus and blur events', () => {
    it('emits blur event', async () => {
      const wrapper = mount(BFormTags, {
        attachTo: document.body,
      })
      const input = wrapper.find('.b-form-tags-input')
      await input.trigger('blur')
      expect(wrapper.emitted('blur')).toBeDefined()
    })

    it('emits focusout event', async () => {
      const wrapper = mount(BFormTags, {
        attachTo: document.body,
      })
      await wrapper.trigger('focusout')
      expect(wrapper.emitted('focusout')).toBeDefined()
    })

    it('emits focusin event when not disabled', async () => {
      const wrapper = mount(BFormTags, {
        attachTo: document.body,
      })
      await wrapper.trigger('focusin')
      expect(wrapper.emitted('focusin')).toBeDefined()
    })

    it('does not emit focusin event when disabled', async () => {
      const wrapper = mount(BFormTags, {
        props: {disabled: true},
        attachTo: document.body,
      })
      await wrapper.trigger('focusin')
      expect(wrapper.emitted('focusin')).toBeUndefined()
    })
  })

  describe('exposed methods', () => {
    it('exposes focus method', () => {
      const wrapper = mount(BFormTags)
      expect(typeof wrapper.vm.focus).toBe('function')
    })

    it('exposes blur method', () => {
      const wrapper = mount(BFormTags)
      expect(typeof wrapper.vm.blur).toBe('function')
    })

    it('exposes inputValue ref', () => {
      const wrapper = mount(BFormTags)
      expect(wrapper.vm.inputValue).toBeDefined()
    })

    it('exposes element ref', () => {
      const wrapper = mount(BFormTags)
      expect(wrapper.vm.element).toBeDefined()
    })
  })

  describe('addButtonText prop', () => {
    it('renders add button with default text', async () => {
      const wrapper = mount(BFormTags)
      const input = wrapper.find('.b-form-tags-input')
      const inputEl = input.element as HTMLInputElement

      // Need to have valid input to see the add button
      inputEl.value = 'newtag'
      await input.trigger('input')
      await nextTick()

      const addButton = wrapper.find('.b-form-tags-button')
      expect(addButton.exists()).toBe(true)
      expect(addButton.text()).toBe('Add')
    })

    it('uses custom addButtonText', async () => {
      const wrapper = mount(BFormTags, {
        props: {addButtonText: 'Submit'},
      })
      const input = wrapper.find('.b-form-tags-input')
      const inputEl = input.element as HTMLInputElement

      inputEl.value = 'newtag'
      await input.trigger('input')
      await nextTick()

      const addButton = wrapper.find('.b-form-tags-button')
      expect(addButton.text()).toBe('Submit')
    })
  })

  describe('addButtonVariant prop', () => {
    it('uses default add button variant outline-secondary', async () => {
      const wrapper = mount(BFormTags)
      const input = wrapper.find('.b-form-tags-input')
      const inputEl = input.element as HTMLInputElement

      inputEl.value = 'newtag'
      await input.trigger('input')
      await nextTick()

      const addButton = wrapper.find('.b-form-tags-button')
      expect(addButton.classes()).toContain('btn-outline-secondary')
    })
  })

  describe('add button visibility', () => {
    it('add button has disabled invisible class when input is empty', async () => {
      const wrapper = mount(BFormTags)

      // disableAddButton is computed as !isInvalid && !isDuplicate => true when no input
      // But the button only shows when disableAddButton is true
      // When input is empty, the button has 'disabled invisible' class
      const addButton = wrapper.find('.b-form-tags-button')
      if (!addButton.exists()) throw new Error('addButton does not exist')
      expect(addButton.classes()).toContain('disabled')
      expect(addButton.classes()).toContain('invisible')
    })
  })

  describe('tag slot', () => {
    it('allows custom tag rendering via tag slot', () => {
      const wrapper = mount(BFormTags, {
        props: {modelValue: ['apple', 'orange']},
        slots: {
          tag: ({tag}: {tag: string}) => h('span', {class: 'custom-tag'}, tag),
        },
      })
      const customTags = wrapper.findAll('.custom-tag')
      expect(customTags.length).toBe(2)
      expect(customTags[0]?.text()).toBe('apple')
      expect(customTags[1]?.text()).toBe('orange')
    })
  })

  describe('inputAttrs prop', () => {
    it('passes inputAttrs to the input element', () => {
      const wrapper = mount(BFormTags, {
        props: {inputAttrs: {'data-test': 'my-input', 'maxlength': '10'}},
      })
      const input = wrapper.find('.b-form-tags-input')
      expect(input.attributes('data-test')).toBe('my-input')
      expect(input.attributes('maxlength')).toBe('10')
    })
  })
})
