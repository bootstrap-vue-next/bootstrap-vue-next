import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it, vi} from 'vitest'
import BAccordionItem from './BAccordionItem.vue'
import BCollapse from '../BCollapse/BCollapse.vue'
import {nextTick, ref} from 'vue'
import {accordionInjectionKey} from '../../utils/keys'

describe('accordion-item', () => {
  enableAutoUnmount(afterEach)

  it('has static class accordion-item', () => {
    const wrapper = mount(BAccordionItem)
    expect(wrapper.classes()).toContain('accordion-item')
  })

  it('root is div', () => {
    const wrapper = mount(BAccordionItem)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('contains b-collapse', () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.exists()).toBe(true)
  })

  it('b-collapse contains static class accordion-collapse', () => {
    const wrapper = mount(BAccordionItem)
    const [, , , $bcollapse] = wrapper.findComponent(BCollapse).findAll('*')
    expect($bcollapse.classes()).toContain('accordion-collapse')
  })

  it('b-collapse has child div', () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    const [$div] = $bcollapse.findAll('div')
    expect($div.exists()).toBe(true)
  })

  it('b-collapse child div contains static class accordion-body', () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    const [, $div] = $bcollapse.findAll('div')
    expect($div.classes()).toContain('accordion-body')
  })

  it('b-collapse child div contains default slot', () => {
    const wrapper = mount(BAccordionItem, {
      slots: {default: 'foobar'},
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    const [$div] = $bcollapse.findAll('div')
    expect($div.text()).toBe('foobar')
  })

  it('b-collapse has id attr has default id', () => {
    const wrapper = mount(BAccordionItem)
    const [$bcollapse] = wrapper.findComponent(BCollapse).findAll('*')
    expect($bcollapse.attributes('id')).toBeDefined()
  })

  it('b-collapse has id attr has prop id', () => {
    const wrapper = mount(BAccordionItem, {
      props: {id: 'spam&eggs'},
    })
    const [, , , $bcollapse] = wrapper.findComponent(BCollapse).findAll('*')
    expect($bcollapse.attributes('id')).toBe('spam&eggs')
  })

  it('b-collapse has prop visible', async () => {
    const wrapper = mount(BAccordionItem, {
      props: {visible: true},
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.props('visible')).toBe(true)
    await wrapper.setProps({visible: false})
    expect($bcollapse.props('visible')).toBe(false)
  })

  it('b-collapse has aria-labelledby with prop id', () => {
    const wrapper = mount(BAccordionItem, {
      props: {id: 'foobar'},
    })
    const [, , , $bcollapse] = wrapper.findComponent(BCollapse).findAll('*')
    expect($bcollapse.attributes('aria-labelledby')).toBe('foobar-heading')
  })

  it('headerTag is h2 by default', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.find('h2')
    expect($h2.exists()).toBe(true)
  })

  it('header tag is prop headerTag', () => {
    const wrapper = mount(BAccordionItem, {
      props: {headerTag: 'h3'},
    })
    const $h3 = wrapper.find('h3')
    expect($h3.exists()).toBe(true)
  })

  it('h2 child has static class accordion-header', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.get('h2')
    expect($h2.classes()).toContain('accordion-header')
  })

  it('h2 child has id attr has default id', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.get('h2')
    expect($h2.attributes('id')).toBeDefined()
  })

  it('h2 child has id attr has prop id', () => {
    const wrapper = mount(BAccordionItem, {
      props: {id: 'foobar'},
    })
    const $h2 = wrapper.get('h2')
    expect($h2.attributes('id')).toBe('foobar-heading')
  })

  it('h2 child has button child', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.get('h2')
    const $button = $h2.find('button')
    expect($button.exists()).toBe(true)
  })

  it('h2 child button child has static class accordion-button', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.get('h2')
    const $button = $h2.get('button')
    expect($button.classes()).toContain('accordion-button')
  })

  it('h2 child button child has type attribute button', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.get('h2')
    const $button = $h2.get('button')
    expect($button.attributes('type')).toBe('button')
  })

  it('h2 child button child has aria-expanded false by default', () => {
    const wrapper = mount(BAccordionItem)
    const $h2 = wrapper.get('h2')
    const $button = $h2.get('button')
    expect($button.attributes('aria-expanded')).toBe('false')
  })

  it('h2 child button child has aria-expanded true when visible true', async () => {
    const wrapper = mount(BAccordionItem, {
      props: {visible: true},
    })
    const $button = wrapper.get('.accordion-button')
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect($button.attributes('aria-expanded')).toBe('true')
  })

  it('h2 child button child has aria-controls as id', () => {
    const wrapper = mount(BAccordionItem, {
      props: {id: 'foobar'},
    })
    const $h2 = wrapper.get('h2')
    const $button = $h2.get('button')
    expect($button.attributes('aria-controls')).toBe('foobar')
  })

  it('h2 child button child class collapsed when visible false', async () => {
    const wrapper = mount(BAccordionItem, {
      props: {visible: false},
    })
    const $h2 = wrapper.get('h2')
    const $button = $h2.get('button')
    expect($button.classes()).toContain('collapsed')
    await wrapper.setProps({visible: true})
    await nextTick()

    await new Promise((resolve) => setTimeout(resolve, 30))

    expect($button.classes()).not.toContain('collapsed')
  })

  it('renders title prop as button text', () => {
    const wrapper = mount(BAccordionItem, {
      props: {title: 'my title'},
    })
    const $button = wrapper.get('.accordion-button')
    expect($button.text()).toBe('my title')
  })

  it('title slot overrides title prop', () => {
    const wrapper = mount(BAccordionItem, {
      props: {title: 'prop title'},
      slots: {title: 'slot title'},
    })
    const $button = wrapper.get('.accordion-button')
    expect($button.text()).toBe('slot title')
  })

  it('renders title slot content', () => {
    const wrapper = mount(BAccordionItem, {
      slots: {title: '<strong>Bold Title</strong>'},
    })
    const $button = wrapper.get('.accordion-button')
    expect($button.find('strong').exists()).toBe(true)
    expect($button.text()).toBe('Bold Title')
  })

  it('applies bodyClass to accordion-body div', () => {
    const wrapper = mount(BAccordionItem, {
      props: {bodyClass: 'custom-body'},
    })
    const $body = wrapper.get('.accordion-body')
    expect($body.classes()).toContain('custom-body')
  })

  it('applies bodyAttrs to accordion-body div', () => {
    const wrapper = mount(BAccordionItem, {
      props: {bodyAttrs: {'data-testid': 'body-content'}},
    })
    const $body = wrapper.get('.accordion-body')
    expect($body.attributes('data-testid')).toBe('body-content')
  })

  it('applies buttonClass to accordion button', () => {
    const wrapper = mount(BAccordionItem, {
      props: {buttonClass: 'custom-button'},
    })
    const $button = wrapper.get('.accordion-button')
    expect($button.classes()).toContain('custom-button')
  })

  it('applies buttonAttrs to accordion button', () => {
    const wrapper = mount(BAccordionItem, {
      props: {buttonAttrs: {'data-testid': 'btn-toggle'}},
    })
    const $button = wrapper.get('.accordion-button')
    expect($button.attributes('data-testid')).toBe('btn-toggle')
  })

  it('applies collapseClass to BCollapse element', () => {
    const wrapper = mount(BAccordionItem, {
      props: {collapseClass: 'custom-collapse'},
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    const $collapseEl = $bcollapse
      .findAll('*')
      .find((el) => el.classes().includes('accordion-collapse'))
    expect($collapseEl?.classes()).toContain('custom-collapse')
  })

  it('applies headerClass to header element', () => {
    const wrapper = mount(BAccordionItem, {
      props: {headerClass: 'custom-header'},
    })
    const $h2 = wrapper.get('h2')
    expect($h2.classes()).toContain('custom-header')
  })

  it('applies headerAttrs to header element', () => {
    const wrapper = mount(BAccordionItem, {
      props: {headerAttrs: {'data-testid': 'header-el'}},
    })
    const $h2 = wrapper.get('h2')
    expect($h2.attributes('data-testid')).toBe('header-el')
  })

  it('applies wrapperAttrs to root div', () => {
    const wrapper = mount(BAccordionItem, {
      props: {wrapperAttrs: {'data-testid': 'wrapper'}},
    })
    expect(wrapper.attributes('data-testid')).toBe('wrapper')
  })

  it('passes tag prop to BCollapse', () => {
    const wrapper = mount(BAccordionItem, {
      props: {tag: 'section'},
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.props('tag')).toBe('section')
  })

  it('passes show prop to BCollapse', () => {
    const wrapper = mount(BAccordionItem, {
      props: {show: true},
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.props('show')).toBe(true)
  })

  it('passes horizontal prop to BCollapse', () => {
    const wrapper = mount(BAccordionItem, {
      props: {horizontal: true},
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.props('horizontal')).toBe(true)
  })

  it('passes isNav prop to BCollapse', () => {
    const wrapper = mount(BAccordionItem, {
      props: {isNav: true},
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.props('isNav')).toBe(true)
  })

  it('passes lazy prop to BCollapse', () => {
    const wrapper = mount(BAccordionItem, {
      props: {lazy: true},
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.props('lazy')).toBe(true)
  })

  it('passes unmountLazy prop to BCollapse', () => {
    const wrapper = mount(BAccordionItem, {
      props: {unmountLazy: true},
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.props('unmountLazy')).toBe(true)
  })

  it('applies class attr to root wrapper div (inheritAttrs false)', () => {
    const wrapper = mount(BAccordionItem, {
      attrs: {class: 'custom-wrapper-class'},
    })
    expect(wrapper.classes()).toContain('custom-wrapper-class')
    expect(wrapper.classes()).toContain('accordion-item')
  })

  it('applies non-class attrs to BCollapse inner element (inheritAttrs false)', () => {
    const wrapper = mount(BAccordionItem, {
      attrs: {'data-custom': 'value'},
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    const $collapseEl = $bcollapse
      .findAll('*')
      .find((el) => el.classes().includes('accordion-collapse'))
    expect($collapseEl?.attributes('data-custom')).toBe('value')
  })

  it('emits show event from BCollapse', async () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    await $bcollapse.vm.$emit('show', new Event('show'))
    expect(wrapper.emitted('show')).toBeDefined()
    expect(wrapper.emitted('show')).toHaveLength(1)
  })

  it('emits shown event from BCollapse', async () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    await $bcollapse.vm.$emit('shown', new Event('shown'))
    expect(wrapper.emitted('shown')).toBeDefined()
    expect(wrapper.emitted('shown')).toHaveLength(1)
  })

  it('emits hide event from BCollapse', async () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    await $bcollapse.vm.$emit('hide', new Event('hide'))
    expect(wrapper.emitted('hide')).toBeDefined()
    expect(wrapper.emitted('hide')).toHaveLength(1)
  })

  it('emits hidden event from BCollapse', async () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    await $bcollapse.vm.$emit('hidden', new Event('hidden'))
    expect(wrapper.emitted('hidden')).toBeDefined()
    expect(wrapper.emitted('hidden')).toHaveLength(1)
  })

  it('emits hide-prevented event from BCollapse', async () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    await $bcollapse.vm.$emit('hide-prevented', new Event('hide-prevented'))
    expect(wrapper.emitted('hide-prevented')).toBeDefined()
    expect(wrapper.emitted('hide-prevented')).toHaveLength(1)
  })

  it('emits show-prevented event from BCollapse', async () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    await $bcollapse.vm.$emit('show-prevented', new Event('show-prevented'))
    expect(wrapper.emitted('show-prevented')).toBeDefined()
    expect(wrapper.emitted('show-prevented')).toHaveLength(1)
  })

  it('emits toggle-prevented event from BCollapse', async () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    await $bcollapse.vm.$emit('toggle-prevented', new Event('toggle-prevented'))
    expect(wrapper.emitted('toggle-prevented')).toBeDefined()
    expect(wrapper.emitted('toggle-prevented')).toHaveLength(1)
  })

  it('emits toggle event from BCollapse', async () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    await $bcollapse.vm.$emit('toggle', new Event('toggle'))
    expect(wrapper.emitted('toggle')).toBeDefined()
    expect(wrapper.emitted('toggle')).toHaveLength(1)
  })

  it('has modelValue false by default', () => {
    const wrapper = mount(BAccordionItem)
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.props('modelValue')).toBe(false)
  })

  it('button click toggles modelValue via BCollapse', async () => {
    const wrapper = mount(BAccordionItem)
    const $button = wrapper.get('.accordion-button')
    await $button.trigger('click')
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.emitted('update:modelValue')).toBeDefined()
  })

  it('uses lazy from parent accordion injection when own lazy is false', () => {
    const wrapper = mount(BAccordionItem, {
      global: {
        provide: {
          [accordionInjectionKey as symbol]: {
            openItem: ref(undefined),
            free: ref(false),
            initialAnimation: ref(false),
            lazy: ref(true),
            unmountLazy: ref(false),
            setOpenItem: vi.fn(),
            setCloseItem: vi.fn(),
            registerAccordionItem: vi.fn(),
            unregisterAccordionItem: vi.fn(),
          },
        },
      },
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.props('lazy')).toBe(true)
  })

  it('uses unmountLazy from parent accordion injection when own unmountLazy is false', () => {
    const wrapper = mount(BAccordionItem, {
      global: {
        provide: {
          [accordionInjectionKey as symbol]: {
            openItem: ref(undefined),
            free: ref(false),
            initialAnimation: ref(false),
            lazy: ref(false),
            unmountLazy: ref(true),
            setOpenItem: vi.fn(),
            setCloseItem: vi.fn(),
            registerAccordionItem: vi.fn(),
            unregisterAccordionItem: vi.fn(),
          },
        },
      },
    })
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.props('unmountLazy')).toBe(true)
  })

  it('calls registerAccordionItem on mount with parent injection', () => {
    const registerAccordionItem = vi.fn()
    mount(BAccordionItem, {
      props: {id: 'test-item'},
      global: {
        provide: {
          [accordionInjectionKey as symbol]: {
            openItem: ref(undefined),
            free: ref(false),
            initialAnimation: ref(false),
            lazy: ref(false),
            unmountLazy: ref(false),
            setOpenItem: vi.fn(),
            setCloseItem: vi.fn(),
            registerAccordionItem,
            unregisterAccordionItem: vi.fn(),
          },
        },
      },
    })
    expect(registerAccordionItem).toHaveBeenCalledWith('test-item', expect.anything())
  })

  it('calls unregisterAccordionItem on unmount with parent injection', () => {
    const unregisterAccordionItem = vi.fn()
    const wrapper = mount(BAccordionItem, {
      props: {id: 'test-item'},
      global: {
        provide: {
          [accordionInjectionKey as symbol]: {
            openItem: ref(undefined),
            free: ref(false),
            initialAnimation: ref(false),
            lazy: ref(false),
            unmountLazy: ref(false),
            setOpenItem: vi.fn(),
            setCloseItem: vi.fn(),
            registerAccordionItem: vi.fn(),
            unregisterAccordionItem,
          },
        },
      },
    })
    wrapper.unmount()
    expect(unregisterAccordionItem).toHaveBeenCalledWith('test-item')
  })

  it('opens when parent openItem matches its id', async () => {
    const openItem = ref<string | readonly string[] | undefined>('test-item')
    const wrapper = mount(BAccordionItem, {
      props: {id: 'test-item'},
      global: {
        provide: {
          [accordionInjectionKey as symbol]: {
            openItem,
            free: ref(false),
            initialAnimation: ref(false),
            lazy: ref(false),
            unmountLazy: ref(false),
            setOpenItem: vi.fn(),
            setCloseItem: vi.fn(),
            registerAccordionItem: vi.fn(),
            unregisterAccordionItem: vi.fn(),
          },
        },
      },
    })
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 30))
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.props('modelValue')).toBe(true)
  })

  it('opens when parent openItem array includes its id', async () => {
    const openItem = ref<string | readonly string[] | undefined>(['test-item', 'other'])
    const wrapper = mount(BAccordionItem, {
      props: {id: 'test-item'},
      global: {
        provide: {
          [accordionInjectionKey as symbol]: {
            openItem,
            free: ref(false),
            initialAnimation: ref(false),
            lazy: ref(false),
            unmountLazy: ref(false),
            setOpenItem: vi.fn(),
            setCloseItem: vi.fn(),
            registerAccordionItem: vi.fn(),
            unregisterAccordionItem: vi.fn(),
          },
        },
      },
    })
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 30))
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.props('modelValue')).toBe(true)
  })

  it('closes when parent openItem changes away from its id', async () => {
    const openItem = ref<string | readonly string[] | undefined>('test-item')
    const wrapper = mount(BAccordionItem, {
      props: {id: 'test-item'},
      global: {
        provide: {
          [accordionInjectionKey as symbol]: {
            openItem,
            free: ref(false),
            initialAnimation: ref(false),
            lazy: ref(false),
            unmountLazy: ref(false),
            setOpenItem: vi.fn(),
            setCloseItem: vi.fn(),
            registerAccordionItem: vi.fn(),
            unregisterAccordionItem: vi.fn(),
          },
        },
      },
    })
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 30))
    const $bcollapse = wrapper.findComponent(BCollapse)
    expect($bcollapse.props('modelValue')).toBe(true)
    openItem.value = 'other-item'
    await nextTick()
    expect($bcollapse.props('modelValue')).toBe(false)
  })

  it('calls setOpenItem when modelValue becomes true', async () => {
    const setOpenItem = vi.fn()
    const wrapper = mount(BAccordionItem, {
      props: {id: 'test-item', modelValue: false},
      global: {
        provide: {
          [accordionInjectionKey as symbol]: {
            openItem: ref(undefined),
            free: ref(false),
            initialAnimation: ref(false),
            lazy: ref(false),
            unmountLazy: ref(false),
            setOpenItem,
            setCloseItem: vi.fn(),
            registerAccordionItem: vi.fn(),
            unregisterAccordionItem: vi.fn(),
          },
        },
      },
    })
    await wrapper.setProps({modelValue: true})
    await nextTick()
    expect(setOpenItem).toHaveBeenCalledWith('test-item')
  })
})
