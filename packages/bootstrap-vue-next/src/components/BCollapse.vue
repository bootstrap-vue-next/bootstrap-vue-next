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
    <slot :visible="modelValueBoolean" :toggle="toggleFn" :open="open" :close="close" />
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
    horizontal?: Booleanish
    id?: string
    isNav?: Booleanish
    modelValue?: Booleanish
    skipAnimation?: Booleanish
    tag?: string
    toggle?: Booleanish
    visible?: Booleanish
  }>(),
  {
    horizontal: false,
    id: undefined,
    isNav: false,
    modelValue: false,
    skipAnimation: false,
    tag: 'div',
    toggle: false,
    visible: false,
  }
)

const emit = defineEmits<{
  'hidden': []
  'hide': [value: BvTriggerableEvent]
  'hide-prevented': []
  'show': [value: BvTriggerableEvent]
  'show-prevented': []
  'shown': []
  'update:modelValue': [value: boolean]
}>()

defineSlots<{
  default?: (props: {
    close: () => void
    open: () => void
    toggle: () => void
    visible: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  footer?: (props: {
    close: () => void
    id: string
    open: () => void
    toggle: () => void
    visible: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  header?: (props: {
    close: () => void
    id: string
    open: () => void
    toggle: () => void
    visible: boolean
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
const skipAnimationBoolean = useBooleanish(() => props.skipAnimation)

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

let revealTimeout: ReturnType<typeof setTimeout> | undefined
let hideTimeout: ReturnType<typeof setTimeout> | undefined
let _skipAnimation = skipAnimationBoolean.value

const reveal = () => {
  const event = buildTriggerableEvent('show', {cancelable: true})
  emit('show', event)
  if (event.defaultPrevented) {
    emit('show-prevented')
    return
  }
  clearTimeout(hideTimeout)
  clearTimeout(revealTimeout)
  show.value = true
  if (_skipAnimation) return
  isCollapsing.value = true
  nextTick(() => {
    if (element.value === null) return
    if (horizontalBoolean.value) {
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

const hide = () => {
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
    show.value = false
    return
  }
  if (isCollapsing.value) {
    element.value.style.height = ``
    element.value.style.width = ``
    // return
  } else {
    if (horizontalBoolean.value) {
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
      show.value = false
      isCollapsing.value = false
      emit('hidden')
    }, getTransitionDelay(element.value))
  })
}

watch(modelValue, () => {
  modelValueBoolean.value ? reveal() : hide()
})

onMounted(() => {
  if (element.value === null) return
  if (!modelValueBoolean.value && toggleBoolean.value) {
    nextTick(() => {
      modelValue.value = true
    })
  }
})

watch(skipAnimationBoolean, (newval) => {
  _skipAnimation = newval
})

if (visibleBoolean.value) {
  _skipAnimation = true
  modelValue.value = true
  nextTick(() => {
    _skipAnimation = skipAnimationBoolean.value
  })
}

watch(visibleBoolean, (newval) => {
  _skipAnimation = true
  newval ? open() : close()
  nextTick(() => {
    _skipAnimation = skipAnimationBoolean.value
  })
})

useEventListener(element, 'bv-toggle', () => {
  modelValue.value = !modelValueBoolean.value
})

defineExpose({
  close,
  isNav: isNavBoolean,
  open,
  toggle: toggleFn,
  visible: readonly(show),
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
