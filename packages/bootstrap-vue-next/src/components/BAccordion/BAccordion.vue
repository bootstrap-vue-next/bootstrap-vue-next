<template>
  <div :id="computedId" class="accordion" :class="computedClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type {Booleanish} from '../../types'
import {computed, provide, readonly, toRef} from 'vue'
import {accordionInjectionKey} from '../../utils'
import {useBooleanish, useId} from '../../composables'
import {useVModel} from '@vueuse/core'

interface BAccordionProps {
  flush?: Booleanish
  free?: Booleanish
  id?: string
  modelValue?: string
}

const props = withDefaults(defineProps<BAccordionProps>(), {
  flush: false,
  free: false,
  id: undefined,
})

const emit = defineEmits<(e: 'update:modelValue', value: string) => void>()

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const computedId = useId(toRef(props, 'id'), 'accordion')

const flushBoolean = useBooleanish(toRef(props, 'flush'))
const freeBoolean = useBooleanish(toRef(props, 'free'))

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
