<template>
  <slot
    :id="computedId"
    name="header"
    :visible="modelValueBoolean"
    :toggle="toggleFn"
    :open="open"
    :close="close"
  />
  <component
    :is="tag"
    :id="computedId"
    ref="element"
    class="collapse"
    :class="computedClasses"
    :is-nav="isNavBoolean"
    v-bind="$attrs"
  >
    <slot :visible="modelValueBoolean" :toggle="toggle" :open="open" :close="close" />
  </component>
  <slot
    :id="computedId"
    name="footer"
    :visible="modelValueBoolean"
    :toggle="toggleFn"
    :open="open"
    :close="close"
  />
</template>

<script setup lang="ts">
import {computed, nextTick, onMounted, provide, readonly, ref, watch} from 'vue'
import {useBooleanish, useId} from '../composables'
import {useEventListener, useVModel} from '@vueuse/core'
import type {Booleanish} from '../types'
import {BvTriggerableEvent, collapseInjectionKey, getTransitionDelay} from '../utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    // appear?: Booleanish
    id?: string
    modelValue?: Booleanish
    tag?: string
    toggle?: Booleanish
    horizontal?: Booleanish
    visible?: Booleanish
    isNav?: Booleanish
  }>(),
  {
    accordion: undefined,
    id: undefined,
    modelValue: false,
    tag: 'div',
    toggle: false,
    horizontal: false,
    visible: false,
    isNav: false,
  }
)

const emit = defineEmits<{
  'show': [value: BvTriggerableEvent]
  'shown': []
  'hide': [value: BvTriggerableEvent]
  'hidden': []
  'hide-prevented': []
  'show-prevented': []
  'update:modelValue': [value: boolean]
}>()

defineSlots<{
  header?: (props: {
    visible: boolean
    toggle: () => void
    open: () => void
    close: () => void
    id: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  default?: (props: {
    visible: boolean
    toggle: () => void
    open: () => void
    close: () => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  footer?: (props: {
    visible: boolean
    toggle: () => void
    open: () => void
    close: () => void
    id: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
}>()

const buildTriggerableEvent = (
  type: string,
  opts: Partial<BvTriggerableEvent> = {}
): BvTriggerableEvent =>
  new BvTriggerableEvent(type, {
    cancelable: false,
    target: element.value || null,
    relatedTarget: null,
    trigger: null,
    ...opts,
    componentId: computedId.value,
  })

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const modelValueBoolean = useBooleanish(modelValue)
const toggleBoolean = useBooleanish(() => props.toggle)
const horizontalBoolean = useBooleanish(() => props.horizontal)
const isNavBoolean = useBooleanish(() => props.isNav)
const visibleBoolean = useBooleanish(() => props.visible)

const computedId = useId(() => props.id, 'collapse')

const element = ref<HTMLElement | null>(null)
const isCollapsing = ref(false)
const show = ref(modelValueBoolean.value)

const computedClasses = computed(() => ({
  'show': show.value,
  'navbar-collapse': isNavBoolean.value,
  'collapsing': isCollapsing.value,
  'closing': show.value && !modelValueBoolean.value,
  'collapse-horizontal': horizontalBoolean.value,
}))

const close = () => {
  modelValue.value = false
}
const open = () => {
  modelValue.value = true
}
const toggleFn = () => {
  modelValue.value = !modelValueBoolean.value
}

const reveal = () => {
  show.value = true
  isCollapsing.value = true
  const event = buildTriggerableEvent('show', {cancelable: true})
  emit('show', event)
  if (event.defaultPrevented) {
    emit('show-prevented')
    return
  }
  nextTick(() => {
    if (element.value === null) return
    if (horizontalBoolean.value) {
      element.value.style.width = `${element.value.scrollWidth}px`
    } else {
      element.value.style.height = `${element.value.scrollHeight}px`
    }
    setTimeout(() => {
      isCollapsing.value = false
      emit('shown')
      if (element.value === null) return
      element.value.style.height = ''
      element.value.style.width = ''
    }, getTransitionDelay(element.value))
  })
}

const hide = () => {
  const event = buildTriggerableEvent('hide', {cancelable: true})
  emit('hide', event)
  if (event.defaultPrevented) {
    emit('hide-prevented')
    return
  }
  if (element.value === null) return
  if (horizontalBoolean.value) {
    element.value.style.width = `${element.value.scrollWidth}px`
  } else {
    element.value.style.height = `${element.value.scrollHeight}px`
  }
  // element.value.style.height = `${element.value.scrollHeight}px`
  element.value.offsetHeight // force reflow
  isCollapsing.value = true
  nextTick(() => {
    if (element.value === null) return
    element.value.style.height = ``
    element.value.style.width = ``
    setTimeout(() => {
      show.value = false
      isCollapsing.value = false
      emit('hidden')
    }, getTransitionDelay(element.value))
  })
}

watch([modelValue, show], () => {
  if (modelValueBoolean.value === true) {
    if (show.value) return
    reveal()
    return
  }
  hide()
})

onMounted(() => {
  if (element.value === null) return
  if (!modelValueBoolean.value && toggleBoolean.value) {
    nextTick(() => {
      modelValue.value = true
    })
  }
})

if (visibleBoolean.value) {
  modelValue.value = true
  show.value = true
}

watch(visibleBoolean, (newval) => {
  newval ? open() : close()
})

useEventListener(element, 'bv-toggle', () => {
  modelValue.value = !modelValueBoolean.value
})

defineExpose({
  close,
  open,
  toggle: toggleFn,
  visible: readonly(show),
  isNav: isNavBoolean,
})

provide(collapseInjectionKey, {
  id: computedId,
  close,
  open,
  toggle: toggleFn,
  visible: readonly(show),
  isNav: isNavBoolean,
})
</script>
