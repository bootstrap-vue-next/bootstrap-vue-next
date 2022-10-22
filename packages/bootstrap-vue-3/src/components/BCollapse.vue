<template>
  <component
    :is="tag"
    :id="id"
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
// import type {BCollapseEmits, BCollapseProps} from '../types/components'
import {computed, onMounted, ref, toRef, watch} from 'vue'
import {Collapse} from 'bootstrap'
import {useBooleanish, useEventListener} from '../composables'
import {getId} from '../utils'
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
  id: getId(),
  modelValue: false,
  tag: 'div',
  toggle: false,
  visible: false,
  isNav: false,
})

const modelValueBoolean = useBooleanish(toRef(props, 'modelValue'))
const toggleBoolean = useBooleanish(toRef(props, 'toggle'))
const visibleBoolean = useBooleanish(toRef(props, 'visible'))
const isNavBoolean = useBooleanish(toRef(props, 'isNav'))

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

const computedClasses = computed(() => ({
  'show': modelValueBoolean.value,
  'navbar-collapse': isNavBoolean.value,
}))

const close = () => emit('update:modelValue', false)

watch(
  () => modelValueBoolean.value,
  (value) => {
    if (value) {
      instance.value?.show()
    } else {
      instance.value?.hide()
    }
  }
)
watch(
  () => visibleBoolean.value,
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
    toggle: toggleBoolean.value,
  })
  if (visibleBoolean.value || modelValueBoolean.value) {
    emit('update:modelValue', true)
    instance.value?.show()
  }
})
</script>
