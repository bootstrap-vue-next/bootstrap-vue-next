<template>
  <b-placeholder :class="computedClasses" v-bind="computedAttrs" />
</template>

<script setup lang="ts">
import BPlaceholder from './BPlaceholder.vue'
import type {ColorVariant, PlaceholderAnimation} from '../../types'
import {computed} from 'vue'

interface Props {
  tag?: string
  width?: string | number
  cols?: string | number
  variant?: ColorVariant
  animation?: PlaceholderAnimation
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'div',
  variant: 'primary',
})

const computedClasses = computed<Array<string>>(() => ['btn', `btn-${props.variant}`, 'disabled'])

const computedAttrs = computed(() => ({
  animation: props.animation,
  width: props.width,
  cols: props.cols,
  tag: props.tag,
}))
</script>
