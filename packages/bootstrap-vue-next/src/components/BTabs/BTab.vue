<template>
  <component
    :is="props.tag"
    :id="computedId"
    ref="el"
    class="tab-pane"
    :class="computedClasses"
    role="tabpanel"
    :aria-labelledby="computedButtonId"
    v-bind="attrs"
  >
    <slot v-if="showSlot" />
  </component>
</template>

<script setup lang="ts">
import {computed, inject, onMounted, onUnmounted, ref, toRef, useAttrs, watch} from 'vue'
import {useDefaults, useId} from '../../composables'
import type {BTabProps, TabType} from '../../types'
import {tabsInjectionKey} from '../../utils'

const _props = withDefaults(defineProps<BTabProps>(), {
  buttonId: undefined,
  disabled: false,
  id: undefined,
  lazy: undefined,
  lazyOnce: undefined,
  noBody: false,
  tag: 'div',
  title: undefined,
  titleItemClass: undefined,
  titleLinkAttrs: undefined,
  titleLinkClass: undefined,
})
const props = useDefaults(_props, 'BTab')

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  title?: (props: Record<string, never>) => any
}>()

defineOptions({
  inheritAttrs: false,
})

const activeModel = defineModel<boolean>('active', {
  default: false,
})

const parentData = inject(tabsInjectionKey, null)
const computedId = useId(() => props.id, 'tabpane')
const computedButtonId = useId(() => props.buttonId, 'tab')

const lazyRenderCompleted = ref(false)
const el = ref<HTMLElement | null>(null)

const {onClick, ...attrs} = useAttrs()

const tab = computed(
  () =>
    ({
      id: computedId.value,
      buttonId: computedButtonId.value,
      disabled: props.disabled,
      title: props.title,
      titleComponent: slots.title,
      titleItemClass: props.titleItemClass,
      titleLinkAttrs: props.titleLinkAttrs,
      titleLinkClass: props.titleLinkClass,
      onClick,
      el: el.value,
    }) as TabType
)

onMounted(() => {
  if (!parentData) return
  parentData.registerTab(tab)
  if (props.active) {
    parentData.activateTab(computedId.value)
  }
})

onUnmounted(() => {
  if (!parentData) return
  parentData.unregisterTab(computedId.value)
})

const isActive = toRef(() => parentData?.activeId.value === computedId.value)
const show = ref(isActive.value)

const computedLazy = toRef(() => !!(parentData?.lazy.value || (props.lazyOnce ?? props.lazy)))
const computedLazyOnce = toRef(() => props.lazyOnce !== undefined)

const computedActive = toRef(() => isActive.value && !props.disabled)
const showSlot = toRef(
  () =>
    computedActive.value ||
    !computedLazy.value ||
    (computedLazy.value && computedLazyOnce.value && lazyRenderCompleted.value)
)

watch(isActive, (active) => {
  if (active) {
    activeModel.value = true
    setTimeout(() => {
      show.value = true
    }, 0)
    return
  }
  show.value = false
  activeModel.value = false
})
watch(
  () => props.active,
  (active) => {
    if (!parentData) return
    if (!active) {
      if (isActive.value) {
        parentData.activateTab(undefined)
      }
      return
    }
    parentData.activateTab(computedId.value)
  }
)

const computedClasses = computed(() => [
  {
    'active': isActive.value,
    'show': show.value,
    'card-body': parentData?.card.value && props.noBody === false,
    'fade': !parentData?.noFade.value,
  },
  show.value ? parentData?.activeTabClass : parentData?.inactiveTabClass,
  parentData?.tabClass,
])

watch(showSlot, (shown) => {
  if (shown && !lazyRenderCompleted.value) lazyRenderCompleted.value = true
})
</script>
