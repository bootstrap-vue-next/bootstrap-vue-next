<template>
  <ul class="navbar-nav" :class="classes">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import type {Booleanish} from '../../types'
import {computed} from 'vue'
import {resolveBooleanish} from '../../utils'

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

const fillBoolean = computed(() => resolveBooleanish(props.fill))
const justifiedBoolean = computed(() => resolveBooleanish(props.justified))
const smallBoolean = computed(() => resolveBooleanish(props.small))

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
