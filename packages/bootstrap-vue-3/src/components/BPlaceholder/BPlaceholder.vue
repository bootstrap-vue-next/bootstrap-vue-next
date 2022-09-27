<template>
  <component :is="tag" class="placeholder" :class="classes" />
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {ColorVariant} from '../../types'

interface Props {
  tag?: string
  width?: string | number
  cols?: string | number
  variant?: ColorVariant
  size?: 'xs' | 'sm' | 'lg'
  animation?: 'glow' | 'wave'
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
})

/**
 * Converts numbers, strings, or strings in percent to a string
 * ex 100% => 100 for w-100
 */
const filterer = (str: string | number | undefined): string | undefined =>
  str === undefined
    ? undefined
    : typeof str === 'string'
    ? str.indexOf('%') === -1
      ? str
      : str.replaceAll('%', '')
    : str.toString()

const colsString = computed<string | undefined>(() => filterer(props.cols))

const widthString = computed<string | undefined>(() => filterer(props.width))

const classes = computed(() => ({
  [`col-${colsString.value}`]: colsString.value !== undefined,
  [`w-${widthString.value}`]: colsString.value === undefined && widthString.value !== undefined,
  [`bg-${props.variant}`]: props.variant !== undefined,
  [`placeholder-${props.size}`]: props.size !== undefined,
  [`placeholder-${props.animation}`]: props.animation !== undefined,
}))
</script>
