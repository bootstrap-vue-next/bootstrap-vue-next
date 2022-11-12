<template>
  <tbody role="rowgroup" :class="computedClasses">
    <slot />
  </tbody>
</template>

<script setup lang="ts">
// import type {BTBodyProps} from '../../types/components'
import type {BasicColorVariant} from '../../types'
import {computed} from 'vue'

interface BTBodyProps {
  variant?: BasicColorVariant
}

const props = defineProps<BTBodyProps>()

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: !!props.variant,
}))
</script>
