import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BSpinner from '../BSpinner/BSpinner.vue'
import BButton from './BButton.vue'
import BLink from '../BLink/BLink.vue'

describe('button', () => {
  enableAutoUnmount(afterEach)

  it('has static class btn', () => {
    const wrapper = mount(BButton)
    expect(wrapper.classes()).toContain('btn')
  })

  it('has tag button by default', () => {
    const wrapper = mount(BButton)
    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('has default variant class btn-secondary', () => {
    const wrapper = mount(BButton)
    expect(wrapper.classes()).toContain('btn-secondary')
  })

  it('does not have a size class by default', () => {
    const wrapper = mount(BButton)
    expect(wrapper.classes()).not.toContain('btn-md')
    expect(wrapper.classes()).not.toContain('btn-sm')
    expect(wrapper.classes()).not.toContain('btn-lg')
  })

  it('is blink if prop to', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc'},
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(true)
  })

  it('is tag a if prop href', () => {
    const wrapper = mount(BButton, {
      props: {href: '/abc'},
    })
    expect(wrapper.element.tagName).toBe('A')
  })

  it('is correct tag with prop tag', () => {
    const wrapper = mount(BButton, {
      props: {tag: 'div'},
    })
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('is blink if prop to and prop href', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc', href: '/abc'},
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(true)
  })

  it('is blink if prop to and prop href and prop tag', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc', href: '/abc', tag: 'div'},
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(true)
  })

  it('is tag a if prop href and prop tag', () => {
    const wrapper = mount(BButton, {
      props: {href: '/abc', tag: 'div'},
    })
    expect(wrapper.element.tagName).toBe('A')
  })

  it('is blink if prop to and prop tag', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc', tag: 'div'},
    })
    const $blink = wrapper.findComponent(BLink)
    expect($blink.exists()).toBe(true)
  })

  it('has class btn-{type} when prop variant', async () => {
    const wrapper = mount(BButton, {
      props: {variant: 'primary'},
    })
    expect(wrapper.classes()).toContain('btn-primary')
    await wrapper.setProps({variant: undefined})
    expect(wrapper.classes()).not.toContain('btn-primary')
  })

  it('does not have btn-{variant} class when variant is null', () => {
    const wrapper = mount(BButton, {
      props: {variant: null},
    })
    expect(wrapper.classes()).not.toContain('btn-secondary')
    expect(wrapper.classes()).not.toContain('btn-null')
  })

  it('has class btn-{type} when prop size', async () => {
    const wrapper = mount(BButton, {
      props: {size: 'sm'},
    })
    expect(wrapper.classes()).toContain('btn-sm')
    await wrapper.setProps({size: undefined})
    expect(wrapper.classes()).not.toContain('btn-sm')
  })

  it('has class active when prop active', async () => {
    const wrapper = mount(BButton, {
      props: {active: true},
    })
    expect(wrapper.classes()).toContain('active')
    await wrapper.setProps({active: false})
    expect(wrapper.classes()).not.toContain('active')
  })

  it('has class active when prop pressed', async () => {
    const wrapper = mount(BButton, {
      props: {pressed: true},
    })
    expect(wrapper.classes()).toContain('active')
    await wrapper.setProps({pressed: false})
    expect(wrapper.classes()).not.toContain('active')
  })

  it('has class rounded-pill when prop pill', async () => {
    const wrapper = mount(BButton, {
      props: {pill: true},
    })
    expect(wrapper.classes()).toContain('rounded-pill')
    await wrapper.setProps({pill: false})
    expect(wrapper.classes()).not.toContain('rounded-pill')
  })

  it('has class rounded-0 when prop squared', async () => {
    const wrapper = mount(BButton, {
      props: {squared: true},
    })
    expect(wrapper.classes()).toContain('rounded-0')
    await wrapper.setProps({squared: false})
    expect(wrapper.classes()).not.toContain('rounded-0')
  })

  it('has class disabled when prop disabled', async () => {
    const wrapper = mount(BButton, {
      props: {disabled: true},
    })
    expect(wrapper.classes()).toContain('disabled')
    await wrapper.setProps({disabled: false})
    expect(wrapper.classes()).not.toContain('disabled')
  })

  it('has aria-disabled true when prop href is # and prop disabled', () => {
    const wrapper = mount(BButton, {
      props: {href: '#', disabled: true},
    })
    expect(wrapper.attributes('aria-disabled')).toBe('true')
  })

  it('does not have aria-disabled when prop href is not # and prop disabled', () => {
    const wrapper = mount(BButton, {
      props: {href: '/abc', disabled: true},
    })
    expect(wrapper.attributes('aria-disabled')).toBeUndefined()
  })

  it('has aria-disabled if prop to and prop disabled', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc', disabled: true},
    })
    expect(wrapper.attributes('aria-disabled')).toBe('true')
  })

  it('does not have aria-disabled when tag is button and prop disabled', () => {
    const wrapper = mount(BButton, {
      props: {disabled: true},
    })
    expect(wrapper.attributes('aria-disabled')).toBeUndefined()
  })

  it('has aria-disabled when non-standard tag and prop disabled', () => {
    const wrapper = mount(BButton, {
      props: {disabled: true, tag: 'div'},
    })
    expect(wrapper.attributes('aria-disabled')).toBe('true')
  })

  it('has attr aria-pressed when prop pressed', async () => {
    const wrapper = mount(BButton, {
      props: {pressed: true},
    })
    expect(wrapper.attributes('aria-pressed')).toBe('true')
    await wrapper.setProps({pressed: false})
    expect(wrapper.attributes('aria-pressed')).toBe('false')
    await wrapper.setProps({pressed: undefined})
    expect(wrapper.attributes('aria-pressed')).toBeUndefined()
  })

  it('has attr autocomplete when prop pressed', async () => {
    const wrapper = mount(BButton, {
      props: {pressed: true},
    })
    expect(wrapper.attributes('autocomplete')).toBe('off')
    await wrapper.setProps({pressed: false})
    expect(wrapper.attributes('autocomplete')).toBe('off')
    await wrapper.setProps({pressed: undefined})
    expect(wrapper.attributes('autocomplete')).toBeUndefined()
  })

  it('has attr disabled when is button and prop disabled', async () => {
    const wrapper = mount(BButton, {
      props: {disabled: true},
    })
    expect(wrapper.attributes('disabled')).toBe('')
    await wrapper.setProps({disabled: false})
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('does not have attr disabled when prop disabled but has prop href', () => {
    const wrapper = mount(BButton, {
      props: {disabled: true, href: '/abc'},
    })
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('does not have attr disabled when prop disabled but has prop to', () => {
    const wrapper = mount(BButton, {
      props: {disabled: true, to: '/abc'},
    })
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('does not have attr disabled when prop disabled but does not have tag button', () => {
    const wrapper = mount(BButton, {
      props: {disabled: true, tag: 'div'},
    })
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('has attr href when prop href', async () => {
    const wrapper = mount(BButton, {
      props: {href: '/abc'},
    })
    expect(wrapper.attributes('href')).toBe('/abc')
    await wrapper.setProps({href: undefined})
    expect(wrapper.attributes('href')).toBeUndefined()
  })

  it('passes rel prop to BLink when prop rel and prop to', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc', rel: 'foobar'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('rel')).toBe('foobar')
  })

  it('has attr rel when prop rel and prop href', async () => {
    const wrapper = mount(BButton, {
      props: {href: '/abc', rel: 'foobar'},
    })
    expect(wrapper.attributes('rel')).toBe('foobar')
    await wrapper.setProps({href: undefined})
    expect(wrapper.attributes('rel')).toBeUndefined()
  })

  it('does not have attr rel when not href or to', () => {
    const wrapper = mount(BButton, {
      props: {rel: 'foobar'},
    })
    expect(wrapper.attributes('rel')).toBeUndefined()
  })

  it('has attr role as button when non standard tag', () => {
    const wrapper = mount(BButton, {
      props: {tag: 'div'},
    })
    expect(wrapper.attributes('role')).toBe('button')
  })

  it('has attr role as button when prop href', () => {
    const wrapper = mount(BButton, {
      props: {href: '/abc'},
    })
    expect(wrapper.attributes('role')).toBe('button')
  })

  it('has attr role as button when prop to', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc'},
    })
    expect(wrapper.attributes('role')).toBe('button')
  })

  it('does not have attr role by default', () => {
    const wrapper = mount(BButton)
    expect(wrapper.attributes('role')).toBeUndefined()
  })

  it('has prop target when prop to and prop target', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc', target: '_blank'},
    })
    expect(wrapper.attributes('target')).toBe('_blank')
  })

  it('has prop target when prop href and prop target', () => {
    const wrapper = mount(BButton, {
      props: {href: '/abc', target: '_blank'},
    })
    expect(wrapper.attributes('target')).toBe('_blank')
  })

  it('does not have attr target when not link', () => {
    const wrapper = mount(BButton, {
      props: {target: '_blank'},
    })
    expect(wrapper.attributes('target')).toBeUndefined()
  })

  it('has attr type button by default', () => {
    const wrapper = mount(BButton)
    expect(wrapper.attributes('type')).toBe('button')
  })

  it('has attr type when prop type', async () => {
    const wrapper = mount(BButton)
    expect(wrapper.attributes('type')).toBe('button')
    await wrapper.setProps({type: 'submit'})
    expect(wrapper.attributes('type')).toBe('submit')
    await wrapper.setProps({type: 'reset'})
    expect(wrapper.attributes('type')).toBe('reset')
  })

  it('does not have attr type when prop type and prop tag', () => {
    const wrapper = mount(BButton, {
      props: {type: 'submit', tag: 'div'},
    })
    expect(wrapper.attributes('type')).toBeUndefined()
  })

  it('does not have attr type when prop type and prop to', () => {
    const wrapper = mount(BButton, {
      props: {type: 'submit', to: '/abc'},
    })
    expect(wrapper.attributes('type')).toBeUndefined()
  })

  it('does not have attr type when prop type and prop href', () => {
    const wrapper = mount(BButton, {
      props: {type: 'submit', href: '/abc'},
    })
    expect(wrapper.attributes('type')).toBeUndefined()
  })

  it('has attr to when prop to', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc'},
    })
    expect(wrapper.attributes('to')).toBe('/abc')
  })

  it('has attr to when prop href and prop to', () => {
    const wrapper = mount(BButton, {
      props: {href: '/abc', to: '/def'},
    })
    expect(wrapper.attributes('to')).toBe('/def')
  })

  it('has attr to when prop to and prop tag', () => {
    const wrapper = mount(BButton, {
      props: {tag: 'div', to: '/def'},
    })
    expect(wrapper.attributes('to')).toBe('/def')
  })

  it('does not have attr to by default', () => {
    const wrapper = mount(BButton)
    expect(wrapper.attributes('to')).toBeUndefined()
  })

  it('has activeClass when prop activeClass and prop to', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc', activeClass: 'foobar'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('activeClass')).toBe('foobar')
  })

  it('has nested prop routerComponentName when prop routerComponentName and prop to', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc', routerComponentName: 'foobar'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('routerComponentName')).toBe('foobar')
  })

  it('has nested prop routerTag when prop routerTag and prop to', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc', routerTag: 'foobar'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('routerTag')).toBe('foobar')
  })

  it('emits click when clicked', async () => {
    const wrapper = mount(BButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('click emit value is MouseEvent', async () => {
    const wrapper = mount(BButton)
    await wrapper.trigger('click')
    const $emitted = wrapper.emitted('click') ?? []
    expect($emitted[0][0] instanceof MouseEvent).toBe(true)
  })

  it('click does not emit event when disabled', async () => {
    const wrapper = mount(BButton, {
      props: {disabled: true},
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('emits update:pressed when prop pressed', async () => {
    const wrapper = mount(BButton, {
      props: {pressed: true},
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('update:pressed')
  })

  it('emit update:pressed value is opposite of prop pressed', async () => {
    const wrapper = mount(BButton, {
      props: {pressed: true},
    })
    await wrapper.trigger('click')
    const $emitted = wrapper.emitted('update:pressed') ?? []
    expect($emitted[0][0]).toBe(false)
  })

  it('emit update:pressed value is true when pressed is false', async () => {
    const wrapper = mount(BButton, {
      props: {pressed: false},
    })
    await wrapper.trigger('click')
    const $emitted = wrapper.emitted('update:pressed') ?? []
    expect($emitted[0][0]).toBe(true)
  })

  it('does not emit update:pressed when prop pressed and prop disabled', async () => {
    const wrapper = mount(BButton, {
      props: {pressed: true, disabled: true},
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('update:pressed')).toBeUndefined()
  })

  it('does not emit update:pressed when pressed is undefined', async () => {
    const wrapper = mount(BButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted('update:pressed')).toBeUndefined()
  })

  it('emits both click and update:pressed when prop pressed and clicked', async () => {
    const wrapper = mount(BButton, {
      props: {pressed: true},
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
    expect(wrapper.emitted()).toHaveProperty('update:pressed')
  })

  it('renders default slot', () => {
    const wrapper = mount(BButton, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('renders HTML content in default slot', () => {
    const wrapper = mount(BButton, {
      slots: {default: '<strong>bold</strong>'},
    })
    expect(wrapper.find('strong').exists()).toBe(true)
    expect(wrapper.find('strong').text()).toBe('bold')
  })

  it('does not show default slot when loading', () => {
    const wrapper = mount(BButton, {
      props: {loading: true},
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).not.toContain('foobar')
  })

  it('shows loadingText when loading and not loadingFill', () => {
    const wrapper = mount(BButton, {
      props: {loading: true},
    })
    expect(wrapper.text()).toContain('Loading...')
  })

  it('shows custom loadingText when loading', () => {
    const wrapper = mount(BButton, {
      props: {loading: true, loadingText: 'Please wait...'},
    })
    expect(wrapper.text()).toContain('Please wait...')
  })

  it('does not show loadingText directly when loadingFill', () => {
    const wrapper = mount(BButton, {
      props: {loading: true, loadingFill: true},
    })
    const textNodes = wrapper.element.childNodes
    let hasDirectText = false
    textNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() === 'Loading...') {
        hasDirectText = true
      }
    })
    expect(hasDirectText).toBe(false)
  })

  it('contains BSpinner when loading', () => {
    const wrapper = mount(BButton, {
      props: {loading: true},
    })
    const $spinner = wrapper.findComponent(BSpinner)
    expect($spinner.exists()).toBe(true)
  })

  it('does not contain BSpinner when not loading', () => {
    const wrapper = mount(BButton)
    const $spinner = wrapper.findComponent(BSpinner)
    expect($spinner.exists()).toBe(false)
  })

  it('BSpinner has small true when size is not lg', () => {
    const wrapper = mount(BButton, {
      props: {loading: true},
    })
    const $spinner = wrapper.getComponent(BSpinner)
    expect($spinner.props('small')).toBe(true)
  })

  it('BSpinner has small true when size is sm', () => {
    const wrapper = mount(BButton, {
      props: {loading: true, size: 'sm'},
    })
    const $spinner = wrapper.getComponent(BSpinner)
    expect($spinner.props('small')).toBe(true)
  })

  it('BSpinner has small false when size is lg', () => {
    const wrapper = mount(BButton, {
      props: {loading: true, size: 'lg'},
    })
    const $spinner = wrapper.getComponent(BSpinner)
    expect($spinner.props('small')).toBe(false)
  })

  it('BSpinner small reacts to size change', async () => {
    const wrapper = mount(BButton, {
      props: {loading: true, size: 'sm'},
    })
    const $spinner = wrapper.getComponent(BSpinner)
    expect($spinner.props('small')).toBe(true)
    await wrapper.setProps({size: 'lg'})
    expect($spinner.props('small')).toBe(false)
  })

  it('BSpinner has label equal to loadingText when loadingFill', () => {
    const wrapper = mount(BButton, {
      props: {loading: true, loadingFill: true},
    })
    const $spinner = wrapper.getComponent(BSpinner)
    expect($spinner.props('label')).toBe('Loading...')
  })

  it('BSpinner has label equal to custom loadingText when loadingFill', () => {
    const wrapper = mount(BButton, {
      props: {loading: true, loadingFill: true, loadingText: 'Wait...'},
    })
    const $spinner = wrapper.getComponent(BSpinner)
    expect($spinner.props('label')).toBe('Wait...')
  })

  it('BSpinner has undefined label when not loadingFill', () => {
    const wrapper = mount(BButton, {
      props: {loading: true, loadingFill: false},
    })
    const $spinner = wrapper.getComponent(BSpinner)
    expect($spinner.props('label')).toBeUndefined()
  })

  it('loading slot overrides default loading content', () => {
    const wrapper = mount(BButton, {
      props: {loading: true},
      slots: {loading: 'custom loading...'},
    })
    expect(wrapper.text()).toBe('custom loading...')
    expect(wrapper.text()).not.toContain('Loading...')
    const $spinner = wrapper.findComponent(BSpinner)
    expect($spinner.exists()).toBe(false)
  })

  it('loading-spinner slot overrides default BSpinner', () => {
    const wrapper = mount(BButton, {
      props: {loading: true},
      slots: {'loading-spinner': '<div class="custom-spinner">spinning</div>'},
    })
    const $spinner = wrapper.findComponent(BSpinner)
    expect($spinner.exists()).toBe(false)
    const $custom = wrapper.find('.custom-spinner')
    expect($custom.exists()).toBe(true)
    expect($custom.text()).toBe('spinning')
  })

  it('shows loadingText alongside loading-spinner slot when not loadingFill', () => {
    const wrapper = mount(BButton, {
      props: {loading: true},
      slots: {'loading-spinner': '<span class="custom-spinner" />'},
    })
    expect(wrapper.text()).toContain('Loading...')
    expect(wrapper.find('.custom-spinner').exists()).toBe(true)
  })

  it('shows default slot when loading is false', () => {
    const wrapper = mount(BButton, {
      props: {loading: false},
      slots: {default: 'click me'},
    })
    expect(wrapper.text()).toBe('click me')
  })

  it('switches from loading to default slot content', async () => {
    const wrapper = mount(BButton, {
      props: {loading: true},
      slots: {default: 'click me', loading: 'loading...'},
    })
    expect(wrapper.text()).toBe('loading...')
    await wrapper.setProps({loading: false})
    expect(wrapper.text()).toBe('click me')
  })

  it('has class btn-link when variant is link', () => {
    const wrapper = mount(BButton, {
      props: {variant: 'link'},
    })
    expect(wrapper.classes()).toContain('btn-link')
  })

  it('does not have btn-link-{color} class when variant is link-primary', () => {
    const wrapper = mount(BButton, {
      props: {variant: 'link-primary'},
    })
    expect(wrapper.classes()).not.toContain('btn-link-primary')
  })
})
