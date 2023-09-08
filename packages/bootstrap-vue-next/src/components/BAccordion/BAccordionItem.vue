<template>
  <div class="accordion-item">
    <BCollapse
      :id="computedId"
      v-model="modelValue"
      class="accordion-collapse"
      v-bind="$attrs"
      :aria-labelledby="`${computedId}-heading`"
      :tag="tag"
      :toggle="toggle"
      :horizontal="horizontal"
      :visible="visible"
      :is-nav="isNav"
      @show="emit('show', $event)"
      @shown="emit('shown')"
      @hide="emit('hide', $event)"
      @hidden="emit('hidden')"
      @hide-prevented="emit('hide-prevented')"
      @show-prevented="emit('show-prevented')"
    >
      <template #header="{visible: toggleVisible, toggle: slotToggle}">
        <component :is="headerTag" :id="`${computedId}-heading`" class="accordion-header">
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
    </BCollapse>
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
    id: undefined,
    title: undefined,
    modelValue: false,
    headerTag: 'h2',
    tag: undefined,
    toggle: undefined,
    horizontal: undefined,
    visible: false,
    isNav: undefined,
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  title?: (props: Record<string, never>) => any
}>()

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
