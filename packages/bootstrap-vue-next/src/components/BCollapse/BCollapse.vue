<template>
  <slot name="header" v-bind="sharedSlots" />
  <Transition
    v-bind="basicTransitionProps"
    :enter-active-class="computedNoAnimation ? '' : 'collapsing'"
    :leave-active-class="computedNoAnimation ? '' : 'collapsing'"
    :appear="modelValue"
  >
    <component
      :is="props.tag"
      v-show="showRef"
      :id="computedId"
      ref="element"
      class="collapse"
      :class="computedClasses"
      :is-nav="props.isNav"
      v-bind="$attrs"
    >
      <slot v-if="contentShowing || isActive" v-bind="sharedSlots" />
    </component>
  </Transition>
  <slot name="footer" v-bind="sharedSlots" />
</template>

<script setup lang="ts">
import {
  computed,
  type EmitFn,
  inject,
  onBeforeUnmount,
  provide,
  readonly,
  ref,
  toRef,
  useTemplateRef,
} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import {collapseInjectionKey, globalCollapseStorageInjectionKey} from '../../utils/keys'
import type {BCollapseProps} from '../../types/ComponentProps'
import {BvTriggerableEvent} from '../../utils'
import {useShowHide} from '../../composables/useShowHide'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<Omit<BCollapseProps, 'modelValue'>>(), {
  horizontal: false,
  id: undefined,
  isNav: false,
  lazy: false,
  noAnimation: false,
  unmountLazy: false,
  tag: 'div',
  show: false,
  visible: false,
})

const props = useDefaults(_props, 'BCollapse')

const emit = defineEmits<{
  'hidden': [value: BvTriggerableEvent]
  'hide': [value: BvTriggerableEvent]
  'hide-prevented': [value: BvTriggerableEvent]
  'show': [value: BvTriggerableEvent]
  'show-prevented': [value: BvTriggerableEvent]
  'shown': [value: BvTriggerableEvent]
  'toggle': [value: BvTriggerableEvent]
}>()

type SharedSlotsData = {
  hide: () => void
  id: string
  show: () => void
  toggle: () => void
  visible: boolean
}

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  footer?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  header?: (props: SharedSlotsData) => any
}>()

const modelValue = defineModel<Exclude<BCollapseProps['modelValue'], undefined>>({
  default: false,
})

const computedId = useId(() => props.id, 'collapse')

const element = useTemplateRef<HTMLElement | null>('element')

let inCollapse = false
const onEnter = (el: Element) => {
  inCollapse = true
  requestAnimationFrame(() => {
    if (props.horizontal) {
      ;(el as HTMLElement).style.width = `${(el as HTMLElement).scrollWidth}px`
    } else {
      ;(el as HTMLElement).style.height = `${(el as HTMLElement).scrollHeight}px`
    }
  })
}
const onBeforeLeave = (el: Element) => {
  if (inCollapse) {
    return
  }
  if (props.horizontal) {
    ;(el as HTMLElement).style.width = `${el.scrollWidth}px`
  } else {
    ;(el as HTMLElement).style.height = `${el.scrollHeight}px`
  }
  ;(el as HTMLElement).offsetHeight // force reflow
}
const onLeave = (el: Element) => {
  requestAnimationFrame(() => {
    if (props.horizontal) {
      ;(el as HTMLElement).style.width = ``
    } else {
      ;(el as HTMLElement).style.height = ``
    }
  })
}

const onAfterEnter = (el: Element) => {
  ;(el as HTMLElement).style.height = ``
  ;(el as HTMLElement).style.width = ``
  inCollapse = false
}

const onAfterLeave = (el: Element) => {
  ;(el as HTMLElement).style.height = ``
  ;(el as HTMLElement).style.width = ``
  inCollapse = false
}

const {
  showRef,
  hide,
  show,
  toggle,
  isActive,
  computedNoAnimation,
  contentShowing,
  basicTransitionProps,
} = useShowHide(modelValue, props, emit as EmitFn, element, computedId, {
  addShowClass: false,
  transitionProps: {
    onBeforeLeave,
    onEnter,
    onLeave,
    onAfterEnter,
    onAfterLeave,
  },
})

const computedClasses = computed(() => ({
  'show': isActive.value,
  'navbar-collapse': props.isNav,
  'collapse-horizontal': props.horizontal,
}))

const sharedSlots = computed<SharedSlotsData>(() => ({
  toggle,
  show,
  hide,
  id: computedId.value,
  visible: showRef.value,
}))

defineExpose({
  hide,
  isNav: props.isNav,
  show,
  toggle,
  visible: readonly(showRef),
})

provide(collapseInjectionKey, {
  id: computedId,
  hide,
  show,
  toggle,
  visible: readonly(showRef),
  isNav: toRef(() => props.isNav),
})

const appRegistry = inject(
  globalCollapseStorageInjectionKey,
  undefined
)?.({
  id: computedId.value,
  toggle,
  value: readonly(showRef),
})

onBeforeUnmount(() => {
  appRegistry?.unregister()
})
</script>
