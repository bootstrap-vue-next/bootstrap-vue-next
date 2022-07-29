<template>
  <div
    class="b-skeleton-icon-wrapper position-relative d-inline-block overflow-hidden"
    :class="classes"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
// import type {BSkeletonIconProps} from '../../types/components'
import {computed} from 'vue'
import type {SkeletonAnimation} from '../../types'

interface BSkeletonIconProps {
  animation?: SkeletonAnimation
}

const props = withDefaults(defineProps<BSkeletonIconProps>(), {
  animation: 'wave',
})

const classes = computed(() => [`b-skeleton-animate-${props.animation}`])
</script>
