<template>
  <component
    :is="tag"
    :id="id"
    ref="element"
    class="collapse"
    :class="classes"
    :data-bs-parent="accordion || null"
    :is-nav="isNavBoolean"
  >
    <slot :visible="modelValue" :close="close" />
  </component>
</template>

<script setup lang="ts">
// import type {BCollapseEmits, BCollapseProps} from '../types/components'
import {computed, onMounted, ref, watch} from 'vue'
import Collapse from 'bootstrap/js/dist/collapse'
import {useEventListener} from '../composables'
import {getID, resolveBooleanish} from '../utils'
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
  id: getID(),
  modelValue: false,
  tag: 'div',
  toggle: false,
  visible: false,
  isNav: false,
})

const modelValueBoolean = computed<boolean>(() => resolveBooleanish(props.modelValue))
const toggleBoolean = computed<boolean>(() => resolveBooleanish(props.toggle))
const visibleBoolean = computed<boolean>(() => resolveBooleanish(props.visible))
const isNavBoolean = computed<boolean>(() => resolveBooleanish(props.isNav))

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
  'show': modelValueBoolean.value,
  'navbar-collapse': isNavBoolean.value,
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
    toggle: toggleBoolean.value,
  })
  if (visibleBoolean.value || modelValueBoolean.value) {
    emit('update:modelValue', true)
    instance.value?.show()
  }
})

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
</script>
