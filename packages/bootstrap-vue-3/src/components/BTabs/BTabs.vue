<template>
  <component :is="tag" :id="id" class="tabs" :class="computedClasses">
    <!-- Tab Content Above Tabs -->
    <div v-if="endBoolean" class="tab-content" :class="contentClass">
      <component
        :is="tabComponent()"
        v-for="({tabComponent, contentId, tabClasses, active}, i) in tabs"
        :id="contentId"
        :key="i"
        :class="tabClasses"
        :active="active"
      />
      <div
        v-if="showEmpty"
        key="bv-empty-tab"
        class="tab-pane active"
        :class="{'card-body': cardBoolean}"
      >
        <slot name="empty" />
      </div>
    </div>
    <div
      :class="[navWrapperClass, {'card-header': cardBoolean, 'ms-auto': vertical && endBoolean}]"
    >
      <!-- Render Tabs -->
      <ul class="nav" :class="[navTabsClasses, navClass]" role="tablist">
        <slot name="tabs-start" />
        <li
          v-for="({tab, buttonId, contentId, navItemClasses, active, target}, idx) in tabs"
          :key="idx"
          class="nav-item"
          :class="tab.props['title-item-class']"
        >
          <button
            :id="buttonId"
            class="nav-link"
            :class="navItemClasses"
            data-bs-toggle="tab"
            :data-bs-target="target"
            role="tab"
            :aria-controls="contentId"
            :aria-selected="active"
            v-bind="tab.props['title-link-attributes']"
            @click.stop.prevent="(e) => handleClick(e, idx)"
          >
            <component :is="tab.children.title" v-if="tab.children && tab.children.title" />
            <template v-else>
              {{ tab.props.title }}
            </template>
          </button>
        </li>
        <slot name="tabs-end" />
      </ul>
    </div>
    <!-- Tab Content Below Tabs-->
    <div v-if="!endBoolean" class="tab-content" :class="contentClass">
      <component
        :is="tabComponent()"
        v-for="({tabComponent, contentId, tabClasses, active}, i) in tabs"
        :id="contentId"
        :key="i"
        :class="tabClasses"
        :active="active"
      />
      <div
        v-if="showEmpty"
        key="bv-empty-tab"
        class="tab-pane active"
        :class="{'card-body': cardBoolean}"
      >
        <slot name="empty" />
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
// import type {BTabsProps, BTabsEmits} from '../types/components'
import type {BTabsParentData} from '../../types/components'
import {computed, InjectionKey, onMounted, provide, ref, toRef, useSlots, watch} from 'vue'
import {BvEvent, getId} from '../../utils'
import {useAlignment, useBooleanish} from '../../composables'
import type {Alignment, Booleanish, ClassValue} from '../../types'

interface BTabsProps {
  activeNavItemClass?: ClassValue
  activeTabClass?: ClassValue
  align?: Alignment.JustifyContent
  card?: Booleanish
  contentClass?: ClassValue
  end?: Booleanish
  fill?: Booleanish
  id?: string
  justified?: Booleanish
  lazy?: Booleanish
  navClass?: ClassValue
  navWrapperClass?: ClassValue
  noFade?: Booleanish
  // noKeyNav?: Booleanish
  noNavStyle?: Booleanish
  pills?: Booleanish
  small?: Booleanish
  tag?: string
  vertical?: Booleanish
  modelValue?: number
}

const props = withDefaults(defineProps<BTabsProps>(), {
  card: false,
  end: false,
  fill: false,
  justified: false,
  lazy: false,
  noFade: false,
  noNavStyle: false,
  pills: false,
  small: false,
  tag: 'div',
  vertical: false,
  modelValue: -1,
})

interface BTabsEmits {
  (e: 'update:modelValue', value: number): void
  (e: 'activate-tab', v1: number, v2: number, v3: BvEvent): void
  (e: 'click'): void // TODO click event is never used
}

