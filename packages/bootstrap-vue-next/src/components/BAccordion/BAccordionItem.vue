<template>
  <details
    :id="computedId"
    class="accordion-item"
    :open="isOpen"
    :name="props.name || parentData?.groupName.value"
    v-bind="$attrs"
    @toggle="onToggle"
  >
    <summary class="accordion-header" :class="props.summaryClass" v-bind="props.summaryAttrs">
      <slot name="title">{{ props.title }}</slot>
      <slot name="icon">
        <svg
          class="accordion-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m2 5 6 6 6-6" />
        </svg>
      </slot>
    </summary>
    <div class="accordion-body" :class="props.bodyClass" v-bind="props.bodyAttrs">
      <slot />
    </div>
  </details>
</template>

<script setup lang="ts">
import {computed, inject, watch} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import type {BAccordionItemEmits, BAccordionItemProps, BAccordionItemSlots} from '../../types'
import {accordionInjectionKey} from '../../utils/keys'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<Omit<BAccordionItemProps, 'open'>>(), {
  bodyAttrs: undefined,
  bodyClass: undefined,
  id: undefined,
  name: undefined,
  summaryAttrs: undefined,
  summaryClass: undefined,
  title: undefined,
})
const props = useDefaults(_props, 'BAccordionItem')
const emit = defineEmits<BAccordionItemEmits>()
defineSlots<BAccordionItemSlots>()

const parentData = inject(accordionInjectionKey, null)
const computedId = useId(() => props.id, 'accordion_item')
const open = defineModel<Exclude<BAccordionItemProps['open'], undefined>>('open', {default: false})

if (parentData && open.value) {
  parentData.setItemOpen(computedId.value, true)
}

const isOpen = computed(() => parentData?.isOpen(computedId.value) ?? open.value)

watch(
  () => parentData?.isOpen(computedId.value),
  () => {
    if (parentData) open.value = parentData.isOpen(computedId.value)
  },
  {immediate: true}
)

watch(open, (value) => parentData?.setItemOpen(computedId.value, value))

const onToggle = (event: Event) => {
  const details = event.currentTarget as HTMLDetailsElement
  open.value = details.open
  parentData?.setItemOpen(computedId.value, details.open)
  emit('toggle', event)
}
</script>
