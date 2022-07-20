<template>
  <tfoot role="rowgroup" :class="classes">
    <slot />
  </tfoot>
</template>

<script setup lang="ts">
// import type {BTfootProps} from '../../types/components'
import {computed} from 'vue'

interface BTfootProps {
  footVariant?: string
}

const props = defineProps<BTfootProps>()

const classes = computed(() => ({
  [`table-${props.footVariant}`]: props.footVariant,
}))
</script>
