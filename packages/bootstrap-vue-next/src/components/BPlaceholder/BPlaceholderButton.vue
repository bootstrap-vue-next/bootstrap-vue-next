<template>
  <BPlaceholder class="btn disabled" :class="computedClasses" v-bind="computedAttrs" />
</template>

<script setup lang="ts">
import BPlaceholder from './BPlaceholder.vue'
import type {ColorVariant, PlaceholderAnimation} from '../../types'
import {computed} from 'vue'

const props = withDefaults(
  defineProps<{
    tag?: string
    width?: string | number
    cols?: string | number
    variant?: ColorVariant | null
    animation?: PlaceholderAnimation
  }>(),
  {
    tag: 'div',
    width: undefined,
    cols: undefined,
    animation: undefined,
    variant: 'primary',
  }
)

const computedClasses = computed(() => ({
  [`btn-${props.variant}`]: props.variant !== null,
}))

const computedAttrs = computed(() => ({
  animation: props.animation,
  width: props.width,
  cols: props.cols,
  tag: props.tag,
}))
</script>
