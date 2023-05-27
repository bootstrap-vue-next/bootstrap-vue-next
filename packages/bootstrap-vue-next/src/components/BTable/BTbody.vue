<template>
  <tbody :class="computedClasses">
    <slot />
  </tbody>
</template>

<script setup lang="ts">
import type {ColorVariant} from '../../types'
import {computed} from 'vue'

interface BTBodyProps {
  variant?: ColorVariant | null
}

const props = withDefaults(defineProps<BTBodyProps>(), {
  variant: null,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => ({
  [`thead-${props.variant}`]: props.variant !== null,
}))
</script>
