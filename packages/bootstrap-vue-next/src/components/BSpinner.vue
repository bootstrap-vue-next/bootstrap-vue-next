<template>
  <component
    :is="tag"
    :class="computedClasses"
    :role="label || hasLabelSlot ? role : null"
    :aria-hidden="label || hasLabelSlot ? null : true"
  >
    <span v-if="label || hasLabelSlot" class="visually-hidden">
      <slot name="label">{{ label }}</slot>
    </span>
  </component>
</template>

<script setup lang="ts">
// import type {BSpinnerProps} from '../types/components'
import {computed, toRef, useSlots} from 'vue'
import type {Booleanish, ColorVariant, SpinnerType} from '../types'
import {useBooleanish} from '../composables'
import {isEmptySlot} from '../utils'

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

const slots = useSlots()

const smallBoolean = useBooleanish(toRef(props, 'small'))

const computedClasses = computed(() => ({
  'spinner-border': props.type === 'border',
  'spinner-border-sm': props.type === 'border' && smallBoolean.value,
  'spinner-grow': props.type === 'grow',
  'spinner-grow-sm': props.type === 'grow' && smallBoolean.value,
  [`text-${props.variant}`]: props.variant !== undefined,
}))

const hasLabelSlot = computed<boolean>(() => !isEmptySlot(slots.label))
</script>
