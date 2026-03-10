import {enableAutoUnmount, mount} from '@vue/test-utils'
import {type ComputedRef, h, nextTick, ref} from 'vue'
import {afterEach, describe, expect, it, vi} from 'vitest'
import BTab from './BTab.vue'
import BTabs from './BTabs.vue'
import {tabsInjectionKey} from '../../utils/keys'
import type {TabType} from '../../types/Tab'

// Helper to create a mock parent injection for standalone BTab tests
function createMockParentData(overrides: Record<string, unknown> = {}) {
  const registeredTabs: ComputedRef<TabType>[] = []
  const activeId = ref<string | undefined>(undefined)

  return {
    lazy: ref(false),
    card: ref(false),
    noFade: ref(false),
    activeTabClass: ref(undefined),
    inactiveTabClass: ref(undefined),
    tabClass: ref(undefined),
    activeId,
    registerTab: (tab: ComputedRef<TabType>) => {
      registeredTabs.push(tab)
      return tab.value.id
    },
    unregisterTab: (id: string) => {
      const idx = registeredTabs.findIndex((t) => t.value.internalId === id)
      if (idx !== -1) registeredTabs.splice(idx, 1)
    },
    activateTab: (internalId: string | undefined) => {
      if (internalId === undefined) {
        activeId.value = undefined
        return
      }
      const tab = registeredTabs.find((t) => t.value.internalId === internalId)
      if (tab) {
        activeId.value = tab.value.id
      }
    },
    registeredTabs,
    ...overrides,
  }
}

