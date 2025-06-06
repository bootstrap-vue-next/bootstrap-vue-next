<template>
  <component :is="props.tag" :id="props.id" class="tabs" :class="computedClasses">
    <ReusableEmptyTab.define>
      <div class="tab-content" :class="props.contentClass">
        <slot />
        <div
          v-if="showEmpty"
          key="bv-empty-tab"
          class="tab-pane active"
          :class="{'card-body': props.card}"
        >
          <slot name="empty" />
        </div>
      </div>
    </ReusableEmptyTab.define>

    <ReusableEmptyTab.reuse v-if="props.end" />
    <div
      :class="[
        props.navWrapperClass,
        {'card-header': props.card, 'ms-auto': vertical && props.end},
      ]"
    >
      <ul
        class="nav"
        :class="[navTabsClasses, props.navClass]"
        role="tablist"
        :aria-orientation="props.vertical ? 'vertical' : 'horizontal'"
      >
        <slot name="tabs-start" />
        <li
          v-for="(tab, idx) in tabs"
          :key="tab.id ?? tab.internalId"
          class="nav-item"
          :class="tab.titleItemClass"
          role="presentation"
        >
          <button
            :id="tab.buttonId"
            class="nav-link"
            :class="[tab.navItemClasses, tab.titleLinkClass]"
            role="tab"
            :aria-controls="tab.id"
            :aria-selected="tab.active"
            :disabled="tab.disabled"
            :tabindex="props.noKeyNav ? undefined : tab.active ? undefined : -1"
            v-bind="tab.titleLinkAttrs"
            @keydown.left.exact="!props.vertical && keynav($event, -1)"
            @keydown.left.shift="!props.vertical && keynav($event, -999)"
            @keydown.up.exact="props.vertical && keynav($event, -1)"
            @keydown.up.shift="props.vertical && keynav($event, -999)"
            @keydown.right.exact="!props.vertical && keynav($event, 1)"
            @keydown.right.shift="!props.vertical && keynav($event, 999)"
            @keydown.down.exact="props.vertical && keynav($event, 1)"
            @keydown.down.shift="props.vertical && keynav($event, 999)"
            @keydown.page-up="keynav($event, -999)"
            @keydown.page-down="keynav($event, 999)"
            @keydown.home="keynav($event, -999)"
            @keydown.end="keynav($event, 999)"
            @click.stop="(e) => handleClick(e, idx)"
          >
            <component :is="tab.titleComponent" v-if="tab.titleComponent" />
            <template v-else>
              {{ tab.title }}
            </template>
          </button>
        </li>
        <slot name="tabs-end" />
      </ul>
    </div>
    <ReusableEmptyTab.reuse v-if="!props.end" />
  </component>
</template>

<script setup lang="ts">
import {
  computed,
  nextTick,
  onMounted,
  provide,
  type Ref,
  ref,
  toRef,
  unref,
  type VNode,
  watch,
} from 'vue'
import {BvEvent} from '../../utils/classes'
import {useAlignment} from '../../composables/useAlignment'
import {useId} from '../../composables/useId'
import {createReusableTemplate} from '@vueuse/core'
import type {TabType} from '../../types/Tab'
import type {BTabsProps} from '../../types/ComponentProps'
import {tabsInjectionKey} from '../../utils/keys'
import {useDefaults} from '../../composables/useDefaults'
import {sortSlotElementsByPosition} from '../../utils/dom'
import {flattenFragments} from '../../utils/flattenFragments'
import BTab from './BTab.vue'

const _props = withDefaults(defineProps<Omit<BTabsProps, 'modelValue' | 'activeIndex'>>(), {
  activeNavItemClass: undefined,
  activeTabClass: undefined,
  align: undefined,
  card: false,
  contentClass: undefined,
  end: false,
  fill: false,
  id: undefined,
  inactiveNavItemClass: undefined,
  inactiveTabClass: undefined,
  justified: false,
  lazy: false,
  navClass: undefined,
  navItemClass: undefined,
  navWrapperClass: undefined,
  noFade: false,
  noKeyNav: false,
  noNavStyle: false,
  pills: false,
  small: false,
  tag: 'div',
  tabClass: undefined,
  underline: false,
  vertical: false,
})
const props = useDefaults(_props, 'BTabs')

