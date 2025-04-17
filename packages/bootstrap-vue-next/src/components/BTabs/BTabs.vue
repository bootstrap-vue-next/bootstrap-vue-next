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
          :key="tab.id"
          class="nav-item"
          :class="tab.titleItemClass?.()"
          role="presentation"
        >
          <button
            :id="tab.buttonId"
            class="nav-link"
            :class="[tab.navItemClasses, tab.titleLinkClass?.()]"
            role="tab"
            :aria-controls="tab.id"
            :aria-selected="tab.active"
            :tabindex="props.noKeyNav ? undefined : tab.active ? undefined : -1"
            v-bind="tab.titleLinkAttrs?.()"
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
            @click.stop.prevent="(e) => handleClick(e, idx)"
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
import {computed, nextTick, provide, type Ref, ref, toRef, unref, watch} from 'vue'
import {BvEvent} from '../../utils/classes'
import {useAlignment} from '../../composables/useAlignment'
import {createReusableTemplate} from '@vueuse/core'
import type {TabType} from '../../types/Tab'
import type {BTabsProps} from '../../types/ComponentProps'
import {tabsInjectionKey} from '../../utils/keys'
import {useDefaults} from '../../composables/useDefaults'
import {sortSlotElementsByPosition} from '../../utils/dom'
import {flattenFragments} from '../../utils/flattenFragments'
import BTab from './BTab.vue'

const _props = withDefaults(defineProps<Omit<BTabsProps, 'modelValue' | 'activeId'>>(), {
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
  'activate-tab': [v1: number, v2: number, v3: BvEvent]
  'click': [] // TODO click event is never used
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

const modelValue = defineModel<Exclude<BTabsProps['modelValue'], undefined>>({
  default: -1,
})
const activeId = defineModel<BTabsProps['activeId']>('activeId', {
  default: undefined,
})

const ReusableEmptyTab = createReusableTemplate()

const tabsInternal = ref<Ref<TabType>[]>([])

const tabs = computed(() => {
  const tabElements = flattenFragments(slots.default?.({}))
  const tabElementsArray = (Array.isArray(tabElements) ? tabElements : [tabElements]).filter(
    (tab) => tab.type === BTab
  )
  console.log('tabElementsArray', tabElementsArray)
  if (tabsInternal.value.length === 0) {
    // fail back on the slot elements, the children haven't been registered yet
    const activeIndex = tabElementsArray.findIndex(
      (tab) =>
        (tab.props?.active !== undefined &&
          (tab.props.disabled === false || tab.props.disabled === undefined)) ||
        (activeId.value && tab.props?.id === activeId.value)
    )
    return tabElementsArray.map((tab, index) => {
      const active = activeIndex !== -1 ? index === activeIndex : index === 0
      return {
        id: tab.props?.id,
        buttonId: tab.props?.buttonId,
        disabled: tab.props?.disabled,
        title: tab.props?.title,
        titleComponent: (tab.children as {title: unknown})?.title,
        titleItemClass: () => tab.props?.titleItemClass,
        titleLinkAttrs: () => tab.props?.titleLinkAttrs,
        titleLinkClass: () => tab.props?.titleLinkClass,
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

const activateTab = (index: number): void => {
  if (index !== undefined) {
    const id = tabs.value[index]?.id
    if (
      index > -1 &&
      index < tabs.value.length &&
      !tabs.value[index].disabled &&
      (modelValue.value < 0 || activeId.value !== id || modelValue.value !== index)
    ) {
      const tabEvent = new BvEvent('activate-tab', {cancelable: true})
      emit('activate-tab', index, modelValue.value, tabEvent)
      if (!tabEvent.defaultPrevented) {
        if (activeId.value !== id) activeId.value = id
        if (modelValue.value !== index) modelValue.value = index
      }
    }
  }
}

const handleClick = (event: Readonly<MouseEvent>, index: number) => {
  activateTab(index)
  if (
    index >= 0 &&
    !tabs.value[index].disabled &&
    tabs.value[index]?.onClick &&
    typeof tabs.value[index].onClick === 'function'
  ) {
    tabs.value[index].onClick?.(event)
  }
}

const keynav = (e: Event, direction: number) => {
  if (tabs.value.length <= 0 || props.noKeyNav) return
  e.preventDefault()
  e.stopPropagation()
  modelValue.value = nextIndex(modelValue.value + direction, direction)
  document.getElementById(tabs.value[modelValue.value]?.buttonId)?.focus()
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

watch(modelValue, (newValue, oldValue) => {
  if (newValue === oldValue) return
  if (tabs.value.length <= 0) {
    return
  }

  const index = nextIndex(newValue, newValue > oldValue ? 1 : -1)
  nextTick(() => {
    activateTab(index)
  })
})

watch(activeId, (newValue, oldValue) => {
  const index = tabs.value.findIndex((t) => t.id === newValue)
  if (newValue === oldValue) return
  if (tabs.value.length <= 0) {
    return
  }
  if (index === -1) {
    activateTab(nextIndex(0, 1))
    return
  }
  activateTab(index)
})

const registerTab = (tab: Ref<TabType>) => {
  if (!tabsInternal.value.find((t) => t.value.id === tab.value.id)) {
    tabsInternal.value.push(tab)
  } else {
    tabsInternal.value[tabsInternal.value.findIndex((t) => t.value.id === tab.value.id)] = tab
  }
  tabsInternal.value.sort((a, b) => sortSlotElementsByPosition(a.value.el, b.value.el))
  findActive()
}

const sortTabs = () => {
  tabsInternal.value.sort((a, b) => sortSlotElementsByPosition(a.value.el, b.value.el))
}

const unregisterTab = (id: string) => {
  tabsInternal.value = tabsInternal.value.filter((t) => t.value.id !== id)
}

watch(
  tabsInternal,
  () => {
    findActive()
  },
  {deep: true}
)

const findActive = () => {
  if (tabs.value.length === 0) {
    modelValue.value = -1
    activeId.value = undefined
    return
  }
  if (modelValue.value >= 0 && !activeId.value) {
    activeId.value = tabs.value[modelValue.value]?.id
  }
  if (tabs.value.find((t) => t.id === activeId.value)) {
    activateTab(tabs.value.findIndex((t) => t.id === activeId.value))
    return
  }
  activateTab(tabs.value.map((tab) => !tab.disabled).indexOf(true))
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
  activateTab: (id) => {
    const idx = tabs.value.findIndex((t) => t.id === id)
    if (id === undefined || idx === -1) {
      activateTab(nextIndex(0, 1))
      return
    }
    activateTab(idx)
  },
  sortTabs,
})
</script>
