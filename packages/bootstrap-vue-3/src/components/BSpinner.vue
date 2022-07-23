<template>
  <component
    :is="tag"
    :class="classes"
    :role="label || $slots.label ? role : null"
    :aria-hidden="label || $slots.label ? null : true"
  >
    <span v-if="label || $slots.label" class="visually-hidden">
      <slot name="label">{{ label }}</slot>
    </span>
  </component>
</template>

<script setup lang="ts">
// import type {BSpinnerProps} from '../types/components'
import {computed} from 'vue'
import type {ColorVariant, SpinnerType} from '../types'

interface BSpinnerProps {
  label?: string
  role?: string
  small?: boolean
  tag?: string
  type?: SpinnerType
  variant?: ColorVariant
}

const props = withDefaults(defineProps<BSpinnerProps>(), {
  role: 'status',
  small: false,
  tag: 'span',
  type: 'border',
})

const classes = computed(() => ({
  'spinner-border': props.type === 'border',
  'spinner-border-sm': props.type === 'border' && props.small,
  'spinner-grow': props.type === 'grow',
  'spinner-grow-sm': props.type === 'grow' && props.small,
  [`text-${props.variant}`]: !!props.variant,
}))
</script>
