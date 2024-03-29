<template>
  <div :id="computedId" class="accordion" :class="computedClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import {computed, provide, readonly, toRef} from 'vue'
import {accordionInjectionKey} from '../../utils'
import {useId} from '../../composables'
import {useVModel} from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    flush?: boolean
    free?: boolean
    id?: string
    modelValue?: string
  }>(),
  {
    flush: false,
    free: false,
    id: undefined,
    modelValue: undefined,
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const computedId = useId(() => props.id, 'accordion')

const computedClasses = computed(() => ({
  'accordion-flush': props.flush,
}))

provide(accordionInjectionKey, {
  openItem: readonly(modelValue),
  free: toRef(() => props.free),
  setOpenItem: (id: string) => {
    modelValue.value = id
  },
})
</script>
