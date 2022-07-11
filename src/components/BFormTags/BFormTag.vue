<template>
  <component
    :is="tag"
    :id="computedId"
    :title="tagText"
    class="badge b-form-tag d-inline-flex align-items-center mw-100"
    :class="classes"
    :aria-labelledby="taglabelId"
  >
    <span :id="taglabelId" class="b-form-tag-content flex-grow-1 text-truncate">
      <slot>{{ tagText }}</slot>
    </span>
    <button
      v-if="!disabled && !noRemove"
      aria-keyshortcuts="Delete"
      type="button"
      :aria-label="removeLabel"
      class="btn-close b-form-tag-remove"
      :class="{
        'btn-close-white': !['warning', 'info', 'light'].includes(variant),
      }"
      :aria-controls="id"
      :aria-describedby="taglabelId"
      @click="emit('remove', tagText)"
    ></button>
  </component>
</template>

<script setup lang="ts">
// import type {BFormTagEmits, BFormTagProps} from '../../types/components'
import {computed, useSlots, VNodeNormalizedChildren} from 'vue'
import useId from '../../composables/useId'
import type {ColorVariant} from '../../types'

interface BFormTagProps {
  id?: string
  title?: string
  disabled?: boolean
  noRemove?: boolean
  pill?: boolean
  removeLabel?: string
  tag?: string
  variant?: ColorVariant
}

const props = withDefaults(defineProps<BFormTagProps>(), {
  disabled: false,
  noRemove: false,
  pill: false,
  removeLabel: 'Remove tag',
  tag: 'span',
  variant: 'secondary',
})

interface BFormTagEmits {
  (e: 'remove', value?: VNodeNormalizedChildren): void
}

const emit = defineEmits<BFormTagEmits>()

const slots = useSlots()

const tagText = computed<string>(
  () => (slots.default?.()[0].children?.toString() || props.title) ?? ''
)
const computedId = useId(props.id)
const taglabelId = computed<string>(() => `${computedId.value}taglabel__`)

const classes = computed(() => [
  `bg-${props.variant}`,
  {
    'text-dark': ['warning', 'info', 'light'].includes(props.variant),
    'rounded-pill': props.pill,
    'disabled': props.disabled,
  },
])
</script>