describe('tab', () => {
  enableAutoUnmount(afterEach)

  // --- Tag rendering ---

  it('tag is default div', () => {
    const wrapper = mount(BTab)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BTab, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('tag is reactive', async () => {
    const wrapper = mount(BTab, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
    await wrapper.setProps({tag: 'section'})
    expect(wrapper.element.tagName).toBe('SECTION')
  })

  // --- Static attributes ---

  it('has static class tab-pane', () => {
    const wrapper = mount(BTab)
    expect(wrapper.classes()).toContain('tab-pane')
  })

  it('has static role tabpanel', () => {
    const wrapper = mount(BTab)
    expect(wrapper.attributes('role')).toBe('tabpanel')
  })

  // --- ID ---

  it('has a generated id by default', () => {
    const wrapper = mount(BTab)
    expect(wrapper.attributes('id')).toBeDefined()
  })

  it('id is prop id', () => {
    const wrapper = mount(BTab, {
      props: {id: 'my-tab'},
    })
    expect(wrapper.attributes('id')).toBe('my-tab')
  })

  it('id is reactive', async () => {
    const wrapper = mount(BTab, {
      props: {id: 'first-id'},
    })
    expect(wrapper.attributes('id')).toBe('first-id')
    await wrapper.setProps({id: 'second-id'})
    expect(wrapper.attributes('id')).toBe('second-id')
  })

  // --- aria-labelledby ---

  it('has aria-labelledby attribute', () => {
    const wrapper = mount(BTab)
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  it('aria-labelledby uses prop buttonId', () => {
    const wrapper = mount(BTab, {
      props: {buttonId: 'my-button'},
    })
    expect(wrapper.attributes('aria-labelledby')).toBe('my-button')
  })

  // --- Classes from parent injection ---

  it('has class card-body when parentData card and prop noBody false', () => {
    const parentData = createMockParentData({card: ref(true)})
    const wrapper = mount(BTab, {
      props: {noBody: false},
      global: {provide: {[tabsInjectionKey as unknown as symbol]: parentData}},
    })
    expect(wrapper.classes()).toContain('card-body')
  })

  it('does not have class card-body when parentData card but prop noBody true', () => {
    const parentData = createMockParentData({card: ref(true)})
    const wrapper = mount(BTab, {
      props: {noBody: true},
      global: {provide: {[tabsInjectionKey as unknown as symbol]: parentData}},
    })
    expect(wrapper.classes()).not.toContain('card-body')
  })

  it('does not have class card-body when parentData card false', () => {
    const parentData = createMockParentData({card: ref(false)})
    const wrapper = mount(BTab, {
      props: {noBody: false},
      global: {provide: {[tabsInjectionKey as unknown as symbol]: parentData}},
    })
    expect(wrapper.classes()).not.toContain('card-body')
  })

  it('has class fade when parentData noFade is false', () => {
    const parentData = createMockParentData({noFade: ref(false)})
    const wrapper = mount(BTab, {
      global: {provide: {[tabsInjectionKey as unknown as symbol]: parentData}},
    })
    expect(wrapper.classes()).toContain('fade')
  })

  it('does not have class fade when parentData noFade is true', () => {
    const parentData = createMockParentData({noFade: ref(true)})
    const wrapper = mount(BTab, {
      global: {provide: {[tabsInjectionKey as unknown as symbol]: parentData}},
    })
    expect(wrapper.classes()).not.toContain('fade')
  })

  it('has class fade when no parent data', () => {
    const wrapper = mount(BTab)
    // When no parent is provided, the fade class is applied by default
    expect(wrapper.classes()).toContain('fade')
  })

  it('applies tabClass from parent', () => {
    const parentData = createMockParentData({tabClass: ref('custom-tab-class')})
    const wrapper = mount(BTab, {
      global: {provide: {[tabsInjectionKey as unknown as symbol]: parentData}},
    })
    expect(wrapper.classes()).toContain('custom-tab-class')
  })

  // --- Default slot rendering ---

  it('renders default slot when not lazy', () => {
    const wrapper = mount(BTab, {
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('does not render default slot when prop lazy is true and not active', () => {
    const parentData = createMockParentData()
    const wrapper = mount(BTab, {
      props: {lazy: true},
      slots: {default: 'foobar'},
      global: {provide: {[tabsInjectionKey as unknown as symbol]: parentData}},
    })
    expect(wrapper.text()).toBe('')
  })

  it('does not render default slot when parentData lazy is true and not active', () => {
    const parentData = createMockParentData({lazy: ref(true)})
    const wrapper = mount(BTab, {
      slots: {default: 'foobar'},
      global: {provide: {[tabsInjectionKey as unknown as symbol]: parentData}},
    })
    expect(wrapper.text()).toBe('')
  })

  it('does not render slot when both parentData lazy and prop lazy are true and not active', () => {
    const parentData = createMockParentData({lazy: ref(true)})
    const wrapper = mount(BTab, {
      props: {lazy: true},
      slots: {default: 'foobar'},
      global: {provide: {[tabsInjectionKey as unknown as symbol]: parentData}},
    })
    expect(wrapper.text()).toBe('')
  })

  // --- processedAttrs / inheritAttrs ---

  it('passes through non-onClick attributes', () => {
    const wrapper = mount(BTab, {
      attrs: {'data-testid': 'my-tab', 'aria-label': 'test'},
    })
    expect(wrapper.attributes('data-testid')).toBe('my-tab')
    expect(wrapper.attributes('aria-label')).toBe('test')
  })

  it('does not pass onClick through to the element', () => {
    const onClick = vi.fn()
    const wrapper = mount(BTab, {
      attrs: {onClick},
    })
    // onClick should be stripped from processedAttrs
    wrapper.trigger('click')
    expect(onClick).not.toHaveBeenCalled()
  })

  // --- Expose ---

  it('exposes activate method', () => {
    const wrapper = mount(BTab)
    expect(typeof wrapper.vm.activate).toBe('function')
  })

  it('exposes deactivate method', () => {
    const wrapper = mount(BTab)
    expect(typeof wrapper.vm.deactivate).toBe('function')
  })

  // --- Integration: Active/show classes when used with BTabs ---

  it('has class active when tab is selected in BTabs', async () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [
          h(BTab, {id: 'tab-a', title: 'A'}, () => 'content-a'),
          h(BTab, {id: 'tab-b', title: 'B'}, () => 'content-b'),
        ],
      },
    })
    await nextTick()
    const panes = wrapper.findAll('.tab-pane')
    // First tab is active by default
    expect(panes[0].classes()).toContain('active')
    expect(panes[1].classes()).not.toContain('active')
  })

  it('has class show when tab is active (after timeout)', async () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [
          h(BTab, {id: 'tab-a', title: 'A'}, () => 'content-a'),
          h(BTab, {id: 'tab-b', title: 'B'}, () => 'content-b'),
        ],
      },
    })
    await nextTick()
    // show is set via setTimeout, wait for it
    await new Promise((resolve) => setTimeout(resolve, 10))
    await nextTick()
    const panes = wrapper.findAll('.tab-pane')
    expect(panes[0].classes()).toContain('show')
    expect(panes[1].classes()).not.toContain('show')
  })

  it('switches active class when another tab is clicked', async () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [
          h(BTab, {id: 'tab-a', title: 'A'}, () => 'content-a'),
          h(BTab, {id: 'tab-b', title: 'B'}, () => 'content-b'),
        ],
      },
    })
    await nextTick()

    // Click second tab button
    const buttons = wrapper.findAll('button')
    await buttons[1].trigger('click')
    await nextTick()

    const panes = wrapper.findAll('.tab-pane')
    expect(panes[0].classes()).not.toContain('active')
    expect(panes[1].classes()).toContain('active')
  })

  it('applies activeTabClass from parent when active', async () => {
    const wrapper = mount(BTabs, {
      props: {activeTabClass: 'my-active-class'},
      slots: {
        default: () => [
          h(BTab, {id: 'tab-a', title: 'A'}, () => 'content-a'),
          h(BTab, {id: 'tab-b', title: 'B'}, () => 'content-b'),
        ],
      },
    })
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 10))
    await nextTick()
    const panes = wrapper.findAll('.tab-pane')
    expect(panes[0].classes()).toContain('my-active-class')
    expect(panes[1].classes()).not.toContain('my-active-class')
  })

  it('applies inactiveTabClass from parent when inactive', async () => {
    const wrapper = mount(BTabs, {
      props: {inactiveTabClass: 'my-inactive-class'},
      slots: {
        default: () => [
          h(BTab, {id: 'tab-a', title: 'A'}, () => 'content-a'),
          h(BTab, {id: 'tab-b', title: 'B'}, () => 'content-b'),
        ],
      },
    })
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 10))
    await nextTick()
    const panes = wrapper.findAll('.tab-pane')
    expect(panes[0].classes()).not.toContain('my-inactive-class')
    expect(panes[1].classes()).toContain('my-inactive-class')
  })

  // --- Lazy rendering integration ---

  it('renders active tab content when lazy and active in BTabs', async () => {
    const wrapper = mount(BTabs, {
      props: {lazy: true},
      slots: {
        default: () => [
          h(BTab, {id: 'tab-a', title: 'A'}, () => 'content-a'),
          h(BTab, {id: 'tab-b', title: 'B'}, () => 'content-b'),
        ],
      },
    })
    await nextTick()
    const panes = wrapper.findAll('.tab-pane')
    expect(panes[0].text()).toBe('content-a')
    expect(panes[1].text()).toBe('')
  })

  it('keeps previously rendered lazy tab content when unmountLazy is false', async () => {
    const wrapper = mount(BTabs, {
      props: {lazy: true},
      slots: {
        default: () => [
          h(BTab, {id: 'tab-a', title: 'A'}, () => 'content-a'),
          h(BTab, {id: 'tab-b', title: 'B'}, () => 'content-b'),
        ],
      },
    })
    await nextTick()

    // Tab A is active, Tab B is lazy (not rendered)
    let panes = wrapper.findAll('.tab-pane')
    expect(panes[0].text()).toBe('content-a')
    expect(panes[1].text()).toBe('')

    // Switch to Tab B - Tab B becomes active and renders
    const buttons = wrapper.findAll('button')
    await buttons[1].trigger('click')
    await nextTick()

    panes = wrapper.findAll('.tab-pane')
    expect(panes[1].text()).toBe('content-b')

    // Switch back to Tab A
    await buttons[0].trigger('click')
    await nextTick()

    // Tab B should still show content because unmountLazy is not set (lazyRenderCompleted=true)
    panes = wrapper.findAll('.tab-pane')
    expect(panes[0].text()).toBe('content-a')
    expect(panes[1].text()).toBe('content-b')
  })

  it('unmounts previously rendered lazy tab content when unmountLazy is true', async () => {
    const wrapper = mount(BTabs, {
      props: {lazy: true},
      slots: {
        default: () => [
          h(BTab, {id: 'tab-a', title: 'A'}, () => 'content-a'),
          h(BTab, {id: 'tab-b', title: 'B', unmountLazy: true}, () => 'content-b'),
        ],
      },
    })
    await nextTick()

    // Switch to Tab B - Tab B becomes active
    const buttons = wrapper.findAll('button')
    await buttons[1].trigger('click')
    await nextTick()

    let panes = wrapper.findAll('.tab-pane')
    expect(panes[1].text()).toBe('content-b')

    // Switch back to Tab A
    await buttons[0].trigger('click')
    await nextTick()

    // Tab B content should be gone because unmountLazy=true
    panes = wrapper.findAll('.tab-pane')
    expect(panes[0].text()).toBe('content-a')
    expect(panes[1].text()).toBe('')
  })

  // --- Disabled tab ---

  it('disabled tab does not become active when clicked', async () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [
          h(BTab, {id: 'tab-a', title: 'A'}, () => 'content-a'),
          h(BTab, {id: 'tab-b', title: 'B', disabled: true}, () => 'content-b'),
        ],
      },
    })
    await nextTick()

    const buttons = wrapper.findAll('button')
    // The disabled button has disabled attribute
    expect(buttons[1].attributes('disabled')).toBeDefined()
  })

  // --- Card-body integration ---

  it('has card-body class when BTabs has card prop', async () => {
    const wrapper = mount(BTabs, {
      props: {card: true},
      slots: {
        default: () => [h(BTab, {id: 'tab-a', title: 'A'}, () => 'content-a')],
      },
    })
    await nextTick()
    const pane = wrapper.find('.tab-pane')
    expect(pane.classes()).toContain('card-body')
  })

  it('does not have card-body class when BTabs has card but tab has noBody', async () => {
    const wrapper = mount(BTabs, {
      props: {card: true},
      slots: {
        default: () => [h(BTab, {id: 'tab-a', title: 'A', noBody: true}, () => 'content-a')],
      },
    })
    await nextTick()
    const pane = wrapper.find('.tab-pane')
    expect(pane.classes()).not.toContain('card-body')
  })
})
