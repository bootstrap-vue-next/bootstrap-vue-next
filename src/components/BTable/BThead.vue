<template>
  <thead role="rowgroup" :class="classes">
    <slot />
  </thead>
</template>

<script setup lang="ts">
// import type {BTheadProps} from '../../types/components'
import {computed} from 'vue'

interface BTheadProps {
  headVariant?: string
}

const props = defineProps<BTheadProps>()

const classes = computed(() => ({
  [`table-${props.headVariant}`]: props.headVariant,
}))
</script>
