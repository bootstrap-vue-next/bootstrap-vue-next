<template>
  <div class="accordion-item" v-bind="wrapperAttrs" :class="[wrapperClass, directWrapperClass]">
    <BCollapse
      :id="computedId"
      v-model="modelValue"
      class="accordion-collapse"
      :class="collapseClass"
      :aria-labelledby="`${computedId}-heading`"
      v-bind="{...attrs, ...collapseAttrs}"
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
        <component
          :is="headerTag"
          :id="`${computedId}-heading`"
          class="accordion-header"
          :class="headerClass"
          v-bind="headerAttrs"
        >
          <button
            class="accordion-button"
            v-bind="buttonAttrs"
            :class="[{collapsed: !toggleVisible}, buttonClass]"
            type="button"
            :aria-expanded="toggleVisible ? 'true' : 'false'"
            :aria-controls="computedId"
            @click="slotToggle"
          >
            <slot name="title"> {{ title }} </slot>
          </button>
        </component>
      </template>
      <div class="accordion-body" v-bind="bodyAttrs" :class="bodyClass">
        <slot />
      </div>
    </BCollapse>
  </div>
</template>

<script setup lang="ts">
import {type HTMLAttributes, inject, onMounted, useAttrs, watch} from 'vue'
import {useVModel} from '@vueuse/core'
import BCollapse from '../BCollapse.vue'
import {accordionInjectionKey, BvTriggerableEvent} from '../../utils'
import {useId} from '../../composables'
import type {Booleanish, ClassValue} from '../../types'

defineOptions({
  inheritAttrs: false,
})
const {class: directWrapperClass, ...attrs} = useAttrs()

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
    wrapperAttrs?: HTMLAttributes
    wrapperClass?: ClassValue
    headerAttrs?: HTMLAttributes
    headerClass?: ClassValue
    buttonAttrs?: HTMLAttributes
    buttonClass?: ClassValue
    collapseAttrs?: HTMLAttributes
    collapseClass?: ClassValue
    bodyAttrs?: HTMLAttributes
    bodyClass?: ClassValue
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
    wrapperAttrs: undefined,
    wrapperClass: undefined,
    headerAttrs: undefined,
    headerClass: undefined,
    buttonAttrs: undefined,
    buttonClass: undefined,
    collapseAttrs: undefined,
    collapseClass: undefined,
    bodyAttrs: undefined,
    bodyClass: undefined,
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
