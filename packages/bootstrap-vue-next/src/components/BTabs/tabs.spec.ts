import {enableAutoUnmount, mount} from '@vue/test-utils'
import {h} from 'vue'
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

  it.skip('first child div has tab component when default slot', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', end: true},
      slots: {default: () => h(BTab, {tag: 'small'}, () => 'foobar')},
    })
    const $div = wrapper.get('div')
    const $small = $div.find('small')
    expect($small.exists()).toBe(true)
  })

  it.skip('first child div does not have child div when default slot has tab', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span', end: true},
      slots: {default: () => h(BTab, {tag: 'small'}, () => 'foobar')},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.find('div')
    expect($div2.exists()).toBe(false)
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

  it.skip('end div has tab component when default slot', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span'},
      slots: {default: () => h(BTab, {tag: 'small'}, () => 'foobar')},
    })
    const [, $div] = wrapper.findAll('div')
    const $small = $div.find('small')
    expect($small.exists()).toBe(true)
  })

  it.skip('end div does not have child div when default slot has tab', () => {
    const wrapper = mount(BTabs, {
      props: {tag: 'span'},
      slots: {default: () => h(BTab, {tag: 'small'}, () => 'foobar')},
    })
    const [, $div] = wrapper.findAll('div')
    const $div2 = $div.find('div')
    expect($div2.exists()).toBe(false)
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

  it('renders content passed via ', async () => {
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

  const ChildComp = {
    template: ` 
    <BTab :title="title">
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
    <ParentComp v-model="index" v-model:active-id="id">
      <ChildComp v-for="tab in tabs" :id="tab.id" :key="tab.title" :title="tab.title" :content="tab.content" />
      <BTab id="i3" :title="'t3'" >c3</BTab>
    </ParentComp>
    <a href="#" id="add" @click="tabs.unshift({title: 't0', content: 'c0'})">add</a>
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
        id: undefined,
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
})
