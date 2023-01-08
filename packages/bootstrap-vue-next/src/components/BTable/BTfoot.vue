<template>
  <tfoot role="rowgroup" :class="computedClasses">
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

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== undefined,
}))
</script>
