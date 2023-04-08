<template>
  <component :is="wrapperTag" :class="wrapperClasses">
    <component
      v-bind="$attrs"
      :is="tag"
      class="placeholder"
      :class="computedClasses"
      :style="computedStyle"
    />
  </component>
</template>

<script setup lang="ts">
import {computed, type CSSProperties} from 'vue'
import type {ColorVariant, PlaceholderAnimation, PlaceholderSize} from '../../types'

interface Props {
  tag?: string
  wrapperTag?: string
  width?: string | number
  cols?: string | number
  variant?: ColorVariant
  size?: PlaceholderSize
  animation?: PlaceholderAnimation
}

const props = withDefaults(defineProps<Props>(), {
  variant: undefined,
  size: undefined,
  animation: undefined,
  width: undefined,
  tag: 'span',
  wrapperTag: 'span',
  cols: 12,
})

const widthString = computed<string | undefined>(() =>
  props.width === undefined
    ? undefined
    : typeof props.width === 'number'
    ? props.width.toString()
    : props.width.replace('%', '')
)

const colsString = computed<string | undefined>(() =>
  props.cols === undefined
    ? undefined
    : typeof props.cols === 'number'
    ? props.cols.toString()
    : props.cols
)

const computedClasses = computed(() => ({
  [`col-${colsString.value}`]: colsString.value !== undefined && widthString.value === undefined,
  [`bg-${props.variant}`]: props.variant !== undefined,
  [`placeholder-${props.size}`]: props.size !== undefined,
}))

const wrapperClasses = computed(() => ({
  [`placeholder-${props.animation}`]: props.animation !== undefined,
}))

const computedStyle = computed<CSSProperties>(() => ({
  width: widthString.value === undefined ? undefined : `${widthString.value}%`,
}))
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
