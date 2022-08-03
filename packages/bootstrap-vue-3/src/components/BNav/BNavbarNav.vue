<template>
  <ul class="navbar-nav" :class="classes">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import {computed} from 'vue'

interface Props {
  align?: string
  fill?: boolean
  justified?: boolean
  small?: boolean
  tag?: string
}

const props = withDefaults(defineProps<Props>(), {
  fill: false,
  justified: false,
  small: false,
  tag: 'ul',
})

const comptuedJustifyContent = computed(() => {
  const value = props.align === 'left' ? 'start' : props.align === 'right' ? 'end' : props.align
  return `justify-content-${value}`
})

const classes = computed(() => ({
  'nav-fill': props.fill,
  'nav-justified': props.justified,
  [comptuedJustifyContent.value]: props.align !== undefined,
  'small': props.small,
}))
</script>
