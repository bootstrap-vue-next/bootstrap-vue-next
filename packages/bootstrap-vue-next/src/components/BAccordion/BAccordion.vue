<template>
  <div :id="computedId" class="accordion" :class="computedClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type {Booleanish} from '../../types'
import {computed, provide, readonly} from 'vue'
import {accordionInjectionKey} from '../../utils'
import {useBooleanish, useId} from '../../composables'
import {useVModel} from '@vueuse/core'

interface BAccordionProps {
  flush?: Booleanish
  free?: Booleanish
  id?: string
  modelValue?: string
}

interface BAccordionEmits {
  (e: 'update:modelValue', value: string): void
}

const props = withDefaults(defineProps<BAccordionProps>(), {
  flush: false,
  free: false,
  id: undefined,
  modelValue: undefined,
})

const emit = defineEmits<BAccordionEmits>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const computedId = useId(() => props.id, 'accordion')

const flushBoolean = useBooleanish(() => props.flush)
const freeBoolean = useBooleanish(() => props.free)

const computedClasses = computed(() => ({
  'accordion-flush': flushBoolean.value,
}))

provide(accordionInjectionKey, {
  openItem: readonly(modelValue),
  free: freeBoolean,
  setOpenItem: (id: string) => {
    modelValue.value = id
  },
})
</script>
