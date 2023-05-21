<template>
  <thead :class="computedClasses">
    <slot />
  </thead>
</template>

<script setup lang="ts">
import type {ColorVariant} from '../../types'
import {computed} from 'vue'

interface BTheadProps {
  variant?: ColorVariant | null
}

const props = withDefaults(defineProps<BTheadProps>(), {
  variant: null,
})

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== null,
}))
</script>
