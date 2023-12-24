<template>
  <BPlaceholder
    class="btn disabled"
    :class="computedClasses"
    :animation="animation"
    :width="width"
    :cols="cols"
    :tag="tag"
    :style="{'cursor': 'wait', 'pointer-events': 'auto'}"
  />
</template>

<script setup lang="ts">
import BPlaceholder from './BPlaceholder.vue'
import type {ColorVariant, Numberish, PlaceholderAnimation} from '../../types'
import {computed} from 'vue'

const props = withDefaults(
  defineProps<{
    animation?: PlaceholderAnimation
    cols?: Numberish
    tag?: string
    variant?: ColorVariant | null
    width?: Numberish
  }>(),
  {
    animation: undefined,
    cols: undefined,
    tag: 'div',
    variant: 'primary',
    width: undefined,
  }
)

const computedClasses = computed(() => ({
  [`btn-${props.variant}`]: props.variant !== null,
}))
</script>
