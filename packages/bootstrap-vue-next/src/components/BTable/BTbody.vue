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

const computedClasses = computed(() => ({
  [`thead-${props.variant}`]: props.variant !== null,
}))
</script>
