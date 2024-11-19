<template>
  <form :id="props.id" ref="element" :novalidate="props.novalidate" :class="computedClasses">
    <slot />
  </form>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables/useDefaults'
import type {BFormProps} from '../../types/ComponentProps'
import {computed, useTemplateRef} from 'vue'

const _props = withDefaults(defineProps<BFormProps>(), {
  id: undefined,
  floating: false,
  novalidate: false,
  validated: false,
})
const props = useDefaults(_props, 'BForm')

const element = useTemplateRef<HTMLElement>('element')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => ({
  'form-floating': props.floating,
  'was-validated': props.validated,
}))

defineExpose({
  element,
})
</script>
