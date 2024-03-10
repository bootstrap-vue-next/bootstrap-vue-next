<template>
  <tbody :class="computedClasses">
    <slot />
  </tbody>
</template>

<script setup lang="ts">
import type {BTbodyProps} from '../../types'
import {computed} from 'vue'

const props = withDefaults(defineProps<BTbodyProps>(), {
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
