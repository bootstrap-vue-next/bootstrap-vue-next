import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BDropdown from './BDropdown.vue'
import BButton from '../BButton/BButton.vue'

describe('dropdown', () => {
  enableAutoUnmount(afterEach)

  it('tag is div', () => {
    const wrapper = mount(BDropdown)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has static class btn-group', () => {
    const wrapper = mount(BDropdown)
    expect(wrapper.classes()).toContain('btn-group')
  })

  it('has class d-grid when prop block', async () => {
    const wrapper = mount(BDropdown, {
      props: {block: true},
    })
    expect(wrapper.classes()).toContain('d-grid')
    await wrapper.setProps({block: false})
    expect(wrapper.classes()).not.toContain('d-grid')
  })

  it('has class d-flex when prop block aand prop split', async () => {
    const wrapper = mount(BDropdown, {
      props: {block: true, split: true},
    })
    expect(wrapper.classes()).toContain('d-flex')
    await wrapper.setProps({block: false})
    expect(wrapper.classes()).not.toContain('d-flex')
    await wrapper.setProps({block: true, split: false})
    expect(wrapper.classes()).not.toContain('d-flex')
  })

  it('has child ul', () => {
    const wrapper = mount(BDropdown)
    const $ul = wrapper.find('ul')
    expect($ul.exists()).toBe(true)
  })

  it('child ul has static class dropdown-menu', () => {
    const wrapper = mount(BDropdown)
    const $ul = wrapper.get('ul')
    expect($ul.classes()).toContain('dropdown-menu')
  })

  it('child ul has attr role to be prop role', () => {
    const wrapper = mount(BDropdown, {
      props: {role: 'foobar'},
    })
    const $ul = wrapper.get('ul')
    expect($ul.attributes('role')).toBe('foobar')
  })

  it('child ul has prop role default to be menu', () => {
    const wrapper = mount(BDropdown)
    const $ul = wrapper.get('ul')
    expect($ul.attributes('role')).toBe('menu')
  })

  it('child ul has attr aria-labelledby to be defined by default', () => {
    const wrapper = mount(BDropdown)
    const $ul = wrapper.get('ul')
    expect($ul.attributes('aria-labelledby')).toBeDefined()
  })

  it('child ul has attr aria-labelledby contains prop id', () => {
    const wrapper = mount(BDropdown, {
      props: {id: 'foobar'},
    })
    const $ul = wrapper.get('ul')
    expect($ul.attributes('aria-labelledby')).toContain('foobar')
  })

  it('child ul has class from prop menuClass', () => {
    const wrapper = mount(BDropdown, {
      props: {menuClass: ['foobar']},
    })
    const $ul = wrapper.get('ul')
    expect($ul.classes()).toContain('foobar')
  })

  it('child ul has class dropdown-menu-dark when prop dark', async () => {
    const wrapper = mount(BDropdown, {
      props: {dark: true},
    })
    const $ul = wrapper.get('ul')
    expect($ul.classes()).toContain('dropdown-menu-dark')
    await wrapper.setProps({dark: false})
    expect($ul.classes()).not.toContain('dropdown-menu-dark')
  })

  it('child ul has class dropdown-menu-end when prop right', async () => {
    const wrapper = mount(BDropdown, {
      props: {right: true},
    })
    const $ul = wrapper.get('ul')
    expect($ul.classes()).toContain('dropdown-menu-end')
    await wrapper.setProps({right: false})
    expect($ul.classes()).not.toContain('dropdown-menu-end')
  })

  it('child ul renders default slot', () => {
    const wrapper = mount(BDropdown, {
      slots: {default: 'foobar'},
    })
    const $ul = wrapper.get('ul')
    expect($ul.text()).toBe('foobar')
  })

  it('has child BButton', () => {
    const wrapper = mount(BDropdown)
    const $bbutton = wrapper.findComponent(BButton)
    expect($bbutton.exists()).toBe(true)
  })

  it('first child BButton has prop id', () => {
    const wrapper = mount(BDropdown)
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.attributes('id')).toBeDefined()
  })

  it('first child BButton has attr id to contain prop id', () => {
    const wrapper = mount(BDropdown, {
      props: {id: 'foobar'},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.attributes('id')).toContain('foobar')
  })

  it('first child BButton prop variant to be prop splitVariant', () => {
    const wrapper = mount(BDropdown, {
      props: {splitVariant: 'danger'},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.props('variant')).toBe('danger')
  })

  it('first child BButton prop variant to be prop variant', () => {
    const wrapper = mount(BDropdown, {
      props: {variant: 'danger'},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.props('variant')).toBe('danger')
  })

  it('first child BButton prop variant prefers splitVariant over variant', () => {
    const wrapper = mount(BDropdown, {
      props: {splitVariant: 'danger', variant: 'secondary'},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.props('variant')).toBe('danger')
  })

  it('first child BButton prop size is prop size', () => {
    const wrapper = mount(BDropdown, {
      props: {size: 'sm'},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.props('size')).toBe('sm')
  })

  it('first child BButton has class nav-link when prop isNav', async () => {
    const wrapper = mount(BDropdown, {
      props: {isNav: true},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.classes()).toContain('nav-link')
    await wrapper.setProps({isNav: false})
    expect($bbutton.classes()).not.toContain('nav-link')
  })

  it('first child BButton has class dropdown-toggle when not prop split', async () => {
    const wrapper = mount(BDropdown, {
      props: {split: true},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.classes()).not.toContain('dropdown-toggle')
    await wrapper.setProps({split: false})
    expect($bbutton.classes()).toContain('dropdown-toggle')
  })

  it('first child BButton has class dropdown-toggle-no-caret when prop noCaret and not split', async () => {
    const wrapper = mount(BDropdown, {
      props: {noCaret: true, split: false},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.classes()).toContain('dropdown-toggle-no-caret')
    await wrapper.setProps({noCaret: false})
    expect($bbutton.classes()).not.toContain('dropdown-toggle-no-caret')
    await wrapper.setProps({noCaret: true, split: true})
    expect($bbutton.classes()).not.toContain('dropdown-toggle-no-caret')
  })

  it('first child BButton has class w-100 when prop split and prop block', async () => {
    const wrapper = mount(BDropdown, {
      props: {split: true, block: true},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.classes()).toContain('w-100')
    await wrapper.setProps({split: false})
    expect($bbutton.classes()).not.toContain('w-100')
    await wrapper.setProps({split: true, block: false})
    expect($bbutton.classes()).not.toContain('w-100')
  })

  it('first child BButton has prop disabled to be prop disabled', async () => {
    const wrapper = mount(BDropdown, {
      props: {disabled: true},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.props('disabled')).toBe(true)
    await wrapper.setProps({disabled: false})
    expect($bbutton.props('disabled')).toBe(false)
  })

  it('first child BButton has prop type to be prop splitButtonType', async () => {
    const wrapper = mount(BDropdown, {
      props: {splitButtonType: 'reset'},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.props('type')).toBe('reset')
    await wrapper.setProps({splitButtonType: 'submit'})
    expect($bbutton.props('type')).toBe('submit')
  })

  it('first child BButton has class prop splitClass when prop split', () => {
    const wrapper = mount(BDropdown, {
      props: {split: true, splitClass: ['foobar']},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.classes()).toContain('foobar')
  })

  it('first child BButton contains class toggleClass when not prop split', () => {
    const wrapper = mount(BDropdown, {
      props: {split: false, splitClass: ['foo'], toggleClass: ['bar']},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.classes()).toContain('bar')
  })

  it('first child BButton prefers splitClass when prop split', () => {
    const wrapper = mount(BDropdown, {
      props: {split: true, splitClass: ['foo'], toggleClass: ['bar']},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.classes()).toContain('foo')
  })

  it('first child BButton attr data-bs-toggle is dropdown by default', () => {
    const wrapper = mount(BDropdown)
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.attributes('data-bs-toggle')).toBe('dropdown')
  })

  it('first child BButton attr data-bs-toggle is undefined when prop split', () => {
    const wrapper = mount(BDropdown, {
      props: {split: true},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.attributes('data-bs-toggle')).toBeUndefined()
  })

  it('first child BButton attr aria-expanded is false by default', () => {
    const wrapper = mount(BDropdown)
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.attributes('aria-expanded')).toBe('false')
  })

  it('first child BButton attr aria-expanded is undefined when prop split', () => {
    const wrapper = mount(BDropdown, {
      props: {split: true},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.attributes('aria-expanded')).toBeUndefined()
  })

  it('first child BButton attr href is undefined by default', () => {
    const wrapper = mount(BDropdown)
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.props('href')).toBeUndefined()
  })

  it('first child BButton attr href is prop splitHref when prop split', () => {
    const wrapper = mount(BDropdown, {
      props: {split: true, splitHref: '/abc'},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.props('href')).toBe('/abc')
  })

  it('first child BButton renders button-content slot', () => {
    const wrapper = mount(BDropdown, {
      slots: {'button-content': 'foobar'},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.text()).toBe('foobar')
  })

  it('first child BButton renders prop text', () => {
    const wrapper = mount(BDropdown, {
      props: {text: 'foobar'},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.text()).toBe('foobar')
  })

  it('first child BButton prefers to render slot button-content over prop text', () => {
    const wrapper = mount(BDropdown, {
      props: {text: 'props'},
      slots: {'button-content': 'slots'},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.text()).toBe('slots')
  })

  it('first child BButton emits click when prop split', async () => {
    const wrapper = mount(BDropdown, {
      props: {split: true},
    })
    const $bbutton = wrapper.getComponent(BButton)
    await $bbutton.trigger('click')
    expect($bbutton.emitted()).toHaveProperty('click')
  })

  it('first child BButton does not emit click when not prop split', async () => {
    const wrapper = mount(BDropdown, {
      props: {split: false},
    })
    const $bbutton = wrapper.getComponent(BButton)
    await $bbutton.trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })

  it('first child BButton emits click when prop split', async () => {
    const wrapper = mount(BDropdown, {
      props: {split: true},
    })
    const $bbutton = wrapper.getComponent(BButton)
    await $bbutton.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('first child BButton click event is instanceOf MouseEvent', async () => {
    const wrapper = mount(BDropdown, {
      props: {split: true},
    })
    const $bbutton = wrapper.getComponent(BButton)
    await $bbutton.trigger('click')
    const $emitted = wrapper.emitted('click') ?? []
    expect($emitted[0][0] instanceof MouseEvent).toBe(true)
  })

  it('second child BButton does not exist when not prop split', () => {
    const wrapper = mount(BDropdown, {
      props: {split: false},
    })
    const [, $bbutton] = wrapper.findAllComponents(BButton)
    expect($bbutton).toBeUndefined()
  })

  it('second child BButton exists when prop split', () => {
    const wrapper = mount(BDropdown, {
      props: {split: true},
    })
    const [, $bbutton] = wrapper.findAllComponents(BButton)
    expect($bbutton.exists()).toBe(true)
  })

  it('second child BButton has static class dropdown-toggle-split', () => {
    const wrapper = mount(BDropdown, {
      props: {split: true},
    })
    const [, $bbutton] = wrapper.findAllComponents(BButton)
    expect($bbutton.classes()).toContain('dropdown-toggle-split')
  })

  it('second child BButton has static class dropdown-toggle', () => {
    const wrapper = mount(BDropdown, {
      props: {split: true},
    })
    const [, $bbutton] = wrapper.findAllComponents(BButton)
    expect($bbutton.classes()).toContain('dropdown-toggle')
  })

  it('second child BButton has prop variant to be prop variant', async () => {
    const wrapper = mount(BDropdown, {
      props: {split: true, variant: 'danger'},
    })
    const [, $bbutton] = wrapper.findAllComponents(BButton)
    expect($bbutton.props('variant')).toBe('danger')
    await wrapper.setProps({variant: 'secondary'})
    expect($bbutton.props('variant')).toBe('secondary')
  })

  it('second child BButton has prop size to be prop size', async () => {
    const wrapper = mount(BDropdown, {
      props: {split: true, size: 'sm'},
    })
    const [, $bbutton] = wrapper.findAllComponents(BButton)
    expect($bbutton.props('size')).toBe('sm')
    await wrapper.setProps({size: 'lg'})
    expect($bbutton.props('size')).toBe('lg')
  })

  it('second child BButton has prop disabled to be prop disabled', async () => {
    const wrapper = mount(BDropdown, {
      props: {split: true, disabled: true},
    })
    const [, $bbutton] = wrapper.findAllComponents(BButton)
    expect($bbutton.props('disabled')).toBe(true)
    await wrapper.setProps({disabled: false})
    expect($bbutton.props('disabled')).toBe(false)
  })

  it('second child BButton has class to be prop toggleClass', () => {
    const wrapper = mount(BDropdown, {
      props: {split: true, toggleClass: ['foo']},
    })
    const [, $bbutton] = wrapper.findAllComponents(BButton)
    expect($bbutton.classes()).toContain('foo')
  })

  it('second child BButton has static attr data-bs-toggle to be dropdown', () => {
    const wrapper = mount(BDropdown, {
      props: {split: true},
    })
    const [, $bbutton] = wrapper.findAllComponents(BButton)
    expect($bbutton.attributes('data-bs-toggle')).toBe('dropdown')
  })

  it('second child BButton has static attr aria-expanded to be false', () => {
    const wrapper = mount(BDropdown, {
      props: {split: true},
    })
    const [, $bbutton] = wrapper.findAllComponents(BButton)
    expect($bbutton.attributes('aria-expanded')).toBe('false')
  })

  it('second child BButton has a span child', () => {
    const wrapper = mount(BDropdown, {
      props: {split: true},
    })
    const [, $bbutton] = wrapper.findAllComponents(BButton)
    const $span = $bbutton.find('span')
    expect($span.exists()).toBe(true)
  })

  it('second child BButton span child has static class visually-hidden', () => {
    const wrapper = mount(BDropdown, {
      props: {split: true},
    })
    const [, $bbutton] = wrapper.findAllComponents(BButton)
    const $span = $bbutton.get('span')
    expect($span.classes()).toContain('visually-hidden')
  })

  it('second child BButton span child renders slot toggleText', () => {
    const wrapper = mount(BDropdown, {
      props: {split: true},
      slots: {'toggle-text': 'foobar'},
    })
    const [, $bbutton] = wrapper.findAllComponents(BButton)
    const $span = $bbutton.get('span')
    expect($span.text()).toBe('foobar')
  })

  it('second child BButton span child renders prop toggleText', () => {
    const wrapper = mount(BDropdown, {
      props: {split: true, toggleText: 'foobar'},
    })
    const [, $bbutton] = wrapper.findAllComponents(BButton)
    const $span = $bbutton.get('span')
    expect($span.text()).toBe('foobar')
  })

  it('second child BButton span prefers to render slot toggle-text over prop toggleText', () => {
    const wrapper = mount(BDropdown, {
      props: {split: true, toggleText: 'props'},
      slots: {'toggle-text': 'slots'},
    })
    const [, $bbutton] = wrapper.findAllComponents(BButton)
    const $span = $bbutton.get('span')
    expect($span.text()).toBe('slots')
  })

  it('second child BButton emits toggle when clicked', async () => {
    const wrapper = mount(BDropdown, {
      props: {split: true},
    })
    const [, $bbutton] = wrapper.findAllComponents(BButton)
    await $bbutton.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('toggle')
  })
})
