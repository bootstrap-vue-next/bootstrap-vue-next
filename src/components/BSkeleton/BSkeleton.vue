<template>
  <div class="b-skeleton" :class="classes" :style="style" />
</template>

<script setup lang="ts">
import {computed, PropType, StyleValue} from 'vue'
import type {ColorVariant, SkeletonAnimation, SkeletonType} from '../../types'

const props = defineProps({
  animation: {type: String as PropType<SkeletonAnimation>, default: 'wave'},
  height: {type: String},
  size: {type: String},
  type: {type: String as PropType<SkeletonType>, default: 'text'},
  variant: {type: String as PropType<ColorVariant>},
  width: {type: String},
})

const classes = computed(() => [
  `b-skeleton-${props.type}`,
  `b-skeleton-animate-${props.animation}`,
  {
    [`bg-${props.variant}`]: props.variant,
  },
])

const style = computed<StyleValue>(() => ({
  width: props.size || props.width,
  height: props.size || props.height,
}))
</script>
