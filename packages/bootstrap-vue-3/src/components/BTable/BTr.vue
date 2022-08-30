<template>
  <tr role="row" :class="classes">
    <slot />
  </tr>
</template>

<script setup lang="ts">
// import type {BTrProps} from '../../types/components'
import type {ColorVariant} from '../../types'
import {computed} from 'vue'

interface BTrProps {
  variant?: ColorVariant
}

const props = defineProps<BTrProps>()

const classes = computed(() => ({
  [`table-${props.variant}`]: props.variant !== undefined,
}))
</script>
