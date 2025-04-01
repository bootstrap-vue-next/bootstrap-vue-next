<template>
  <component
    :is="props.tag"
    :id="computedId"
    ref="_el"
    class="tab-pane"
    :class="computedClasses"
    role="tabpanel"
    :aria-labelledby="computedButtonId"
    v-bind="processedAttrs"
  >
    <slot v-if="showSlot" />
  </component>
</template>

<script setup lang="ts">
import {computed, inject, onMounted, onUnmounted, ref, useAttrs, useTemplateRef, watch} from 'vue'
import {useId} from '../../composables/useId'
import {useDefaults} from '../../composables/useDefaults'
import type {TabType} from '../../types/Tab'
import type {BTabProps} from '../../types/ComponentProps'
import {tabsInjectionKey} from '../../utils/keys'

const _props = withDefaults(defineProps<Omit<BTabProps, 'active'>>(), {
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

const activeModel = defineModel<Exclude<BTabProps['active'], undefined>>('active', {
  default: false,
})

const parentData = inject(tabsInjectionKey, null)
const computedId = useId(() => props.id, 'tabpane')
const computedButtonId = useId(() => props.buttonId, 'tab')

const lazyRenderCompleted = ref(false)
const el = useTemplateRef<HTMLElement>('_el')

const attrs = useAttrs()
const processedAttrs = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {onClick: _, ...tabAttrs} = attrs
  return tabAttrs
})

const tab = computed(
  () =>
    ({
      id: computedId.value,
      buttonId: computedButtonId.value,
      disabled: props.disabled,
      title: props.title,
      titleComponent: slots.title,
      titleItemClass: () => props.titleItemClass,
      titleLinkAttrs: () => props.titleLinkAttrs,
      titleLinkClass: () => props.titleLinkClass,
      onClick: attrs.onClick,
      el: el.value,
    }) as TabType
)

onMounted(() => {
  if (!parentData) return
  parentData.registerTab(tab)
  if (activeModel.value) {
    parentData.activateTab(computedId.value)
  }
})

onUnmounted(() => {
  if (!parentData) return
  parentData.unregisterTab(computedId.value)
})

const isActive = computed(() => parentData?.activeId.value === computedId.value)
const show = ref(isActive.value)

const computedLazy = computed(() => !!(parentData?.lazy.value || (props.lazyOnce ?? props.lazy)))
const computedLazyOnce = computed(() => props.lazyOnce !== undefined)

const computedActive = computed(() => isActive.value && !props.disabled)
const showSlot = computed(
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
watch(activeModel, (active) => {
  if (!parentData) return
  if (!active) {
    if (isActive.value) {
      parentData.activateTab(undefined)
    }
    return
  }
  parentData.activateTab(computedId.value)
})

const computedClasses = computed(() => [
  {
    'active': isActive.value,
    'show': show.value,
    'card-body': parentData?.card.value && props.noBody === false,
    'fade': !parentData?.noFade.value,
  },
  show.value ? parentData?.activeTabClass.value : parentData?.inactiveTabClass.value,
  parentData?.tabClass.value,
])

watch(showSlot, (shown) => {
  if (shown && !lazyRenderCompleted.value) lazyRenderCompleted.value = true
})
</script>
