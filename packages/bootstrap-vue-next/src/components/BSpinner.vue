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
import {computed, toRef} from 'vue'
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
    label: undefined,
    role: 'status',
    small: false,
    tag: 'span',
    type: 'border',
    variant: null,
  }
)

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label?: (props: Record<string, never>) => any
}>()

const smallBoolean = useBooleanish(() => props.small)

const computedClasses = computed(() => [
  `spinner-${props.type}`,
  {
    [`spinner-${props.type}-sm`]: smallBoolean.value,
    [`text-${props.variant}`]: props.variant !== null,
  },
])

const hasLabelSlot = toRef(() => !isEmptySlot(slots.label))
</script>
