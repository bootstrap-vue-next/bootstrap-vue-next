import {enableAutoUnmount, mount} from '@vue/test-utils'
import {h, nextTick} from 'vue'
import {afterEach, describe, expect, it} from 'vitest'
import BTabs from './BTabs.vue'
import BTab from './BTab.vue'
import BFormInput from '../BFormInput/BFormInput.vue'
import BFormGroup from '../BFormGroup/BFormGroup.vue'

describe('tabs', () => {
  enableAutoUnmount(afterEach)

  it('tag is default div', () => {
    const wrapper = mount(BTabs)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('tag is prop tag', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span'},
    })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('attr id is undefined by default', () => {
    const wrapper = mount(BTabs)
    expect(wrapper.attributes('id')).toBeUndefined()
  })

  it('attr id is prop id', () => {
    const wrapper = mount(BTabs, {
      props: {id: 'foobar'},
    })
    expect(wrapper.attributes('id')).toBe('foobar')
  })

  it('has static class tabs', () => {
    const wrapper = mount(BTabs)
    expect(wrapper.classes()).toContain('tabs')
  })

  it('has class d-flex if prop vertical', async () => {
    const wrapper = mount(BTabs, {
      props: {vertical: true},
    })
    expect(wrapper.classes()).toContain('d-flex')
    await wrapper.setProps({vertical: false})
    expect(wrapper.classes()).not.toContain('d-flex')
  })

  it('has class align-items-start if prop vertical', async () => {
    const wrapper = mount(BTabs, {
      props: {vertical: true},
    })
    expect(wrapper.classes()).toContain('align-items-start')
    await wrapper.setProps({vertical: false})
    expect(wrapper.classes()).not.toContain('align-items-start')
  })

  // start beginning end div

  it('has first child div when prop end', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', end: true},
    })
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
  })

  it('first child div has static class tab-content', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', end: true},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('tab-content')
  })

  it('first child div has classes from prop contentClass', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', end: true, contentClass: ['foo']},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('foo')
  })

  it('first child div has another div child when tabs empty', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', end: true},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.find('div')
    expect($div2.exists()).toBe(true)
  })

  it('first child div nested div child has static class tab-pane', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', end: true},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).toContain('tab-pane')
  })

  it('first child div nested div child has static class active', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', end: true},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).toContain('active')
  })

  it('first child div nested div child class card-body when prop card', async () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', end: true, card: true},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).toContain('card-body')
    await wrapper.setProps({card: false})
    expect($div2.classes()).not.toContain('card-body')
  })

  it('first child div nested div child renders slot empty', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', end: true},
      slots: {empty: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.text()).toBe('foobar')
  })

  it('first child div has tab component when default slot', async () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', end: true},
      slots: {default: () => h(BTab, {tag: 'small'}, () => 'foobar')},
    })
    await nextTick()
    const $div = wrapper.get('.tab-content')
    const $small = $div.find('small')
    expect($small.exists()).toBe(true)
  })

  it('first child div does not have empty div when default slot has tab', async () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', end: true},
      slots: {default: () => h(BTab, {tag: 'small'}, () => 'foobar')},
    })
    await nextTick()
    const $div = wrapper.get('.tab-content')
    // Verify no empty tab-pane divs are rendered when tabs have actual content
    const $emptyDiv = $div.findAll('div.tab-pane.active')
    expect($emptyDiv.length).toBe(0)
  })

  // end div

  it('first child div is next div if not prop end', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span'},
    })
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
  })

  it('next div has class card-header if prop card', async () => {
    const wrapper = mount(BTabs, {
      props: {card: true, tag: 'span'},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('card-header')
    await wrapper.setProps({card: false})
    expect($div.classes()).not.toContain('card-header')
  })

  it('next div has class ms-auto when prop vertical and prop end', async () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', vertical: true},
    })
    const $div = wrapper.get('div')
    await wrapper.setProps({end: true})
    expect($div.classes()).toContain('ms-auto')
    await wrapper.setProps({end: false})
    expect($div.classes()).not.toContain('ms-auto')
    await wrapper.setProps({end: true, vertical: false})
    expect($div.classes()).not.toContain('ms-auto')
  })

  it('next div has classes from prop navWrapperClass', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', navWrapperClass: ['foo']},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('foo')
  })

  it('next div has child ul', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span'},
    })
    const $div = wrapper.get('div')
    const $ul = $div.find('ul')
    expect($ul.exists()).toBe(true)
  })

  it('next div child ul has static class nav', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span'},
    })
    const $div = wrapper.get('div')
    const $ul = $div.get('ul')
    expect($ul.classes()).toContain('nav')
  })

  it('next div child ul has class from prop navClass', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', navClass: ['foo']},
    })
    const $div = wrapper.get('div')
    const $ul = $div.get('ul')
    expect($ul.classes()).toContain('foo')
  })

  it('next div child ul has static attr tablist', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span'},
    })
    const $div = wrapper.get('div')
    const $ul = $div.get('ul')
    expect($ul.attributes('role')).toBe('tablist')
  })

  it('next div child ul has class nav-pills when prop pills', async () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', pills: true},
    })
    const $div = wrapper.get('div')
    const $ul = $div.get('ul')
    expect($ul.classes()).toContain('nav-pills')
    await wrapper.setProps({pills: false})
    expect($ul.classes()).not.toContain('nav-pills')
  })

  it('next div child ul has class flex-column when prop vertical', async () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', vertical: true},
    })
    const $div = wrapper.get('div')
    const $ul = $div.get('ul')
    expect($ul.classes()).toContain('flex-column')
    await wrapper.setProps({vertical: false})
    expect($ul.classes()).not.toContain('flex-column')
  })

  it('next div child ul has class me-3 when prop vertical', async () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', vertical: true},
    })
    const $div = wrapper.get('div')
    const $ul = $div.get('ul')
    expect($ul.classes()).toContain('me-3')
    await wrapper.setProps({vertical: false})
    expect($ul.classes()).not.toContain('me-3')
  })

  it('next div child ul has class justify-content-{type} when prop align', async () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', align: 'end'},
    })
    const $div = wrapper.get('div')
    const $ul = $div.get('ul')
    expect($ul.classes()).toContain('justify-content-end')
    await wrapper.setProps({align: undefined})
    expect($ul.classes()).not.toContain('justify-content-end')
  })

  it('next div child ul has class nav-fill when prop fill', async () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', fill: true},
    })
    const $div = wrapper.get('div')
    const $ul = $div.get('ul')
    expect($ul.classes()).toContain('nav-fill')
    await wrapper.setProps({fill: false})
    expect($ul.classes()).not.toContain('nav-fill')
  })

  it('next div child ul has class card-header-tabs when prop card', async () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', card: true},
    })
    const $div = wrapper.get('div')
    const $ul = $div.get('ul')
    expect($ul.classes()).toContain('card-header-tabs')
    await wrapper.setProps({card: false})
    expect($ul.classes()).not.toContain('card-header-tabs')
  })

  it('next div child ul has class nav-justified when prop justified', async () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', justified: true},
    })
    const $div = wrapper.get('div')
    const $ul = $div.get('ul')
    expect($ul.classes()).toContain('nav-justified')
    await wrapper.setProps({justified: false})
    expect($ul.classes()).not.toContain('nav-justified')
  })

  it('next div child ul has class small when prop small', async () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', small: true},
    })
    const $div = wrapper.get('div')
    const $ul = $div.get('ul')
    expect($ul.classes()).toContain('small')
    await wrapper.setProps({small: false})
    expect($ul.classes()).not.toContain('small')
  })

  it('next div child ul has class nav-tabs when not prop noNavStyle and not prop pills', async () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', noNavStyle: false, pills: false},
    })
    const $div = wrapper.get('div')
    const $ul = $div.get('ul')
    expect($ul.classes()).toContain('nav-tabs')
    await wrapper.setProps({noNavStyle: true})
    expect($ul.classes()).not.toContain('nav-tabs')
    await wrapper.setProps({noNavStyle: false, pills: true})
    expect($ul.classes()).not.toContain('nav-tabs')
    await wrapper.setProps({noNavStyle: true, pills: true})
    expect($ul.classes()).not.toContain('nav-tabs')
  })

  it('next div child ul renders slot tabs-start', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', noNavStyle: false, pills: false},
      slots: {'tabs-start': 'foobar'},
    })
    const $div = wrapper.get('div')
    const $ul = $div.get('ul')
    expect($ul.text()).toBe('foobar')
  })

  // start beginning end div test duplication
  it('second child div is end div', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span'},
    })
    const [, $div] = wrapper.findAll('div')
    expect($div.exists()).toBe(true)
  })

  it('end div has static class tab-content', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span'},
    })
    const [, $div] = wrapper.findAll('div')
    expect($div.classes()).toContain('tab-content')
  })

  it('end div has classes from prop contentClass', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', contentClass: ['foo']},
    })
    const [, $div] = wrapper.findAll('div')
    expect($div.classes()).toContain('foo')
  })

  it('end div has another div child when tabs empty', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span'},
    })
    const [, $div] = wrapper.findAll('div')
    const $div2 = $div.find('div')
    expect($div2.exists()).toBe(true)
  })

  it('end div nested div child has static class tab-pane', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span'},
    })
    const [, $div] = wrapper.findAll('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).toContain('tab-pane')
  })

  it('end div nested div child has static class active', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span'},
    })
    const [, $div] = wrapper.findAll('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).toContain('active')
  })

  it('end div nested div child class card-body when prop card', async () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', card: true},
    })
    const [, $div] = wrapper.findAll('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).toContain('card-body')
    await wrapper.setProps({card: false})
    expect($div2.classes()).not.toContain('card-body')
  })

  it('end div nested div child renders slot empty', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span'},
      slots: {empty: 'foobar'},
    })
    const [, $div] = wrapper.findAll('div')
    const $div2 = $div.get('div')
    expect($div2.text()).toBe('foobar')
  })

  it('end div has tab component when default slot', async () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span'},
      slots: {default: () => h(BTab, {tag: 'small'}, () => 'foobar')},
    })
    await nextTick()
    const $div = wrapper.get('.tab-content')
    const $small = $div.find('small')
    expect($small.exists()).toBe(true)
  })

  it('end div does not have empty div when default slot has tab', async () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span'},
      slots: {default: () => h(BTab, {tag: 'small'}, () => 'foobar')},
    })
    await nextTick()
    const $div = wrapper.get('.tab-content')
    const $emptyDiv = $div.findAll('div.tab-pane.active')
    expect($emptyDiv.length).toBe(0)
  })
  // end div

  it('renders in correct order when prop end', () => {
    const wrapper = mount(BTabs, {
      props: {end: true},
      slots: {'empty': 'empty', 'tabs-start': 'start'},
    })
    expect(wrapper.text()).toBe('emptystart')
  })

  it('renders in correct order when not prop end', () => {
    const wrapper = mount(BTabs, {
      props: {end: false},
      slots: {'empty': 'empty', 'tabs-start': 'start'},
    })
    expect(wrapper.text()).toBe('startempty')
  })

  it('renders content passed via', async () => {
    const msg = 'foobar'

    const HelloWorld = {
      template: ` 
      <BFormGroup label="msg">
        <BFormInput v-model="msg" />
        <slot :msg="msg"/>      
      </BFormGroup>`,
      data() {
        return {
          msg,
        }
      },
      components: {
        BFormInput,
        BFormGroup,
      },
    }

    const ComplexComponent = {
      template: `
      <HelloWorld v-slot="{msg}" class="mt-3">
        out of tabs: {{ msg }}
        <BTabs>
          <BTab title="First" active><p>{{msg}}</p></BTab>
        </BTabs>
      </HelloWorld>
      `,
      data() {
        return {}
      },
      components: {
        BTab,
        BTabs,
        HelloWorld,
      },
    }

    const wrapper = mount(ComplexComponent, {})
    const HelloWorldComponent = wrapper.findComponent({name: 'HelloWorld'})

    await HelloWorldComponent.setData({msg: 'bar'})

    expect(wrapper.findComponent({name: 'b-tab'}).find('p').text()).toBe('bar')
  })

  it('emits activate-tab with an object payload', async () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [
          h(BTab, {id: 'first', title: 'First'}, () => 'one'),
          h(BTab, {id: 'second', title: 'Second'}, () => 'two'),
        ],
      },
    })

    const buttons = wrapper.findAll('button')
    await buttons[1].trigger('click')

    const payload = wrapper.emitted('activate-tab')?.[0]?.[0]
    expect(payload).toEqual({
      newTabId: 'second',
      prevTabId: 'first',
      newTabIndex: 1,
      prevTabIndex: 0,
      event: expect.any(Object),
    })
  })

  const ChildComp = {
    template: ` 
    <BTab :title="title" :id="id">
      {{ content }}
    </BTab>`,
    props: {
      title: {
        type: String,
        default: '',
      },
      content: {
        type: String,
        default: '',
      },
      id: {
        type: String,
        default: '',
      },
    },
    components: {
      BTab,
    },
  }
  const ParentComp = {
    template: ` 
    <BTabs>
      <slot />
    </BTabs>`,
    components: {
      BTabs,
    },
  }

  const ComplexComponent = {
    template: `
    <ParentComp v-model:index="index" v-model="id">
      <ChildComp v-for="tab in tabs" :id="tab.id" :key="tab.title" :title="tab.title" :content="tab.content" />
      <BTab id="i3" :title="'t3'" >c3</BTab>
    </ParentComp>
    <a href="#" id="add" @click="tabs.unshift({title: 't0', content: 'c0', id: 'i0'})">add</a>
    <a href="#" id="change" @click="id = 'i3'">change</a>
    <a href="#" id="change2" @click="index = 1">change2</a>
    `,
    data() {
      return {
        tabs: [
          {id: 'i1', title: 't1', content: 'c1'},
          {id: 'i2', title: 't2', content: 'c2'},
        ],
        index: 0,
        id: 'i1',
      }
    },
    components: {
      ParentComp,
      ChildComp,
      BTab,
    },
  }

  it('renders in complex structure', async () => {
    const wrapper = await mount(ComplexComponent, {})
    expect(wrapper.findComponent({name: 'b-tab'}).text()).toBe('c1')
    const $panes = wrapper.findAll('div.tab-pane')
    expect($panes[0].text()).toBe('c1')
    expect($panes[1].text()).toBe('c2')
    expect($panes[2].text()).toBe('c3')
    const $buttons = wrapper.findAll('button')
    expect($buttons[0].text()).toBe('t1')
    expect($buttons[0].classes()).toContain('active')
    expect($buttons[1].text()).toBe('t2')
    expect($buttons[1].classes()).not.toContain('active')
    expect($buttons[2].text()).toBe('t3')
    expect($buttons[2].classes()).not.toContain('active')
  })

  it('reactive in v-for and active to stay the same tab', async () => {
    const wrapper = await mount(ComplexComponent, {})
    expect(wrapper.findComponent({name: 'b-tab'}).text()).toBe('c1')
    await wrapper.find('#add').trigger('click')
    const $buttons = wrapper.findAll('button')
    expect($buttons[0].text()).toBe('t0')
    expect($buttons[0].classes()).not.toContain('active')
    expect($buttons[1].text()).toBe('t1')
    expect($buttons[1].classes()).toContain('active')
    expect(wrapper.vm.index).toBe(1)
  })

  it('active tab follow v-models', async () => {
    const wrapper = await mount(ComplexComponent, {})
    expect(wrapper.findComponent({name: 'b-tab'}).text()).toBe('c1')
    await wrapper.find('#change').trigger('click')

    let $buttons = wrapper.findAll('button')
    expect($buttons[0].classes()).not.toContain('active')
    expect($buttons[1].classes()).not.toContain('active')
    expect($buttons[2].classes()).toContain('active')
    expect(wrapper.vm.index).toBe(2)
    expect(wrapper.vm.id).toBe('i3')
    await wrapper.find('#change2').trigger('click')
    $buttons = wrapper.findAll('button')
    expect($buttons[0].classes()).not.toContain('active')
    expect($buttons[1].classes()).toContain('active')
    expect($buttons[2].classes()).not.toContain('active')
    expect(wrapper.vm.index).toBe(1)
    expect(wrapper.vm.id).toBe('i2')
  })

  it('selects correct tab with v-model:index and no explicit IDs', async () => {
    const TestComponent = {
      template: `
        <BTabs v-model:index="activeIndex">
          <BTab title="Tab 1">Content 1</BTab>
          <BTab title="Tab 2">Content 2</BTab>
          <BTab title="Tab 3">Content 3</BTab>
        </BTabs>
      `,
      data() {
        return {
          activeIndex: 1,
        }
      },
      components: {
        BTabs,
        BTab,
      },
    }

    const wrapper = mount(TestComponent)

    // Wait for children to register
    await nextTick()
    await nextTick()

    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(3)

    // Tab at index 1 (second tab) should be active
    expect(buttons[0].classes()).not.toContain('active')
    expect(buttons[1].classes()).toContain('active')
    expect(buttons[2].classes()).not.toContain('active')

    expect(wrapper.vm.activeIndex).toBe(1)
  })

  it('selects correct tab with v-model:index=0 and no explicit IDs', async () => {
    const TestComponent = {
      template: `
        <BTabs v-model:index="activeIndex">
          <BTab title="Tab 1">Content 1</BTab>
          <BTab title="Tab 2">Content 2</BTab>
          <BTab title="Tab 3">Content 3</BTab>
        </BTabs>
      `,
      data() {
        return {
          activeIndex: 0,
        }
      },
      components: {
        BTabs,
        BTab,
      },
    }

    const wrapper = mount(TestComponent)

    // Wait for children to register
    await nextTick()
    await nextTick()

    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(3)

    // Tab at index 0 (first tab) should be active
    expect(buttons[0].classes()).toContain('active')
    expect(buttons[1].classes()).not.toContain('active')
    expect(buttons[2].classes()).not.toContain('active')

    expect(wrapper.vm.activeIndex).toBe(0)
  })

  // --- Nav underline class ---

  it('next div child ul has class nav-underline when prop underline', async () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', underline: true},
    })
    const $ul = wrapper.get('ul')
    expect($ul.classes()).toContain('nav-underline')
    await wrapper.setProps({underline: false})
    expect($ul.classes()).not.toContain('nav-underline')
  })

  it('does not have nav-tabs class when underline is true', () => {
    const wrapper = mount(BTabs, {
      props: {underline: true},
    })
    const $ul = wrapper.get('ul')
    expect($ul.classes()).not.toContain('nav-tabs')
  })

  // --- Card-header-pills class ---

  it('has class card-header-pills when card and pills', async () => {
    const wrapper = mount(BTabs, {
      props: {card: true, pills: true},
    })
    const $ul = wrapper.get('ul')
    expect($ul.classes()).toContain('card-header-pills')
    await wrapper.setProps({pills: false})
    expect($ul.classes()).not.toContain('card-header-pills')
  })

  it('does not have card-header-tabs when card and pills', () => {
    const wrapper = mount(BTabs, {
      props: {card: true, pills: true},
    })
    const $ul = wrapper.get('ul')
    expect($ul.classes()).not.toContain('card-header-tabs')
  })

  // --- Aria orientation ---

  it('has aria-orientation horizontal by default', () => {
    const wrapper = mount(BTabs)
    const $ul = wrapper.get('ul')
    expect($ul.attributes('aria-orientation')).toBe('horizontal')
  })

  it('has aria-orientation vertical when prop vertical', async () => {
    const wrapper = mount(BTabs, {
      props: {vertical: true},
    })
    const $ul = wrapper.get('ul')
    expect($ul.attributes('aria-orientation')).toBe('vertical')
    await wrapper.setProps({vertical: false})
    expect($ul.attributes('aria-orientation')).toBe('horizontal')
  })

  // --- Tab button rendering ---

  it('renders nav buttons for each tab', () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [
          h(BTab, {id: 'tab-1', title: 'First'}, () => 'one'),
          h(BTab, {id: 'tab-2', title: 'Second'}, () => 'two'),
          h(BTab, {id: 'tab-3', title: 'Third'}, () => 'three'),
        ],
      },
    })
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(3)
  })

  it('tab buttons have class nav-link', () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [h(BTab, {id: 'tab-1', title: 'First'}, () => 'one')],
      },
    })
    const button = wrapper.get('button')
    expect(button.classes()).toContain('nav-link')
  })

  it('tab buttons have role tab', () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [h(BTab, {id: 'tab-1', title: 'First'}, () => 'one')],
      },
    })
    const button = wrapper.get('button')
    expect(button.attributes('role')).toBe('tab')
  })

  it('tab buttons have type button', () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [h(BTab, {id: 'tab-1', title: 'First'}, () => 'one')],
      },
    })
    const button = wrapper.get('button')
    expect(button.attributes('type')).toBe('button')
  })

  it('tab buttons have aria-controls matching tab id', () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [h(BTab, {id: 'tab-1', title: 'First'}, () => 'one')],
      },
    })
    const button = wrapper.get('button')
    expect(button.attributes('aria-controls')).toBe('tab-1')
  })

  it('active tab button has aria-selected true', () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [
          h(BTab, {id: 'tab-1', title: 'First'}, () => 'one'),
          h(BTab, {id: 'tab-2', title: 'Second'}, () => 'two'),
        ],
      },
    })
    const buttons = wrapper.findAll('button')
    expect(buttons[0].attributes('aria-selected')).toBe('true')
    expect(buttons[1].attributes('aria-selected')).toBe('false')
  })

  it('disabled tab button has disabled attribute', () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [
          h(BTab, {id: 'tab-1', title: 'First'}, () => 'one'),
          h(BTab, {id: 'tab-2', title: 'Second', disabled: true}, () => 'two'),
        ],
      },
    })
    const buttons = wrapper.findAll('button')
    expect(buttons[0].attributes('disabled')).toBeUndefined()
    expect(buttons[1].attributes('disabled')).toBeDefined()
  })

  it('tab button has tabindex -1 when not active and noKeyNav is false', () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [
          h(BTab, {id: 'tab-1', title: 'First'}, () => 'one'),
          h(BTab, {id: 'tab-2', title: 'Second'}, () => 'two'),
        ],
      },
    })
    const buttons = wrapper.findAll('button')
    // Active tab has no tabindex (natural)
    expect(buttons[0].attributes('tabindex')).toBeUndefined()
    // Inactive tab has tabindex -1
    expect(buttons[1].attributes('tabindex')).toBe('-1')
  })

  it('tab button has no tabindex attribute when noKeyNav is true', () => {
    const wrapper = mount(BTabs, {
      props: {noKeyNav: true},
      slots: {
        default: () => [
          h(BTab, {id: 'tab-1', title: 'First'}, () => 'one'),
          h(BTab, {id: 'tab-2', title: 'Second'}, () => 'two'),
        ],
      },
    })
    const buttons = wrapper.findAll('button')
    expect(buttons[0].attributes('tabindex')).toBeUndefined()
    expect(buttons[1].attributes('tabindex')).toBeUndefined()
  })

  // --- Tab title rendering ---

  it('tab button renders title from prop', () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [h(BTab, {id: 'tab-1', title: 'My Title'}, () => 'content')],
      },
    })
    const button = wrapper.get('button')
    expect(button.text()).toBe('My Title')
  })

  it('tab button renders title from title slot', () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [
          h(BTab, {id: 'tab-1'}, {default: () => 'content', title: () => 'Slot Title'}),
        ],
      },
    })
    const button = wrapper.get('button')
    expect(button.text()).toBe('Slot Title')
  })

  // --- Tab nav item classes ---

  it('nav item li has class nav-item', () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [h(BTab, {id: 'tab-1', title: 'First'}, () => 'one')],
      },
    })
    const li = wrapper.get('li')
    expect(li.classes()).toContain('nav-item')
  })

  it('nav item li has role presentation', () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [h(BTab, {id: 'tab-1', title: 'First'}, () => 'one')],
      },
    })
    const li = wrapper.get('li')
    expect(li.attributes('role')).toBe('presentation')
  })

  it('nav item li has titleItemClass', () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [
          h(BTab, {id: 'tab-1', title: 'First', titleItemClass: 'custom-item'}, () => 'one'),
        ],
      },
    })
    const li = wrapper.get('li')
    expect(li.classes()).toContain('custom-item')
  })

  it('tab button has titleLinkClass', () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [
          h(BTab, {id: 'tab-1', title: 'First', titleLinkClass: 'custom-link'}, () => 'one'),
        ],
      },
    })
    const button = wrapper.get('button')
    expect(button.classes()).toContain('custom-link')
  })

  it('tab button has titleLinkAttrs', () => {
    const linkAttrs = {'data-custom': 'value'}
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [
          h(BTab, {id: 'tab-1', title: 'First', titleLinkAttrs: linkAttrs}, () => 'one'),
        ],
      },
    })
    const button = wrapper.get('button')
    expect(button.attributes('data-custom')).toBe('value')
  })

  // --- activeNavItemClass / inactiveNavItemClass ---

  it('active tab button has activeNavItemClass', () => {
    const wrapper = mount(BTabs, {
      props: {activeNavItemClass: 'nav-active'},
      slots: {
        default: () => [
          h(BTab, {id: 'tab-1', title: 'First'}, () => 'one'),
          h(BTab, {id: 'tab-2', title: 'Second'}, () => 'two'),
        ],
      },
    })
    const buttons = wrapper.findAll('button')
    expect(buttons[0].classes()).toContain('nav-active')
    expect(buttons[1].classes()).not.toContain('nav-active')
  })

  it('inactive tab button has inactiveNavItemClass', () => {
    const wrapper = mount(BTabs, {
      props: {inactiveNavItemClass: 'nav-inactive'},
      slots: {
        default: () => [
          h(BTab, {id: 'tab-1', title: 'First'}, () => 'one'),
          h(BTab, {id: 'tab-2', title: 'Second'}, () => 'two'),
        ],
      },
    })
    const buttons = wrapper.findAll('button')
    expect(buttons[0].classes()).not.toContain('nav-inactive')
    expect(buttons[1].classes()).toContain('nav-inactive')
  })

  // --- navItemClass ---

  it('all tab buttons have navItemClass', () => {
    const wrapper = mount(BTabs, {
      props: {navItemClass: 'all-nav'},
      slots: {
        default: () => [
          h(BTab, {id: 'tab-1', title: 'First'}, () => 'one'),
          h(BTab, {id: 'tab-2', title: 'Second'}, () => 'two'),
        ],
      },
    })
    const buttons = wrapper.findAll('button')
    expect(buttons[0].classes()).toContain('all-nav')
    expect(buttons[1].classes()).toContain('all-nav')
  })

  // --- Tab click to activate ---

  it('clicking tab button activates the tab', async () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [
          h(BTab, {id: 'tab-1', title: 'First'}, () => 'one'),
          h(BTab, {id: 'tab-2', title: 'Second'}, () => 'two'),
        ],
      },
    })
    await nextTick()

    const buttons = wrapper.findAll('button')
    expect(buttons[0].classes()).toContain('active')
    expect(buttons[1].classes()).not.toContain('active')

    await buttons[1].trigger('click')
    await nextTick()

    expect(buttons[0].classes()).not.toContain('active')
    expect(buttons[1].classes()).toContain('active')
  })

  // --- Disabled tab is skipped ---

  it('first enabled tab is selected when first tab is disabled', () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [
          h(BTab, {id: 'tab-1', title: 'First', disabled: true}, () => 'one'),
          h(BTab, {id: 'tab-2', title: 'Second'}, () => 'two'),
          h(BTab, {id: 'tab-3', title: 'Third'}, () => 'three'),
        ],
      },
    })

    const buttons = wrapper.findAll('button')
    expect(buttons[0].classes()).not.toContain('active')
    expect(buttons[1].classes()).toContain('active')
  })

  // --- tabs-end slot ---

  it('renders tabs-end slot in the ul', () => {
    const wrapper = mount(BTabs, {
      slots: {'tabs-end': 'endslot'},
    })
    const $ul = wrapper.get('ul')
    expect($ul.text()).toContain('endslot')
  })

  it('renders both tabs-start and tabs-end slots', () => {
    const wrapper = mount(BTabs, {
      slots: {'tabs-start': 'start', 'tabs-end': 'end'},
    })
    const $ul = wrapper.get('ul')
    expect($ul.text()).toContain('start')
    expect($ul.text()).toContain('end')
  })

  // --- noFade provided to children ---

  it('tab panes have fade class when noFade is false', async () => {
    const wrapper = mount(BTabs, {
      props: {noFade: false},
      slots: {
        default: () => [h(BTab, {id: 'tab-1', title: 'First'}, () => 'one')],
      },
    })
    await nextTick()
    const pane = wrapper.get('.tab-pane')
    expect(pane.classes()).toContain('fade')
  })

  it('tab panes do not have fade class when noFade is true', async () => {
    const wrapper = mount(BTabs, {
      props: {noFade: true},
      slots: {
        default: () => [h(BTab, {id: 'tab-1', title: 'First'}, () => 'one')],
      },
    })
    await nextTick()
    const pane = wrapper.get('.tab-pane')
    expect(pane.classes()).not.toContain('fade')
  })

  // --- activate-tab event cancellation ---

  it('activate-tab event can be cancelled', async () => {
    const CancelTestComponent = {
      template: `
        <BTabs @activate-tab="onActivateTab">
          <BTab id="tab-1" title="First">one</BTab>
          <BTab id="tab-2" title="Second">two</BTab>
        </BTabs>
      `,
      data() {
        return {
          shouldPrevent: false,
        }
      },
      methods: {
        onActivateTab(payload: {event: {preventDefault: () => void}}) {
          if (this.shouldPrevent) {
            payload.event.preventDefault()
          }
        },
      },
      components: {BTabs, BTab},
    }

    const wrapper = mount(CancelTestComponent)
    await nextTick()
    await nextTick()

    const buttons = wrapper.findAll('button')
    // First tab is active
    expect(buttons[0].classes()).toContain('active')

    // Now enable prevention before clicking
    await wrapper.setData({shouldPrevent: true})

    // Try clicking second tab
    await buttons[1].trigger('click')
    await nextTick()

    // Should remain on first tab since event was prevented
    expect(buttons[0].classes()).toContain('active')
    expect(buttons[1].classes()).not.toContain('active')
  })

  // --- Tab id attribute on button ---

  it('tab button has id from buttonId prop', () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [h(BTab, {id: 'tab-1', title: 'First', buttonId: 'my-btn'}, () => 'one')],
      },
    })
    const button = wrapper.get('button')
    expect(button.attributes('id')).toBe('my-btn')
  })

  // --- Default active tab ---

  it('first non-disabled tab is active by default', () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [
          h(BTab, {id: 'tab-1', title: 'First'}, () => 'one'),
          h(BTab, {id: 'tab-2', title: 'Second'}, () => 'two'),
        ],
      },
    })
    const buttons = wrapper.findAll('button')
    expect(buttons[0].classes()).toContain('active')
  })

  it('tab with active prop is active on mount', () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [
          h(BTab, {id: 'tab-1', title: 'First'}, () => 'one'),
          h(BTab, {id: 'tab-2', title: 'Second', active: true}, () => 'two'),
        ],
      },
    })
    const buttons = wrapper.findAll('button')
    expect(buttons[0].classes()).not.toContain('active')
    expect(buttons[1].classes()).toContain('active')
  })

  // --- v-model (activeId) ---

  it('selects tab by v-model (id)', async () => {
    const TestComponent = {
      template: `
        <BTabs v-model="activeId">
          <BTab id="tab-a" title="Tab A">Content A</BTab>
          <BTab id="tab-b" title="Tab B">Content B</BTab>
        </BTabs>
      `,
      data() {
        return {activeId: 'tab-b'}
      },
      components: {BTabs, BTab},
    }

    const wrapper = mount(TestComponent)
    await nextTick()
    await nextTick()

    const buttons = wrapper.findAll('button')
    expect(buttons[0].classes()).not.toContain('active')
    expect(buttons[1].classes()).toContain('active')
  })

  // --- Empty slot when no tabs ---

  it('shows empty slot when no tabs are provided', () => {
    const wrapper = mount(BTabs, {
      slots: {empty: 'No tabs available'},
    })
    expect(wrapper.text()).toContain('No tabs available')
  })

  it('does not show empty slot when tabs are provided', async () => {
    const wrapper = mount(BTabs, {
      slots: {
        default: () => [h(BTab, {id: 'tab-1', title: 'First'}, () => 'one')],
        empty: 'No tabs available',
      },
    })
    await nextTick()
    expect(wrapper.text()).not.toContain('No tabs available')
  })
})
