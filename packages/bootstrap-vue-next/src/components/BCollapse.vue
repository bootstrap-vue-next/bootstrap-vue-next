<template>
  <slot name="header" v-bind="sharedSlots" />
  <component
    :is="props.tag"
    :id="computedId"
    ref="element"
    class="collapse"
    :class="computedClasses"
    :is-nav="props.isNav"
    v-bind="$attrs"
  >
    <slot v-bind="sharedSlots" />
  </component>
  <slot name="footer" v-bind="sharedSlots" />
</template>

<script setup lang="ts">
import {computed, nextTick, onMounted, provide, readonly, ref, toRef, watch} from 'vue'
import {useDefaults, useId} from '../composables'
import {useEventListener} from '@vueuse/core'
import {BvTriggerableEvent, collapseInjectionKey, getTransitionDelay} from '../utils'
import type {BCollapseProps} from '../types'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<BCollapseProps>(), {
  horizontal: false,
  id: undefined,
  isNav: false,
  skipAnimation: false,
  tag: 'div',
  toggle: false,
  visible: false,
})

const props = useDefaults(_props, 'BCollapse')

const emit = defineEmits<{
  'hidden': []
  'hide': [value: BvTriggerableEvent]
  'hide-prevented': []
  'show': [value: BvTriggerableEvent]
  'show-prevented': []
  'shown': []
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

const buildTriggerableEvent = (
  type: string,
  opts: Readonly<Partial<BvTriggerableEvent>> = {}
): BvTriggerableEvent =>
  new BvTriggerableEvent(type, {
    cancelable: false,
    target: element.value || null,
    relatedTarget: null,
    trigger: null,
    ...opts,
    componentId: computedId.value,
  })

const modelValue = defineModel<boolean>({
  default: false,
})

const computedId = useId(() => props.id, 'collapse')

const element = ref<HTMLElement | null>(null)
const isCollapsing = ref(false)
const showRef = ref(modelValue.value)

const computedClasses = computed(() => ({
  'show': showRef.value,
  'navbar-collapse': props.isNav,
  'collapsing': isCollapsing.value,
  'closing': showRef.value && !modelValue.value,
  'collapse-horizontal': props.horizontal,
}))

const hide = () => {
  modelValue.value = false
}
const show = () => {
  modelValue.value = true
}
const toggleFn = () => {
  modelValue.value = !modelValue.value
}

const sharedSlots = computed<SharedSlotsData>(() => ({
  toggle: toggleFn,
  show,
  hide,
  id: computedId.value,
  visible: modelValue.value,
}))

let revealTimeout: ReturnType<typeof setTimeout> | undefined
let hideTimeout: ReturnType<typeof setTimeout> | undefined
let _skipAnimation = props.skipAnimation

const reveal = () => {
  const event = buildTriggerableEvent('show', {cancelable: true})
  emit('show', event)
  if (event.defaultPrevented) {
    emit('show-prevented')
    return
  }
  clearTimeout(hideTimeout)
  clearTimeout(revealTimeout)
  showRef.value = true
  if (_skipAnimation) return
  isCollapsing.value = true
  nextTick(() => {
    if (element.value === null) return
    if (props.horizontal) {
      element.value.style.width = `${element.value.scrollWidth}px`
    } else {
      element.value.style.height = `${element.value.scrollHeight}px`
    }
    revealTimeout = setTimeout(() => {
      isCollapsing.value = false
      emit('shown')
      if (element.value === null) return
      element.value.style.height = ''
      element.value.style.width = ''
    }, getTransitionDelay(element.value))
  })
}

const hideFn = () => {
  const event = buildTriggerableEvent('hide', {cancelable: true})
  emit('hide', event)
  if (event.defaultPrevented) {
    emit('hide-prevented')
    return
  }
  clearTimeout(revealTimeout)
  clearTimeout(hideTimeout)
  if (element.value === null) return
  if (_skipAnimation) {
    showRef.value = false
    return
  }
  if (isCollapsing.value) {
    element.value.style.height = ``
    element.value.style.width = ``
    // return
  } else {
    if (props.horizontal) {
      element.value.style.width = `${element.value.scrollWidth}px`
    } else {
      element.value.style.height = `${element.value.scrollHeight}px`
    }
  }
  // element.value.style.height = `${element.value.scrollHeight}px`
  element.value.offsetHeight // force reflow
  isCollapsing.value = true
  nextTick(() => {
    if (element.value === null) return
    element.value.style.height = ``
    element.value.style.width = ``
    hideTimeout = setTimeout(() => {
      showRef.value = false
      isCollapsing.value = false
      emit('hidden')
    }, getTransitionDelay(element.value))
  })
}

watch(modelValue, () => {
  modelValue.value ? reveal() : hideFn()
})

onMounted(() => {
  if (element.value === null) return
  if (!modelValue.value && props.toggle) {
    nextTick(() => {
      modelValue.value = true
    })
  }
})

watch(
  () => props.skipAnimation,
  (newval) => {
    _skipAnimation = newval
  }
)

if (props.visible) {
  _skipAnimation = true
  modelValue.value = true
  nextTick(() => {
    _skipAnimation = props.skipAnimation
  })
}

watch(
  () => props.visible,
  (newval) => {
    _skipAnimation = true
    newval ? show() : hide()
    nextTick(() => {
      _skipAnimation = props.skipAnimation
    })
  }
)

useEventListener(element, 'bv-toggle', () => {
  modelValue.value = !modelValue.value
})

defineExpose({
  hide,
  isNav: props.isNav,
  show,
  toggle: toggleFn,
  visible: readonly(showRef),
})

provide(collapseInjectionKey, {
  id: computedId,
  hide,
  show,
  toggle: toggleFn,
  visible: readonly(showRef),
  isNav: toRef(() => props.isNav),
})
</script>
