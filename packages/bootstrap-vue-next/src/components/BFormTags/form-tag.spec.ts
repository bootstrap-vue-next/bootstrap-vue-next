import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BFormTag from './BFormTag.vue'
import BCloseButton from '../BButton/BCloseButton.vue'

describe('form-tag', () => {
  enableAutoUnmount(afterEach)

  describe('rendering', () => {
    it('renders a span by default', () => {
      const wrapper = mount(BFormTag)
      expect(wrapper.element.tagName).toBe('SPAN')
    })

    it('has static class badge', () => {
      const wrapper = mount(BFormTag)
      expect(wrapper.classes()).toContain('badge')
    })

    it('has static class b-form-tag', () => {
      const wrapper = mount(BFormTag)
      expect(wrapper.classes()).toContain('b-form-tag')
    })

    it('has static class d-inline-flex', () => {
      const wrapper = mount(BFormTag)
      expect(wrapper.classes()).toContain('d-inline-flex')
    })

    it('has static class align-items-center', () => {
      const wrapper = mount(BFormTag)
      expect(wrapper.classes()).toContain('align-items-center')
    })

    it('has static class mw-100', () => {
      const wrapper = mount(BFormTag)
      expect(wrapper.classes()).toContain('mw-100')
    })

    it('renders content span with class b-form-tag-content', () => {
      const wrapper = mount(BFormTag)
      const content = wrapper.find('.b-form-tag-content')
      expect(content.exists()).toBe(true)
      expect(content.element.tagName).toBe('SPAN')
    })

    it('renders content span with class flex-grow-1', () => {
      const wrapper = mount(BFormTag)
      const content = wrapper.find('.b-form-tag-content')
      expect(content.classes()).toContain('flex-grow-1')
    })

    it('renders content span with class text-truncate', () => {
      const wrapper = mount(BFormTag)
      const content = wrapper.find('.b-form-tag-content')
      expect(content.classes()).toContain('text-truncate')
    })
  })

  describe('tag prop', () => {
    it('renders custom tag when specified', () => {
      const wrapper = mount(BFormTag, {
        props: {tag: 'li'},
      })
      expect(wrapper.element.tagName).toBe('LI')
    })

    it('is reactive', async () => {
      const wrapper = mount(BFormTag, {
        props: {tag: 'li'},
      })
      expect(wrapper.element.tagName).toBe('LI')
      await wrapper.setProps({tag: 'div'})
      expect(wrapper.element.tagName).toBe('DIV')
    })
  })

  describe('variant prop', () => {
    it('has default variant class text-bg-secondary', () => {
      const wrapper = mount(BFormTag)
      expect(wrapper.classes()).toContain('text-bg-secondary')
    })

    it('has variant class text-bg-{variant} when set', () => {
      const wrapper = mount(BFormTag, {
        props: {variant: 'primary'},
      })
      expect(wrapper.classes()).toContain('text-bg-primary')
      expect(wrapper.classes()).not.toContain('text-bg-secondary')
    })

    it('is reactive', async () => {
      const wrapper = mount(BFormTag, {
        props: {variant: 'primary'},
      })
      expect(wrapper.classes()).toContain('text-bg-primary')
      await wrapper.setProps({variant: 'danger'})
      expect(wrapper.classes()).toContain('text-bg-danger')
      expect(wrapper.classes()).not.toContain('text-bg-primary')
    })

    it('does not have variant class when null', () => {
      const wrapper = mount(BFormTag, {
        props: {variant: null},
      })
      expect(wrapper.classes()).not.toContain('text-bg-secondary')
      expect(wrapper.classes()).not.toContain('text-bg-null')
    })
  })

  describe('pill prop', () => {
    it('does not have rounded-pill class by default', () => {
      const wrapper = mount(BFormTag)
      expect(wrapper.classes()).not.toContain('rounded-pill')
    })

    it('has rounded-pill class when pill is true', () => {
      const wrapper = mount(BFormTag, {
        props: {pill: true},
      })
      expect(wrapper.classes()).toContain('rounded-pill')
    })

    it('is reactive', async () => {
      const wrapper = mount(BFormTag, {
        props: {pill: true},
      })
      expect(wrapper.classes()).toContain('rounded-pill')
      await wrapper.setProps({pill: false})
      expect(wrapper.classes()).not.toContain('rounded-pill')
    })
  })

  describe('disabled prop', () => {
    it('does not have disabled class by default', () => {
      const wrapper = mount(BFormTag)
      expect(wrapper.classes()).not.toContain('disabled')
    })

    it('has disabled class when disabled is true', () => {
      const wrapper = mount(BFormTag, {
        props: {disabled: true},
      })
      expect(wrapper.classes()).toContain('disabled')
    })

    it('is reactive', async () => {
      const wrapper = mount(BFormTag, {
        props: {disabled: false},
      })
      expect(wrapper.classes()).not.toContain('disabled')
      await wrapper.setProps({disabled: true})
      expect(wrapper.classes()).toContain('disabled')
    })
  })

  describe('title prop', () => {
    it('sets title attribute', () => {
      const wrapper = mount(BFormTag, {
        props: {title: 'My Tag'},
      })
      expect(wrapper.attributes('title')).toBe('My Tag')
    })

    it('renders title text in content span', () => {
      const wrapper = mount(BFormTag, {
        props: {title: 'My Tag'},
      })
      const content = wrapper.find('.b-form-tag-content')
      expect(content.text()).toBe('My Tag')
    })

    it('is reactive', async () => {
      const wrapper = mount(BFormTag, {
        props: {title: 'Tag A'},
      })
      expect(wrapper.find('.b-form-tag-content').text()).toBe('Tag A')
      await wrapper.setProps({title: 'Tag B'})
      expect(wrapper.find('.b-form-tag-content').text()).toBe('Tag B')
    })
  })

  describe('id prop', () => {
    it('generates an id when not provided', () => {
      const wrapper = mount(BFormTag)
      expect(wrapper.attributes('id')).toBeDefined()
    })

    it('uses provided id', () => {
      const wrapper = mount(BFormTag, {
        props: {id: 'my-tag'},
      })
      expect(wrapper.attributes('id')).toBe('my-tag')
    })

    it('sets aria-labelledby to id-based taglabel id', () => {
      const wrapper = mount(BFormTag, {
        props: {id: 'my-tag'},
      })
      expect(wrapper.attributes('aria-labelledby')).toBe('my-tagtaglabel__')
    })

    it('sets content span id to taglabel id', () => {
      const wrapper = mount(BFormTag, {
        props: {id: 'my-tag'},
      })
      const content = wrapper.find('.b-form-tag-content')
      expect(content.attributes('id')).toBe('my-tagtaglabel__')
    })
  })

  describe('BCloseButton (remove button)', () => {
    it('renders BCloseButton by default', () => {
      const wrapper = mount(BFormTag)
      const closeBtn = wrapper.findComponent(BCloseButton)
      expect(closeBtn.exists()).toBe(true)
    })

    it('has class b-form-tag-remove', () => {
      const wrapper = mount(BFormTag)
      const closeBtn = wrapper.findComponent(BCloseButton)
      expect(closeBtn.classes()).toContain('b-form-tag-remove')
    })

    it('does not render BCloseButton when noRemove is true', () => {
      const wrapper = mount(BFormTag, {
        props: {noRemove: true},
      })
      const closeBtn = wrapper.findComponent(BCloseButton)
      expect(closeBtn.exists()).toBe(false)
    })

    it('does not render BCloseButton when disabled is true', () => {
      const wrapper = mount(BFormTag, {
        props: {disabled: true},
      })
      const closeBtn = wrapper.findComponent(BCloseButton)
      expect(closeBtn.exists()).toBe(false)
    })

    it('has aria-keyshortcuts Delete', () => {
      const wrapper = mount(BFormTag)
      const closeBtn = wrapper.find('.b-form-tag-remove')
      expect(closeBtn.attributes('aria-keyshortcuts')).toBe('Delete')
    })

    it('has default aria-label of Remove tag', () => {
      const wrapper = mount(BFormTag)
      const closeBtn = wrapper.find('.b-form-tag-remove')
      expect(closeBtn.attributes('aria-label')).toBe('Remove tag')
    })

    it('uses custom removeLabel for aria-label', () => {
      const wrapper = mount(BFormTag, {
        props: {removeLabel: 'Delete this'},
      })
      const closeBtn = wrapper.find('.b-form-tag-remove')
      expect(closeBtn.attributes('aria-label')).toBe('Delete this')
    })

    it('has aria-describedby pointing to taglabel id', () => {
      const wrapper = mount(BFormTag, {
        props: {id: 'my-tag'},
      })
      const closeBtn = wrapper.find('.b-form-tag-remove')
      expect(closeBtn.attributes('aria-describedby')).toBe('my-tagtaglabel__')
    })

    it('has aria-controls pointing to tag id', () => {
      const wrapper = mount(BFormTag, {
        props: {id: 'my-tag'},
      })
      const closeBtn = wrapper.find('.b-form-tag-remove')
      expect(closeBtn.attributes('aria-controls')).toBe('my-tag')
    })

    it('noRemove is reactive', async () => {
      const wrapper = mount(BFormTag, {
        props: {noRemove: false},
      })
      expect(wrapper.findComponent(BCloseButton).exists()).toBe(true)
      await wrapper.setProps({noRemove: true})
      expect(wrapper.findComponent(BCloseButton).exists()).toBe(false)
    })
  })

  describe('remove event', () => {
    it('emits remove with tag text when close button clicked', async () => {
      const wrapper = mount(BFormTag, {
        props: {title: 'apple'},
      })
      await wrapper.findComponent(BCloseButton).trigger('click')
      expect(wrapper.emitted('remove')).toBeDefined()
      expect(wrapper.emitted('remove')![0]).toEqual(['apple'])
    })

    it('emits remove with slot content when close button clicked', async () => {
      const wrapper = mount(BFormTag, {
        slots: {default: 'banana'},
      })
      await wrapper.findComponent(BCloseButton).trigger('click')
      expect(wrapper.emitted('remove')).toBeDefined()
      expect(wrapper.emitted('remove')![0]).toEqual(['banana'])
    })
  })

  describe('default slot', () => {
    it('renders slot content', () => {
      const wrapper = mount(BFormTag, {
        slots: {default: 'Custom Content'},
      })
      const content = wrapper.find('.b-form-tag-content')
      expect(content.text()).toBe('Custom Content')
    })

    it('renders HTML slot content', () => {
      const wrapper = mount(BFormTag, {
        slots: {default: '<em>Styled</em>'},
      })
      const content = wrapper.find('.b-form-tag-content')
      expect(content.find('em').exists()).toBe(true)
      expect(content.find('em').text()).toBe('Styled')
    })

    it('slot takes precedence over title for display', () => {
      const wrapper = mount(BFormTag, {
        props: {title: 'Title Text'},
        slots: {default: 'Slot Text'},
      })
      const content = wrapper.find('.b-form-tag-content')
      expect(content.text()).toBe('Slot Text')
    })

    it('title attribute uses slot text when both slot and title prop provided', () => {
      const wrapper = mount(BFormTag, {
        props: {title: 'Title Text'},
        slots: {default: 'Slot Text'},
      })
      // tagText computed uses slot content first, then falls back to title
      expect(wrapper.attributes('title')).toBe('Slot Text')
    })
  })

  describe('combined props', () => {
    it('applies multiple classes correctly', () => {
      const wrapper = mount(BFormTag, {
        props: {
          variant: 'danger',
          pill: true,
          disabled: true,
        },
      })
      expect(wrapper.classes()).toContain('badge')
      expect(wrapper.classes()).toContain('b-form-tag')
      expect(wrapper.classes()).toContain('text-bg-danger')
      expect(wrapper.classes()).toContain('rounded-pill')
      expect(wrapper.classes()).toContain('disabled')
    })

    it('does not show close button when both disabled and noRemove', () => {
      const wrapper = mount(BFormTag, {
        props: {disabled: true, noRemove: true},
      })
      expect(wrapper.findComponent(BCloseButton).exists()).toBe(false)
    })
  })
})
