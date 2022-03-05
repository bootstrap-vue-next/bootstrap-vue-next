<template>
  <div
    class="b-skeleton-icon-wrapper position-relative d-inline-block overflow-hidden"
    :class="classes"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import {computed, PropType} from 'vue'
import type {SkeletonAnimation} from '../../types'

const props = defineProps({
  animation: {type: String as PropType<SkeletonAnimation>, default: 'wave'},
})

const classes = computed(() => [`b-skeleton-animate-${props.animation}`])
</script>
