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
import {computed, type CSSProperties, toRef} from 'vue'
import type {ColorVariant, PlaceholderAnimation, PlaceholderSize} from '../../types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    animation?: PlaceholderAnimation
    cols?: string | number
    size?: PlaceholderSize
    tag?: string
    variant?: ColorVariant | null
    width?: string | number
    wrapperTag?: string
  }>(),
  {
    animation: undefined,
    cols: 12,
    size: 'md',
    tag: 'span',
    variant: null,
    width: undefined,
    wrapperTag: 'span',
  }
)

const widthString = toRef(() =>
  props.width === undefined
    ? undefined
    : typeof props.width === 'number'
    ? props.width.toString()
    : props.width.replace('%', '')
)

const colsString = toRef(() =>
  props.cols === undefined
    ? undefined
    : typeof props.cols === 'number'
    ? props.cols.toString()
    : props.cols
)

const computedClasses = computed(() => ({
  [`col-${colsString.value}`]: colsString.value !== undefined && widthString.value === undefined,
  [`bg-${props.variant}`]: props.variant !== null,
  [`placeholder-${props.size}`]: props.size !== 'md',
}))

const wrapperClasses = computed(() => ({
  [`placeholder-${props.animation}`]: props.animation !== undefined,
}))

const computedStyle = computed<CSSProperties>(() => ({
  width: widthString.value === undefined ? undefined : `${widthString.value}%`,
}))
</script>
