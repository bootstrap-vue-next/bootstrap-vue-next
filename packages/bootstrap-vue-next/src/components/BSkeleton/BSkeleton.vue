<template>
  <div class="b-skeleton" :class="computedClasses" :style="style" />
</template>

<script setup lang="ts">
// import type {BSkeletonProps} from '../../types/components'
import {computed, type StyleValue} from 'vue'
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

const computedClasses = computed(() => [
  `b-skeleton-${props.type}`,
  {
    [`b-skeleton-animate-${props.animation}`]:
      typeof props.animation === 'boolean' ? false : props.animation,
    [`bg-${props.variant}`]: props.variant !== undefined,
  },
])

const style = computed<StyleValue>(() => ({
  width: props.size || props.width,
  height: props.size || props.height,
}))
</script>