const emit = defineEmits<BTabsEmits>()

const slots = useSlots()

const cardBoolean = useBooleanish(toRef(props, 'card'))
const endBoolean = useBooleanish(toRef(props, 'end'))
const fillBoolean = useBooleanish(toRef(props, 'fill'))
const justifiedBoolean = useBooleanish(toRef(props, 'justified'))
const lazyBoolean = useBooleanish(toRef(props, 'lazy'))
const noFadeBoolean = useBooleanish(toRef(props, 'noFade'))
const noNavStyleBoolean = useBooleanish(toRef(props, 'noNavStyle'))
const pillsBoolean = useBooleanish(toRef(props, 'pills'))
const smallBoolean = useBooleanish(toRef(props, 'small'))
const verticalBoolean = useBooleanish(toRef(props, 'vertical'))

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

      const buttonId = tab.props['button-id'] || getId('tab')
      const contentId = tab.props.id || getId()
      const active = tabIndex.value > -1 ? idx === tabIndex.value : tab.props.active === ''
      const titleItemClass = tab.props['title-item-class']
      const titleLinkAttributes = tab.props['title-link-attributes']

      return {
        buttonId,
        contentId,
        active,
        disabled: tab.props.disabled === '' || tab.props.disabled === true,
        navItemClasses: [
          {
            active,
            disabled: tab.props.disabled === '' || tab.props.disabled === true,
          },
          active && props.activeNavItemClass ? props.activeNavItemClass : null,
          tab.props['title-link-class'],
        ],
        tabClasses: [
          {
            fade: !noFadeBoolean.value,
          },
          active && props.activeTabClass ? props.activeTabClass : null,
        ],
        target: `#${contentId}`,
        title: tab.props.title,
        titleItemClass,
        titleLinkAttributes,
        onClick: tab.props.onClick,
        tab, //TODO remove this in future since the mapped value does not provide a direct reference to the actual slot component.
        tabComponent: () => getTabs(slots)[idx],
      }
    })
  }
  return tabs
})

const showEmpty = computed(() => !(tabs?.value && tabs.value.length > 0))

const computedClasses = computed(() => ({
  'd-flex': verticalBoolean.value,
  'align-items-start': verticalBoolean.value,
}))

const alignment = useAlignment(toRef(props, 'align'))

const navTabsClasses = computed(() => ({
  'nav-pills': pillsBoolean.value,
  'flex-column me-3': verticalBoolean.value,
  [alignment.value]: props.align !== undefined,
  'nav-fill': fillBoolean.value,
  'card-header-tabs': cardBoolean.value,
  'nav-justified': justifiedBoolean.value,
  'nav-tabs': !noNavStyleBoolean.value && !pillsBoolean.value,
  'small': smallBoolean.value,
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
      const tabEvent = new BvEvent('activate-tab', {cancelable: true})
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
    typeof tabs.value[index].onClick === 'function'
  ) {
    tabs.value[index].onClick(event)
  }
}

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
    .filter((child: any) => child.type?.__name === 'BTab')
}

activateTab(_tabIndex.value)

watch(
  () => props.modelValue,
  (newValue, oldValue) => {
    if (newValue === oldValue) return
    newValue = Math.max(newValue, -1)
    oldValue = Math.max(oldValue, -1)

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
    let activeTabIndex = tabs.value.map((tab: any) => tab.active && !tab.disabled).lastIndexOf(true)

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
  if (tabIndex.value < 0 && tabs.value.length > 0 && !tabs.value.some((tab: any) => tab.active)) {
    const firstTab = tabs.value.map((t) => !t.disabled).indexOf(true)
    activateTab(firstTab >= 0 ? firstTab : -1)
  }
})

provide(injectionKey, {
  lazy: lazyBoolean.value,
  card: cardBoolean.value,
})
</script>

<script lang="ts">
export const injectionKey: InjectionKey<BTabsParentData> = Symbol()
</script>
