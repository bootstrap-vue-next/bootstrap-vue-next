<template>
  <div class="accordion-item" v-bind="props.wrapperAttrs" :class="wrapperClass">
    <BCollapse
      :id="computedId"
      v-model="modelValue"
      class="accordion-collapse"
      :class="props.collapseClass"
      :aria-labelledby="`${computedId}-heading`"
      v-bind="collapseAttrs"
      :tag="props.tag"
      :toggle="props.toggle"
      :horizontal="props.horizontal"
      :visible="props.visible"
      :is-nav="props.isNav"
      @show="emit('show', $event)"
      @shown="emit('shown')"
      @hide="emit('hide', $event)"
      @hidden="emit('hidden')"
      @hide-prevented="emit('hide-prevented')"
      @show-prevented="emit('show-prevented')"
    >
      <template #header="{visible: toggleVisible, toggle: slotToggle}">
        <component
          :is="props.headerTag"
          :id="`${computedId}-heading`"
          class="accordion-header"
          :class="props.headerClass"
          v-bind="props.headerAttrs"
        >
          <button
            class="accordion-button"
            v-bind="props.buttonAttrs"
            :class="[{collapsed: !toggleVisible}, props.buttonClass]"
            type="button"
            :aria-expanded="toggleVisible ? 'true' : 'false'"
            :aria-controls="computedId"
            @click="slotToggle"
          >
            <slot name="title"> {{ props.title }} </slot>
          </button>
        </component>
      </template>
      <div class="accordion-body" v-bind="props.bodyAttrs" :class="props.bodyClass">
        <slot />
      </div>
    </BCollapse>
  </div>
</template>

<script setup lang="ts">
import {inject, onMounted, useAttrs, watch} from 'vue'
import BCollapse from '../BCollapse.vue'
import {accordionInjectionKey, BvTriggerableEvent} from '../../utils'
import {useDefaults, useId} from '../../composables'
import type {BAccordionItemProps} from '../../types'

defineOptions({
  inheritAttrs: false,
})
const {class: wrapperClass, ...collapseAttrs} = useAttrs()

const _props = withDefaults(defineProps<BAccordionItemProps>(), {
  bodyAttrs: undefined,
  bodyClass: undefined,
  buttonAttrs: undefined,
  buttonClass: undefined,
  collapseClass: undefined,
  headerAttrs: undefined,
  headerClass: undefined,
  headerTag: 'h2',
  horizontal: undefined,
  id: undefined,
  isNav: undefined,
  tag: undefined,
  title: undefined,
  toggle: undefined,
  visible: false,
  wrapperAttrs: undefined,
})
const props = useDefaults(_props, 'BAccordionItem')

const emit = defineEmits<{
  'hidden': []
  'hide': [value: BvTriggerableEvent]
  'hide-prevented': []
  'show': [value: BvTriggerableEvent]
  'show-prevented': []
  'shown': []
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  title?: (props: Record<string, never>) => any
}>()

const modelValue = defineModel<boolean>({default: false})

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
