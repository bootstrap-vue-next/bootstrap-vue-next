<template>
  <component
    :is="tag"
    :id="computedId"
    ref="element"
    class="collapse"
    :class="computedClasses"
    :data-bs-parent="accordion || null"
    :is-nav="isNavBoolean"
  >
    <slot :visible="modelValueBoolean" :close="close" />
  </component>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, toRef, watch} from 'vue'
import {Collapse} from 'bootstrap'
import {useBooleanish, useId} from '../composables'
import {useEventListener, useVModel} from '@vueuse/core'
import type {Booleanish} from '../types'

interface BCollapseProps {
  accordion?: string
  // appear?: Booleanish
  id?: string
  modelValue?: Booleanish
  tag?: string
  toggle?: Booleanish
  visible?: Booleanish
  isNav?: Booleanish
}

const props = withDefaults(defineProps<BCollapseProps>(), {
  modelValue: false,
  tag: 'div',
  toggle: false,
  visible: false,
  isNav: false,
})

interface BCollapseEmits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'show'): void
  (e: 'shown'): void
  (e: 'hide'): void
  (e: 'hidden'): void
}

const emit = defineEmits<BCollapseEmits>()

const modelValue = useVModel(props, 'modelValue', emit)

const modelValueBoolean = useBooleanish(modelValue)
const toggleBoolean = useBooleanish(toRef(props, 'toggle'))
const visibleBoolean = useBooleanish(toRef(props, 'visible'))
const isNavBoolean = useBooleanish(toRef(props, 'isNav'))

const computedId = useId(toRef(props, 'id'), 'collapse')

const element = ref<HTMLElement | null>(null)
const instance = ref<Collapse>()

const computedClasses = computed(() => ({
  'show': modelValueBoolean.value,
  'navbar-collapse': isNavBoolean.value,
}))

const close = () => (modelValue.value = false)

watch(modelValueBoolean, (value) => {
  value ? instance.value?.show() : instance.value?.hide()
})

watch(visibleBoolean, (value) => {
  modelValue.value = !!value
  value ? instance.value?.show() : instance.value?.hide()
})

useEventListener(element, 'show.bs.collapse', () => {
  emit('show')
  modelValue.value = true
})

useEventListener(element, 'hide.bs.collapse', () => {
  emit('hide')
  modelValue.value = false
})
useEventListener(element, 'shown.bs.collapse', () => emit('shown'))
useEventListener(element, 'hidden.bs.collapse', () => emit('hidden'))

onMounted(() => {
  if (element.value === null) return
  instance.value = new Collapse(element.value, {
    parent: props.accordion ? `#${props.accordion}` : undefined,
    toggle: toggleBoolean.value,
  })
  if (visibleBoolean.value || modelValueBoolean.value) {
    modelValue.value = true
    instance.value?.show()
  }
})
</script>
