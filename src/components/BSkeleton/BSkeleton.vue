<template>
  <div class="b-skeleton" :class="classes" :style="style" />
</template>

<script setup lang="ts">
import {computed, PropType, StyleValue} from 'vue'
import type {SkeletonAnimation, SkeletonType} from '../../types'

const props = defineProps({
  animation: {type: String as PropType<SkeletonAnimation>, default: 'wave'},
  type: {type: String as PropType<SkeletonType>, default: 'text'},
  width: {type: String},
})

const classes = computed(() => [
  `b-skeleton-${props.type}`,
  `b-skeleton-animate-${props.animation}`,
])

const style = computed<StyleValue>(() => ({
  width: props.width,
}))
</script>