const emit = defineEmits<{
  'activate-tab': [
    newTabId: string,
    preTabId: string,
    newTabIndex: number,
    prevTabIndex: number,
    event: BvEvent,
  ]
}>()

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'default'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'empty'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'tabs-end'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'tabs-start'?: (props: Record<string, never>) => any
}>()

const activeIndex = defineModel<Exclude<BTabsProps['index'], undefined>>('index', {
  default: -1,
})
const activeId = defineModel<BTabsProps['modelValue']>({
  default: undefined,
})

const ReusableEmptyTab = createReusableTemplate()

const tabsInternal = ref<Ref<TabType>[]>([])

const tabElementsArray = ref<VNode[]>([])

const isChildActive = ref(false)
const initialIds = ref<string[]>([])

const updateTabElementsArray = () => {
  const tabElements = flattenFragments(slots.default?.({}) ?? [])
  tabElementsArray.value = (Array.isArray(tabElements) ? tabElements : [tabElements]).filter(
    (tab) => tab.type === BTab
  )
  // only get the ids once in setup context
  if (initialIds.value.length === 0) {
    // we need to get the ids of the tabs before they are registered. After that we use the internalId for the tabpane
    initialIds.value = tabElementsArray.value.map((tab) =>
      unref(useId(() => tab.props?.id, 'tabpane'))
    )
  }
  isChildActive.value = tabElementsArray.value.some(
    (tab) => tab.props?.active !== undefined && tab.props?.active !== false
  )
}
updateTabElementsArray()

watch(
  () => slots.default?.({}),
  () => {
    updateTabElementsArray()
    nextTick(() => {
      sortTabs()
    })
  }
)

const tabs = computed(() => {
  if (tabsInternal.value.length === 0) {
    // fail back on the slot elements, the children haven't been registered yet
    const _activeIndex = tabElementsArray.value.findIndex(
      (tab) =>
        (tab.props?.active !== undefined &&
          (tab.props.disabled === false || tab.props.disabled === undefined)) ||
        (activeId.value && tab.props?.id === activeId.value)
    )
    return tabElementsArray.value.map((tab, index) => {
      const active =
        _activeIndex !== -1
          ? index === _activeIndex
          : activeIndex.value > -1
            ? index === activeIndex.value
            : index === 0
      return {
        id: tab.props?.id ?? initialIds.value[index],
        internalId: `premount-${index}`, // temporary id for the tab
        buttonId: tab.props?.buttonId,
        disabled: tab.props?.disabled,
        title: tab.props?.title,
        titleComponent: (tab.children as {title: unknown})?.title,
        titleItemClass: tab.props?.titleItemClass,
        titleLinkAttrs: tab.props?.titleLinkAttrs,
        titleLinkClass: tab.props?.titleLinkClass,
        onClick: tab.props?.onClick,
        active,
        navItemClasses: [
          {
            active,
            disabled: !(tab.props?.disabled === false || tab.props?.disabled === undefined),
          },
          active ? props.activeNavItemClass : props.inactiveNavItemClass,
          props.navItemClass,
        ],
      }
    })
  }
  return tabsInternal.value.map((_tab) => {
    const tab = unref(_tab)
    const active = tab.id === activeId.value

    return {
      ...tab,
      active,
      navItemClasses: [
        {
          active,
          disabled: tab.disabled,
        },
        active ? props.activeNavItemClass : props.inactiveNavItemClass,
        props.navItemClass,
      ],
    }
  })
})

