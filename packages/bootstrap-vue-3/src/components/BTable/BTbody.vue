<template>
  <tbody role="rowgroup" :class="classes">
    <slot />
  </tbody>
</template>

<script setup lang="ts">
// import type {BTBodyProps} from '../../types/components'
import {computed} from 'vue'

interface BTBodyProps {
  headVariant?: boolean
}

const props = withDefaults(defineProps<BTBodyProps>(), {
  headVariant: false,
})

const classes = computed(() => ({
  [`thead-${props.headVariant}`]: props.headVariant,
}))
</script>
