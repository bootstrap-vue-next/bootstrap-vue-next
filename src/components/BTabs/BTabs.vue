<template>
  <component :is="tag" :id="id" class="tabs" :class="classes">
    <div v-if="end" class="tab-content" :class="contentClass">
      <template v-for="({tab, contentId, tabClasses, active}, i) in tabs" :key="i">
        <component :is="tab" :id="contentId" :class="tabClasses" :active="active" />
      </template>
      <div v-if="showEmpty" key="bv-empty-tab" class="tab-pane active" :class="{'card-body': card}">
        <slot name="empty" />
      </div>
    </div>
    <div :class="[navWrapperClass, {'card-header': card, 'ms-auto': vertical && end}]">
      <ul class="nav" :class="[navTabsClasses, navClass]" role="tablist">
        <slot name="tabs-start" />
        <li
          v-for="({tab, buttonId, contentId, navItemClasses, active, target}, idx) in tabs"
          :key="idx"
          class="nav-item"
          :class="tab.props['title-item-class']"
        >
          <a
            :id="buttonId"
            class="nav-link"
            :class="navItemClasses"
            data-bs-toggle="tab"
            :data-bs-target="target"
            href="#"
            role="tab"
            :aria-controls="contentId"
            :aria-selected="active"
            v-bind="tab.props['title-link-attributes']"
            @click.stop="(e) => handleClick(e, idx)"
          >
            <component :is="tab.children.title" v-if="tab.children && tab.children.title" />
            <template v-else>
              {{ tab.props.title }}
            </template>
          </a>
        </li>
        <slot name="tabs-end" />
      </ul>
    </div>
    <div v-if="!end" class="tab-content" :class="contentClass">
      <template v-for="({tab, contentId, tabClasses, active}, i) in tabs" :key="i">
        <component :is="tab" :id="contentId" :class="tabClasses" :active="active" />
      </template>
      <div v-if="showEmpty" key="bv-empty-tab" class="tab-pane active" :class="{'card-body': card}">
        <slot name="empty" />
      </div>
    </div>
  </component>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  InjectionKey,
  onMounted,
  PropType,
  provide,
  ref,
  watch,
} from 'vue'
import getID from '../../utils/getID'
import Alignment from '../../types/Alignment'
import {BvEvent} from '../../utils/bvEvent'
import {mathMax} from '../../utils/math'
import {isFunction} from '../../utils/inspect'

export interface ParentData {
  lazy: boolean
  card: boolean
}

export const injectionKey: InjectionKey<ParentData> = Symbol()

const getTabs = (slots: any): any[] => {
  if (!slots || !slots.default) return []

  return slots
    .default()
    .reduce((arr: number[], slot: any) => {
      if (typeof slot.type === 'symbol') {
        arr = arr.concat(slot.children)
      } else {
        arr.push(slot)
      }
      return arr
    }, [])
    .filter((child: any) => child.type?.name === 'BTab')
}

