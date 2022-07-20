<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {DVariant} from '../types'

interface BDProps {
  variant?: DVariant
  gap?: string
}

const props = withDefaults(defineProps<BDProps>(), {
  variant: 'grid',
})

const classes = computed(() => ({
  [`d-${props.variant}`]: props.variant,
  [`gap-${props.gap}`]: props.gap,
}))
</script>
