<template>
  <component
    :is="tag"
    :id="id"
    ref="element"
    class="collapse"
    :class="classes"
    :data-bs-parent="accordion || null"
  >
    <slot :visible="modelValue" :close="close" />
  </component>
</template>

<script setup lang="ts">
// import type {BCollapseEmits, BCollapseProps} from '../types/components'
import {computed, onMounted, ref, watch} from 'vue'
import Collapse from 'bootstrap/js/dist/collapse'
import useEventListener from '../composables/useEventListener'
import getID from '../utils/getID'

interface BCollapseProps {
  accordion?: string
  // appear?: Boolean
  id?: string
  // isNav?: Boolean
  modelValue?: boolean
  tag?: string
  toggle?: boolean
  visible?: boolean
}

const props = withDefaults(defineProps<BCollapseProps>(), {
  id: getID(),
  modelValue: false,
  tag: 'div',
  toggle: false,
  visible: false,
})

interface BCollapseEmits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'show'): void
  (e: 'shown'): void
  (e: 'hide'): void
  (e: 'hidden'): void
}

const emit = defineEmits<BCollapseEmits>()

const element = ref<HTMLElement>()
const instance = ref<Collapse>()
const classes = computed(() => ({
  show: props.modelValue,
}))

const close = () => emit('update:modelValue', false)

useEventListener(element, 'show.bs.collapse', () => {
  emit('show')
  emit('update:modelValue', true)
})

useEventListener(element, 'hide.bs.collapse', () => {
  emit('hide')
  emit('update:modelValue', false)
})

useEventListener(element, 'shown.bs.collapse', () => emit('shown'))
useEventListener(element, 'hidden.bs.collapse', () => emit('hidden'))

onMounted(() => {
  instance.value = new Collapse(element.value as HTMLElement, {
    parent: props.accordion ? `#${props.accordion}` : undefined,
    toggle: props.toggle,
  })
  if (props.visible || props.modelValue) {
    emit('update:modelValue', true)
    instance.value?.show()
  }
})

watch(
  () => props.modelValue,
  (value) => {
    if (value) {
      instance.value?.show()
    } else {
      instance.value?.hide()
    }
  }
)
watch(
  () => props.visible,
  (value) => {
    if (value) {
      emit('update:modelValue', !!value)
      instance.value?.show()
    } else {
      emit('update:modelValue', !!value)
      instance.value?.hide()
    }
  }
)
</script>
