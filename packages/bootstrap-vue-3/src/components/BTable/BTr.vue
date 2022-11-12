<template>
  <tr role="row" :class="computedClasses">
    <slot />
  </tr>
</template>

<script setup lang="ts">
// import type {BTrProps} from '../../types/components'
import type {BasicColorVariant} from '../../types'
import {computed} from 'vue'

interface BTrProps {
  variant?: BasicColorVariant
}

const props = defineProps<BTrProps>()

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== undefined,
}))
</script>
