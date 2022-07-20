<template>
  <div class="b-skeleton" :class="classes" :style="style" />
</template>

<script setup lang="ts">
// import type {BSkeletonProps} from '../../types/components'
import {computed, StyleValue} from 'vue'
import type {ColorVariant, SkeletonAnimation, SkeletonType} from '../../types'

interface BSkeletonProps {
  height?: string
  width?: string
  size?: string
  animation?: SkeletonAnimation
  type?: SkeletonType
  variant?: ColorVariant
}

const props = withDefaults(defineProps<BSkeletonProps>(), {
  animation: 'wave',
  type: 'text',
})

const classes = computed(() => [
  `b-skeleton-${props.type}`,
  {
    [`b-skeleton-animate-${props.animation}`]:
      typeof props.animation === 'boolean' ? undefined : props.animation,
    [`bg-${props.variant}`]: props.variant,
  },
])

const style = computed<StyleValue>(() => ({
  width: props.size || props.width,
  height: props.size || props.height,
}))
</script>
