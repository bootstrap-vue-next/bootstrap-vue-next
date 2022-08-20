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
import {computed, toRef} from 'vue'
import type {Booleanish, ColorVariant, SpinnerType} from '../types'
import {useBooleanish} from '../composables'

interface BSpinnerProps {
  label?: string
  role?: string
  small?: Booleanish
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

const smallBoolean = useBooleanish(toRef(props, 'small'))

const classes = computed(() => ({
  'spinner-border': props.type === 'border',
  'spinner-border-sm': props.type === 'border' && smallBoolean.value,
  'spinner-grow': props.type === 'grow',
  'spinner-grow-sm': props.type === 'grow' && smallBoolean.value,
  [`text-${props.variant}`]: props.variant !== undefined,
}))
</script>
