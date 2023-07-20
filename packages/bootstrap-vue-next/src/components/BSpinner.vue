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
import {computed, useSlots} from 'vue'
import type {Booleanish, ColorVariant, SpinnerType} from '../types'
import {useBooleanish} from '../composables'
import {isEmptySlot} from '../utils'

const props = withDefaults(
  defineProps<{
    label?: string
    role?: string
    small?: Booleanish
    tag?: string
    type?: SpinnerType
    variant?: ColorVariant | null
  }>(),
  {
    role: 'status',
    small: false,
    variant: null,
    label: undefined,
    tag: 'span',
    type: 'border',
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label?: (props: Record<string, never>) => any
}>()

const slots = useSlots()

const smallBoolean = useBooleanish(() => props.small)

const computedClasses = computed(() => ({
  'spinner-border': props.type === 'border',
  'spinner-border-sm': props.type === 'border' && smallBoolean.value,
  'spinner-grow': props.type === 'grow',
  'spinner-grow-sm': props.type === 'grow' && smallBoolean.value,
  [`text-${props.variant}`]: props.variant !== null,
}))

const hasLabelSlot = computed(() => !isEmptySlot(slots.label))
</script>
