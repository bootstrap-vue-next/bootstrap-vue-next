import {enableAutoUnmount, mount} from '@vue/test-utils'
import {nextTick, ref} from 'vue'
import {afterEach, describe, expect, it} from 'vitest'
import BTabs from './BTabs.vue'
import BTab from './BTab.vue'

describe('async tabs index issue', () => {
  enableAutoUnmount(afterEach)

  it('should correctly set active index when tabs are loaded asynchronously', async () => {
    // Component that reproduces the issue described in the problem statement
    const AsyncTabsComponent = {
      template: `
        <BTabs v-model:index="currentTab">
          <BTab v-for="(label, index) in tabs" :key="index" :title="'Tab ' + index">
            {{ label }} {{ currentTab }}
          </BTab>
        </BTabs>
      `,
      components: {
        BTabs,
        BTab,
      },
      setup() {
        const tabs = ref([])
        const currentTab = ref(0)

        return {
          tabs,
          currentTab,
        }
      },
    }

    const wrapper = mount(AsyncTabsComponent)

    // Initially, no tabs should be present
    expect(wrapper.findAll('.nav-item')).toHaveLength(0)
    expect(wrapper.vm.currentTab).toBe(0)

    // Simulate async loading of tabs
    wrapper.vm.tabs = ['a', 'b', 'c']
    await nextTick()

    // Give some time for the internal watchers to trigger
    await new Promise((resolve) => setTimeout(resolve, 10))
    await nextTick()

    // After async load, tabs should be present
    expect(wrapper.findAll('.nav-item')).toHaveLength(3)

    // The currentTab should activate the first tab (index 0)
    const activeTab = wrapper.find('.nav-link.active')
    expect(activeTab.exists()).toBe(true)
    expect(activeTab.text()).toBe('Tab 0')

    // The active tab content should be visible
    const activePane = wrapper.find('.tab-pane.active')
    expect(activePane.exists()).toBe(true)
    expect(activePane.text()).toContain('a') // First tab content
  })

  it('should work with the current workaround using v-if', async () => {
    // Component with v-if workaround that currently works
    const WorkaroundComponent = {
      template: `
        <BTabs v-if="tabs.length > 0" v-model:index="currentTab">
          <BTab v-for="(label, index) in tabs" :key="index" :title="'Tab ' + index">
            {{ label }} {{ currentTab }}
          </BTab>
        </BTabs>
      `,
      components: {
        BTabs,
        BTab,
      },
      setup() {
        const tabs = ref([])
        const currentTab = ref(0)

        return {
          tabs,
          currentTab,
        }
      },
    }

    const wrapper = mount(WorkaroundComponent)

    // Initially, BTabs should not be rendered due to v-if
    expect(wrapper.find('.tabs').exists()).toBe(false)
    expect(wrapper.vm.currentTab).toBe(0)

    // Simulate async loading of tabs
    wrapper.vm.tabs = ['a', 'b', 'c']
    await nextTick()

    // After async load, BTabs should be rendered and working correctly
    expect(wrapper.find('.tabs').exists()).toBe(true)
    expect(wrapper.findAll('.nav-item')).toHaveLength(3)

    const activeTab = wrapper.find('.nav-link.active')
    expect(activeTab.exists()).toBe(true)
    expect(activeTab.text()).toBe('Tab 0')

    const activePane = wrapper.find('.tab-pane.active')
    expect(activePane.exists()).toBe(true)
    expect(activePane.text()).toContain('a')
  })

  it('should correctly set active index when a specific index is set before tabs are loaded', async () => {
    // Component that sets a specific active index before tabs are loaded
    const SpecificIndexComponent = {
      template: `
        <BTabs v-model:index="currentTab">
          <BTab v-for="(label, index) in tabs" :key="index" :title="'Tab ' + index">
            {{ label }} {{ currentTab }}
          </BTab>
        </BTabs>
      `,
      components: {
        BTabs,
        BTab,
      },
      setup() {
        const tabs = ref([])
        const currentTab = ref(1) // Set to second tab initially

        return {
          tabs,
          currentTab,
        }
      },
    }

    const wrapper = mount(SpecificIndexComponent)

    // Initially, no tabs should be present
    expect(wrapper.findAll('.nav-item')).toHaveLength(0)
    expect(wrapper.vm.currentTab).toBe(1)

    // Simulate async loading of tabs
    wrapper.vm.tabs = ['a', 'b', 'c']
    await nextTick()

    // Give some time for the internal watchers to trigger
    await new Promise((resolve) => setTimeout(resolve, 10))
    await nextTick()

    // After async load, tabs should be present
    expect(wrapper.findAll('.nav-item')).toHaveLength(3)

    // The currentTab should activate the second tab (index 1)
    const activeTab = wrapper.find('.nav-link.active')
    expect(activeTab.exists()).toBe(true)
    expect(activeTab.text()).toBe('Tab 1')

    // The active tab content should be visible
    const activePane = wrapper.find('.tab-pane.active')
    expect(activePane.exists()).toBe(true)
    expect(activePane.text()).toContain('b') // Second tab content
  })
})
