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
          :class="tab.titleItemClass"
          role="presentation"
        >
          <button
            :id="tab.buttonId"
            class="nav-link"
            :class="tab.navItemClasses"
            role="tab"
            :aria-controls="tab.id"
            :aria-selected="tab.active"
            v-bind="tab.titleLinkAttrs"
            @keydown.left.stop.prevent="keynav(-1)"
            @keydown.right.stop.prevent="keynav(1)"
            @keydown.page-up.stop.prevent="keynav(-999)"
            @keydown.page-down.stop.prevent="keynav(999)"
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
import {BvEvent, tabsInjectionKey} from '../../utils'
import {useAlignment, useDefaults} from '../../composables'
import type {BTabsProps, TabType} from '../../types'
import {createReusableTemplate} from '@vueuse/core'

const _props = withDefaults(defineProps<BTabsProps>(), {
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
  // noKeyNav: false,
  noNavStyle: false,
  pills: false,
  small: false,
  tag: 'div',
  tabClass: undefined,
  vertical: false,
})
const props = useDefaults(_props, 'BTabs')

const emit = defineEmits<{
  'activate-tab': [v1: number, v2: number, v3: BvEvent]
  'click': [] // TODO click event is never used
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'default'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'empty'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'tabs-end'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'tabs-start'?: (props: Record<string, never>) => any
}>()

const modelValue = defineModel<number>({
  default: -1,
})
const activeId = defineModel<string | undefined>('activeId', {
  default: undefined,
})

const ReusableEmptyTab = createReusableTemplate()

const tabsInternal = ref<Ref<TabType>[]>([])

const tabs = computed(() =>
  tabsInternal.value.map((_tab) => {
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
        tab.titleLinkClass,
      ],
    }
  })
)

const showEmpty = toRef(() => !(tabs?.value && tabs.value.length > 0))

const computedClasses = computed(() => ({
  'd-flex': props.vertical,
  'align-items-start': props.vertical,
}))

const alignment = useAlignment(() => props.align)

const navTabsClasses = computed(() => ({
  'nav-pills': props.pills,
  'flex-column me-3': props.vertical,
  [alignment.value]: props.align !== undefined,
  'nav-fill': props.fill,
  'card-header-tabs': props.card,
  'nav-justified': props.justified,
  'nav-tabs': !props.noNavStyle && !props.pills,
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

const keynav = (direction: number) => {
  if (tabs.value.length <= 0) return
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
  tabsInternal.value.sort((a, b) => {
    if (!Node || !a.value.el || !b.value.el) return 0
    const position = a.value.el.compareDocumentPosition(b.value.el)
    if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1
    if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1
    return 0
  })
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
})
</script>
