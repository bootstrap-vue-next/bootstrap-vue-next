<template>
  <tfoot :class="computedClasses">
    <slot />
  </tfoot>
</template>

<script setup lang="ts">
import type {ColorVariant} from '../../types'
import {computed} from 'vue'

interface BTfootProps {
  variant?: ColorVariant
}

const props = defineProps<BTfootProps>()

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== undefined,
}))
</script>
