<template>
  <b-placeholder :class="computedClasses" v-bind="computedAttrs" />
</template>

<script setup lang="ts">
import BPlaceholder from './BPlaceholder.vue'
import type {ColorVariant, PlaceholderAnimation} from '../../types'
import {computed} from 'vue'

interface BPlaceholderButtonProps {
  tag?: string
  width?: string | number
  cols?: string | number
  variant?: ColorVariant | null
  animation?: PlaceholderAnimation
}

const props = withDefaults(defineProps<BPlaceholderButtonProps>(), {
  tag: 'div',
  width: undefined,
  cols: undefined,
  animation: undefined,
  variant: 'primary',
})

const computedClasses = computed(() => [
  'btn',
  'disabled',
  {
    [`btn-${props.variant}`]: props.variant !== null,
  },
])

const computedAttrs = computed(() => ({
  animation: props.animation,
  width: props.width,
  cols: props.cols,
  tag: props.tag,
}))
</script>
