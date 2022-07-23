<template>
  <tr role="row" :class="classes">
    <slot />
  </tr>
</template>

<script setup lang="ts">
// import type {BTrProps} from '../../types/components'
import {computed} from 'vue'

interface BTrProps {
  variant?: string
}

const props = defineProps<BTrProps>()

const classes = computed(() => ({
  [`table-${props.variant}`]: props.variant,
}))
</script>
