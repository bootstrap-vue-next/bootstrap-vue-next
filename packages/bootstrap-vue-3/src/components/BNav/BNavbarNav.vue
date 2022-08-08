<template>
  <ul class="navbar-nav" :class="classes">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import type {Booleanish} from '../../types'
import {computed, toRef} from 'vue'
import {useBooleanish} from '../../composables'

interface Props {
  align?: string
  fill?: Booleanish
  justified?: Booleanish
  small?: Booleanish
  tag?: string
}

const props = withDefaults(defineProps<Props>(), {
  fill: false,
  justified: false,
  small: false,
  tag: 'ul',
})

const fillBoolean = useBooleanish(toRef(props, 'fill'))
const justifiedBoolean = useBooleanish(toRef(props, 'justified'))
const smallBoolean = useBooleanish(toRef(props, 'small'))

const comptuedJustifyContent = computed(() => {
  const value = props.align === 'left' ? 'start' : props.align === 'right' ? 'end' : props.align
  return `justify-content-${value}`
})

const classes = computed(() => ({
  'nav-fill': fillBoolean.value,
  'nav-justified': justifiedBoolean.value,
  [comptuedJustifyContent.value]: props.align !== undefined,
  'small': smallBoolean.value,
}))
</script>
