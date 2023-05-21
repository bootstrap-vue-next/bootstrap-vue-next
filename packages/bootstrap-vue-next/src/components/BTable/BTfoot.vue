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

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== null,
}))
</script>
