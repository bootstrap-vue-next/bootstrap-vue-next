<template>
  <tfoot :class="computedClasses">
    <slot />
  </tfoot>
</template>

<script setup lang="ts">
import type {ColorVariant} from '../../types'
import {computed} from 'vue'

interface BTfootProps {
  variant?: ColorVariant | null
}

const props = withDefaults(defineProps<BTfootProps>(), {
  variant: null,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== null,
}))
</script>
