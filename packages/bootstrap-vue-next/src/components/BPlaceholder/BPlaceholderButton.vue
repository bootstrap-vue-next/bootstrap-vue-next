<template>
  <BPlaceholder
    class="btn disabled"
    :class="computedClasses"
    :animation="props.animation"
    :width="props.width"
    :cols="props.cols"
    :tag="props.tag"
    :style="{'cursor': 'wait', 'pointer-events': 'auto'}"
  />
</template>

<script setup lang="ts">
import BPlaceholder from './BPlaceholder.vue'
import type {BPlaceholderButtonProps} from '../../types'
import {computed} from 'vue'
import {useDefaults} from '../../composables'

const _props = withDefaults(defineProps<BPlaceholderButtonProps>(), {
  animation: undefined,
  cols: undefined,
  tag: 'div',
  variant: 'primary',
  width: undefined,
})
const props = useDefaults(_props, 'BPlaceholderButton')

const computedClasses = computed(() => ({
  [`btn-${props.variant}`]: props.variant !== null,
}))
</script>
