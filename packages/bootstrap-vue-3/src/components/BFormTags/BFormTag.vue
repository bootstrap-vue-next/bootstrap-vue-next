<template>
  <component
    :is="tag"
    :id="computedId"
    :title="tagText"
    class="badge b-form-tag d-inline-flex align-items-center mw-100"
    :class="computedClasses"
    :aria-labelledby="taglabelId"
  >
    <span :id="taglabelId" class="b-form-tag-content flex-grow-1 text-truncate">
      <slot>{{ tagText }}</slot>
    </span>
    <b-close-button
      v-if="!disabledBoolean && !noRemoveBoolean"
      aria-keyshortcuts="Delete"
      :aria-label="removeLabel"
      class="b-form-tag-remove"
      :white="!['warning', 'info', 'light'].includes(variant)"
      :aria-describedby="taglabelId"
      :aria-controls="id"
      @click="emit('remove', tagText)"
    />
  </component>
</template>

<script setup lang="ts">
// import type {BFormTagEmits, BFormTagProps} from '../../types/components'
import {computed, toRef, useSlots, VNodeNormalizedChildren} from 'vue'
import {useBooleanish, useId} from '../../composables'
import type {Booleanish, ColorVariant} from '../../types'
import BCloseButton from '../BButton/BCloseButton.vue'

interface BFormTagProps {
  id?: string
  title?: string
  disabled?: Booleanish
  noRemove?: Booleanish
  pill?: Booleanish
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

const computedId = useId(toRef(props, 'id'))

const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
const noRemoveBoolean = useBooleanish(toRef(props, 'noRemove'))
const pillBoolean = useBooleanish(toRef(props, 'pill'))

const tagText = computed<string>(
  () => ((slots.default?.()[0].children ?? '').toString() || props.title) ?? ''
)

const taglabelId = computed<string>(() => `${computedId.value}taglabel__`)

const computedClasses = computed(() => [
  `bg-${props.variant}`,
  {
    'text-dark': ['warning', 'info', 'light'].includes(props.variant),
    'rounded-pill': pillBoolean.value,
    'disabled': disabledBoolean.value,
  },
])
</script>
