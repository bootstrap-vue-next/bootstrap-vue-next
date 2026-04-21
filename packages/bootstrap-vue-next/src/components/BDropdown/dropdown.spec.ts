import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BDropdown from './BDropdown.vue'
import BButton from '../BButton/BButton.vue'
import BButtonGroup from '../BButton/BButtonGroup.vue'
import {inputGroupKey} from '../../utils/keys'

describe('dropdown', () => {
  enableAutoUnmount(afterEach)

  it('tag is div', () => {
    const wrapper = mount(BDropdown)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has static class dropdown', () => {
    const wrapper = mount(BDropdown)
    expect(wrapper.find('div').classes()).toContain('dropdown')
  })

  it('has class btn-group when split', () => {
    const wrapper = mount(BDropdown, {
      props: {split: true},
    })
    expect(wrapper.find('div').classes()).toContain('btn-group')
  })

  it('has wrapperClass', () => {
    const wrapper = mount(BDropdown, {
      props: {wrapperClass: 'foobar'},
    })
    expect(wrapper.find('div').classes()).toContain('foobar')
    expect(wrapper.find('div').classes()).not.toContain('btn-group')
    expect(wrapper.find('div').classes()).not.toContain('dropdown')
  })

  it('has child ul', () => {
    const wrapper = mount(BDropdown, {
      props: {modelValue: true},
    })
    const $ul = wrapper.find('ul')
    expect($ul.exists()).toBe(true)
  })

  it('child ul has static class dropdown-menu', () => {
    const wrapper = mount(BDropdown, {
      props: {modelValue: true},
    })
    const $ul = wrapper.get('ul')
    expect($ul.classes()).toContain('dropdown-menu')
  })

  it('child ul has class b-floating-size', () => {
    const wrapper = mount(BDropdown, {
      props: {modelValue: true},
    })
    const $ul = wrapper.get('ul')
    expect($ul.classes()).toContain('b-floating-size')
  })

  it('child ul has attr role to be prop role', () => {
    const wrapper = mount(BDropdown, {
      props: {role: 'foobar', modelValue: true},
    })
    const $ul = wrapper.get('ul')
    expect($ul.attributes('role')).toBe('foobar')
  })

  it('child ul has prop role default to be menu', () => {
    const wrapper = mount(BDropdown, {
      props: {modelValue: true},
    })
    const $ul = wrapper.get('ul')
    expect($ul.attributes('role')).toBe('menu')
  })

  it('child ul has attr aria-labelledby to be defined by default', () => {
    const wrapper = mount(BDropdown, {
      props: {modelValue: true},
    })
    const $ul = wrapper.get('ul')
    expect($ul.attributes('aria-labelledby')).toBeDefined()
  })

  it('child ul has attr aria-labelledby contains prop id', () => {
    const wrapper = mount(BDropdown, {
      props: {id: 'foobar', modelValue: true},
    })
    const $ul = wrapper.get('ul')
    expect($ul.attributes('aria-labelledby')).toContain('foobar')
  })

  it('child ul has class from prop menuClass', () => {
    const wrapper = mount(BDropdown, {
      props: {menuClass: ['foobar'], modelValue: true},
    })
    const $ul = wrapper.get('ul')
    expect($ul.classes()).toContain('foobar')
  })

  it('child ul renders default slot', () => {
    const wrapper = mount(BDropdown, {
      slots: {default: 'foobar'},
      props: {modelValue: true},
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

  it('first child BButton prop icon is false by default', () => {
    const wrapper = mount(BDropdown)
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.props('icon')).toBe(false)
  })

  it('first child BButton prop icon is true when prop icon is true', () => {
    const wrapper = mount(BDropdown, {
      props: {icon: true},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.props('icon')).toBe(true)
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

  it('first child BButton does emits split-click when prop split', async () => {
    const wrapper = mount(BDropdown, {
      props: {split: true},
    })
    const $bbutton = wrapper.getComponent(BButton)
    await $bbutton.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('split-click')
  })

  it('first child BButton does not emit split-click when not prop split', async () => {
    const wrapper = mount(BDropdown, {
      props: {split: false},
    })
    const $bbutton = wrapper.getComponent(BButton)
    await $bbutton.trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('split-click')
  })

  it('wrapper emits click when prop split', async () => {
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
  it('teleportTo prop to teleport to body', async () => {
    const wrapper = mount(BDropdown, {
      props: {teleportTo: 'body', modelValue: true},
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.element.querySelector('ul')).toBe(null)
    expect(document.body?.querySelector('.dropdown-menu')).not.toBe(null)
  })

  describe('Dropdown in button group', () => {
    it('has class btn-group when child of button group', () => {
      const wrapper = mount(BButtonGroup, {
        slots: {default: BDropdown},
      })
      const dropdown = wrapper.getComponent(BDropdown)
      expect(dropdown.get('div').classes()).toContain('btn-group')
    })
    it('has attribute `group` when child of button group', () => {
      const wrapper = mount(BButtonGroup, {
        slots: {default: BDropdown},
      })
      const dropdown = wrapper.getComponent(BDropdown)
      expect(dropdown.get('div').attributes('role')).toBe('group')
    })
  })

  describe('noWrapper prop', () => {
    it('skips dropdown wrapper class when noWrapper is true', () => {
      const wrapper = mount(BDropdown, {
        props: {noWrapper: true},
      })
      expect(wrapper.find('.dropdown').exists()).toBe(false)
    })

    it('renders dropdown wrapper class when noWrapper is false', () => {
      const wrapper = mount(BDropdown, {
        props: {noWrapper: false},
      })
      expect(wrapper.find('.dropdown').exists()).toBe(true)
    })

    it('noWrapper reacts to prop change', async () => {
      const wrapper = mount(BDropdown, {
        props: {noWrapper: false},
      })
      expect(wrapper.find('.dropdown').exists()).toBe(true)
      await wrapper.setProps({noWrapper: true})
      expect(wrapper.find('.dropdown').exists()).toBe(false)
    })
  })

  describe('input group context', () => {
    it('skips dropdown wrapper class when inside input group', () => {
      const wrapper = mount(BDropdown, {
        global: {
          provide: {
            [inputGroupKey as unknown as symbol]: true,
          },
        },
      })
      expect(wrapper.find('.dropdown').exists()).toBe(false)
    })
  })

  describe('drop direction classes', () => {
    it('has class dropdown by default (placement bottom-start)', () => {
      const wrapper = mount(BDropdown)
      expect(wrapper.find('div').classes()).toContain('dropdown')
    })

    it('has class dropup when placement is top', async () => {
      const wrapper = mount(BDropdown, {
        props: {placement: 'top'},
      })
      expect(wrapper.find('div').classes()).toContain('dropup')
      expect(wrapper.find('div').classes()).not.toContain('dropdown')
    })

    it('has class dropup when placement is top-start', () => {
      const wrapper = mount(BDropdown, {
        props: {placement: 'top-start'},
      })
      expect(wrapper.find('div').classes()).toContain('dropup')
    })

    it('has class dropup when placement is top-end', () => {
      const wrapper = mount(BDropdown, {
        props: {placement: 'top-end'},
      })
      expect(wrapper.find('div').classes()).toContain('dropup')
    })

    it('has class dropend when placement is right', () => {
      const wrapper = mount(BDropdown, {
        props: {placement: 'right'},
      })
      expect(wrapper.find('div').classes()).toContain('dropend')
    })

    it('has class dropend when placement is right-start', () => {
      const wrapper = mount(BDropdown, {
        props: {placement: 'right-start'},
      })
      expect(wrapper.find('div').classes()).toContain('dropend')
    })

    it('has class dropstart when placement is left', () => {
      const wrapper = mount(BDropdown, {
        props: {placement: 'left'},
      })
      expect(wrapper.find('div').classes()).toContain('dropstart')
    })

    it('has class dropstart when placement is left-end', () => {
      const wrapper = mount(BDropdown, {
        props: {placement: 'left-end'},
      })
      expect(wrapper.find('div').classes()).toContain('dropstart')
    })

    it('drop direction class reacts to placement change', async () => {
      const wrapper = mount(BDropdown, {
        props: {placement: 'bottom-start'},
      })
      expect(wrapper.find('div').classes()).toContain('dropdown')
      await wrapper.setProps({placement: 'top'})
      expect(wrapper.find('div').classes()).toContain('dropup')
      expect(wrapper.find('div').classes()).not.toContain('dropdown')
    })
  })

  describe('position-static class', () => {
    it('has class position-static when boundary is not clippingAncestors and not isNav', () => {
      const wrapper = mount(BDropdown, {
        props: {boundary: 'document'},
      })
      expect(wrapper.find('div').classes()).toContain('position-static')
    })

    it('does not have class position-static when boundary is clippingAncestors', () => {
      const wrapper = mount(BDropdown, {
        props: {boundary: 'clippingAncestors'},
      })
      expect(wrapper.find('div').classes()).not.toContain('position-static')
    })

    it('does not have class position-static when isNav is true', () => {
      const wrapper = mount(BDropdown, {
        props: {boundary: 'document', isNav: true},
      })
      expect(wrapper.find('div').classes()).not.toContain('position-static')
    })
  })

  describe('first BButton additional props', () => {
    it('has attr aria-label from prop ariaLabel', () => {
      const wrapper = mount(BDropdown, {
        props: {ariaLabel: 'my dropdown'},
      })
      const $bbutton = wrapper.getComponent(BButton)
      expect($bbutton.attributes('aria-label')).toBe('my dropdown')
    })

    it('has attr aria-haspopup as menu when not split', () => {
      const wrapper = mount(BDropdown, {
        props: {split: false},
      })
      const $bbutton = wrapper.getComponent(BButton)
      expect($bbutton.attributes('aria-haspopup')).toBe('menu')
    })

    it('has attr aria-haspopup as undefined when split', () => {
      const wrapper = mount(BDropdown, {
        props: {split: true},
      })
      const $bbutton = wrapper.getComponent(BButton)
      expect($bbutton.attributes('aria-haspopup')).toBeUndefined()
    })

    it('is disabled by splitDisabled when split', () => {
      const wrapper = mount(BDropdown, {
        props: {split: true, splitDisabled: true, disabled: false},
      })
      const $bbutton = wrapper.getComponent(BButton)
      expect($bbutton.props('disabled')).toBe(true)
    })

    it('is disabled by disabled when splitDisabled is false', () => {
      const wrapper = mount(BDropdown, {
        props: {split: true, splitDisabled: false, disabled: true},
      })
      const $bbutton = wrapper.getComponent(BButton)
      expect($bbutton.props('disabled')).toBe(true)
    })

    it('has href undefined when not split even if splitHref is set', () => {
      const wrapper = mount(BDropdown, {
        props: {split: false, splitHref: '/abc'},
      })
      const $bbutton = wrapper.getComponent(BButton)
      expect($bbutton.props('href')).toBeUndefined()
    })

    it('has class show when dropdown is open and not split', async () => {
      const wrapper = mount(BDropdown, {
        props: {modelValue: true, noAnimation: true},
      })
      await new Promise((resolve) => setTimeout(resolve, 30))
      const $bbutton = wrapper.getComponent(BButton)
      expect($bbutton.classes()).toContain('show')
    })
  })

  describe('second BButton additional props', () => {
    it('has id with -split suffix', () => {
      const wrapper = mount(BDropdown, {
        props: {split: true, id: 'my-dropdown'},
      })
      const [, $bbutton] = wrapper.findAllComponents(BButton)
      expect($bbutton.attributes('id')).toBe('my-dropdown-split')
    })

    it('has attr aria-haspopup as menu', () => {
      const wrapper = mount(BDropdown, {
        props: {split: true},
      })
      const [, $bbutton] = wrapper.findAllComponents(BButton)
      expect($bbutton.attributes('aria-haspopup')).toBe('menu')
    })

    it('is not disabled by splitDisabled', () => {
      const wrapper = mount(BDropdown, {
        props: {split: true, splitDisabled: true, disabled: false},
      })
      const [, $bbutton] = wrapper.findAllComponents(BButton)
      expect($bbutton.props('disabled')).toBe(false)
    })

    it('default toggleText is Toggle dropdown', () => {
      const wrapper = mount(BDropdown, {
        props: {split: true},
      })
      const [, $bbutton] = wrapper.findAllComponents(BButton)
      const $span = $bbutton.get('span')
      expect($span.text()).toBe('Toggle dropdown')
    })
  })

  describe('menu (ul) additional attributes', () => {
    it('has id with -menu suffix', () => {
      const wrapper = mount(BDropdown, {
        props: {id: 'my-dropdown', modelValue: true},
      })
      const $ul = wrapper.get('ul')
      expect($ul.attributes('id')).toBe('my-dropdown-menu')
    })

    it('has class overflow-auto', () => {
      const wrapper = mount(BDropdown, {
        props: {modelValue: true},
      })
      const $ul = wrapper.get('ul')
      expect($ul.classes()).toContain('overflow-auto')
    })

    it('has prop role with reactivity', async () => {
      const wrapper = mount(BDropdown, {
        props: {role: 'listbox', modelValue: true},
      })
      const $ul = wrapper.get('ul')
      expect($ul.attributes('role')).toBe('listbox')
      await wrapper.setProps({role: 'menu'})
      expect($ul.attributes('role')).toBe('menu')
    })

    it('has menuClass with reactivity', async () => {
      const wrapper = mount(BDropdown, {
        props: {menuClass: ['foo'], modelValue: true},
      })
      const $ul = wrapper.get('ul')
      expect($ul.classes()).toContain('foo')
      await wrapper.setProps({menuClass: ['bar']})
      expect($ul.classes()).not.toContain('foo')
      expect($ul.classes()).toContain('bar')
    })
  })

  describe('exposed methods', () => {
    it('exposes hide method', () => {
      const wrapper = mount(BDropdown)
      expect(wrapper.vm.hide).toBeDefined()
      expect(typeof wrapper.vm.hide).toBe('function')
    })

    it('exposes show method', () => {
      const wrapper = mount(BDropdown)
      expect(wrapper.vm.show).toBeDefined()
      expect(typeof wrapper.vm.show).toBe('function')
    })

    it('exposes toggle method', () => {
      const wrapper = mount(BDropdown)
      expect(wrapper.vm.toggle).toBeDefined()
      expect(typeof wrapper.vm.toggle).toBe('function')
    })
  })

  describe('toggle behavior', () => {
    it('first child BButton click emits toggle when not split', async () => {
      const wrapper = mount(BDropdown, {
        props: {split: false},
      })
      const $bbutton = wrapper.getComponent(BButton)
      await $bbutton.trigger('click')
      expect(wrapper.emitted()).toHaveProperty('toggle')
    })

    it('first child BButton click does not emit toggle when split', async () => {
      const wrapper = mount(BDropdown, {
        props: {split: true},
      })
      const $bbutton = wrapper.getComponent(BButton)
      await $bbutton.trigger('click')
      expect(wrapper.emitted()).not.toHaveProperty('toggle')
    })
  })

  describe('variant reactivity', () => {
    it('first child BButton variant reacts to prop change', async () => {
      const wrapper = mount(BDropdown, {
        props: {variant: 'danger'},
      })
      const $bbutton = wrapper.getComponent(BButton)
      expect($bbutton.props('variant')).toBe('danger')
      await wrapper.setProps({variant: 'primary'})
      expect($bbutton.props('variant')).toBe('primary')
    })

    it('first child BButton size reacts to prop change', async () => {
      const wrapper = mount(BDropdown, {
        props: {size: 'sm'},
      })
      const $bbutton = wrapper.getComponent(BButton)
      expect($bbutton.props('size')).toBe('sm')
      await wrapper.setProps({size: 'lg'})
      expect($bbutton.props('size')).toBe('lg')
    })
  })

  describe('wrapperClass behavior', () => {
    it('does not add drop direction class when wrapperClass is set', () => {
      const wrapper = mount(BDropdown, {
        props: {wrapperClass: 'my-class'},
      })
      expect(wrapper.find('div').classes()).toContain('my-class')
      expect(wrapper.find('div').classes()).not.toContain('dropdown')
    })

    it('does not add btn-group class when wrapperClass is set even if split', () => {
      const wrapper = mount(BDropdown, {
        props: {wrapperClass: 'my-class', split: true},
      })
      expect(wrapper.find('div').classes()).toContain('my-class')
      expect(wrapper.find('div').classes()).not.toContain('btn-group')
    })

    it('wrapperClass reacts to prop change', async () => {
      const wrapper = mount(BDropdown, {
        props: {wrapperClass: 'foo'},
      })
      expect(wrapper.find('div').classes()).toContain('foo')
      await wrapper.setProps({wrapperClass: 'bar'})
      expect(wrapper.find('div').classes()).not.toContain('foo')
      expect(wrapper.find('div').classes()).toContain('bar')
    })
  })

  describe('split-click event details', () => {
    it('split-click event value is instanceOf MouseEvent', async () => {
      const wrapper = mount(BDropdown, {
        props: {split: true},
      })
      const $bbutton = wrapper.getComponent(BButton)
      await $bbutton.trigger('click')
      const $emitted = wrapper.emitted('split-click') ?? []
      expect($emitted[0][0] instanceof MouseEvent).toBe(true)
    })
  })

  describe('noCaret reactivity', () => {
    it('noCaret class reacts to prop change', async () => {
      const wrapper = mount(BDropdown, {
        props: {noCaret: false, split: false},
      })
      const $bbutton = wrapper.getComponent(BButton)
      expect($bbutton.classes()).not.toContain('dropdown-toggle-no-caret')
      await wrapper.setProps({noCaret: true})
      expect($bbutton.classes()).toContain('dropdown-toggle-no-caret')
    })
  })

  describe('icon reactivity', () => {
    it('icon prop reacts to change', async () => {
      const wrapper = mount(BDropdown, {
        props: {icon: false},
      })
      const $bbutton = wrapper.getComponent(BButton)
      expect($bbutton.props('icon')).toBe(false)
      await wrapper.setProps({icon: true})
      expect($bbutton.props('icon')).toBe(true)
    })
  })

  describe('disabled reactivity', () => {
    it('disabled state reacts to prop change in non-split mode', async () => {
      const wrapper = mount(BDropdown, {
        props: {disabled: false},
      })
      const $bbutton = wrapper.getComponent(BButton)
      expect($bbutton.props('disabled')).toBe(false)
      await wrapper.setProps({disabled: true})
      expect($bbutton.props('disabled')).toBe(true)
    })
  })

  describe('text prop reactivity', () => {
    it('text prop reacts to change', async () => {
      const wrapper = mount(BDropdown, {
        props: {text: 'hello'},
      })
      const $bbutton = wrapper.getComponent(BButton)
      expect($bbutton.text()).toBe('hello')
      await wrapper.setProps({text: 'world'})
      expect($bbutton.text()).toBe('world')
    })
  })

  describe('split prop reactivity', () => {
    it('split button appears and disappears with prop change', async () => {
      const wrapper = mount(BDropdown, {
        props: {split: false},
      })
      expect(wrapper.findAllComponents(BButton)).toHaveLength(1)
      await wrapper.setProps({split: true})
      expect(wrapper.findAllComponents(BButton)).toHaveLength(2)
      await wrapper.setProps({split: false})
      expect(wrapper.findAllComponents(BButton)).toHaveLength(1)
    })
  })

  describe('isNav prop', () => {
    it('first child BButton has nav-link class when isNav is true', () => {
      const wrapper = mount(BDropdown, {
        props: {isNav: true},
      })
      const $bbutton = wrapper.getComponent(BButton)
      expect($bbutton.classes()).toContain('nav-link')
    })

    it('first child BButton does not have nav-link class when isNav is false', () => {
      const wrapper = mount(BDropdown, {
        props: {isNav: false},
      })
      const $bbutton = wrapper.getComponent(BButton)
      expect($bbutton.classes()).not.toContain('nav-link')
    })
  })

  describe('default variant', () => {
    it('first child BButton has default variant secondary', () => {
      const wrapper = mount(BDropdown)
      const $bbutton = wrapper.getComponent(BButton)
      expect($bbutton.props('variant')).toBe('secondary')
    })
  })

  describe('default size', () => {
    it('first child BButton has default size undefined', () => {
      const wrapper = mount(BDropdown)
      const $bbutton = wrapper.getComponent(BButton)
      expect($bbutton.props('size')).toBeUndefined()
    })
  })
})
