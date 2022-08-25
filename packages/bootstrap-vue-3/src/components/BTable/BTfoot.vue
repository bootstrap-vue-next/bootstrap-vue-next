<template>
  <tfoot role="rowgroup" :class="classes">
    <slot />
  </tfoot>
</template>

<script setup lang="ts">
// import type {BTfootProps} from '../../types/components'
import type {ColorVariant} from '../../types'
import {computed} from 'vue'

interface BTfootProps {
  variant?: ColorVariant
}

const props = defineProps<BTfootProps>()

const classes = computed(() => ({
  [`table-${props.variant}`]: props.variant !== undefined,
}))
</script>
