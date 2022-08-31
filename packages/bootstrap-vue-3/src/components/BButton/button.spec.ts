import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BSpinner from '../BSpinner.vue'
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

  it('is tag a if prop href', () => {
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

  it('has aria-disabled if prop href', () => {
    const wrapper = mount(BButton, {
      props: {href: '/abc', disabled: true},
    })
    expect(wrapper.attributes('aria-disabled')).toBeUndefined()
  })

  it('has aria-disabled if prop to', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc', disabled: true},
    })
    expect(wrapper.attributes('aria-disabled')).toBe('true')
  })

  it('has aria-disabled if prop disabled and prop tag is button', () => {
    const wrapper = mount(BButton, {
      props: {disabled: true},
    })
    expect(wrapper.attributes('aria-disabled')).toBeUndefined()
  })

  it('has attr aria-pressed when prop pressed', async () => {
    const wrapper = mount(BButton, {
      props: {pressed: true},
    })
    expect(wrapper.attributes('aria-pressed')).toBe('true')
    await wrapper.setProps({pressed: false})
    expect(wrapper.attributes('aria-pressed')).toBeUndefined()
  })

  it('has attr autocomplete when prop pressed', async () => {
    const wrapper = mount(BButton, {
      props: {pressed: true},
    })
    expect(wrapper.attributes('autocomplete')).toBe('off')
    await wrapper.setProps({pressed: false})
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

  it('has attr rel when prop rel and prop to', async () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc', rel: 'foobar'},
    })
    expect(wrapper.attributes('rel')).toBe('foobar')
    await wrapper.setProps({to: undefined})
    expect(wrapper.attributes('rel')).toBeUndefined()
  })

  it('has attr rel when prop rel and prop href', async () => {
    const wrapper = mount(BButton, {
      props: {href: '/abc', rel: 'foobar'},
    })
    expect(wrapper.attributes('rel')).toBe('foobar')
    await wrapper.setProps({href: undefined})
    expect(wrapper.attributes('rel')).toBeUndefined()
  })

  it('has attr rel when prop rel when not href or to', () => {
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

  it('has attr role as button by default', () => {
    const wrapper = mount(BButton)
    expect(wrapper.attributes('role')).toBeUndefined()
  })

  it('has prop target when prop to', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc'},
    })
    expect(wrapper.attributes('target')).toBe('_self')
  })

  it('has prop target when prop href', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc'},
    })
    expect(wrapper.attributes('target')).toBe('_self')
  })

  it('has prop target when prop to and prop target', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc', target: '_blank'},
    })
    expect(wrapper.attributes('target')).toBe('_blank')
  })

  it('has prop target when prop href and prop target', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc', target: '_blank'},
    })
    expect(wrapper.attributes('target')).toBe('_blank')
  })

  it('does not have attr target when not link', () => {
    const wrapper = mount(BButton, {
      props: {target: '_blank'},
    })
    expect(wrapper.attributes('target')).toBeUndefined()
  })

  it('has attr type when when prop type', async () => {
    const wrapper = mount(BButton)
    expect(wrapper.attributes('type')).toBe('button')
    await wrapper.setProps({type: 'submit'})
    expect(wrapper.attributes('type')).toBe('submit')
    await wrapper.setProps({type: 'reset'})
    expect(wrapper.attributes('type')).toBe('reset')
  })

  it('does not have attr type prop type and prop tag', async () => {
    const wrapper = mount(BButton, {
      props: {type: 'submit', tag: 'div'},
    })
    expect(wrapper.attributes('type')).toBeUndefined()
  })

  it('does not have attr type prop type and prop to', async () => {
    const wrapper = mount(BButton, {
      props: {type: 'submit', to: '/abc'},
    })
    expect(wrapper.attributes('type')).toBeUndefined()
  })

  it('does not have attr type prop type and prop href', async () => {
    const wrapper = mount(BButton, {
      props: {type: 'submit', href: '/abc'},
    })
    expect(wrapper.attributes('type')).toBeUndefined()
  })

  it('has attr to when prop to', async () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc'},
    })
    expect(wrapper.attributes('to')).toBe('/abc')
  })

  it('has attr to when prop href and prop to', async () => {
    const wrapper = mount(BButton, {
      props: {href: '/abc', to: '/def'},
    })
    expect(wrapper.attributes('to')).toBe('/def')
  })

  it('has attr to when prop to and prop tag', async () => {
    const wrapper = mount(BButton, {
      props: {tag: 'div', to: '/def'},
    })
    expect(wrapper.attributes('to')).toBe('/def')
  })

  it('has attr to when prop to and prop tag', async () => {
    const wrapper = mount(BButton)
    expect(wrapper.attributes('to')).toBeUndefined()
  })

  it('has attr append when prop to and prop append', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc', append: true},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('append')).toBe(true)
  })

  it('has activeClass when prop activeClass and prop to', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc', activeClass: 'foobar'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('activeClass')).toBe('foobar')
  })

  it('has nested prop event when prop event and prop to', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc', event: 'foobar'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('event')).toBe('foobar')
  })

  it('has nested prop exactActiveClass when prop exactActiveClass and prop to', () => {
    const wrapper = mount(BButton, {
      props: {to: '/abc', exactActiveClass: 'foobar'},
    })
    const $blink = wrapper.getComponent(BLink)
    expect($blink.props('exactActiveClass')).toBe('foobar')
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

  it('does not emit update:pressed when prop pressed and prop disabled', async () => {
    const wrapper = mount(BButton, {
      props: {pressed: true, disabled: true},
    })
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

  it('contains div child when prop loading', () => {
    const wrapper = mount(BButton, {
      props: {loading: true},
    })
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
  })

  it('first div child has static class btn-loading', () => {
    const wrapper = mount(BButton, {
      props: {loading: true},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('btn-loading')
  })

  it('first div child has class mode-fill when prop loadingMode is fill', () => {
    const wrapper = mount(BButton, {
      props: {loading: true, loadingMode: 'fill'},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('mode-fill')
  })

  it('first div child has class mode-inline when prop loadingMode is inline', () => {
    const wrapper = mount(BButton, {
      props: {loading: true, loadingMode: 'inline'},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('mode-inline')
  })

  it('first div child has nested BSpinner by default', () => {
    const wrapper = mount(BButton, {
      props: {loading: true, loadingMode: 'inline'},
    })
    const $div = wrapper.get('div')
    const $bspinner = $div.findComponent(BSpinner)
    expect($bspinner.exists()).toBe(true)
  })

  it('first div child nested BSpinner has static class btn-spinner', () => {
    const wrapper = mount(BButton, {
      props: {loading: true, loadingMode: 'inline'},
    })
    const $div = wrapper.get('div')
    const $bspinner = $div.getComponent(BSpinner)
    expect($bspinner.classes()).toContain('btn-spinner')
  })

  it('first div child nested BSpinner has prop small true when size is not lg', async () => {
    const wrapper = mount(BButton, {
      props: {loading: true, loadingMode: 'inline'},
    })
    const $div = wrapper.get('div')
    const $bspinner = $div.getComponent(BSpinner)
    expect($bspinner.props('small')).toBe(true)
    await wrapper.setProps({size: 'lg'})
    expect($bspinner.props('small')).toBe(false)
  })

  it('first div child does not have bspinner when slot loading', async () => {
    const wrapper = mount(BButton, {
      props: {loading: true, loadingMode: 'inline'},
      slots: {loading: 'loading...'},
    })
    const $div = wrapper.get('div')
    const $bspinner = $div.findComponent(BSpinner)
    expect($bspinner.exists()).toBe(false)
  })

  it('first div child renders slot loading', async () => {
    const wrapper = mount(BButton, {
      props: {loading: true, loadingMode: 'inline'},
      slots: {loading: 'loading...'},
    })
    const $div = wrapper.get('div')
    expect($div.text()).toBe('loading...')
  })

  it('both child divs exist when prop loading', () => {
    const wrapper = mount(BButton, {
      props: {loading: true},
    })
    const [$first, $second] = wrapper.findAll('div')
    expect($first.exists()).toBe(true)
    expect($second.exists()).toBe(true)
  })

  it('has a second child div when not prop loading', () => {
    const wrapper = mount(BButton)
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
  })

  it('second child div has static class btn-content', () => {
    const wrapper = mount(BButton)
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('btn-content')
  })

  it('second child div does not have class btn-loading-fill when prop loading false', () => {
    const wrapper = mount(BButton)
    const $div = wrapper.get('div')
    expect($div.classes()).not.toContain('btn-loading-fill')
  })

  it('second child div has class btn-loading-fill when prop loading and loadingMode is fill', async () => {
    const wrapper = mount(BButton, {
      props: {loading: true, loadingMode: 'fill'},
    })
    const [, $div] = wrapper.findAll('div')
    expect($div.classes()).toContain('btn-loading-fill')
    await wrapper.setProps({loadingMode: 'inline'})
    expect($div.classes()).not.toContain('btn-loading-fill')
  })

  it('second child div renders default slot', () => {
    const wrapper = mount(BButton, {
      slots: {default: 'foobar'},
    })
    const $div = wrapper.get('div')
    expect($div.text()).toBe('foobar')
  })

  it('renders both slots when prop loading in correct order', () => {
    const wrapper = mount(BButton, {
      props: {loading: true},
      slots: {default: 'foobar', loading: 'loading'},
    })
    const [$first, $second] = wrapper.findAll('div')
    expect($first.text()).toBe('loading')
    expect($second.text()).toBe('foobar')
  })
})
