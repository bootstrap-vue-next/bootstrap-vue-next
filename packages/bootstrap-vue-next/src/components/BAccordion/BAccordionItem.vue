<template>
  <div class="accordion-item">
    <b-collapse
      :id="computedId"
      v-model="modelValue"
      class="accordion-collapse"
      v-bind="$attrs"
      :aria-labelledby="`heading${computedId}`"
      :tag="tag"
      :toggle="toggle"
      :horizontal="horizontal"
      :visible="visible"
      :is-nav="isNav"
      v-on="events"
    >
      <template #header="{visible: toggleVisible, toggle: slotToggle}">
        <component :is="headerTag" :id="`heading${computedId}`" class="accordion-header">
          <button
            class="accordion-button"
            :class="{collapsed: !toggleVisible}"
            type="button"
            :aria-expanded="toggleVisible ? 'true' : 'false'"
            :aria-controls="computedId"
            @click="slotToggle"
          >
            <slot name="title"> {{ title }} </slot>
          </button>
        </component>
      </template>
      <div class="accordion-body">
        <slot />
      </div>
    </b-collapse>
  </div>
</template>

<script setup lang="ts">
import {inject, onMounted, watch} from 'vue'
import {useVModel} from '@vueuse/core'
import BCollapse from '../BCollapse.vue'
import {accordionInjectionKey, BvTriggerableEvent} from '../../utils'
import {useId} from '../../composables'
import type {Booleanish} from '../../types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    id?: string
    title?: string
    modelValue?: Booleanish
    headerTag?: string
    tag?: string
    toggle?: Booleanish
    horizontal?: Booleanish
    visible?: Booleanish
    isNav?: Booleanish
  }>(),
  {
    headerTag: 'h2',
    id: undefined,
    title: undefined,
    tag: undefined,
    horizontal: undefined,
    toggle: undefined,
    isNav: undefined,
    modelValue: false,
    visible: false,
  }
)

const emit = defineEmits<{
  'show': [value: BvTriggerableEvent]
  'shown': [value: BvTriggerableEvent]
  'hide': [value: BvTriggerableEvent]
  'hidden': [value: BvTriggerableEvent]
  'hide-prevented': []
  'show-prevented': []
  'update:modelValue': [value: boolean]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  title?: (props: Record<string, never>) => any
}>()

const events = {
  'show': (e: BvTriggerableEvent) => emit('show', e),
  'shown': (e: BvTriggerableEvent) => emit('shown', e),
  'hide': (e: BvTriggerableEvent) => emit('hide', e),
  'hidden': (e: BvTriggerableEvent) => emit('hidden', e),
  'hide-prevented': () => emit('hide-prevented'),
  'show-prevented': () => emit('show-prevented'),
}

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const parentData = inject(accordionInjectionKey, null)

const computedId = useId(() => props.id, 'accordion_item')

onMounted(() => {
  if (modelValue.value && !parentData?.free.value) {
    parentData?.setOpenItem(computedId.value)
  }
  if (!modelValue.value && parentData?.openItem.value === computedId.value) {
    modelValue.value = true
  }
})

watch(
  () => parentData?.openItem.value,
  () =>
    (modelValue.value = parentData?.openItem.value === computedId.value && !parentData?.free.value)
)
watch(modelValue, () => {
  if (modelValue.value && !parentData?.free.value) parentData?.setOpenItem(computedId.value)
})
</script>
