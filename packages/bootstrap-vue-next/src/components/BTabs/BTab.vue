<template>
  <component
    :is="tag"
    :id="computedId"
    ref="el"
    class="tab-pane"
    :class="computedClasses"
    role="tabpanel"
    :aria-labelledby="buttonId"
    v-bind="attrs"
  >
    <slot v-if="showSlot" />
  </component>
</template>

<script setup lang="ts">
import {
  computed,
  getCurrentInstance,
  inject,
  nextTick,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
  toRef,
  useAttrs,
  watch,
} from 'vue'
import {useBooleanish, useId} from '../../composables'
import type {Booleanish, ClassValue, TabType} from '../../types'
import {tabsInjectionKey} from '../../utils'

const props = withDefaults(
  defineProps<{
    id?: string
    title?: string
    active?: Booleanish
    buttonId?: string
    disabled?: Booleanish
    lazy?: Booleanish
    lazyOnce?: Booleanish
    noBody?: boolean | string
    tag?: string
    titleItemClass?: ClassValue
    titleLinkAttributes?: Record<string, unknown>
    titleLinkClass?: ClassValue
  }>(),
  {
    titleItemClass: undefined,
    titleLinkClass: undefined,
    id: undefined,
    title: undefined,
    active: false,
    // TODO this is unused - Compat issue
    buttonId: undefined,
    disabled: false,
    lazy: undefined,
    lazyOnce: undefined,
    noBody: false,
    tag: 'div',
    titleLinkAttributes: undefined,
  }
)

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  title?: (props: Record<string, never>) => any
}>()

const emit = defineEmits<{
  'update:active': [value: boolean]
}>()

defineOptions({
  inheritAttrs: false,
})

const parentData = inject(tabsInjectionKey, null)
const computedId = useId(() => props.id, 'tabpane')
const buttonId = useId(() => props.buttonId, 'tab')

const activeBoolean = useBooleanish(() => props.active)
const disabledBoolean = useBooleanish(() => props.disabled)
const lazyBoolean = useBooleanish(() => props.lazyOnce ?? props.lazy)

const lazyRenderCompleted = ref(false)
const el = ref<HTMLElement | null>(null)

const {onClick, ...attrs} = useAttrs()

const tab = computed(
  () =>
    ({
      id: computedId.value,
      buttonId: buttonId.value,
      disabled: disabledBoolean.value,
      title: props.title,
      titleComponent: slots.title,
      titleItemClass: props.titleItemClass,
      titleLinkAttributes: props.titleLinkAttributes,
      titleLinkClass: props.titleLinkClass,
      onClick,
      el: el.value,
    }) as TabType
)

onMounted(() => {
  if (!parentData) return
  parentData.registerTab(tab)
  if (activeBoolean.value) {
    parentData.activateTab(computedId.value)
  }
})

onUnmounted(() => {
  if (!parentData) return
  parentData.unregisterTab(computedId.value)
})

const isActive = toRef(() => parentData?.activeId.value === computedId.value)
const show = ref(isActive.value)

const computedLazy = toRef(() => !!(parentData?.lazy.value || lazyBoolean.value))
const computedLazyOnce = toRef(() => props.lazyOnce !== undefined)

const computedActive = toRef(() => isActive.value && !disabledBoolean.value)
const showSlot = toRef(() => {

  const hasLazyRenderedOnce =
    computedLazy.value && computedLazyOnce.value && lazyRenderCompleted.value
  return computedActive.value || !computedLazy.value || hasLazyRenderedOnce
})

watch(isActive, (active) => {
  if (active) {
    emit('update:active', true)
    setTimeout(() => {
      show.value = true
    }, 0)
    return
  }
  show.value = false
  emit('update:active', false)
})
watch(activeBoolean, (active) => {
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
  show.value && parentData?.activeTabClass ? parentData.activeTabClass : null,
])

watch(showSlot, (shown) => {
  if (shown && !lazyRenderCompleted.value) lazyRenderCompleted.value = true
})
</script>
