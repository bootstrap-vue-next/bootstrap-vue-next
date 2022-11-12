<template>
  <tfoot role="rowgroup" :class="computedClasses">
    <slot />
  </tfoot>
</template>

<script setup lang="ts">
// import type {BTfootProps} from '../../types/components'
import type {BasicColorVariant} from '../../types'
import {computed} from 'vue'

interface BTfootProps {
  variant?: BasicColorVariant
}

const props = defineProps<BTfootProps>()

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== undefined,
}))
</script>