export default defineComponent({
  name: 'BTabs',
  props: {
    activeNavItemClass: {type: [Array, Object, String], default: null},
    activeTabClass: {type: [Array, Object, String], default: null},
    align: {type: String as PropType<Alignment>, default: null},
    card: {type: Boolean, default: false},
    contentClass: {type: [Array, Object, String], default: null},
    end: {type: Boolean, default: false},
    fill: {type: Boolean, default: false},
    id: {type: String, default: null},
    justified: {type: Boolean, default: false},
    lazy: {type: Boolean, default: false},
    navClass: {type: [Array, Object, String], default: null},
    navWrapperClass: {type: [Array, Object, String], default: null},
    noFade: {type: Boolean, default: false},
    // noKeyNav: { type: Boolean, default: false },
    noNavStyle: {type: Boolean, default: false},
    pills: {type: Boolean, default: false},
    small: {type: Boolean, default: false},
    tag: {type: String, default: 'div'},
    vertical: {type: Boolean, default: false},
    modelValue: {type: Number, default: -1},
  },
  emits: ['update:modelValue', 'activate-tab', 'click'],
  setup(props, {slots, emit}) {
    const _tabIndex = ref(props.modelValue)
    const _currentTabButton = ref('')

    const tabIndex = computed({
      get: () => _tabIndex.value,
      set: (value: number) => {
        _tabIndex.value = value
        if (tabs.value.length > 0 && value >= 0 && value < tabs.value.length) {
          _currentTabButton.value = tabs.value[value].buttonId
        } else {
          _currentTabButton.value = ''
        }
        emit('update:modelValue', value)
      },
    })

    const tabs = computed(() => {
      let tabs: any[] = []

      if (slots.default) {
        tabs = getTabs(slots).map((tab: any, idx) => {
          if (!tab.props) tab.props = {}

          const buttonId = tab.props['button-id'] || getID('tab')
          const contentId = tab.props.id || getID()
          const active = tabIndex.value > -1 ? idx === tabIndex.value : tab.props.active === ''
          const titleItemClass = tab.props['title-item-class']
          const titleLinkAttributes = tab.props['title-link-attributes']

          return {
            buttonId,
            contentId,
            active,
            disabled: tab.props.disabled === '',
            navItemClasses: [
              {
                active,
                disabled: tab.props.disabled === '',
              },
              active && props.activeNavItemClass ? props.activeNavItemClass : null,
              tab.props['title-link-class'],
            ],
            tabClasses: [
              {
                fade: !props.noFade,
              },
              active && props.activeTabClass ? props.activeTabClass : null,
            ],
            target: `#${contentId}`,
            title: tab.props.title,
            titleItemClass,
            titleLinkAttributes,
            onClick: tab.props.onClick,
            tab,
          }
        })
      }
      return tabs
    })

    const showEmpty = computed(() => !(tabs?.value && tabs.value.length > 0))

    const classes = computed(() => ({
      'd-flex align-items-start': props.vertical,
    }))

    const navTabsClasses = computed(() => ({
      'nav-pills': props.pills,
      'flex-column me-3': props.vertical,
      [`justify-content-${props.align}`]: !!props.align,
      'nav-fill': props.fill,
      'card-header-tabs': props.card,
      'nav-justified': props.justified,
      'nav-tabs': !props.noNavStyle && !props.pills,
      'small': props.small,
    }))

    const activateTab = (index: number): boolean => {
      let result = false
      if (index !== undefined) {
        if (
          index > -1 &&
          index < tabs.value.length &&
          !tabs.value[index].disabled &&
          (tabIndex.value < 0 || tabs.value[index].buttonId !== _currentTabButton.value)
        ) {
          const tabEvent = new BvEvent('activate-tab', {cancelable: true, vueTarget: this})
          emit('activate-tab', index, tabIndex.value, tabEvent)
          if (!tabEvent.defaultPrevented) {
            tabIndex.value = index
            result = true
          }
        }
      }
      if (!result && props.modelValue !== tabIndex.value) {
        emit('update:modelValue', tabIndex.value)
      }
      return result
    }

    const handleClick = (event: MouseEvent, index: number) => {
      activateTab(index)
      if (
        index >= 0 &&
        !tabs.value[index].disabled &&
        tabs.value[index]?.onClick &&
        isFunction(tabs.value[index].onClick)
      ) {
        tabs.value[index].onClick(event)
      }
    }

    activateTab(_tabIndex.value)

    watch(
      () => props.modelValue,
      (newValue, oldValue) => {
        if (newValue === oldValue) return
        newValue = mathMax(newValue, -1)
        oldValue = mathMax(oldValue, -1)

        if (tabs.value.length <= 0) {
          tabIndex.value = -1
          return
        }

        const goForward = newValue > oldValue
        let index = newValue
        const maxIdx = tabs.value.length - 1
        while (index >= 0 && index <= maxIdx && tabs.value[index].disabled) {
          index += goForward ? 1 : -1
        }

        if (index < 0) {
          activateTab(0)
          return
        }
        if (index >= tabs.value.length) {
          activateTab(tabs.value.length - 1)
          return
        }
        activateTab(index)
      }
    )

    watch(
      () => tabs.value,
      () => {
        // find last active tab
        let activeTabIndex = tabs.value
          .map((tab: any) => tab.active && !tab.disabled)
          .lastIndexOf(true)

        if (activeTabIndex < 0) {
          if (tabIndex.value >= tabs.value.length) {
            // handle last tab removed, so find the last non-disabled tab
            activeTabIndex = tabs.value.map((tab: any) => !tab.disabled).lastIndexOf(true)
          } else {
            if (tabs.value[tabIndex.value] && !tabs.value[tabIndex.value].disabled)
              activeTabIndex = tabIndex.value
          }
        }
        // still no active tab found, find first non-disabled tab
        if (activeTabIndex < 0) {
          activeTabIndex = tabs.value.map((tab: any) => !tab.disabled).indexOf(true)
        }
        // ensure only one tab active at a time
        tabs.value.forEach((tab: any, idx: number) => (tab.active = idx === activeTabIndex))

        activateTab(activeTabIndex)
      }
    )

    onMounted(() => {
      // If there are tabs available, make sure a tab is set active
      if (
        tabIndex.value < 0 &&
        tabs.value.length > 0 &&
        !tabs.value.some((tab: any) => tab.active)
      ) {
        const firstTab = tabs.value.map((t) => !t.disabled).indexOf(true)
        activateTab(firstTab >= 0 ? firstTab : -1)
      }
    })

    provide(injectionKey, {
      lazy: props.lazy,
      card: props.card,
    })

    return {
      tabs,
      showEmpty,
      classes,
      navTabsClasses,
      tabIndex,
      handleClick,
    }
  },
})
</script>