let initialized = false
let updateInitialActiveIndex = false
let updateInitialActiveId = false
if (activeIndex.value === -1 && activeId.value) {
  if (tabs.value.findIndex((t) => t.id === activeId.value) !== -1) {
    activeIndex.value = tabs.value.findIndex((t) => t.id === activeId.value)
  } else {
    updateInitialActiveIndex = true
  }
} else if (activeIndex.value > -1 && !activeId.value) {
  if (tabs.value[activeIndex.value]?.id) {
    activeId.value = tabs.value[activeIndex.value]?.id
  } else {
    updateInitialActiveId = true
  }
} else if (activeIndex.value === -1 && !activeId.value && !isChildActive.value) {
  activeIndex.value = tabs.value.findIndex((t) => t.disabled === undefined || t.disabled === false)
  activeId.value = tabs.value[activeIndex.value]?.id
} else if (activeIndex.value === -1 && !activeId.value && isChildActive.value) {
  activeIndex.value = tabs.value.findIndex(
    (t) =>
      t.active !== undefined &&
      t.active !== false &&
      (t.disabled === undefined || t.disabled === false)
  )
  activeId.value = tabs.value[activeIndex.value]?.id
}

function updateInitialIndexAndId() {
  // we get the computedIds after registering the tabs
  if (updateInitialActiveIndex) {
    const index = tabs.value.findIndex((t) => t.id === activeId.value)
    if (index !== -1) {
      nextTick(() => {
        activeIndex.value = index
        updateInitialActiveIndex = false
      })
    }
  }
  if (updateInitialActiveId) {
    if (activeIndex.value > -1 && tabs.value[activeIndex.value]?.id) {
      nextTick(() => {
        activeId.value = tabs.value[activeIndex.value]?.id
        updateInitialActiveId = false
      })
    }
  }
}

updateInitialIndexAndId()

const showEmpty = computed(() => !(tabs?.value && tabs.value.length > 0))

const computedClasses = computed(() => ({
  'd-flex': props.vertical,
  'align-items-start': props.vertical,
}))

const alignment = useAlignment(() => props.align)

const navTabsClasses = computed(() => ({
  'nav-pills': props.pills,
  'nav-underline': props.underline,
  'flex-column me-3': props.vertical,
  [alignment.value]: props.align !== undefined,
  'nav-fill': props.fill,
  'card-header-tabs': props.card && !props.pills && !props.underline,
  'card-header-pills': props.card && props.pills,
  'nav-justified': props.justified,
  'nav-tabs': !props.noNavStyle && !props.pills && !props.underline,
  'small': props.small,
}))

const handleClick = (event: Readonly<MouseEvent>, index: number) => {
  if (
    index >= 0 &&
    !tabs.value[index].disabled &&
    tabs.value[index]?.onClick &&
    typeof tabs.value[index].onClick === 'function'
  ) {
    tabs.value[index].onClick?.(event)
    if (event.defaultPrevented) {
      document.getElementById(tabs.value[index].buttonId)?.blur()
      return
    }
  }
  activeIndex.value = index
}

const keynav = (e: Event, direction: number) => {
  if (tabs.value.length <= 0 || props.noKeyNav) return
  e.preventDefault()
  e.stopPropagation()
  activeIndex.value = nextIndex(activeIndex.value + direction, direction)
  nextTick(() => {
    if (activeIndex.value >= 0) {
      document.getElementById(tabs.value[activeIndex.value]?.buttonId)?.focus()
    }
  })
}

const nextIndex = (start: number, direction: number) => {
  let index = start
  let minIdx = -1
  let maxIdx = -1

  for (let i = 0; i < tabs.value.length; i++) {
    if (!tabs.value[i].disabled) {
      if (minIdx === -1) minIdx = i
      maxIdx = i
    }
  }

  while (index >= minIdx && index <= maxIdx && tabs.value[index].disabled) {
    index += direction
  }

  if (index < minIdx) index = minIdx
  if (index > maxIdx) index = maxIdx

  return index
}

