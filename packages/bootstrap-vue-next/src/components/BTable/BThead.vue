<template>
  <thead role="rowgroup" :class="computedClasses">
    <slot />
  </thead>
</template>

<script setup lang="ts">
// import type {BTheadProps} from '../../types/components'
import type {ColorVariant} from '../../types'
import {computed} from 'vue'

interface BTheadProps {
  variant?: ColorVariant
}

const props = defineProps<BTheadProps>()

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== undefined,
}))
</script>
