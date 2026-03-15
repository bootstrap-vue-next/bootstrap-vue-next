import {enableAutoUnmount, mount} from '@vue/test-utils'
import BListGroup from './BListGroup.vue'
import BListGroupItem from './BListGroupItem.vue'
import {afterEach, describe, expect, it} from 'vitest'

describe('list-group', () => {
  enableAutoUnmount(afterEach)

  describe('rendering', () => {
    it('has static class list-group', () => {
      const wrapper = mount(BListGroup)
      expect(wrapper.classes()).toContain('list-group')
    })

    it('renders default slot content', () => {
      const wrapper = mount(BListGroup, {
        slots: {default: 'list content'},
      })
      expect(wrapper.text()).toBe('list content')
    })

    it('renders HTML content in default slot', () => {
      const wrapper = mount(BListGroup, {
        slots: {default: '<span class="item">item</span>'},
      })
      expect(wrapper.find('span.item').exists()).toBe(true)
      expect(wrapper.find('span.item').text()).toBe('item')
    })
  })

  describe('tag', () => {
    it('is div by default', () => {
      const wrapper = mount(BListGroup)
      expect(wrapper.element.tagName).toBe('DIV')
    })

    it('renders custom tag from prop', () => {
      const wrapper = mount(BListGroup, {
        props: {tag: 'ul'},
      })
      expect(wrapper.element.tagName).toBe('UL')
    })

    it('tag prop is reactive', async () => {
      const wrapper = mount(BListGroup, {
        props: {tag: 'ul'},
      })
      expect(wrapper.element.tagName).toBe('UL')
      await wrapper.setProps({tag: 'div'})
      expect(wrapper.element.tagName).toBe('DIV')
    })

    it('renders as ol when numbered is true regardless of tag prop', () => {
      const wrapper = mount(BListGroup, {
        props: {tag: 'div', numbered: true},
      })
      expect(wrapper.element.tagName).toBe('OL')
    })

    it('retains list-group class when tag changes', async () => {
      const wrapper = mount(BListGroup, {
        props: {tag: 'ul'},
      })
      expect(wrapper.classes()).toContain('list-group')
      await wrapper.setProps({tag: 'section'})
      expect(wrapper.classes()).toContain('list-group')
    })
  })

  describe('flush', () => {
    it('does not have class list-group-flush by default', () => {
      const wrapper = mount(BListGroup)
      expect(wrapper.classes()).not.toContain('list-group-flush')
    })

    it('has class list-group-flush when flush is true', () => {
      const wrapper = mount(BListGroup, {
        props: {flush: true},
      })
      expect(wrapper.classes()).toContain('list-group-flush')
    })

    it('flush prop is reactive', async () => {
      const wrapper = mount(BListGroup, {
        props: {flush: true},
      })
      expect(wrapper.classes()).toContain('list-group-flush')
      await wrapper.setProps({flush: false})
      expect(wrapper.classes()).not.toContain('list-group-flush')
    })
  })

  describe('horizontal', () => {
    it('does not have class list-group-horizontal by default', () => {
      const wrapper = mount(BListGroup)
      expect(wrapper.classes()).not.toContain('list-group-horizontal')
    })

    it('has class list-group-horizontal when horizontal is true', () => {
      const wrapper = mount(BListGroup, {
        props: {horizontal: true},
      })
      expect(wrapper.classes()).toContain('list-group-horizontal')
    })

    it('has class list-group-horizontal-sm when horizontal is sm', () => {
      const wrapper = mount(BListGroup, {
        props: {horizontal: 'sm'},
      })
      expect(wrapper.classes()).toContain('list-group-horizontal-sm')
      expect(wrapper.classes()).not.toContain('list-group-horizontal')
    })

    it('has class list-group-horizontal-md when horizontal is md', () => {
      const wrapper = mount(BListGroup, {
        props: {horizontal: 'md'},
      })
      expect(wrapper.classes()).toContain('list-group-horizontal-md')
      expect(wrapper.classes()).not.toContain('list-group-horizontal')
    })

    it('has class list-group-horizontal-lg when horizontal is lg', () => {
      const wrapper = mount(BListGroup, {
        props: {horizontal: 'lg'},
      })
      expect(wrapper.classes()).toContain('list-group-horizontal-lg')
    })

    it('has class list-group-horizontal-xl when horizontal is xl', () => {
      const wrapper = mount(BListGroup, {
        props: {horizontal: 'xl'},
      })
      expect(wrapper.classes()).toContain('list-group-horizontal-xl')
    })

    it('has class list-group-horizontal-xxl when horizontal is xxl', () => {
      const wrapper = mount(BListGroup, {
        props: {horizontal: 'xxl'},
      })
      expect(wrapper.classes()).toContain('list-group-horizontal-xxl')
    })

    it('horizontal prop is reactive', async () => {
      const wrapper = mount(BListGroup, {
        props: {horizontal: true},
      })
      expect(wrapper.classes()).toContain('list-group-horizontal')
      await wrapper.setProps({horizontal: 'md'})
      expect(wrapper.classes()).toContain('list-group-horizontal-md')
      expect(wrapper.classes()).not.toContain('list-group-horizontal')
    })
  })

  describe('numbered', () => {
    it('does not have class list-group-numbered by default', () => {
      const wrapper = mount(BListGroup)
      expect(wrapper.classes()).not.toContain('list-group-numbered')
    })

    it('has class list-group-numbered when numbered is true', () => {
      const wrapper = mount(BListGroup, {
        props: {numbered: true},
      })
      expect(wrapper.classes()).toContain('list-group-numbered')
    })

    it('numbered prop is reactive', async () => {
      const wrapper = mount(BListGroup, {
        props: {numbered: true},
      })
      expect(wrapper.classes()).toContain('list-group-numbered')
      await wrapper.setProps({numbered: false})
      expect(wrapper.classes()).not.toContain('list-group-numbered')
    })

    it('changes tag to ol when numbered is true', async () => {
      const wrapper = mount(BListGroup)
      expect(wrapper.element.tagName).toBe('DIV')
      await wrapper.setProps({numbered: true})
      expect(wrapper.element.tagName).toBe('OL')
    })
  })

  describe('combined props', () => {
    it('flush disables horizontal when both are set', () => {
      const wrapper = mount(BListGroup, {
        props: {horizontal: true, flush: true},
      })
      expect(wrapper.classes()).toContain('list-group-flush')
      expect(wrapper.classes()).not.toContain('list-group-horizontal')
    })

    it('flush disables horizontal breakpoint when both are set', () => {
      const wrapper = mount(BListGroup, {
        props: {horizontal: 'lg', flush: true},
      })
      expect(wrapper.classes()).toContain('list-group-flush')
      expect(wrapper.classes()).not.toContain('list-group-horizontal-lg')
      expect(wrapper.classes()).not.toContain('list-group-horizontal')
    })

    it('numbered and flush can coexist', () => {
      const wrapper = mount(BListGroup, {
        props: {numbered: true, flush: true},
      })
      expect(wrapper.classes()).toContain('list-group-numbered')
      expect(wrapper.classes()).toContain('list-group-flush')
      expect(wrapper.element.tagName).toBe('OL')
    })
  })

  describe('injection', () => {
    it('provides numbered value to child BListGroupItem', () => {
      const wrapper = mount(BListGroup, {
        props: {numbered: true},
        slots: {default: BListGroupItem},
      })
      const $item = wrapper.findComponent(BListGroupItem)
      expect($item.element.tagName).toBe('LI')
    })

    it('child BListGroupItem renders as div when numbered is false', () => {
      const wrapper = mount(BListGroup, {
        props: {numbered: false},
        slots: {default: BListGroupItem},
      })
      const $item = wrapper.findComponent(BListGroupItem)
      expect($item.element.tagName).toBe('DIV')
    })
  })
})