let previousIndex: number | undefined
let isReverting = false
watch(activeIndex, (newValue, oldValue) => {
  // Early exit if there are no tabs or all tabs are disabled
  if (tabs.value.length <= 0 || tabs.value.filter((t) => !t.disabled).length <= 0) {
    return
  }

  // If we're reverting due to a prevented event, don't process further
  if (isReverting) {
    isReverting = false
    return
  }
  // Calculate the next valid index
  const index = nextIndex(newValue, newValue > oldValue ? 1 : -1)
  if (index !== newValue) {
    // If the index is not the same as the new value, set the previous index to the old value
    // this is to prevent the event from being emitted twice
    previousIndex = oldValue
    activeIndex.value = index
    return
  }
  // Emit the activate-tab event
  const tabEvent = new BvEvent('activate-tab', {cancelable: true})
  emit(
    'activate-tab',
    tabs.value[index]?.id,
    tabs.value[previousIndex ?? oldValue]?.id,
    index,
    previousIndex ?? oldValue,
    tabEvent
  )
  // If the event is prevented, revert to the previous index
  if (tabEvent.defaultPrevented) {
    isReverting = true
    const prev = previousIndex ?? oldValue ?? nextIndex(0, 1)
    previousIndex = undefined
    // Update the active id this will also trigger the activeId watch which will update the activeIndex
    // this is to make sure we handle case that starts with id change.
    if (activeId.value !== tabs.value[prev]?.id) {
      activeId.value = tabs.value[prev]?.id
    }
    nextTick(() => {
      if (prev >= 0) {
        document.getElementById(tabs.value[prev]?.buttonId)?.focus()
      }
    })
    return
  }

  // Update the active id
  if (activeId.value !== tabs.value[index]?.id) {
    activeId.value = tabs.value[index]?.id
  }
  previousIndex = undefined
})

watch(activeId, (newValue, oldValue) => {
  if (tabs.value.length <= 0 || tabs.value.filter((t) => !t.disabled).length <= 0) {
    return
  }
  const index = tabs.value.findIndex((t) => t.id === newValue)
  // If the new tab is the same as the current tab, do nothing
  if (index === activeIndex.value) return
  const oldIndex = tabs.value.findIndex((t) => t.id === oldValue)
  // If the new tab is disabled, find the next enabled tab
  if (tabs.value[index]?.disabled) {
    // activeIndex watcher will update the activeId to the next enabled tab
    activeIndex.value = nextIndex(index, index > oldIndex ? 1 : -1)
    return
  }
  // If the new tab is not found, find the first enabled tab
  if (index === -1) {
    // activeIndex watcher will update the activeId to the first enabled tab
    activeIndex.value = nextIndex(0, 1)
    nextTick(() => {
      activeId.value = tabs.value[activeIndex.value]?.id
    })
    return
  }
  // change to the next tab
  activeIndex.value = index
})

const registerTab = (tab: Ref<TabType>) => {
  const idx = tabsInternal.value.findIndex((t) => t.value.internalId === tab.value.internalId)
  if (idx === -1) {
    tabsInternal.value.push(tab)
    if (initialized) {
      nextTick(() => {
        sortTabs()
      })
    }
  } else {
    tabsInternal.value[idx] = tab
    if (initialized) {
      // sort just in case the tab was moved
      sortTabs()
    }
  }
  const idx2 = tabsInternal.value.findIndex((t) => t.value.internalId === tab.value.internalId)
  return tab.value.id ?? (!initialized ? initialIds.value[idx2] : tab.value.internalId)
}

onMounted(() => {
  updateInitialIndexAndId()
  sortTabs()
  initialized = true
})

const sortTabs = () => {
  tabsInternal.value.sort((a, b) => sortSlotElementsByPosition(a.value.el.value, b.value.el.value))
  if (
    activeId.value &&
    activeIndex.value !== tabs.value.findIndex((t) => t.id === activeId.value)
  ) {
    activeIndex.value = tabs.value.findIndex((t) => t.id === activeId.value)
  }
}

const unregisterTab = (id: string) => {
  tabsInternal.value = tabsInternal.value.filter((t) => t.value.internalId !== id)
}

provide(tabsInjectionKey, {
  lazy: toRef(() => props.lazy),
  card: toRef(() => props.card),
  noFade: toRef(() => props.noFade),
  activeTabClass: toRef(() => props.activeTabClass),
  inactiveTabClass: toRef(() => props.inactiveTabClass),
  tabClass: toRef(() => props.tabClass),
  registerTab,
  unregisterTab,
  activeId,
  activateTab: (internalId) => {
    const idx = tabs.value.findIndex((t) => t.internalId === internalId)
    if (internalId === undefined || idx === -1) {
      activeIndex.value = nextIndex(0, 1)
      return
    }
    activeIndex.value = idx
  },
})
</script>
