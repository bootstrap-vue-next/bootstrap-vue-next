import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BListGroup from './BListGroup.vue'
import BListGroupItem from './BListGroupItem.vue'
import BLink from '../BLink/BLink.vue'

describe('list-group-item', () => {
  enableAutoUnmount(afterEach)

  describe('rendering', () => {
    it('has static class list-group-item', () => {
      const wrapper = mount(BListGroupItem)
      expect(wrapper.classes()).toContain('list-group-item')
    })

    it('renders default slot content', () => {
      const wrapper = mount(BListGroupItem, {
        slots: {default: 'item text'},
      })
      expect(wrapper.text()).toBe('item text')
    })

    it('renders HTML content in default slot', () => {
      const wrapper = mount(BListGroupItem, {
        slots: {default: '<span class="inner">inner</span>'},
      })
      expect(wrapper.find('span.inner').exists()).toBe(true)
      expect(wrapper.find('span.inner').text()).toBe('inner')
    })
  })

  describe('tag', () => {
    it('is div by default', () => {
      const wrapper = mount(BListGroupItem)
      expect(wrapper.element.tagName).toBe('DIV')
    })

    it('renders custom tag from prop', () => {
      const wrapper = mount(BListGroupItem, {
        props: {tag: 'li'},
      })
      expect(wrapper.element.tagName).toBe('LI')
    })

    it('tag prop is reactive', async () => {
      const wrapper = mount(BListGroupItem, {
        props: {tag: 'li'},
      })
      expect(wrapper.element.tagName).toBe('LI')
      await wrapper.setProps({tag: 'div'})
      expect(wrapper.element.tagName).toBe('DIV')
    })

    it('renders as button when button prop is true regardless of tag prop', () => {
      const wrapper = mount(BListGroupItem, {
        props: {button: true, tag: 'div'},
      })
      expect(wrapper.element.tagName).toBe('BUTTON')
    })

    it('renders as li when inside numbered BListGroup', () => {
      const wrapper = mount(BListGroup, {
        props: {numbered: true},
        slots: {default: BListGroupItem},
      })
      const $item = wrapper.findComponent(BListGroupItem)
      expect($item.element.tagName).toBe('LI')
    })

    it('tag a is treated as action tag', () => {
      const wrapper = mount(BListGroupItem, {
        props: {tag: 'a'},
      })
      expect(wrapper.element.tagName).toBe('A')
      expect(wrapper.classes()).toContain('list-group-item-action')
    })

    it('tag button is treated as action tag', () => {
      const wrapper = mount(BListGroupItem, {
        props: {tag: 'button'},
      })
      expect(wrapper.element.tagName).toBe('BUTTON')
      expect(wrapper.classes()).toContain('list-group-item-action')
    })
  })

  describe('action', () => {
    it('does not have class list-group-item-action by default', () => {
      const wrapper = mount(BListGroupItem)
      expect(wrapper.classes()).not.toContain('list-group-item-action')
    })

    it('has class list-group-item-action when action is true', () => {
      const wrapper = mount(BListGroupItem, {
        props: {action: true},
      })
      expect(wrapper.classes()).toContain('list-group-item-action')
    })

    it('action prop is reactive', async () => {
      const wrapper = mount(BListGroupItem, {
        props: {action: true},
      })
      expect(wrapper.classes()).toContain('list-group-item-action')
      await wrapper.setProps({action: false})
      expect(wrapper.classes()).not.toContain('list-group-item-action')
    })
  })

  describe('button', () => {
    it('renders as button when button is true', () => {
      const wrapper = mount(BListGroupItem, {
        props: {button: true},
      })
      expect(wrapper.element.tagName).toBe('BUTTON')
    })

    it('has class list-group-item-action when button is true', () => {
      const wrapper = mount(BListGroupItem, {
        props: {button: true},
      })
      expect(wrapper.classes()).toContain('list-group-item-action')
    })

    it('has type=button by default when button is true', () => {
      const wrapper = mount(BListGroupItem, {
        props: {button: true},
      })
      expect(wrapper.attributes('type')).toBe('button')
    })

    it('uses provided type attr when button is true and type attr is set', () => {
      const wrapper = mount(BListGroupItem, {
        props: {button: true},
        attrs: {type: 'submit'},
      })
      expect(wrapper.attributes('type')).toBe('submit')
    })

    it('does not have disabled attribute when button is true and disabled is not set', () => {
      const wrapper = mount(BListGroupItem, {
        props: {button: true},
      })
      expect(wrapper.attributes('disabled')).toBeUndefined()
    })

    it('has disabled attribute when button is true and disabled is true', () => {
      const wrapper = mount(BListGroupItem, {
        props: {button: true, disabled: true},
      })
      expect(wrapper.attributes('disabled')).toBeDefined()
    })

    it('does not render href when button is true and href is set', () => {
      const wrapper = mount(BListGroupItem, {
        props: {button: true, href: '/foobar'},
      })
      expect(wrapper.element.tagName).toBe('BUTTON')
      expect(wrapper.attributes('href')).toBeUndefined()
    })

    it('does not render as BLink when button is true and href is set', () => {
      const wrapper = mount(BListGroupItem, {
        props: {button: true, href: '/foobar'},
      })
      expect(wrapper.findComponent(BLink).exists()).toBe(false)
    })
  })

  describe('href / link', () => {
    it('renders as BLink when href is set', () => {
      const wrapper = mount(BListGroupItem, {
        props: {href: '/foobar'},
      })
      expect(wrapper.findComponent(BLink).exists()).toBe(true)
    })

    it('renders as a element when href is set', () => {
      const wrapper = mount(BListGroupItem, {
        props: {href: '/foobar'},
      })
      expect(wrapper.element.tagName).toBe('A')
    })

    it('has href attribute when href is set', () => {
      const wrapper = mount(BListGroupItem, {
        props: {href: '/foobar'},
      })
      expect(wrapper.attributes('href')).toBe('/foobar')
    })

    it('has class list-group-item-action when href is set', () => {
      const wrapper = mount(BListGroupItem, {
        props: {href: '/foobar'},
      })
      expect(wrapper.classes()).toContain('list-group-item-action')
    })

    it('passes target prop to BLink', () => {
      const wrapper = mount(BListGroupItem, {
        props: {href: '/foobar', target: '_blank'},
      })
      expect(wrapper.attributes('target')).toBe('_blank')
    })

    it('does not have BLink when neither href nor to is set', () => {
      const wrapper = mount(BListGroupItem)
      expect(wrapper.findComponent(BLink).exists()).toBe(false)
    })
  })

  describe('active', () => {
    it('does not have class active by default', () => {
      const wrapper = mount(BListGroupItem)
      expect(wrapper.classes()).not.toContain('active')
    })

    it('has class active when active is true', () => {
      const wrapper = mount(BListGroupItem, {
        props: {active: true},
      })
      expect(wrapper.classes()).toContain('active')
    })

    it('active prop is reactive', async () => {
      const wrapper = mount(BListGroupItem, {
        props: {active: true},
      })
      expect(wrapper.classes()).toContain('active')
      await wrapper.setProps({active: false})
      expect(wrapper.classes()).not.toContain('active')
    })

    it('has aria-current attribute when active is true', () => {
      const wrapper = mount(BListGroupItem, {
        props: {active: true},
      })
      expect(wrapper.attributes('aria-current')).toBe('true')
    })

    it('does not have aria-current attribute when active is false', () => {
      const wrapper = mount(BListGroupItem, {
        props: {active: false},
      })
      expect(wrapper.attributes('aria-current')).toBeUndefined()
    })
  })

  describe('disabled', () => {
    it('does not have class disabled by default', () => {
      const wrapper = mount(BListGroupItem)
      expect(wrapper.classes()).not.toContain('disabled')
    })

    it('has class disabled when disabled is true', () => {
      const wrapper = mount(BListGroupItem, {
        props: {disabled: true},
      })
      expect(wrapper.classes()).toContain('disabled')
    })

    it('disabled prop is reactive', async () => {
      const wrapper = mount(BListGroupItem, {
        props: {disabled: true},
      })
      expect(wrapper.classes()).toContain('disabled')
      await wrapper.setProps({disabled: false})
      expect(wrapper.classes()).not.toContain('disabled')
    })

    it('has aria-disabled attribute when disabled is true', () => {
      const wrapper = mount(BListGroupItem, {
        props: {disabled: true},
      })
      expect(wrapper.attributes('aria-disabled')).toBe('true')
    })

    it('does not have aria-disabled attribute when disabled is false', () => {
      const wrapper = mount(BListGroupItem, {
        props: {disabled: false},
      })
      expect(wrapper.attributes('aria-disabled')).toBeUndefined()
    })

    it('does not have disabled attribute on non-button element when disabled is true', () => {
      const wrapper = mount(BListGroupItem, {
        props: {disabled: true},
      })
      expect(wrapper.element.tagName).toBe('DIV')
      expect(wrapper.attributes('disabled')).toBeUndefined()
    })
  })

  describe('variant', () => {
    it('does not have variant class by default', () => {
      const wrapper = mount(BListGroupItem)
      expect(wrapper.classes().some((c) => c.startsWith('list-group-item-'))).toBe(false)
    })

    it('has class list-group-item-{variant} when variant is set', () => {
      const wrapper = mount(BListGroupItem, {
        props: {variant: 'danger'},
      })
      expect(wrapper.classes()).toContain('list-group-item-danger')
    })

    it('variant prop is reactive', async () => {
      const wrapper = mount(BListGroupItem, {
        props: {variant: 'danger'},
      })
      expect(wrapper.classes()).toContain('list-group-item-danger')
      await wrapper.setProps({variant: 'success'})
      expect(wrapper.classes()).toContain('list-group-item-success')
      expect(wrapper.classes()).not.toContain('list-group-item-danger')
    })

    it('does not have variant class when variant is null', () => {
      const wrapper = mount(BListGroupItem, {
        props: {variant: null},
      })
      expect(wrapper.classes().some((c) => c.startsWith('list-group-item-'))).toBe(false)
    })

    it('retains list-group-item class with variant', () => {
      const wrapper = mount(BListGroupItem, {
        props: {variant: 'primary'},
      })
      expect(wrapper.classes()).toContain('list-group-item')
    })
  })

  describe('combined props', () => {
    it('active and disabled can coexist', () => {
      const wrapper = mount(BListGroupItem, {
        props: {active: true, disabled: true},
      })
      expect(wrapper.classes()).toContain('active')
      expect(wrapper.classes()).toContain('disabled')
    })

    it('variant and active can coexist', () => {
      const wrapper = mount(BListGroupItem, {
        props: {variant: 'primary', active: true},
      })
      expect(wrapper.classes()).toContain('list-group-item-primary')
      expect(wrapper.classes()).toContain('active')
    })

    it('href with active and variant', () => {
      const wrapper = mount(BListGroupItem, {
        props: {href: '/test', active: true, variant: 'info'},
      })
      expect(wrapper.classes()).toContain('list-group-item-action')
      expect(wrapper.classes()).toContain('active')
      expect(wrapper.classes()).toContain('list-group-item-info')
    })
  })

  it('should render as BLink when href is set', () => {
    const wrapper = mount(BListGroupItem, {
      props: {href: '/foobar'},
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(true)
  })

  it('should pass href to BLink when href is set', () => {
    const wrapper = mount(BListGroupItem, {
      props: {href: '/foobar'},
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.props('href')).toBe('/foobar')
  })

  it('should pass target to BLink when href is set', () => {
    const wrapper = mount(BListGroupItem, {
      props: {href: '/foobar', target: '_blank'},
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.props('target')).toBe('_blank')
  })

  it('should pass exactActiveClass to BLink when href is set', () => {
    const wrapper = mount(BListGroupItem, {
      props: {href: '/foobar', exactActiveClass: 'my-exact-active'},
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.props('exactActiveClass')).toBe('my-exact-active')
  })

  it('should have default exactActiveClass that includes active', () => {
    const wrapper = mount(BListGroupItem, {
      props: {href: '/foobar'},
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.props('exactActiveClass')).toContain('active')
  })

  it('should pass activeClass to BLink when href is set', () => {
    const wrapper = mount(BListGroupItem, {
      props: {href: '/foobar', activeClass: 'my-active'},
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.props('activeClass')).toBe('my-active')
  })

  it('should pass rel to BLink when href is set', () => {
    const wrapper = mount(BListGroupItem, {
      props: {href: '/foobar', rel: 'noopener'},
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.props('rel')).toBe('noopener')
  })

  it('should pass replace to BLink when href is set', () => {
    const wrapper = mount(BListGroupItem, {
      props: {href: '/foobar', replace: true},
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.props('replace')).toBe(true)
  })

  it('should not render as BLink when button=true even with href', () => {
    const wrapper = mount(BListGroupItem, {
      props: {button: true, href: '/foobar'},
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(false)
    expect(wrapper.element.tagName).toBe('BUTTON')
  })
})
